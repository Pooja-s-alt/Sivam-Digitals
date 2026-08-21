import React from 'react';
import { Gift, ArrowRight } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export default function CustomizedGifts({ onSelectService }) {
  return (
    <section id="gifts" className="section-padding gifts-section">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <span className="section-label">MEMORIES INTO GIFTS</span>
          <h2 className="section-title">Make Every Gift Personal</h2>
          <p className="section-subtitle">
            Turn special memories into meaningful gifts. We create customized gifts that are perfect for weddings, anniversaries, birthdays, celebrations and special occasions.
          </p>
        </div>

        <div className="gifts-grid">
          {siteConfig.customizedGiftsList.map((gift, idx) => (
            <div key={idx} className="gift-card">
              <div style={{ height: '300px', overflow: 'hidden', background: '#0D0F13', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0.5rem' }}>
                <img src={gift.image} alt={gift.title} style={{ maxWidth: '100%', maxHeight: '100%', width: 'auto', height: 'auto', objectFit: 'contain' }} loading="lazy" />
              </div>
              <div style={{ padding: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#D4AF37', fontSize: '0.8rem', textTransform: 'uppercase', marginBottom: '0.4rem' }}>
                  <Gift size={14} />
                  <span>CUSTOMIZED ITEM</span>
                </div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{gift.title}</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1.25rem' }}>{gift.desc}</p>
                <button
                  className="service-btn-link"
                  onClick={() => onSelectService(gift.title)}
                >
                  <span>Explore Customized Gifts</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
