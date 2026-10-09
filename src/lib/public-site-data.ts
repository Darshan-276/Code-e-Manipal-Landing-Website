export const TBA = "To be announced";

export type PublicRoute =
  | "/"
  | "/about"
  | "/schedule"
  | "/timeline"
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

export type SponsorProfile = {
  name: string;
  image: string;
  alt: string;
};

export type JudgeProfile = {
  name: string;
  role: string;
  organization?: string;
  image: string;
};

export type TimelineItem = { time: string; title: string; description: string; place: string; state: "Completed" | "Current" | "Upcoming" | "Locked" };
export type TimelineStage = { number: string; title: string; subtitle: string; date: string; items: TimelineItem[] };

export const publicNavigation: NavigationItem[] = [
  { label: "Home", href: "/", description: "Opening frame" },
  { label: "About", href: "/about", description: "The Code-e-Manipal story" },
  { label: "Timeline", href: "/timeline", description: "Event journey" },
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
  enter: { label: "Enter Console", href: "/enter" as PublicRoute },
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
    "The second edition of LearnIT's flagship hackathon at Manipal University Jaipur.",
  longDescription:
    "Code-e-Manipal brings a precise, people-first approach to the hackathon experience. The public site will publish official event information as it is confirmed.",
  metadata: [
    { label: "When", value: "15–16 October 2026" },
    { label: "Where", value: "Manipal University Jaipur" },
    { label: "Format", value: "Offline hackathon" },
  ] satisfies EventDatum[],
  proof: [
    { label: "Duration", value: "36 hours" },
    { label: "Prize pool", value: "₹3,50,000+" },
    { label: "Location", value: "MUJ" },
    { label: "Team size", value: "1–6 members" },
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

export const aboutHighlights = [
  "Offline coding challenge at Manipal University Jaipur",
  "Open to university and college students nationally and internationally",
  "Interdisciplinary and inter-college teams of 1–6 members",
];

export const officialTracks = ["AI/ML", "HealthTech", "FinTech / EdTech", "Cybersecurity", "Generative AI & LLMs", "Multi-Agent Systems", "Gaming & Immersive Tech", "Smart City and Infrastructure", "Open Innovation"];

export const officialPrizes = [
  { title: "Winner", amount: "₹50,000", detail: "Cash Prize", kind: "winner" },
  { title: "First Runner Up", amount: "₹30,000", detail: "Cash Prize", kind: "runner" },
  { title: "Second Runner Up", amount: "₹20,000", detail: "Cash Prize", kind: "runner" },
  { title: "Top 10 Teams", amount: "₹5,000+", detail: "In-kind rewards + exclusive perks", kind: "support" },
  { title: "Additional benefits", amount: "₹3,00,000", detail: "Exclusive perks, rewards, coupons and other benefits", kind: "support" },
] as const;

export const timelineStages: TimelineStage[] = [
  { number: "01", title: "Online Phase", subtitle: "Pre-Event Onboarding", date: "27 Sep – 11 Oct 2026", items: [
    { time: "11 Oct 2026", title: "Round 1: Online Assessment (MCQ on Unstop)", description: "10-question online qualifier covering Programming Fundamentals, Logical Reasoning, Computer Science Fundamentals, and Problem Solving / Output Prediction (10 mins, 10 marks, no negative marking).", place: "Unstop Platform", state: "Completed" },
    { time: "Prior to Finale", title: "National Shortlist Announcement", description: "Announcement of qualifying teams selected for Round 2 Offline Finale at Manipal University Jaipur.", place: "Unstop & Official Portal", state: "Completed" },
    { time: "Oct 14, 06:00 PM", title: "Portal Provisioning & Workspace Activation", description: "Shortlisted Team Leaders receive credentials, verify rosters (1–6 members), and access the Code-e-Manipal 2.0 workspace.", place: "Online Portal", state: "Completed" },
    { time: "", title: "Pre-Hack Briefing & System Verification", description: "Briefing on hackathon rules, submission guidelines, evaluation criteria, and workspace readiness.", place: "Online / Discord", state: "Completed" },
  ] },
  { number: "02", title: "15 October — Day 1", subtitle: "Reporting & Hacking Launch", date: "", items: [
    { time: "08:30 AM – 09:30 AM", title: "Participant Reporting & Physical Verification", description: "Physical check-in, ID badge distribution, Wi-Fi configuration, and table allocation for verified teams.", place: "Ground Floor Lobby, Academic Block, MUJ", state: "Completed" },
    { time: "09:30 AM – 10:30 AM", title: "Grand Opening Ceremony & Welcome Address", description: "Keynote addresses by university leadership and industry partners, followed by introduction of the jury and mentors.", place: "Main Auditorium, MUJ", state: "Completed" },
    { time: "10:30 AM", title: "Problem Statements Released & 36-Hour Hack Begins", description: "Official challenge briefs unlocked. The 36-hour hackathon timer commences. Teams begin sprint development.", place: "Central Hack Area & Online Portal", state: "Current" },
    { time: "01:00 PM – 02:30 PM", title: "Lunch & Networking Break", description: "Buffet lunch provided for all registered participants, mentors, and organizing staff.", place: "Food Court / Mess Area", state: "Upcoming" },
    { time: "04:30 PM – 07:00 PM", title: "Mentorship Round 1 — Feasibility & Architecture Check", description: "Assigned domain mentors visit team stations to review initial system architecture, tech stack feasibility, and challenge alignment.", place: "Team Workstations", state: "Upcoming" },
    { time: "08:30 PM – 10:00 PM", title: "Dinner & Refreshments", description: "Dinner service. Midnight caffeine stations open throughout the night.", place: "Food Court / Mess Area", state: "Upcoming" },
    { time: "11:30 PM – Midnight", title: "Midnight Progress Check-in & Snack Surge", description: "Quick status ping by the organizing committee. Energy snacks, Red Bull, and tea/coffee distributed.", place: "Central Hack Area", state: "Upcoming" },
  ] },
  { number: "03", title: "16 October — Day 2", subtitle: "Code Freeze & Jury Demos", date: "", items: [
    { time: "03:00 AM – 05:00 AM", title: "Late Night Coding & Quiet Sprint", description: "Dedicated quiet sprint hours. Chill-out bays and resting zones open.", place: "Central Hack Area", state: "Upcoming" },
    { time: "07:30 AM – 09:00 AM", title: "Breakfast & Morning Energizer", description: "Breakfast service for all active hackers.", place: "Food Court / Mess Area", state: "Upcoming" },
    { time: "09:30 AM – 11:30 AM", title: "Mentorship Round 2 — Prototype Polish & Demo Preparation", description: "Mentors conduct dry runs of team pitches, live demos, and UI/UX polish reviews before final code freeze.", place: "Team Workstations", state: "Upcoming" },
    { time: "12:30 PM SHARP", title: "Hard Code Freeze & Submission Window Closes", description: "Absolute deadline. All GitHub commits, live demo URLs, and project summaries must be finalized in the portal.", place: "Code-e-Manipal Portal", state: "Locked" },
    { time: "01:30 PM – 04:30 PM", title: "Final Jury Evaluation & Live Demonstrations", description: "Judges grade teams on Innovation, Technical Execution, Demo, and Impact through the judge console.", place: "Evaluation Labs & Auditoriums", state: "Upcoming" },
    { time: "05:00 PM – 06:30 PM", title: "Valedictory Ceremony & Award Presentation", description: "Announcement of track winners, overall champions, prize distribution, and concluding remarks.", place: "Main Auditorium, MUJ", state: "Upcoming" },
  ] },
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

export const sponsorProfiles: SponsorProfile[] = [
  { name: "e-cell", image: "/images/Sponsors/e-cell-cropped.png", alt: "e-cell logo" },
  { name: "The Hosteller", image: "/images/Sponsors/the-hosteller-cropped.png", alt: "The Hosteller logo" },
  { name: "HackerRank", image: "/images/Sponsors/hackerrank-cropped.png", alt: "HackerRank logo" },
  { name: "VickyBytes", image: "/images/Sponsors/vickybytes-cropped.png", alt: "VickyBytes logo" },
  { name: "Unstop", image: "/images/Sponsors/unstop-cropped.png", alt: "Unstop logo" },
];

// No judge names, roles, organisations, or photographs are published in the supplied
// official materials yet. Keeping this typed roster empty prevents placeholder people
// from being presented as confirmed participants.
export const judgeProfiles: JudgeProfile[] = [];

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
    title: "A place to turn bold ideas into practical solutions.",
    description: "Code-e-Manipal 2.0 is LearnIT's second-edition offline coding challenge at Manipal University Jaipur.",
  },
  "/schedule": {
    eyebrow: "Timeline",
    title: "Hackathon timeline",
    description: "The complete chronological schedule for Code-e-Manipal 2.0.",
  },
  "/timeline": {
    eyebrow: "Official 36-hour event schedule",
    title: "Hackathon timeline",
    description: "Follow the complete chronological schedule of Code-e-Manipal 2.0, from registration and challenge reveal to mentorship rounds, code freeze, and jury evaluation.",
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
    title: "Recognition for the work that moves things forward.",
    description: "Published prize values, rewards, and benefits for Code-e-Manipal 2.0.",
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
