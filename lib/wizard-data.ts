export type Phase = 'landing' | 'wizard' | 'loading' | 'voucher';

export interface WizardOption {
  value: string;
  label: string;
  description?: string;
}

export interface WizardQuestion {
  id: keyof WizardAnswers;
  title: string;
  subtitle?: string;
  options: WizardOption[];
  multiSelect: boolean;
}

export interface WizardAnswers {
  vibe: string[];
  location: string[];
  activity: string[];
  dinner: string[];
}

export const INITIAL_ANSWERS: WizardAnswers = {
  vibe: [],
  location: [],
  activity: [],
  dinner: [],
};

export const WIZARD_QUESTIONS: WizardQuestion[] = [
  {
    id: 'vibe',
    title: 'Welke vibe past bij jou?',
    subtitle: 'Kies de sfeer die jou aanspreekt (meerdere mogelijk)',
    multiSelect: true,
    options: [
      { value: 'stad', label: 'Stad', description: 'Bruisende energie' },
      { value: 'natuur', label: 'Natuur', description: 'Rust en groen' },
      { value: 'culinair', label: 'Culinair', description: 'Smaaksensatie' },
    ],
  },
  {
    id: 'location',
    title: 'Waar wil je naartoe?',
    subtitle: 'Kies je droombestemming (meerdere mogelijk)',
    multiSelect: true,
    options: [
      { value: 'antwerpen', label: 'Antwerpen', description: 'Diamant van België' },
      { value: 'brussel', label: 'Brussel', description: 'Hoofdstad & cultuur' },
      { value: 'gent', label: 'Gent', description: 'Historische charme' },
      { value: 'brugge', label: 'Brugge', description: 'Venetië van het Noorden' },
      { value: 'leuven', label: 'Leuven', description: 'Bruisende studentenstad' },
    ],
  },
  {
    id: 'activity',
    title: 'Welke activiteiten spreken je aan?',
    subtitle: 'Kies wat je wilt doen (meerdere mogelijk)',
    multiSelect: true,
    options: [
      { value: 'spa', label: 'Spa', description: 'Ontspanning & wellness' },
      { value: 'museum', label: 'Museum', description: 'Kunst & cultuur' },
      { value: 'theater', label: 'Theater', description: 'Voorstelling & spektakel' },
      { value: 'shoppen', label: 'Shoppen', description: 'Winkelen & ontdekken' },
      { value: 'wandelen', label: 'Wandelen', description: 'Stad of natuur verkennen' },
      { value: 'restaurant', label: 'Restaurant', description: 'Culinair genieten' },
    ],
  },
  {
    id: 'dinner',
    title: 'Hoe wil je dineren?',
    subtitle: 'Kies je diner-ervaring (meerdere mogelijk)',
    multiSelect: true,
    options: [
      { value: 'romantic', label: 'Romantisch', description: 'Intiem & kaarslicht' },
      { value: 'casual', label: 'Casual', description: 'Relaxed & gezellig' },
      { value: 'fine-dining', label: 'Fine Dining', description: 'Culinaire hoogstandjes' },
      { value: 'street-food', label: 'Street Food', description: 'Authentiek & avontuurlijk' },
    ],
  },
];

export const LOADING_MESSAGES = [
  "Je perfecte dag wordt samengesteld...",
  "Bijna klaar, Amélie!",
  "Nog even geduld...",
];

export const VALUE_DISPLAY: Record<string, string> = {
  // Vibes
  stad: "Stad",
  natuur: "Natuur",
  culinair: "Culinair",
  // Locations (Belgian cities)
  antwerpen: "Antwerpen",
  brussel: "Brussel",
  gent: "Gent",
  brugge: "Brugge",
  leuven: "Leuven",
  // Activities
  spa: "Spa",
  museum: "Museum",
  theater: "Theater",
  shoppen: "Shoppen",
  wandelen: "Wandelen",
  restaurant: "Restaurant",
  // Dinner
  romantic: "Romantisch",
  casual: "Casual",
  "fine-dining": "Fine Dining",
  "street-food": "Street Food",
};
