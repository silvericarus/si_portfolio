import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ProjectsPage from "./pages/Projects.jsx";
import PortfolioLanding from "./components/PortfolioLanding.jsx";
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PortfolioLanding />} />
        <Route path="/proyectos" element={<ProjectsPage />} />
      </Routes>
    </BrowserRouter>
  );
}
