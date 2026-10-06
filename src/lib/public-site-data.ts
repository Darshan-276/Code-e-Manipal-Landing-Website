export const TBA = "To be announced";

export type PublicRoute =
  | "/"
  | "/about"
  | "/schedule"
  | "/tracks"
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
    eyebrow: "Build",
    title: "Give a useful idea somewhere to begin.",
    description:
      "A focused prompt, a shared room, and the discipline to turn a sharp question into a considered prototype.",
  },
  {
    number: "02",
    eyebrow: "Break",
    title: "Question the obvious with intent.",
    description:
      "Problem-solving begins by testing the first answer, then making space for better ones to surface.",
  },
  {
    number: "03",
    eyebrow: "Become",
    title: "Let the work change what comes next.",
    description:
      "Recognition, collaboration, networking, mentorship, and real-world impact will take their confirmed shape in the official programme.",
  },
];

export const trackPreview: EditorialCard[] = [
  {
    number: "01",
    eyebrow: "Official track",
    title: "Category 01",
    description: "The official category, brief, and participation guidance are " + TBA.toLowerCase() + ".",
    href: "/tracks",
    status: TBA,
  },
  {
    number: "02",
    eyebrow: "Official track",
    title: "Category 02",
    description: "The official category, brief, and participation guidance are " + TBA.toLowerCase() + ".",
    href: "/tracks",
    status: TBA,
  },
  {
    number: "03",
    eyebrow: "Official track",
    title: "Category 03",
    description: "The official category, brief, and participation guidance are " + TBA.toLowerCase() + ".",
    href: "/tracks",
    status: TBA,
  },
  {
    number: "04",
    eyebrow: "Official track",
    title: "Category 04",
    description: "The official category, brief, and participation guidance are " + TBA.toLowerCase() + ".",
    href: "/tracks",
    status: TBA,
  },
];

export const competitionJourney: EditorialCard[] = [
  {
    number: "01",
    eyebrow: "Journey signal",
    title: "Registration",
    description: "Registration timing and requirements are " + TBA.toLowerCase() + ".",
    status: TBA,
  },
  {
    number: "02",
    eyebrow: "Journey signal",
    title: "Qualifier",
    description: "The confirmed qualification format is " + TBA.toLowerCase() + ".",
    status: TBA,
  },
  {
    number: "03",
    eyebrow: "Journey signal",
    title: "Shortlist",
    description: "Shortlisting criteria and communication are " + TBA.toLowerCase() + ".",
    status: TBA,
  },
  {
    number: "04",
    eyebrow: "Journey signal",
    title: "Hack",
    description: "The confirmed build format and timing are " + TBA.toLowerCase() + ".",
    status: TBA,
  },
  {
    number: "05",
    eyebrow: "Journey signal",
    title: "Mentoring",
    description: "Mentoring details, if confirmed, will be announced here.",
    status: TBA,
  },
  {
    number: "06",
    eyebrow: "Journey signal",
    title: "Demo",
    description: "Demo format and submission expectations are " + TBA.toLowerCase() + ".",
    status: TBA,
  },
  {
    number: "07",
    eyebrow: "Journey signal",
    title: "Jury",
    description: "The official evaluation structure is " + TBA.toLowerCase() + ".",
    status: TBA,
  },
  {
    number: "08",
    eyebrow: "Journey signal",
    title: "Results",
    description: "The official announcement process is " + TBA.toLowerCase() + ".",
    status: TBA,
  },
];

export type SchedulePreview = {
  number: string;
  day: string;
  time: string;
  event: string;
  description: string;
  location: string;
  stage: string;
};

export const schedulePreview: SchedulePreview[] = [
  {
    number: "01",
    day: TBA,
    time: TBA,
    event: "Programme item 01",
    description: "Official date, time, description, location, and stage information are pending confirmation.",
    location: TBA,
    stage: TBA,
  },
  {
    number: "02",
    day: TBA,
    time: TBA,
    event: "Programme item 02",
    description: "Official date, time, description, location, and stage information are pending confirmation.",
    location: TBA,
    stage: TBA,
  },
  {
    number: "03",
    day: TBA,
    time: TBA,
    event: "Programme item 03",
    description: "Official date, time, description, location, and stage information are pending confirmation.",
    location: TBA,
    stage: TBA,
  },
];

export const prizeTiers: EditorialCard[] = [
  {
    number: "01",
    eyebrow: "Recognition tier",
    title: "Award tier 01",
    description: "Confirmed award category, benefits, and any prize value are " + TBA.toLowerCase() + ".",
    href: "/prizes",
    status: TBA,
  },
  {
    number: "02",
    eyebrow: "Recognition tier",
    title: "Award tier 02",
    description: "Confirmed award category, benefits, and any prize value are " + TBA.toLowerCase() + ".",
    href: "/prizes",
    status: TBA,
  },
  {
    number: "03",
    eyebrow: "Recognition tier",
    title: "Award tier 03",
    description: "Confirmed award category, benefits, and any prize value are " + TBA.toLowerCase() + ".",
    href: "/prizes",
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
  "/tracks": {
    eyebrow: "Challenge discovery",
    title: "The official challenge categories are on their way.",
    description: "Official tracks, statements, constraints, and submission guidance are " + TBA.toLowerCase() + ".",
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
