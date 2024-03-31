/** @format */

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import HomePage from "./pages/home/HomePage";
import Resource from "./pages/resource/Resource";
import AboutPage from "./pages/about/AboutPage";
import Footer from "./components/footer/Footer";
import FooterBottom from "./components/footer/FooterBottom";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-[#ffff] text-slate-300">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/resource" element={<Resource />} />
        </Routes>
        <Footer className="mt-auto" />
        <FooterBottom />
      </div>
    </Router>
  );
}

export default App;
