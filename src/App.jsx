import React, { useState, useEffect } from 'react';

// Default initial text content
const DEFAULT_TEXTS = {
  brandName: "SIDDHARTHA HAVELIA",
  heroBadge: "20+ YRS INDUSTRY EXPERIENCE · CEO & CO-FOUNDER · CA · ACCA (UK)",
  heroTitle1: "BUILDING SYSTEMS THAT SCALE.",
  heroTitle2: "Living a life that lasts.",
  heroBio: "Most of what running a real business actually feels like never makes it into a conversation. Not with the bank. Not with the team. Sometimes not even at home.",
  heroBioBold: "This is built for that founder. The one who keeps going anyway.",
  heroCredBadge: "Chartered Accountant · ACCA (UK) · 20+ Yrs Exp",
  
  featuredTitle: "AS FEATURED IN",
  featured1: "Entrepreneur INDIA",
  featured2: "CBS NEWS",
  featured3: "ABC NEWS",
  featured4: "NBC NEWS",

  believeBanner: "WHAT I BELIEVE ?",
  believeTitle: "Truth Isn't One-Size-Fits-All",
  believeP1: "Like every story that sounds like it belongs on Netflix, mine began in the small city of Lucknow. Fairly disciplined, never bunked classes, didn’t chase thrills. Looking back, that consistency became my biggest advantage — taking me to Delhi University, PwC, and co-founding Mercurius.",
  believeQuote: "\"You're not supposed to do everything. You're supposed to build the system that does it.\"",
  believeQuoteSub: "— Defining PwC Advice That Shaped My Executive Career",
  believeP2: "I used to think there were universally right answers... that in business, in relationships, in life, you just had to find the formula and stick to it. But over time, I’ve seen how often that falls apart. I’ve stopped chasing the one perfect way. I’ve started listening more.",
  believeFooterQuote: "\"This doesn’t mean you stop having a point of view. It just means you leave space for other people to hold theirs too.\"",
  believeImgBadge: "Consistency & Systems",

  builtBanner: "WHAT WE HAVE BUILT ?",
  builtTitle: "AN ECOSYSTEM BUILT FROM THE GROUND UP",
  builtSub: "Today, Mercurius exists because we have always believed in each other more than we have ever believed in any single idea.",
  builtPillar1Title: "Real Business Training",
  builtPillar1Desc: "Built from inside the MSME reality. Every program starts from where the founder actually is — the industry, stage, and specific execution gap.",
  builtPillar2Title: "Guided Systems Facilitation",
  builtPillar2Desc: "Scaled from a team of two to nearly 500 facilitators and advisors who work alongside founders to build sustainable systems.",
  builtPillar3Title: "On-Ground Implementation",
  builtPillar3Desc: "We work directly with your team on the ground — not to deliver a presentation and leave, but to stay until systems are self-sustaining.",
  teamTitle: "The Mercurius Leadership Team",
  teamSub: "Created systems that took us from 2 people to nearly 500 professionals",
  teamBadge: "500 Strong Global Team",

  stat1Num: "20+",
  stat1Label: "Years Industry Experience",
  stat2Num: "500+",
  stat2Label: "Team Scaled Globally",
  stat3Num: "50+",
  stat3Label: "Countries Impacted",
  stat4Num: "16+",
  stat4Label: "Years Building Mercurius",
  statFooterSub: "Numbers are not the point. But they tell part of the story.",
  statFooterQuote: "\"India's next chapter of growth will be written by businesses that never stopped building.\"",

  realityBanner: "THE QUIET MAJORITY — THE FOUNDER'S REALITY",
  realityTitle: "6.3 Crore of Us. No Headlines. No Valuations. Just the Largest Economic Story.",
  realitySub: "Real business growth does not need more motivation. It needs better systems, stronger support, and leaders in its corner who understand what it actually takes.",
  reality1Title: "Funding vs Longevity",
  reality1Desc: "A startup raises ₹10 crore and gets featured everywhere. A real business that employs 200 people for 15 years gets called small. That is worth questioning.",
  reality2Title: "Defined by What You Built",
  reality2Desc: "A real business is not defined by what it raised. It is defined by what it kept standing, the livelihoods protected, and the community held together.",
  reality3Title: "The 10% / 90% Leadership Ratio",
  reality3Desc: "10% is what you can do alone. 90% is what you achieve with a team. Stop trying to do everything yourself and build the system.",
  reality4Title: "Real Impact",
  reality4Desc: "No headlines, no inflated valuations — just real work, real people, and scalable systems that last across generations.",

  speakingBanner: "KEYNOTE SPEAKER & INSIGHTS",
  speakingTitle: "Ideas That Move Rooms & Build Leaders",
  speakingDesc: "From global summits to executive retreat stages — Siddhartha delivers keynotes on entrepreneurship, system delegation, and turning failure into strategic clarity.",
  speakingBadge: "Keynote Speaker",

  mapsBanner: "THE MAPS DELEGATION FRAMEWORK",
  mapsQuote: "\"Delegation isn't about doing less. It's about enabling more.\"",
  mapsMTitle: "Monitor",
  mapsMSub: "High Priority | Low Readiness",
  mapsMDesc: "Guide closely & frequently. Ensure high priority objectives are safeguarded while building team competency.",
  mapsATitle: "Assign",
  mapsASub: "High Priority | High Readiness",
  mapsADesc: "Delegate fully. Hand total ownership to trusted leaders and focus purely on outcome verification.",
  mapsPTitle: "Pause",
  mapsPSub: "Low Priority | Low Readiness",
  mapsPDesc: "Not the right time, not the right task. Stop unnecessary busywork and protect executive bandwidth.",
  mapsSTitle: "Support",
  mapsSSub: "Low Priority | High Readiness",
  mapsSDesc: "Offer support and let them lead. Great opportunity for developing future company leadership.",

  lessonsBanner: "IT'S OKAY TO FAIL — 4 CORE LESSONS",
  lessonsTitle: "\"Failure Is Not a Full Stop. It Is Life Showing A Different Route.\"",
  lessonsSub: "In the early days of Mercurius, we made hiring decisions based entirely on gut... THEY DIDN'T WORK. We handed over full control on projects without solid systems... THEY FAILED.",
  lesson1Title: "Motion ≠ Progress",
  lesson1Desc: "Busywork creates the illusion of momentum. Real progress requires system architecture and clear direction.",
  lesson2Title: "Process ≠ Optional",
  lesson2Desc: "Systems aren't bureaucracy — they are freedom. Solid processes guarantee client delivery consistency.",
  lesson3Title: "Gut ≠ Strategy",
  lesson3Desc: "Instinct is important, but scalable businesses require verified criteria and strategic structure.",
  lesson4Title: "Looks Solid ≠ Is Solid",
  lesson4Desc: "Never assume a system works without verification. Always audit execution to ensure zero half-deliveries.",

  beyondBanner: "BEYOND THE BOARDROOM — LIFE & BALANCE",
  beyondTitle: "Still Building. Always Living.",
  beyondDesc: "While building Mercurius and working on myself, life kept bringing interests: Gym in pursuit of six-pack abs, dance to avoid embarrassing wedding group performances, and meditation to calm executive chaos.",
  beyondQuote: "“A life that earns you the dollars and shows you how to spend them while truly living”",

  riseBanner: "RISE WITH US",
  riseTitle: "Still Building. Always Listening.",
  riseP1: "Everything shared here is just a snapshot. I’m still figuring it out. Some days I lead. Some days I learn. Most days, it’s both.",
  riseP2: "If I can be that person for someone else — through a conversation, a keynote collaboration, or an advisory session — then this story keeps going.",

  footerName: "SIDDHARTHA HAVELIA",
  footerSub: "CEO & Co-Founder | Keynote Speaker | Chartered Accountant | ACCA, UK"
};

