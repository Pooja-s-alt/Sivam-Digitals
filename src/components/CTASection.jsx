import React from 'react';
import { Calendar, MessageSquare } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export default function CTASection({ onOpenBooking }) {
  return (
    <section className="cta-banner-section">
      <div className="container" style={{ maxWidth: '800px' }}>
        <span className="section-label">START YOUR JOURNEY</span>
        <h2 className="section-title" style={{ fontSize: 'clamp(2.2rem, 5vw, 3.8rem)' }}>
          Let's Create Something Beautiful Together
        </h2>
        
        <p className="section-subtitle" style={{ color: '#DDD', marginBottom: '2.5rem' }}>
          Planning your wedding, looking for professional beauty services or searching for a meaningful customized gift? Talk to Sivam Digital today.
        </p>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
          <button className="btn btn-gold" onClick={() => onOpenBooking()}>
            <Calendar size={18} />
            <span>Book Us Now</span>
          </button>

          <a
            href={siteConfig.social.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-gold"
          >
            <MessageSquare size={18} />
            <span>WhatsApp Us</span>
          </a>
        </div>
      </div>
    </section>
  );
}
