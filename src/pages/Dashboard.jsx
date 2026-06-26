import { Link } from 'react-router-dom';
import { learners } from '../data/learners.js';

export default function Dashboard() {
  const averageScore = Math.round(
    learners.reduce((total, learner) => total + learner.score, 0) /
      learners.length,
  );
  const reviewCount = learners.filter(
    (learner) => learner.status === 'Needs Review',
  ).length;

  return (
    <section className="dashboard-page">
      <div className="hero-strip">
        <div>
          <p className="label">Student information portal</p>
          <h1>Track learner records with clarity.</h1>
          <p>
            View programs, academic scores, attendance, mentor assignments, and
            individual student progress in one compact React application.
          </p>
        </div>
        <Link className="primary-action" to="/learners">
          View learners
        </Link>
      </div>

      <div className="metric-board">
        <article>
          <span>Total learners</span>
          <strong>{learners.length}</strong>
        </article>
        <article>
          <span>Average score</span>
          <strong>{averageScore}</strong>
        </article>
        <article>
          <span>Review queue</span>
          <strong>{reviewCount}</strong>
        </article>
      </div>

      <div className="spotlight">
        <p className="label">Recent activity</p>
        {learners.map((learner) => (
          <div key={learner.rollNo} className="activity-line">
            <strong>{learner.fullName}</strong>
            <span>{learner.activity}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
