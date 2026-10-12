export const navItems = [
  { label: 'Inicio', path: '/' },
  { label: 'Proyectos', path: '/proyectos' },
  { label: 'Soluciones', path: '/soluciones' },
  { label: 'Nosotros', path: '/nosotros' },
  { label: 'Contacto', path: '/contacto' },
];

export const services = [
  {
    number: '01',
    title: 'Implementación y remodelación',
    short: 'Obra, acabados y mobiliario para renovar o implementar espacios.',
    image: '/assets/hero.png',
    items: ['Acabados de interiores', 'Pintura y drywall', 'Carpintería y ebanistería', 'Muebles de melamina', 'Cerrajería, vidriería y soldadura'],
  },
  {
    number: '02',
    title: 'Ingeniería y sistemas',
    short: 'Instalaciones eléctricas y soluciones técnicas para la operación del espacio.',
    image: '/assets/service-general.png',
    items: ['Ingeniería eléctrica', 'Montaje de tableros', 'Eficiencia y calidad de energía', 'Levantamiento de observaciones INDECI'],
  },
  {
    number: '03',
    title: 'Mantenimiento integral',
    short: 'Reparación y atención de instalaciones, acabados y equipamiento.',
    image: '/assets/project-08.jpg',
    items: ['Gasfitería', 'Electricidad', 'Carpintería', 'Pintura', 'Reparaciones y mantenimiento general'],
  },
  {
    number: '04',
    title: 'Soluciones especializadas',
    short: 'Climatización, refrigeración y protección contra incendios.',
    image: '/assets/project-07.jpg',
    items: ['Aire acondicionado y ventilación', 'Refrigeración comercial e industrial', 'Sistemas contra incendios', 'Detección, alarmas y protección pasiva'],
  },
];

export const projects = [
  { id: 1, image: '/assets/project-07.jpg', title: 'Sistemas de climatización', category: 'Climatización', detail: 'Registro técnico', ratio: 'wide' },
  { id: 2, image: '/assets/hero.png', title: 'Acabados interiores', category: 'Interiores', detail: 'Registro de ejecución', ratio: 'tall' },
  { id: 3, image: '/assets/project-01.jpg', title: 'Red contra incendios', category: 'Protección', detail: 'Detalle de instalación', ratio: 'standard' },
  { id: 4, image: '/assets/project-04.jpg', title: 'Estructura en madera', category: 'Construcción', detail: 'Proceso de obra', ratio: 'tall' },
  { id: 5, image: '/assets/project-05.jpg', title: 'Ejecución de cubierta', category: 'Construcción', detail: 'Proceso de obra', ratio: 'wide' },
  { id: 6, image: '/assets/project-06.jpg', title: 'Acondicionamiento exterior', category: 'Remodelación', detail: 'Proceso de obra', ratio: 'standard' },
  { id: 7, image: '/assets/project-02.jpg', title: 'Mobiliario integrado', category: 'Interiores', detail: 'Resultado', ratio: 'wide' },
  { id: 8, image: '/assets/project-08.jpg', title: 'Coordinación en obra', category: 'Gestión', detail: 'Registro de equipo', ratio: 'standard' },
];

export const contact = {
  phones: ['913 460 898', '989 825 435', '993 773 168'],
  email: 'info@entornosfuncionales.com',
  address: 'Mz. E Lt. 40, Comité 5, Flor de Amancaes, Rímac, Lima',
  instagram: 'https://www.instagram.com/entornosfuncionales/',
  whatsapp: 'https://api.whatsapp.com/send/?phone=51993773168&type=phone_number&app_absent=0',
};
