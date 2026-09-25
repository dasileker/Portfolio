import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found">
      <div className="not-found-signal" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <p className="eyebrow">Status · 404</p>
      <h1>This route didn’t pass validation.</h1>
      <p>The page you’re looking for doesn’t exist.</p>
      <Link className="button button-primary" href="/">
        Return home
      </Link>
    </main>
  );
}
