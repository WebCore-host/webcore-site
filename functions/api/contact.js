export async function onRequestPost(context) {
  try {
    const formData = await context.request.json();

    // Map plan values to readable labels
    const planLabels = {
      essential: "Essential Plan ($59/mo)",
      growth: "Growth Plan ($69/mo)",
      not_sure: "Not Sure Yet"
    };

    // Build Mailgun form payload
    const body = new URLSearchParams();
    body.append('from', 'WebCore Contact <mailgun@webcoreco.com>');
    body.append('to', 'webcore112@gmail.com');
    body.append('h:Reply-To', formData.email);
    body.append('subject', `New Lead: ${formData.business} - ${planLabels[formData.plan] || formData.plan}`);
    body.append('html', `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
            line-height: 1.6;
            color: #0f172a;
            margin: 0;
            padding: 0;
          }
          .container {
            max-width: 600px;
            margin: 0 auto;
          }
          .header {
            background: linear-gradient(135deg, #06b6d4 0%, #a855f7 100%);
            color: white;
            padding: 40px 30px;
            text-align: center;
          }
          .header h1 {
            margin: 0;
            font-size: 32px;
            font-weight: 900;
          }
          .content {
            background: #f8fafc;
            padding: 40px 30px;
          }
          .field {
            margin-bottom: 24px;
            background: white;
            padding: 20px;
            border-radius: 12px;
            border-left: 4px solid #06b6d4;
          }
          .label {
            font-weight: 900;
            color: #0f172a;
            font-size: 10px;
            text-transform: uppercase;
            letter-spacing: 1.5px;
            margin-bottom: 8px;
          }
          .value {
            color: #334155;
            font-size: 16px;
            font-weight: 500;
          }
          .plan-badge {
            display: inline-block;
            background: linear-gradient(135deg, #06b6d4 0%, #a855f7 100%);
            color: white;
            padding: 8px 16px;
            border-radius: 8px;
            font-weight: 900;
            font-size: 14px;
          }
          .footer {
            text-align: center;
            padding: 20px;
            color: #64748b;
            font-size: 14px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>New Contact Form Submission</h1>
          </div>

          <div class="content">
            <div class="field">
              <div class="label">Full Name</div>
              <div class="value">${formData.name}</div>
            </div>

            <div class="field">
              <div class="label">Business Name</div>
              <div class="value">${formData.business}</div>
            </div>

            <div class="field">
              <div class="label">Email Address</div>
              <div class="value">${formData.email}</div>
            </div>

            <div class="field">
              <div class="label">Phone Number</div>
              <div class="value">${formData.phone}</div>
            </div>

            <div class="field">
              <div class="label">Interested Plan</div>
              <div class="value">
                <span class="plan-badge">${planLabels[formData.plan] || formData.plan}</span>
              </div>
            </div>

            <div class="field">
              <div class="label">Project Goals</div>
              <div class="value">${formData.message}</div>
            </div>
          </div>

          <div class="footer">
            Submitted from webcoreco.com on ${new Date().toLocaleString('en-US', {
              dateStyle: 'full',
              timeStyle: 'short',
              timeZone: 'America/Chicago'
            })}
          </div>
        </div>
      </body>
      </html>
    `);

    // Send via Mailgun HTTP API (works in Cloudflare Workers)
    const response = await fetch('https://api.mailgun.net/v3/webcoreco.com/messages', {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${btoa('api:' + context.env.MAILGUN_API_KEY)}`,
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: body.toString()
    });

    if (!response.ok) {
      const error = await response.text();
      console.error('Mailgun API Error:', error);
      throw new Error(error || 'Failed to send email');
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    });

  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(
      JSON.stringify({
        success: false,
        error: error.message
      }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      }
    );
  }
}

// Handle CORS preflight
export async function onRequestOptions() {
  return new Response(null, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    }
  });
}
