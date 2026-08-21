import React, { useState, useEffect } from 'react';
import { X, Calendar, Send, CheckCircle2, Phone, MessageSquare, Sparkles, MapPin, Clock, ShieldCheck, ArrowRight, ArrowLeft, Camera, Image, Gift, Frame } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export default function BookingModal({ isOpen, onClose, initialService }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: initialService || 'Wedding Photography',
    date: '',
    location: '',
    notes: '',
    contactPreference: 'WhatsApp'
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialService) {
      setFormData(prev => ({ ...prev, service: initialService }));
    }
    setStep(1);
    setSubmitted(false);
  }, [initialService, isOpen]);

  if (!isOpen) return null;

  const servicesList = [
    { id: 'Wedding Photography', title: 'Wedding Photography', icon: Camera, desc: 'Complete candid, traditional & stage coverage' },
    { id: 'Luxury Album Making', title: 'Luxury Album Making', icon: Image, desc: 'Flush mount leather & acrylic photobooks' },
    { id: 'Customized Photo Frames', title: 'Photo Frame Works', icon: Frame, desc: 'Wooden carved, gold filigree & tabletop frames' },
    { id: 'Customized Gifts', title: 'Customized Gifts', icon: Gift, desc: '3D plaques, LED standees & memory boxes' },
    { id: 'Pre-Wedding Shoot', title: 'Pre-Wedding Shoot', icon: Camera, desc: 'Outdoor garden & seashore romantic shoots' },
    { id: 'Professional Studio Services', title: 'Studio Services', icon: Clock, desc: 'Instant portraits, restoration & retouching' }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    const msg = `👑 *NEW BOOKING ENQUIRY - SIVAM DIGITAL*%0A%0A` +
      `👤 *Name:* ${encodeURIComponent(formData.name)}%0A` +
      `📞 *Phone:* ${encodeURIComponent(formData.phone)}%0A` +
      `📸 *Service Selected:* ${encodeURIComponent(formData.service)}%0A` +
      `📅 *Event Date:* ${encodeURIComponent(formData.date || 'To be confirmed')}%0A` +
      `📍 *Location:* ${encodeURIComponent(formData.location || 'Ramanathapuram')}%0A` +
      `💬 *Notes:* ${encodeURIComponent(formData.notes || 'None')}%0A%0A` +
      `Please confirm availability & pricing for my event!`;

    setTimeout(() => {
      window.open(`https://wa.me/${siteConfig.contact.whatsappRaw}?text=${msg}`, '_blank');
    }, 800);
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="booking-modal-card" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button className="modal-close-btn" onClick={onClose} aria-label="Close Booking Modal">
          <X size={20} />
        </button>

        {submitted ? (
          /* SUCCESS SCREEN */
          <div className="booking-success-view">
            <div className="success-icon-wrap">
              <CheckCircle2 size={60} color="#D4AF37" />
            </div>
            <h3 className="success-title">Booking Request Initiated!</h3>
            <p className="success-desc">
              We are connecting you to <strong>Sivam Digital Studio & Frame Works</strong> on WhatsApp to confirm your date & package details instantly.
            </p>

            <div className="booking-summary-box">
              <div className="summary-row">
                <span>Service:</span>
                <strong>{formData.service}</strong>
              </div>
              <div className="summary-row">
                <span>Name:</span>
                <strong>{formData.name}</strong>
              </div>
              <div className="summary-row">
                <span>Date:</span>
                <strong>{formData.date || 'Flexible Date'}</strong>
              </div>
            </div>

            <div className="success-actions">
              <a
                href={`https://wa.me/${siteConfig.contact.whatsappRaw}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-gold"
                style={{ width: '100%' }}
              >
                <MessageSquare size={18} />
                <span>Open WhatsApp Now</span>
              </a>
              <button
                className="btn btn-dark"
                onClick={() => { setSubmitted(false); setStep(1); onClose(); }}
                style={{ width: '100%' }}
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          /* STEP WIZARD FORM */
          <div>
            {/* Modal Header */}
            <div className="modal-header-box">
              <div className="modal-badge">
                <Sparkles size={14} color="#D4AF37" /> VIP APPOINTMENT BOOKING
              </div>
              <h3 className="modal-main-title">Book Your Experience</h3>
              <p className="modal-sub-desc">Reserve your date with Ramanathapuram's trusted studio</p>
            </div>

            {/* Step Progress Bar */}
            <div className="step-progress-bar">
              <div className={`step-pill ${step >= 1 ? 'active' : ''}`}>
                <span className="step-num">1</span>
                <span className="step-txt">Service</span>
              </div>
              <div className="step-line"></div>
              <div className={`step-pill ${step >= 2 ? 'active' : ''}`}>
                <span className="step-num">2</span>
                <span className="step-txt">Details</span>
              </div>
              <div className="step-line"></div>
              <div className={`step-pill ${step >= 3 ? 'active' : ''}`}>
                <span className="step-num">3</span>
                <span className="step-txt">Contact</span>
              </div>
            </div>

            {/* Step 1: Choose Service */}
            {step === 1 && (
              <div className="wizard-step-content">
                <label className="wizard-label">Choose Service Category *</label>
                <div className="services-selector-grid">
                  {servicesList.map((item) => {
                    const IconComp = item.icon;
                    const isSelected = formData.service === item.id;
                    return (
                      <div
                        key={item.id}
                        onClick={() => setFormData({ ...formData, service: item.id })}
                        className={`service-option-card ${isSelected ? 'selected' : ''}`}
                      >
                        <div className="option-icon-box">
                          <IconComp size={20} color={isSelected ? '#121418' : '#D4AF37'} />
                        </div>
                        <div>
                          <div className="option-title">{item.title}</div>
                          <div className="option-desc">{item.desc}</div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="wizard-footer">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="btn btn-gold"
                    style={{ width: '100%', justifyContent: 'center' }}
                  >
                    <span>Next: Event Date & Location</span>
                    <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Event Details */}
            {step === 2 && (
              <div className="wizard-step-content">
                <div className="form-group">
                  <label className="form-label">Event / Booking Date *</label>
                  <input
                    type="date"
                    required
                    className="form-input"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Event Location / City</label>
                  <div className="input-with-icon">
                    <MapPin size={18} color="#D4AF37" className="input-icon" />
                    <input
                      type="text"
                      placeholder="e.g. Ramanathapuram, Paramakudi, Rameswaram..."
                      className="form-input icon-padded"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Special Requirements / Notes</label>
                  <textarea
                    rows="2"
                    placeholder="e.g. Reception & Muhurtham coverage, custom frame dimensions..."
                    className="form-textarea"
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  ></textarea>
                </div>

                <div className="wizard-footer flex-row">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="btn btn-dark"
                    style={{ flex: 1 }}
                  >
                    <ArrowLeft size={16} />
                    <span>Back</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setStep(3)}
                    className="btn btn-gold"
                    style={{ flex: 1.5 }}
                  >
                    <span>Next: Contact Info</span>
                    <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Contact Info */}
            {step === 3 && (
              <form onSubmit={handleSubmit} className="wizard-step-content">
                <div className="form-group">
                  <label className="form-label">Your Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Karthikeyan R"
                    className="form-input"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">Phone Number *</label>
                  <div className="input-with-icon">
                    <Phone size={18} color="#D4AF37" className="input-icon" />
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      className="form-input icon-padded"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>

                {/* Trust Guarantee Pill */}
                <div className="trust-guarantee-pill">
                  <ShieldCheck size={18} color="#34A853" />
                  <span>Free consultation • Instant date check • 5+ Years Trust</span>
                </div>

                <div className="wizard-footer flex-row">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="btn btn-dark"
                    style={{ flex: 1 }}
                  >
                    <ArrowLeft size={16} />
                    <span>Back</span>
                  </button>
                  <button
                    type="submit"
                    className="btn btn-gold"
                    style={{ flex: 1.8 }}
                  >
                    <Send size={16} />
                    <span>Confirm Booking</span>
                  </button>
                </div>
              </form>
            )}

            {/* Quick Call Direct Option */}
            <div className="modal-quick-call-footer">
              <span>Need instant discussion over phone?</span>
              <a href={`tel:${siteConfig.contact.phoneRaw}`} className="quick-call-link">
                <Phone size={14} /> Call {siteConfig.contact.phonePrimaryDisplay}
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
