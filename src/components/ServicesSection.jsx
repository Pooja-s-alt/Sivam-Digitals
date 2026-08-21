import React from 'react';
import { ArrowRight, Camera, Video, Sparkles, Gift, Frame, HeartHandshake, Film, Mail } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export default function ServicesSection({ onSelectService }) {
  const getServiceIcon = (id) => {
    switch (id) {
      case 'wedding-photo':
      case 'candid-photo':
      case 'traditional-photo':
      case 'pre-wedding':
      case 'studio-services':
        return <Camera size={20} className="accent-gold" />;
      case 'wedding-video':
        return <Film size={20} className="accent-gold" />;
      case 'bridal-beauty':
        return <Sparkles size={20} className="accent-gold" />;
      case 'customized-gifts':
        return <Gift size={20} className="accent-gold" />;
      case 'customized-frames':
        return <Frame size={20} className="accent-gold" />;
      case 'invitation-making':
        return <Mail size={20} className="accent-gold" />;
      default:
        return <HeartHandshake size={20} className="accent-gold" />;
    }
  };

  return (
    <section id="services" className="section-padding services-section">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <span className="section-label">OUR EXPERTISE</span>
          <h2 className="section-title">Our Services</h2>
          <p className="section-subtitle">
            Everything you need to make your special moments unforgettable.
          </p>
        </div>

        <div className="services-grid">
          {siteConfig.services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-img-wrapper">
                <img
                  src={service.image}
                  alt={service.title}
                  className="service-img"
                  loading="lazy"
                />
              </div>

              <div className="service-card-body">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                  {getServiceIcon(service.id)}
                  <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: '#D4AF37' }}>
                    {service.category}
                  </span>
                </div>

                <h3 className="service-title">{service.title}</h3>
                <p className="service-desc">{service.description}</p>

                <button
                  className="service-btn-link"
                  onClick={() => onSelectService(service.title)}
                >
                  <span>Explore Service</span>
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
