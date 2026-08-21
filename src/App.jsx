import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustStats from './components/TrustStats';
import AboutSection from './components/AboutSection';
import WhyChooseUs from './components/WhyChooseUs';
import ServicesSection from './components/ServicesSection';
import CustomizedGifts from './components/CustomizedGifts';
import PhotoFrameVisualizer from './components/PhotoFrameVisualizer';
import AlbumSection from './components/AlbumSection';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import CTASection from './components/CTASection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import LightboxModal from './components/LightboxModal';
import FloatingActions from './components/FloatingActions';

export default function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState('Wedding Photography');
  
  // Lightbox State
  const [lightboxImages, setLightboxImages] = useState([]);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const handleOpenBooking = (serviceName = 'Wedding Photography') => {
    setSelectedService(serviceName);
    setBookingModalOpen(true);
  };

  const handleOpenLightbox = (imagesList, index) => {
    setLightboxImages(imagesList);
    setLightboxIndex(index);
  };

  const handleLightboxPrev = () => {
    setLightboxIndex((prev) => (prev === 0 ? lightboxImages.length - 1 : prev - 1));
  };

  const handleLightboxNext = () => {
    setLightboxIndex((prev) => (prev === lightboxImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="sivam-app">
      {/* Header & Sticky Navbar */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Content Sections - Strictly aligned with Header Navigation Order */}
      <main>
        {/* 1. Home (#home) */}
        <Hero onOpenBooking={handleOpenBooking} />
        
        {/* 2. About Us (#about) */}
        <TrustStats />
        <AboutSection onOpenBooking={handleOpenBooking} />
        <WhyChooseUs />

        {/* 3. Services (#services) */}
        <ServicesSection onSelectService={handleOpenBooking} />

        {/* 4. Customized Gifts (#gifts) */}
        <CustomizedGifts onSelectService={handleOpenBooking} />

        {/* 6. Frame Works (#frames) */}
        <PhotoFrameVisualizer onSelectService={handleOpenBooking} />

        {/* 7. Album Making (#album) */}
        <AlbumSection onSelectService={handleOpenBooking} />

        {/* 8. Gallery (#gallery) */}
        <Gallery onOpenLightbox={handleOpenLightbox} />

        {/* 9. Contact Us (#contact) */}
        <Testimonials />
        <CTASection onOpenBooking={handleOpenBooking} />
        <ContactSection selectedService={selectedService} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals & Floating Tools */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        initialService={selectedService}
      />

      <LightboxModal
        images={lightboxImages}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onPrev={handleLightboxPrev}
        onNext={handleLightboxNext}
      />

      <FloatingActions onOpenBooking={handleOpenBooking} />
    </div>
  );
}
