import React, { useState, useEffect } from 'react';

// ============================================================
// TEXT CONTENT
// ============================================================

const TEXTS = {
  brandName: "SIDDHARTHA HAVELIA",

  // ==================== HERO ====================

  heroBadge: "20+ YRS INDUSTRY EXPERIENCE · CEO & CO-FOUNDER · CA · ACCA (UK)",

  heroTitle1: "Siddhartha Havelia",

  heroTitle2: "",

  heroBio:
    "CEO & CO-FOUNDER | KEYNOTE SPEAKER | CHARTERED ACCOUNTANT | ACCA, UK",

  heroBioBold: "20+ years of Industry experience...",

  heroCredBadge:
    "Chartered Accountant · ACCA (UK) · 20+ Yrs Exp",

  // ==================== FEATURED ====================

  featuredTitle: "AS FEATURED IN",
  featured1: "Entrepreneur INDIA",
  featured2: "CBS NEWS",
  featured3: "ABC NEWS",
  featured4: "NBC NEWS",

  // ==================== WHAT I BELIEVE ====================

  believeBanner: "WHAT I BELIEVE ?",

  believeTitle: "Truth Isn't One-Size-Fits-All",

  believeP1:
    "I have this strong belief, we’re all just trying to make sense of our own version of the world. I used to think there were universally right answers. That in business, in relationships, in life, you just had to find the formula and stick to it. But over time, I’ve seen how often that falls apart.",

  believeQuote:
    "\"You're not supposed to do everything. You're supposed to build the system that does it\"",

  believeQuoteSub:
    "That turned out to be the most important lesson I’ve learned.",

  believeP2:
    "I’ve disagreed with clients, partners, and even close team members. Not because one of us was wrong, but because we were working with different definitions of the same thing. Over the years, I’ve stopped chasing the one perfect way. I’ve started listening more. I don’t need everyone to agree with me. But I do want to understand where they’re coming from.",

  believeFooterQuote:
    "This doesn’t mean you stop having a point of view. It just means you leave space for other people to hold theirs too.",

  believeImgBadge: "Consistency & Perspective",

  // ==================== STATS ====================

  statsBanner: "THE NUMBERS BEHIND THE JOURNEY",

  statsTitle:
    "BUILDING THROUGH PEOPLE, SYSTEMS & CONSISTENCY",

  stat1Num: "10%",
  stat1Label: "Things You Can Do Alone",

  stat2Num: "90%",
  stat2Label: "Things You Can Do With Team",

  stat3Num: "16",
  stat3Label: "Years Building My Company",

  stat4Num: "500",
  stat4Label: "Team Members",

  statFooterSub:
    "More importantly, you need to learn how to delegate the right way",

  statFooterQuote:
    "\"You're not supposed to do everything. You're supposed to build the system that does it\"",

  // ==================== WHAT WE BUILT ====================

  builtBanner: "WHAT WE HAVE BUILT ?",

  builtTitle:
    "AN ECOSYSTEM BUILT FROM THE GROUND UP",

  builtSub:
    "Siddhartha’s journey in finance began at renowned firms like Grant Thornton India, PwC, and American Express. In 2008, he co-founded Mercurius with a vision to reshape the industry. Despite early challenges, his leadership helped Mercurius grow into a global outsourcing organization.",

  builtPillar1Title:
    "From Grant Thornton to PwC and American Express",

  builtPillar1Desc:
    "Siddhartha built his foundation in finance through experience at leading firms and multinational corporations, developing expertise across accounting, taxation, financial management and business processes.",

  builtPillar2Title:
    "In 2008, Mercurius began with a vision",

  builtPillar2Desc:
    "Siddhartha co-founded Mercurius with the vision of reshaping the finance and outsourcing industry. The journey came with early challenges, but the focus remained on building something that could scale globally.",

  builtPillar3Title:
    "From a team of two to nearly 500",

  builtPillar3Desc:
    "Over the last 16 years, Siddhartha has helped build Mercurius from scratch, creating systems and processes that enabled the organization to grow from two people to a nearly 500-member team.",

  teamTitle:
    "The Mercurius Leadership Team",

  teamSub:
    "Building systems, people and processes that allow an organization to grow without depending on one person.",

  teamBadge:
    "500 Strong Global Team",

  // ==================== FAILURE — REALITY ====================

  realityBanner:
    "THE QUIET MAJORITY — THE FOUNDER'S REALITY",

  realityTitle:
    "IT'S OKAY TO FAIL",

  realitySub:
    "In the early days of Mercurius, some decisions didn't work out. Those moments became some of the clearest lessons in how to build teams, processes and businesses.",

  reality1Title:
    "Gut Isn't Always Enough",

  reality1Desc:
    "In the early days of Mercurius, we made our first hiring decision based entirely on gut. Just a strong feeling that the person would figure it out. They didn’t.",

  reality2Title:
    "Delegation Needs Accountability",

  reality2Desc:
    "We once signed a project and handed over full control to one team member. When the client came back with complaints, we discovered only half the work had been delivered.",

  reality3Title:
    "Processes Have To Be Tested",

  reality3Desc:
    "We thought our processes were solid. They weren’t. That experience made it clear that a process isn't valuable simply because it exists. It has to work consistently.",

  reality4Title:
    "Failure Is Part Of The Real Story",

  reality4Desc:
    "Over the years, I have learned that failure is not the part of the story people usually tell. But it is always part of the real one.",

  // ==================== FAILURE LESSONS ====================

  lessonsBanner:
    "IT'S OKAY TO FAIL — 4 CORE LESSONS",

  lessonsTitle:
    "\"You are not supposed to get it all right the first time. Or even the fifth\"",

  lessonsSub:
    "Every mistake became a signal. These four lessons shaped the way I think about decisions, systems, people and growth.",

  lesson1Title:
    "Motion ≠ Progress",

  lesson1Desc:
    "Being busy does not automatically mean you are moving in the right direction. Progress needs clarity and intention.",

  lesson2Title:
    "Process ≠ Optional",

  lesson2Desc:
    "Good people cannot compensate forever for broken processes. Systems create consistency when the team grows.",

  lesson3Title:
    "Gut ≠ Strategy",

  lesson3Desc:
    "Instinct can start a decision, but important decisions need evidence, structure and accountability behind them.",

  lesson4Title:
    "Looks Solid ≠ Is Solid",

  lesson4Desc:
    "A process, project or decision can look perfect from the outside and still fail under pressure. Real strength comes from testing it.",

  // ==================== FAILURE IS NOT A FULL STOP ====================

  failureFullStopBanner:
    "WHAT HAPPENS AFTER FAILURE",

  failureFullStopTitle:
    "Failure Is Not a Full Stop",

  failureFullStopSub:
    "It is life showing you a different route than the one you had in mind. Some of my best decisions came right after something went wrong.",

  failure1Title:
    "Failure Forces You To Pause",

  failure1Desc:
    "When something goes wrong, you are forced to stop and look at what actually happened instead of simply continuing forward.",

  failure2Title:
    "It Makes You Ask Better Questions",

  failure2Desc:
    "The right questions often appear after the wrong outcome. Failure makes you examine assumptions you may never have questioned before.",

  failure3Title:
    "It Strips Away The Noise",

  failure3Desc:
    "Failure removes the illusion that everything is working. What remains is what actually matters.",

  // ==================== MAPS ====================

  mapsBanner:
    "THE MAPS DELEGATION FRAMEWORK",

  mapsTitle:
    "DELEGATE WITH INTENTION",

  mapsIntro:
    "Over the years, as the team grew and the work multiplied, one thing became very clear — delegation isn’t just about handing off tasks. It’s about knowing what to delegate, to whom, and how.",

  mapsQuote:
    "\"Delegation isn't just about task load. It's about matching the priority or urgency of the task with the skill, trust, or readiness of the person.\"",

  mapsMTitle:
    "Map",

  mapsMSub:
    "PRIORITY",

  mapsMDesc:
    "Start by understanding the priority and urgency of the task before deciding who should own it.",

  mapsATitle:
    "Assess",

  mapsASub:
    "READINESS",

  mapsADesc:
    "Look at the skill, trust and readiness of the person before assigning responsibility.",

  mapsPTitle:
    "Place",

  mapsPSub:
    "RIGHT FIT",

  mapsPDesc:
    "Match the task with the person who has the right combination of capability and readiness.",

  mapsSTitle:
    "Support",

  mapsSSub:
    "ENABLE",

  mapsSDesc:
    "Delegation doesn't end when the task is handed over. Give people clarity, ownership and the support they need to succeed.",

  mapsFooter:
    "Delegation, I realized, isn’t about doing less. It’s about enabling more. More clarity, more ownership, more growth, more trust.",

  // ==================== BEYOND BOARDROOM ====================

  beyondBanner:
    "BEYOND THE BOARDROOM — LIFE & BALANCE",

  beyondTitle:
    "STILL BUILDING. ALWAYS LIVING.",

  beyondDesc:
    "While building Mercurius and working on myself, life kept bringing interests that helped me stay grounded.",

  beyondGym:
    "Gym in pursuit of six-pack abs",

  beyondDance:
    "Dance to avoid embarrassing wedding group performances",

  beyondMeditation:
    "Meditation to calm the chaos",

  beyondQuote:
    "“A life that earns you the dollars and shows you how to spend them while truly living”",

  // ==================== RISE WITH US ====================

  riseBanner:
    "RISE WITH US",

  riseTitle:
    "STILL BUILDING. ALWAYS LISTENING.",

  riseP1:
    "Everything I’ve shared here is just a snapshot. I’m still figuring it out. Some days I lead. Some days I learn. Most days, it’s both.",

  riseP2:
    "Building something that lasts takes more than talent or ambition. It takes people who care, who ask better questions and who show up with integrity, even when no one’s watching.",

  riseP3:
    "I’ve been lucky to have those people around me. And if I can be that person for someone else, through a conversation, a collaboration, or even a passing idea, then this story keeps going.",

  // ==================== FOOTER ====================

  footerName:
    "SIDDHARTHA HAVELIA",

  footerSub:
    "CEO & Co-Founder | Keynote Speaker | Chartered Accountant | ACCA, UK"
};


