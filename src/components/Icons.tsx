import type { NavId } from "../types";

export function HomeIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M4.5 10.8 12 4.8l7.5 6V19H4.5Z" />
    </svg>
  );
}

export function CalendarIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7 3.5v3M17 3.5v3M4.5 9.5h15M5.5 6.5h13a1 1 0 0 1 1 1v11h-15v-11a1 1 0 0 1 1-1Z" />
    </svg>
  );
}

export function StarIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m12 3.8 2.55 5.16 5.7.83-4.13 4.02.98 5.68L12 16.8 6.9 19.47l.98-5.68L3.75 9.8l5.7-.83Z" />
    </svg>
  );
}

export function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 20.7s5.5-5.03 5.5-9.29a5.5 5.5 0 1 0-11 0C6.5 15.67 12 20.7 12 20.7Z" />
      <path d="M12 13.45a2.05 2.05 0 1 0 0-4.1 2.05 2.05 0 0 0 0 4.1Z" />
    </svg>
  );
}

export function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M8.2 4.5h4.25l1.2 3.5-2.45 1.92a11.06 11.06 0 0 0 2.88 2.88L16 10.35l3.5 1.2v4.25a1 1 0 0 1-1 1C10.52 16.8 7.2 13.48 7.2 9.5a1 1 0 0 1 1-1Z" />
    </svg>
  );
}

export function BackIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m13.8 6.2-5.6 5.8 5.6 5.8" />
    </svg>
  );
}

export function ReloadIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M19 8.8V4.6l-3.8 1.86" />
      <path d="M18.3 12a6.3 6.3 0 1 1-1.7-4.3" />
    </svg>
  );
}

export function SettingsIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7 6h10M5 12h14M8 18h8" />
      <path d="M9 6a1.4 1.4 0 1 1-2.8 0A1.4 1.4 0 0 1 9 6Zm9 6a1.4 1.4 0 1 1-2.8 0 1.4 1.4 0 0 1 2.8 0ZM11.8 18a1.4 1.4 0 1 1-2.8 0 1.4 1.4 0 0 1 2.8 0Z" />
    </svg>
  );
}

export function MoreIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M6.5 12h.01M12 12h.01M17.5 12h.01" />
    </svg>
  );
}

export function PhoneCallBadge() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M8.9 5.4h3.8l1.06 3.05-2.07 1.63a8.97 8.97 0 0 0 2.11 2.11l1.63-2.07 3.05 1.06v3.8a.9.9 0 0 1-.9.9 10.8 10.8 0 0 1-10.8-10.8.9.9 0 0 1 .9-.9Z" />
    </svg>
  );
}

export function NavIcon({ id }: { id: NavId }) {
  switch (id) {
    case "home":
      return <HomeIcon />;
    case "agenda":
      return <CalendarIcon />;
    case "story":
      return <StarIcon />;
    case "guide":
      return <PinIcon />;
    case "contact":
      return <PhoneIcon />;
    default:
      return null;
  }
}
