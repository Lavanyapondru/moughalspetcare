import React from 'react';

export default function SectionTitle({ eyebrow, title, text, center = true }) {
  return (
    <div className={`section-title ${center ? 'text-center mx-auto' : ''}`}>
      {eyebrow && <span className="eyebrow"><i className="bi bi-paw-fill me-2" />{eyebrow}</span>}
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  );
}
