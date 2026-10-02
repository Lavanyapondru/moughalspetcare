import React from 'react';
import { Link } from 'react-router-dom';

export default function PageHero({ title, text, icon = 'bi-heart-fill' }) {
  return (
    <section className="page-hero">
      <div className="container position-relative">
        <div className="page-hero-content">
          <span className="eyebrow"><i className={`bi ${icon} me-2`} />Moughals Pet Kennel</span>
          <h1>{title}</h1>
          <p>{text}</p>
          <div className="breadcrumb-pills">
            <Link to="/">Home</Link><span>/</span><span>{title}</span>
          </div>
        </div>
        <i className="bi bi-paw-fill page-paw paw-one" />
        <i className="bi bi-paw-fill page-paw paw-two" />
      </div>
    </section>
  );
}