// ============================================================
// IMAGE SETTINGS
// ============================================================

const IMAGES = {
  logo: {
    src: '/images/favicon.png',
    fit: 'object-contain',
    zoom: 1,
    pos: 'object-center'
  },

  hero: {
    src: '/images/hero-new.png',
    fit: 'object-contain',
    zoom: 1,
    pos: 'object-center'
  },

  story: {
    src: '/images/story.png',
    fit: 'object-cover',
    zoom: 1.1,
    pos: 'object-top'
  },

  philosophy: {
    src: '/images/philosophy.png',
    fit: 'object-contain',
    zoom: 1,
    pos: 'object-center'
  },

  team: {
    src: '/images/team.jpg',
    fit: 'object-cover',
    zoom: 1,
    pos: 'object-center'
  },

  speaker: {
    src: '/images/speaker.png',
    fit: 'object-cover',
    zoom: 1,
    pos: 'object-top'
  },

  stage: {
    src: '/images/stage.jpg',
    fit: 'object-cover',
    zoom: 1,
    pos: 'object-center'
  },

  working: {
    src: '/images/working.jpg',
    fit: 'object-cover',
    zoom: 1,
    pos: 'object-center'
  },

  overcoat: {
    src: '/images/overcoat.png',
    fit: 'object-cover',
    zoom: 1,
    pos: 'object-center'
  },

  beyond: {
    src: '/images/beyond.png',
    fit: 'object-cover',
    zoom: 1,
    pos: 'object-center'
  },

  casual: {
    src: '/images/casual.jpg',
    fit: 'object-cover',
    zoom: 1,
    pos: 'object-center'
  },

  office: {
    src: '/images/office.jpg',
    fit: 'object-cover',
    zoom: 1,
    pos: 'object-center'
  },

  failureCycle: {
    src: '/images/failure-cycle.png',
    fit: 'object-contain',
    zoom: 1,
    pos: 'object-center'
  },
};


// ============================================================
// TEXT RENDERER
// ============================================================

const T = ({ textKey, className, tag = "div", id }) => {
  const Tag = tag;

  return (
    <Tag id={id} className={className}>
      {TEXTS[textKey]}
    </Tag>
  );
};


// ============================================================
// GREEN SECTION NOTE
// ============================================================

const SectionNote = ({ textKey }) => {
  return (
    <T
      textKey={textKey}
      className="text-[#00C896] text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.2em] leading-none"
    />
  );
};


