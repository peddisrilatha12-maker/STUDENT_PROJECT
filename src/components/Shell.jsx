import { NavLink, Outlet } from 'react-router-dom';

const navigation = [
  { to: '/', label: 'Overview' },
  { to: '/learners', label: 'Learners' },
  { to: '/about', label: 'About' },
];

export default function Shell() {
  return (
    <div className="app-layout">
      <aside className="sidebar">
        <NavLink to="/" className="logo" aria-label="Campus Records home">
          <span>CR</span>
          <strong>Campus Records</strong>
        </NavLink>

        <nav className="side-nav" aria-label="Main navigation">
          {navigation.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                isActive ? 'side-link active-link' : 'side-link'
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </aside>

      <main className="content-area">
        <Outlet />
      </main>
    </div>
  );
}
