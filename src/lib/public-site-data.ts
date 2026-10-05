export const TBA = "To be announced";

export type PublicRoute =
  | "/"
  | "/about"
  | "/schedule"
  | "/problem-statements"
  | "/prizes"
  | "/judges"
  | "/sponsors"
  | "/gallery"
  | "/faq"
  | "/contact"
  | "/register"
  | "/enter";

export type ThemeName = "light" | "dark";

export type NavigationItem = {
  label: string;
  href: PublicRoute;
  description: string;
};

export type HeritageAsset = {
  light: string;
  dark: string;
  alt: string;
  focalPoint: string;
  /** True only after the supplied authoritative asset has been added to public/. */
  available: boolean;
};

export type EventDatum = {
  label: string;
  value: string;
  detail?: string;
};

export type EditorialCard = {
  number?: string;
  eyebrow?: string;
  title: string;
  description: string;
  href?: PublicRoute;
  status?: string;
};

export const publicNavigation: NavigationItem[] = [
  { label: "Home", href: "/", description: "Opening frame" },
  { label: "About", href: "/about", description: "The Code-e-Manipal story" },
  { label: "Schedule", href: "/schedule", description: "Event journey" },
  {
    label: "Problem Statements",
    href: "/problem-statements",
    description: "Challenge discovery",
  },
  { label: "Prizes", href: "/prizes", description: "Recognition" },
  { label: "Judges", href: "/judges", description: "People behind the room" },
  { label: "Sponsors", href: "/sponsors", description: "Partners" },
  { label: "Gallery", href: "/gallery", description: "Past frames" },
  { label: "FAQ", href: "/faq", description: "Practical guidance" },
];

export const primaryActions = {
  register: { label: "Register", href: "/register" as PublicRoute },
  enter: { label: "Enter portal", href: "/enter" as PublicRoute },
};

export const heritageImages = {
  hero: {
    light: "/images/heritage/light/01-hawa-mahal-landscape.webp",
    dark: "/images/heritage/dark/08-pink-city-night.webp",
    alt: "Jaipur architectural atmosphere",
    focalPoint: "center",
    available: false,
  },
  about: {
    light: "/images/heritage/light/17-in-the-pink-city.webp",
    dark: "/images/heritage/dark/06-nahargarh-scenic-golden.webp",
    alt: "Jaipur city architecture",
    focalPoint: "center",
    available: false,
  },
  schedule: {
    light: "/images/heritage/light/10-samrat-yantra.webp",
    dark: "/images/heritage/dark/01-jantar-mantar-arch.webp",
    alt: "Astronomical architecture in Jaipur",
    focalPoint: "center",
    available: false,
  },
  problemStatements: {
    light: "/images/heritage/light/09-jantar-mantar-gate.webp",
    dark: "/images/heritage/dark/01-jantar-mantar-arch.webp",
    alt: "Architectural entryway",
    focalPoint: "center",
    available: false,
  },
  prizes: {
    light: "/images/heritage/light/15-city-palace-hall-arches.webp",
    dark: "/images/heritage/dark/02-sheesh-mahal-amber.webp",
    alt: "Palace arches in Jaipur",
    focalPoint: "center",
    available: false,
  },
  judges: {
    light: "/images/heritage/light/14-city-palace-ornate-hall.webp",
    dark: "/images/heritage/dark/03-sheesh-mahal-corridor.webp",
    alt: "An interior architectural corridor",
    focalPoint: "center",
    available: false,
  },
  sponsors: {
    light: "/images/heritage/light/04-city-palace-exterior.webp",
    dark: "/images/heritage/dark/09-albert-hall-night.webp",
    alt: "Jaipur landmark exterior",
    focalPoint: "center",
    available: false,
  },
  gallery: {
    light: "/images/heritage/light/02-patrika-gate.webp",
    dark: "/images/heritage/dark/07-hawa-mahal-lit-night.webp",
    alt: "Jaipur gateway architecture",
    focalPoint: "center",
    available: false,
  },
  faq: {
    light: "/images/heritage/light/03-city-palace-courtyard.webp",
    dark: "/images/heritage/dark/05-nahargarh-ramp-sunset.webp",
    alt: "Jaipur courtyard architecture",
    focalPoint: "center",
    available: false,
  },
  contact: {
    light: "/images/heritage/light/16-city-palace-complex-courtyard.webp",
    dark: "/images/heritage/dark/06-nahargarh-scenic-golden.webp",
    alt: "Jaipur complex courtyard",
    focalPoint: "center",
    available: false,
  },
  register: {
    light: "/images/heritage/light/13-hawa-mahal-close.webp",
    dark: "/images/heritage/dark/08-pink-city-night.webp",
    alt: "Hawa Mahal details",
    focalPoint: "center",
    available: false,
  },
  enter: {
    light: "/images/heritage/light/14-city-palace-ornate-hall.webp",
    dark: "/images/heritage/dark/03-sheesh-mahal-corridor.webp",
    alt: "Architectural hall in Jaipur",
    focalPoint: "center",
    available: false,
  },
} satisfies Record<string, HeritageAsset>;