// ============================================================
// APP
// ============================================================

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-gray-100 font-sans selection:bg-[#00C896] selection:text-black relative overflow-x-hidden">

      {/* ============================================================
          HERO ANIMATION STYLES
      ============================================================ */}

      <style>{`
        @keyframes heroImageFloat {
          0%, 100% {
            transform: translateY(-18px);
          }

          50% {
            transform: translateY(-32px);
          }
        }

        @keyframes heroSpin {
          from {
            transform: rotate(0deg);
          }

          to {
            transform: rotate(360deg);
          }
        }

        @keyframes heroSpinReverse {
          from {
            transform: rotate(360deg);
          }

          to {
            transform: rotate(0deg);
          }
        }

        @keyframes heroFloat1 {
          0%, 100% {
            transform: translate(0, 0);
            opacity: 0.55;
          }

          50% {
            transform: translate(18px, -25px);
            opacity: 1;
          }
        }

        @keyframes heroFloat2 {
          0%, 100% {
            transform: translate(0, 0);
            opacity: 0.5;
          }

          50% {
            transform: translate(-20px, 20px);
            opacity: 1;
          }
        }

        @keyframes heroFloat3 {
          0%, 100% {
            transform: translate(0, 0);
            opacity: 0.25;
          }

          50% {
            transform: translate(15px, -18px);
            opacity: 0.8;
          }
        }

        @keyframes heroOrbit {
          0% {
            transform: rotate(0deg) translateX(230px) rotate(0deg);
          }

          100% {
            transform: rotate(360deg) translateX(230px) rotate(-360deg);
          }
        }

        @media (max-width: 1023px) {
          @keyframes heroOrbit {
            0% {
              transform: rotate(0deg) translateX(180px) rotate(0deg);
            }

            100% {
              transform: rotate(360deg) translateX(180px) rotate(-360deg);
            }
          }
        }

        @media (max-width: 640px) {
          @keyframes heroOrbit {
            0% {
              transform: rotate(0deg) translateX(145px) rotate(0deg);
            }

            100% {
              transform: rotate(360deg) translateX(145px) rotate(-360deg);
            }
          }
        }
      `}</style>


      {/* ============================================================
          NAVBAR
      ============================================================ */}

      <nav
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-black/95 backdrop-blur-md py-3.5 border-b border-white/10 shadow-2xl shadow-black/80'
            : 'bg-black/90 backdrop-blur-sm py-4 border-b border-white/10'
        }`}
      >

        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">

          {/* Logo */}

          <a
            href="#"
            className="font-display font-black text-white flex items-center gap-3 group flex-shrink-0"
          >

            <span className="w-9 h-9 rounded-full bg-[#00C896] flex items-center justify-center shadow-lg shadow-[#00C896]/20 group-hover:scale-105 transition-transform flex-shrink-0 overflow-hidden">

              <img
                src={IMAGES.logo.src}
                className="w-full h-full object-cover rounded-full"
                alt="Siddhartha Havelia"
              />

            </span>

            <T
              textKey="brandName"
              className="whitespace-nowrap uppercase text-[13px] tracking-[0.18em] font-extrabold"
            />

          </a>


          {/* Desktop Nav Links */}

          <div className="hidden lg:flex items-center gap-6 xl:gap-8 text-[11px] xl:text-[12px] font-semibold uppercase tracking-[0.14em] text-gray-400 flex-shrink-0">

            <a
              href="#about"
              className="hover:text-[#00C896] transition-colors py-1 whitespace-nowrap"
            >
              Story
            </a>

            <a
              href="#believe"
              className="hover:text-[#00C896] transition-colors py-1 whitespace-nowrap"
            >
              What I Believe
            </a>

            <a
              href="#built"
              className="hover:text-[#00C896] transition-colors py-1 whitespace-nowrap"
            >
              What We Built
            </a>

            <a
              href="#majority"
              className="hover:text-[#00C896] transition-colors py-1 whitespace-nowrap"
            >
              The Reality
            </a>

            <a
              href="#maps"
              className="hover:text-[#00C896] transition-colors py-1 whitespace-nowrap"
            >
              MAPS System
            </a>

            <a
              href="#lessons"
              className="hover:text-[#00C896] transition-colors py-1 whitespace-nowrap"
            >
              Lessons
            </a>

          </div>


          {/* Right Action */}

          <div className="hidden md:flex items-center gap-3 flex-shrink-0">

            <a
              href="mailto:HELLO@SIDDHARTHAHAVELIA.COM"
              className="px-5 py-2 rounded-lg bg-[#00C896] text-black font-bold text-[11px] uppercase tracking-wider hover:bg-[#00E5AB] transition-all duration-300 shadow-lg shadow-[#00C896]/20 whitespace-nowrap"
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

            <svg
              className="w-7 h-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >

              {mobileMenu ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}

            </svg>

          </button>

        </div>


        {/* Mobile Dropdown */}

        {mobileMenu && (
          <div className="lg:hidden bg-black border-b border-white/10 px-6 py-6 space-y-4 text-white shadow-2xl">

            <a
              href="#about"
              onClick={() => setMobileMenu(false)}
              className="block py-1.5 hover:text-[#00C896] font-semibold text-sm uppercase tracking-wider"
            >
              Story
            </a>

            <a
              href="#believe"
              onClick={() => setMobileMenu(false)}
              className="block py-1.5 hover:text-[#00C896] font-semibold text-sm uppercase tracking-wider"
            >
              What I Believe
            </a>

            <a
              href="#built"
              onClick={() => setMobileMenu(false)}
              className="block py-1.5 hover:text-[#00C896] font-semibold text-sm uppercase tracking-wider"
            >
              What We Built
            </a>

            <a
              href="#majority"
              onClick={() => setMobileMenu(false)}
              className="block py-1.5 hover:text-[#00C896] font-semibold text-sm uppercase tracking-wider"
            >
              The Reality
            </a>

            <a
              href="#maps"
              onClick={() => setMobileMenu(false)}
              className="block py-1.5 hover:text-[#00C896] font-semibold text-sm uppercase tracking-wider"
            >
              MAPS System
            </a>

            <a
              href="#lessons"
              onClick={() => setMobileMenu(false)}
              className="block py-1.5 hover:text-[#00C896] font-semibold text-sm uppercase tracking-wider"
            >
              Lessons
            </a>

            <div className="pt-3">

              <a
                href="mailto:HELLO@SIDDHARTHAHAVELIA.COM"
                className="block text-center py-3 bg-[#00C896] text-black font-black rounded-lg text-xs uppercase tracking-wider"
              >
                Rise With Us
              </a>

            </div>

          </div>
        )}

      </nav>


      {/* ============================================================
          HERO
      ============================================================ */}

      <section
        id="about"
        className="pt-24 sm:pt-28 pb-10 md:pt-32 md:pb-14 relative overflow-hidden bg-black"
      >

        <div className="max-w-7xl mx-auto px-6 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

          {/* Left Text */}

          <div className="lg:col-span-7 space-y-5 text-left z-10">

            <T
              textKey="heroBadge"
              className="inline-block px-5 py-2 bg-[#00C896]/10 border border-[#00C896]/40 rounded-lg text-[#00C896] font-black text-[10px] sm:text-xs uppercase tracking-widest"
            />

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-white leading-tight">
              Siddhartha Havelia
            </h1>

            <T
              textKey="heroBio"
              tag="p"
              className="text-gray-300 text-xs sm:text-sm font-semibold uppercase tracking-widest leading-relaxed max-w-lg"
            />

            <T
              textKey="heroBioBold"
              tag="p"
              className="text-[#00C896] text-sm sm:text-base font-medium"
            />

            <p className="text-gray-400 text-xs sm:text-sm leading-relaxed max-w-lg">
              Like every other story that sounds like it belongs in NETFLIX,
              mine began in the small city of Lucknow.
            </p>

            <div className="pt-0 flex flex-wrap gap-4 items-center">

              <a
                href="mailto:HELLO@SIDDHARTHAHAVELIA.COM"
                className="px-8 py-3.5 rounded-xl bg-[#00C896] text-black font-bold text-xs sm:text-sm uppercase tracking-wider hover:bg-[#00E5AB] transition-all duration-300 shadow-xl shadow-[#00C896]/30 inline-flex items-center justify-center gap-2"
              >
                Rise With Us <span>→</span>
              </a>

              <a
                href="#believe"
                className="px-8 py-3.5 rounded-xl border border-gray-700 text-gray-200 font-bold text-xs sm:text-sm uppercase tracking-wider hover:border-[#00C896] hover:text-[#00C896] transition-all duration-300"
              >
                Read Philosophy
              </a>

            </div>

          </div>


          {/* Right Hero Image */}

          <div className="lg:col-span-5 flex justify-center lg:justify-end items-center relative min-h-[500px] sm:min-h-[580px] lg:min-h-[650px]">

            {/* Animated Background */}

            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">

              <div className="absolute w-[330px] h-[330px] sm:w-[420px] sm:h-[420px] lg:w-[520px] lg:h-[520px] rounded-full bg-[#00C896]/10 blur-3xl animate-pulse" />

              <div
                className="absolute w-[360px] h-[360px] sm:w-[470px] sm:h-[470px] lg:w-[580px] lg:h-[580px] rounded-full border border-[#00C896]/20"
                style={{
                  animation: "heroSpin 18s linear infinite"
                }}
              />

              <div
                className="absolute w-[300px] h-[300px] sm:w-[390px] sm:h-[390px] lg:w-[500px] lg:h-[500px] rounded-full border border-[#00C896]/10"
                style={{
                  animation: "heroSpinReverse 24s linear infinite"
                }}
              />

              <span
                className="absolute w-3 h-3 rounded-full bg-[#00C896] shadow-[0_0_20px_#00C896]"
                style={{
                  top: "18%",
                  right: "12%",
                  animation: "heroFloat1 5s ease-in-out infinite"
                }}
              />

              <span
                className="absolute w-2 h-2 rounded-full bg-[#00C896]/80 shadow-[0_0_15px_#00C896]"
                style={{
                  bottom: "22%",
                  left: "10%",
                  animation: "heroFloat2 6s ease-in-out infinite"
                }}
              />

              <span
                className="absolute w-2.5 h-2.5 rounded-full bg-white/60"
                style={{
                  top: "35%",
                  left: "5%",
                  animation: "heroFloat3 7s ease-in-out infinite"
                }}
              />

              <span
                className="absolute w-1.5 h-1.5 rounded-full bg-[#00C896]"
                style={{
                  bottom: "15%",
                  right: "18%",
                  animation: "heroFloat1 4s ease-in-out infinite reverse"
                }}
              />

              <div
                className="absolute w-2 h-2 rounded-full bg-[#00C896] shadow-[0_0_18px_#00C896]"
                style={{
                  animation: "heroOrbit 10s linear infinite"
                }}
              />

            </div>


            {/* Hero Image */}

            <div
              className="relative z-10 w-full flex justify-center lg:justify-end"
              style={{
                animation: "heroImageFloat 6s ease-in-out infinite"
              }}
            >

              <img
                src={IMAGES.hero.src}
                alt="Siddhartha Havelia"
                className="
                  relative
                  w-auto
                  h-[500px]
                  sm:h-[600px]
                  lg:h-[700px]
                  max-w-none
                  object-contain
                  drop-shadow-[0_30px_70px_rgba(0,200,150,0.18)]
                "
              />

            </div>

          </div>

        </div>

      </section>


      {/* ============================================================
          WHAT I BELIEVE
      ============================================================ */}

      <section
        id="believe"
        className="py-14 sm:py-20 bg-black section-sep"
      >

        <div className="max-w-7xl mx-auto px-6 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">

          {/* Left Image */}

          <div className="lg:col-span-5 flex justify-end -translate-x-20 items-center">

            <img
              src={IMAGES.overcoat.src}
              alt="Siddhartha Havelia"
              className="w-full h-full max-w-xs lg:max-w-sm object-cover rounded-xl"
            />

          </div>


          {/* Right Content */}

          <div className="lg:col-span-7 space-y-6">

            <div className="space-y-3">

              <SectionNote textKey="believeBanner" />

              <h2 className="text-3xl sm:text-5xl font-black text-white uppercase font-display tracking-tight">
                TRUTH ISN'T{" "}
                <span className="text-[#00C896]">
                  ONE-SIZE-FITS-ALL
                </span>
              </h2>

            </div>


            <T
              textKey="believeP1"
              tag="p"
              className="text-gray-300 text-sm sm:text-lg leading-relaxed font-light"
            />


            {/* Three Trait Illustrations */}

            <div className="grid grid-cols-3 gap-4 py-6">

              {/* Fairly Disciplined */}

              <div className="flex flex-col items-center text-center space-y-3">

                <svg
                  viewBox="0 0 80 80"
                  className="w-16 h-16 sm:w-20 sm:h-20"
                  fill="none"
                  stroke="#00C896"
                  strokeWidth="1.5"
                >

                  <circle cx="40" cy="40" r="25" />
                  <circle cx="40" cy="40" r="3" fill="#00C896" />
                  <line x1="40" y1="40" x2="40" y2="25" />
                  <line x1="40" y1="40" x2="52" y2="40" />
                  <circle cx="40" cy="12" r="5" />
                  <line x1="40" y1="17" x2="40" y2="32" />
                  <line x1="32" y1="65" x2="48" y2="65" />
                  <line x1="35" y1="65" x2="35" y2="55" />
                  <line x1="45" y1="65" x2="45" y2="55" />

                </svg>

                <span className="text-white text-sm sm:text-base font-medium">
                  Fairly
                  <br />
                  disciplined
                </span>

              </div>


              {/* Never Bunked */}

              <div className="flex flex-col items-center text-center space-y-3">

                <svg
                  viewBox="0 0 80 80"
                  className="w-16 h-16 sm:w-20 sm:h-20"
                  fill="none"
                  stroke="#00C896"
                  strokeWidth="1.5"
                >

                  <circle cx="40" cy="15" r="8" />
                  <line x1="40" y1="23" x2="40" y2="50" />
                  <line x1="28" y1="35" x2="52" y2="35" />
                  <path d="M30 55 L40 45 L50 55" fill="none" />
                  <rect x="25" y="55" width="30" height="3" rx="1" fill="#00C896" />
                  <line x1="40" y1="50" x2="32" y2="65" />
                  <line x1="40" y1="50" x2="48" y2="65" />

                </svg>

                <span className="text-white text-sm sm:text-base font-medium">
                  Never bunked
                  <br />
                  classes
                </span>

              </div>


              {/* Didn't Chase Thrills */}

              <div className="flex flex-col items-center text-center space-y-3">

                <svg
                  viewBox="0 0 80 80"
                  className="w-16 h-16 sm:w-20 sm:h-20"
                  fill="none"
                  stroke="#00C896"
                  strokeWidth="1.5"
                >

                  <circle cx="40" cy="15" r="8" />
                  <line x1="40" y1="23" x2="40" y2="50" />
                  <line x1="40" y1="35" x2="55" y2="28" />
                  <line x1="40" y1="35" x2="25" y2="28" />
                  <line x1="40" y1="50" x2="30" y2="70" />
                  <line x1="40" y1="50" x2="50" y2="70" />
                  <path d="M52 25 L58 22 L58 30 L52 28" fill="none" />
                  <circle cx="58" cy="22" r="2" fill="#00C896" />

                </svg>

                <span className="text-white text-sm sm:text-base font-medium">
                  Didn't chase
                  <br />
                  thrills
                </span>

              </div>

            </div>


            <p className="text-gray-300 text-sm sm:text-lg leading-relaxed font-light">
              Looking back, that consistency became my biggest advantage.
              It’s probably what helped me make it to Delhi University, a
              place that shaped far more than just my academic journey.
            </p>

          </div>

        </div>

      </section>


      {/* ============================================================
          STATS
      ============================================================ */}

      <section className="py-14 sm:py-20 bg-black section-sep">

        <div className="max-w-7xl mx-auto px-6 sm:px-8">

          <div className="mb-8 sm:mb-10 space-y-3">

            <SectionNote textKey="statsBanner" />

            <h2 className="text-3xl sm:text-5xl font-black text-white uppercase font-display tracking-tight">
              BUILDING THROUGH PEOPLE,{" "}
              <span className="text-[#00C896]">
                SYSTEMS & CONSISTENCY
              </span>
            </h2>

          </div>


          <div className="bg-black border-2 border-[#00C896] text-white rounded-3xl p-8 sm:p-14 shadow-2xl space-y-8">

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-left divide-y lg:divide-y-0 lg:divide-x divide-gray-800">

              <div className="pt-3 lg:pt-0">

                <T
                  textKey="stat1Num"
                  className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-[#00C896]"
                />

                <T
                  textKey="stat1Label"
                  className="text-xs uppercase font-bold tracking-wider text-gray-300 mt-2"
                />

              </div>


              <div className="pt-3 lg:pt-0 lg:pl-8">

                <T
                  textKey="stat2Num"
                  className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-[#00C896]"
                />

                <T
                  textKey="stat2Label"
                  className="text-xs uppercase font-bold tracking-wider text-gray-300 mt-2"
                />

              </div>


              <div className="pt-3 lg:pt-0 lg:pl-8">

                <T
                  textKey="stat3Num"
                  className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-[#00C896]"
                />

                <T
                  textKey="stat3Label"
                  className="text-xs uppercase font-bold tracking-wider text-gray-300 mt-2"
                />

              </div>


              <div className="pt-3 lg:pt-0 lg:pl-8">

                <T
                  textKey="stat4Num"
                  className="font-display font-black text-3xl sm:text-5xl lg:text-6xl text-[#00C896]"
                />

                <T
                  textKey="stat4Label"
                  className="text-xs uppercase font-bold tracking-wider text-gray-300 mt-2"
                />

              </div>

            </div>


            <div className="text-left pt-6 border-t border-gray-800 space-y-2">

              <T
                textKey="statFooterSub"
                tag="p"
                className="text-sm font-semibold text-gray-400"
              />

              <T
                textKey="statFooterQuote"
                tag="p"
                className="text-xl text-[#00C896]"
              />

            </div>

          </div>

        </div>

      </section>


      {/* ============================================================
          WHAT WE HAVE BUILT
      ============================================================ */}

      <section
        id="built"
        className="py-14 sm:py-20 bg-black section-sep"
      >

        <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-10 sm:space-y-14">

          <div className="text-left max-w-3xl space-y-3">

            <SectionNote textKey="builtBanner" />

            <T
              textKey="builtTitle"
              tag="h2"
              className="text-3xl sm:text-5xl font-black text-white uppercase font-display tracking-tight"
            />

            <T
              textKey="builtSub"
              tag="p"
              className="text-gray-300 text-sm sm:text-lg font-light"
            />

          </div>


          {/* 3 Pillars */}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">

            {/* Card 01 */}

            <div className="bg-black border-t-4 border-[#00C896] border-x border-b border-gray-800 p-6 sm:p-8 rounded-2xl space-y-4 hover:-translate-y-1 transition-transform duration-300 shadow-xl flex flex-col justify-between">

              <div>

                <div className="w-12 h-12 rounded-xl bg-[#00C896] text-black font-black text-xl flex items-center justify-center mb-4">
                  01
                </div>

                <T
                  textKey="builtPillar1Title"
                  tag="h3"
                  className="font-display font-extrabold text-lg sm:text-xl text-[#00C896] mb-2"
                />

                <T
                  textKey="builtPillar1Desc"
                  tag="p"
                  className="text-gray-300 text-xs sm:text-sm leading-relaxed font-light"
                />

              </div>

            </div>


            {/* Card 02 */}

            <div className="bg-black border-t-4 border-[#00C896] border-x border-b border-gray-800 p-6 sm:p-8 rounded-2xl space-y-4 hover:-translate-y-1 transition-transform duration-300 shadow-xl flex flex-col justify-between">

              <div>

                <div className="w-12 h-12 rounded-xl bg-[#00C896] text-black font-black text-xl flex items-center justify-center mb-4">
                  02
                </div>

                <T
                  textKey="builtPillar2Title"
                  tag="h3"
                  className="font-display font-extrabold text-lg sm:text-xl text-[#00C896] mb-2"
                />

                <T
                  textKey="builtPillar2Desc"
                  tag="p"
                  className="text-gray-300 text-xs sm:text-sm leading-relaxed font-light"
                />

              </div>

            </div>


            {/* Card 03 */}

            <div className="bg-black border-t-4 border-[#00C896] border-x border-b border-gray-800 p-6 sm:p-8 rounded-2xl space-y-4 hover:-translate-y-1 transition-transform duration-300 shadow-xl flex flex-col justify-between">

              <div>

                <div className="w-12 h-12 rounded-xl bg-[#00C896] text-black font-black text-xl flex items-center justify-center mb-4">
                  03
                </div>

                <T
                  textKey="builtPillar3Title"
                  tag="h3"
                  className="font-display font-extrabold text-lg sm:text-xl text-[#00C896] mb-2"
                />

                <T
                  textKey="builtPillar3Desc"
                  tag="p"
                  className="text-gray-300 text-xs sm:text-sm leading-relaxed font-light"
                />

              </div>

            </div>

          </div>


          {/* Mercurius Leadership Team */}

          <div className="rounded-2xl overflow-hidden border border-[#00C896]/40 bg-black shadow-2xl p-2.5 sm:p-3 relative">

            <div className="w-full h-64 sm:h-80 md:h-[620px] rounded-xl overflow-hidden relative">

              <img
                src={IMAGES.team.src}
                alt="Mercurius Leadership Team"
                className={`w-full h-full ${IMAGES.team.fit} ${IMAGES.team.pos} transition-all duration-300`}
                style={{
                  transform: `scale(${IMAGES.team.zoom})`
                }}
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent pointer-events-none" />

              <div className="absolute bottom-4 left-6 right-6 flex flex-col md:flex-row justify-between items-start md:items-center text-white gap-3">

                <div>

                  <T
                    textKey="teamTitle"
                    tag="p"
                    className="font-bold text-base sm:text-lg text-white"
                  />

                  <T
                    textKey="teamSub"
                    tag="p"
                    className="text-sm text-gray-300"
                  />

                </div>

                <T
                  textKey="teamBadge"
                  tag="span"
                  className="px-4 py-2 bg-[#00C896] text-black font-black text-xs uppercase tracking-wider rounded-lg shadow-lg flex-shrink-0"
                />

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ============================================================
          IT'S OKAY TO FAIL
      ============================================================ */}

      <section
        id="majority"
        className="py-14 sm:py-20 bg-black section-sep"
      >

        <div className="max-w-7xl mx-auto px-6 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

          <div className="lg:col-span-5 space-y-4">

            <SectionNote textKey="realityBanner" />

            <T
              textKey="realityTitle"
              tag="h2"
              className="font-display font-black text-3xl sm:text-5xl text-white uppercase leading-tight"
            />

            <T
              textKey="realitySub"
              tag="p"
              className="text-gray-300 text-sm sm:text-lg font-light leading-relaxed"
            />

          </div>


          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">

            {/* Failure 1 */}

            <div className="p-6 bg-black border border-gray-800 rounded-2xl space-y-2 shadow-lg hover:border-[#00C896] transition-colors">

              <T
                textKey="reality1Title"
                tag="h4"
                className="font-bold text-white text-lg"
              />

              <T
                textKey="reality1Desc"
                tag="p"
                className="text-sm text-gray-400 leading-relaxed font-light"
              />

            </div>


            {/* Failure 2 */}

            <div className="p-6 bg-black border border-gray-800 rounded-2xl space-y-2 shadow-lg hover:border-[#00C896] transition-colors">

              <T
                textKey="reality2Title"
                tag="h4"
                className="font-bold text-white text-lg"
              />

              <T
                textKey="reality2Desc"
                tag="p"
                className="text-sm text-gray-400 leading-relaxed font-light"
              />

            </div>


            {/* Failure 3 */}

            <div className="p-6 bg-black border border-gray-800 rounded-2xl space-y-2 shadow-lg hover:border-[#00C896] transition-colors">

              <T
                textKey="reality3Title"
                tag="h4"
                className="font-bold text-white text-lg"
              />

              <T
                textKey="reality3Desc"
                tag="p"
                className="text-sm text-gray-400 leading-relaxed font-light"
              />

            </div>


            {/* Failure 4 */}

            <div className="p-6 bg-black border border-gray-800 rounded-2xl space-y-2 shadow-lg hover:border-[#00C896] transition-colors">

              <T
                textKey="reality4Title"
                tag="h4"
                className="font-bold text-white text-lg"
              />

              <T
                textKey="reality4Desc"
                tag="p"
                className="text-sm text-gray-400 leading-relaxed font-light"
              />

            </div>

          </div>

        </div>

      </section>


      {/* ============================================================
          FAILURE LESSONS
      ============================================================ */}

      <section
        id="lessons"
        className="py-14 sm:py-20 bg-black section-sep"
      >

        <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-10 sm:space-y-14">

          <div className="text-center max-w-3xl mx-auto space-y-3">

            <SectionNote textKey="lessonsBanner" />

            <T
              textKey="lessonsTitle"
              tag="h2"
              className="font-display font-black text-3xl sm:text-5xl text-white uppercase tracking-tight"
            />

            <T
              textKey="lessonsSub"
              tag="p"
              className="text-gray-300 text-sm sm:text-lg font-light"
            />

          </div>


          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

            {/* Lesson 1 */}

            <div className="bg-black text-white p-6 rounded-2xl border-2 border-[#00C896] space-y-3 shadow-xl flex flex-col justify-between">

              <div>

                <span className="px-2.5 py-1 bg-[#00C896] text-black font-black text-[10px] uppercase rounded inline-block mb-2">
                  LESSON #1
                </span>

                <T
                  textKey="lesson1Title"
                  tag="h3"
                  className="font-display font-bold text-lg sm:text-xl text-[#00C896] mb-1"
                />

                <T
                  textKey="lesson1Desc"
                  tag="p"
                  className="text-gray-300 text-xs sm:text-sm leading-relaxed font-light"
                />

              </div>

            </div>


            {/* Lesson 2 */}

            <div className="bg-black text-white p-6 rounded-2xl border-2 border-[#00C896] space-y-3 shadow-xl flex flex-col justify-between">

              <div>

                <span className="px-2.5 py-1 bg-[#00C896] text-black font-black text-[10px] uppercase rounded inline-block mb-2">
                  LESSON #2
                </span>

                <T
                  textKey="lesson2Title"
                  tag="h3"
                  className="font-display font-bold text-lg sm:text-xl text-[#00C896] mb-1"
                />

                <T
                  textKey="lesson2Desc"
                  tag="p"
                  className="text-gray-300 text-xs sm:text-sm leading-relaxed font-light"
                />

              </div>

            </div>


            {/* Lesson 3 */}

            <div className="bg-black text-white p-6 rounded-2xl border-2 border-[#00C896] space-y-3 shadow-xl flex flex-col justify-between">

              <div>

                <span className="px-2.5 py-1 bg-[#00C896] text-black font-black text-[10px] uppercase rounded inline-block mb-2">
                  LESSON #3
                </span>

                <T
                  textKey="lesson3Title"
                  tag="h3"
                  className="font-display font-bold text-lg sm:text-xl text-[#00C896] mb-1"
                />

                <T
                  textKey="lesson3Desc"
                  tag="p"
                  className="text-gray-300 text-xs sm:text-sm leading-relaxed font-light"
                />

              </div>

            </div>


            {/* Lesson 4 */}

            <div className="bg-black text-white p-6 rounded-2xl border-2 border-[#00C896] space-y-3 shadow-xl flex flex-col justify-between">

              <div>

                <span className="px-2.5 py-1 bg-[#00C896] text-black font-black text-[10px] uppercase rounded inline-block mb-2">
                  LESSON #4
                </span>

                <T
                  textKey="lesson4Title"
                  tag="h3"
                  className="font-display font-bold text-lg sm:text-xl text-[#00C896] mb-1"
                />

                <T
                  textKey="lesson4Desc"
                  tag="p"
                  className="text-gray-300 text-xs sm:text-sm leading-relaxed font-light"
                />

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ============================================================
          FAILURE IS NOT A FULL STOP
      ============================================================ */}

      <section
        className="py-14 sm:py-20 bg-black section-sep"
      >

        <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-10 sm:space-y-12">

          {/* UNIQUE SECTION HEADING */}

          <div className="text-left max-w-4xl space-y-3">

            <SectionNote textKey="failureFullStopBanner" />

            <T
              textKey="failureFullStopTitle"
              tag="h2"
              className="font-display font-black text-3xl sm:text-5xl text-white uppercase leading-tight"
            />

            <T
              textKey="failureFullStopSub"
              tag="p"
              className="text-gray-300 text-sm sm:text-lg font-light leading-relaxed max-w-3xl"
            />

          </div>


          {/* IMAGE + THREE LESSONS */}

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

            {/* FAILURE CYCLE IMAGE */}

            <div className="lg:col-span-5 flex justify-center">

              <div>

                <img
                  src={IMAGES.failureCycle.src}
                  alt="Failure cycle: Pause, Ask Questions, Clear Noise"
                  className={`w-full h-auto ${IMAGES.failureCycle.fit} ${IMAGES.failureCycle.pos}`}
                />

              </div>

            </div>


            {/* THREE EXPLANATION CARDS */}

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-5">

              {/* 01 */}

              <div className="p-6 bg-black border border-gray-800 rounded-2xl space-y-4 shadow-lg hover:border-[#00C896] hover:-translate-y-1 transition-all duration-300">

                <div className="w-10 h-10 rounded-xl bg-[#00C896] text-black font-black flex items-center justify-center">
                  01
                </div>

                <T
                  textKey="failure1Title"
                  tag="h4"
                  className="font-bold text-white text-lg leading-snug"
                />

                <T
                  textKey="failure1Desc"
                  tag="p"
                  className="text-sm text-gray-400 leading-relaxed font-light"
                />

              </div>


              {/* 02 */}

              <div className="p-6 bg-black border border-gray-800 rounded-2xl space-y-4 shadow-lg hover:border-[#00C896] hover:-translate-y-1 transition-all duration-300">

                <div className="w-10 h-10 rounded-xl bg-[#00C896] text-black font-black flex items-center justify-center">
                  02
                </div>

                <T
                  textKey="failure2Title"
                  tag="h4"
                  className="font-bold text-white text-lg leading-snug"
                />

                <T
                  textKey="failure2Desc"
                  tag="p"
                  className="text-sm text-gray-400 leading-relaxed font-light"
                />

              </div>


              {/* 03 */}

              <div className="p-6 bg-black border border-gray-800 rounded-2xl space-y-4 shadow-lg hover:border-[#00C896] hover:-translate-y-1 transition-all duration-300">

                <div className="w-10 h-10 rounded-xl bg-[#00C896] text-black font-black flex items-center justify-center">
                  03
                </div>

                <T
                  textKey="failure3Title"
                  tag="h4"
                  className="font-bold text-white text-lg leading-snug"
                />

                <T
                  textKey="failure3Desc"
                  tag="p"
                  className="text-sm text-gray-400 leading-relaxed font-light"
                />

              </div>

            </div>

          </div>


          {/* FOOTER TEXT */}

          <div className="max-w-5xl">

            <T
              textKey="failureFooter"
              tag="p"
              className="text-gray-300 text-sm sm:text-lg leading-relaxed font-light"
            />

          </div>

        </div>

      </section>


      {/* ============================================================
          MAPS FRAMEWORK
      ============================================================ */}

      <section
        id="maps"
        className="py-14 sm:py-20 bg-black section-sep"
      >

        <div className="max-w-7xl mx-auto px-6 sm:px-8 space-y-10 sm:space-y-14">

          <div className="text-left max-w-3xl space-y-3">

            <SectionNote textKey="mapsBanner" />

            <T
              textKey="mapsTitle"
              tag="h2"
              className="text-3xl sm:text-5xl font-black text-white uppercase font-display tracking-tight"
            />

            <T
              textKey="mapsIntro"
              tag="p"
              className="text-gray-300 text-sm sm:text-lg font-light leading-relaxed"
            />

          </div>


          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

            {/* Photo */}

            <div className="lg:col-span-5 flex justify-center">

              <div className="rounded-2xl overflow-hidden border border-[#00C896]/40 bg-black p-2.5 shadow-2xl w-full relative">

                <img
                  src={IMAGES.working.src}
                  alt="Siddhartha Havelia MAPS Framework"
                  className={`w-full h-64 sm:h-[360px] rounded-xl ${IMAGES.working.fit} ${IMAGES.working.pos} transition-all duration-300`}
                  style={{
                    transform: `scale(${IMAGES.working.zoom})`
                  }}
                />

                <div className="p-3 text-white text-center">

                  <T
                    textKey="mapsQuote"
                    tag="p"
                    className="text-sm text-[#00C896]"
                  />

                </div>

              </div>

            </div>


            {/* Four MAPS Cards */}

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">

              {/* Map */}

              <div className="p-6 bg-black text-white rounded-2xl border-t-4 border-[#00C896] border-x border-b border-gray-800 space-y-3 shadow-xl flex flex-col justify-between">

                <div>

                  <div className="w-10 h-10 rounded-xl bg-[#00C896] text-black font-black text-xl flex items-center justify-center mb-3">
                    M
                  </div>

                  <T
                    textKey="mapsMTitle"
                    tag="h4"
                    className="font-display font-extrabold text-lg sm:text-xl text-[#00C896] mb-1"
                  />

                  <T
                    textKey="mapsMSub"
                    tag="p"
                    className="text-xs uppercase font-bold tracking-wider text-gray-400 mb-2"
                  />

                  <T
                    textKey="mapsMDesc"
                    tag="p"
                    className="text-sm text-gray-300 leading-relaxed font-light"
                  />

                </div>

              </div>


              {/* Assess */}

              <div className="p-6 bg-black text-white rounded-2xl border-t-4 border-[#00C896] border-x border-b border-gray-800 space-y-3 shadow-xl flex flex-col justify-between">

                <div>

                  <div className="w-10 h-10 rounded-xl bg-[#00C896] text-black font-black text-xl flex items-center justify-center mb-3">
                    A
                  </div>

                  <T
                    textKey="mapsATitle"
                    tag="h4"
                    className="font-display font-extrabold text-lg sm:text-xl text-[#00C896] mb-1"
                  />

                  <T
                    textKey="mapsASub"
                    tag="p"
                    className="text-xs uppercase font-bold tracking-wider text-gray-400 mb-2"
                  />

                  <T
                    textKey="mapsADesc"
                    tag="p"
                    className="text-sm text-gray-300 leading-relaxed font-light"
                  />

                </div>

              </div>


              {/* Place */}

              <div className="p-6 bg-black text-white rounded-2xl border-t-4 border-[#00C896] border-x border-b border-gray-800 space-y-3 shadow-xl flex flex-col justify-between">

                <div>

                  <div className="w-10 h-10 rounded-xl bg-[#00C896] text-black font-black text-xl flex items-center justify-center mb-3">
                    P
                  </div>

                  <T
                    textKey="mapsPTitle"
                    tag="h4"
                    className="font-display font-extrabold text-lg sm:text-xl text-[#00C896] mb-1"
                  />

                  <T
                    textKey="mapsPSub"
                    tag="p"
                    className="text-xs uppercase font-bold tracking-wider text-gray-400 mb-2"
                  />

                  <T
                    textKey="mapsPDesc"
                    tag="p"
                    className="text-sm text-gray-300 leading-relaxed font-light"
                  />

                </div>

              </div>


              {/* Support */}

              <div className="p-6 bg-black text-white rounded-2xl border-t-4 border-[#00C896] border-x border-b border-gray-800 space-y-3 shadow-xl flex flex-col justify-between">

                <div>

                  <div className="w-10 h-10 rounded-xl bg-[#00C896] text-black font-black text-xl flex items-center justify-center mb-3">
                    S
                  </div>

                  <T
                    textKey="mapsSTitle"
                    tag="h4"
                    className="font-display font-extrabold text-lg sm:text-xl text-[#00C896] mb-1"
                  />

                  <T
                    textKey="mapsSSub"
                    tag="p"
                    className="text-xs uppercase font-bold tracking-wider text-gray-400 mb-2"
                  />

                  <T
                    textKey="mapsSDesc"
                    tag="p"
                    className="text-sm text-gray-300 leading-relaxed font-light"
                  />

                </div>

              </div>

            </div>

          </div>


          <div className="max-w-5xl mx-auto text-center">

            <T
              textKey="mapsFooter"
              tag="p"
              className="text-gray-300 text-sm sm:text-lg leading-relaxed font-light"
            />

          </div>

        </div>

      </section>


      {/* ============================================================
          BEYOND THE BOARDROOM
      ============================================================ */}

      <section className="py-14 sm:py-20 bg-black section-sep">

        <div className="max-w-7xl mx-auto px-6 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

          {/* Image - Left */}

          <div className="lg:col-span-6">

            <img
              src={IMAGES.beyond.src}
              alt="Siddhartha Havelia"
              className="w-[60%] max-w-md h-auto mx-auto"
            />

          </div>


          {/* Content - Right */}

          <div className="lg:col-span-6 space-y-6">

            <SectionNote textKey="beyondBanner" />

            <T
              textKey="beyondTitle"
              tag="h3"
              className="text-3xl sm:text-5xl font-black text-white uppercase font-display"
            />

            <T
              textKey="beyondDesc"
              tag="p"
              className="text-gray-300 text-sm sm:text-lg leading-relaxed font-light"
            />


            <div className="space-y-3">

              <div className="p-4 bg-black text-white rounded-xl border border-gray-800">

                <T
                  textKey="beyondGym"
                  tag="p"
                  className="text-sm sm:text-base font-medium"
                />

              </div>

              <div className="p-4 bg-black text-white rounded-xl border border-gray-800">

                <T
                  textKey="beyondDance"
                  tag="p"
                  className="text-sm sm:text-base font-medium"
                />

              </div>

              <div className="p-4 bg-black text-white rounded-xl border border-gray-800">

                <T
                  textKey="beyondMeditation"
                  tag="p"
                  className="text-sm sm:text-base font-medium"
                />

              </div>

            </div>


            <div className="p-6 bg-black text-white rounded-2xl border-l-8 border-[#00C896] border border-gray-800">

              <T
                textKey="beyondQuote"
                tag="p"
                className="text-base sm:text-xl text-[#00C896]"
              />

            </div>

          </div>

        </div>

      </section>


      {/* ============================================================
          CONNECT / RISE WITH US
      ============================================================ */}

      <section className="py-14 sm:py-20 bg-black section-sep">

        <div className="max-w-7xl mx-auto px-6 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

          {/* Office Image */}

          <div className="lg:col-span-5 flex justify-center">

            <div className="rounded-2xl overflow-hidden bg-black p-2.5 shadow-2xl w-full relative">

              <img
                src={IMAGES.office.src}
                alt="Siddhartha Havelia Office"
                className={`w-full h-64 sm:h-[390px] rounded-xl ${IMAGES.office.fit} ${IMAGES.office.pos} transition-all duration-300`}
                style={{
                  transform: `scale(${IMAGES.office.zoom})`
                }}
              />

            </div>

          </div>


          <div className="lg:col-span-7 space-y-6">

            <SectionNote textKey="riseBanner" />

            <T
              textKey="riseTitle"
              tag="h3"
              className="text-3xl sm:text-5xl font-black text-[#00C896] uppercase font-display"
            />

            <T
              textKey="riseP1"
              tag="p"
              className="text-gray-300 text-sm sm:text-lg leading-relaxed font-light"
            />

            <T
              textKey="riseP2"
              tag="p"
              className="text-gray-300 text-sm sm:text-lg leading-relaxed font-light"
            />

            <T
              textKey="riseP3"
              tag="p"
              className="text-gray-300 text-sm sm:text-lg leading-relaxed font-light"
            />


            <div className="pt-0">

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


      {/* ============================================================
          FOOTER
      ============================================================ */}

      <footer className="py-10 sm:py-12 bg-black text-gray-400 text-xs sm:text-sm border-t border-gray-800">

        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6 text-center md:text-left">

          <div>

            <T
              textKey="footerName"
              tag="p"
              className="font-display font-black text-white text-base"
            />

            <T
              textKey="footerSub"
              tag="p"
              className="text-xs text-gray-400 mt-1"
            />

          </div>


          <div className="text-xs text-gray-400">

            © {new Date().getFullYear()} Siddhartha Havelia. All rights reserved.

          </div>

        </div>

      </footer>

    </div>
  );
}