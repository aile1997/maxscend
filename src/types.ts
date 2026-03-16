export type PageId = "home" | "agenda" | "guide" | "contact";

export type NavId = "home" | "agenda" | "story" | "guide" | "contact";

export interface AgendaEntry {
  time: string;
  title: string;
  subtitle?: string;
  detail?: string;
}

export interface AgendaSection {
  venue: string;
  items: AgendaEntry[];
}

export interface AgendaDateBlock {
  date: string;
  sections: AgendaSection[];
}

export interface GuideVenue {
  name: string;
  address: string;
  mapAsset: string;
  mapUrl?: string;
}

export interface ContactPerson {
  role: string;
  name: string;
  phone: string;
}

export interface NavItemDefinition {
  id: NavId;
  label: string;
  disabled?: boolean;
  message?: string;
}
