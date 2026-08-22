import React from 'react';
import { Phone, MessageSquare, Calendar, Instagram } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export default function FloatingActions({ onOpenBooking }) {
  return (
    <>
      {/* Desktop Floating Action Buttons */}
      <div className="desktop-floating-actions">
        <a
          href={siteConfig.social.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="float-action-btn float-insta"
          title="Instagram Page"
          style={{ background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)', color: '#fff' }}
        >
          <Instagram size={22} color="#fff" />
        </a>

        <a
          href={siteConfig.social.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="float-action-btn float-whatsapp"
          title="Chat on WhatsApp"
        >
          <MessageSquare size={24} />
        </a>

        <a
          href={`tel:${siteConfig.contact.phoneRaw}`}
          className="float-action-btn float-call"
          title="Call Sivam Digital"
        >
          <Phone size={22} />
        </a>
      </div>

      {/* Mobile Sticky Bottom Action Bar (< 768px) */}
      <div className="mobile-bottom-bar">
        <div className="mobile-bar-actions">
          <a
            href={`tel:${siteConfig.contact.phoneRaw}`}
            className="btn btn-dark"
            style={{ padding: '0.6rem 1rem', fontSize: '0.8rem', flex: 1 }}
          >
            <Phone size={14} />
            <span>Call</span>
          </a>

          <a
            href={siteConfig.social.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-dark"
            style={{ padding: '0.6rem 1rem', fontSize: '0.8rem', flex: 1, borderColor: '#25D366', color: '#25D366' }}
          >
            <MessageSquare size={14} />
            <span>WhatsApp</span>
          </a>

          <button
            className="btn btn-gold"
            style={{ padding: '0.6rem 1rem', fontSize: '0.8rem', flex: 1.2 }}
            onClick={() => onOpenBooking()}
          >
            <Calendar size={14} />
            <span>Book Now</span>
          </button>
        </div>
      </div>
    </>
  );
}
