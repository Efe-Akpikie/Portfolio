import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
// import Other from './pages/Other';
import Navbar from './utility/NavBar';
import Footer from './utility/Footer';
import StarryNightBackground from './utility/StarryNightBackground';

const App = () => (
  <BrowserRouter>
    {/* Layout wrapper with stacking context */}
    <div className="relative min-h-screen w-full overflow-hidden">
      
      {/* Background: Stars and shooting stars */}
      <div className="absolute inset-0 -z-10">
        <StarryNightBackground />
      </div>

      {/* Foreground content */}
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<Experience />} />
        {/* <Route path="/other" element={<Other />} /> */}
      </Routes>
      <Footer />
    </div>
  </BrowserRouter>
);

export default App;

