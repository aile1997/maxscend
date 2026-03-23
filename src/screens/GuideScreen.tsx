import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { copy, guideVenues } from "../content";
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
    if (venue.mapUrl) {
      // 用新窗口打开，避免产生当前页浏览历史（微信底部栏不会出现）
      const a = document.createElement("a");
      a.href = venue.mapUrl;
      a.target = "_blank";
      a.rel = "noopener noreferrer";
      a.click();
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
  return (
    <div className="lightbox" onClick={onClose}>
      <div className="lightbox__content" onClick={(e) => e.stopPropagation()}>
        <TransformWrapper
          initialScale={1}
          minScale={1}
          maxScale={5}
          doubleClick={{ mode: "zoomIn" }}
          pinch={{ step: 5 }}
        >
          <TransformComponent
            wrapperStyle={{ width: "100%", height: "100%" }}
            contentStyle={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}
          >
            <img className="lightbox__img" src={src} alt={label} draggable={false} />
          </TransformComponent>
        </TransformWrapper>
      </div>
      <button className="lightbox__close" type="button" onClick={onClose} aria-label="关闭">×</button>
      <p className="lightbox__hint">双指缩放 · 双击放大</p>
    </div>
  );
}

export function GuideScreen({ onToast }: GuideScreenProps) {
  const [lightbox, setLightbox] = useState<{ src: string; label: string } | null>(null);

  useEffect(() => {
    if (lightbox) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [lightbox]);

  return (
    <section className="screen guide-screen">
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

      {lightbox && createPortal(
        <MapLightbox src={lightbox.src} label={lightbox.label} onClose={() => setLightbox(null)} />,
        document.body
      )}
    </section>
  );
}
