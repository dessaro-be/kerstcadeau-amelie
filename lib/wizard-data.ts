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
  extras: string[];
}

export const INITIAL_ANSWERS: WizardAnswers = {
  vibe: [],
  location: [],
  activity: [],
  dinner: [],
  extras: [],
};

export const WIZARD_QUESTIONS: WizardQuestion[] = [
  {
    id: 'vibe',
    title: 'Welke vibe past bij jou?',
    subtitle: 'Kies de sfeer die jou aanspreekt (meerdere mogelijk)',
    multiSelect: true,
    options: [
      { value: 'romantisch', label: 'Romantisch', description: 'Liefde in de lucht' },
      { value: 'avontuurlijk', label: 'Avontuurlijk', description: 'Nieuwe ervaringen' },
      { value: 'relaxed', label: 'Relaxed', description: 'Rust en ontspanning' },
      { value: 'cultuur', label: 'Cultureel', description: 'Kunst en geschiedenis' },
      { value: 'culinair', label: 'Culinair', description: 'Smaaksensatie' },
      { value: 'actief', label: 'Actief', description: 'Sportief en energiek' },
      { value: 'gezellig', label: 'Gezellig', description: 'Quality time samen' },
      { value: 'luxe', label: 'Luxueus', description: 'Verwennerij & comfort' },
    ],
  },
  {
    id: 'location',
    title: 'Waar wil je naartoe?',
    subtitle: 'Kies je droombestemming(en) in België',
    multiSelect: true,
    options: [
      { value: 'antwerpen', label: 'Antwerpen', description: 'Mode & diamanten' },
      { value: 'brussel', label: 'Brussel', description: 'Hoofdstad & cultuur' },
      { value: 'gent', label: 'Gent', description: 'Historische charme' },
      { value: 'brugge', label: 'Brugge', description: 'Romantisch Venetië' },
      { value: 'leuven', label: 'Leuven', description: 'Bruisende sfeer' },
      { value: 'mechelen', label: 'Mechelen', description: 'Verborgen parel' },
      { value: 'luik', label: 'Luik', description: 'Waalse gezelligheid' },
      { value: 'namen', label: 'Namen', description: 'Citadel & natuur' },
      { value: 'oostende', label: 'Oostende', description: 'Zee & strand' },
      { value: 'ardennen', label: 'Ardennen', description: 'Bossen & natuur' },
      { value: 'kust', label: 'De Kust', description: 'Belgische Rivièra' },
      { value: 'hasselt', label: 'Hasselt', description: 'Limburgse gastvrijheid' },
    ],
  },
  {
    id: 'activity',
    title: 'Welke activiteiten spreken je aan?',
    subtitle: 'Kies wat je wilt doen (meerdere mogelijk)',
    multiSelect: true,
    options: [
      { value: 'spa', label: 'Spa & Wellness', description: 'Ontspanning & massage' },
      { value: 'museum', label: 'Museum', description: 'Kunst & geschiedenis' },
      { value: 'theater', label: 'Theater & Show', description: 'Voorstelling & spektakel' },
      { value: 'shoppen', label: 'Shoppen', description: 'Winkelen & ontdekken' },
      { value: 'wandelen', label: 'Wandelen', description: 'Natuur verkennen' },
      { value: 'fietsen', label: 'Fietsen', description: 'Op twee wielen' },
      { value: 'boottocht', label: 'Boottocht', description: 'Varen op het water' },
      { value: 'wijnproeverij', label: 'Wijnproeverij', description: 'Degustatie & genieten' },
      { value: 'bierproeverij', label: 'Bierproeverij', description: 'Belgische trots' },
      { value: 'chocolade', label: 'Chocolade workshop', description: 'Zoete verwennerij' },
      { value: 'koken', label: 'Kookworkshop', description: 'Samen koken' },
      { value: 'escape', label: 'Escape Room', description: 'Puzzels oplossen' },
      { value: 'concert', label: 'Concert', description: 'Live muziek' },
      { value: 'bioscoop', label: 'Bioscoop', description: 'Film kijken' },
      { value: 'bowling', label: 'Bowling', description: 'Strikes & spares' },
      { value: 'karaoke', label: 'Karaoke', description: 'Zingen!' },
      { value: 'casino', label: 'Casino', description: 'Gokje wagen' },
      { value: 'markt', label: 'Marktbezoek', description: 'Lokale producten' },
      { value: 'fotoshoot', label: 'Fotoshoot', description: 'Herinneringen vastleggen' },
      { value: 'massage', label: 'Duo Massage', description: 'Samen relaxen' },
    ],
  },
  {
    id: 'dinner',
    title: 'Hoe wil je dineren?',
    subtitle: 'Kies je culinaire ervaring(en)',
    multiSelect: true,
    options: [
      { value: 'romantic', label: 'Romantisch diner', description: 'Kaarslicht & intiem' },
      { value: 'casual', label: 'Casual eten', description: 'Relaxed & gezellig' },
      { value: 'fine-dining', label: 'Fine Dining', description: 'Sterrenrestaurant' },
      { value: 'street-food', label: 'Street Food', description: 'Authentiek & stoer' },
      { value: 'bistro', label: 'Bistro', description: 'Frans geïnspireerd' },
      { value: 'tapas', label: 'Tapas', description: 'Kleine gerechtjes delen' },
      { value: 'sushi', label: 'Sushi & Aziatisch', description: 'Oosterse smaken' },
      { value: 'italiaans', label: 'Italiaans', description: 'Pizza, pasta & meer' },
      { value: 'vis', label: 'Vis & Seafood', description: 'Verse zeevruchten' },
      { value: 'vegetarisch', label: 'Vegetarisch', description: 'Plantaardig genieten' },
      { value: 'bbq', label: 'BBQ & Grill', description: 'Vlees van de grill' },
      { value: 'brunch', label: 'Brunch', description: 'Uitgebreid ontbijt' },
      { value: 'picknick', label: 'Picknick', description: 'Buiten eten' },
      { value: 'foodhall', label: 'Food Hall', description: 'Diverse keuzestress' },
    ],
  },
  {
    id: 'extras',
    title: 'Welke extra\'s wil je erbij?',
    subtitle: 'Maak het helemaal af (meerdere mogelijk)',
    multiSelect: true,
    options: [
      { value: 'overnachting', label: 'Overnachting', description: 'Ergens blijven slapen' },
      { value: 'bloemen', label: 'Bloemen', description: 'Mooie bos bloemen' },
      { value: 'champagne', label: 'Champagne', description: 'Bubbels!' },
      { value: 'ontbijt', label: 'Ontbijt op bed', description: 'Verwennerij in de ochtend' },
      { value: 'vervoer', label: 'Taxi/Vervoer', description: 'Geen zorgen over rijden' },
      { value: 'cadeau', label: 'Klein cadeautje', description: 'Verrassing erbij' },
      { value: 'fotograaf', label: 'Fotograaf', description: 'Professionele foto\'s' },
      { value: 'muzikant', label: 'Live muziek', description: 'Serenades' },
      { value: 'verrassing', label: 'Verrassing!', description: 'Laat me verrassen' },
    ],
  },
];

