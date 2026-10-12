import React from 'react';
import { PageIntro } from '../components/Layout';
import { ContactStrip, SectionHeading } from '../components/Shared';
import { assetPath } from '../data/content';

export default function About({ navigate }) {
  return (
    <>
      <PageIntro variant="about" index="03" eyebrow="Sobre Entornos Funcionales" title="Reconstrucción, acabados" italic="y soluciones técnicas." copy="Una empresa orientada a la mejora y acondicionamiento de entornos residenciales, comerciales e industriales." image={assetPath('assets/project-03.jpg')} />
      <section className="about-story section-pad">
        <SectionHeading eyebrow="Qué hacemos" title="Mejorar el espacio desde" italic="su uso real." />
        <div className="about-copy reveal"><p className="lead">Entornos Funcionales Reconstrucción & Acabados brinda servicios para la mejora y acondicionamiento de espacios, combinando especialidades de obra, instalaciones y sistemas.</p><p>El propósito es transformar y optimizar cada entorno para que sea funcional, cómodo, seguro y estéticamente armónico, con soluciones adaptadas a las necesidades de cada proyecto.</p></div>
        <div className="about-images"><div className="reveal"><img src={assetPath('assets/project-04.jpg')} alt="Estructura de madera durante su implementación" loading="lazy" /></div><div className="reveal"><img src={assetPath('assets/project-08.jpg')} alt="Coordinación de equipo durante una obra" loading="lazy" /></div></div>
      </section>
      <section className="mission-section">
        <article className="reveal"><span>01</span><p className="eyebrow light">Misión</p><h2>Crear espacios funcionales, seguros y estéticamente armoniosos.</h2><p>Ofrecer servicios de calidad en mantenimiento, reconstrucción y acabados.</p></article>
        <article className="reveal"><span>02</span><p className="eyebrow light">Visión</p><h2>Ser una empresa referente en reconstrucción y acabados.</h2><p>Con compromiso con la calidad y enfoque en la satisfacción del cliente.</p></article>
      </section>
      <section className="criteria-showcase">
        <div className="criteria-visual"><img src={assetPath('assets/project-05.jpg')} alt="Estructura de madera y cubierta durante su ejecución" loading="lazy" /><span>Forma + función</span></div>
        <div className="criteria-content"><p className="eyebrow light">Criterios del espacio</p><h2>Un buen resultado se construye <em>por capas.</em></h2><div className="criteria-list">{[['01','Uso','Responde a la actividad y a quienes habitan el espacio.'],['02','Seguridad','Integra instalaciones y sistemas para operar correctamente.'],['03','Confort','Mejora la experiencia cotidiana dentro del entorno.'],['04','Acabado','Resuelve lo técnico sin descuidar la presencia visual.']].map(([n,t,d])=><article key={n}><span>{n}</span><div><h3>{t}</h3><p>{d}</p></div></article>)}</div></div>
      </section>
      <ContactStrip navigate={navigate} />
    </>
  );
}
