import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle.jsx';
import ServiceCard from '../components/ServiceCard.jsx';

const services = [
  { icon: 'bi-house-heart-fill', title: 'Pet Boarding', text: 'A comfortable, supervised stay designed to keep pets relaxed, active and cared for.', link: '/services/boarding' },
  { icon: 'bi-scissors', title: 'Professional Grooming', text: 'Gentle bathing, brushing, trimming and hygiene care tailored to your pet.', link: '/services/grooming' },
  { icon: 'bi-heart-pulse-fill', title: 'Veterinary Care', text: 'Dummy service content for routine wellness support and coordinated veterinary care.', link: '/services/veterinary' },
  { icon: 'bi-award-fill', title: 'Pet Training', text: 'Positive, practical training sessions that encourage confidence and good habits.', link: '/services/training' },
];

const features = [
  ['bi-shield-check-fill', 'Safe & Supervised'],
  ['bi-heart-fill', 'Loving Attention'],
  ['bi-stars', 'Clean Facilities'],
  ['bi-clock-fill', 'Flexible Care'],
];

export default function Home() {
  return (
    <>
      <section className="hero-section">
        <div className="hero-glow hero-glow-one" /><div className="hero-glow hero-glow-two" />
        <div className="container position-relative z-2">
          <div className="row align-items-center min-vh-hero g-5">
            <div className="col-lg-6">
              <div className="hero-content">
                <span className="eyebrow hero-eyebrow"><i className="bi bi-paw-fill me-2" />Happy Pets • Caring Hearts</span>
                <h1>Healthy Pets.<br /><span>Happy Homes.</span></h1>
                <p className="hero-text">A caring home away from home for your furry family. From comfortable boarding to professional grooming, we make every pet feel safe, loved and special.</p>
                <div className="hero-actions">
                  <Link to="/services" className="btn btn-gold">Explore Our Services <i className="bi bi-arrow-right ms-2" /></Link>
                  <Link to="/contact" className="btn btn-outline-gold">Book a Visit</Link>
                </div>
                <div className="hero-trust">
                  {features.map(([icon, label]) => <span key={label}><i className={`bi ${icon}`} />{label}</span>)}
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="hero-pet-card">
                <div className="hero-image-placeholder">
                  <div className="pet-orbit orbit-one" /><div className="pet-orbit orbit-two" />
                  <div className="pet-placeholder-content"><i className="bi bi-heart-fill" /><strong>YOUR PET'S<br />HAPPY PLACE</strong><span>Replace this area with your hero pet photo.</span></div>
                </div>
                <div className="floating-badge badge-top"><i className="bi bi-patch-check-fill" /> Caring & Trusted</div>
                <div className="floating-badge badge-bottom"><i className="bi bi-star-fill" /> Tailored Pet Care</div>
              </div>
            </div>
          </div>
        </div>
        <div className="hero-wave" />
      </section>

      <section className="section-padding intro-section">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-5">
              <div className="image-frame">
<div className="image-placeholder soft-placeholder">
  <img
    src="/gallery/gallery-1.jpeg"
    alt="Pet care"
    className="w-100"
  />
</div>                <div className="experience-badge"><strong>10+</strong><span>Years of<br />loving care*</span></div>
              </div>
            </div>
            <div className="col-lg-7">
              <SectionTitle center={false} eyebrow="Welcome to Moughals" title="A loving place for every wag, purr and cuddle." text="Moughals Pet Kennel is a dummy business profile for now. Replace this copy with your actual story, location, experience and services. The layout is designed to communicate warmth, safety and professional pet care." />
              <div className="row g-3 mt-3">
                {features.map(([icon, label]) => <div className="col-sm-6" key={label}><div className="mini-feature"><i className={`bi ${icon}`} /><div><strong>{label}</strong><small>Thoughtful care in every detail.</small></div></div></div>)}
              </div>
              <Link to="/about" className="text-link large-link mt-4 d-inline-flex">Discover our story <i className="bi bi-arrow-right" /></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding services-section">
        <div className="container">
          <SectionTitle eyebrow="What We Do" title="Everything your pet needs, under one roof." text="Replace these dummy descriptions with your actual Moughals services and pricing information." />
          <div className="row g-4 mt-2">{services.map((service) => <div className="col-md-6 col-xl-3" key={service.title}><ServiceCard {...service} /></div>)}</div>
        </div>
      </section>

      <section className="section-padding why-section">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6 order-lg-2">
<div className="why-visual">
  <div className="why-circle">
    <img
      src="/public/logo.jpeg"
      alt="Moughals Pet Kennel Logo"
      className="why-logo"
    />
  </div>

  <i className="bi bi-paw-fill paw-float pf-1" />
  <i className="bi bi-paw-fill paw-float pf-2" />
  <i className="bi bi-paw-fill paw-float pf-3" />
</div>            </div>
            <div className="col-lg-6 order-lg-1">
              <SectionTitle center={false} eyebrow="Why Moughals" title="Because your pet deserves more than just a place to stay." text="Build trust with your customers by explaining your safety standards, cleanliness, staff experience, routines and personal attention here." />
              <ul className="check-list">
                <li><i className="bi bi-check-circle-fill" /><span><strong>Comfort-first environment</strong><small>Calm spaces and routines designed around pet wellbeing.</small></span></li>
                <li><i className="bi bi-check-circle-fill" /><span><strong>Individual attention</strong><small>Dummy copy for one-on-one care, feeding and activity routines.</small></span></li>
                <li><i className="bi bi-check-circle-fill" /><span><strong>Transparent communication</strong><small>Share updates, booking information and care instructions clearly.</small></span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container"><div className="cta-card"><div><span className="eyebrow light-eyebrow"><i className="bi bi-paw-fill me-2" />Let's make tails wag</span><h2>Ready to give your pet a little extra love?</h2><p>Use this section for your strongest booking message, phone number or WhatsApp CTA.</p></div><Link to="/contact" className="btn btn-light-gold">Get in Touch <i className="bi bi-arrow-right ms-2" /></Link></div></div>
      </section>
    </>
  );
}
