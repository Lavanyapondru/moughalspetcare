import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Services from "./pages/Services.jsx";
import Grooming from "./pages/Grooming.jsx";
import Boarding from "./pages/Boarding.jsx";
import Veterinary from "./pages/Veterinary.jsx";
import Training from "./pages/Training.jsx";
import Gallery from "./pages/Gallery.jsx";
import Contact from "./pages/Contact.jsx";
import FAQ from "./pages/FAQ.jsx";
import NotFound from "./pages/NotFound.jsx";


/* --------------------------------
   Scroll To Top Component
--------------------------------- */

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return null;
}


/* --------------------------------
   Main App
--------------------------------- */

export default function App() {
  return (
    <div className="app-shell">

      {/* Scroll page to top whenever route changes */}
      <ScrollToTop />

      {/* Navbar */}
      <Navbar />

      {/* Pages */}
      <main>
        <Routes>

          {/* Home */}
          <Route path="/" element={<Home />} />

          {/* About */}
          <Route path="/about" element={<About />} />

          {/* Services */}
          <Route path="/services" element={<Services />} />

          {/* Service Pages */}
          <Route
            path="/services/grooming"
            element={<Grooming />}
          />

          <Route
            path="/services/boarding"
            element={<Boarding />}
          />

          <Route
            path="/services/veterinary"
            element={<Veterinary />}
          />

          <Route
            path="/services/training"
            element={<Training />}
          />

          {/* Gallery */}
          <Route
            path="/gallery"
            element={<Gallery />}
          />

          {/* FAQ */}
          <Route
            path="/faq"
            element={<FAQ />}
          />

          {/* Contact */}
          <Route
            path="/contact"
            element={<Contact />}
          />

          {/* 404 */}
          <Route
            path="*"
            element={<NotFound />}
          />

        </Routes>
      </main>

      {/* Footer */}
      <Footer />

    </div>
  );
}