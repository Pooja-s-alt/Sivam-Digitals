import React from 'react';
import { ArrowRight, Award, CheckCircle } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export default function AboutSection({ onOpenBooking }) {
  return (
    <section id="about" className="section-padding about-section">
      <div className="container">
        <div className="about-grid">
          {/* Left Column: Overlapping Studio Image */}
          <div className="about-image-wrapper">
            <img
              src="./assets/studio_interior.jpg"
              alt="Sivam Digital Studio Interior"
              className="about-img-main"
            />
            <div className="about-badge-floating">
              <Award className="accent-gold" size={28} style={{ color: '#D4AF37', margin: '0 auto 0.4rem auto' }} />
              <div className="about-badge-num">5+ YEARS</div>
              <div className="about-badge-text">In Beauty & Studio</div>
            </div>
          </div>

          {/* Right Column: Narrative Content */}
          <div>
            <span className="section-label">ABOUT SIVAM DIGITAL</span>
            <h2 className="section-title" style={{ color: '#121418' }}>
              More Than 5 Years of Creating Beautiful Memories
            </h2>

            <p style={{ color: '#4A4850', marginBottom: '1.25rem', fontSize: '1.05rem', lineHeight: '1.7' }}>
              Sivam Digital Studio & Frame Works is a professionally experienced studio dedicated to capturing beautiful moments and creating meaningful experiences. With more than 5 years of experience in the beauty field and over 1000 weddings successfully completed, we understand the importance of every special occasion.
            </p>

            <p style={{ color: '#4A4850', marginBottom: '1.5rem', fontSize: '1rem', lineHeight: '1.7' }}>
              From wedding memories and beauty services to customized gifts and beautifully crafted photo frames, we bring creativity, care and professional finishing to everything we do.
            </p>

            <div className="about-highlights">
              {siteConfig.highlights.map((h, i) => (
                <div key={i} className="about-pill">
                  <CheckCircle size={14} inline style={{ marginRight: '0.4rem', verticalAlign: 'middle' }} />
                  {h.label}
                </div>
              ))}
            </div>

            <div style={{ marginTop: '2rem' }}>
              <button className="btn btn-gold" onClick={() => onOpenBooking()}>
                <span>Know More About Us</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
