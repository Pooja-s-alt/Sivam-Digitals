import React, { useState } from 'react';
import { Star, Quote, CheckCircle2, ExternalLink, ThumbsUp, Sparkles, MapPin } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export default function Testimonials() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [likesCount, setLikesCount] = useState(() => {
    const initial = {};
    siteConfig.testimonials.forEach(item => {
      initial[item.id] = item.likes || 15;
    });
    return initial;
  });
  const [likedItems, setLikedItems] = useState({});

  const categories = ['All', 'Weddings & Albums', 'Customized Frames & Gifts', 'Studio & Frames'];

  const filteredTestimonials = activeCategory === 'All'
    ? siteConfig.testimonials
    : siteConfig.testimonials.filter(t => t.category === activeCategory);

  const handleLike = (id) => {
    setLikesCount(prev => ({
      ...prev,
      [id]: likedItems[id] ? prev[id] - 1 : prev[id] + 1
    }));
    setLikedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const googleUrl = siteConfig.googleReviews?.url || "https://share.google/0Qtm5lABzubNdQEN2";

  return (
    <section className="section-padding testimonials-section" id="testimonials">
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <span className="section-label" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
            <Sparkles size={14} color="#D4AF37" /> VERIFIED CLIENT REVIEWS
          </span>
          <h2 className="section-title">Loved by Families across Ramanathapuram</h2>
          <p className="section-subtitle">
            Real experiences and 5-star Google reviews shared by our valued clients for wedding photography, luxury photobooks, and photo frame works.
          </p>
        </div>

        {/* Google Ratings Hero Banner */}
        <div className="google-review-banner">
          <div className="google-banner-left">
            <div className="google-g-badge">
              <svg viewBox="0 0 24 24" width="32" height="32">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
              </svg>
            </div>
            <div>
              <div className="google-banner-score">
                <span className="score-num">5.0</span>
                <div className="star-rating inline-stars">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} fill="#D4AF37" color="#D4AF37" />
                  ))}
                </div>
              </div>
              <p className="google-banner-text">
                Based on <strong>230+ Google Reviews</strong> for Sivam Digital Studio & Frame Works
              </p>
            </div>
          </div>

          <div className="google-banner-actions">
            <a 
              href={googleUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-gold"
              style={{ fontSize: '0.88rem', padding: '0.75rem 1.4rem' }}
            >
              <span>View All Google Reviews</span>
              <ExternalLink size={16} />
            </a>
            <a 
              href={googleUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-outline-gold"
              style={{ fontSize: '0.88rem', padding: '0.75rem 1.4rem' }}
            >
              <span>Write a Review</span>
            </a>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="testimonial-filter-tabs">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`testimonial-filter-btn ${activeCategory === cat ? 'active' : ''}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Testimonials Cards Grid */}
        <div className="testimonials-grid">
          {filteredTestimonials.map((test) => (
            <div key={test.id} className="testimonial-card-pro">
              {/* Card Top Row */}
              <div className="t-card-header">
                <div className="t-author-box">
                  <div className="t-avatar" style={{ background: test.avatarBg || 'var(--gold-gradient)' }}>
                    {test.avatar}
                  </div>
                  <div>
                    <div className="t-author-name">
                      {test.name}
                      <CheckCircle2 size={16} color="#4285F4" className="verified-icon" title="Verified Customer" />
                    </div>
                    <div className="t-author-location">
                      <MapPin size={12} color="#D4AF37" /> {test.location}
                    </div>
                  </div>
                </div>

                <div className="t-quote-icon">
                  <Quote size={24} color="#D4AF37" />
                </div>
              </div>

              {/* Star Rating & Event Badge */}
              <div className="t-rating-row">
                <div className="star-rating">
                  {[...Array(test.rating)].map((_, i) => (
                    <Star key={i} size={15} fill="#D4AF37" color="#D4AF37" />
                  ))}
                </div>
                <span className="t-event-badge">{test.event}</span>
              </div>

              {/* Review Comment */}
              <p className="t-comment">
                "{test.comment}"
              </p>

              {/* Footer Info & Engagement */}
              <div className="t-card-footer">
                <div className="t-source-tag">
                  <span className="g-dot"></span>
                  <span>{test.date}</span>
                </div>

                <button 
                  onClick={() => handleLike(test.id)} 
                  className={`t-like-btn ${likedItems[test.id] ? 'liked' : ''}`}
                  title="Helpful Review"
                >
                  <ThumbsUp size={14} />
                  <span>{likesCount[test.id]}</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Note & Call to Action */}
        <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '1rem' }}>
            Want to share your experience with Sivam Digital Studio & Frame Works?
          </p>
          <a
            href={googleUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-dark"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', borderColor: 'rgba(212, 175, 55, 0.3)' }}
          >
            <span>Rate Us on Google Maps</span>
            <ExternalLink size={16} color="#D4AF37" />
          </a>
        </div>
      </div>
    </section>
  );
}
