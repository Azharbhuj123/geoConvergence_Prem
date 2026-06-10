import { useEffect } from 'react';

// ─── Font data ─────────────────────────────────────────────────────────────────
const FONTS = [
  {
    id: 'open-sans',
    label: 'Option A',
    fontName: 'Open Sans',
    note: 'Clean, modern & highly readable — great for corporate trust',
    headingStyle: {
      fontFamily: "'Open Sans', sans-serif",
      fontWeight: 800,
    },
    bodyStyle: {
      fontFamily: "'Open Sans', sans-serif",
      fontWeight: 400,
    },
    bg: 'linear-gradient(135deg, #0a1628 0%, #001452 60%, #0a2a6e 100%)',
    accent: '#4d9fff',
    badge: '#1a3a8f',
  },
  {
    id: 'graphik-wide',
    label: 'Option B',
    fontName: 'Graphik Wide',
    note: 'Bold, geometric & authoritative — projects confidence and scale',
    headingStyle: {
      fontFamily: "'Graphik Wide', sans-serif",
      fontWeight: 900,
      letterSpacing: '-0.01em',
    },
    bodyStyle: {
      fontFamily: "'Graphik Wide', sans-serif",
      fontWeight: 400,
    },
    bg: 'linear-gradient(135deg, #0c0c1a 0%, #001033 60%, #0b1d4a 100%)',
    accent: '#60a5fa',
    badge: '#0f2060',
  },
  {
    id: 'recolleta',
    label: 'Option C',
    fontName: 'Recoleta',
    note: 'Warm, elegant & distinctive — sets GeoConvergence apart from tech norms',
    headingStyle: {
      fontFamily: "'Recoleta'",
      fontWeight: 700,
      letterSpacing: '-0.02em',
    },
    bodyStyle: {
      fontFamily: "'Inter', sans-serif",
      fontWeight: 400,
    },
    bg: 'linear-gradient(135deg, #0f0a20 0%, #1a0b40 60%, #0e1a50 100%)',
    accent: '#a78bfa',
    badge: '#2d1b6e',
  },
];

// ─── Shared hero copy ──────────────────────────────────────────────────────────
const HERO_COPY = {
  heading: 'Indoor Mapping & Digital Twins for the Built Environment',
  subheading:
    'GeoConvergence delivers precision geospatial intelligence — transforming physical spaces into actionable digital assets for government, enterprise, and defense.',
  cta1: 'Schedule a Consultation',
  cta2: 'View Case Studies',
};

