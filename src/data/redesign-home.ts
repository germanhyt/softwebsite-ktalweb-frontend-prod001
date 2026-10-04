export type ServiceItem = {
  id: string;
  index: string;
  title: string;
  description: string;
};

export const services: ServiceItem[] = [
  {
    id: "ux",
    index: "01",
    title: "Consultoría UX/UI",
    description:
      "Analizamos y mejoramos la experiencia de tus productos digitales para que sean claros, usables y efectivos.",
  },
  {
    id: "systems",
    index: "02",
    title: "Design Systems",
    description:
      "Definimos componentes, reglas y tokens para que el producto crezca con la misma calidad en cada pantalla.",
  },
  {
    id: "research",
    index: "03",
    title: "Behavioral Design, Design Thinking y UX Research",
    description:
      "Investigamos cómo deciden las personas y convertimos esos hallazgos en decisiones de diseño.",
  },
  {
    id: "brand",
    index: "04",
    title: "Diseño gráfico, ilustración, branding y posts",
    description:
      "Identidad, ilustración y piezas para que la marca se reconozca en la web y en cada publicación.",
  },
  {
    id: "software",
    index: "05",
    title: "Desarrollo de software",
    description:
      "Construimos el sistema que la operación necesita, con el mismo equipo que lo diseñó.",
  },
  {
    id: "web-ai",
    index: "06",
    title: "Diseño web + IA",
    description:
      "Sitios y experiencias que incorporan inteligencia artificial donde aporta al negocio.",
  },
  {
    id: "ai",
    index: "07",
    title: "Soluciones con IA",
    description:
      "Asistentes, flujos y automatizaciones aplicados a un problema concreto, no como adorno.",
  },
];

export const softwareChips = [
  "Sistemas web",
  "Plataformas",
  "Dashboards",
  "Sistemas administrativos",
  "Herramientas internas",
  "MVP",
  "Aplicaciones empresariales",
  "Integraciones",
];

export const aiChips = [
  "AI Workflows",
  "AI Assistants",
  "AI + Web",
  "AI + Data",
  "AI + Software",
  "AI Automation",
];

export const processSteps = [
  {
    index: "01",
    title: "Descubrimos",
    text: "Punto de partida: entendemos tu negocio y lo que necesitas crear o gestionar.",
  },
  {
    index: "02",
    title: "Diseñamos",
    text: "Feedback y modificaciones: te mostramos avances constantes para asegurar que todo vaya según lo planeado.",
  },
  {
    index: "03",
    title: "Construimos",
    text: "Pasos finales: antes del lanzamiento, pruebas en línea para que todo esté 100% listo.",
  },
  {
    index: "04",
    title: "Lanzamos",
    text: "Publicamos y monitoreamos para que siempre esté operativo.",
  },
];

export const aboutAnswers = [
  {
    question: "¿Qué hacemos?",
    answer:
      "Diseño, tecnología y estrategia para que un negocio tenga la herramienta digital que necesita.",
  },
  {
    question: "¿Cómo trabajamos?",
    answer:
      "Contigo, no para ti: mostramos avances, ofrecemos alternativas y decidimos juntos.",
  },
  {
    question: "¿Por qué Ktalweb?",
    answer: "Porque diseño y desarrollo viven en el mismo equipo.",
  },
];
