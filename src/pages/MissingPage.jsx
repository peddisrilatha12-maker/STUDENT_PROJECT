import { Link } from 'react-router-dom';

export default function MissingPage() {
  return (
    <section className="empty-panel">
      <p className="label">404</p>
      <h1>Page not found</h1>
      <p>The requested page is not available in Campus Records.</p>
      <Link className="primary-action" to="/">
        Go to overview
      </Link>
    </section>
  );
}
