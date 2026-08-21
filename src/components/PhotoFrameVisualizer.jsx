import React from 'react';
import { Frame, ArrowRight } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export default function PhotoFrameVisualizer({ onSelectService }) {
  return (
    <section id="frames" className="section-padding frame-visualizer-section">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <span className="section-label">CUSTOMIZED FRAMING</span>
          <h2 className="section-title">Memories Deserve a Beautiful Frame</h2>
          <p className="section-subtitle">
            Your favorite moments should not stay hidden inside your phone. Preserve them beautifully with our customized photo frames, designed with care and finished to make your memories stand out.
          </p>
        </div>

        <div className="gifts-grid">
          {siteConfig.frameStyles.map((frame, idx) => (
            <div key={idx} className="gift-card">
              <div style={{ height: '300px', overflow: 'hidden', background: '#0D0F13', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0.5rem' }}>
                <img
                  src={frame.image}
                  alt={frame.name}
                  style={frame.crop ? { maxWidth: '100%', maxHeight: '100%', width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 40%', transform: 'scale(1.25)' } : { maxWidth: '100%', maxHeight: '100%', width: 'auto', height: 'auto', objectFit: 'contain' }}
                  loading="lazy"
                />
              </div>
              <div style={{ padding: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#D4AF37', fontSize: '0.8rem', textTransform: 'uppercase', marginBottom: '0.4rem' }}>
                  <Frame size={14} />
                  <span>FRAME WORK</span>
                </div>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{frame.name}</h3>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1.25rem' }}>{frame.desc}</p>
                <button
                  className="service-btn-link"
                  onClick={() => onSelectService(`Custom Frame - ${frame.name}`)}
                >
                  <span>Explore Photo Frame</span>
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
