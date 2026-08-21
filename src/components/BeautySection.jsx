import React from 'react';
import { Sparkles, Calendar } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export default function BeautySection({ onSelectService }) {
  return (
    <section id="beauty" className="section-padding beauty-section">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <span className="section-label" style={{ color: '#9A7B1C' }}>EXPERT BEAUTY STUDIO</span>
          <h2 className="section-title" style={{ color: '#121418' }}>Beauty & Bridal Services</h2>
          <p style={{ color: '#55525B', maxWidth: '650px', margin: '0 auto' }}>
            Enhance your special day with professional beauty services designed to make you feel confident, elegant and beautiful. Powered by 10+ years of beauty expertise.
          </p>
        </div>

        <div className="beauty-cards-grid">
          {siteConfig.beautyServices.map((beauty, idx) => (
            <div key={idx} className="beauty-card">
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '1rem' }}>
                <Sparkles size={22} style={{ color: '#D4AF37' }} />
                <h3 style={{ fontSize: '1.25rem', fontFamily: 'var(--font-serif)', color: '#121418' }}>
                  {beauty.title}
                </h3>
              </div>
              <p style={{ fontSize: '0.9rem', color: '#55525B', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                {beauty.desc}
              </p>
              <button
                className="btn btn-outline-gold"
                style={{ width: '100%', borderColor: '#D4AF37', color: '#121418' }}
                onClick={() => onSelectService(beauty.title)}
              >
                <Calendar size={16} />
                <span>Enquire About {beauty.title}</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
