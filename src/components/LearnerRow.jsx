import { Link } from 'react-router-dom';

export default function LearnerRow({ learner }) {
  return (
    <article className="learner-row">
      <div>
        <span className="roll-number">{learner.rollNo}</span>
        <h3>{learner.fullName}</h3>
        <p>{learner.program}</p>
      </div>
      <div className="mini-stat">
        <span>Attendance</span>
        <strong>{learner.attendance}%</strong>
      </div>
      <div className="mini-stat">
        <span>Score</span>
        <strong>{learner.score}</strong>
      </div>
      <Link to={`/learners/${learner.rollNo}`} className="text-button">
        Open record
      </Link>
    </article>
  );
}