export const event = {
  name: "Code-e-Manipal 2.0",
  brandLabel: "Code-e-Manipal",
  edition: "2.0",
  shortDescription:
    "A modern space for ambitious ideas, thoughtful technology, and the people ready to build what matters.",
  longDescription:
    "Code-e-Manipal brings a precise, people-first approach to the hackathon experience. The public site will publish official event information as it is confirmed.",
  metadata: [
    { label: "When", value: TBA },
    { label: "Where", value: TBA },
    { label: "Format", value: TBA },
  ] satisfies EventDatum[],
  proof: [
    { label: "Duration", value: TBA },
    { label: "Prize pool", value: TBA },
    { label: "Location", value: TBA },
    { label: "Registrations", value: TBA },
  ] satisfies EventDatum[],
};

export const valuePillars: EditorialCard[] = [
  {
    number: "01",
    eyebrow: "Make",
    title: "Bring a useful idea into focus.",
    description:
      "A stage for teams who want to turn a sharp question into a considered prototype.",
  },
  {
    number: "02",
    eyebrow: "Meet",
    title: "Find people who push the work forward.",
    description:
      "A shared environment for students, builders, and perspectives that deserve to cross paths.",
  },
  {
    number: "03",
    eyebrow: "Show",
    title: "Give your thinking a public edge.",
    description:
      "Use the event as a moment to communicate intent, craft, and the courage to make a case.",
  },
];

export const trackPreview: EditorialCard[] = [
  {
    number: "A",
    eyebrow: "Challenge set",
    title: "Problem statements",
    description: "Official tracks and challenge details will be released here.",
    href: "/problem-statements",
    status: TBA,
  },
  {
    number: "B",
    eyebrow: "Challenge set",
    title: "Open questions",
    description: "The complete set of build opportunities will be published with event guidance.",
    href: "/problem-statements",
    status: TBA,
  },
  {
    number: "C",
    eyebrow: "Challenge set",
    title: "Ways to contribute",
    description: "Participation requirements and submission criteria will be published officially.",
    href: "/problem-statements",
    status: TBA,
  },
];

export const schedulePreview: EditorialCard[] = [
  {
    number: "01",
    eyebrow: "Phase",
    title: "Schedule release",
    description: "The complete event journey, timings, and locations will be announced here.",
    href: "/schedule",
    status: TBA,
  },
  {
    number: "02",
    eyebrow: "Phase",
    title: "Build moments",
    description: "Official milestones and on-ground experiences will appear in the event schedule.",
    href: "/schedule",
    status: TBA,
  },
  {
    number: "03",
    eyebrow: "Phase",
    title: "Showcase",
    description: "Presentation, evaluation, and closing information will be confirmed by organizers.",
    href: "/schedule",
    status: TBA,
  },
];

