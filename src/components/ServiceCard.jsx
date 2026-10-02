import React from 'react';
import { Link } from 'react-router-dom';

export default function ServiceCard({ icon, title, text, link }) {
  return (
    <article className="service-card h-100">
      <div className="service-icon"><i className={`bi ${icon}`} /></div>
      <h3>{title}</h3>
      <p>{text}</p>
      <Link to={link} className="text-link">Explore service <i className="bi bi-arrow-right" /></Link>
    </article>
  );
}
