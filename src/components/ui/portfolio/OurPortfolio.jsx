import React, { useState, useEffect } from "react";
import image from '../../../assets/Gallery/01.png'
import image01 from '../../../assets/Gallery/02.png'
import image02 from '../../../assets/Gallery/03.png'
import image03 from '../../../assets/Gallery/04.png'
import image04 from '../../../assets/Gallery/05.png'
import image05 from '../../../assets/Gallery/06.png'
import image06 from '../../../assets/Gallery/07.jpeg'
import image07 from '../../../assets/Gallery/08.jpeg'


const projects = [
  // ── Websites — replace images with your actual screenshots ──
  {
    category: "Website",
    image: image,
  },
  {
    category: "Website",
    image: image01,
  },
  {
    category: "Website",
    image: image02,
  },
  {
    category: "Website",
    image: image03,
  },
  {
    category: "Website",
    image: image04,
  },
  {
    category: "Website",
    image: image05,
  },

  // ── SEO Results — replace stat/statLabel with your real numbers ──
  {
    category: "SEO",
    image: image06,
    stat: "312%",
    statLabel: "Traffic Increase",
    bars: [20, 32, 28, 45, 40, 60, 55, 100],
  },
  {
    category: "SEO",
    image: image07,
    stat: "#1",
    statLabel: "Google Ranking",
    bars: [15, 28, 22, 38, 50, 65, 80, 100],
  },

];

const filters = ["All", "Website", "SEO"];

const OurPortfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [visibleItems, setVisibleItems] = useState(projects);
  const [animating, setAnimating] = useState(false);
  const [entering, setEntering] = useState(false);

  const handleFilter = (filter) => {
    if (filter === activeFilter || animating) return;
    setAnimating(true);
    setEntering(false);
    setTimeout(() => {
      setActiveFilter(filter);
      setVisibleItems(filter === "All" ? projects : projects.filter(p => p.category === filter));
      setTimeout(() => { setEntering(true); setAnimating(false); }, 40);
    }, 200);
  };

  useEffect(() => {
    const t = setTimeout(() => setEntering(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <section style={{ background: "#f8fafc", padding: "96px 0 112px" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap');

        .pf-wrap {
          max-width: 1200px; margin: 0 auto; padding: 0 32px;
          font-family: 'Plus Jakarta Sans', sans-serif;
        }

        /* ── Header ── */
        .pf-eyebrow {
          display: flex; align-items: center; justify-content: center;
          gap: 8px; margin-bottom: 14px;
        }
        .pf-dot { width: 6px; height: 6px; border-radius: 50%; background: #2563eb; }
        .pf-eye-txt {
          font-size: 11px; font-weight: 700; letter-spacing: 0.2em;
          text-transform: uppercase; color: #2563eb;
        }
        .pf-h2 {
          text-align: center; font-size: clamp(30px, 4.5vw, 50px);
          font-weight: 800; color: #0f172a; line-height: 1.1;
          margin: 0 0 12px; letter-spacing: -0.02em;
        }
        .pf-h2 span { color: #2563eb; }
        .pf-sub {
          text-align: center; color: #64748b; font-size: 16px;
          margin: 0 0 48px; font-weight: 400;
        }

        /* ── Filter Pills ── */
        .pf-pills {
          display: flex; justify-content: center;
          gap: 10px; margin-bottom: 52px; flex-wrap: wrap;
        }
        .pf-pill {
          position: relative; padding: 10px 28px;
          border-radius: 100px; font-size: 13px; font-weight: 600;
          cursor: pointer; border: 1.5px solid #e2e8f0;
          transition: all 0.26s cubic-bezier(0.4,0,0.2,1);
          background: #fff; color: #64748b; outline: none;
          overflow: hidden;
        }
        .pf-pill::after {
          content: '';
          position: absolute; inset: 0;
          background: linear-gradient(135deg, #1d4ed8 0%, #3b82f6 100%);
          opacity: 0; transition: opacity 0.26s ease;
          border-radius: inherit;
        }
        .pf-pill span { position: relative; z-index: 1; }
        .pf-pill:hover { border-color: #93c5fd; color: #2563eb; }
        .pf-pill.active {
          color: #fff; border-color: #2563eb;
          box-shadow: 0 4px 18px rgba(37,99,235,0.28);
        }
        .pf-pill.active::after { opacity: 1; }

        /* ── Grid ── */
        .pf-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        @media (max-width: 900px) { .pf-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 560px) { .pf-grid { grid-template-columns: 1fr; } }

        /* ── Base Card ── */
        .pf-card {
          border-radius: 16px; overflow: hidden;
          border: 1px solid #e2e8f0;
          background: #fff;
          transition: transform 0.32s cubic-bezier(0.34,1.4,0.64,1),
                      box-shadow 0.32s ease,
                      opacity 0.2s ease;
          will-change: transform;
        }
        .pf-card:hover {
          transform: translateY(-7px) scale(1.012);
          box-shadow: 0 20px 48px rgba(15,23,42,0.11),
                      0 6px 20px rgba(37,99,235,0.07);
          border-color: #bfdbfe;
        }
        .pf-card.exit { opacity: 0; transform: scale(0.96) translateY(8px); }
        .pf-card.enter {
          opacity: 0; transform: translateY(22px);
          animation: pfEnter 0.42s cubic-bezier(0.22,1,0.36,1) forwards;
        }
        @keyframes pfEnter {
          to { opacity: 1; transform: translateY(0); }
        }

        /* ── Website Card ── */
        .pf-browser-bar {
          background: #f1f5f9;
          padding: 8px 12px;
          display: flex; align-items: center; gap: 5px;
          border-bottom: 1px solid #e2e8f0;
        }
        .pf-br { width: 9px; height: 9px; border-radius: 50%; }
        .pf-url {
          flex: 1; height: 16px; border-radius: 4px;
          background: #fff; border: 1px solid #e2e8f0; margin-left: 6px;
        }
        .pf-site-img {
          width: 100%; height: 220px; object-fit: cover; display: block;
          transition: transform 0.5s cubic-bezier(0.4,0,0.2,1);
        }
        .pf-card:hover .pf-site-img { transform: scale(1.07); }
        .pf-site-overflow { overflow: hidden; }

        /* ── SEO Card ── */
        .pf-seo-img-wrap {
          position: relative; overflow: hidden; height: 220px;
        }
        .pf-seo-bg {
          width: 100%; height: 100%; object-fit: cover; display: block;
          filter: brightness(0.5);
          transition: transform 0.5s ease;
        }
        .pf-card:hover .pf-seo-bg { transform: scale(1.06); }
        .pf-seo-overlay {
          position: absolute; inset: 0;
          display: flex; flex-direction: column;
          align-items: center; justify-content: center; gap: 4px;
        }
        .pf-seo-num {
          font-size: 52px; font-weight: 800; color: #fff; line-height: 1;
          letter-spacing: -0.03em;
          text-shadow: 0 2px 20px rgba(0,0,0,0.5);
        }
        .pf-seo-num-lbl {
          font-size: 10.5px; font-weight: 700; letter-spacing: 0.14em;
          text-transform: uppercase; color: rgba(255,255,255,0.75);
        }
        .pf-seo-body { padding: 16px 18px 18px; background: #fff; }
        .pf-mini-bars {
          display: flex; align-items: flex-end;
          gap: 3px; height: 34px; margin-bottom: 10px;
        }
        .pf-mb {
          flex: 1; border-radius: 2px 2px 0 0;
          background: #dbeafe;
          transition: background 0.3s ease;
        }
        .pf-mb.peak { background: #2563eb; }
        .pf-card:hover .pf-mb { background: #93c5fd; }
        .pf-card:hover .pf-mb.peak { background: #1d4ed8; }
        .pf-seo-result-lbl {
          font-size: 10px; font-weight: 700; letter-spacing: 0.1em;
          text-transform: uppercase; color: #94a3b8; margin-bottom: 3px;
        }
        .pf-seo-result-title {
          font-size: 15px; font-weight: 700; color: #0f172a;
          transition: color 0.2s;
        }
        .pf-card:hover .pf-seo-result-title { color: #2563eb; }
      `}</style>

      <div className="pf-wrap">
        {/* Header */}
        <div className="pf-eyebrow">
          <div className="pf-dot" />
          <span className="pf-eye-txt">Our Portfolio</span>
          <div className="pf-dot" />
        </div>
        <h2 className="pf-h2">Work That <span>Speaks</span> 🚀</h2>
        <p className="pf-sub">Real website designs & proven SEO growth results</p>

        {/* Filter Pills */}
        <div className="pf-pills">
          {filters.map(f => (
            <button
              key={f}
              className={`pf-pill${activeFilter === f ? " active" : ""}`}
              onClick={() => handleFilter(f)}
            >
              <span>{f}</span>
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="pf-grid">
          {visibleItems.map((item, i) => (
            <div
              key={`${item.category}-${i}`}
              className={`pf-card${animating ? " exit" : entering ? " enter" : ""}`}
              style={entering ? { animationDelay: `${i * 55}ms` } : {}}
            >
              {item.category === "Website" ? (
                /* Website — simple image only */
                <div className="pf-site-overflow">
                  <img src={item.image} alt="Website" className="pf-site-img" />
                </div>
              ) : (
                /* SEO — result number + mini bar graph */
                <>
                  <div className="pf-seo-img-wrap">
                    <img src={item.image} alt="SEO" className="pf-seo-bg" />
                    
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurPortfolio;