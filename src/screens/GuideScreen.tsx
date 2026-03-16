import { useEffect, useState } from "react";
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

  return (
    <article className="guide-card">
      <h2 className="guide-card__name">{venue.name}</h2>
      <p className="guide-card__address">{venue.address}</p>
      <div className="guide-card__actions">
        <button className="guide-card__btn" type="button" onClick={handleCopy}>
          {copy.guideCopyAddress}
        </button>
        <a className="guide-card__btn" href={venue.mapUrl} target="_blank" rel="noopener noreferrer">
          {copy.guideViewMap}
        </a>
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
    <div className="lightbox" onClick={onClose}>
      <div className="lightbox__content" onClick={(e) => e.stopPropagation()}>
        <img className="lightbox__img" src={src} alt={label} />
        <button className="lightbox__close" type="button" onClick={onClose} aria-label="关闭">×</button>
      </div>
    </div>
  );
}

export function GuideScreen({ onToast }: GuideScreenProps) {
  const [lightbox, setLightbox] = useState<{ src: string; label: string } | null>(null);

  useEffect(() => {
    const viewport = document.querySelector('meta[name="viewport"]');
    const original = viewport?.getAttribute("content") || "";
    if (lightbox) {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
      viewport?.setAttribute("content", original.replace(/,?\s*user-scalable=\w+/, "") + ", user-scalable=no");
    } else {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
      viewport?.setAttribute("content", original.replace(/,?\s*user-scalable=\w+/, ""));
    }
    return () => {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
      viewport?.setAttribute("content", original);
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
