import { timelineStages } from "@/lib/public-site-data";

export function OfficialTimeline() {
  return <div className="official-timeline">{timelineStages.map((stage) => <section className="official-timeline__stage" key={stage.number}><header><span>Stage {stage.number}</span><h2>{stage.title}</h2><p>{stage.subtitle}</p>{stage.date && <b>{stage.date}</b>}</header><ol>{stage.items.map((item) => <li className={`official-timeline__item is-${item.state.toLowerCase()}`} key={`${item.time}-${item.title}`}><time>{item.time}</time><i aria-hidden="true" /><div><small>{item.state} · {item.place}</small><h3>{item.title}</h3><p>{item.description}</p></div></li>)}</ol></section>)}</div>;
}
