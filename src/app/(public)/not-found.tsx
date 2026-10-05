import Link from "next/link";

export default function NotFound() {
  return (
    <section className="page-intro page-intro--not-found">
      <div className="page-shell page-intro__content">
        <p className="eyebrow"><span aria-hidden="true" />404</p>
        <h1>This route is not part of the public event site.</h1>
        <p>Return to the Code-e-Manipal public homepage.</p>
        <Link className="button button--primary" href="/">Home <span aria-hidden="true" className="button__arrow">↗</span></Link>
      </div>
    </section>
  );
}
