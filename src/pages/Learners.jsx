import { useMemo, useState } from 'react';
import LearnerRow from '../components/LearnerRow.jsx';
import { learners, programs } from '../data/learners.js';

export default function Learners() {
  const [search, setSearch] = useState('');
  const [program, setProgram] = useState('All');

  const visibleLearners = useMemo(() => {
    const normalizedSearch = search.trim().toLowerCase();

    return learners.filter((learner) => {
      const searchMatch =
        learner.fullName.toLowerCase().includes(normalizedSearch) ||
        learner.rollNo.toLowerCase().includes(normalizedSearch) ||
        learner.city.toLowerCase().includes(normalizedSearch);
      const programMatch = program === 'All' || learner.program === program;

      return searchMatch && programMatch;
    });
  }, [program, search]);

  return (
    <section>
      <div className="section-heading">
        <div>
          <p className="label">Learner directory</p>
          <h1>Student records</h1>
        </div>
        <span className="result-count">{visibleLearners.length} records</span>
      </div>

      <div className="filter-bar">
        <label>
          <span>Search</span>
          <input
            type="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Name, roll no, or city"
          />
        </label>
        <label>
          <span>Program</span>
          <select
            value={program}
            onChange={(event) => setProgram(event.target.value)}
          >
            <option>All</option>
            {programs.map((programName) => (
              <option key={programName}>{programName}</option>
            ))}
          </select>
        </label>
      </div>

      <div className="record-list">
        {visibleLearners.map((learner) => (
          <LearnerRow key={learner.rollNo} learner={learner} />
        ))}
      </div>

      {visibleLearners.length === 0 && (
        <div className="empty-panel">
          <h2>No records found</h2>
          <p>Try another search term or choose all programs.</p>
        </div>
      )}
    </section>
  );
}
