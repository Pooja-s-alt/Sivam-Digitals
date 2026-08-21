import React from 'react';
import { ArrowRight, Heart } from 'lucide-react';

export default function WeddingShowcase({ onOpenBooking }) {
  const categories = [
    { title: "Candid Moments", image: "/assets/service_candid.jpg" },
    { title: "Bridal Portraits", image: "/assets/service_beauty.jpg" },
    { title: "Couple Portraits", image: "/assets/service_prewedding.png" },
    { title: "Wedding Ceremonies", image: "/assets/service_traditional.jpg" },
    { title: "Family Moments", image: "/assets/service_traditional.jpg" },
    { title: "Reception Nights", image: "/assets/service_wedding.jpg" },
    { title: "Traditional Coverage", image: "/assets/service_traditional.jpg" },
    { title: "Cinematic Films", image: "/assets/service_wedding.jpg" }
  ];

  return (
    <section id="wedding" className="section-padding wedding-section">
      <div className="container">
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 3rem auto' }}>
          <span className="section-label">WEDDING SPECIALISTS</span>
          <h2 className="section-title">Your Story. Your Moments. Our Frames.</h2>
          <p className="section-subtitle">
            Every wedding has its own emotions, traditions and unforgettable moments. Our goal is to preserve those moments beautifully so you can relive them for years to come.
          </p>

          <button className="btn btn-gold" onClick={() => onOpenBooking('Wedding Photography')}>
            <Heart size={18} />
            <span>Book Wedding Photography</span>
          </button>
        </div>

        <div className="wedding-cats-grid">
          {categories.map((cat, idx) => (
            <div key={idx} className="wedding-cat-card" onClick={() => onOpenBooking(`Wedding - ${cat.title}`)}>
              <img src={cat.image} alt={cat.title} className="wedding-cat-img" loading="lazy" />
              <div className="wedding-cat-overlay">
                <span style={{ fontSize: '0.75rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#D4AF37' }}>
                  WEDDING GALLERY
                </span>
                <h3 className="wedding-cat-title">{cat.title}</h3>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#F0D78C', marginTop: '0.5rem', fontSize: '0.85rem' }}>
                  <span>View Category</span>
                  <ArrowRight size={14} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
