// Sivam Digital Central Configuration
// All business details, contact information, services, gallery items, and testimonials
// can be easily updated in this file.

export const siteConfig = {
  businessName: "Sivam Digital",
  businessFullTitle: "Sivam Digital Studio & Frame Works",
  tagline: "Capture Your Moments. Create Your Memories.",
  subTagline: "Creating beautiful wedding memories, luxury album making, customized gifts and photo frames with 5 years of experience.",
  
  // Real Contact Details
  contact: {
    phonePrimaryDisplay: "+91 81108 60283",
    phoneSecondaryDisplay: "+91 95666 78255",
    phoneDisplay: "+91 81108 60283 / +91 95666 78255",
    phoneRaw: "+918110860283",
    phoneSecondaryRaw: "+919566678255",
    whatsappDisplay: "+91 81108 60283",
    whatsappRaw: "918110860283",
    email: "sivamdigitalrmd@gmail.com",
    address: "Kenikarai Bus Stop, Ramanathapuram, Tamil Nadu, India",
    workingHours: "Mon - Sun: 9:00 AM - 9:00 PM",
    googleMapsUrl: "https://maps.google.com/?q=Kenikarai+Bus+Stop+Ramanathapuram",
  },

  logoImg: "/assets/logo.jpg",

  // Social Links
  social: {
    instagram: "https://www.instagram.com/ramnad_gifts?igsi=MWY3a3BqbndwMXZ4Ng==",
    facebook: "https://facebook.com/sivamdigital",
    youtube: "https://youtube.com/sivamdigital",
    whatsapp: "https://wa.me/918110860283"
  },

  // Highlight Key Strengths
  highlights: [
    { label: "5+ Years Experience", value: "5+" },
    { label: "1000+ Successful Weddings", value: "1000+" },
    { label: "Personalized Service", value: "100%" }
  ],

  // Key Statistics
  stats: [
    { number: 5, suffix: "+", label: "Years of Experience", desc: "Years of professional understanding in studio & album designing" },
    { number: 1000, suffix: "+", label: "Weddings Successfully Completed", desc: "Trusted by hundreds of happy families across regions" },
    { number: 1000, suffix: "+", label: "Happy Memories Created", desc: "Cherished moments preserved with extreme perfection" },
    { number: 5, suffix: "+", label: "Years of Professional Expertise", desc: "Mastery in photography, album making & framing" }
  ],

  // Why Choose Us (6 Feature Cards)
  whyChooseUs: [
    {
      num: "01",
      title: "5+ Years Experience",
      description: "Years of practical experience and professional understanding of studio, framing and wedding requirements."
    },
    {
      num: "02",
      title: "1000+ Successful Weddings",
      description: "Trusted by hundreds of families to preserve their most important celebrations."
    },
    {
      num: "03",
      title: "Professional Quality",
      description: "Attention to detail, creative presentation and high-quality finishing."
    },
    {
      num: "04",
      title: "Personalized Service",
      description: "Every customer receives solutions tailored to their needs and occasion."
    },
    {
      num: "05",
      title: "Customized Gifts",
      description: "Beautiful personalized gifts created specially for your loved ones."
    },
    {
      num: "06",
      title: "Premium Photo Frames",
      description: "Transform your favorite memories into elegant, professionally finished photo frames."
    }
  ],

  // Core Services
  services: [
    {
      id: "wedding-photo",
      title: "Wedding Photography",
      category: "Weddings",
      description: "Comprehensive coverage of your special day capturing authentic emotions, rituals, and elegance.",
      image: "/assets/service_wedding_stage.jpg"
    },
    {
      id: "wedding-video",
      title: "Wedding Videography",
      category: "Weddings",
      description: "Cinematic wedding films that recreate the romance, sound, and soul of your wedding day.",
      image: "/assets/service_candid.jpg"
    },
    {
      id: "album-making",
      title: "Luxury Album Making",
      category: "Albums",
      description: "Flush mount leather, acrylic glass cover & non-tearable synthetic HD wedding photobooks.",
      image: "/assets/album_3.jpg"
    },
    {
      id: "candid-photo",
      title: "Candid Photography",
      category: "Weddings",
      description: "Unscripted, raw emotional moments captured naturally without intrusive posing.",
      image: "/assets/service_candid_real.jpg"
    },
    {
      id: "traditional-photo",
      title: "Traditional Photography",
      category: "Weddings",
      description: "Timeless ritual and stage family coverage adhering strictly to cultural customs.",
      image: "/assets/service_traditional.jpg"
    },
    {
      id: "customized-gifts",
      title: "Customized Gifts",
      category: "Gifts",
      description: "Personalized keepsakes, custom photo plaques, printed mugs, and memory boxes.",
      image: "/assets/service_gifts.jpg"
    },
    {
      id: "customized-frames",
      title: "Customized Photo Frames",
      category: "Frames",
      description: "Handcrafted wooden, acrylic floating, and gold filigree frames to showcase your cherished photos.",
      image: "/assets/service_frames.jpg"
    },
    {
      id: "invitation-making",
      title: "Invitation Making",
      category: "Invitations",
      description: "Luxury digital & printed wedding invitation cards with gold foil embossing, wax seals & royal aesthetic designs.",
      image: "/assets/service_invitation.jpg"
    },
    {
      id: "pre-wedding",
      title: "Pre-Wedding Photography",
      category: "Weddings",
      description: "Creative outdoor & romantic conceptual photo shoots ahead of your grand celebration.",
      image: "/assets/service_prewedding.png"
    },
    {
      id: "studio-services",
      title: "Professional Studio Services",
      category: "Studio",
      description: "In-studio portraits, digital retouching, restoration, and instant print services.",
      image: "/assets/service_studio.jpg"
    }
  ],

  customizedGiftsList: [
    { title: "Our Love Story Acrylic Timeline LED Light", desc: "Illuminated acrylic timeline frame featuring your love journey photos & milestone dates.", image: "/assets/gift_3.png" },
    { title: "3D Desktop Couple Cutout Plaque", desc: "Personalized desktop 3D couple cutout plaque with solid wooden base.", image: "/assets/gift_4.jpg" },
    { title: "Illuminated Heart Acrylic LED Light Frame", desc: "Custom illuminated heart acrylic photo frame with ambient color lights.", image: "/assets/gift_8_heart_led.png" },
    { title: "Accordion Photo Reel Memory Heart Box", desc: "Personalized pull-out accordion photo reel inside a luxury heart tin box.", image: "/assets/gift_9_photo_reel.png" },
    { title: "Mini Heart Bear Gift Tin Set", desc: "Cute heart-shaped tin boxes with velvet bear keepsake & bow ribbon finish.", image: "/assets/gift_7_teddy_tins.jpg" },
    { title: "Customized Baby Footprint LED Standee", desc: "Illuminated acrylic baby footprint birth detail standee with custom photo.", image: "/assets/gift_2.jpg" },
    { title: "Heart Acrylic Keepsake Plaque", desc: "Gold embossed heart acrylic keepsake with couple names & date.", image: "/assets/gift_1.jpg" },
    { title: "Customized Memory Photo Standee", desc: "Multi-photo acrylic Love table standee with collage frames.", image: "/assets/gift_5.jpg" },
    { title: "Anniversary Calendar LED Light", desc: "Illuminated acrylic anniversary calendar plaque with custom photo window.", image: "/assets/gift_6.jpg" }
  ],

  frameStyles: [
    { id: "gold-carved", name: "Customized Tribute & Wedding Table Frames", desc: "Ornate gold & brown carved table frames for special tributes & wedding celebrations.", borderStyle: "8px solid #D4AF37", boxShadow: "0 10px 30px rgba(212, 175, 55, 0.3)", image: "/assets/frame_1.jpg" },
    { id: "gold-beaded", name: "With Love Wedding Portrait Frame", desc: "Tabletop wedding photo frame with temple backdrop & custom romantic typography.", borderStyle: "8px solid #D4AF37", boxShadow: "0 10px 30px rgba(212, 175, 55, 0.3)", image: "/assets/frame_2.jpg" },
    { id: "wooden-classic", name: "Happy Wedding Life Temple Background Frame", desc: "Traditional wedding frame featuring temple gopuram background & golden embellishments.", borderStyle: "12px solid #3E2723", boxShadow: "0 10px 25px rgba(0,0,0,0.5)", image: "/assets/frame_3.jpg" },
    { id: "textured-filigree", name: "Textured Filigree Wedding Frame", desc: "Embossed textured filigree border frame.", borderStyle: "8px solid #8B5A2B", boxShadow: "0 10px 25px rgba(0,0,0,0.5)", image: "/assets/frame_4.jpg" },
    { id: "anniversary-swing", name: "Anniversary Swing Collage Frame", desc: "Handcrafted collage frame for wedding anniversary.", borderStyle: "8px solid #D4AF37", boxShadow: "0 10px 30px rgba(212, 175, 55, 0.3)", image: "/assets/frame_5.jpg", crop: true },
    { id: "gold-filigree", name: "Gold Filigree Tabletop Frame", desc: "Handcrafted gold filigree tabletop frame.", borderStyle: "8px solid #D4AF37", boxShadow: "0 10px 30px rgba(212, 175, 55, 0.3)", image: "/assets/frame_6.jpg" }
  ],

  gallery: [
    { id: 1, title: "Night Lights Bridal Portrait", category: "Weddings", image: "/assets/gallery_1.jpg", caption: "Bridal Photography & Ambient Lights" },
    { id: 2, title: "Outdoor Palm Garden Couple", category: "Couples", image: "/assets/gallery_2.jpg", caption: "Outdoor & Nature Couple Shoot" },
    { id: 3, title: "Traditional Couple Moment", category: "Weddings", image: "/assets/gallery_3.jpg", caption: "Candid Traditional Moment" },
    { id: 4, title: "Royal Silk Bridal Portrait", category: "Weddings", image: "/assets/gallery_4.jpg", caption: "Traditional Bridal Saree & Jewelry" },
    { id: 5, title: "Grand Wedding Stage Garland", category: "Weddings", image: "/assets/gallery_5.jpg", caption: "Stage Garland & Ceremony Coverage" },
    { id: 6, title: "Twilight Beach Romantic Embrace", category: "Couples", image: "/assets/gallery_6.jpg", caption: "Pre-Wedding Twilight Beach Shoot" },
    { id: 7, title: "Garden Bloom Couple Portrait", category: "Couples", image: "/assets/gallery_7.jpg", caption: "Pre-Wedding Garden Conceptual Shoot" },
    { id: 8, title: "Joyful Couple Garden Pose", category: "Couples", image: "/assets/gallery_8.jpg", caption: "Pre-Wedding Joyful Moments" },
    { id: 9, title: "Ocean Shore Romantic Moment", category: "Couples", image: "/assets/gallery_9.png", caption: "Pre-Wedding Seashore Romantic Shoot" },
    { id: 10, title: "Beach Water Walk Couple", category: "Couples", image: "/assets/gallery_10.png", caption: "Pre-Wedding Beach Sunset Walk" },

    { id: 11, title: "Royal Mandala Cutout Wedding Album", category: "Albums", image: "/assets/album_1.jpg", caption: "Wood-Carved Mandala Cutout Album" },
    { id: 12, title: "Laser Engraved Wooden Badge Album", category: "Albums", image: "/assets/album_2.jpg", caption: "Wooden Badge Acrylic Photobook" },
    { id: 13, title: "Ornate Gold Mandala Filigree Photobook", category: "Albums", image: "/assets/album_3.jpg", caption: "Gold Filigree Mandala Frame Album" },

    { id: 17, title: "Customized Tribute & Wedding Table Frames", category: "Photo Frames", image: "/assets/frame_1.jpg", caption: "Ornate Gold & Brown Table Frames" },
    { id: 18, title: "With Love Wedding Portrait Frame", category: "Photo Frames", image: "/assets/frame_2.jpg", caption: "Tabletop Temple Backdrop Frame" },
    { id: 19, title: "Happy Wedding Life Temple Background Frame", category: "Photo Frames", image: "/assets/frame_3.jpg", caption: "Traditional Temple Gopuram Frame" },

    { id: 20, title: "3D Desktop Couple Cutout Plaque", category: "Gifts", image: "/assets/gift_4.jpg", caption: "3D Desktop Cutout Plaque" },
    { id: 21, title: "Our Love Story Acrylic Timeline LED Light", category: "Gifts", image: "/assets/gift_3.png", caption: "Illuminated Timeline LED Standee" },
    { id: 22, title: "Illuminated Heart Acrylic LED Light Frame", category: "Gifts", image: "/assets/gift_8_heart_led.png", caption: "Heart-Shaped Custom Photo LED Light Standee" },
    { id: 23, title: "Accordion Photo Reel Memory Heart Box", category: "Gifts", image: "/assets/gift_9_photo_reel.png", caption: "Customized Pull-Out Accordion Photo Reel Gift Box" },
    { id: 24, title: "Mini Heart Bear Gift Tin Set", category: "Gifts", image: "/assets/gift_7_teddy_tins.jpg", caption: "Custom Heart Tin Box with Teddy Bear Keepsake" }
  ],

  googleReviews: {
    url: "https://share.google/0Qtm5lABzubNdQEN2",
    rating: 5.0,
    totalCount: "230+",
    badgeText: "5.0 ★★★★★ Google Rating • 230+ Reviews"
  },

  testimonials: [
    {
      id: 1,
      name: "R. Karthikeyan & Divya",
      avatar: "K",
      avatarBg: "linear-gradient(135deg, #D4AF37 0%, #9A7B1C 100%)",
      location: "Ramanathapuram",
      category: "Weddings & Albums",
      event: "Grand Wedding Photography & Photobook",
      rating: 5,
      date: "Verified Google Review",
      likes: 24,
      comment: "We booked Sivam Digital Studio for our wedding photography and photobook album in Ramanathapuram. The output quality was absolutely stunning! Their candid capturing, album layout design with gold filigree finish, and quick delivery were remarkable. Best photography studio experience."
    },
    {
      id: 2,
      name: "Suresh Kumar",
      avatar: "S",
      avatarBg: "linear-gradient(135deg, #3A7BD5 0%, #3A6073 100%)",
      location: "Kenikarai, Ramnad",
      category: "Customized Frames & Gifts",
      event: "Acrylic Photo Frame & LED Standee",
      rating: 5,
      date: "Verified Google Review",
      likes: 19,
      comment: "Ordered customized love story acrylic photo frame with LED light for my wife's birthday. Finishing was super neat and quality of photo printing is top notch. Very affordable price in Ramnad. Highly recommend Sivam Digital Frame Works!"
    },
    {
      id: 3,
      name: "Anitha & Praveen",
      avatar: "A",
      avatarBg: "linear-gradient(135deg, #E55D87 0%, #5FC3E4 100%)",
      location: "Ramanathapuram",
      category: "Weddings & Albums",
      event: "Pre-Wedding & Reception Shoot",
      rating: 5,
      date: "Verified Google Review",
      likes: 31,
      comment: "Sivam Digital Studio captured our pre-wedding shoot and reception so beautifully! Team is extremely patient, friendly, and creative with poses. The flush mount synthetic HD wedding photobook came out like a royal memory collection."
    },
    {
      id: 4,
      name: "Meenakshi Sundaram",
      avatar: "M",
      avatarBg: "linear-gradient(135deg, #11998e 0%, #38ef7d 100%)",
      location: "Devipattinam Road, Ramnad",
      category: "Studio & Frames",
      event: "Family Portrait & Table Frame Works",
      rating: 5,
      date: "Verified Google Review",
      likes: 16,
      comment: "Extremely satisfied with their professional studio service and frame works. The wooden carved frame and crystal finish prints were perfect. Over 5+ years of trust shines through their work. 5-star service!"
    }
  ]
};