// ─── Single font section ───────────────────────────────────────────────────────
function FontSection({ font, index }) {
  return (
    <section
      style={{
        minHeight: '100vh',
        background: font.bg,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        padding: '80px 48px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative glow blobs */}
      <div
        style={{
          position: 'absolute',
          top: '20%',
          right: '10%',
          width: 500,
          height: 500,
          borderRadius: '50%',
          background: `${font.accent}18`,
          filter: 'blur(80px)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '10%',
          left: '5%',
          width: 320,
          height: 320,
          borderRadius: '50%',
          background: `${font.accent}12`,
          filter: 'blur(60px)',
          pointerEvents: 'none',
        }}
      />

      {/* Section number badge */}
      <div style={{ maxWidth: 1100, margin: '0 auto', width: '100%' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 40 }}>
          <span
            style={{
              background: font.badge,
              color: font.accent,
              fontFamily: "'Inter', sans-serif",
              fontWeight: 600,
              fontSize: 13,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              padding: '6px 16px',
              borderRadius: 999,
              border: `1px solid ${font.accent}40`,
            }}
          >
            {font.label} — {font.fontName}
          </span>
          <div style={{ height: 1, flex: 1, background: `${font.accent}30` }} />
        </div>

        {/* Heading */}
        <h1
          style={{
            ...font.headingStyle,
            fontSize: 'clamp(36px, 5.5vw, 70px)',
            lineHeight: 1.1,
            color: '#ffffff',
            margin: '0 0 28px',
            maxWidth: 820,
          }}
        >
          {HERO_COPY.heading}
        </h1>

        {/* Subheading */}
        <p
          style={{
            ...font.bodyStyle,
            fontSize: 'clamp(17px, 1.6vw, 21px)',
            lineHeight: 1.75,
            color: 'rgba(255,255,255,0.75)',
            maxWidth: 640,
            margin: '0 0 48px',
          }}
        >
          {HERO_COPY.subheading}
        </p>

        {/* CTA buttons */}
        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', marginBottom: 56 }}>
          <button
            style={{
              fontFamily: font.bodyStyle.fontFamily,
              fontWeight: 600,
              fontSize: 15,
              color: '#fff',
              background: font.accent,
              border: 'none',
              borderRadius: 10,
              padding: '14px 32px',
              cursor: 'pointer',
              letterSpacing: '0.03em',
            }}
          >
            {HERO_COPY.cta1}
          </button>
          <button
            style={{
              fontFamily: font.bodyStyle.fontFamily,
              fontWeight: 600,
              fontSize: 15,
              color: '#fff',
              background: 'transparent',
              border: `1.5px solid rgba(255,255,255,0.35)`,
              borderRadius: 10,
              padding: '14px 32px',
              cursor: 'pointer',
              letterSpacing: '0.03em',
            }}
          >
            {HERO_COPY.cta2}
          </button>
        </div>

        {/* Font note */}
        <div
          style={{
            borderLeft: `3px solid ${font.accent}`,
            paddingLeft: 16,
            color: 'rgba(255,255,255,0.5)',
            fontFamily: "'Inter', sans-serif",
            fontSize: 14,
            lineHeight: 1.6,
            maxWidth: 600,
          }}
        >
          <span style={{ color: font.accent, fontWeight: 600 }}>Why this font? </span>
          {font.note}
          {font.approxNote && (
            <p style={{ marginTop: 8, fontSize: 12, opacity: 0.6 }}>{font.approxNote}</p>
          )}
        </div>
      </div>

      {/* Section divider label at bottom */}
      <div
        style={{
          position: 'absolute',
          bottom: 24,
          right: 48,
          fontFamily: "'Inter', sans-serif",
          fontSize: 12,
          color: 'rgba(255,255,255,0.25)',
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
        }}
      >
        {index + 1} / {FONTS.length}
      </div>
    </section>
  );
}

// ─── Page ──────────────────────────────────────────────────────────────────────
export default function FontPreviewPage() {
  // Inject Google Fonts for all three options
  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href =
      'https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700;800&family=Inter:wght@400;500;600&family=DM+Serif+Display&display=swap';
    document.head.appendChild(link);

    // Recoleta via Bunny Fonts (free CDN)
    const link2 = document.createElement('link');
    link2.rel = 'stylesheet';
    link2.href = 'https://fonts.cdnfonts.com/css/recoleta';
    document.head.appendChild(link2);

    return () => {
      document.head.removeChild(link);
      document.head.removeChild(link2);
    };
  }, []);

  return (
    <div style={{ background: '#000', minHeight: '100vh' }}>
      {/* Top banner */}
      <div
        style={{
          background: '#000',
          borderBottom: '1px solid #1e293b',
          padding: '18px 48px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          position: 'sticky',
          top: 0,
          zIndex: 100,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <span
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 700,
              fontSize: 15,
              color: '#fff',
              letterSpacing: '-0.01em',
            }}
          >
            GeoConvergence
          </span>
          <span style={{ color: '#334155', fontSize: 20 }}>·</span>
          <span
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 13,
              color: '#64748b',
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
            }}
          >
            Font Comparison — Internal Preview
          </span>
        </div>
        <span
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: 12,
            color: '#334155',
          }}
        >
          Scroll down to compare all 3 options
        </span>
      </div>

      {/* Font sections */}
      {FONTS.map((font, i) => (
        <FontSection key={font.id} font={font} index={i} />
      ))}

      {/* Footer */}
      <div
        style={{
          background: '#000',
          borderTop: '1px solid #1e293b',
          padding: '32px 48px',
          textAlign: 'center',
          fontFamily: "'Inter', sans-serif",
          fontSize: 13,
          color: '#334155',
        }}
      >
        Internal preview page · Not indexed · For Victor's review only
      </div>
    </div>
  );
}
