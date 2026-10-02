import React from 'react';
import PageHero from '../components/PageHero.jsx';
import SectionTitle from '../components/SectionTitle.jsx';
import ServiceCard from '../components/ServiceCard.jsx';

const services = [
  { icon:'bi-house-heart-fill', title:'Pet Boarding', text:'Comfortable short- and long-stay boarding with routines, supervision and daily care.', link:'/services/boarding' },
  { icon:'bi-scissors', title:'Grooming', text:'Bathing, brushing, drying, trimming and hygiene care tailored to your pet.', link:'/services/grooming' },
  { icon:'bi-heart-pulse-fill', title:'Veterinary Care', text:'Dummy content for wellness support and veterinary coordination.', link:'/services/veterinary' },
  { icon:'bi-award-fill', title:'Training', text:'Positive training plans for manners, confidence and everyday behaviour.', link:'/services/training' },
  { icon:'bi-droplet-half', title:'Bath & Hygiene', text:'Gentle bathing and hygiene routines for a fresh, comfortable pet.', link:'/services/grooming' },
  { icon:'bi-balloon-heart-fill', title:'Day Care', text:'Safe daytime supervision, play and rest for pets who need company.', link:'/services/boarding' },
];

export default function Services(){return <><PageHero title="Our Services" text="Thoughtful pet care services designed around comfort, safety and happy routines." icon="bi-paw-fill"/><section className="section-padding"><div className="container"><SectionTitle eyebrow="Pet Care" title="Simple, caring services for every stage of pet life." text="Replace these dummy services with your real packages, timings and pricing."/><div className="row g-4 mt-2">{services.map(s=><div className="col-md-6 col-lg-4" key={s.title}><ServiceCard {...s}/></div>)}</div></div></section></>}
