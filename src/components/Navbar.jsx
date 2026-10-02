import React, { useEffect, useRef, useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';

const serviceLinks = [
  { label: 'Boarding', path: '/services/boarding', icon: 'bi-house-heart-fill' },
  { label: 'Grooming', path: '/services/grooming', icon: 'bi-scissors' },
  { label: 'Veterinary Care', path: '/services/veterinary', icon: 'bi-heart-pulse-fill' },
  { label: 'Training', path: '/services/training', icon: 'bi-heart-fill' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const menuRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    setOpen(false);
    setServicesOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const onClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) setServicesOpen(false);
    };
    document.addEventListener('mousedown', onClick);
    return () => document.removeEventListener('mousedown', onClick);
  }, []);

  return (
    <header className="site-header">
      <nav className="navbar-shell" ref={menuRef}>
        <Link to="/" className="brand" aria-label="Moughals Pet Kennel home">
          <img src="/logo.jpeg" alt="Moughals Pet Kennel logo" />
        </Link>

        <button className={`mobile-toggle ${open ? 'is-open' : ''}`} onClick={() => setOpen(!open)} aria-label="Toggle navigation" aria-expanded={open}>
          <span /><span /><span />
        </button>

        <div className={`nav-menu ${open ? 'show' : ''}`}>
          <NavLink to="/" className="nav-link"><i className="bi bi-house-door-fill" />Home</NavLink>
          <NavLink to="/about" className="nav-link"><i className="bi bi-person-fill" />About</NavLink>
          <div className="nav-dropdown">
            <button className={`nav-link dropdown-trigger ${servicesOpen ? 'active' : ''}`} onClick={() => setServicesOpen(!servicesOpen)} aria-expanded={servicesOpen}>
              <i className="bi bi-paw-fill" />Services <i className={`bi bi-chevron-down dropdown-chevron ${servicesOpen ? 'rotate' : ''}`} />
            </button>
            <div className={`services-dropdown ${servicesOpen ? 'open' : ''}`}>
              {serviceLinks.map((item) => (
                <Link key={item.path} to={item.path} className="service-dropdown-item">
                  <span className="dropdown-icon"><i className={`bi ${item.icon}`} /></span>
                  <span>{item.label}</span>
                  <i className="bi bi-chevron-right ms-auto" />
                </Link>
              ))}
            </div>
          </div>
          <NavLink to="/gallery" className="nav-link"><i className="bi bi-images" />Gallery</NavLink>
          <NavLink to="/faq" className="nav-link"><i className="bi bi-question-circle-fill" />FAQ</NavLink>
          <NavLink to="/contact" className="nav-link contact-link"><i className="bi bi-envelope-fill" />Contact</NavLink>
        </div>

        <div className="nav-paw-decoration"><i className="bi bi-paw-fill" /></div>
      </nav>
    </header>
  );
}
