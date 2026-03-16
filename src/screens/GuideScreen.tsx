import { useCallback, useEffect, useRef, useState } from "react";
import { copy, guideVenues } from "../content";
import { EventBackdrop } from "../components/EventBackdrop";
import { designAssets } from "../designAssets";
import type { GuideVenue } from "../types";

interface GuideScreenProps {
  onToast: (message: string) => void;
}

function openAmap(lat: string, lng: string, name: string) {
  const encoded = encodeURIComponent(name);
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
  const amapAppUrl = isIOS
    ? `iosamap://viewMap?sourceApplication=maxscend&poiname=${encoded}&lat=${lat}&lon=${lng}&dev=0`
    : `androidamap://viewMap?sourceApplication=maxscend&poiname=${encoded}&lat=${lat}&lon=${lng}&dev=0`;
  const webFallback = `https://uri.amap.com/marker?position=${lng},${lat}&name=${encoded}`;

  // Try opening the app
  const iframe = document.createElement("iframe");
  iframe.style.display = "none";
  iframe.src = amapAppUrl;
  document.body.appendChild(iframe);

  // Fallback to web after 600ms
  const timer = setTimeout(() => {
    window.location.href = webFallback;
  }, 600);

  // If app opened, the page will blur — clear the fallback
  const onBlur = () => {
    clearTimeout(timer);
    window.removeEventListener("blur", onBlur);
  };
  window.addEventListener("blur", onBlur);

  // Cleanup iframe
  setTimeout(() => {
    document.body.removeChild(iframe);
    window.removeEventListener("blur", onBlur);
  }, 2000);
}

function VenueCard({ venue, onToast, onMapClick }: {
  venue: GuideVenue;
  onToast: (msg: string) => void;
  onMapClick: (src: string, label: string) => void;
}) {
  const mapSrc = `${import.meta.env.BASE_URL}figma-assets/${encodeURIComponent(venue.mapAsset)}`;

  const handleCopy = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(venue.address).then(
        () => onToast(copy.addressCopied),
        () => onToast(copy.addressCopied),
      );
    } else {
      onToast(copy.addressCopied);
    }
  };

  const handleViewMap = () => {
    const loc = venue.mapUrl?.match(/position=([\d.]+),([\d.]+)/);
    if (loc) {
      openAmap(loc[2], loc[1], venue.name);
    } else if (venue.mapUrl) {
      window.location.href = venue.mapUrl;
    }
  };

  return (
    <article className="guide-card">
      <h2 className="guide-card__name">{venue.name}</h2>
      <p className="guide-card__address">{venue.address}</p>
      <div className="guide-card__actions">
        <button className="guide-card__btn" type="button" onClick={handleCopy}>
          {copy.guideCopyAddress}
        </button>
        <button className="guide-card__btn" type="button" onClick={handleViewMap}>
          {copy.guideViewMap}
        </button>
      </div>
      <p className="guide-card__map-label">{copy.guideFloorPlan}</p>
      <div className="guide-card__map-wrap">
        <img
          className="guide-card__map"
          src={mapSrc}
          alt={`${venue.name}${copy.guideFloorPlan}`}
          onClick={() => onMapClick(mapSrc, `${venue.name} ${copy.guideFloorPlan}`)}
        />
      </div>
    </article>
  );
}

function MapLightbox({ src, label, onClose }: { src: string; label: string; onClose: () => void }) {
  const [scale, setScale] = useState(1);
  const lastDist = useRef(0);
  const imgRef = useRef<HTMLImageElement>(null);

  const onTouchStart = useCallback((e: React.TouchEvent) => {
    if (e.touches.length === 2) {
      const dx = e.touches[0].clientX - e.touches[1].clientX;
      const dy = e.touches[0].clientY - e.touches[1].clientY;
      lastDist.current = Math.hypot(dx, dy);
    }
  }, []);

  const onTouchMove = useCallback((e: React.TouchEvent) => {
    e.preventDefault();
    if (e.touches.length === 2) {
      const dx = e.touches[0].clientX - e.touches[1].clientX;
      const dy = e.touches[0].clientY - e.touches[1].clientY;
      const dist = Math.hypot(dx, dy);
      if (lastDist.current > 0) {
        const newScale = scale * (dist / lastDist.current);
        setScale(Math.min(Math.max(newScale, 1), 5));
      }
      lastDist.current = dist;
    }
  }, [scale]);

  const onTouchEnd = useCallback(() => {
    lastDist.current = 0;
  }, []);

  return (
    <div
      className="lightbox"
      onClick={onClose}
      onTouchMove={(e) => e.preventDefault()}
    >
      <div
        className="lightbox__content"
        onClick={(e) => e.stopPropagation()}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <img
          ref={imgRef}
          className="lightbox__img"
          src={src}
          alt={label}
          draggable={false}
          style={{ transform: `scale(${scale})` }}
        />
        <button className="lightbox__close" type="button" onClick={onClose} aria-label="关闭">×</button>
      </div>
      <p className="lightbox__hint">双指缩放查看</p>
    </div>
  );
}

export function GuideScreen({ onToast }: GuideScreenProps) {
  const [lightbox, setLightbox] = useState<{ src: string; label: string } | null>(null);

  useEffect(() => {
    if (lightbox) {
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";
    } else {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.touchAction = "";
    };
  }, [lightbox]);

  return (
    <section className="screen guide-screen">
      <EventBackdrop />

      <img className="screen__header-logo" src={designAssets.headerLogo} alt="" aria-hidden="true" />

      <h1 className="screen__section-title guide-screen__title">{copy.guideTitle}</h1>

      <div className="guide-carousel">
        {guideVenues.map((venue) => (
          <VenueCard
            key={venue.name}
            venue={venue}
            onToast={onToast}
            onMapClick={(src, label) => setLightbox({ src, label })}
          />
        ))}
      </div>

      {lightbox && (
        <MapLightbox src={lightbox.src} label={lightbox.label} onClose={() => setLightbox(null)} />
      )}
    </section>
  );
}
