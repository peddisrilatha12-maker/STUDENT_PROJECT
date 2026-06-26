export default function About() {
  return (
    <section className="about-page">
      <p className="label">About</p>
      <h1>A routing project for student record viewing.</h1>
      <p>
        Campus Records is designed to demonstrate a React app with multiple
        pages, navigation, a student list, dynamic profile routes, and a fallback
        page for unknown URLs.
      </p>

      <div className="explain-grid">
        <article>
          <strong>Routes</strong>
          <span>Overview, learners, learner profile, about, and not found.</span>
        </article>
        <article>
          <strong>Components</strong>
          <span>Reusable shell layout and student record rows.</span>
        </article>
        <article>
          <strong>Data</strong>
          <span>Student details are stored in a local JavaScript file.</span>
        </article>
      </div>
    </section>
  );
}
