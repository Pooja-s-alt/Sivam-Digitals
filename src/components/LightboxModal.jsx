import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function LightboxModal({ images, currentIndex, onClose, onPrev, onNext }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onPrev, onNext]);

  if (!images || images.length === 0 || currentIndex === null) return null;

  const currentItem = images[currentIndex];

  return (
    <div className="lightbox-modal" onClick={onClose}>
      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        <button className="lightbox-close-btn" onClick={onClose} aria-label="Close Lightbox">
          <X size={24} />
        </button>

        {images.length > 1 && (
          <>
            <button className="lightbox-prev-btn" onClick={onPrev} aria-label="Previous Image">
              <ChevronLeft size={24} />
            </button>

            <button className="lightbox-next-btn" onClick={onNext} aria-label="Next Image">
              <ChevronRight size={24} />
            </button>
          </>
        )}

        <img
          src={currentItem.image}
          alt={currentItem.title || 'Sivam Digital Gallery'}
          className="lightbox-img"
        />

        <div className="lightbox-caption">
          <h3>{currentItem.title}</h3>
          <p style={{ fontSize: '0.9rem', color: '#D4AF37' }}>{currentItem.caption}</p>
        </div>
      </div>
    </div>
  );
}
