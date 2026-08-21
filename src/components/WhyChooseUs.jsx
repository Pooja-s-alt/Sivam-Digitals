import React from 'react';
import { Award, HeartHandshake, Camera, UserCheck, Gift, Image, ShieldCheck, Sparkles } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export default function WhyChooseUs() {
  const iconsMap = {
    "01": <Award size={26} className="why-icon" />,
    "02": <HeartHandshake size={26} className="why-icon" />,
    "03": <Camera size={26} className="why-icon" />,
    "04": <UserCheck size={26} className="why-icon" />,
    "05": <Gift size={26} className="why-icon" />,
    "06": <Image size={26} className="why-icon" />
  };

  return (
    <section className="section-padding why-section">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <span className="section-label">THE SIVAM DIGITAL DIFFERENCE</span>
          <h2 className="section-title">Why Choose Sivam Digital</h2>
          <p className="section-subtitle">
            Uncompromising commitment to quality, creative flair, and personalized care for every milestone event in Ramanathapuram.
          </p>
        </div>

        <div className="why-grid">
          {siteConfig.whyChooseUs.map((card) => (
            <div key={card.num} className="why-card">
              <div className="why-card-header">
                <div className="why-icon-box">
                  {iconsMap[card.num] || <Sparkles size={26} className="why-icon" />}
                </div>
                <span className="why-number-watermark">{card.num}</span>
              </div>

              <h3 className="why-title gradient-gold-text">
                {card.title}
              </h3>

              <div className="why-accent-line"></div>

              <p className="why-desc">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
