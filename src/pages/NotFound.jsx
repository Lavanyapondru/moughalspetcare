import React from 'react';
import { Link } from 'react-router-dom';
export default function NotFound(){return <section className="not-found"><div><i className="bi bi-paw-fill"/><h1>404</h1><p>This page could not be found.</p><Link to="/" className="btn btn-gold">Back Home</Link></div></section>}
