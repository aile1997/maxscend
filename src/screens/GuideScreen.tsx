import { useState } from "react";
import { copy, guideVenues } from "../content";
import { EventBackdrop } from "../components/EventBackdrop";
import { designAssets } from "../designAssets";
import type { GuideVenue } from "../types";

interface GuideScreenProps {
  onToast: (message: string) => void;
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
    if (!venue.mapUrl) return;
    // On mobile, try to open native map app directly
    const loc = venue.mapUrl.match(/position=([\d.]+),([\d.]+)/);
    if (loc) {
      const [, lng, lat] = loc;
      const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
      if (isIOS) {
        // Apple Maps with fallback
        window.location.href = `maps://maps.apple.com/?ll=${lat},${lng}&q=${encodeURIComponent(venue.name)}`;
        return;
      }
      // Android: try geo URI (opens default map app)
      window.location.href = `geo:${lat},${lng}?q=${lat},${lng}(${encodeURIComponent(venue.name)})`;
      // Fallback after 500ms if no app opened
      setTimeout(() => {
        window.open(venue.mapUrl!, "_blank", "noopener");
      }, 500);
      return;
    }
    window.open(venue.mapUrl, "_blank", "noopener");
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
  return (
    <div
      className="lightbox"
      onClick={onClose}
      onTouchMove={(e) => e.preventDefault()}
    >
      <div
        className="lightbox__content"
        onClick={(e) => e.stopPropagation()}
        onTouchMove={(e) => e.stopPropagation()}
      >
        <img className="lightbox__img" src={src} alt={label} draggable={false} />
        <button className="lightbox__close" type="button" onClick={onClose} aria-label="关闭">×</button>
      </div>
    </div>
  );
}

export function GuideScreen({ onToast }: GuideScreenProps) {
  const [lightbox, setLightbox] = useState<{ src: string; label: string } | null>(null);

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
