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
}

export interface WizardAnswers {
  vibe: string | null;
  location: string | null;
  activity: string | null;
  dinner: string | null;
}

export const INITIAL_ANSWERS: WizardAnswers = {
  vibe: null,
  location: null,
  activity: null,
  dinner: null,
};

export const WIZARD_QUESTIONS: WizardQuestion[] = [
  {
    id: 'vibe',
    title: 'Welke vibe past bij jou?',
    subtitle: 'Kies de sfeer die jou aanspreekt',
    options: [
      { value: 'stad', label: 'Stad', description: 'Bruisende energie' },
      { value: 'natuur', label: 'Natuur', description: 'Rust en groen' },
      { value: 'culinair', label: 'Culinair', description: 'Smaaksensatie' },
    ],
  },
  {
    id: 'location',
    title: 'Waar wil je naartoe?',
    subtitle: 'Kies je droombestemming',
    options: [
      { value: 'parijs', label: 'Parijs', description: 'Stad van de liefde' },
      { value: 'antwerpen', label: 'Antwerpen', description: 'Diamant van België' },
      { value: 'kopenhagen', label: 'Kopenhagen', description: 'Scandinavische charme' },
      { value: 'maastricht', label: 'Maastricht', description: 'Bourgondisch genieten' },
    ],
  },
  {
    id: 'activity',
    title: 'Welke activiteit spreekt je aan?',
    subtitle: 'Wat wil je het liefst doen?',
    options: [
      { value: 'spa', label: 'Spa', description: 'Ontspanning & wellness' },
      { value: 'museum', label: 'Museum', description: 'Kunst & cultuur' },
      { value: 'theater', label: 'Theater', description: 'Voorstelling & spektakel' },
      { value: 'shoppen', label: 'Shoppen', description: 'Winkelen & ontdekken' },
    ],
  },
  {
    id: 'dinner',
    title: 'Hoe wil je dineren?',
    subtitle: 'Kies je diner-ervaring',
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
