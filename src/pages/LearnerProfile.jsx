import { Link, useParams } from 'react-router-dom';
import { learners } from '../data/learners.js';

export default function LearnerProfile() {
  const { rollNo } = useParams();
  const learner = learners.find((item) => item.rollNo === rollNo);

  if (!learner) {
    return (
      <section className="empty-panel">
        <h1>Record unavailable</h1>
        <p>No learner record matches this roll number.</p>
        <Link className="primary-action" to="/learners">
          Back to learners
        </Link>
      </section>
    );
  }

  return (
    <section className="profile-grid">
      <article className="profile-summary">
        <span className="roll-number">{learner.rollNo}</span>
        <h1>{learner.fullName}</h1>
        <p>{learner.program}</p>
        <span className="status-badge">{learner.status}</span>
      </article>

      <article className="profile-card">
        <h2>Academic details</h2>
        <dl className="detail-list">
          <div>
            <dt>Semester</dt>
            <dd>{learner.semester}</dd>
          </div>
          <div>
            <dt>Mentor</dt>
            <dd>{learner.mentor}</dd>
          </div>
          <div>
            <dt>Attendance</dt>
            <dd>{learner.attendance}%</dd>
          </div>
          <div>
            <dt>Score</dt>
            <dd>{learner.score}</dd>
          </div>
        </dl>
      </article>

      <article className="profile-card">
        <h2>Contact</h2>
        <p>{learner.email}</p>
        <p>{learner.city}</p>
        <a className="text-button" href={`mailto:${learner.email}`}>
          Send email
        </a>
      </article>

      <article className="profile-card wide-card">
        <h2>Focus and portfolio</h2>
        <p>{learner.focusArea}</p>
        <div className="tag-list">
          {learner.portfolio.map((item) => (
            <span key={item}>{item}</span>
          ))}
        </div>
      </article>
    </section>
  );
}
