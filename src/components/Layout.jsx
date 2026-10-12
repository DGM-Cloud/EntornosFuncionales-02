import React, { useEffect, useState } from 'react';
import { assetPath, navItems, contact, sitePath } from '../data/content';
import { Arrow, MenuIcon, WhatsAppIcon } from './Icons';

export function Header({ path, navigate, darkHero = true }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (event, next) => {
    event.preventDefault();
    setOpen(false);
    navigate(next);
  };

  return (
    <header className={`site-header ${scrolled || !darkHero ? 'solid' : ''} ${open ? 'menu-open' : ''}`}>
      <a href={sitePath('/')} className="brand" onClick={(e) => go(e, '/')} aria-label="Entornos Funcionales, ir al inicio">
        <img className="header-logo" src={assetPath('assets/logo.png')} alt="Entornos Funcionales" />
      </a>
      <nav className="desktop-nav" aria-label="Navegación principal">
        {navItems.map((item) => <a key={item.path} className={path === item.path ? 'active' : ''} aria-current={path === item.path ? 'page' : undefined} href={sitePath(item.path)} onClick={(e) => go(e, item.path)}>{item.label}</a>)}
      </nav>
      <a className="header-cta" href={contact.whatsapp} target="_blank" rel="noreferrer">WhatsApp <WhatsAppIcon /></a>
      <button className="menu-button" aria-label={open ? 'Cerrar menú' : 'Abrir menú'} aria-expanded={open} onClick={() => setOpen(!open)}><MenuIcon open={open} /></button>
      <div className="mobile-panel" aria-hidden={!open}>
        <nav aria-label="Navegación móvil">
          {navItems.map((item, index) => <a key={item.path} aria-current={path === item.path ? 'page' : undefined} href={sitePath(item.path)} onClick={(e) => go(e, item.path)}><span>0{index + 1}</span>{item.label}</a>)}
        </nav>
        <div className="mobile-contact"><a href={contact.whatsapp} target="_blank" rel="noreferrer">Conversar por WhatsApp</a><a href={`mailto:${contact.email}`}>{contact.email}</a></div>
      </div>
    </header>
  );
}

export function Footer({ navigate }) {
  const go = (e, p) => { e.preventDefault(); navigate(p); };
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-brand"><img src={assetPath('assets/logo.png')} alt="Entornos Funcionales Reconstrucción y Acabados" /><p>Soluciones integrales para espacios residenciales, comerciales e industriales.</p></div>
        <div><h3>Navegación</h3>{navItems.map((n) => <a key={n.path} href={sitePath(n.path)} onClick={(e) => go(e, n.path)}>{n.label}</a>)}</div>
        <div><h3>Contacto</h3><a href={contact.whatsapp} target="_blank" rel="noreferrer">WhatsApp ↗</a><a href={`mailto:${contact.email}`}>{contact.email}</a>{contact.phones.map(p => <a key={p} href={`tel:+51${p.replaceAll(' ', '')}`}>+51 {p}</a>)}</div>
        <div><h3>Ubicación</h3><p>{contact.address}</p><a href={contact.instagram} target="_blank" rel="noreferrer">Instagram ↗</a></div>
      </div>
      <div className="footer-bottom"><span>© {new Date().getFullYear()} Entornos Funcionales</span><span>Reconstrucción &amp; Acabados</span></div>
      <a className="whatsapp-float" href={contact.whatsapp} target="_blank" rel="noreferrer" aria-label="Conversar con Entornos Funcionales por WhatsApp"><WhatsAppIcon /></a>
    </footer>
  );
}

export function PageIntro({ index, eyebrow, title, italic, copy, image, variant = 'default' }) {
  return (
    <section className={`page-intro page-intro-${variant}`}>
      {image && <div className="page-intro-bg" style={{ backgroundImage: `linear-gradient(90deg,rgba(7,24,43,.9),rgba(7,24,43,.24)), url(${image})` }} />}
      <div className="page-intro-inner">
        <span className="page-index">{index}</span>
        <div><p className="eyebrow light">{eyebrow}</p><h1 tabIndex="-1">{title}<br /><em>{italic}</em></h1>{copy && <p className="intro-copy">{copy}</p>}</div>
      </div>
    </section>
  );
}
