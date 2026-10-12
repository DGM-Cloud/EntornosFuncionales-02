import React, { useEffect, useMemo, useRef, useState } from 'react';
import { PageIntro } from '../components/Layout';
import { projects } from '../data/content';
import { ContactStrip, SectionHeading } from '../components/Shared';

export default function Projects({ navigate }) {
  const [filter, setFilter] = useState('Todos');
  const [selected, setSelected] = useState(null);
  const closeButton = useRef(null);
  const lastTrigger = useRef(null);
  const filters = ['Todos', ...new Set(projects.map(p => p.category))];
  const visible = useMemo(() => filter === 'Todos' ? projects : projects.filter(p => p.category === filter), [filter]);

  useEffect(() => {
    if (!selected) return undefined;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeButton.current?.focus();
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setSelected(null);
      if (event.key === 'Tab') event.preventDefault();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', onKeyDown);
      lastTrigger.current?.focus();
    };
  }, [selected]);

  const openProject = (project, event) => {
    lastTrigger.current = event.currentTarget;
    setSelected(project);
  };
  return (
    <>
      <PageIntro variant="projects" index="01" eyebrow="Archivo visual" title="Así se ve el trabajo" italic="cuando está en proceso." copy="Una lectura visual de acabados, construcción, instalaciones y sistemas técnicos." image="/assets/project-04.jpg" />
      <section className="project-gallery section-pad">
        <SectionHeading eyebrow="Selección de registros" title="Detalle técnico, ejecución" italic="y resultado." copy="Explora las imágenes por especialidad o abre cada registro para verlo a mayor escala." />
        <div className="filter-bar" role="group" aria-label="Filtrar proyectos">{filters.map(f => <button key={f} aria-pressed={filter === f} className={filter === f ? 'active' : ''} onClick={() => setFilter(f)}>{f}</button>)}</div>
        <div className="masonry-grid">{visible.map((project, index) => <button key={project.id} className={`gallery-item ${project.ratio} reveal`} onClick={(event) => openProject(project, event)} aria-label={`Ampliar ${project.title}`}><img src={project.image} alt={project.title} loading="lazy" /><span className="gallery-overlay"><span>{String(index + 1).padStart(2, '0')}</span><span><strong>{project.title}</strong><small>{project.detail}</small></span><i aria-hidden="true">↗</i></span></button>)}</div>
      </section>
      <ContactStrip navigate={navigate} />
      {selected && <div className="lightbox" role="dialog" aria-modal="true" aria-labelledby="lightbox-title" onMouseDown={(event) => { if (event.target === event.currentTarget) setSelected(null); }}><button ref={closeButton} onClick={() => setSelected(null)} aria-label="Cerrar imagen">×</button><img src={selected.image} alt={selected.title} /><div><strong id="lightbox-title">{selected.title}</strong><span>{selected.detail}</span></div></div>}
    </>
  );
}
