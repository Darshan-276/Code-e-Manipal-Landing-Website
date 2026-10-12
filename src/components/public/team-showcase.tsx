import { coreTeams } from "@/lib/public-site-data";
import { MotionCard } from "./motion-card";

function DirectoryCard({ title, detail, number }: { title: string; detail: string; number: string }) {
  return <MotionCard className="team-directory-card"><div className="team-directory-card__portrait" aria-hidden="true"><span>{number}</span><i /></div><div><p>{title}</p><h3>Profile image reserved</h3><small>{detail}</small></div></MotionCard>;
}

function StudentConvenorSection() {
  return (
    <section className="team-showcase__section" aria-labelledby="student-convenor-heading">
      <h2 className="team-showcase__heading" id="student-convenor-heading">Student Convenor 2026–2027</h2>
      <div className="team-directory-grid"><DirectoryCard detail="Name and portrait will be inserted after approval." number="01" title="Student convenor" /><DirectoryCard detail="A second leadership profile can be added without changing the layout." number="02" title="Leadership" /></div>
    </section>
  );
}

function ExecutivePanel() {
  return (
    <section className="team-showcase__section" aria-labelledby="executive-panel-heading">
      <h2 className="team-showcase__heading" id="executive-panel-heading">Executive Panel</h2>
      <div className="team-directory-grid team-directory-grid--three"><DirectoryCard detail="Profile awaiting organizer approval." number="01" title="Executive profile" /><DirectoryCard detail="Profile awaiting organizer approval." number="02" title="Executive profile" /><DirectoryCard detail="Profile awaiting organizer approval." number="03" title="Executive profile" /></div>
    </section>
  );
}

function CoreTeamGroup({ team }: { team: typeof coreTeams[number] }) {
  const headingId = `team-${team.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;

  return (
    <section className="core-team-group" aria-labelledby={headingId}>
      <h3 id={headingId}>{team}</h3>
      <DirectoryCard detail="Add approved members and portraits here." number="+" title={team} />
    </section>
  );
}

function CoreTeamsSection() {
  return (
    <section className="team-showcase__section" aria-labelledby="core-teams-heading">
      <h2 className="team-showcase__heading" id="core-teams-heading">Core Teams</h2>
      <div className="core-teams-list">
        {coreTeams.map((team) => <CoreTeamGroup team={team} key={team} />)}
      </div>
    </section>
  );
}

export function TeamShowcase() {
  return <div className="team-showcase"><StudentConvenorSection /><ExecutivePanel /><CoreTeamsSection /></div>;
}
