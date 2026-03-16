import type { NavId } from "./types";

export interface PositionedAsset {
  src: string;
  x: number;
  y: number;
  width: number;
  height: number;
}

const assetPath = (name: string) => `${import.meta.env.BASE_URL}figma-assets/${encodeURIComponent(name)}`;

export const designAssets = {
  eventBackdrop: assetPath("Group 251.svg"),
  headerLogo: assetPath("header-logo.svg"),
  splashVisualBg: assetPath("splash-visual-bg.png"),
  splashTwenty: assetPath("splash-20-full.svg"),
  splashLogo: assetPath("splash-logo.svg"),
  homeCopyImage: assetPath("home-copy.svg"),
  homeBrandMaxscend: assetPath("home-brand-maxscend.svg"),
  homeBrandAnniversary: assetPath("home-brand-anniversary.svg"),
  contactPhoneLeft: assetPath("contact-phone-left.svg"),
  contactPhoneRight: assetPath("contact-phone-right.svg"),
  guideMapXinzhuo: assetPath("guide-map-xinzhuo.png"),
  guideMapTaihuHotel: assetPath("guide-map-taihu-hotel.png"),
  guideMapGuanshe: assetPath("guide-map-guanshe.png"),
} as const;

export const homeHeadlineAssets: PositionedAsset[] = [
  { src: assetPath("home-word-1.svg"), x: 33.3958, y: 369.3848, width: 47.4439, height: 41.8466 },
  { src: assetPath("home-word-2.svg"), x: 90.4111, y: 369.2861, width: 50.3124, height: 43.3639 },
  { src: assetPath("home-word-3.svg"), x: 148.2191, y: 369.0623, width: 50.0148, height: 43.3382 },
  { src: assetPath("home-word-4.svg"), x: 206.6697, y: 358.2129, width: 48.0368, height: 43.0910 },
  { src: assetPath("home-word-5.svg"), x: 262.2003, y: 358.5354, width: 50.6335, height: 43.5617 },
  { src: assetPath("home-word-6.svg"), x: 319.2655, y: 358.2856, width: 50.5842, height: 43.0394 },
  { src: assetPath("home-word-7.svg"), x: 33.0, y: 422.7083, width: 51.3998, height: 43.5123 },
  { src: assetPath("home-word-8.svg"), x: 204.5172, y: 411.1880, width: 50.5842, height: 43.1404 },
  { src: assetPath("home-word-9.svg"), x: 319.9584, y: 411.3367, width: 49.8416, height: 42.7686 },
  { src: assetPath("home-word-10.svg"), x: 263.8003, y: 411.3303, width: 48.0370, height: 43.0910 },
  { src: assetPath("home-arrow-line.svg"), x: 98.6661, y: 405.5659, width: 84.8783, height: 2.1503 },
  { src: assetPath("home-arrow-head.svg"), x: 175.7679, y: 411.2241, width: 10.6494, height: 13.8500 },
];

export const homeEnglishAssets: PositionedAsset[] = [
  {
    src: assetPath("home-english-top.svg"),
    x: 208.8215,
    y: 463.0,
    width: 163.1945,
    height: 18.5972,
  },
  {
    src: assetPath("home-english-with.svg"),
    x: 206.0,
    y: 479.1450,
    width: 38.9208,
    height: 14.6650,
  },
  {
    src: assetPath("home-english-bottom.svg"),
    x: 247.4938,
    y: 495.2898,
    width: 108.8242,
    height: 18.5972,
  },
];

export const navIconAssets: Record<
  NavId,
  {
    active?: string;
    inactive: string;
  }
> = {
  home: {
    active: assetPath("nav-home-active.svg"),
    inactive: assetPath("nav-home-inactive.svg"),
  },
  agenda: {
    active: assetPath("nav-agenda-active.svg"),
    inactive: assetPath("nav-agenda-inactive.svg"),
  },
  story: {
    inactive: assetPath("nav-story-inactive.svg"),
  },
  guide: {
    active: assetPath("nav-guide-active.svg"),
    inactive: assetPath("nav-guide-inactive.svg"),
  },
  contact: {
    active: assetPath("nav-contact-active.svg"),
    inactive: assetPath("nav-contact-inactive.svg"),
  },
};

export const navIconSizes: Record<
  NavId,
  {
    width: number;
    height: number;
  }
> = {
  home: {
    width: 25,
    height: 25,
  },
  agenda: {
    width: 24,
    height: 25,
  },
  story: {
    width: 28.034,
    height: 25.278,
  },
  guide: {
    width: 19,
    height: 25,
  },
  contact: {
    width: 25,
    height: 25,
  },
};