export const prizes: EditorialCard[] = [
  {
    eyebrow: "Recognition",
    title: "Awards structure",
    description: "Winner, runner-up, and any special recognition will be published when confirmed.",
    href: "/prizes",
    status: TBA,
  },
];

export const people: EditorialCard[] = [
  {
    eyebrow: "People",
    title: "Judges and mentors",
    description: "Confirmed profiles, roles, and expertise will be announced here.",
    href: "/judges",
    status: TBA,
  },
];

export const sponsors: EditorialCard[] = [
  {
    eyebrow: "Partners",
    title: "Partners and supporters",
    description: "Approved partner information will appear once confirmed.",
    href: "/sponsors",
    status: TBA,
  },
];

export const gallery: EditorialCard[] = [
  {
    eyebrow: "Archive",
    title: "Stories from the room",
    description: "Official event photography and credits will be shared here.",
    href: "/gallery",
    status: TBA,
  },
];

export const faqs = [
  {
    question: "Who can participate?",
    answer: "Official eligibility guidance is " + TBA.toLowerCase() + ".",
  },
  {
    question: "What is the team size?",
    answer: "Official team-size guidance is " + TBA.toLowerCase() + ".",
  },
  {
    question: "How do I register?",
    answer: "Registration instructions will be published by the organizers.",
  },
  {
    question: "Will accommodation and food be available?",
    answer: "On-ground arrangements are " + TBA.toLowerCase() + ".",
  },
  {
    question: "What should participants bring?",
    answer: "Participant preparation guidance is " + TBA.toLowerCase() + ".",
  },
];

export const routeContent: Record<Exclude<PublicRoute, "/">, EditorialCard> = {
  "/about": {
    eyebrow: "About",
    title: "A thoughtful place to make the next thing.",
    description: event.longDescription,
  },
  "/schedule": {
    eyebrow: "Event journey",
    title: "The schedule will arrive with the details that matter.",
    description: "Dates, timings, phases, locations, and live event status are " + TBA.toLowerCase() + ".",
  },
  "/problem-statements": {
    eyebrow: "Challenge discovery",
    title: "The questions are worth waiting for.",
    description: "Official tracks, statements, constraints, and submission guidance are " + TBA.toLowerCase() + ".",
  },
  "/prizes": {
    eyebrow: "Recognition",
    title: "Recognition with intent.",
    description: "Confirmed award categories, benefits, and prize details are " + TBA.toLowerCase() + ".",
  },
  "/judges": {
    eyebrow: "People",
    title: "Meet the people shaping the room.",
    description: "Judge and mentor profiles are " + TBA.toLowerCase() + ".",
  },
  "/sponsors": {
    eyebrow: "Partners",
    title: "A wall of support, built with care.",
    description: "Confirmed partners and sponsorship opportunities are " + TBA.toLowerCase() + ".",
  },
  "/gallery": {
    eyebrow: "Gallery",
    title: "A record of the work and the people behind it.",
    description: "Official gallery content and photo credits are " + TBA.toLowerCase() + ".",
  },
  "/faq": {
    eyebrow: "Practical guidance",
    title: "Questions deserve clear answers.",
    description: "As event details are confirmed, the organizer guidance will be updated here.",
  },
  "/contact": {
    eyebrow: "Contact",
    title: "Find the right way in.",
    description: "Official organizer contact channels are " + TBA.toLowerCase() + ".",
  },
  "/register": {
    eyebrow: "Registration",
    title: "Be ready when the doors open.",
    description: "Official registration timing, eligibility, and the application link are " + TBA.toLowerCase() + ".",
  },
  "/enter": {
    eyebrow: "Participant portal",
    title: "The operational workspace awaits.",
    description: "Portal access guidance will be published with official registration information.",
  },
};

export const publicRoutes = Object.keys(routeContent) as Exclude<PublicRoute, "/">[];
