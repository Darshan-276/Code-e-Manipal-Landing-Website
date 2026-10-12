import type { ReactNode } from "react";

import { coreTeams } from "@/lib/public-site-data";

function RosterNotice({ children }: { children: ReactNode }) {
  return <p className="team-roster-notice">{children}</p>;
}

function StudentConvenorSection() {
  return (
    <section className="team-showcase__section" aria-labelledby="student-convenor-heading">
      <h2 className="team-showcase__heading" id="student-convenor-heading">Student Convenor 2026–2027</h2>
      <RosterNotice>The student convenor roster is being verified by LearnIT before publication.</RosterNotice>
    </section>
  );
}

function ExecutivePanel() {
  return (
    <section className="team-showcase__section" aria-labelledby="executive-panel-heading">
      <h2 className="team-showcase__heading" id="executive-panel-heading">Executive Panel</h2>
      <RosterNotice>Executive-panel names and roles will be published once the organizers approve the directory.</RosterNotice>
    </section>
  );
}

function CoreTeamGroup({ team }: { team: typeof coreTeams[number] }) {
  const headingId = `team-${team.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;

  return (
    <section className="core-team-group" aria-labelledby={headingId}>
      <h3 id={headingId}>{team}</h3>
      <RosterNotice>Department roster forthcoming.</RosterNotice>
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
