import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row g-4 py-5">
          <div className="col-lg-4">
            <Link to="/" className="footer-brand"><img src="/logo.jpeg" alt="Moughals Pet Kennel" /></Link>
            <p className="mt-3">A warm, caring and professional home away from home for your beloved pets. Replace this dummy content with your official business description.</p>
            <div className="socials">
              <a href="#" aria-label="Instagram"><i className="bi bi-instagram" /></a>
              <a href="#" aria-label="Facebook"><i className="bi bi-facebook" /></a>
              <a href="#" aria-label="WhatsApp"><i className="bi bi-whatsapp" /></a>
              <a href="#" aria-label="YouTube"><i className="bi bi-youtube" /></a>
            </div>
          </div>
          <div className="col-6 col-lg-2">
            <h4>Quick Links</h4>
            <Link to="/">Home</Link><Link to="/about">About</Link><Link to="/services">Services</Link><Link to="/gallery">Gallery</Link><Link to="/contact">Contact</Link>
          </div>
          <div className="col-6 col-lg-3">
            <h4>Our Services</h4>
            <Link to="/services/boarding">Pet Boarding</Link><Link to="/services/grooming">Grooming</Link><Link to="/services/veterinary">Veterinary Care</Link><Link to="/services/training">Pet Training</Link>
          </div>
          <div className="col-lg-3">
            <h4>Contact</h4>
            <p><i className="bi bi-geo-alt-fill" /> Your address, Hyderabad, Telangana, India</p>
            <p><i className="bi bi-telephone-fill" /> +91 XXXXX XXXXX</p>
            <p><i className="bi bi-envelope-fill" /> hello@moughals.example</p>
            <p><i className="bi bi-clock-fill" /> Mon - Sun: 9:00 AM - 8:00 PM</p>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Moughals Pet Kennel. All rights reserved.</span>
          <span>Designed with care for pets & pet parents.</span>
        </div>
      </div>
    </footer>
  );
}
