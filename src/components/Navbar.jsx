import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, Calendar, Star, MapPin, Clock, MessageSquare } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export default function Navbar({ onOpenBooking }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Customized Gifts', href: '#gifts' },
    { label: 'Frame Works', href: '#frames' },
    { label: 'Album Making', href: '#album' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Reviews', href: '#testimonials' },
    { label: 'Contact Us', href: '#contact' },
  ];

  const handleNavClick = (href) => {
    setMobileMenuOpen(false);
    setActiveSection(href.replace('#', ''));
  };

  const googleReviewsUrl = siteConfig.googleReviews?.url || "https://share.google/0Qtm5lABzubNdQEN2";

  return (
    <>
      {/* Top Header Announcement Ribbon */}
      <div className="header-top-bar">
        <div className="container top-bar-wrapper">
          <div className="top-bar-left">
            <span className="top-info-item">
              <MapPin size={12} color="#D4AF37" /> {siteConfig.contact.address}
            </span>
            <span className="top-divider">|</span>
            <span className="top-info-item">
              <Clock size={12} color="#D4AF37" /> Mon - Sun: 9:00 AM - 9:00 PM
            </span>
          </div>

          <div className="top-bar-right">
            <a href={googleReviewsUrl} target="_blank" rel="noopener noreferrer" className="top-info-item rating-link">
              <Star size={12} fill="#D4AF37" color="#D4AF37" />
              <span><strong>5.0 Star Rating</strong> (230+ Google Reviews)</span>
            </a>
            <span className="top-divider">|</span>
            <a href={siteConfig.social.whatsapp} target="_blank" rel="noopener noreferrer" className="top-info-item wa-top-link">
              <MessageSquare size={12} color="#25D366" />
              <span>WhatsApp Quick Chat</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <header className={`header-sticky ${scrolled ? 'scrolled' : ''}`}>
        <div className="container nav-wrapper">
          {/* Royal Logo */}
          <a href="#home" className="logo-brand">
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

          {/* Desktop Navigation Links */}
          <nav className="desktop-nav">
            <ul className="nav-links">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className={`nav-link ${activeSection === item.href.replace('#', '') ? 'active' : ''}`}
                    onClick={() => handleNavClick(item.href)}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Action Buttons */}
          <div className="header-actions">
            <a href={`tel:${siteConfig.contact.phoneRaw}`} className="phone-quick-btn">
              <Phone size={14} />
              <span>{siteConfig.contact.phonePrimaryDisplay}</span>
            </a>
            
            <button className="btn btn-gold" onClick={() => onOpenBooking()}>
              <Calendar size={15} />
              <span>Book Us Now</span>
            </button>

            {/* Mobile Hamburger Menu Toggle */}
            <button
              className="hamburger-btn"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open Navigation Menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <div
        className={`mobile-drawer-overlay ${mobileMenuOpen ? 'open' : ''}`}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* Mobile Nav Drawer */}
      <aside className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-drawer-header">
          <div className="logo-brand">
            <div className="logo-img-wrapper">
              <img
                src="/assets/logo.jpg"
                alt="Sivam Digital Studio & Frame Works"
                className="header-logo-img"
              />
            </div>
            <div className="logo-text">
              <span className="logo-title gradient-gold-text">SIVAM DIGITAL</span>
              <span className="logo-sub">STUDIO & FRAME WORKS</span>
            </div>
          </div>
          <button
            className="hamburger-btn"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Close Menu"
          >
            <X size={24} />
          </button>
        </div>

        <ul className="mobile-nav-links">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="mobile-nav-link"
                onClick={() => handleNavClick(item.href)}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div style={{ marginTop: 'auto', paddingTop: '1.5rem' }}>
          <a
            href={`tel:${siteConfig.contact.phoneRaw}`}
            className="phone-quick-btn"
            style={{ display: 'flex', justifyContent: 'center', marginBottom: '1rem', fontSize: '1rem' }}
          >
            <Phone size={18} />
            <span>{siteConfig.contact.phonePrimaryDisplay}</span>
          </a>

          <button
            className="btn btn-gold"
            style={{ width: '100%' }}
            onClick={() => { setMobileMenuOpen(false); onOpenBooking(); }}
          >
            <Calendar size={16} />
            <span>Book Us Now</span>
          </button>
        </div>
      </aside>
    </>
  );
}
