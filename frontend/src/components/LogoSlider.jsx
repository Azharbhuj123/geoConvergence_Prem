import { urlFor } from '../lib/sanity'

function getLogoUrl(logo) {
  if (!logo) return ''
  return typeof logo === 'string' ? logo : urlFor(logo)
}

function splitRows(items) {
  const midpoint = Math.ceil(items.length / 2)
  const top = items.slice(0, midpoint)
  const bottom = items.slice(midpoint)

  return {
    top: top.length ? top : items,
    bottom: bottom.length ? bottom : items,
  }
}

function SliderItem({ item }) {
  const logoUrl = getLogoUrl(item.logo)

  return (
    <div className="logo-slider-item">
      {logoUrl && (
        <img
          src={logoUrl}
          alt={item.title || 'Client logo'}
          className="logo-slider-image"
          loading="lazy"
        />
      )}
      <div className="logo-slider-copy">
        {item.title && <p className="logo-slider-title font-Web">{item.title}</p>}
        {item.subtitle && <p className="logo-slider-subtitle">{item.subtitle}</p>}
      </div>
    </div>
  )
}

function MarqueeRow({ items, direction }) {
  const repeatedItems = [...items, ...items, ...items, ...items]

  return (
    <div className="logo-slider-row">
      <div className={`logo-slider-track logo-slider-track-${direction}`}>
        <div className="logo-slider-group">
          {repeatedItems.map((item, index) => (
            <SliderItem key={`${direction}-a-${item.title || index}-${index}`} item={item} />
          ))}
        </div>
        <div className="logo-slider-group" aria-hidden="true">
          {repeatedItems.map((item, index) => (
            <SliderItem key={`${direction}-b-${item.title || index}-${index}`} item={item} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default function LogoSlider({ darkMode, sliders }) {
  const items = (sliders || []).filter(item => item?.logo || item?.title || item?.subtitle)

  if (!items.length) return null

  const rows = splitRows(items)

  return (
    <section className={"relative py-8 bg-[#e5e5e5]"}>
      <div className={`logo-slider w-full overflow-hidden max-w-[1440px] mx-auto }`}>
        <MarqueeRow items={rows.top} direction="left" />
        <MarqueeRow items={rows.bottom} direction="right" />

        <style>{`
        .logo-slider {
          width: 100%;
          min-height: 200px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 30px;
          overflow: hidden;
        }

        .logo-slider-dark {
          background: #d9d9d9;
        }

        .logo-slider-row {
          width: 100%;
          overflow: hidden;
        }

        .logo-slider-track {
          display: flex;
          width: max-content;
          will-change: transform;
          min-height: 70px;
        }

        .logo-slider-track-left {
          animation: logo-slider-left 48s linear infinite;
        }

        .logo-slider-track-right {
          animation: logo-slider-right 48s linear infinite;
        }

        .logo-slider-group {
          display: flex;
          align-items: center;
          flex-shrink: 0;
          min-height: 70px;
        }

        .logo-slider-item {
          width: 232px;
          min-width: 172px;
          height: 52px;
          display: flex;
          align-items: center;
          gap: 8px;
          padding-right: 24px;
          color: #8A8A8A;
          opacity: 0.55;
          transition: opacity 0.2s ease; 
        }
          .logo-slider-item:hover {
            opacity: 1;
            cursor: pointer;
        }
        .logo-slider-row:hover .logo-slider-track {
        animation-play-state: paused;
        }
        .logo-slider-image {
          width: 66px;
          height: 66px;
          flex: 0 0 36px;
          object-fit: contain;
        }

        .logo-slider-copy {
          min-width: 0;
          line-height: 1.08;
        }

        .logo-slider-title,
        .logo-slider-subtitle {
          margin: 0;
          overflow: hidden;
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
        }

        .logo-slider-title {
          font-size: 20px !important;
          font-weight: 400;
          color: #8A8A8A;
        }
        .logo-slider-item:hover .logo-slider-title {
  color: #000000;
}
        .logo-slider-subtitle {
          margin-top: 1px;
          font-size: 9px;
          font-weight: 700;
          color: #8a8a8a;
        }

        @keyframes logo-slider-left {
          from { transform: translate3d(0, 0, 0); }
          to { transform: translate3d(-50%, 0, 0); }
        }

        @keyframes logo-slider-right {
          from { transform: translate3d(-50%, 0, 0); }
          to { transform: translate3d(0, 0, 0); }
        }

        @media (max-width: 640px) {
          .logo-slider {
            min-height: 256px;
            gap: 24px;
          }
          .logo-slider-title {
          font-size: 12px !important;
          }

          .logo-slider-item {
            width: 152px;
            min-width: 152px;
            padding-right: 18px;
          }
        }
      `}</style>
      </div>
    </section>
  )
}
