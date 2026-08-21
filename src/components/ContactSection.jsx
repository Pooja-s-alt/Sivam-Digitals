import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, MessageSquare, Send, CheckCircle2, Sparkles, ExternalLink, ShieldCheck, User, Calendar, Map, Award } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export default function ContactSection({ selectedService }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    eventType: selectedService || 'Wedding Photography',
    eventDate: '',
    location: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      setErrorMsg('Please enter your full name and phone number.');
      return;
    }

    setErrorMsg('');
    setSubmitted(true);

    const text = `👑 *NEW STUDIO ENQUIRY - SIVAM DIGITAL*%0A%0A` +
      `👤 *Name:* ${encodeURIComponent(formData.name)}%0A` +
      `📞 *Phone:* ${encodeURIComponent(formData.phone)}%0A` +
      `📧 *Email:* ${encodeURIComponent(formData.email || 'N/A')}%0A` +
      `📸 *Service:* ${encodeURIComponent(formData.eventType)}%0A` +
      `📅 *Date:* ${encodeURIComponent(formData.eventDate || 'Flexible')}%0A` +
      `📍 *Location:* ${encodeURIComponent(formData.location || 'Ramanathapuram')}%0A` +
      `💬 *Details:* ${encodeURIComponent(formData.message || 'I would like to inquire about packages & date availability.')}`;

    setTimeout(() => {
      window.open(`https://wa.me/${siteConfig.contact.whatsappRaw}?text=${text}`, '_blank');
    }, 800);
  };

  const googleMapsUrl = siteConfig.contact.googleMapsUrl || "https://maps.google.com/?q=Kenikarai+Bus+Stop+Ramanathapuram";

  return (
    <section id="contact" className="section-padding contact-section">
      <div className="container">
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <span className="section-label" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}>
            <Sparkles size={14} color="#D4AF37" /> STUDIO LOCATION & CONTACT
          </span>
          <h2 className="section-title">Connect with Sivam Digital</h2>
          <p className="section-subtitle">
            Located conveniently near Kenikarai Bus Stop, Ramanathapuram. Visit our studio for live photobook samples & frame works, or send us a message below.
          </p>
        </div>

        <div className="contact-grid-pro">
          {/* Left Column: Ultra-Rich Studio Info & Google Maps Card */}
          <div className="contact-info-column">
            <div className="info-column-header">
              <span className="gold-sub-label">DIRECT CONTACT SUITE</span>
              <h3 className="info-main-heading">Visit Our Studio in Ramnad</h3>
              <p className="info-sub-text">
                Experience our luxury non-tearable synthetic photobooks, 3D desktop plaques & handcrafted wooden frames in person.
              </p>
            </div>

            {/* Info Cards List */}
            <div className="pro-contact-cards-list">
              {/* Studio Address Card */}
              <div className="pro-info-card">
                <div className="pro-info-icon-box">
                  <MapPin size={22} color="#D4AF37" />
                </div>
                <div className="pro-info-details">
                  <div className="pro-info-title">Studio Address</div>
                  <div className="pro-info-val">{siteConfig.contact.address}</div>
                  <a
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="maps-quick-btn"
                  >
                    <span>Get Directions on Google Maps</span>
                    <ExternalLink size={13} />
                  </a>
                </div>
              </div>

              {/* Phone & Hotline Card */}
              <div className="pro-info-card">
                <div className="pro-info-icon-box">
                  <Phone size={22} color="#D4AF37" />
                </div>
                <div className="pro-info-details">
                  <div className="pro-info-title">Phone & Direct Hotlines</div>
                  <div className="pro-phone-pills-row">
                    <a href={`tel:${siteConfig.contact.phoneRaw}`} className="pro-phone-pill">
                      <Phone size={13} /> {siteConfig.contact.phonePrimaryDisplay}
                    </a>
                    <a href={`tel:${siteConfig.contact.phoneSecondaryRaw}`} className="pro-phone-pill">
                      <Phone size={13} /> {siteConfig.contact.phoneSecondaryDisplay}
                    </a>
                  </div>
                </div>
              </div>

              {/* WhatsApp & Email Card */}
              <div className="pro-info-card">
                <div className="pro-info-icon-box" style={{ background: 'rgba(37, 211, 102, 0.12)', borderColor: 'rgba(37, 211, 102, 0.3)' }}>
                  <MessageSquare size={22} color="#25D366" />
                </div>
                <div className="pro-info-details">
                  <div className="pro-info-title">WhatsApp & Digital Mail</div>
                  <div className="pro-phone-pills-row">
                    <a href={siteConfig.social.whatsapp} target="_blank" rel="noopener noreferrer" className="pro-phone-pill wa-pill">
                      <MessageSquare size={13} /> Chat on WhatsApp
                    </a>
                    <a href={`mailto:${siteConfig.contact.email}`} className="pro-phone-pill email-pill">
                      <Mail size={13} /> {siteConfig.contact.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* Working Hours Card */}
              <div className="pro-info-card">
                <div className="pro-info-icon-box">
                  <Clock size={22} color="#D4AF37" />
                </div>
                <div className="pro-info-details">
                  <div className="pro-info-title">Working Hours & Days</div>
                  <div className="pro-info-val">
                    {siteConfig.contact.workingHours}
                    <span className="open-days-badge">Open 7 Days a Week</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps Location Preview Card */}
            <div className="google-maps-banner-card">
              <div className="maps-banner-header">
                <div>
                  <div className="maps-badge">
                    <Award size={14} color="#D4AF37" /> 5.0 STAR RATED STUDIO ON GOOGLE
                  </div>
                  <h4 className="maps-card-title">Sivam Digital Studio & Frame Works</h4>
                  <p className="maps-card-sub">Kenikarai Bus Stop, Ramanathapuram</p>
                </div>
                <div className="maps-g-circle">G</div>
              </div>

              <div className="maps-card-footer">
                <span className="maps-rating-txt">★★★★★ (230+ Verified Reviews)</span>
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-gold"
                  style={{ fontSize: '0.82rem', padding: '0.55rem 1.1rem' }}
                >
                  <Map size={14} />
                  <span>Open Maps Navigation</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Ultra-Professional Inquiry Form */}
          <div className="contact-form-card-pro">
            <div className="form-card-header">
              <div className="form-header-badge">
                <Sparkles size={14} color="#D4AF37" /> INSTANT QUOTE & BOOKING
              </div>
              <h3 className="form-card-title">Send Us an Enquiry</h3>
              <p className="form-card-sub">Fill out the form below to receive pricing & package availability</p>
            </div>

            {submitted ? (
              <div className="contact-success-box">
                <div className="success-icon-ring">
                  <CheckCircle2 size={52} color="#D4AF37" />
                </div>
                <h4 className="success-heading">Enquiry Sent Successfully!</h4>
                <p className="success-txt">
                  Connecting you to <strong>Sivam Digital Studio & Frame Works</strong> on WhatsApp to confirm details...
                </p>
                <div className="success-actions-row">
                  <a
                    href={siteConfig.social.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-gold"
                    style={{ width: '100%' }}
                  >
                    <MessageSquare size={16} />
                    <span>Open WhatsApp Chat</span>
                  </a>
                  <button className="btn btn-dark" onClick={() => setSubmitted(false)} style={{ width: '100%' }}>
                    Send Another Enquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="pro-contact-form">
                {errorMsg && (
                  <div className="form-error-banner">
                    {errorMsg}
                  </div>
                )}

                {/* Name Input */}
                <div className="form-group">
                  <label className="pro-form-label">Full Name *</label>
                  <div className="input-with-icon">
                    <User size={18} color="#D4AF37" className="input-icon" />
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. Karthikeyan R"
                      className="form-input icon-padded"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                {/* Phone & Email Row */}
                <div className="form-grid-2col">
                  <div className="form-group">
                    <label className="pro-form-label">Phone Number *</label>
                    <div className="input-with-icon">
                      <Phone size={18} color="#D4AF37" className="input-icon" />
                      <input
                        type="tel"
                        name="phone"
                        required
                        placeholder="+91 81108 60283"
                        className="form-input icon-padded"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="pro-form-label">Email Address</label>
                    <div className="input-with-icon">
                      <Mail size={18} color="#D4AF37" className="input-icon" />
                      <input
                        type="email"
                        name="email"
                        placeholder="sivamdigitalrmd@gmail.com"
                        className="form-input icon-padded"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>

                {/* Service Type & Event Date Row */}
                <div className="form-grid-2col">
                  <div className="form-group">
                    <label className="pro-form-label">Service Type</label>
                    <select
                      name="eventType"
                      className="form-select"
                      value={formData.eventType}
                      onChange={handleChange}
                    >
                      <option value="Wedding Photography">Wedding Photography</option>
                      <option value="Luxury Album Making">Luxury Album Making</option>
                      <option value="Customized Photo Frames">Customized Photo Frames</option>
                      <option value="Customized Gifts">Customized Gifts</option>
                      <option value="Pre-Wedding Shoot">Pre-Wedding Shoot</option>
                      <option value="Traditional Photography">Traditional Photography</option>
                      <option value="Wedding Videography">Wedding Videography</option>
                      <option value="Invitation Making">Invitation Making</option>
                      <option value="Professional Studio Services">Professional Studio Services</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label className="pro-form-label">Event Date</label>
                    <div className="input-with-icon">
                      <Calendar size={18} color="#D4AF37" className="input-icon" />
                      <input
                        type="date"
                        name="eventDate"
                        className="form-input icon-padded"
                        value={formData.eventDate}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>

                {/* Event Location */}
                <div className="form-group">
                  <label className="pro-form-label">Event Location / City</label>
                  <div className="input-with-icon">
                    <MapPin size={18} color="#D4AF37" className="input-icon" />
                    <input
                      type="text"
                      name="location"
                      placeholder="e.g. Ramanathapuram, Paramakudi, Rameswaram..."
                      className="form-input icon-padded"
                      value={formData.location}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                {/* Message Textarea */}
                <div className="form-group">
                  <label className="pro-form-label">Requirements / Special Message</label>
                  <textarea
                    name="message"
                    rows="3"
                    placeholder="Tell us about your wedding hall, dates, photobook preference, or frame size..."
                    className="form-textarea"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>

                {/* Trust Guarantee Note */}
                <div className="form-trust-banner">
                  <ShieldCheck size={16} color="#34A853" />
                  <span>100% Free Consultation • No Spam • Instant Response</span>
                </div>

                {/* Form Buttons Row */}
                <div className="form-actions-row">
                  <button type="submit" className="btn btn-gold" style={{ flex: 1.5, justifyContent: 'center' }}>
                    <Send size={16} />
                    <span>Send Enquiry & Chat on WhatsApp</span>
                  </button>

                  <a
                    href={`tel:${siteConfig.contact.phoneRaw}`}
                    className="btn btn-outline-gold"
                    style={{ flex: 1, justifyContent: 'center' }}
                  >
                    <Phone size={16} />
                    <span>Call Us Directly</span>
                  </a>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
