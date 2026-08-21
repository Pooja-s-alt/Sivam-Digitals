import React, { useState, useEffect, useRef } from 'react';
import { siteConfig } from '../config/siteConfig';

export default function TrustStats() {
  const [counts, setCounts] = useState(siteConfig.stats.map(() => 0));
  const sectionRef = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          siteConfig.stats.forEach((stat, index) => {
            const duration = 2000;
            const steps = 40;
            const stepTime = duration / steps;
            const increment = stat.number / steps;
            let current = 0;
            
            const timer = setInterval(() => {
              current += increment;
              if (current >= stat.number) {
                current = stat.number;
                clearInterval(timer);
              }
              setCounts((prev) => {
                const next = [...prev];
                next[index] = Math.floor(current);
                return next;
              });
            }, stepTime);
          });
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  return (
    <section ref={sectionRef} className="trust-stats-section">
      <div className="container">
        <div className="stats-grid">
          {siteConfig.stats.map((stat, idx) => (
            <div key={idx} className="stat-item">
              <div className="stat-number">
                {counts[idx]}
                {stat.suffix}
              </div>
              <div className="stat-label">{stat.label}</div>
              <div className="stat-desc">{stat.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
