import { prizeTiers } from "@/lib/public-site-data";

export function PrizePodium() {
  return (
    <ol className="prize-podium" aria-label="Award tiers">
      {prizeTiers.map((tier, index) => (
        <li className={`prize-podium__tier prize-podium__tier--${index + 1}`} key={tier.number}>
          <span className="prize-podium__rank">{tier.number}</span>
          <div>
            <p>{tier.eyebrow}</p>
            <h3>{tier.title}</h3>
            <span>{tier.status}</span>
          </div>
          <i aria-hidden="true" />
        </li>
      ))}
    </ol>
  );
}
