import React, { useState } from 'react';
import { PageIntro } from '../components/Layout';
import { assetPath, services } from '../data/content';
import { ContactStrip, SectionHeading } from '../components/Shared';

export default function Solutions({ navigate }) {
  const [active, setActive] = useState(0);
  const selected = services[active];
  return (
    <>
      <PageIntro variant="solutions" index="02" eyebrow="Soluciones y servicios" title="Obra, instalaciones" italic="y sistemas." copy="Cuatro líneas de trabajo para implementar, reparar y mantener espacios residenciales, comerciales e industriales." image={assetPath('assets/project-07.jpg')} />
      <section className="solutions-list section-pad">
        <SectionHeading eyebrow="Mapa de capacidades" title="Cuatro frentes, una respuesta" italic="integral." copy="Selecciona una especialidad para conocer su alcance y las soluciones que reúne." />
        <div className="solution-explorer">
          <div className="solution-tabs" role="tablist" aria-label="Líneas de soluciones">
            {services.map((service, index) => <button key={service.number} id={`solution-tab-${index}`} className={`solution-tab ${active === index ? 'active' : ''}`} type="button" role="tab" aria-selected={active === index} aria-controls="solution-panel" onClick={() => setActive(index)}><span>{service.number}</span><strong>{service.title}</strong><i aria-hidden="true">↗</i></button>)}
          </div>
          <article id="solution-panel" className="solution-feature" role="tabpanel" aria-live="polite" aria-labelledby={`solution-tab-${active}`}>
            <figure><img key={selected.image} src={selected.image} alt={`Referencia visual de ${selected.title}`} /><span>{selected.number}</span></figure>
            <div className="solution-feature-copy"><p className="solution-kicker">Frente de trabajo seleccionado</p><h3>{selected.title}</h3><p className="solution-summary">{selected.short}</p><ul>{selected.items.map(item => <li key={item}>{item}</li>)}</ul></div>
          </article>
        </div>
      </section>
      <section className="specialist-banner"><img src={assetPath('assets/project-01.jpg')} alt="Detalle de tubería para sistema contra incendios" /><div className="reveal"><p className="eyebrow light">Protección contra incendios</p><h2>Detección, alarma, protección activa y pasiva.</h2><p>La línea especializada incluye sistemas contra incendios, además de climatización y refrigeración comercial e industrial.</p></div></section>
      <ContactStrip navigate={navigate} />
    </>
  );
}
