import { officialPrizes } from "@/lib/public-site-data";

export function OfficialPrizes() {
  return <div className="official-prizes"><p className="official-prizes__total">₹3,50,000+ <span>in cash prizes, in-kind rewards and opportunities</span></p><div className="official-prizes__main">{officialPrizes.slice(0, 3).map((prize) => <article className={`official-prizes__item official-prizes__item--${prize.kind}`} key={prize.title}><p>{prize.title}</p><strong>{prize.amount}</strong><span>{prize.detail}</span></article>)}</div><div className="official-prizes__support">{officialPrizes.slice(3).map((prize) => <article key={prize.title}><p>{prize.title}</p><strong>{prize.amount}</strong><span>{prize.detail}</span></article>)}</div></div>;
}
