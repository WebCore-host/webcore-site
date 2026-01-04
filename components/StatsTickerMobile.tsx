
import React from 'react';

const stats = [
  {
    value: "97%",
    label: "Customers say a website influences their purchasing decisions",
    source: "Source: BusinessDasher"
  },
  {
    value: "84%",
    label: "Consumers trust a business more if it has a professional website",
    source: "Source: BusinessDasher"
  },
  {
    value: "76%",
    label: "Consumers search for a company’s website before visiting in person",
    source: "Source: Big Fish Local"
  },
  {
    value: "81%",
    label: "Shoppers research online before making a purchase",
    source: "Source: Big Fish Local"
  },
  {
    value: "15–50%",
    label: "Potential revenue growth for small businesses with a website",
    source: "Source: BusinessDasher"
  }
];

const StatsTickerMobile: React.FC = () => {
  // Triple the list to ensure seamless transition on large screens or fast speeds
  const tickerItems = [...stats, ...stats, ...stats];

  return (
    <div 
      style={{
        width: '100%',
        backgroundColor: '#f8fafc',
        borderBottom: '1px solid #e2e8f0',
        overflow: 'hidden',
        position: 'relative',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif'
      }}
    >
      <style>
        {`
          @keyframes ticker-l-to-r {
            0% { transform: translate3d(-33.333%, 0, 0); }
            100% { transform: translate3d(0, 0, 0); }
          }
          .ticker-track {
            display: flex;
            width: fit-content;
            will-change: transform;
            animation: ticker-l-to-r 40s linear infinite;
          }
          .ticker-card {
            flex-shrink: 0;
            padding: 1rem 2rem;
            min-width: 280px;
            border-right: 1px solid #f1f5f9;
            display: flex;
            flex-direction: column;
            justify-content: center;
          }
          @media (min-width: 768px) {
            .ticker-card {
              min-width: 350px;
              padding: 1.5rem 3rem;
            }
          }
        `}
      </style>
      
      <div className="ticker-track">
        {tickerItems.map((stat, idx) => (
          <div key={idx} className="ticker-card">
            <span 
              style={{
                fontSize: '1.875rem',
                fontWeight: '800',
                color: '#0f172a',
                lineHeight: '1.2',
                display: 'block'
              }}
            >
              {stat.value}
            </span>
            <span 
              style={{
                fontSize: '0.875rem',
                fontWeight: '600',
                color: '#475569',
                display: 'block',
                margin: '0.25rem 0',
                whiteSpace: 'nowrap'
              }}
            >
              {stat.label}
            </span>
            <span 
              style={{
                fontSize: '0.75rem',
                fontWeight: '400',
                color: '#94a3b8',
                display: 'block'
              }}
            >
              {stat.source}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsTickerMobile;
