import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProjectsPage from "./pages/Projects.jsx";
import PortfolioLanding from "./components/PortfolioLanding.jsx";
import AboutPage from "./pages/AboutMe.jsx";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PortfolioLanding />} />
        <Route path="/proyectos" element={<ProjectsPage />} />
        <Route path="/sobre-mi" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  );
}
