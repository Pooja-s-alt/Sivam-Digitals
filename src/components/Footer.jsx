import React from 'react';
import { Instagram, Facebook, Youtube, Phone, Mail, MapPin, MessageSquare, Star, Award, ShieldCheck, Map, ArrowUp } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const googleMapsUrl = siteConfig.contact.googleMapsUrl || "https://maps.google.com/?q=Kenikarai+Bus+Stop+Ramanathapuram";
  const googleReviewsUrl = siteConfig.googleReviews?.url || "https://share.google/0Qtm5lABzubNdQEN2";

  return (
    <footer className="footer-main">
      <div className="container">
        {/* Top Google Reviews & Studio Trust Ribbon */}
        <div className="footer-top-ribbon">
          <div className="ribbon-trust-item">
            <Star size={18} fill="#D4AF37" color="#D4AF37" />
            <span><strong>5.0 / 5.0 Rating</strong> on Google (230+ Reviews)</span>
          </div>
          <div className="ribbon-divider"></div>
          <div className="ribbon-trust-item">
            <Award size={18} color="#D4AF37" />
            <span><strong>1000+ Weddings</strong> Successfully Completed</span>
          </div>
          <div className="ribbon-divider"></div>
          <div className="ribbon-trust-item">
            <ShieldCheck size={18} color="#D4AF37" />
            <span><strong>5+ Years Legacy</strong> in Ramanathapuram</span>
          </div>
        </div>

        {/* Main Footer Grid */}
        <div className="footer-grid">
          {/* Column 1: Brand Info & PROMINENT LEFT SIDE BUTTONS (Phone, WhatsApp, Instagram) */}
          <div className="footer-brand-col">
            <a href="#home" className="logo-brand" style={{ marginBottom: '1.25rem' }}>
              <div className="logo-img-wrapper">
                <img
                  src="/assets/logo.jpg"
                  alt="Sivam Digital Studio & Frame Works Logo"
                  className="header-logo-img"
                />
              </div>
              <div className="logo-text">
                <span className="logo-title gradient-gold-text">SIVAM DIGITAL</span>
                <span className="logo-sub">STUDIO & FRAME WORKS</span>
              </div>
            </a>

            <p className="footer-brand-desc">
              Ramanathapuram's premier destination for luxury wedding photography, non-tearable synthetic HD photobooks, handcrafted photo frames & personalized keepsakes.
            </p>

            {/* PROMINENT LEFT SIDE CONTACT & SOCIAL BUTTON CARDS */}
            <div className="footer-left-buttons-container">
              {/* 1. Phone Call Button */}
              <a href={`tel:${siteConfig.contact.phoneRaw}`} className="pro-footer-btn phone-pro-btn">
                <div className="btn-icon-wrapper phone-bg">
                  <Phone size={18} color="#121418" />
                </div>
                <div className="btn-text-wrapper">
                  <span className="btn-tag">DIRECT CALL HOTLINE</span>
                  <span className="btn-title">{siteConfig.contact.phonePrimaryDisplay}</span>
                </div>
              </a>

              {/* 2. WhatsApp Direct Chat Button */}
              <a href={siteConfig.social.whatsapp} target="_blank" rel="noopener noreferrer" className="pro-footer-btn wa-pro-btn">
                <div className="btn-icon-wrapper wa-bg">
                  <MessageSquare size={18} color="#FFF" />
                </div>
                <div className="btn-text-wrapper">
                  <span className="btn-tag">INSTANT WHATSAPP</span>
                  <span className="btn-title">Chat On WhatsApp</span>
                </div>
              </a>

              {/* 3. Instagram Official Page Button */}
              <a href={siteConfig.social.instagram} target="_blank" rel="noopener noreferrer" className="pro-footer-btn insta-pro-btn">
                <div className="btn-icon-wrapper insta-bg">
                  <Instagram size={18} color="#FFF" />
                </div>
                <div className="btn-text-wrapper">
                  <span className="btn-tag">INSTAGRAM PAGE</span>
                  <span className="btn-title">@ramnad_gifts</span>
                </div>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Navigation */}
          <div>
            <h4 className="footer-title">Quick Navigation</h4>
            <ul className="footer-links">
              <li><a href="#home" className="footer-link">Home</a></li>
              <li><a href="#about" className="footer-link">About Us</a></li>
              <li><a href="#services" className="footer-link">Our Services</a></li>
              <li><a href="#gifts" className="footer-link">Customized Gifts</a></li>
              <li><a href="#frames" className="footer-link">Photo Frame Works</a></li>
              <li><a href="#album" className="footer-link">Luxury Album Making</a></li>
              <li><a href="#gallery" className="footer-link">Portfolio Gallery</a></li>
              <li><a href="#testimonials" className="footer-link">Client Reviews</a></li>
              <li><a href="#contact" className="footer-link">Contact & Location</a></li>
            </ul>
          </div>

          {/* Column 3: Services Offered */}
          <div>
            <h4 className="footer-title">Studio Services</h4>
            <ul className="footer-links">
              <li><a href="#services" className="footer-link">Wedding Photography</a></li>
              <li><a href="#services" className="footer-link">Candid & Traditional Coverage</a></li>
              <li><a href="#album" className="footer-link">Flush Mount Leather Photobooks</a></li>
              <li><a href="#album" className="footer-link">Acrylic Glass Cover Albums</a></li>
              <li><a href="#frames" className="footer-link">Customized Photo Frames</a></li>
              <li><a href="#gifts" className="footer-link">3D Desktop Plaques & Standees</a></li>
              <li><a href="#services" className="footer-link">Pre-Wedding Shoots</a></li>
              <li><a href="#services" className="footer-link">Professional Studio Portraits</a></li>
            </ul>
          </div>

          {/* Column 4: Contact Details & Google Maps */}
          <div>
            <h4 className="footer-title">Studio Contact</h4>
            <ul className="footer-contact-list">
              <li>
                <MapPin size={16} color="#D4AF37" className="f-icon" />
                <span>{siteConfig.contact.address}</span>
              </li>
              <li>
                <Phone size={16} color="#D4AF37" className="f-icon" />
                <span>
                  <a href={`tel:${siteConfig.contact.phoneRaw}`}>{siteConfig.contact.phonePrimaryDisplay}</a>
                  <br />
                  <a href={`tel:${siteConfig.contact.phoneSecondaryRaw}`}>{siteConfig.contact.phoneSecondaryDisplay}</a>
                </span>
              </li>
              <li>
                <Mail size={16} color="#D4AF37" className="f-icon" />
                <a href={`mailto:${siteConfig.contact.email}`}>{siteConfig.contact.email}</a>
              </li>
            </ul>

            <div style={{ marginTop: '1.25rem' }}>
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-gold"
                style={{ fontSize: '0.82rem', padding: '0.6rem 1.1rem', width: '100%', justifyContent: 'center' }}
              >
                <Map size={14} />
                <span>Open Google Maps Directions</span>
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="footer-bottom">
          <div className="footer-bottom-copy">
            &copy; 2026 <strong>{siteConfig.businessFullTitle}</strong>. All Rights Reserved.
          </div>

          <div className="footer-bottom-links">
            <a href={googleReviewsUrl} target="_blank" rel="noopener noreferrer" className="footer-b-link">
              Read Google Reviews
            </a>
            <span className="b-dot">•</span>
            <a href={siteConfig.social.whatsapp} target="_blank" rel="noopener noreferrer" className="footer-b-link">
              WhatsApp Support
            </a>
          </div>

          <button onClick={scrollToTop} className="back-to-top-btn" title="Back to Top">
            <ArrowUp size={16} />
            <span>Back to Top</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
