import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Shell from './components/Shell.jsx';
import About from './pages/About.jsx';
import Dashboard from './pages/Dashboard.jsx';
import LearnerProfile from './pages/LearnerProfile.jsx';
import Learners from './pages/Learners.jsx';
import MissingPage from './pages/MissingPage.jsx';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Shell />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/learners" element={<Learners />} />
          <Route path="/learners/:rollNo" element={<LearnerProfile />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<MissingPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
