import type { CaseId } from "@/data/redesign-cases";

type CaseCopy = {
  title: string;
  alt: string;
  logoAlt: string;
  description: string;
};

type HomeCopy = {
  seo: {
    title: string;
    description: string;
  };
  skip: string;
  nav: {
    services: string;
    products: string;
    projects: string;
    about: string;
    cta: string;
    menu: string;
    close: string;
    primary: string;
    langEs: string;
    langEn: string;
    langLabel: string;
  };
  hero: {
    line1: string;
    line2: string;
    line3: string;
    body: string;
    projects: string;
    whatsapp: string;
  };
  manifesto: {
    label: string;
    leadBefore: string;
    leadEm: string;
    leadAfter: string;
  };
  services: {
    label: string;
    title: string;
    preview: string;
    items: Record<string, { title: string; description: string }>;
  };
  products: {
    label: string;
    title: string;
    titleLine1: string;
    titleLine2: string;
    body: string;
    badge: string;
    kicker: string;
    name: string;
    copy: string;
    cta: string;
    shotAlt: string;
  };
  cases: {
    label: string;
    title: string;
    viewSite: string;
    items: Record<CaseId, CaseCopy>;
  };
  caps: {
    label: string;
    title: string;
    titleLine1: string;
    titleLine2: string;
    softwareTitle: string;
    softwareCopy: string;
    aiTitle: string;
    aiCopy: string;
    systemTitle: string;
    systemCopy: string;
    moduleMain: string;
    module: string;
    systemNote: string;
    softwareChips: string[];
    aiChips: string[];
  };
  process: {
    label: string;
    title: string;
    steps: { index: string; title: string; text: string }[];
  };
  clients: {
    titleBefore: string;
    titleEm: string;
    titleAfter: string;
  };
  reviews: {
    by: string;
    readFull: string;
    close: string;
    prev: string;
    next: string;
    list: string;
    items: Record<string, string>;
  };
  about: {
    label: string;
    title: string;
    lead: string;
    items: { question: string; answer: string }[];
  };
  contact: {
    label: string;
    title: string;
    whatsapp: string;
    name: string;
    email: string;
    message: string;
    send: string;
    sending: string;
    success: string;
  };
  footer: {
    city: string;
    legal: string;
    brochure: string;
    social: string;
  };
  whatsappMessages: {
    hero: string;
    contact: string;
  };
};

