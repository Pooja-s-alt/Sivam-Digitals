import React from 'react';
import { BookOpen, Calendar, Sparkles, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export default function AlbumSection({ onSelectService }) {
  const albumTypes = [
    { title: "Royal Mandala Cutout Wedding Album", desc: "Handcrafted wood-carved mandala design with personalized acrylic couple portrait window & gold embossed dates.", image: "/assets/album_1.jpg" },
    { title: "Laser Engraved Wooden Badge Album", desc: "Luxury lay-flat photobook featuring laser engraved wooden name plaque & crystal acrylic glass cover finish.", image: "/assets/album_2.jpg" },
    { title: "Ornate Gold Mandala Filigree Photobook", desc: "Premium metallic gold filigree mandala frame with vibrant romantic cover display & heirloom leather box.", image: "/assets/album_3.jpg" },
    { title: "Flush Mount Tan Leather Mandala Album", desc: "Genuine tan leather cover featuring intricate mandala embossing and center arch photo window.", image: "/assets/album_4.jpg" },
    { title: "Geometric Mosaic Wood Inlay Album", desc: "Contemporary geometric wooden mosaic cutout cover with customized couple photo plaque & leather backing.", image: "/assets/album_5.jpg" },
    { title: "Gold Hexagon Emblem Leather Photobook", desc: "Handcrafted leather & mandala wood cutout cover with gold hexagon engraved name emblem plaque & royal finish.", image: "/assets/album_6.jpg" }
  ];

  return (
    <section id="album" className="section-padding beauty-section">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <span className="section-label" style={{ color: '#9A7B1C' }}>PREMIUM ALBUM DESIGN</span>
          <h2 className="section-title" style={{ color: '#121418' }}>Luxury Wedding Album Making</h2>
          <p style={{ color: '#55525B', maxWidth: '680px', margin: '0 auto' }}>
            Transform your wedding photographs into timeless heirloom albums. Designed with HD non-tearable pages, handcrafted leather & glass covers, and metallic finishing.
          </p>
        </div>

        <div className="beauty-cards-grid">
          {albumTypes.map((album, idx) => (
            <div key={idx} className="beauty-card">
              <div style={{ height: '180px', borderRadius: 'var(--radius-sm)', overflow: 'hidden', marginBottom: '1.25rem' }}>
                <img src={album.image} alt={album.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy" />
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.75rem' }}>
                <BookOpen size={20} color="#D4AF37" />
                <h3 style={{ fontSize: '1.2rem', fontFamily: 'var(--font-brand)', color: '#121418' }}>
                  {album.title}
                </h3>
              </div>

              <p style={{ fontSize: '0.88rem', color: '#55525B', marginBottom: '1.5rem', lineHeight: '1.6' }}>
                {album.desc}
              </p>

              <button
                className="btn btn-outline-gold"
                style={{ width: '100%', borderColor: '#D4AF37', color: '#121418' }}
                onClick={() => onSelectService(`Album: ${album.title}`)}
              >
                <Calendar size={15} />
                <span>Enquire About {album.title}</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