// Default initial image settings
const DEFAULT_IMAGES = {
  hero: { src: '/images/hero.png', fit: 'object-contain', zoom: 1, pos: 'object-center' },
  story: { src: '/images/story.png', fit: 'object-cover', zoom: 1.1, pos: 'object-top' },
  philosophy: { src: '/images/philosophy.png', fit: 'object-contain', zoom: 1, pos: 'object-center' },
  team: { src: '/images/team.jpg', fit: 'object-cover', zoom: 1, pos: 'object-center' },
  speaker: { src: '/images/speaker.png', fit: 'object-cover', zoom: 1, pos: 'object-top' },
  stage: { src: '/images/stage.jpg', fit: 'object-cover', zoom: 1, pos: 'object-center' },
  working: { src: '/images/working.jpg', fit: 'object-cover', zoom: 1, pos: 'object-center' },
  overcoat: { src: '/images/overcoat.png', fit: 'object-cover', zoom: 1, pos: 'object-center' },
  casual: { src: '/images/casual.jpg', fit: 'object-cover', zoom: 1, pos: 'object-center' },
  office: { src: '/images/office.jpg', fit: 'object-cover', zoom: 1, pos: 'object-center' },
};

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [saveMessage, setSaveMessage] = useState('');

  // Persisted state initialized synchronously from localStorage
  const [texts, setTexts] = useState(() => {
    try {
      const saved = localStorage.getItem('sh_portfolio_texts');
      return saved ? JSON.parse(saved) : DEFAULT_TEXTS;
    } catch (e) {
      return DEFAULT_TEXTS;
    }
  });

  const [images, setImages] = useState(() => {
    try {
      const saved = localStorage.getItem('sh_portfolio_images');
      if (saved) {
        const parsed = JSON.parse(saved);
        // Merge with defaults to guarantee all keys exist
        return { ...DEFAULT_IMAGES, ...parsed };
      }
      return DEFAULT_IMAGES;
    } catch (e) {
      return DEFAULT_IMAGES;
    }
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Synchronous, bulletproof update and save function for images
  const updateImagesState = (newImages) => {
    setImages(newImages);
    try {
      localStorage.setItem('sh_portfolio_images', JSON.stringify(newImages));
      setSaveMessage('Image Saved!');
      setTimeout(() => setSaveMessage(''), 1500);
    } catch (e) {
      console.warn("Storage warning:", e);
      setSaveMessage('Saved (Memory)');
      setTimeout(() => setSaveMessage(''), 1500);
    }
  };

  // Update text block handler
  const updateText = (key, value) => {
    const updated = { ...texts, [key]: value };
    setTexts(updated);
    try {
      localStorage.setItem('sh_portfolio_texts', JSON.stringify(updated));
      setSaveMessage('Text Saved!');
      setTimeout(() => setSaveMessage(''), 1500);
    } catch (e) {
      console.error(e);
    }
  };

  // Reset to original defaults
  const resetToDefaults = () => {
    if (window.confirm("Are you sure you want to reset all text and image edits back to original defaults?")) {
      setTexts(DEFAULT_TEXTS);
      setImages(DEFAULT_IMAGES);
      localStorage.removeItem('sh_portfolio_texts');
      localStorage.removeItem('sh_portfolio_images');
      setSaveMessage('Reset to defaults!');
      setTimeout(() => setSaveMessage(''), 2000);
    }
  };

  // Image manipulation actions
  const handleImageReplace = (key, event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const base64Src = e.target.result;
        const newImages = {
          ...images,
          [key]: { ...images[key], src: base64Src }
        };
        updateImagesState(newImages);
      };
      reader.readAsDataURL(file);
    }
  };

  const toggleFit = (key) => {
    const newImages = {
      ...images,
      [key]: {
        ...images[key],
        fit: images[key].fit === 'object-cover' ? 'object-contain' : 'object-cover'
      }
    };
    updateImagesState(newImages);
  };

  const adjustZoom = (key, delta) => {
    const currentZoom = images[key].zoom || 1;
    const nextZoom = Math.max(0.5, Math.min(3.0, +(currentZoom + delta).toFixed(1)));
    const newImages = {
      ...images,
      [key]: {
        ...images[key],
        zoom: nextZoom
      }
    };
    updateImagesState(newImages);
  };

  const cyclePos = (key) => {
    const positions = ['object-center', 'object-top', 'object-bottom'];
    const currentIdx = positions.indexOf(images[key].pos || 'object-center');
    const nextPos = positions[(currentIdx + 1) % positions.length];
    const newImages = {
      ...images,
      [key]: {
        ...images[key],
        pos: nextPos
      }
    };
    updateImagesState(newImages);
  };

  // Reusable Image Control Toolbar
  const ImageOverlayControls = ({ imgKey }) => {
    if (!isEditMode) return null;
    const current = images[imgKey] || DEFAULT_IMAGES[imgKey];
    return (
      <div className="absolute top-3 left-3 right-3 z-40 bg-[#080D0C]/95 border-2 border-[#00C896] rounded-xl p-2 shadow-2xl backdrop-blur-md flex flex-col items-center gap-1.5 animate-fadeIn">
        <div className="flex items-center justify-between w-full px-1">
          <span className="text-[10px] font-black uppercase text-[#00C896] tracking-wider">📷 Edit Photo ({imgKey})</span>
          <span className="text-[9px] text-gray-300 font-extrabold">Zoom: {current.zoom}x</span>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-1.5 w-full">
          <label className="cursor-pointer px-2.5 py-1 bg-[#00C896] text-black font-black text-[10px] uppercase rounded hover:bg-[#00E5AB] transition-colors shadow">
            📁 Change Image
            <input 
              type="file" 
              accept="image/*" 
              className="hidden" 
              onChange={(e) => handleImageReplace(imgKey, e)} 
            />
          </label>

          <button 
            onClick={() => toggleFit(imgKey)}
            className="px-2 py-1 bg-gray-900 text-gray-100 border border-gray-700 rounded font-bold text-[10px] uppercase hover:border-[#00C896]"
          >
            Fit: {current.fit.replace('object-', '')}
          </button>

          <button 
            onClick={() => adjustZoom(imgKey, -0.1)}
            className="px-2 py-1 bg-gray-900 text-gray-100 border border-gray-700 rounded font-bold text-[10px] hover:border-[#00C896]"
          >
            ➖ Zoom Out
          </button>

          <button 
            onClick={() => adjustZoom(imgKey, 0.1)}
            className="px-2 py-1 bg-gray-900 text-gray-100 border border-gray-700 rounded font-bold text-[10px] hover:border-[#00C896]"
          >
            ➕ Zoom In
          </button>

          <button 
            onClick={() => cyclePos(imgKey)}
            className="px-2 py-1 bg-gray-900 text-gray-100 border border-gray-700 rounded font-bold text-[10px] uppercase hover:border-[#00C896]"
          >
            Pos: {current.pos.replace('object-', '')}
          </button>
        </div>
      </div>
    );
  };

  // Helper for editable text node
  const EditableText = ({ textKey, className, tag = "div" }) => {
    const Tag = tag;
    return (
      <Tag
        className={className}
        contentEditable={isEditMode}
        suppressContentEditableWarning
        onBlur={(e) => updateText(textKey, e.target.innerText)}
      >
        {texts[textKey] || DEFAULT_TEXTS[textKey]}
      </Tag>
    );
  };

  return (
    <div className="min-h-screen bg-[#050505] text-gray-100 font-sans selection:bg-[#00C896] selection:text-black relative overflow-x-hidden">
      
      {/* ==================== EDIT MODE BANNER WITH AUTO-SAVE STATUS ==================== */}
      {isEditMode && (
        <div className="fixed top-0 left-0 right-0 z-[100] bg-[#00C896] text-black font-black text-xs py-2 px-4 text-center uppercase tracking-widest shadow-2xl flex items-center justify-center gap-3">
          <span>✏️ VISUAL EDIT MODE ACTIVE — ALL TEXT & PHOTO RESIZING AUTO-SAVE PERMANENTLY</span>
          
          {saveMessage && (
            <span className="px-2 py-0.5 bg-black text-[#00C896] rounded text-[10px] font-extrabold animate-pulse">
              ✓ {saveMessage}
            </span>
          )}

          <button 
            onClick={resetToDefaults}
            className="px-2.5 py-0.5 bg-red-600 text-white rounded text-[10px] font-extrabold uppercase hover:bg-red-700 transition-colors"
            title="Reset all text and images back to defaults"
          >
            🔄 Reset Defaults
          </button>

          <button 
            onClick={() => setIsEditMode(false)}
            className="px-3 py-0.5 bg-black text-[#00C896] rounded text-[10px] uppercase font-bold hover:bg-gray-900 shadow"
          >
            Exit Edit Mode
          </button>
        </div>
      )}

      {/* ==================== NAVBAR ==================== */}
      <nav className={`fixed left-0 right-0 z-50 transition-all duration-300 ${
        isEditMode ? 'top-8' : 'top-0'
      } ${
        scrolled 
          ? 'bg-[#050505]/95 backdrop-blur-md py-3.5 border-b border-[#00C896]/30 shadow-2xl shadow-black/80' 
          : 'bg-[#080D0C]/90 backdrop-blur-sm py-4 border-b border-gray-900'
      }`}>
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
          
          {/* Logo */}
          <a href="#" className="font-display font-black tracking-widest text-lg sm:text-xl text-white flex items-center gap-3 group">
            <span className="w-9 h-9 rounded-lg bg-[#00C896] text-black font-extrabold flex items-center justify-center text-sm shadow-lg shadow-[#00C896]/20 group-hover:scale-105 transition-transform flex-shrink-0">
              SH
            </span>
            <EditableText textKey="brandName" className="uppercase tracking-widest text-sm sm:text-base font-extrabold" />
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center space-x-8 text-xs xl:text-sm font-semibold uppercase tracking-widest text-gray-300">
            <a href="#about" className="hover:text-[#00C896] transition-colors py-1">Story</a>
            <a href="#believe" className="hover:text-[#00C896] transition-colors py-1">What I Believe</a>
            <a href="#built" className="hover:text-[#00C896] transition-colors py-1">What We Built</a>
            <a href="#majority" className="hover:text-[#00C896] transition-colors py-1">The Reality</a>
            <a href="#maps" className="hover:text-[#00C896] transition-colors py-1">MAPS System</a>
            <a href="#lessons" className="hover:text-[#00C896] transition-colors py-1">Lessons</a>
          </div>

          {/* Right Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <button 
              onClick={() => setIsEditMode(!isEditMode)}
              className={`px-3.5 py-2 rounded-lg font-bold text-xs uppercase tracking-wider transition-all duration-300 border ${
                isEditMode 
                  ? 'bg-[#00C896] text-black border-[#00C896] shadow-lg shadow-[#00C896]/30' 
                  : 'bg-gray-900 text-gray-300 border-gray-700 hover:border-[#00C896] hover:text-white'
              }`}
            >
              {isEditMode ? '✓ Editing' : '✏️ Edit Mode'}
            </button>

            <a 
              href="mailto:HELLO@SIDDHARTHAHAVELIA.COM"
              className="px-5 py-2.5 rounded-lg bg-[#00C896] text-black font-black text-xs uppercase tracking-wider hover:bg-[#00E5AB] transition-all duration-300 shadow-xl shadow-[#00C896]/20 inline-block"
            >
              Rise With Us
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button 
            onClick={() => setMobileMenu(!mobileMenu)}
            className="lg:hidden text-white hover:text-[#00C896] p-1.5 focus:outline-none"
            aria-label="Open Mobile Menu"
          >
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileMenu ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenu && (
          <div className="lg:hidden bg-[#080D0C] border-b border-[#00C896]/30 px-6 py-6 space-y-4 text-white shadow-2xl">
            <a href="#about" onClick={() => setMobileMenu(false)} className="block py-1.5 hover:text-[#00C896] font-semibold text-sm uppercase tracking-wider">Story</a>
            <a href="#believe" onClick={() => setMobileMenu(false)} className="block py-1.5 hover:text-[#00C896] font-semibold text-sm uppercase tracking-wider">What I Believe</a>
            <a href="#built" onClick={() => setMobileMenu(false)} className="block py-1.5 hover:text-[#00C896] font-semibold text-sm uppercase tracking-wider">What We Built</a>
            <a href="#majority" onClick={() => setMobileMenu(false)} className="block py-1.5 hover:text-[#00C896] font-semibold text-sm uppercase tracking-wider">The Reality</a>
            <a href="#maps" onClick={() => setMobileMenu(false)} className="block py-1.5 hover:text-[#00C896] font-semibold text-sm uppercase tracking-wider">MAPS System</a>
            <a href="#lessons" onClick={() => setMobileMenu(false)} className="block py-1.5 hover:text-[#00C896] font-semibold text-sm uppercase tracking-wider">Lessons</a>
            
            <div className="pt-3 space-y-2.5">
              <button 
                onClick={() => { setIsEditMode(!isEditMode); setMobileMenu(false); }}
                className="w-full text-center py-2.5 bg-[#00C896] text-black font-black rounded-lg text-xs uppercase tracking-wider shadow"
              >
                {isEditMode ? '✓ Exit Edit Mode' : '✏️ Enable Live Visual Editing'}
              </button>

              <a 
                href="mailto:HELLO@SIDDHARTHAHAVELIA.COM"
                className="block text-center py-3 bg-gray-900 border border-[#00C896] text-[#00C896] font-black rounded-lg text-xs uppercase tracking-wider"
              >
                Rise With Us
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* ==================== HERO SECTION ==================== */}
      <section id="about" className="pt-32 sm:pt-36 pb-16 md:pt-44 md:pb-28 relative overflow-hidden bg-[#050505]">
        <div className="absolute top-1/4 right-1/4 w-[350px] sm:w-[650px] h-[350px] sm:h-[650px] bg-[#00C896]/10 rounded-full blur-[120px] sm:blur-[160px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Text */}
          <div className="lg:col-span-7 space-y-6 text-left z-10">
            <EditableText 
              textKey="heroBadge" 
              className="inline-block px-4 py-1.5 bg-[#00C896]/10 border border-[#00C896] rounded-md text-[#00C896] font-black text-[10px] sm:text-xs uppercase tracking-widest"
            />

            <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white leading-[1.08]">
              <EditableText textKey="heroTitle1" tag="span" /> <br />
              <EditableText textKey="heroTitle2" tag="span" className="text-[#00C896] font-serif italic normal-case font-normal" />
            </h1>

            <p className="text-gray-300 text-base sm:text-lg md:text-xl font-normal leading-relaxed max-w-2xl">
              <EditableText textKey="heroBio" tag="span" /> <br className="hidden sm:inline" />
              <EditableText textKey="heroBioBold" tag="strong" className="text-white font-bold" />
            </p>

            <div className="pt-3 flex flex-wrap gap-4 items-center">
              <a 
                href="mailto:HELLO@SIDDHARTHAHAVELIA.COM"
                className="w-full sm:w-auto text-center px-8 py-4 rounded-xl bg-[#00C896] text-black font-black text-xs sm:text-sm uppercase tracking-wider hover:bg-[#00E5AB] transition-all duration-300 shadow-xl shadow-[#00C896]/30 inline-flex items-center justify-center gap-2"
              >
                Rise With Us <span>→</span>
              </a>
              <a 
                href="#believe"
                className="w-full sm:w-auto text-center px-8 py-4 rounded-xl bg-[#0A0E0D] border border-gray-800 text-gray-200 font-bold text-xs sm:text-sm uppercase tracking-wider hover:border-[#00C896] transition-all"
              >
                Read Philosophy
              </a>
            </div>
          </div>

          {/* Right Hero Cutout */}
          <div className="lg:col-span-5 relative flex justify-center items-end mt-4 lg:mt-0">
            <div className="relative w-full max-w-md sm:max-w-lg flex flex-col items-center">
              
              <ImageOverlayControls imgKey="hero" />

              <div className="absolute w-[280px] sm:w-[380px] lg:w-[440px] h-[280px] sm:h-[380px] lg:h-[440px] rounded-full border-2 border-[#00C896]/30 -z-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#00C896]/5" />
              <div className="absolute w-[240px] sm:w-[320px] lg:w-[380px] h-[240px] sm:h-[320px] lg:h-[380px] rounded-full border-[8px] sm:border-[10px] border-[#00C896]/15 -z-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

              <div className="relative z-10 w-full overflow-hidden flex justify-center">
                <img 
                  src={images.hero.src} 
                  alt="Siddhartha Havelia - CEO & Founder" 
                  className={`w-auto h-[340px] sm:h-[460px] lg:h-[520px] max-w-full ${images.hero.fit} ${images.hero.pos} transition-all duration-300`}
                  style={{ transform: `scale(${images.hero.zoom})` }}
                />
                <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-[#050505] to-transparent pointer-events-none" />
              </div>
              
              <div className="relative z-20 -mt-4 px-5 py-2 rounded-full bg-[#0A0E0D]/95 backdrop-blur-md border border-[#00C896]/40 flex items-center gap-2.5 shadow-2xl">
                <span className="w-2.5 h-2.5 rounded-full bg-[#00C896] animate-pulse" />
                <EditableText textKey="heroCredBadge" className="text-[10px] sm:text-xs font-bold text-white uppercase tracking-wider" />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ==================== AS FEATURED IN STRIP ==================== */}
      <section className="py-7 bg-[#080D0C] border-y-2 border-[#00C896]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
          <EditableText textKey="featuredTitle" className="font-display font-black text-sm sm:text-base md:text-lg text-[#00C896] uppercase tracking-widest whitespace-nowrap" />
          <div className="flex flex-wrap items-center justify-center md:justify-around gap-6 sm:gap-10 md:gap-14 text-white font-display font-black text-xs sm:text-base md:text-lg opacity-90">
            <EditableText textKey="featured1" tag="span" />
            <EditableText textKey="featured2" tag="span" />
            <EditableText textKey="featured3" tag="span" />
            <EditableText textKey="featured4" tag="span" />
          </div>
        </div>
      </section>

      {/* ==================== SECTION BANNER: WHAT I BELIEVE ? ==================== */}
      <EditableText id="believe" textKey="believeBanner" className="section-banner-dark py-5 px-6 text-center text-lg sm:text-2xl md:text-3xl" />

      {/* ==================== CONTENT: WHAT I BELIEVE ? ==================== */}
      <section className="py-16 sm:py-24 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Narrative Content */}
          <div className="lg:col-span-7 space-y-6">
            <EditableText textKey="believeTitle" tag="h2" className="text-2xl sm:text-4xl font-black text-white uppercase font-display tracking-tight" />
            <EditableText textKey="believeP1" tag="p" className="text-gray-300 text-sm sm:text-lg leading-relaxed font-light" />

            <div className="p-5 sm:p-7 bg-[#080D0C] text-white rounded-2xl border-l-8 border-[#00C896] space-y-2 shadow-xl border border-gray-800">
              <EditableText textKey="believeQuote" tag="p" className="text-base sm:text-lg font-serif italic text-[#00C896]" />
              <EditableText textKey="believeQuoteSub" tag="p" className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-gray-400" />
            </div>

            <EditableText textKey="believeP2" tag="p" className="text-gray-300 text-sm sm:text-base leading-relaxed font-light" />
            <EditableText textKey="believeFooterQuote" tag="p" className="text-[#00C896] font-bold text-sm sm:text-base border-l-4 border-[#00C896] pl-4 italic" />
          </div>

          {/* Right Image (Photo 2 - Circle) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full border-4 sm:border-8 border-[#00C896] bg-[#080D0C] shadow-2xl overflow-hidden flex items-center justify-center">
              
              <ImageOverlayControls imgKey="story" />

              <img 
                src={images.story.src} 
                alt="Siddhartha Havelia Story" 
                className={`w-full h-full ${images.story.fit} ${images.story.pos} transition-all duration-300`}
                style={{ transform: `scale(${images.story.zoom})` }}
              />
              <div className="absolute bottom-3 sm:bottom-4 bg-[#080D0C]/95 text-[#00C896] font-black text-[10px] sm:text-xs px-4 py-2 rounded-full border border-[#00C896] shadow-xl uppercase tracking-wider z-20">
                <EditableText textKey="believeImgBadge" tag="span" />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ==================== SECTION BANNER: WHAT WE HAVE BUILT ? ==================== */}
      <EditableText id="built" textKey="builtBanner" className="section-banner-dark py-5 px-6 text-center text-lg sm:text-2xl md:text-3xl" />

      {/* ==================== CONTENT: WHAT WE HAVE BUILT ? ==================== */}
      <section className="py-16 sm:py-24 bg-[#080D0C]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-10 sm:space-y-14">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <EditableText textKey="builtTitle" tag="h2" className="font-display font-black text-2xl sm:text-4xl text-white uppercase tracking-tight" />
            <EditableText textKey="builtSub" tag="p" className="text-gray-300 text-sm sm:text-lg font-light" />
          </div>

          {/* 3 Pillar Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="bg-[#0A0E0D] border-t-4 border-[#00C896] border-x border-b border-gray-800 p-6 sm:p-8 rounded-2xl space-y-4 hover:-translate-y-1 transition-transform duration-300 shadow-xl flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#00C896] text-black font-black text-xl flex items-center justify-center mb-4">01</div>
                <EditableText textKey="builtPillar1Title" tag="h3" className="font-display font-extrabold text-lg sm:text-xl text-[#00C896] mb-2" />
                <EditableText textKey="builtPillar1Desc" tag="p" className="text-gray-300 text-xs sm:text-sm leading-relaxed font-light" />
              </div>
            </div>

            <div className="bg-[#0A0E0D] border-t-4 border-[#00C896] border-x border-b border-gray-800 p-6 sm:p-8 rounded-2xl space-y-4 hover:-translate-y-1 transition-transform duration-300 shadow-xl flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#00C896] text-black font-black text-xl flex items-center justify-center mb-4">02</div>
                <EditableText textKey="builtPillar2Title" tag="h3" className="font-display font-extrabold text-lg sm:text-xl text-[#00C896] mb-2" />
                <EditableText textKey="builtPillar2Desc" tag="p" className="text-gray-300 text-xs sm:text-sm leading-relaxed font-light" />
              </div>
            </div>

            <div className="bg-[#0A0E0D] border-t-4 border-[#00C896] border-x border-b border-gray-800 p-6 sm:p-8 rounded-2xl space-y-4 hover:-translate-y-1 transition-transform duration-300 shadow-xl flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#00C896] text-black font-black text-xl flex items-center justify-center mb-4">03</div>
                <EditableText textKey="builtPillar3Title" tag="h3" className="font-display font-extrabold text-lg sm:text-xl text-[#00C896] mb-2" />
                <EditableText textKey="builtPillar3Desc" tag="p" className="text-gray-300 text-xs sm:text-sm leading-relaxed font-light" />
              </div>
            </div>
          </div>

          {/* Photo 5: Mercurius Leadership Team */}
          <div className="rounded-2xl overflow-hidden border border-[#00C896]/40 bg-[#050505] shadow-2xl p-2.5 sm:p-3 relative">
            <ImageOverlayControls imgKey="team" />

            <div className="w-full h-64 sm:h-80 md:h-[460px] rounded-xl overflow-hidden relative">
              <img 
                src={images.team.src} 
                alt="Mercurius Leadership Team" 
                className={`w-full h-full ${images.team.fit} ${images.team.pos} transition-all duration-300`}
                style={{ transform: `scale(${images.team.zoom})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-6 right-6 flex flex-col md:flex-row justify-between items-start md:items-center text-white gap-3">
                <div>
                  <EditableText textKey="teamTitle" tag="p" className="font-bold text-base sm:text-lg text-white" />
                  <EditableText textKey="teamSub" tag="p" className="text-xs text-gray-300" />
                </div>
                <EditableText textKey="teamBadge" tag="span" className="px-4 py-2 bg-[#00C896] text-black font-black text-xs uppercase tracking-wider rounded-lg shadow-lg flex-shrink-0" />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ==================== STATS STRIP ==================== */}
      <section className="py-12 sm:py-20 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <div className="bg-[#0A0E0D] border-2 border-[#00C896] text-white rounded-3xl p-8 sm:p-14 shadow-2xl space-y-8">
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-y lg:divide-y-0 lg:divide-x divide-gray-800">
              <div className="pt-3 lg:pt-0">
                <EditableText textKey="stat1Num" className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-[#00C896]" />
                <EditableText textKey="stat1Label" className="text-xs uppercase font-bold tracking-wider text-gray-300 mt-2" />
              </div>

              <div className="pt-3 lg:pt-0">
                <EditableText textKey="stat2Num" className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-[#00C896]" />
                <EditableText textKey="stat2Label" className="text-xs uppercase font-bold tracking-wider text-gray-300 mt-2" />
              </div>

              <div className="pt-3 lg:pt-0">
                <EditableText textKey="stat3Num" className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-[#00C896]" />
                <EditableText textKey="stat3Label" className="text-xs uppercase font-bold tracking-wider text-gray-300 mt-2" />
              </div>

              <div className="pt-3 lg:pt-0">
                <EditableText textKey="stat4Num" className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-[#00C896]" />
                <EditableText textKey="stat4Label" className="text-xs uppercase font-bold tracking-wider text-gray-300 mt-2" />
              </div>
            </div>

            <div className="text-center pt-6 border-t border-gray-800 space-y-2">
              <EditableText textKey="statFooterSub" tag="p" className="text-xs sm:text-sm font-semibold text-gray-400" />
              <EditableText textKey="statFooterQuote" tag="p" className="text-base sm:text-xl font-serif italic text-[#00C896]" />
            </div>

          </div>
        </div>
      </section>

      {/* ==================== SECTION BANNER: THE QUIET MAJORITY ==================== */}
      <EditableText id="majority" textKey="realityBanner" className="section-banner-dark py-5 px-6 text-center text-lg sm:text-2xl md:text-3xl" />

      {/* ==================== CONTENT: THE QUIET MAJORITY ==================== */}
      <section className="py-16 sm:py-24 bg-[#080D0C]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          <div className="lg:col-span-5 space-y-4">
            <EditableText textKey="realityTitle" tag="h2" className="font-display font-black text-2xl sm:text-4xl text-white uppercase leading-tight" />
            <EditableText textKey="realitySub" tag="p" className="text-gray-300 text-sm sm:text-base font-light leading-relaxed" />
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-6 bg-[#0A0E0D] border border-gray-800 rounded-2xl space-y-2 shadow-lg hover:border-[#00C896] transition-colors">
              <EditableText textKey="reality1Title" tag="h4" className="font-bold text-white text-base" />
              <EditableText textKey="reality1Desc" tag="p" className="text-xs text-gray-400 leading-relaxed font-light" />
            </div>

            <div className="p-6 bg-[#0A0E0D] border border-gray-800 rounded-2xl space-y-2 shadow-lg hover:border-[#00C896] transition-colors">
              <EditableText textKey="reality2Title" tag="h4" className="font-bold text-white text-base" />
              <EditableText textKey="reality2Desc" tag="p" className="text-xs text-gray-400 leading-relaxed font-light" />
            </div>

            <div className="p-6 bg-[#0A0E0D] border border-gray-800 rounded-2xl space-y-2 shadow-lg hover:border-[#00C896] transition-colors">
              <EditableText textKey="reality3Title" tag="h4" className="font-bold text-white text-base" />
              <EditableText textKey="reality3Desc" tag="p" className="text-xs text-gray-400 leading-relaxed font-light" />
            </div>

            <div className="p-6 bg-[#0A0E0D] border border-gray-800 rounded-2xl space-y-2 shadow-lg hover:border-[#00C896] transition-colors">
              <EditableText textKey="reality4Title" tag="h4" className="font-bold text-white text-base" />
              <EditableText textKey="reality4Desc" tag="p" className="text-xs text-gray-400 leading-relaxed font-light" />
            </div>
          </div>

        </div>
      </section>

      {/* ==================== SECTION BANNER: KEYNOTE SPEAKER ==================== */}
      <EditableText id="speaking" textKey="speakingBanner" className="section-banner-dark py-5 px-6 text-center text-lg sm:text-2xl md:text-3xl" />

      {/* ==================== CONTENT: KEYNOTE SPEAKER ==================== */}
      <section className="py-16 sm:py-24 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Photo 3: Speaker Standing Cutout */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative">
              
              <ImageOverlayControls imgKey="speaker" />

              <div className="w-64 sm:w-80 h-96 sm:h-[460px] rounded-2xl bg-[#080D0C] border-2 border-[#00C896] overflow-hidden shadow-2xl relative">
                <img 
                  src={images.speaker.src} 
                  alt="Siddhartha Keynote Speaker" 
                  className={`w-full h-full ${images.speaker.fit} ${images.speaker.pos} transition-all duration-300`}
                  style={{ transform: `scale(${images.speaker.zoom})` }}
                />
              </div>
              <EditableText textKey="speakingBadge" tag="div" className="absolute -bottom-3 -right-3 bg-[#00C896] text-black font-black text-xs px-4 py-2 rounded-lg shadow-xl uppercase tracking-wider z-20" />
            </div>
          </div>

          {/* Right Text + Photo 4 Stage */}
          <div className="lg:col-span-7 space-y-6">
            <EditableText textKey="speakingTitle" tag="h3" className="text-2xl sm:text-3xl font-black text-white uppercase font-display" />
            <EditableText textKey="speakingDesc" tag="p" className="text-gray-300 text-sm sm:text-lg leading-relaxed font-light" />

            {/* Photo 4 Stage Photo */}
            <div className="rounded-xl overflow-hidden border border-[#00C896] shadow-lg h-52 sm:h-72 relative">
              <ImageOverlayControls imgKey="stage" />
              <img 
                src={images.stage.src} 
                alt="Siddhartha on Stage - Network in All Directions" 
                className={`w-full h-full ${images.stage.fit} ${images.stage.pos} transition-all duration-300`}
                style={{ transform: `scale(${images.stage.zoom})` }}
              />
            </div>

            <div className="pt-2">
              <a 
                href="mailto:HELLO@SIDDHARTHAHAVELIA.COM"
                className="w-full sm:w-auto text-center px-8 py-4 rounded-xl bg-[#00C896] text-black font-black text-xs uppercase tracking-wider hover:bg-[#00E5AB] transition-all inline-block shadow-lg"
              >
                Book Siddhartha For Keynote →
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* ==================== SECTION BANNER: MAPS DELEGATION FRAMEWORK ==================== */}
      <EditableText id="maps" textKey="mapsBanner" className="section-banner-dark py-5 px-6 text-center text-lg sm:text-2xl md:text-3xl" />

      {/* ==================== CONTENT: MAPS FRAMEWORK ==================== */}
      <section className="py-16 sm:py-24 bg-[#080D0C]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-10 sm:space-y-14">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Photo 6: Working at Laptop */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="rounded-2xl overflow-hidden border border-[#00C896]/40 bg-[#0A0E0D] p-2.5 shadow-2xl w-full relative">
                <ImageOverlayControls imgKey="working" />
                <img 
                  src={images.working.src} 
                  alt="Siddhartha Havelia MAPS Framework" 
                  className={`w-full h-64 sm:h-[360px] rounded-xl ${images.working.fit} ${images.working.pos} transition-all duration-300`}
                  style={{ transform: `scale(${images.working.zoom})` }}
                />
                <div className="p-3 text-white text-center">
                  <EditableText textKey="mapsQuote" tag="p" className="font-serif italic text-xs sm:text-sm text-[#00C896]" />
                </div>
              </div>
            </div>

            {/* 4 Quadrants Grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 bg-[#0A0E0D] text-white rounded-2xl border-t-4 border-[#00C896] border-x border-b border-gray-800 space-y-3 shadow-xl flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#00C896] text-black font-black text-xl flex items-center justify-center mb-3">M</div>
                  <EditableText textKey="mapsMTitle" tag="h4" className="font-display font-extrabold text-lg sm:text-xl text-[#00C896] mb-1" />
                  <EditableText textKey="mapsMSub" tag="p" className="text-xs uppercase font-bold tracking-wider text-gray-400 mb-2" />
                  <EditableText textKey="mapsMDesc" tag="p" className="text-xs sm:text-sm text-gray-300 leading-relaxed font-light" />
                </div>
              </div>

              <div className="p-6 bg-[#0A0E0D] text-white rounded-2xl border-t-4 border-[#00C896] border-x border-b border-gray-800 space-y-3 shadow-xl flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#00C896] text-black font-black text-xl flex items-center justify-center mb-3">A</div>
                  <EditableText textKey="mapsATitle" tag="h4" className="font-display font-extrabold text-lg sm:text-xl text-[#00C896] mb-1" />
                  <EditableText textKey="mapsASub" tag="p" className="text-xs uppercase font-bold tracking-wider text-gray-400 mb-2" />
                  <EditableText textKey="mapsADesc" tag="p" className="text-xs sm:text-sm text-gray-300 leading-relaxed font-light" />
                </div>
              </div>

              <div className="p-6 bg-[#0A0E0D] text-white rounded-2xl border-t-4 border-[#00C896] border-x border-b border-gray-800 space-y-3 shadow-xl flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#00C896] text-black font-black text-xl flex items-center justify-center mb-3">P</div>
                  <EditableText textKey="mapsPTitle" tag="h4" className="font-display font-extrabold text-lg sm:text-xl text-[#00C896] mb-1" />
                  <EditableText textKey="mapsPSub" tag="p" className="text-xs uppercase font-bold tracking-wider text-gray-400 mb-2" />
                  <EditableText textKey="mapsPDesc" tag="p" className="text-xs sm:text-sm text-gray-300 leading-relaxed font-light" />
                </div>
              </div>

              <div className="p-6 bg-[#0A0E0D] text-white rounded-2xl border-t-4 border-[#00C896] border-x border-b border-gray-800 space-y-3 shadow-xl flex flex-col justify-between">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#00C896] text-black font-black text-xl flex items-center justify-center mb-3">S</div>
                  <EditableText textKey="mapsSTitle" tag="h4" className="font-display font-extrabold text-lg sm:text-xl text-[#00C896] mb-1" />
                  <EditableText textKey="mapsSSub" tag="p" className="text-xs uppercase font-bold tracking-wider text-gray-400 mb-2" />
                  <EditableText textKey="mapsSDesc" tag="p" className="text-xs sm:text-sm text-gray-300 leading-relaxed font-light" />
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ==================== SECTION BANNER: IT'S OKAY TO FAIL ==================== */}
      <EditableText id="lessons" textKey="lessonsBanner" className="section-banner-dark py-5 px-6 text-center text-lg sm:text-2xl md:text-3xl" />

      {/* ==================== CONTENT: FAILURE LESSONS ==================== */}
      <section className="py-16 sm:py-24 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-10 sm:space-y-14">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <EditableText textKey="lessonsTitle" tag="h2" className="font-display font-black text-2xl sm:text-4xl text-white uppercase tracking-tight" />
            <EditableText textKey="lessonsSub" tag="p" className="text-gray-300 text-sm sm:text-lg font-light" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#0A0E0D] text-white p-6 rounded-2xl border-2 border-[#00C896] space-y-3 shadow-xl flex flex-col justify-between">
              <div>
                <span className="px-2.5 py-1 bg-[#00C896] text-black font-black text-[10px] uppercase rounded inline-block mb-2">LESSON #1</span>
                <EditableText textKey="lesson1Title" tag="h3" className="font-display font-bold text-lg sm:text-xl text-[#00C896] mb-1" />
                <EditableText textKey="lesson1Desc" tag="p" className="text-gray-300 text-xs sm:text-sm leading-relaxed font-light" />
              </div>
            </div>

            <div className="bg-[#0A0E0D] text-white p-6 rounded-2xl border-2 border-[#00C896] space-y-3 shadow-xl flex flex-col justify-between">
              <div>
                <span className="px-2.5 py-1 bg-[#00C896] text-black font-black text-[10px] uppercase rounded inline-block mb-2">LESSON #2</span>
                <EditableText textKey="lesson2Title" tag="h3" className="font-display font-bold text-lg sm:text-xl text-[#00C896] mb-1" />
                <EditableText textKey="lesson2Desc" tag="p" className="text-xs sm:text-sm text-gray-300 leading-relaxed font-light" />
              </div>
            </div>

            <div className="bg-[#0A0E0D] text-white p-6 rounded-2xl border-2 border-[#00C896] space-y-3 shadow-xl flex flex-col justify-between">
              <div>
                <span className="px-2.5 py-1 bg-[#00C896] text-black font-black text-[10px] uppercase rounded inline-block mb-2">LESSON #3</span>
                <EditableText textKey="lesson3Title" tag="h3" className="font-display font-bold text-lg sm:text-xl text-[#00C896] mb-1" />
                <EditableText textKey="lesson3Desc" tag="p" className="text-xs sm:text-sm text-gray-300 leading-relaxed font-light" />
              </div>
            </div>

            <div className="bg-[#0A0E0D] text-white p-6 rounded-2xl border-2 border-[#00C896] space-y-3 shadow-xl flex flex-col justify-between">
              <div>
                <span className="px-2.5 py-1 bg-[#00C896] text-black font-black text-[10px] uppercase rounded inline-block mb-2">LESSON #4</span>
                <EditableText textKey="lesson4Title" tag="h3" className="font-display font-bold text-lg sm:text-xl text-[#00C896] mb-1" />
                <EditableText textKey="lesson4Desc" tag="p" className="text-xs sm:text-sm text-gray-300 leading-relaxed font-light" />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ==================== SECTION BANNER: BEYOND THE BOARDROOM ==================== */}
      <EditableText textKey="beyondBanner" className="section-banner-dark py-5 px-6 text-center text-lg sm:text-2xl md:text-3xl" />

      {/* ==================== CONTENT: BEYOND THE BOARDROOM ==================== */}
      <section className="py-16 sm:py-24 bg-[#080D0C]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <EditableText textKey="beyondTitle" tag="h3" className="text-2xl sm:text-3xl font-black text-white uppercase font-display" />
            <EditableText textKey="beyondDesc" tag="p" className="text-gray-300 text-sm sm:text-lg leading-relaxed font-light" />

            <div className="p-6 bg-[#050505] text-white rounded-2xl border-l-8 border-[#00C896] border border-gray-800">
              <EditableText textKey="beyondQuote" tag="p" className="text-base sm:text-xl font-serif italic text-[#00C896]" />
            </div>
          </div>

          {/* Photo 9 (overcoat) & Photo 10 (casual) */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-6">
            <div className="rounded-2xl overflow-hidden border border-[#00C896]/40 bg-[#0A0E0D] p-2 shadow-xl relative">
              <ImageOverlayControls imgKey="overcoat" />
              <img 
                src={images.overcoat.src} 
                alt="Siddhartha Havelia Overcoat" 
                className={`w-full h-64 sm:h-[360px] rounded-xl ${images.overcoat.fit} ${images.overcoat.pos} transition-all duration-300`}
                style={{ transform: `scale(${images.overcoat.zoom})` }}
              />
            </div>

            <div className="rounded-2xl overflow-hidden border border-[#00C896]/40 bg-[#0A0E0D] p-2 shadow-xl mt-6 relative">
              <ImageOverlayControls imgKey="casual" />
              <img 
                src={images.casual.src} 
                alt="Siddhartha Havelia Casual" 
                className={`w-full h-64 sm:h-[360px] rounded-xl ${images.casual.fit} ${images.casual.pos} transition-all duration-300`}
                style={{ transform: `scale(${images.casual.zoom})` }}
              />
            </div>
          </div>

        </div>
      </section>

      {/* ==================== SECTION BANNER: RISE WITH US ==================== */}
      <EditableText textKey="riseBanner" className="section-banner-dark py-5 px-6 text-center text-lg sm:text-2xl md:text-3xl" />

      {/* ==================== CONTENT: CONNECT ==================== */}
      <section className="py-16 sm:py-24 bg-[#050505]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Photo 8: Office Desk */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="rounded-2xl overflow-hidden border border-[#00C896]/40 bg-[#080D0C] p-2.5 shadow-2xl w-full relative">
              <ImageOverlayControls imgKey="office" />
              <img 
                src={images.office.src} 
                alt="Siddhartha Havelia Office" 
                className={`w-full h-64 sm:h-[360px] rounded-xl ${images.office.fit} ${images.office.pos} transition-all duration-300`}
                style={{ transform: `scale(${images.office.zoom})` }}
              />
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <EditableText textKey="riseTitle" tag="h3" className="text-2xl sm:text-4xl font-black text-[#00C896] uppercase font-display" />
            <EditableText textKey="riseP1" tag="p" className="text-gray-300 text-sm sm:text-lg leading-relaxed font-light" />
            <EditableText textKey="riseP2" tag="p" className="text-gray-300 text-xs sm:text-base leading-relaxed font-light" />

            <div className="pt-3">
              <a 
                href="mailto:HELLO@SIDDHARTHAHAVELIA.COM"
                className="w-full sm:w-auto text-center px-10 py-4 rounded-xl bg-[#00C896] text-black font-black text-xs sm:text-sm uppercase tracking-wider hover:bg-[#00E5AB] transition-all duration-300 shadow-xl shadow-[#00C896]/40 inline-flex items-center justify-center gap-2"
              >
                Contact Now <span>→</span>
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* ==================== FOOTER ==================== */}
      <footer className="py-10 sm:py-12 bg-[#080D0C] text-gray-400 text-xs sm:text-sm border-t-2 border-[#00C896]">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6 text-center md:text-left">
          <div>
            <EditableText textKey="footerName" tag="p" className="font-display font-black text-white text-base" />
            <EditableText textKey="footerSub" tag="p" className="text-[11px] sm:text-xs text-gray-400 mt-1" />
          </div>
          <div className="text-[11px] sm:text-xs text-gray-400">
            © {new Date().getFullYear()} Siddhartha Havelia. All rights reserved.
          </div>
        </div>
      </footer>

    </div>
  );
}
