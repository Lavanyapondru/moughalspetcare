import React, { useState } from 'react';
import PageHero from '../components/PageHero.jsx';

const faqs=[
['Do I need to book boarding in advance?','Dummy answer: yes, advance booking is recommended so the team can prepare the right space and care routine for your pet.'],
['What should I bring for my pet?','Dummy answer: replace this with your actual checklist for food, medication, vaccination records, bedding and other essentials.'],
['How long does grooming take?','Dummy answer: timing depends on coat type, size, service and your pet’s comfort.'],
['Do you provide veterinary support?','Dummy answer: explain your in-house or partner veterinary arrangements here.'],
['Can I visit before booking?','Dummy answer: add your actual visit policy, appointment timings and contact process here.'],
['How do I make a booking?','Dummy answer: explain whether customers can call, WhatsApp, use your enquiry form or book online.']
];
export default function FAQ(){const[open,setOpen]=useState(0);return <><PageHero title="Frequently Asked Questions" text="Helpful answers for pet parents. Replace these placeholders with your actual policies." icon="bi-question-circle-fill"/><section className="section-padding"><div className="container faq-container">{faqs.map(([q,a],i)=><div className={`faq-item ${open===i?'open':''}`} key={q}><button onClick={()=>setOpen(open===i?-1:i)}><span>{q}</span><i className={`bi ${open===i?'bi-dash-lg':'bi-plus-lg'}`}/></button><div className="faq-answer"><p>{a}</p></div></div>)}</div></section></>}
