import './index.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from './layout/MainLayout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import ProjectsDetails from './pages/ProjectsDetails';
function App() {
  return (
    <>
      <BrowserRouter >
        <Routes>
        <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects/>} />
            <Route path="/projectDetails" element={<ProjectsDetails/>} />
            <Route path="/contact" element={<Contact/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
