import React, { useState, useEffect, useRef } from 'react';
import { Calendar, ChevronRight, ChevronLeft, Star, Award, ShieldCheck, Phone, MessageSquare, Sparkles } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

const HERO_SLIDES = [
  {
    id: 1,
    image: './assets/hero_slide_1.jpg',
    badge: "RAMANATHAPURAM'S PREMIER STUDIO & FRAME WORKS",
    title: "Capture Your Moments.",
    highlight: "Create Your Royalty Memories.",
    subtitle: "Specialized in luxury wedding photography, flush mount synthetic HD album making, customized photo frames & personalized keepsake gifts with 5+ years of trust.",
    position: 'center 15%'
  },
  {
    id: 2,
    image: './assets/hero_slide_2.jpg',
    badge: "CANDID & OUTDOOR PORTRAITS",
    title: "Emotions Unfiltered.",
    highlight: "Timeless Outdoor Celebrations.",
    subtitle: "Preserving genuine smiles, romantic outdoor landscapes, and cherished memories in vivid high-definition detail.",
    position: 'center 25%'
  },
  {
    id: 3,
    image: './assets/hero_slide_3.jpg',
    badge: "PRE-WEDDING & COUPLE SHOOTS",
    title: "Love Story In Frames.",
    highlight: "Cinematic Pre-Wedding Magic.",
    subtitle: "From creative themes to enchanting couple portraits, we turn your unique love story into visual masterpieces.",
    position: 'center 25%'
  },
  {
    id: 4,
    image: './assets/hero_slide_4.jpg',
    badge: "SUNSET & SILHOUETTE ART",
    title: "Dramatic & Artistic.",
    highlight: "Breathtaking Sunset Silhouettes.",
    subtitle: "Mastering light and shadows to craft extraordinary artistic couple photography that leaves a lasting impression.",
    position: 'center 35%'
  },
  {
    id: 5,
    image: './assets/hero_slide_5.jpg',
    badge: "TRADITIONAL & ROYALTY EVENTS",
    title: "Heritage & Elegance.",
    highlight: "Grand Wedding Celebrations.",
    subtitle: "Capturing ritualistic beauty, family joy, and festive splendor with unmatched professional finesse.",
    position: 'center 20%'
  }
];

export default function Hero({ onOpenBooking }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  // Auto-play timer (5 seconds)
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isPaused]);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? HERO_SLIDES.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
  };

  const activeSlideData = HERO_SLIDES[currentSlide];

  return (
    <section 
      id="home" 
      className="hero-section"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Background Slideshow Container */}
      <div className="hero-bg-container">
        {HERO_SLIDES.map((slide, idx) => (
          <div 
            key={slide.id} 
            className={`hero-slide ${idx === currentSlide ? 'active' : ''}`}
          >
            <img
              src={slide.image}
              alt={slide.badge}
              className="hero-slide-img"
              style={{ objectPosition: slide.position || 'center 20%' }}
            />
          </div>
        ))}
        <div className="hero-overlay"></div>
      </div>

      {/* Navigation Arrows */}
      <button 
        className="hero-nav-btn prev" 
        onClick={handlePrev} 
        aria-label="Previous Slide"
      >
        <ChevronLeft size={24} />
      </button>

      <button 
        className="hero-nav-btn next" 
        onClick={handleNext} 
        aria-label="Next Slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Central Content (Dynamically updates with slide) */}
      <div className="container hero-content">
        <div className="hero-top-badge key-fade" key={`badge-${currentSlide}`}>
          <Sparkles size={14} color="#D4AF37" />
          <span>{activeSlideData.badge}</span>
        </div>
        
        <h1 className="hero-title key-fade" key={`title-${currentSlide}`}>
          {activeSlideData.title} <br />
          <span className="gradient-gold-text">{activeSlideData.highlight}</span>
        </h1>

        <div className="gold-accent-line"></div>

        <p className="hero-subtitle key-fade" key={`sub-${currentSlide}`}>
          {activeSlideData.subtitle}
        </p>

        {/* Feature Badges */}
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

      {/* Bottom Indicators & Slide Count Bar */}
      <div className="hero-indicators-bar">
        <div className="hero-indicators">
          {HERO_SLIDES.map((slide, idx) => (
            <button
              key={slide.id}
              className={`hero-dot ${idx === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        <div className="hero-slide-counter">
          <span>0{currentSlide + 1}</span> / <span style={{ opacity: 0.6 }}>0{HERO_SLIDES.length}</span>
        </div>
      </div>
    </section>
  );
}
