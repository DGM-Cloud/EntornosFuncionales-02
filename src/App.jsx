import React, { useEffect, useState } from 'react';
import { Header, Footer } from './components/Layout';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Solutions from './pages/Solutions';
import About from './pages/About';
import Contact from './pages/Contact';

const pages = { '/': Home, '/proyectos': Projects, '/soluciones': Solutions, '/nosotros': About, '/contacto': Contact };
const basePath = import.meta.env.BASE_URL.replace(/\/$/, '');
const routeFromLocation = () => {
  const pathname = window.location.pathname;
  const route = basePath && pathname.startsWith(basePath) ? pathname.slice(basePath.length) || '/' : pathname;
  return pages[route] ? route : '/';
};
const routeUrl = (route) => `${basePath}${route === '/' ? '/' : route}`;
const metadata = {
  '/': ['Entornos Funcionales | Obra, sistemas y mantenimiento', 'Implementación, remodelación, ingeniería, sistemas y mantenimiento integral para espacios residenciales, comerciales e industriales.'],
  '/proyectos': ['Proyectos | Entornos Funcionales', 'Registros visuales de implementación, acabados, construcción y sistemas realizados por Entornos Funcionales.'],
  '/soluciones': ['Soluciones | Entornos Funcionales', 'Servicios de remodelación, ingeniería eléctrica, mantenimiento, climatización, refrigeración y protección contra incendios.'],
  '/nosotros': ['Nosotros | Entornos Funcionales', 'Conoce el enfoque, misión y visión de Entornos Funcionales Reconstrucción & Acabados.'],
  '/contacto': ['Contacto | Entornos Funcionales', 'Conversa con Entornos Funcionales sobre tu proyecto de implementación, remodelación, ingeniería o mantenimiento.'],
};

export default function App() {
  const initialPath = routeFromLocation();
  const [path, setPath] = useState(initialPath);

  const navigate = (next) => {
    if (next === path) { window.scrollTo({ top: 0, behavior: 'smooth' }); return; }
    window.history.pushState({}, '', routeUrl(next));
    setPath(next);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    const pop = () => setPath(routeFromLocation());
    window.addEventListener('popstate', pop);
    return () => window.removeEventListener('popstate', pop);
  }, []);

  useEffect(() => {
    const [title, description] = metadata[path];
    document.title = title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', description);
    const timer = window.setTimeout(() => document.querySelector('main h1')?.focus({ preventScroll: true }), 0);
    return () => window.clearTimeout(timer);
  }, [path]);

  const Page = pages[path] || Home;
  return (
    <>
      <Header path={path} navigate={navigate} darkHero />
      <main id="contenido"><Page navigate={navigate} /></main>
      <Footer navigate={navigate} />
    </>
  );
}