export const LOADING_MESSAGES = [
  "Je perfecte dag wordt samengesteld...",
  "Bijna klaar, Amélie!",
  "Nog even geduld...",
  "Dit wordt geweldig!",
];

export const VALUE_DISPLAY: Record<string, string> = {
  // Vibes
  romantisch: "Romantisch",
  avontuurlijk: "Avontuurlijk",
  relaxed: "Relaxed",
  cultuur: "Cultureel",
  culinair: "Culinair",
  actief: "Actief",
  gezellig: "Gezellig",
  luxe: "Luxueus",

  // Locations (Belgian cities)
  antwerpen: "Antwerpen",
  brussel: "Brussel",
  gent: "Gent",
  brugge: "Brugge",
  leuven: "Leuven",
  mechelen: "Mechelen",
  luik: "Luik",
  namen: "Namen",
  oostende: "Oostende",
  ardennen: "Ardennen",
  kust: "De Kust",
  hasselt: "Hasselt",

  // Activities
  spa: "Spa & Wellness",
  museum: "Museum",
  theater: "Theater & Show",
  shoppen: "Shoppen",
  wandelen: "Wandelen",
  fietsen: "Fietsen",
  boottocht: "Boottocht",
  wijnproeverij: "Wijnproeverij",
  bierproeverij: "Bierproeverij",
  chocolade: "Chocolade workshop",
  koken: "Kookworkshop",
  escape: "Escape Room",
  concert: "Concert",
  bioscoop: "Bioscoop",
  bowling: "Bowling",
  karaoke: "Karaoke",
  casino: "Casino",
  markt: "Marktbezoek",
  fotoshoot: "Fotoshoot",
  massage: "Duo Massage",

  // Dinner
  romantic: "Romantisch diner",
  casual: "Casual eten",
  "fine-dining": "Fine Dining",
  "street-food": "Street Food",
  bistro: "Bistro",
  tapas: "Tapas",
  sushi: "Sushi & Aziatisch",
  italiaans: "Italiaans",
  vis: "Vis & Seafood",
  vegetarisch: "Vegetarisch",
  bbq: "BBQ & Grill",
  brunch: "Brunch",
  picknick: "Picknick",
  foodhall: "Food Hall",

  // Extras
  overnachting: "Overnachting",
  bloemen: "Bloemen",
  champagne: "Champagne",
  ontbijt: "Ontbijt op bed",
  vervoer: "Taxi/Vervoer",
  cadeau: "Klein cadeautje",
  fotograaf: "Fotograaf",
  muzikant: "Live muziek",
  verrassing: "Verrassing!",
};
