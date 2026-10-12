import React from 'react';
import { assetPath, projects, services, sitePath } from '../data/content';
import { Arrow } from '../components/Icons';
import { ContactStrip, SectionHeading, TextLink } from '../components/Shared';

const sampleCompanies = [
  { name: 'Bosch', logo: assetPath('assets/logos/bosch.svg') },
  { name: 'Siemens', logo: assetPath('assets/logos/siemens.svg') },
  { name: 'Samsung', logo: assetPath('assets/logos/samsung.svg') },
  { name: 'LG', logo: assetPath('assets/logos/lg.svg') },
  { name: '3M', logo: assetPath('assets/logos/3m.svg') },
  { name: 'ABB', logo: assetPath('assets/logos/abb.svg') },
];

function Hero({ navigate }) {
  return (
    <section className="hero">
      <div className="hero-media" />
      <div className="hero-grid" aria-hidden="true"><i /><i /><i /><i /></div>
      <div className="hero-content">
        <div className="hero-kicker reveal"><span>Obra &amp; acabados</span><span>Ingeniería &amp; mantenimiento</span></div>
        <h1 className="reveal" tabIndex="-1">Implementamos espacios.<br /><em>Resolvemos sistemas.</em></h1>
        <div className="hero-bottom reveal">
          <p>Implementación, remodelación, ingeniería y mantenimiento integral para entornos residenciales, comerciales e industriales.</p>
          <a href={sitePath('/proyectos')} onClick={(e) => { e.preventDefault(); navigate('/proyectos'); }}>Explorar proyectos <Arrow diagonal /></a>
        </div>
      </div>
      <div className="scroll-cue"><span>Descubrir</span><i /></div>
    </section>
  );
}

export default function Home({ navigate }) {
  return (
    <>
      <Hero navigate={navigate} />
      <section className="intro-statement section-pad">
        <p className="eyebrow reveal">De los acabados a los sistemas críticos</p>
        <div className="statement-grid reveal"><h2>Soluciones para obra, instalaciones y <em>mantenimiento.</em></h2><div><p>Entornos Funcionales reúne servicios de remodelación, ingeniería eléctrica, climatización, refrigeración y protección contra incendios para espacios residenciales, comerciales e industriales.</p><TextLink href="/nosotros" navigate={navigate}>Conocer la empresa</TextLink></div></div>
      </section>

      <section className="featured-projects section-pad navy-section">
        <SectionHeading dark eyebrow="Archivo visual · Selección" title="El trabajo se entiende mejor" italic="cuando se ve en proceso." copy="Registros publicados por Entornos Funcionales: ejecución, detalle técnico y resultados de distintas especialidades." />
        <div className="featured-grid">
          {projects.slice(0, 3).map((project, index) => <article key={project.id} className={`project-card reveal card-${index + 1}`}><div className="project-image"><img src={project.image} alt={project.title} loading="lazy" /><span>0{index + 1}</span></div><div className="project-meta"><h3>{project.title}</h3><p>{project.detail}</p></div></article>)}
        </div>
        <TextLink href="/proyectos" navigate={navigate} light>Ver galería completa</TextLink>
      </section>

      <section className="services-preview section-pad">
        <SectionHeading eyebrow="Cuatro frentes de trabajo" title="De la intervención general al" italic="sistema especializado." copy="Una oferta organizada según el tipo de necesidad: implementar, resolver instalaciones, mantener o atender sistemas técnicos." />
        <div className="service-list">
          {services.map((service) => <a key={service.number} href={sitePath('/soluciones')} onClick={(e) => { e.preventDefault(); navigate('/soluciones'); }} className="service-row reveal"><img className="service-card-image" src={service.image} alt="" /><span className="service-number">{service.number}</span><div className="service-card-copy"><h3>{service.title}</h3><p>{service.short}</p></div><span className="service-arrow"><Arrow diagonal /></span></a>)}
        </div>
      </section>

      <section className="process section-pad">
        <SectionHeading eyebrow="Tres escalas de intervención" title="Del acabado visible al" italic="sistema que lo sostiene." copy="Cada nivel amplía el alcance de la intervención: primero el espacio, luego su infraestructura y finalmente los sistemas especializados." />
        <div className="process-stairs" aria-label="Escalas de intervención de menor a mayor profundidad técnica">
          {[
            ['01', 'Espacio', 'La capa visible', 'Acabados interiores, pintura, drywall, carpintería, mobiliario y vidriería.'],
            ['02', 'Infraestructura', 'El soporte operativo', 'Electricidad, gasfitería, tableros y mantenimiento de instalaciones.'],
            ['03', 'Sistemas', 'La especialidad técnica', 'Climatización, refrigeración y protección contra incendios.'],
          ].map(([n, t, label, d]) => <article key={n} className="process-step reveal"><div className="process-step-top"><span>{n}</span><small>{label}</small></div><div><h3>{t}</h3><p>{d}</p></div></article>)}
        </div>
        <p className="process-direction" aria-hidden="true"><span>Intervención general</span><i /><span>Mayor especialización</span></p>
      </section>

      <section className="split-story">
        <div className="split-image"><img src={assetPath('assets/project-05.jpg')} alt="Trabajo de cubierta y estructura en proceso" loading="lazy" /></div>
        <div className="split-content reveal"><p className="eyebrow light">Construcción · instalaciones · sistemas</p><h2>Lo visible y lo técnico forman parte del mismo espacio.</h2><p>La oferta abarca desde acabados y mobiliario hasta ingeniería eléctrica, climatización, refrigeración y sistemas contra incendios.</p><TextLink href="/soluciones" navigate={navigate} light>Explorar soluciones</TextLink></div>
      </section>
      <section className="company-showcase section-pad" aria-label="Muestra referencial de empresas">
        <div className="company-heading"><div><p className="eyebrow">Respaldo empresarial</p><h2>Las marcas que los respaldan tendrán <em>un lugar visible.</em></h2></div><p className="sample-label">Demostración visual · Estos logotipos no representan clientes de Entornos Funcionales. Se reemplazarán por empresas confirmadas y autorizadas.</p></div>
        <div className="company-marquee"><div className="company-track">{[...sampleCompanies, ...sampleCompanies].map((company, index) => <span className="company-logo" key={`${company.name}-${index}`} aria-hidden={index >= sampleCompanies.length}><img src={company.logo} alt={index < sampleCompanies.length ? `${company.name}, logotipo demostrativo` : ''} loading="lazy" /></span>)}</div></div>
      </section>
      <ContactStrip navigate={navigate} />
    </>
  );
}
