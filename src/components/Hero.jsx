import React from 'react';
import { Calendar, ChevronRight, Star, Award, ShieldCheck, Phone, MessageSquare, Sparkles } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export default function Hero({ onOpenBooking }) {
  return (
    <section id="home" className="hero-section">
      {/* Cinematic Background Photography */}
      <div className="hero-bg-container">
        <img
          src="/assets/hero_wedding.jpg"
          alt="Sivam Digital Wedding Photography"
          className="hero-bg-img"
        />
        <div className="hero-overlay"></div>
      </div>

      <div className="container hero-content">
        {/* Top Floating Badge */}
        <div className="hero-top-badge">
          <Sparkles size={14} color="#D4AF37" />
          <span>RAMANATHAPURAM'S PREMIER STUDIO & FRAME WORKS</span>
        </div>
        
        <h1 className="hero-title">
          Capture Your Moments. <br />
          <span className="gradient-gold-text">Create Your Royalty Memories.</span>
        </h1>

        <div className="gold-accent-line"></div>

        <p className="hero-subtitle">
          Specialized in luxury wedding photography, flush mount synthetic HD album making, customized photo frames & personalized keepsake gifts with 5+ years of trust.
        </p>

        {/* Highlight Feature Badges */}
        <div className="hero-feature-pills">
          <div className="hero-pill"><Award size={14} color="#D4AF37" /> 5+ Years Experience</div>
          <div className="hero-pill"><ShieldCheck size={14} color="#D4AF37" /> 1000+ Happy Weddings</div>
          <div className="hero-pill"><Star size={14} fill="#D4AF37" color="#D4AF37" /> 5.0 Google Rating (230+ Reviews)</div>
        </div>

        {/* Action CTA Group */}
        <div className="hero-cta-group" style={{ marginTop: '2rem' }}>
          <button className="btn btn-gold" onClick={() => onOpenBooking()}>
            <Calendar size={18} />
            <span>Book Your Date Now</span>
          </button>

          <a href="#services" className="btn btn-outline-gold">
            <span>Explore Services & Gallery</span>
            <ChevronRight size={18} />
          </a>

          <a href={siteConfig.social.whatsapp} target="_blank" rel="noopener noreferrer" className="btn btn-dark" style={{ borderColor: 'rgba(37, 211, 102, 0.4)', color: '#25D366' }}>
            <MessageSquare size={18} />
            <span>WhatsApp Quick Enquiry</span>
          </a>
        </div>

        {/* Quick Contact Ribbon */}
        <div className="hero-contact-ribbon">
          <span>Need instant phone consultation?</span>
          <a href={`tel:${siteConfig.contact.phoneRaw}`} className="ribbon-phone-link">
            <Phone size={14} color="#D4AF37" /> {siteConfig.contact.phonePrimaryDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}
