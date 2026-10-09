export type FaqLink = { label: string; href: string };
export type FaqItem = { id: string; question: string; answer: string; link?: FaqLink };
export type FaqCategory = { id: string; title: string; items: FaqItem[] };

const portal = "https://code-e-manipal-2-testing.vercel.app";

export const faqCategories: FaqCategory[] = [
  { id: "account", title: "Account & Login", items: [
    { id: "credentials", question: "How do I register and receive my Code-e-Manipal 2.0 credentials?", answer: "Official registration takes place exclusively through Unstop until the registration deadline of 11 October 2026, 11:59 PM IST. All teams participate in the Round 1 Online Assessment on Unstop. Shortlisted finalists who qualify for Round 2 receive provisioned portal credentials directly from the LearnIT organizing committee to manage their squad workspace, review problem statements, and submit their project." },
    { id: "shared-login", question: "Can multiple team members use the same login account?", answer: "The portal is designed primarily for the Team Leader. The Team Leader manages the roster, edits submission details, and executes final project submission. Other members may review project details through the leader's account or collaborate directly on the shared code repository." },
    { id: "password", question: "I forgot my password or cannot log in. How do I reset it?", answer: "Because accounts are strictly provisioned and access-controlled, automated self-service password reset is disabled. Please contact the Help Desk at the venue (Manipal University Jaipur) or reach out to the LearnIT technical coordinators for an audited password reset." },
  ] },
  { id: "team", title: "Team & Roster", items: [
    { id: "team-size", question: "What is the allowed team size for Code-e-Manipal 2.0?", answer: "Teams can comprise between 1 and 6 members. Both solo builders and squads of up to 6 members are eligible. Inter-college and interdisciplinary collaborations are welcome. Every team has exactly one designated Team Leader.", link: { label: "View Team Workspace", href: `${portal}/team` } },
    { id: "roster", question: "How do I invite or add team members to my portal roster?", answer: "Navigate to your Team Workspace (/team). Your team invite code is displayed at the top. Share this code with your teammates so they can join your roster (up to 6 members) before the team freeze deadline.", link: { label: "Go to Team Workspace", href: `${portal}/team` } },
    { id: "fees", question: "What are the registration fees for Code-e-Manipal 2.0?", answer: "Registration fees are structured per phase: Round 1 (Online Assessment on Unstop) is ₹59/person for MUJ students and ₹89/person for non-MUJ students. If shortlisted for the Round 2 Offline Finale at MUJ, fees are ₹219/person for MUJ students and ₹250/person for non-MUJ students. All fees are strictly non-refundable." },
  ] },
  { id: "problems", title: "Problem Statements", items: [
    { id: "release", question: "When will the official Problem Statements be released?", answer: "The official challenge briefs are unlocked simultaneously for all teams at the start of the Hacking Phase (Day 1, 10:30 AM). You will be able to review challenge requirements, evaluation expectations, and technical guidelines on the Problem Statements page.", link: { label: "Check Challenge Drop Status", href: `${portal}/problem-statements` } },
    { id: "open-innovation", question: "Can our team work on an Open Innovation idea?", answer: "Yes! In addition to specific curated tracks (AI/ML, HealthTech, FinTech/EdTech, Cybersecurity, Generative AI & LLMs, Multi-Agent Systems, Gaming & Immersive Tech, Smart City and Infrastructure), Code-e-Manipal 2.0 includes an Open Innovation track allowing original problem definitions. Select 'Open Innovation' during project submission." },
  ] },
  { id: "submissions", title: "Submissions", items: [
    { id: "materials", question: "What materials are required for final submission?", answer: "A complete submission requires: (1) Project Title, (2) Official Track selection, (3) Public GitHub / Git repository URL, (4) Hosted live demonstration link or video pitch URL, and (5) Project summary detailing architecture, tech stack, and impact.", link: { label: "Review Submission Form", href: `${portal}/submit` } },
    { id: "draft", question: "What is the difference between 'Draft' and 'Finalized' submission?", answer: "You can save your work as a 'Draft' at any time while iterating. Once you click 'Finalize Submission', your project is locked for evaluation and assigned to the jury. Once locked, submissions cannot be edited without an administrative override." },
    { id: "reopen", question: "We made an accidental typo after finalizing. Can we reopen our submission?", answer: "If the submission window is still active, you may request the Admin Operations team to reopen your submission. An administrator must provide an audited justification to unlock a finalized submission." },
  ] },
  { id: "judging", title: "Judging & Rubric", items: [
    { id: "evaluation", question: "How are projects evaluated by the jury?", answer: "Judges evaluate project submissions based on core evaluation pillars: Technical Execution, Innovation & Originality, Real-World Feasibility, and Presentation & Demo during the in-person jury pitching and Q&A session.", link: { label: "Read Technical Guidelines", href: `${portal}/guidelines` } },
    { id: "github", question: "Will judges evaluate private GitHub repositories?", answer: "No. Ensure your GitHub repository is public or includes public read access before finalizing. Repositories that cannot be cloned or inspected during jury rounds will receive zero for Technical Execution." },
  ] },
  { id: "schedule", title: "Schedule & Venue", items: [
    { id: "venue", question: "Where is Code-e-Manipal 2.0 taking place?", answer: "Round 1 is conducted online on Unstop. The Round 2 on-campus 36-hour hackathon finale takes place at Manipal University Jaipur (MUJ), Dehmi Kalan, Jaipur, Rajasthan on 15–16 October 2026. Physical presence of all team members is mandatory.", link: { label: "View 36-Hour Timeline", href: `${portal}/timeline` } },
    { id: "qualifier", question: "What is the format of the Round 1 Online Qualifier?", answer: "Round 1 is a 10-question online MCQ test on Unstop with a 10-minute duration and 10 marks maximum (no negative marking). Topics include Programming Fundamentals, Logical Reasoning, Computer Science Fundamentals, and Problem Solving / Output Prediction.", link: { label: "See Detailed Schedule", href: `${portal}/timeline` } },
    { id: "facilities", question: "What facilities are provided to participants on campus?", answer: "MUJ provides continuous electricity and power sockets at workstations, high-speed Wi-Fi, classrooms and work desks, Day 1 Lunch & Dinner for all participants, Day 2 Breakfast for finalists, basic overnight sleeping arrangements (mattresses), 24/7 campus security, and emergency medical assistance." },
  ] },
];

export const faqCount = faqCategories.reduce((total, category) => total + category.items.length, 0);
