import { coreTeams } from "@/lib/public-site-data";
import { MotionCard } from "./motion-card";
import { Reveal } from "./reveal";

function DirectoryCard({ title, detail, number, profile = false }: { title: string; detail: string; number: string; profile?: boolean }) {
  return <MotionCard className={`team-directory-card${profile ? " team-directory-card--profile" : ""}`}><div className="team-directory-card__portrait" aria-hidden="true"><span>{number}</span><i /></div><div><p>{title}</p><h3>{profile ? "Individual portrait reserved" : "Department directory"}</h3><small>{detail}</small></div></MotionCard>;
}

function StudentConvenorSection() {
  return (
    <section className="team-showcase__section" aria-labelledby="student-convenor-heading">
      <Reveal><h2 className="team-showcase__heading" id="student-convenor-heading">Student Convenor 2026–2027</h2></Reveal>
      <div className="team-directory-grid"><Reveal delay={40}><DirectoryCard detail="Name, role, and individual portrait will be inserted after approval." number="01" profile title="Student convenor" /></Reveal><Reveal delay={110}><DirectoryCard detail="A second individual leadership portrait can be added without changing the layout." number="02" profile title="Leadership" /></Reveal></div>
    </section>
  );
}

function ExecutivePanel() {
  return (
    <section className="team-showcase__section" aria-labelledby="executive-panel-heading">
      <Reveal><h2 className="team-showcase__heading" id="executive-panel-heading">Executive Panel</h2></Reveal>
      <div className="team-directory-grid team-directory-grid--three"><Reveal delay={40}><DirectoryCard detail="Individual profile awaiting organizer approval." number="03" profile title="Executive profile" /></Reveal><Reveal delay={110}><DirectoryCard detail="Individual profile awaiting organizer approval." number="04" profile title="Executive profile" /></Reveal><Reveal delay={180}><DirectoryCard detail="Individual profile awaiting organizer approval." number="05" profile title="Executive profile" /></Reveal></div>
    </section>
  );
}

function CoreTeamGroup({ team }: { team: typeof coreTeams[number] }) {
  const headingId = `team-${team.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;

  return (
    <section className="core-team-group" aria-labelledby={headingId}>
      <Reveal><h3 id={headingId}>{team}</h3></Reveal>
      <Reveal delay={70}><DirectoryCard detail="Add approved members and portraits here." number="+" title={team} /></Reveal>
    </section>
  );
}

function CoreTeamsSection() {
  return (
    <section className="team-showcase__section" aria-labelledby="core-teams-heading">
      <Reveal><h2 className="team-showcase__heading" id="core-teams-heading">Core Teams</h2></Reveal>
      <div className="core-teams-list">
        {coreTeams.map((team) => <CoreTeamGroup team={team} key={team} />)}
      </div>
    </section>
  );
}

export function TeamShowcase() {
  return <div className="team-showcase"><StudentConvenorSection /><ExecutivePanel /><CoreTeamsSection /></div>;
}
