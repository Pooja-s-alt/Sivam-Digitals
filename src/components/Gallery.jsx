import React, { useState } from 'react';
import { Eye } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export default function Gallery({ onOpenLightbox }) {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Weddings', 'Bridal', 'Couples', 'Studio', 'Beauty', 'Gifts', 'Photo Frames'];

  const filteredItems = activeFilter === 'All'
    ? siteConfig.gallery
    : siteConfig.gallery.filter((item) => item.category === activeFilter);

  return (
    <section id="gallery" className="section-padding gallery-section">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <span className="section-label">VISUAL PORTFOLIO</span>
          <h2 className="section-title">Our Work Gallery</h2>
          <p className="section-subtitle">
            Explore our handcrafted moments, wedding stories, beauty makeovers, and custom photo keepsakes.
          </p>

          {/* Filter Buttons */}
          <div className="filter-tabs">
            {filters.map((filter) => (
              <button
                key={filter}
                className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
                onClick={() => setActiveFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="gallery-grid">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="gallery-item"
              onClick={() => onOpenLightbox(filteredItems, index)}
            >
              <img
                src={item.image}
                alt={item.title}
                className="gallery-img"
                loading="lazy"
              />
              <div className="gallery-overlay">
                <div className="gallery-view-icon">
                  <Eye size={22} />
                </div>
                <h4 style={{ fontSize: '1.2rem', color: '#FFF' }}>{item.title}</h4>
                <p style={{ fontSize: '0.8rem', color: '#D4AF37', marginTop: '0.2rem' }}>{item.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
