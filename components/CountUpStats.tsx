
import React, { useEffect, useState, useRef } from 'react';

const CountUpStat: React.FC<{ 
  end: number; 
  duration?: number; 
  suffix?: string;
  manualStart?: boolean;
}> = ({ 
  end, 
  duration = 2000, 
  suffix = '',
  manualStart
}) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // If manualStart is explicitly passed (true or false), we let the parent control visibility.
    // This is used for the desktop simultaneous animation.
    if (manualStart !== undefined) {
      if (manualStart) setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [isVisible, manualStart]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, [isVisible, end, duration]);

  return <div ref={ref}>{count}{suffix}</div>;
};

export default CountUpStat;
