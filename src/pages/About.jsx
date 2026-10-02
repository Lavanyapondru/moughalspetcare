import React from 'react';
import PageHero from '../components/PageHero.jsx';
import SectionTitle from '../components/SectionTitle.jsx';

const values = [
  ['bi-heart-fill', 'Compassion', 'Every pet is treated with patience, kindness and respect.'],
  ['bi-shield-check-fill', 'Safety', 'Clear routines and a safe environment come first.'],
  ['bi-stars', 'Quality', 'We aim for clean facilities and thoughtful service.'],
  ['bi-people-fill', 'Trust', 'We keep pet parents informed and supported.'],
];

export default function About() {
  return <>
    <PageHero title="About Us" text="Get to know the people, values and care philosophy behind Moughals Pet Kennel." icon="bi-heart-fill" />
    <section className="section-padding"><div className="container"><div className="row align-items-center g-5"><div className="col-lg-5"><div className="image-frame">
  <img
    src="/team.png"
    alt="Moughals Pet Kennel team caring for pets"
    className="team-image"
  />
</div></div>
      <div className="col-lg-7"><SectionTitle center={false} eyebrow="Our Story" title="A warm, trusted space for pets and their people." text="This is placeholder copy. Add your real business story, founder details, location, years of experience and what inspired Moughals Pet Kennel." /><p className="body-copy">Use this section to tell visitors how the business started, what makes your approach different and what you want every pet parent to experience when they choose you.</p><p className="body-copy">You can also add certifications, staff details, facility information, pet-safety practices and your service philosophy here.</p></div></div></div></section>
    <section className="section-padding soft-bg"><div className="container"><SectionTitle eyebrow="Our Values" title="Care principles we believe in." /><div className="row g-4 mt-2">{values.map(([icon,title,text])=><div className="col-sm-6 col-lg-3" key={title}><div className="value-card"><div className="service-icon"><i className={`bi ${icon}`} /></div><h3>{title}</h3><p>{text}</p></div></div>)}</div></div></section>
    <section className="section-padding"><div className="container"><div className="quote-card"><i className="bi bi-quote quote-icon" /><blockquote>“Replace this with the founder's or owner's message about pets, care and the Moughals philosophy.”</blockquote><span>— Founder / Owner</span></div></div></section>
  </>;
}
