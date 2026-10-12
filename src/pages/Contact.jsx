import React from 'react';
import { PageIntro } from '../components/Layout';
import { contact } from '../data/content';
import { Arrow } from '../components/Icons';

export default function Contact() {
  const submit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const body = `Hola, soy ${data.get('nombre')}.\n\nNecesito información sobre: ${data.get('servicio')}.\n${data.get('mensaje')}\n\nMi teléfono: ${data.get('telefono')}\nMi correo: ${data.get('correo')}`;
    window.open(`${contact.whatsapp}&text=${encodeURIComponent(body)}`, '_blank', 'noopener,noreferrer');
  };
  return (
    <>
      <PageIntro variant="contact" index="04" eyebrow="Contacto" title="¿Qué necesita" italic="tu espacio?" copy="Indícanos si se trata de una implementación, una reparación, mantenimiento o un sistema especializado." image="/assets/contact.png" />
      <section className="contact-page section-pad">
        <div className="contact-details reveal"><p className="eyebrow">Canales directos</p><h2>Empecemos por una <em>conversación.</em></h2><a className="whatsapp-primary" href={contact.whatsapp} target="_blank" rel="noreferrer">Conversar por WhatsApp <Arrow diagonal /></a><div className="contact-block"><span>Teléfonos</span>{contact.phones.map(p => <a key={p} href={`tel:+51${p.replaceAll(' ', '')}`}>+51 {p}</a>)}</div><div className="contact-block"><span>Correo</span><a href={`mailto:${contact.email}`}>{contact.email}</a></div><div className="contact-block"><span>Dirección</span><p>{contact.address}</p></div></div>
        <form className="contact-form reveal" onSubmit={submit}>
          <div className="field-row"><label>Nombre<input required name="nombre" autoComplete="name" placeholder="Tu nombre" /></label><label>Teléfono<input required name="telefono" autoComplete="tel" inputMode="tel" placeholder="+51 999 999 999" /></label></div>
          <label>Correo electrónico<input required name="correo" type="email" autoComplete="email" placeholder="nombre@empresa.com" /></label>
          <label>¿Qué solución necesitas?<select required name="servicio" defaultValue=""><option value="" disabled>Selecciona una opción</option><option>Implementación o remodelación</option><option>Ingeniería eléctrica</option><option>Mantenimiento integral</option><option>Aire acondicionado o refrigeración</option><option>Sistema contra incendios</option><option>Otra necesidad</option></select></label>
          <label>Cuéntanos brevemente<textarea required name="mensaje" rows="5" placeholder="Tipo de espacio, necesidad principal y cualquier dato importante..." /></label>
          <button className="submit-button whatsapp-submit" type="submit">Continuar en WhatsApp <Arrow diagonal /></button>
          <p className="form-helper">Se abrirá WhatsApp con tu consulta preparada.</p>
        </form>
      </section>
      <section className="contact-map"><div><span>Rímac · Lima</span><p>Atención para proyectos residenciales, comerciales e industriales.</p></div></section>
    </>
  );
}
