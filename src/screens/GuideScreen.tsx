import { useEffect, useState } from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { copy, guideVenues } from "../content";
import { EventBackdrop } from "../components/EventBackdrop";
import { designAssets } from "../designAssets";
import type { GuideVenue } from "../types";

interface GuideScreenProps {
  onToast: (message: string) => void;
}

const isWeChat = /MicroMessenger/i.test(navigator.userAgent);
const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);

function openMap(lat: string, lng: string, name: string, webUrl: string) {
  if (isWeChat) {
    // 微信浏览器无法唤起外部 App，直接跳转高德网页版
    window.location.href = webUrl;
    return;
  }

  const encoded = encodeURIComponent(name);
  const scheme = isIOS
    ? `iosamap://viewMap?sourceApplication=maxscend&poiname=${encoded}&lat=${lat}&lon=${lng}&dev=0`
    : `androidamap://viewMap?sourceApplication=maxscend&poiname=${encoded}&lat=${lat}&lon=${lng}&dev=0`;

  // 尝试打开 App
  window.location.href = scheme;

  // 800ms 后如果还在页面说明 App 没装，跳转网页
  setTimeout(() => {
    if (!document.hidden) {
      window.location.href = webUrl;
    }
  }, 800);
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
    const loc = venue.mapUrl.match(/position=([\d.]+),([\d.]+)/);
    if (loc) {
      openMap(loc[2], loc[1], venue.name, venue.mapUrl);
    } else {
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
        <button className="lightbox__close" type="button" onClick={onClose} aria-label="关闭">×</button>
      </div>
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