export const translations: { es: HomeCopy; en: HomeCopy } = {
  es: {
    seo: {
      title: "Ktalweb | Estudio digital en Lima: UX/UI, software e IA",
      description:
        "Estudio digital en Lima, Perú. Diseñamos y construimos UX/UI, software a medida y soluciones con IA para empresas que necesitan una herramienta clara.",
    },
    skip: "Saltar al contenido",
    nav: {
      services: "Servicios",
      products: "Productos",
      projects: "Proyectos",
      about: "Nosotros",
      cta: "Hablemos",
      menu: "Menú",
      close: "Cerrar",
      primary: "Principal",
      langEs: "ES",
      langEn: "EN",
      langLabel: "Idioma",
    },
    hero: {
      line1: "Diseñamos",
      line2: "y construimos",
      line3: "soluciones digitales.",
      body: "Convertimos necesidades de negocio en soluciones digitales: UX/UI, software, IA y productos propios.",
      projects: "Ver proyectos",
      whatsapp: "Escribir por WhatsApp",
    },
    manifesto: {
      label: "Qué significa digitalizar",
      leadBefore: "Digitalizar no es tener una página. Es entender qué necesita tu negocio y ",
      leadEm: "construir la herramienta",
      leadAfter: " que lo resuelve: una experiencia, un sistema, un flujo con IA.",
    },
    services: {
      label: "Servicios · lo que hacemos para nuestros clientes",
      title: "Qué hacemos",
      preview: "Servicio",
      items: {
        ux: {
          title: "Consultoría UX/UI",
          description:
            "Analizamos y mejoramos la experiencia de tus productos digitales para que sean claros, usables y efectivos.",
        },
        systems: {
          title: "Design Systems",
          description:
            "Definimos componentes, reglas y tokens para que el producto crezca con la misma calidad en cada pantalla.",
        },
        research: {
          title: "Behavioral Design, Design Thinking y UX Research",
          description:
            "Investigamos cómo deciden las personas y convertimos esos hallazgos en decisiones de diseño.",
        },
        brand: {
          title: "Diseño gráfico, ilustración, branding y posts",
          description:
            "Identidad, ilustración y piezas para que la marca se reconozca en la web y en cada publicación.",
        },
        software: {
          title: "Desarrollo de software",
          description: "Construimos el sistema que la operación necesita, con el mismo equipo que lo diseñó.",
        },
        "web-ai": {
          title: "Diseño web + IA",
          description: "Sitios y experiencias que incorporan inteligencia artificial donde aporta al negocio.",
        },
        ai: {
          title: "Soluciones con IA",
          description:
            "Asistentes, flujos y automatizaciones aplicados a un problema concreto, no como adorno.",
        },
      },
    },
    products: {
      label: "Ktalweb Digital Lab · productos propios",
      title: "Productos digitales",
      titleLine1: "Productos",
      titleLine2: "digitales",
      body: "Soluciones que Ktalweb desarrolla como producto: estructuradas, y hechas para evolucionar, adaptarse y escalar.",
      badge: "Producto activo",
      kicker: "Gestión financiera",
      name: "AyniFlow",
      copy: "Plataforma modular de gestión financiera desarrollada por Ktalweb.",
      cta: "Ver AyniFlow",
      shotAlt: "Pantalla de inicio de sesión de AyniFlow",
    },
    cases: {
      label: "Proyectos · trabajos realizados para clientes",
      title: "Casos de éxito",
      viewSite: "Ver sitio",
      items: {
        laboratoriaBcp: {
          title: "Laboratoria / BCP",
          alt: "Sitio de Innova BCP con Laboratoria",
          logoAlt: "Laboratoria y BCP",
          description:
            "Innova BCP 2025 promueve ideas para desafíos reales del sector financiero. La web convoca talento al hackathon.",
        },
        zukarzen: {
          title: "Zukarzen",
          alt: "Sitio de Zukarzen",
          logoAlt: "Zukarzen",
          description:
            "Zukarzen es una pastelería saludable en Lima, con postres artesanales sin azúcar, sin gluten y sin lactosa.",
        },
        offroad: {
          title: "Off Road Perú",
          alt: "Sitio de Off Road Perú",
          logoAlt: "Off Road Perú",
          description:
            "Offroad Perú ofrece equipos y accesorios para vehículos todoterreno, overland y racing. El sitio muestra ese catálogo de forma clara y fácil de recorrer.",
        },
        laboratoria: {
          title: "Laboratoria",
          alt: "Estudio de Laboratoria sobre brecha de género",
          logoAlt: "Laboratoria",
          description:
            "Laboratoria impulsa el talento femenino en tecnología. Esta web presenta su estudio, con piezas descargables y cambio de idioma.",
        },
        loreal: {
          title: "Laboratoria / L'Oréal",
          alt: "Landing Beauty in Tech de Laboratoria y L'Oréal",
          logoAlt: "L'Oréal",
          description:
            "Beauty in Tech es el programa de Laboratoria y L'Oréal para fortalecer el perfil profesional y la empleabilidad, con una convocatoria clara para postular.",
        },
        utp: {
          title: "Laboratoria / UTP",
          alt: "Landing Activa tu carrera de Laboratoria y UTP",
          logoAlt: "UTP",
          description:
            "Activa tu carrera reúne a Laboratoria y UTP para preparar a estudiantes en su búsqueda de empleo, con beneficios, requisitos y postulación en un solo recorrido.",
        },
        colsubsidio: {
          title: "Laboratoria / Colsubsidio",
          alt: "Landing de Laboratoria y Colsubsidio",
          logoAlt: "Colsubsidio",
          description:
            "Colsubsidio y Laboratoria presentan un programa para volver al mercado laboral con más herramientas digitales y una estrategia de búsqueda.",
        },
        biotraining: {
          title: "Biotraining",
          alt: "Sitio de Biotraining Academy",
          logoAlt: "Biotraining",
          description:
            "Biotraining Academy forma en biotecnología. El sitio presenta la oferta de cursos, el equipo docente y la certificación.",
        },
        hazlatarea: {
          title: "Haz La Tarea",
          alt: "Sitio de Haz La Tarea",
          logoAlt: "Haz La Tarea",
          description:
            "Haz La Tarea acompaña emprendimientos con una metodología clara. La web explica el problema, el método y cómo se trabaja con cada negocio.",
        },
        stephanie: {
          title: "Stephanie Hoyle",
          alt: "Sitio de Stephanie Hoyle",
          logoAlt: "Stephanie Hoyle",
          description:
            "Marca personal de growth strategy. El sitio presenta el enfoque, las formas de trabajo y una agenda para conversar con negocios en crecimiento.",
        },
      },
    },
    caps: {
      label: "Capacidades · diseño + tecnología + IA",
      title: "Software e inteligencia artificial",
      titleLine1: "Software",
      titleLine2: "e inteligencia artificial",
      softwareTitle: "Software a la medida",
      softwareCopy:
        "Soluciones digitales adaptadas a lo que cada empresa necesita, diseñadas y construidas por el mismo equipo.",
      aiTitle: "IA con propósito",
      aiCopy: "Qué se puede hacer con IA en un negocio real, en seis frentes concretos.",
      systemTitle: "Todo conectado",
      systemCopy: "Interfaz, lógica, datos e IA diseñados como un solo sistema, no como piezas sueltas.",
      moduleMain: "Módulo principal",
      module: "Módulo",
      systemNote: "Datos → módulos → IA → decisión (vista conceptual)",
      softwareChips: [
        "Sistemas web",
        "Plataformas",
        "Dashboards",
        "Sistemas administrativos",
        "Herramientas internas",
        "MVP",
        "Aplicaciones empresariales",
        "Integraciones",
      ],
      aiChips: ["AI Workflows", "AI Assistants", "AI + Web", "AI + Data", "AI + Software", "AI Automation"],
    },
    process: {
      label: "Proceso",
      title: "Cómo trabajamos",
      steps: [
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
      ],
    },
    clients: {
      titleBefore: "Empresas y organizaciones ",
      titleEm: "ya han confiado",
      titleAfter: " en nosotros",
    },
    reviews: {
      by: "reseña en",
      readFull: "Leer completa",
      close: "Cerrar",
      prev: "Reseña anterior",
      next: "Siguiente reseña",
      list: "Reseñas",
      items: {
        "naddia-schiaffino":
          "Los chicos son unos capos, me encantó cómo quedó mi web. Me asesoran, me dieron alternativas y construimos juntos. Gracias!",
        "zukarzen-dulcesano": "¡¡EXELENTE TRABAJO!! 💯",
        "renzo-gutierrez-loli":
          "Trabajar con el equipo de Ketalweb fue un acierto en varios sentidos, sobre todo porque era mi primera vez implementando una página web para mi emprendimiento. Llegué con muchas dudas y poca claridad técnica, y se tomaron el tiempo de explicarme todo desde cero, con paciencia y criterio. Revisamos juntos cada etapa del proceso, desde el tipo de web que realmente necesitaba hasta los detalles finales, siempre considerando lo que quería transmitir sin rezagar la funcionalidad. El resultado final refleja exactamente la identidad del proyecto. Recomiendo a Ketalweb especialmente si es tu primera experiencia desarrollando una web y necesitas acompañamiento real, no solo ejecución técnica.",
        "kendy-rua-diaz":
          "🔥 Excelente trabajo! Me crearon la página web para mi negocio off-road y realmente superaron mis expectativas. Antes no me daba cuenta de lo desordenado que estaba mi e-commerce hasta que comencé a trabajar con ellos. La atención fue de primera, siempre pendientes de cada detalle y acompañándome en todo el proceso. 🚗💨 recomiendo al máximo, son un equipo comprometido y con mucha paciencia. ¡Gracias por todo! 🙌",
      },
    },
    about: {
      label: "Nosotros",
      title: "Somos Ktalweb",
      lead: "Un equipo de Lima que diseña y construye soluciones digitales, y ahora también sus propios productos.",
      items: [
        {
          question: "¿Qué hacemos?",
          answer: "Diseño, tecnología y estrategia para que un negocio tenga la herramienta digital que necesita.",
        },
        {
          question: "¿Cómo trabajamos?",
          answer: "Contigo, no para ti: mostramos avances, ofrecemos alternativas y decidimos juntos.",
        },
        {
          question: "¿Por qué Ktalweb?",
          answer: "Porque diseño y desarrollo viven en el mismo equipo.",
        },
      ],
    },
    contact: {
      label: "Contacto",
      title: "¿Qué podemos construir juntos?",
      whatsapp: "Hablar por WhatsApp",
      name: "Tu nombre",
      email: "Tu correo",
      message: "Cuéntanos qué necesitas",
      send: "Enviar mensaje",
      sending: "Enviando…",
      success: "Mensaje enviado. Te escribimos pronto.",
    },
    footer: {
      city: "Lima, Perú",
      legal: "Ktalweb Perú",
      brochure: "Brochure",
      social: "Pie",
    },
    whatsappMessages: {
      hero: "Hola Ktalweb, quiero conversar sobre un proyecto digital.",
      contact: "Hola Ktalweb, quiero conversar sobre un proyecto digital.",
    },
  },
  en: {
    seo: {
      title: "Ktalweb | Digital studio in Lima: UX/UI, software and AI",
      description:
        "Digital studio in Lima, Peru. We design and build UX/UI, custom software and AI solutions for companies that need a clear tool.",
    },
    skip: "Skip to content",
    nav: {
      services: "Services",
      products: "Products",
      projects: "Work",
      about: "About",
      cta: "Let's talk",
      menu: "Menu",
      close: "Close",
      primary: "Primary",
      langEs: "ES",
      langEn: "EN",
      langLabel: "Language",
    },
    hero: {
      line1: "We design",
      line2: "and build",
      line3: "digital solutions.",
      body: "We turn business needs into digital solutions: UX/UI, software, AI and our own products.",
      projects: "See our work",
      whatsapp: "Write on WhatsApp",
    },
    manifesto: {
      label: "What digitizing means",
      leadBefore: "Digitizing is not having a page. It is understanding what your business needs and ",
      leadEm: "building the tool",
      leadAfter: " that solves it: an experience, a system, a flow with AI.",
    },
    services: {
      label: "Services · what we do for our clients",
      title: "What we do",
      preview: "Service",
      items: {
        ux: {
          title: "UX/UI consulting",
          description:
            "We analyze and improve the experience of your digital products so they are clear, usable and effective.",
        },
        systems: {
          title: "Design Systems",
          description:
            "We define components, rules and tokens so the product grows with the same quality on every screen.",
        },
        research: {
          title: "Behavioral Design, Design Thinking and UX Research",
          description: "We research how people decide and turn those findings into design decisions.",
        },
        brand: {
          title: "Graphic design, illustration, branding and posts",
          description:
            "Identity, illustration and pieces so the brand is recognized on the web and in every publication.",
        },
        software: {
          title: "Software development",
          description: "We build the system the operation needs, with the same team that designed it.",
        },
        "web-ai": {
          title: "Web design + AI",
          description: "Sites and experiences that bring in artificial intelligence where it helps the business.",
        },
        ai: {
          title: "AI solutions",
          description: "Assistants, flows and automations applied to a concrete problem, not as decoration.",
        },
      },
    },
    products: {
      label: "Ktalweb Digital Lab · our own products",
      title: "Digital products",
      titleLine1: "Digital",
      titleLine2: "products",
      body: "Solutions Ktalweb develops as a product: structured, and made to evolve, adapt and scale.",
      badge: "Active product",
      kicker: "Financial management",
      name: "AyniFlow",
      copy: "Modular financial management platform developed by Ktalweb.",
      cta: "See AyniFlow",
      shotAlt: "AyniFlow sign-in screen",
    },
    cases: {
      label: "Projects · work delivered for clients",
      title: "Case studies",
      viewSite: "Visit site",
      items: {
        laboratoriaBcp: {
          title: "Laboratoria / BCP",
          alt: "Innova BCP site with Laboratoria",
          logoAlt: "Laboratoria and BCP",
          description:
            "Innova BCP 2025 invites ideas for real challenges in finance. The site calls talent to the hackathon.",
        },
        zukarzen: {
          title: "Zukarzen",
          alt: "Zukarzen website",
          logoAlt: "Zukarzen",
          description:
            "Zukarzen is a healthy bakery in Lima, with handmade desserts without sugar, gluten or lactose.",
        },
        offroad: {
          title: "Off Road Perú",
          alt: "Off Road Perú website",
          logoAlt: "Off Road Perú",
          description:
            "Offroad Perú offers gear and accessories for off-road, overland and racing vehicles. The site shows that catalog clearly.",
        },
        laboratoria: {
          title: "Laboratoria",
          alt: "Laboratoria gender-gap study site",
          logoAlt: "Laboratoria",
          description:
            "Laboratoria grows female talent in technology. This site presents their study, with downloads and a language switch.",
        },
        loreal: {
          title: "Laboratoria / L'Oréal",
          alt: "Beauty in Tech landing by Laboratoria and L'Oréal",
          logoAlt: "L'Oréal",
          description:
            "Beauty in Tech is the Laboratoria and L'Oréal program to strengthen professional profiles and employability, with a clear call to apply.",
        },
        utp: {
          title: "Laboratoria / UTP",
          alt: "Activa tu carrera landing by Laboratoria and UTP",
          logoAlt: "UTP",
          description:
            "Activa tu carrera brings Laboratoria and UTP together to prepare students for the job search, with benefits, requirements and application in one path.",
        },
        colsubsidio: {
          title: "Laboratoria / Colsubsidio",
          alt: "Laboratoria and Colsubsidio landing",
          logoAlt: "Colsubsidio",
          description:
            "Colsubsidio and Laboratoria present a program to return to the job market with more digital tools and a search strategy.",
        },
        biotraining: {
          title: "Biotraining",
          alt: "Biotraining Academy website",
          logoAlt: "Biotraining",
          description:
            "Biotraining Academy teaches biotechnology. The site presents the courses, faculty and certification.",
        },
        hazlatarea: {
          title: "Haz La Tarea",
          alt: "Haz La Tarea website",
          logoAlt: "Haz La Tarea",
          description:
            "Haz La Tarea supports ventures with a clear method. The site explains the problem, the method and how each business is supported.",
        },
        stephanie: {
          title: "Stephanie Hoyle",
          alt: "Stephanie Hoyle website",
          logoAlt: "Stephanie Hoyle",
          description:
            "A personal brand in growth strategy. The site presents the approach, ways of working and a calendar to talk with growing businesses.",
        },
      },
    },
    caps: {
      label: "Capabilities · design + technology + AI",
      title: "Software and artificial intelligence",
      titleLine1: "Software",
      titleLine2: "and artificial intelligence",
      softwareTitle: "Custom software",
      softwareCopy:
        "Digital solutions tailored to what each company needs, designed and built by the same team.",
      aiTitle: "AI with purpose",
      aiCopy: "What AI can do in a real business, across six concrete fronts.",
      systemTitle: "Everything connected",
      systemCopy: "Interface, logic, data and AI designed as one system, not as loose pieces.",
      moduleMain: "Main module",
      module: "Module",
      systemNote: "Data → modules → AI → decision (conceptual view)",
      softwareChips: [
        "Web systems",
        "Platforms",
        "Dashboards",
        "Admin systems",
        "Internal tools",
        "MVP",
        "Enterprise apps",
        "Integrations",
      ],
      aiChips: ["AI Workflows", "AI Assistants", "AI + Web", "AI + Data", "AI + Software", "AI Automation"],
    },
    process: {
      label: "Process",
      title: "How we work",
      steps: [
        {
          index: "01",
          title: "Discover",
          text: "Starting point: we understand your business and what you need to create or manage.",
        },
        {
          index: "02",
          title: "Design",
          text: "Feedback and changes: we show constant progress so everything stays on course.",
        },
        {
          index: "03",
          title: "Build",
          text: "Final steps: before launch, online tests so everything is ready.",
        },
        {
          index: "04",
          title: "Launch",
          text: "We publish and monitor so it stays operational.",
        },
      ],
    },
    clients: {
      titleBefore: "Companies and organizations ",
      titleEm: "already trust",
      titleAfter: " us",
    },
    reviews: {
      by: "review on",
      readFull: "Read full review",
      close: "Close",
      prev: "Previous review",
      next: "Next review",
      list: "Reviews",
      items: {
        "naddia-schiaffino":
          "These folks are excellent — I loved how my site turned out. They advised me, offered options and we built it together. Thank you!",
        "zukarzen-dulcesano": "EXCELLENT WORK!! 💯",
        "renzo-gutierrez-loli":
          "Working with the Ketalweb team was the right call in several ways, especially because it was my first time building a website for my venture. I arrived with many doubts and little technical clarity, and they took the time to explain everything from scratch, with patience and judgment. We reviewed every stage together, from the kind of site I actually needed to the final details, always considering what I wanted to communicate without leaving function behind. The result reflects the identity of the project. I recommend Ketalweb especially if it is your first time developing a site and you need real accompaniment, not only technical execution.",
        "kendy-rua-diaz":
          "🔥 Excellent work! They built the website for my off-road business and truly exceeded my expectations. I had not realized how messy my e-commerce was until I started working with them. The attention was first-class, always on every detail and with me through the whole process. I recommend them fully — a committed team with a lot of patience. Thank you for everything! 🙌",
      },
    },
    about: {
      label: "About",
      title: "We are Ktalweb",
      lead: "A Lima team that designs and builds digital solutions, and now also its own products.",
      items: [
        {
          question: "What do we do?",
          answer: "Design, technology and strategy so a business has the digital tool it needs.",
        },
        {
          question: "How do we work?",
          answer: "With you, not for you: we show progress, offer options and decide together.",
        },
        {
          question: "Why Ktalweb?",
          answer: "Because design and development live in the same team.",
        },
      ],
    },
    contact: {
      label: "Contact",
      title: "What can we build together?",
      whatsapp: "Talk on WhatsApp",
      name: "Your name",
      email: "Your email",
      message: "Tell us what you need",
      send: "Send message",
      sending: "Sending…",
      success: "Message sent. We will write you soon.",
    },
    footer: {
      city: "Lima, Peru",
      legal: "Ktalweb Peru",
      brochure: "Brochure",
      social: "Footer",
    },
    whatsappMessages: {
      hero: "Hi Ktalweb, I want to talk about a digital project.",
      contact: "Hi Ktalweb, I want to talk about a digital project.",
    },
  },
};
