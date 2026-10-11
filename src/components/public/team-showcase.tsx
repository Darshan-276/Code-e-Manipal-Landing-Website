import { coreTeams } from "@/lib/public-site-data";

const coreTeamMemberSlots = Array.from({ length: 6 }, (_, index) => index + 1);

type TeamMemberPlaceholderProps = {
  context: string;
  number: number;
};

function TeamMemberPlaceholder({ context, number }: TeamMemberPlaceholderProps) {
  return (
    <article className="team-member-placeholder" aria-label={`${context} member ${number}`}>
      <div className="team-member-placeholder__portrait" aria-hidden="true">
        <span>+</span>
        <small>Photo to be announced</small>
      </div>
      <div className="team-member-placeholder__details">
        <h4>Name to be announced</h4>
        <p>Designation to be announced</p>
      </div>
    </article>
  );
}

function StudentConvenorSection() {
  return (
    <section className="team-showcase__section" aria-labelledby="student-convenor-heading">
      <h2 className="team-showcase__heading" id="student-convenor-heading">Student Convenor 2026–2027</h2>
      <div className="team-convenors">
        <TeamMemberPlaceholder context="Student convenor" number={1} />
        <TeamMemberPlaceholder context="Student convenor" number={2} />
      </div>
    </section>
  );
}

function ExecutivePanel() {
  return (
    <section className="team-showcase__section" aria-labelledby="executive-panel-heading">
      <h2 className="team-showcase__heading" id="executive-panel-heading">Executive Panel</h2>
      <div className="team-panel">
        {[1, 2, 3].map((number) => <TeamMemberPlaceholder context="Executive panel" number={number} key={number} />)}
      </div>
    </section>
  );
}

function CoreTeamGroup({ team }: { team: typeof coreTeams[number] }) {
  const headingId = `team-${team.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;

  return (
    <section className="core-team-group" aria-labelledby={headingId}>
      <h3 id={headingId}>{team}</h3>
      <div className="core-team-group__members">
        {coreTeamMemberSlots.map((number) => <TeamMemberPlaceholder context={team} number={number} key={number} />)}
      </div>
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
