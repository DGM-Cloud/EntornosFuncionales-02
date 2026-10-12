import React, { useState } from 'react';
import { PageIntro } from '../components/Layout';
import { assetPath, services } from '../data/content';
import { Plus } from '../components/Icons';
import { ContactStrip, SectionHeading } from '../components/Shared';

export default function Solutions({ navigate }) {
  const [open, setOpen] = useState(0);
  return (
    <>
      <PageIntro variant="solutions" index="02" eyebrow="Soluciones y servicios" title="Obra, instalaciones" italic="y sistemas." copy="Cuatro líneas de trabajo para implementar, reparar y mantener espacios residenciales, comerciales e industriales." image={assetPath('assets/project-07.jpg')} />
      <section className="solutions-list section-pad">
        <SectionHeading eyebrow="Mapa de capacidades" title="Elige el frente de trabajo" italic="que necesitas resolver." />
        <div className="solution-accordion">
          {services.map((service, index) => <article key={service.number} className={`solution-item ${open === index ? 'open' : ''}`}>
            <button onClick={() => setOpen(open === index ? -1 : index)} aria-expanded={open === index} aria-controls={`solution-${index}`}><span>{service.number}</span><h3>{service.title}</h3><span className="plus"><Plus /></span></button>
            <div id={`solution-${index}`} className="solution-body"><div className="solution-copy"><p>{service.short}</p><ul>{service.items.map(item => <li key={item}>{item}</li>)}</ul></div><img src={service.image} alt={`Referencia visual de ${service.title}`} loading="lazy" /></div>
          </article>)}
        </div>
      </section>
      <section className="specialist-banner"><img src={assetPath('assets/project-01.jpg')} alt="Detalle de tubería para sistema contra incendios" /><div className="reveal"><p className="eyebrow light">Protección contra incendios</p><h2>Detección, alarma, protección activa y pasiva.</h2><p>La línea especializada incluye sistemas contra incendios, además de climatización y refrigeración comercial e industrial.</p></div></section>
      <ContactStrip navigate={navigate} />
    </>
  );
}
