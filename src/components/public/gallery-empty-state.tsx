export function GalleryEmptyState() {
  return (
    <section className="gallery-empty-state" aria-labelledby="gallery-status-heading">
      <svg aria-hidden="true" className="gallery-empty-state__art" viewBox="0 0 480 280">
        <path d="M38 244V128h46V76h56V38h200v38h56v52h46v116M20 244h440M112 244v-84c0-40 32-72 72-72h112c40 0 72 32 72 72v84M160 88h160M192 38v50m96-50v50M176 196h128M200 196v48m80-48v48" />
        <circle cx="240" cy="142" r="22" />
      </svg>
      <div>
        <p className="eyebrow"><span aria-hidden="true" />Archive in progress</p>
        <h2 id="gallery-status-heading">The gallery will open with approved event photography.</h2>
        <p>There are no cleared event photographs in this repository yet. This page will be updated with captions and credits when organizers provide them.</p>
      </div>
    </section>
  );
}
