import type { CSSProperties } from "react";
import { useEffect, useState } from "react";
import { AgendaScreen } from "./screens/AgendaScreen";
import { BottomNav } from "./components/BottomNav";
import { BrandStoryScreen } from "./screens/BrandStoryScreen";
import { ContactScreen } from "./screens/ContactScreen";
import { GuideScreen } from "./screens/GuideScreen";
import { copy, navItems } from "./content";
import { designAssets, navIconAssets } from "./designAssets";
import { HomeScreen } from "./screens/HomeScreen";
import type { NavItemDefinition, PageId } from "./types";

const DEFAULT_SCREEN_HEIGHT = 774;
const AGENDA_SCREEN_HEIGHT = 2200;
const GUIDE_SCREEN_HEIGHT = 774;
const BRAND_STORY_SCREEN_HEIGHT = 3280;
const MIN_SPLASH_MS = 1400;

const preloadImage = (src: string) =>
  new Promise<void>((resolve) => {
    const image = new Image();
    const finish = () => resolve();
    const complete = () => {
      if (typeof image.decode === "function") {
        image.decode().catch(() => undefined).finally(finish);
        return;
      }

      finish();
    };

    image.onload = complete;
    image.onerror = finish;
    image.decoding = "async";
    image.src = src;

    if (image.complete) {
      if (image.naturalWidth > 0) {
        complete();
        return;
      }

      finish();
    }
  });

const allAssetSources = [
  designAssets.splashVisualBg,
  designAssets.splashTwenty,
  designAssets.splashLogo,
  designAssets.headerLogo,
  designAssets.homeCopyImage,
  designAssets.eventBackdrop,
  designAssets.contactPhoneLeft,
  designAssets.contactPhoneRight,
  designAssets.guideMapXinzhuo,
  designAssets.guideMapTaihuHotel,
  designAssets.guideMapGuanshe,
  ...Object.values(navIconAssets).flatMap((icon) => (icon.active ? [icon.active, icon.inactive] : [icon.inactive])),
  // Brand story assets
  `${import.meta.env.BASE_URL}brand-assets/Group 337.svg`,
  `${import.meta.env.BASE_URL}brand-assets/Group 335.svg`,
  `${import.meta.env.BASE_URL}brand-assets/Group 333.svg`,
  `${import.meta.env.BASE_URL}brand-assets/mascot2.webp`,
  `${import.meta.env.BASE_URL}brand-assets/figma-vector-bottom.png`,
];

declare global {
  interface Window {
    __bootScreen?: {
      finish: () => void;
    };
  }
}

function App() {
  const [minimumSplashDone, setMinimumSplashDone] = useState(false);
  const [assetsReady, setAssetsReady] = useState(false);
  const [page, setPage] = useState<PageId>("home");
  const [toast, setToast] = useState<string | null>(null);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setMinimumSplashDone(true);
    }, MIN_SPLASH_MS);

    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    let cancelled = false;

    Promise.all([
      ...allAssetSources.map((src) => preloadImage(src)),
      document.fonts?.ready ?? Promise.resolve(),
    ]).finally(() => {
      if (!cancelled) {
        setAssetsReady(true);
      }
    });

    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    if (!toast) {
      return undefined;
    }

    const timer = window.setTimeout(() => {
      setToast(null);
    }, 2200);

    return () => window.clearTimeout(timer);
  }, [toast]);

  const handleNavSelect = (item: NavItemDefinition) => {
    if (item.disabled) {
      setToast(item.message ?? "");
      return;
    }

    if (item.id === "home" || item.id === "agenda" || item.id === "story" || item.id === "guide" || item.id === "contact") {
      setPage(item.id);
    }
  };

  const handleFeedbackSubmit = (value: string) => {
    if (!value.trim()) {
      setToast(copy.feedbackEmpty);
      return;
    }

    const apiBase = import.meta.env.VITE_API_BASE || "";
    fetch(`${apiBase}/api/feedback`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ content: value.trim() }),
    }).catch(() => undefined);

    setToast(copy.feedbackDone);
  };

  const isBooting = !minimumSplashDone || !assetsReady;
  const screenHeight = isBooting
    ? DEFAULT_SCREEN_HEIGHT
    : page === "agenda"
      ? AGENDA_SCREEN_HEIGHT
      : page === "guide"
        ? GUIDE_SCREEN_HEIGHT
        : page === "story"
          ? BRAND_STORY_SCREEN_HEIGHT
          : DEFAULT_SCREEN_HEIGHT;
  const shellStyle = {
    "--screen-height": `${screenHeight}`,
  } as CSSProperties;

  useEffect(() => {
    if (isBooting) {
      return;
    }

    window.__bootScreen?.finish();
  }, [isBooting]);

  const noScroll = isBooting || page === "home" || page === "guide" || page === "contact";

  return (
    <div className={`app-shell${noScroll ? " app-shell--no-scroll" : ""}`} style={shellStyle}>
      <div className={`device-shell${isBooting ? " device-shell--booting" : ""}`}>
        {!isBooting && (
          <>
            {page === "home" && <HomeScreen />}
            {page === "agenda" && <AgendaScreen />}
            {page === "story" && <BrandStoryScreen />}
            {page === "guide" && <GuideScreen onToast={setToast} />}
            {page === "contact" && <ContactScreen onSubmitFeedback={handleFeedbackSubmit} />}
          </>
        )}
      </div>

      {!isBooting && <BottomNav activeId={page} items={navItems} onSelect={handleNavSelect} />}

      <div className={`toast${toast ? " toast--visible" : ""}`} role="status" aria-live="polite">
        {toast}
      </div>
    </div>
  );
}

export default App;
