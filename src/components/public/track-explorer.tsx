"use client";

import { useId, useState, type CSSProperties } from "react";

import { trackPreview } from "@/lib/public-site-data";

export function TrackExplorer() {
  const [activeIndex, setActiveIndex] = useState(0);
  const detailId = useId();
  const activeTrack = trackPreview[activeIndex];

  return (
    <div className="track-explorer">
      <div className="track-explorer__stage">
        <div className="track-explorer__rings" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>

        <div className="track-explorer__core" aria-hidden="true">
          <span>Code-e-Manipal</span>
          <strong>2.0</strong>
          <i />
        </div>

        <div className="track-explorer__orbit" aria-label="Challenge track selector">
          {trackPreview.map((track, index) => {
            const isActive = activeIndex === index;

            return (
              <button
                aria-controls={detailId}
                aria-pressed={isActive}
                className={`track-orbit-node track-orbit-node--${index}${isActive ? " is-active" : ""}`}
                key={track.number}
                onClick={() => setActiveIndex(index)}
                style={{ "--track-index": index } as CSSProperties}
                type="button"
              >
                <span>{track.number}</span>
                <strong>{track.title}</strong>
              </button>
            );
          })}
        </div>

        <div className="track-explorer__axis" aria-hidden="true"><i /><i /><i /></div>
      </div>

      <div className="track-explorer__details" id={detailId} aria-live="polite">
        <p className="eyebrow"><span aria-hidden="true" />Selected signal {activeTrack.number}</p>
        <h3>{activeTrack.title}</h3>
        <p>{activeTrack.description}</p>
        <dl>
          <div>
            <dt>Release</dt>
            <dd>{activeTrack.status}</dd>
          </div>
          <div>
            <dt>Brief</dt>
            <dd>{activeTrack.status}</dd>
          </div>
        </dl>
      </div>

      <div className="track-explorer__list" aria-label="Challenge tracks as a list">
        {trackPreview.map((track, index) => {
          const isActive = activeIndex === index;

          return (
            <button
              aria-controls={detailId}
              aria-pressed={isActive}
              className={`track-list-card${isActive ? " is-active" : ""}`}
              key={track.number}
              onClick={() => setActiveIndex(index)}
              type="button"
            >
              <span>{track.number}</span>
              <strong>{track.title}</strong>
              <small>{track.status}</small>
            </button>
          );
        })}
      </div>
    </div>
  );
}
