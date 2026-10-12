import React from 'react';
import { Arrow } from './Icons';
import { sitePath } from '../data/content';

export function SectionHeading({ eyebrow, title, italic, copy, dark = false }) {
  return (
    <div className={`section-heading ${dark ? 'dark-heading' : ''} reveal`}>
      <p className={`eyebrow ${dark ? 'light' : ''}`}>{eyebrow}</p>
      <div className="heading-row"><h2>{title} {italic && <em>{italic}</em>}</h2>{copy && <p>{copy}</p>}</div>
    </div>
  );
}

export function TextLink({ href, children, navigate, light = false }) {
  const click = (e) => { if (navigate && href.startsWith('/')) { e.preventDefault(); navigate(href); } };
  return <a className={`text-link ${light ? 'light' : ''}`} href={href.startsWith('/') ? sitePath(href) : href} onClick={click}>{children}<Arrow diagonal /></a>;
}

export function ContactStrip({ navigate }) {
  return (
    <section className="contact-strip">
      <div className="reveal"><p className="eyebrow light">Implementar · reparar · mantener</p><h2>Revisemos qué necesita<br /><em>tu espacio.</em></h2></div>
      <TextLink href="/contacto" navigate={navigate} light>Solicitar una evaluación</TextLink>
    </section>
  );
}
