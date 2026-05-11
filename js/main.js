/* =========================================================
   DATOS EDITABLES
   ========================================================= */

const profile = {
  name: "Alberto",
  initials: "AGR",
  role: "Desarrollador de sistemas de videojuegos",
  email: "agonzalezrosa@hotmail.com",
  github: "https://github.com/silvericarus",
  linkedin: "https://www.linkedin.com/in/alberto-gonzalez-rosa",
  cv: "cv.pdf",
  intro:
    "Desarrollador orientado a interfaces limpias, modernas y eficientes. Trabajo con sistemas visuales consistentes, accesibilidad y rendimiento.",
  stack: [
    "JavaScript",
    "HTML",
    "CSS",
    "Accesibilidad",
    "Desarrollo de videojuegos",
  ],
  stats: [
    { value: "2+", label: "Años de experiencia" },
    { value: "30+", label: "Proyectos" },
  ],
};

const projects = [
  {
    title: "Scoreboards",
    description:
      "Durante tres meses, trabajé en el desarrollo de una aplicación móvil como parte de mi proyecto final para el CFGS en Desarrollo de Aplicaciones Multiplataforma, aplicando y ampliando mis conocimientos en el campo del desarrollo de aplicaciones móviles para Android.",
    tags: ["Android", "Mobile", "UX/UI"],
    year: "2018",
    demoEnabled: false,
    demoLink: "",
    codeLink: "https://github.com/silvericarus/ScoreBoards",
  },
  {
    title: "Shutter",
    description:
      "El proyecto final de mi CFGS en Desarrollo de Aplicaciones Web, que consiste en una comunidad web para fotógrafos de todo tipo.",
    tags: ["PHP", "UX/UI", "Backend"],
    year: "2019",
    demoEnabled: false,
    demoLink: "",
    codeLink: "https://github.com/silvericarus/shutter",
  },
  {
    title: "lifegame-js",
    description: "Implementación del famoso Juego de la Vida de John Conway",
    tags: ["Javascript", "Math", "Game Dev"],
    year: "2023",
    demoEnabled: true,
    demoLink: "https://lifegame-js.netlify.app/",
    codeLink: "https://github.com/silvericarus/lifegame-js",
  },
  {
    title: "base64-js",
    description:
      "Aplicación web básica para adentrarme en el campo de la criptografía. Detrás de un diseño sencillo se esconde el aspecto realmente interesante: el cifrado y descifrado mediante el método de base 64 para cadenas de caracteres.",
    tags: ["Javascript", "Cryptography"],
    year: "2023",
    demoEnabled: true,
    demoLink: "https://base64-js.netlify.app/",
    codeLink: "https://github.com/silvericarus/base64-js",
  },
  {
    title: "klondike-js",
    description: "Implementación del Solitario (Klondike) en Javascript.",
    tags: ["Javascript", "UX/UI", "Game Dev"],
    year: "2025",
    demoEnabled: true,
    demoLink: "https://base64-js.netlify.app/",
    codeLink: "https://github.com/silvericarus/base64-js",
  },
  {
    title: "si_ecosystem",
    description: "Simulador de ecosistemas en Javascript.",
    tags: ["Javascript", "UX/UI", "Game Dev"],
    year: "2025",
    demoEnabled: true,
    demoLink: "https://si-ecosystem.netlify.app/",
    codeLink: "https://github.com/silvericarus/si_ecosystem",
  },
  {
    title: "pedropovedajaen",
    description:
      "App para la Parroquia San Pedro Poveda de Jaén. Muestra las últimas noticias de la parroquia, información relevante para los feligreses, y los métodos de contacto.",
    tags: ["Android", "Mobile"],
    year: "2025",
    demoEnabled: false,
    demoLink: "",
    codeLink: "https://github.com/silvericarus/pedropovedajaen",
  },
];

const certifications = [
  {
    title: "Cisco CCNA",
    issuer: "Cisco",
    date: "2015-06-01",
    credentialId: "",
    credentialUrl: "",
    image:
      "data:image/png;base64,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",
    tags: ["Redes", "IPv4", "IPv6"],
  },
  {
    title: "Cambridge ESOL Level 1 Certificate in ESOL International",
    issuer: "Cambridge University",
    date: "2012-06-01",
    credentialId: "500/2705/0",
    credentialUrl: "",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu7zaGd8ZOGi8NsXYgEDH8mUyO7JWhGC9e7A&s",
    tags: ["Inglés"],
  },
  {
    title: 'Ciclo de Seminarios "Los 7 hábitos de la gente altamente efectiva"',
    issuer: "Colegio Mayor Albayzín",
    date: "2017-05-20",
    credentialId: "",
    credentialUrl: "",
    image: "",
    tags: ["Actitud positiva", "Efectividad"],
  },
  {
    title: "Automate the Boring Stuff with Python Programming",
    issuer: "Udemy",
    date: "2023-06-20",
    credentialId: "UC-414ca96f-778e-4d10-b4ef-16877564da61",
    credentialUrl:
      "https://www.udemy.com/certificate/UC-414ca96f-778e-4d10-b4ef-16877564da61/",
    image:
      "https://udemy-certificate.s3.amazonaws.com/image/UC-414ca96f-778e-4d10-b4ef-16877564da61.jpg?v=1686357330000",
    tags: ["Python"],
  },
  {
    title: "Master en TypeScript, JavaScript Moderno, ES2023, APIs HTML5",
    issuer: "Udemy",
    date: "2023-06-19",
    credentialId: "UC-ae34533b-62b7-4b94-837d-41938aa92a02",
    credentialUrl:
      "https://www.udemy.com/certificate/UC-ae34533b-62b7-4b94-837d-41938aa92a02/",
    image:
      "https://udemy-certificate.s3.amazonaws.com/image/UC-ae34533b-62b7-4b94-837d-41938aa92a02.jpg?v=1686418094000",
    tags: ["Javascript", "Typescript", "Programación Orientada a Objetos"],
  },
  {
    title: "The Complete 2024 Web Development Bootcamp",
    issuer: "Udemy",
    date: "2024-05-19",
    credentialId: "UC-26e682a7-6572-4bab-930e-b8d2c0fe663c",
    credentialUrl:
      "https://www.udemy.com/certificate/UC-26e682a7-6572-4bab-930e-b8d2c0fe663c/",
    image:
      "https://udemy-certificate.s3.amazonaws.com/image/UC-26e682a7-6572-4bab-930e-b8d2c0fe663c.jpg?v=1686418094000",
    tags: [
      "Express.js",
      "Web3",
      "React.js",
      "PostgreSQL",
      "Node.js",
      "Next.js",
      "Javascript Embebido (EJS)",
      "Google Auth",
    ],
  },
  {
    title: "Aprende Godot Engine 4 | Curso completo | Videojuegos 2D",
    issuer: "Udemy",
    date: "2024-11-19",
    credentialId: "UC-91c773eb-66cc-41e7-b2c8-0e7111cd1bbf",
    credentialUrl:
      "https://www.udemy.com/certificate/UC-91c773eb-66cc-41e7-b2c8-0e7111cd1bbf/",
    image:
      "https://udemy-certificate.s3.amazonaws.com/image/UC-91c773eb-66cc-41e7-b2c8-0e7111cd1bbf.jpg?v=1686418094000",
    tags: ["Godot Engine", "Desarrollo de videojuegos"],
  },
];

const postIndex = [
  {
    slug: "reflexiones-sobre-el-futuro-de-la-tecnologia-blockchain",
    title: "Reflexiones sobre el futuro de la tecnología blockchain",
    excerpt:
      "Los usos actuales de la blockchain podrían ser más beneficiosos para la humanidad, entonces, ¿cómo podría cambiar o evolucionar esta tecnología?",
    date: "2024-10-01",
    readTime: "4 min",
    tags: ["Tecnologías", "Blockchain"],
    file: "./posts/reflexiones-sobre-el-futuro-de-la-tecnologia-blockchain.md",
  },
  {
    slug: "proyecto-simulador-de-ecosistemas-0-inicio",
    title: "Proyecto Simulador de Ecosistemas #0: Inicio",
    excerpt:
      "Acostumbrándome a desarrollar juegos sin jugadores y autómatas celulares",
    date: "2024-10-01",
    readTime: "6 min",
    tags: ["Game Development", "Javascript"],
    file: "./posts/proyecto-simulador-de-ecosistemas-0-inicio.md",
  },
];

const experience = [
  {
    role: "Game Developer",
    company: "Freelance",
    period: "feb. 2026 — Presente",
    description:
      "En este nuevo proyecto, estoy colaborando con mi equipo para crear experiencias interactivas ricas y emocionantes.",
    tags: ["Desarrollo de videojuegos", "Gestión de proyectos"],
  },
  {
    role: "Comercial técnico",
    company: "A2 Informática Jaén S.L.",
    period: "sept. 2025 — dic. 2025",
    description:
      "En este rol me especializé en la comercialización de las soluciones de gestión, contabilidad y facturación de Cegid (gama Informática3). Mi labor consistía en asesorar a empresas de distintos sectores, entendiendo sus necesidades y presentando cómo nuestras herramientas pueden optimizar sus procesos administrativos y financieros. Mi objetivo era acompañar a los clientes en todo el proceso de decisión, ofreciéndoles una visión clara de las ventajas del software y asegurando que cuenten con la información necesaria para elegir la solución que mejor se adapte a su negocio.",
    tags: ["Consultoría de ventas técnicas", "Soporte técnico", "Ventas"],
  },
  {
    role: "Representante de ventas",
    company: "bofrost* España",
    period: "abr. 2025 — jun. 2025",
    description:
      "Como Representante de Ventas en bofrost* España, formé parte de un equipo enfocado en ofrecer una experiencia personalizada a cada cliente, asegurando un servicio cercano y de calidad. Mi día a día implicaba visitas programadas a domicilio, presentación de productos gourmet y gestión de pedidos, siempre con un enfoque orientado a resultados y a la satisfacción del cliente. Durante esta etapa desarrollé una comunicación efectiva tanto con todos los clientes, adaptándome a distintos perfiles y situaciones. En un entorno multicultural, también fue clave interactuar con clientes que no hablaban español, lo que me permitió desenvolverme con soltura en inglés en contextos comerciales y cotidianos. Esta experiencia me permitió afianzar una actitud proactiva, resolutiva y cercana en cada interacción.",
    tags: [
      "Comunicación interpersonal",
      "Atención al cliente",
      "Ventas",
      "Inglés comercial",
    ],
  },
  {
    role: "Diseñador UX/UI",
    company: "Universidad de Málaga",
    period: "nov. 2024 — dic. 2024",
    description:
      "En este proyecto, he colaborado en la realización del diseño UX/UI de una aplicación junto a mi equipo. Dado que el enfoque principal ha sido la accesibilidad, he dedicado tiempo a aprender y aplicar algunas técnicas que habitualmente no son prioritarias para muchos desarrolladores, además de fomentar un sólido trabajo en equipo con mis compañeros.",
    tags: [
      "Accesibilidad",
      "Diseño de experiencia de usuario (UX)",
      "Diseño centrado en el usuario",
      "Prototipado",
      "Figma",
    ],
  },
  {
    role: "Auxiliar administrativo (Atención al público)",
    company: "Yainaim S.L.",
    period: "abr. 2023 — jun. 2024",
    description:
      "En mi trabajo actual, he fortalecido mi capacidad de comunicación interpersonal y he desarrollado habilidades analíticas para responder eficazmente a diversas situaciones. Adicionalmente, he adquirido experiencia en la creación y organización de contenido publicitario para una amplia gama de propiedades inmobiliarias, empleando sistemas de almacenamiento en la nube para optimizar su gestión. Asimismo, mi educación bilingüe me permite desempeñarme como intérprete efectivo y atender a clientes que hablen inglés con fluidez.",
    tags: [
      "Inglés",
      "Cloud",
      "Habilidades sociales",
      "Anuncios inmobiliarios",
      "Trabajo en equipo",
    ],
  },
  {
    role: "Programador Junior",
    company: "CAS TRAINING",
    period: "mar. 2020 — abr. 2020",
    description:
      "Una gran oportunidad en la que he aprendido mucho sobre programación para Android e iOS, la cual me ofreció la oportunidad de participar en varios proyectos muy interesantes con un equipo que funcionaba bien, enseñándome más sobre trabajo en equipo efectivo.",
    tags: [
      "Android",
      "Git",
      "Programación Orientada a Objetos",
      "Bases de datos",
      "SQL",
    ],
  },
  {
    role: "Empleado técnico en prácticas",
    company: "BuyIn EXCLUSIVE",
    period: "mar. 2019 — jun. 2019",
    description:
      "En esta empresa he aprendido la gestión de un framework PHP, además de mejorar aún más mi trabajo en equipo y toma de decisiones.",
    tags: ["PHP", "Git", "Javascript", "Bases de datos", "SQL"],
  },
  {
    role: "Empleado técnico en prácticas",
    company: "The Cloud Gate",
    period: "mar. 2018 — jun. 2018",
    description:
      "He trabajado 4 meses en esta empresa durante el transcurso del Ciclo Formativo de Grado Superior de Desarrollo de Aplicaciones Multiplataforma, aprendiendo mucho de mis compañeros y aumentando el conocimiento que ya tenía del sector del desarrollo de Software.",
    tags: [
      "Javascript",
      "Git",
      "jQuery",
      "Bases de datos",
      "API de Google",
      "SQL",
    ],
  },
  {
    role: "Empleado técnico en prácticas",
    company: "Colegio de Educación Primaria Almadén",
    period: "abr. 2016 — jun. 2016",
    description:
      "Unos meses muy productivos donde tomé un primer contacto con el mundo laboral y forjé relaciones laborales con algunos de mis compañeros de trabajo de allí durante las prácticas del Ciclo Formativo de Grado Medio de Sistemas MicroInformáticos y Redes.",
    tags: [
      "Linux",
      "Windows",
      "Comunicaciones",
      "Instalación de equipos",
      "Reparación de equipos informáticos",
    ],
  },
];

/* =========================================================
   UTILIDADES
   ========================================================= */

const app = document.getElementById("app");
const year = document.getElementById("year");

year.textContent = new Date().getFullYear();

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function icon(name, size = 18) {
  const common = `
    width="${size}"
    height="${size}"
    viewBox="0 0 24 24"
    aria-hidden="true"
    fill="none"
    stroke="currentColor"
    stroke-width="1.9"
    stroke-linecap="round"
    stroke-linejoin="round"
  `;

  const icons = {
    mail: '<rect x="3" y="5" width="18" height="14" rx="2"></rect><path d="m3 7 9 6 9-6"></path>',
    github:
      '<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5A4.8 4.8 0 0 0 9 18v4"></path>',
    external:
      '<path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>',
    folder:
      '<path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7l-2-2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2Z"></path>',
    arrowRight: '<path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path>',
    arrowLeft: '<path d="M19 12H5"></path><path d="m12 19-7-7 7-7"></path>',
    star: '<path d="m12 3 2.7 5.47 6.03.88-4.36 4.25 1.03 6-5.4-2.84L6.6 19.6l1.03-6-4.36-4.25 6.03-.88L12 3Z"></path>',
    linkedin:
      '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle>',
    download:
      '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="M7 10l5 5 5-5"></path><path d="M12 15V3"></path>',
  };

  return `<svg ${common}>${icons[name] || ""}</svg>`;
}

function chips(tags) {
  return (tags || [])
    .map((tag) => `<span class="chip">${escapeHtml(tag)}</span>`)
    .join("");
}

function formatDate(value) {
  if (!value) return "";

  return new Intl.DateTimeFormat("es-ES", {
    year: "numeric",
    month: "short",
  }).format(new Date(value));
}

function updateActiveNav(route) {
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.removeAttribute("aria-current");
  });

  const key =
    route === "projects"
      ? "projects"
      : route === "about"
        ? "about"
        : route === "contact"
          ? "contact"
          : route === "blog"
            ? "blog"
            : "home";

  const current = document.querySelector(`[data-nav="${key}"]`);

  if (current) {
    current.setAttribute("aria-current", "page");
  }
}

function setDocumentTitle(route) {
  const labels = {
    home: "Inicio",
    projects: "Proyectos",
    about: "Sobre mí",
    contact: "Contacto",
    blog: "Blog",
  };

  document.title = `${labels[route] || "Inicio"} — Portafolio`;
}

function scrollToTopFocus() {
  window.scrollTo({ top: 0, behavior: "auto" });
  app.focus({ preventScroll: true });
}

/* =========================================================
   COMPONENTES
   ========================================================= */

function projectCard(project) {
  const demoButton =
    project.demoEnabled && project.demoLink
      ? `
        <a class="btn btn-outlined btn-small" href="${escapeHtml(project.demoLink)}" target="_blank" rel="noreferrer">
          ${icon("external", 16)}
          Demo
        </a>
      `
      : "";

  const codeButton = project.codeLink
    ? `
      <a class="btn btn-filled btn-small" href="${escapeHtml(project.codeLink)}" target="_blank" rel="noreferrer">
        ${icon("folder", 16)}
        Código
      </a>
    `
    : "";

  return `
    <article class="card project-card">
      <div class="thumb">${escapeHtml(project.title)}</div>

      <div>
        <div class="card-row">
          <h3 class="card-title">${escapeHtml(project.title)}</h3>
          <span class="card-icon">${icon("star", 18)}</span>
        </div>

        <p class="card-meta">${escapeHtml(project.year || "")}</p>
        <p class="card-description card-description-spaced">${escapeHtml(project.description)}</p>
      </div>

      <div class="chips-row chips-row-compact">
        ${chips(project.tags)}
      </div>

      <div class="card-actions">
        ${demoButton}
        ${codeButton}
      </div>
    </article>
  `;
}

function certCard(cert, index) {
  const thumb = cert.image
    ? `<img src="${escapeHtml(cert.image)}" alt="Certificado ${escapeHtml(cert.title)}" loading="lazy">`
    : `${escapeHtml(cert.issuer)}`;

  const credentialButton = cert.credentialUrl
    ? `
      <a class="btn btn-outlined btn-small" href="${escapeHtml(cert.credentialUrl)}" target="_blank" rel="noreferrer">
        ${icon("external", 16)}
        Ver credencial
      </a>
    `
    : "";

  return `
    <article class="card cert-card">
      <button
        class="thumb"
        type="button"
        data-cert-index="${index}"
        aria-label="Abrir certificación ${escapeHtml(cert.title)}"
      >
        ${thumb}
      </button>

      <div>
        <h3 class="card-title">${escapeHtml(cert.title)}</h3>
        <p class="card-meta">${escapeHtml(cert.issuer)} · ${formatDate(cert.date)}</p>
        ${
          cert.credentialId
            ? `<p class="card-meta" style="margin-top:4px">ID: ${escapeHtml(cert.credentialId)}</p>`
            : ""
        }
      </div>

      <div class="chips-row chips-row-compact">
        ${chips(cert.tags)}
      </div>

      <div class="card-actions">
        ${credentialButton}
      </div>
    </article>
  `;
}

function statsGrid() {
  return `
    <div class="stat-grid">
      ${profile.stats
        .map(
          (stat) => `
            <div class="stat">
              <div class="stat-value">${escapeHtml(stat.value)}</div>
              <div class="stat-label">${escapeHtml(stat.label)}</div>
            </div>
          `,
        )
        .join("")}
    </div>
  `;
}

/* =========================================================
   PÁGINAS
   ========================================================= */

function renderHome(scrollToContact = false) {
  const featured = projects.slice(0, 3).map(projectCard).join("");

  app.innerHTML = `
    <section class="hero">
      <div class="container hero-grid">
        <div>
          <p class="eyebrow">Portfolio de silvericarus</p>

          <h1 class="title">
            Construyo experiencias
            <span class="title-mark">modernas</span>
            y
            <span class="title-mark">rápidas</span>
          </h1>

          <p class="lead">
            Busco incansablemente nuevos conocimientos tecnológicos, y disfruto afrontando retos
          </p>

          <div class="actions-row">
            <a class="btn btn-filled" href="#/proyectos">${icon("star", 16)}Proyectos destacados</a>
            <a class="btn btn-outlined" href="#/sobre-mi">${icon("arrowRight", 16)}Sobre mí</a>
            <a class="btn btn-outlined" href="${escapeHtml(profile.github)}" target="_blank" rel="noreferrer">${icon("github", 16)}GitHub</a>
          </div>

          <div class="chips-row">
            ${chips(profile.stack)}
          </div>
        </div>

        <aside class="card hero-card" aria-label="Resumen del perfil">
          <div class="hero-orb">
		  	<img src="https://avatars.githubusercontent.com/u/10747420?v=4"/>
		  </div>
          <div>
            <p class="eyebrow" style="margin-bottom:10px">${escapeHtml(profile.role)}</p>
            ${statsGrid()}
          </div>
        </aside>
      </div>
    </section>

    <section class="section-tight">
      <div class="container">
        <div class="section-heading">
          <div>
            <h2 class="section-title">Proyectos destacados</h2>
            <p class="section-subtitle">
              Una selección breve. La página de proyectos contiene el listado completo y buscador.
            </p>
          </div>

          <a class="btn btn-outlined" href="#/proyectos">Ver todos</a>
        </div>

        <div class="grid-3">
          ${featured}
        </div>
      </div>
    </section>

    <section class="section" id="contacto">
      <div class="container">
        <div class="card card-pad cta-card">
          <div>
            <h2 class="section-title cta-title">¿Tienes un proyecto en mente?</h2>
            <p class="section-subtitle">
              Cuéntame qué necesitas y vemos cómo convertirlo en una realidad.
            </p>
          </div>

          <div class="actions-row cta-actions">
            <a class="btn btn-filled" href="mailto:${escapeHtml(profile.email)}">${icon("mail", 16)}Escríbeme</a>
            <a class="btn btn-outlined" href="${escapeHtml(profile.linkedin)}" target="_blank" rel="noreferrer">${icon("linkedin", 16)}LinkedIn</a>
          </div>
        </div>
      </div>
    </section>
  `;

  if (scrollToContact) {
    setTimeout(() => {
      document.getElementById("contacto")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 0);
  } else {
    scrollToTopFocus();
  }
}

function blogCard(post) {
  return `
    <article class="card card-pad">
      <h3 class="card-title"><a href="#/blog/${escapeHtml(post.slug)}">${escapeHtml(post.title)}</a></h3>
      <p class="card-description card-description-spaced">${escapeHtml(post.excerpt)}</p>
      <p class="card-meta">${formatDate(post.date)} · ${escapeHtml(post.readTime)} de lectura</p>
      <div class="chips-row chips-row-compact">${chips(post.tags)}</div>
    </article>
  `;
}

function renderBlog() {
  app.innerHTML = `
    <section class="section">
      <div class="container">
        <div class="section-heading">
          <div>
            <p class="eyebrow">Publicaciones</p>
            <h1 class="section-title">Blog</h1>
            <p class="section-subtitle">Espacio para publicar artículos sobre desarrollo, accesibilidad y rendimiento web.</p>
          </div>
          <a class="btn btn-outlined" href="#/">${icon("arrowLeft", 16)}Volver</a>
        </div>

        <div class="grid-2">
          ${postIndex.map(blogCard).join("")}
        </div>
      </div>
    </section>
  `;
  scrollToTopFocus();
}

function parseInlineMarkdown(text) {
  return escapeHtml(text)
    .replace(
      /!\[([^\]]*)\]\((https?:\/\/[^\s)]+)\)/g,
      '<img src="$2" alt="$1" loading="lazy">',
    )
    .replace(
      /\[(.+?)\]\((https?:\/\/[^\s)]+)\)/g,
      '<a href="$2" target="_blank" rel="noreferrer">$1</a>',
    )
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/__(.+?)__/g, "<strong>$1</strong>")
    .replace(/\*(.+?)\*/g, "<em>$1</em>")
    .replace(/_(.+?)_/g, "<em>$1</em>")
    .replace(/`(.+?)`/g, "<code>$1</code>");
}


function markdownToHtml(md) {
  const lines = md.split(/\r?\n/);
  const out = [];
  let inList = false;
  let inIframe = false;
  let iframeBuffer = [];

  for (const rawLine of lines) {
    const line = rawLine.trim();

    if (inIframe) {
      iframeBuffer.push(rawLine);
      if (/<\/iframe>\s*$/.test(line)) {
        out.push(iframeBuffer.join("\n"));
        iframeBuffer = [];
        inIframe = false;
      }
      continue;
    }

    if (/^\s*$/.test(line)) {
      if (inList) {
        out.push("</ul>");
        inList = false;
      }
      continue;
    }
    if (/^<iframe\b/.test(line) && !/<\/iframe>\s*$/.test(line)) {
      if (inList) {
        out.push("</ul>");
        inList = false;
      }
      inIframe = true;
      iframeBuffer = [rawLine];
      continue;
    }
    if (/^<iframe\b[\s\S]*<\/iframe>\s*$/.test(line)) {
      if (inList) {
        out.push("</ul>");
        inList = false;
      }
      out.push(rawLine);
      continue;
    }
    if (/^###\s+/.test(line)) {
      if (inList) {
        out.push("</ul>");
        inList = false;
      }
      out.push(`<h3>${parseInlineMarkdown(line.replace(/^###\s+/, ""))}</h3>`);
      continue;
    }
    if (/^##\s+/.test(line)) {
      if (inList) {
        out.push("</ul>");
        inList = false;
      }
      out.push(`<h2>${parseInlineMarkdown(line.replace(/^##\s+/, ""))}</h2>`);
      continue;
    }
    if (/^#\s+/.test(line)) {
      if (inList) {
        out.push("</ul>");
        inList = false;
      }
      out.push(`<h1>${parseInlineMarkdown(line.replace(/^#\s+/, ""))}</h1>`);
      continue;
    }
    if (/^-\s+/.test(line)) {
      if (!inList) {
        out.push("<ul>");
        inList = true;
      }
      out.push(`<li>${parseInlineMarkdown(line.replace(/^-\s+/, ""))}</li>`);
      continue;
    }
    if (inList) {
      out.push("</ul>");
      inList = false;
    }
    out.push(`<p>${parseInlineMarkdown(line)}</p>`);
  }
  if (inIframe && iframeBuffer.length) {
    out.push(iframeBuffer.join("\n"));
  }
  if (inList) out.push("</ul>");
  return out.join("\n");
}

async function renderPost(slug) {
  const post = postIndex.find((item) => item.slug === slug);
  if (!post) {
    app.innerHTML = `<section class="section"><div class="container"><div class="card card-pad"><h1 class="section-title">Artículo no encontrado</h1><a class="btn btn-outlined" href="#/blog">Volver al blog</a></div></div></section>`;
    scrollToTopFocus();
    return;
  }

  app.innerHTML = `<section class="section"><div class="container"><div class="card card-pad"><p class="card-meta">Cargando artículo…</p></div></div></section>`;

  try {
    const response = await fetch(post.file);
    if (!response.ok) throw new Error("No se pudo cargar el markdown");
    const markdown = await response.text();

    app.innerHTML = `
      <section class="section">
        <div class="container">
          <div class="section-heading">
            <div>
              <p class="eyebrow">${formatDate(post.date)} · ${escapeHtml(post.readTime)} de lectura</p>
              <h1 class="section-title">${escapeHtml(post.title)}</h1>
            </div>
            <a class="btn btn-outlined" href="#/blog">${icon("arrowLeft", 16)}Volver al blog</a>
          </div>
          <article class="card card-pad markdown-content">${markdownToHtml(markdown)}</article>
        </div>
      </section>`;
  } catch {
    app.innerHTML = `<section class="section"><div class="container"><div class="card card-pad"><h1 class="section-title">No se pudo cargar el artículo</h1><a class="btn btn-outlined" href="#/blog">Volver al blog</a></div></div></section>`;
  }

  scrollToTopFocus();
}

function renderProjects() {
  app.innerHTML = `
    <section class="section">
      <div class="container">
        <div class="section-heading">
          <div>
            <p class="eyebrow">Archivo de trabajo</p>
            <h1 class="section-title">Todos los proyectos</h1>
          </div>

          <a class="btn btn-outlined" href="#/">${icon("arrowLeft", 16)}Volver</a>
        </div>

        <div class="controls">
          <input
            class="input"
            id="projectSearch"
            type="search"
            placeholder="Buscar proyectos…"
            aria-label="Buscar proyectos"
          >

          <select class="select" id="projectTag" aria-label="Filtrar por tecnología">
            <option value="all">Todas las tecnologías</option>
          </select>
        </div>

        <div class="grid-3" id="projectsGrid"></div>
      </div>
    </section>
  `;

  const allTags = [
    ...new Set(projects.flatMap((project) => project.tags || [])),
  ].sort();
  const tagSelect = document.getElementById("projectTag");

  tagSelect.insertAdjacentHTML(
    "beforeend",
    allTags
      .map(
        (tag) =>
          `<option value="${escapeHtml(tag)}">${escapeHtml(tag)}</option>`,
      )
      .join(""),
  );

  const searchInput = document.getElementById("projectSearch");
  const grid = document.getElementById("projectsGrid");

  function applyFilters() {
    const q = searchInput.value.trim().toLowerCase();
    const tag = tagSelect.value;

    const filtered = projects.filter((project) => {
      const haystack = `
        ${project.title}
        ${project.description}
        ${project.year}
        ${(project.tags || []).join(" ")}
      `.toLowerCase();

      const matchesText = !q || haystack.includes(q);
      const matchesTag = tag === "all" || (project.tags || []).includes(tag);

      return matchesText && matchesTag;
    });

    grid.innerHTML = filtered.length
      ? filtered.map(projectCard).join("")
      : `<div class="card empty-state grid-empty">No hay proyectos que coincidan con el filtro.</div>`;
  }

  searchInput.addEventListener("input", applyFilters);
  tagSelect.addEventListener("change", applyFilters);

  applyFilters();
  scrollToTopFocus();
}

function renderAbout() {
  app.innerHTML = `
    <section class="section">
      <div class="container">
        <div class="section-heading">
          <div>
            <p class="eyebrow">Perfil profesional</p>
            <h1 class="section-title">Sobre mí</h1>
            <p class="section-subtitle">Presentación, habilidades, experiencia y certificaciones.</p>
          </div>

          <a class="btn btn-outlined" href="#/">${icon("arrowLeft", 16)}Volver</a>
        </div>

        <div class="card card-pad about-hero">
          <div class="avatar">${escapeHtml(profile.initials)}</div>

          <div>
            <h2 class="card-title about-name">${escapeHtml(profile.name)}</h2>
            <p class="card-meta about-role">${escapeHtml(profile.role)}</p>
            <p class="section-subtitle">${escapeHtml(profile.intro)}</p>

            <div class="actions-row">
              <a class="btn btn-filled" href="mailto:${escapeHtml(profile.email)}">${icon("mail", 16)}Contacto</a>
              <a class="btn btn-outlined" href="${escapeHtml(profile.linkedin)}" target="_blank" rel="noreferrer">${icon("linkedin", 16)}LinkedIn</a>
              <a class="btn btn-outlined" href="${escapeHtml(profile.cv)}" download>${icon("download", 16)}Descargar CV</a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section-tight">
      <div class="container grid-2">
        <div class="card card-pad">
          <h2 class="card-title">Habilidades</h2>
          <p class="card-description skill-desc">Stack y competencias principales.</p>

          <div class="chips-row">
            ${chips(profile.stack.concat(["UI/UX", "Testing", "Proyect Management"]))}
          </div>
        </div>

        <div class="card card-pad">
          <h2 class="card-title">Resumen</h2>

          <div class="summary-stats">
            ${statsGrid()}
          </div>
        </div>
      </div>
    </section>

    <section class="section-tight">
      <div class="container">
        <div class="section-heading">
          <div>
            <h2 class="section-title">Experiencia</h2>
            <p class="section-subtitle">Trayectoria y áreas de trabajo.</p>
          </div>
        </div>

        <div class="timeline">
          ${experience
            .map(
              (item) => `
                <article class="timeline-item">
                  <div class="timeline-head">
                    <div>
                      <h3 class="card-title">${escapeHtml(item.role)} · ${escapeHtml(item.company)}</h3>
                      <p class="card-meta">${escapeHtml(item.period)}</p>
                    </div>

                    <span class="card-icon">${icon("star", 18)}</span>
                  </div>

                  <p class="card-description timeline-description">${escapeHtml(item.description)}</p>

                  <div class="chips-row timeline-tags">
                    ${chips(item.tags)}
                  </div>
                </article>
              `,
            )
            .join("")}
        </div>
      </div>
    </section>

    <section class="section-tight" id="certificaciones">
      <div class="container">
        <div class="section-heading">
          <div>
            <h2 class="section-title">Certificaciones</h2>
            <p class="section-subtitle">
              Galería filtrable con vista ampliada.
            </p>
          </div>
        </div>

        <div class="controls">
          <input
            class="input"
            id="certSearch"
            type="search"
            placeholder="Buscar certificaciones…"
            aria-label="Buscar certificaciones"
          >

          <select class="select" id="certIssuer" aria-label="Filtrar por emisor">
            <option value="all">Todos los emisores</option>
          </select>
        </div>

        <div class="grid-3" id="certGrid"></div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="card card-pad cta-card">
          <div>
            <h2 class="section-title cta-title">¿Colaboramos?</h2>
            <p class="section-subtitle">
              Puedo ayudarte a convertir una idea en un proyecto real.
            </p>
          </div>

          <a class="btn btn-filled" href="mailto:${escapeHtml(profile.email)}">${icon("mail", 16)}Escríbeme</a>
        </div>
      </div>
    </section>
  `;

  setupCertifications();
  scrollToTopFocus();
}

function setupCertifications() {
  const issuerSelect = document.getElementById("certIssuer");
  const searchInput = document.getElementById("certSearch");
  const grid = document.getElementById("certGrid");

  const issuers = [
    ...new Set(certifications.map((cert) => cert.issuer)),
  ].sort();

  issuerSelect.insertAdjacentHTML(
    "beforeend",
    issuers
      .map(
        (issuer) =>
          `<option value="${escapeHtml(issuer)}">${escapeHtml(issuer)}</option>`,
      )
      .join(""),
  );

  function applyFilters() {
    const q = searchInput.value.trim().toLowerCase();
    const issuer = issuerSelect.value;

    const filtered = certifications
      .map((cert, index) => ({ ...cert, originalIndex: index }))
      .filter((cert) => {
        const haystack = `
          ${cert.title}
          ${cert.issuer}
          ${cert.credentialId}
          ${(cert.tags || []).join(" ")}
        `.toLowerCase();

        const matchesText = !q || haystack.includes(q);
        const matchesIssuer = issuer === "all" || cert.issuer === issuer;

        return matchesText && matchesIssuer;
      })
      .sort((a, b) => new Date(b.date) - new Date(a.date));

    grid.dataset.filteredIndexes = JSON.stringify(
      filtered.map((cert) => cert.originalIndex),
    );

    grid.innerHTML = filtered.length
      ? filtered.map((cert) => certCard(cert, cert.originalIndex)).join("")
      : `<div class="card empty-state grid-empty">No hay certificaciones que coincidan con el filtro.</div>`;
  }

  searchInput.addEventListener("input", applyFilters);
  issuerSelect.addEventListener("change", applyFilters);

  grid.addEventListener("click", (event) => {
    const btn = event.target.closest("[data-cert-index]");
    if (!btn) return;

    openLightbox(Number(btn.dataset.certIndex));
  });

  applyFilters();
}

/* =========================================================
   LIGHTBOX
   ========================================================= */

const lightbox = document.getElementById("lightbox");
const lightboxTitle = document.getElementById("lightboxTitle");
const lightboxMeta = document.getElementById("lightboxMeta");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxTags = document.getElementById("lightboxTags");
const lightboxClose = document.getElementById("lightboxClose");
const lightboxPrev = document.getElementById("lightboxPrev");
const lightboxNext = document.getElementById("lightboxNext");

let currentCertIndex = 0;

function getVisibleCertIndexes() {
  const grid = document.getElementById("certGrid");

  if (!grid?.dataset.filteredIndexes) {
    return certifications.map((_, i) => i);
  }

  try {
    return JSON.parse(grid.dataset.filteredIndexes);
  } catch {
    return certifications.map((_, i) => i);
  }
}

function openLightbox(index) {
  currentCertIndex = index;
  renderLightbox();

  lightbox.classList.add("is-open");
  document.body.style.overflow = "hidden";

  lightboxClose.focus();
}

function closeLightbox() {
  lightbox.classList.remove("is-open");
  document.body.style.overflow = "";
}

function renderLightbox() {
  const cert = certifications[currentCertIndex];

  if (!cert) return;

  lightboxTitle.textContent = cert.title;
  lightboxMeta.textContent = `${cert.issuer} · ${formatDate(cert.date)}${
    cert.credentialId ? ` · ID: ${cert.credentialId}` : ""
  }`;

  lightboxTags.innerHTML = chips(cert.tags);

  lightboxImage.innerHTML = cert.image
    ? `<img src="${escapeHtml(cert.image)}" alt="Certificado ${escapeHtml(cert.title)}">`
    : `<span>${escapeHtml(cert.title)}</span>`;
}

function moveLightbox(direction) {
  const indexes = getVisibleCertIndexes();
  const pos = indexes.indexOf(currentCertIndex);
  const nextPos = (pos + direction + indexes.length) % indexes.length;

  currentCertIndex = indexes[nextPos];
  renderLightbox();
}

lightboxClose.addEventListener("click", closeLightbox);

lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) {
    closeLightbox();
  }
});

lightboxPrev.addEventListener("click", () => moveLightbox(-1));
lightboxNext.addEventListener("click", () => moveLightbox(1));

window.addEventListener("keydown", (event) => {
  if (!lightbox.classList.contains("is-open")) return;

  if (event.key === "Escape") closeLightbox();
  if (event.key === "ArrowLeft") moveLightbox(-1);
  if (event.key === "ArrowRight") moveLightbox(1);
});

/* =========================================================
   ROUTER HASH
   ========================================================= */

function parseRoute() {
  const hash = window.location.hash || "#/";
  const clean = hash.replace(/^#/, "");

  if (clean === "/proyectos") return { route: "projects" };
  if (clean === "/sobre-mi") return { route: "about" };
  if (clean === "/contacto") return { route: "contact" };
  if (clean === "/blog") return { route: "blog" };
  if (clean.startsWith("/blog/"))
    return {
      route: "post",
      slug: decodeURIComponent(clean.replace("/blog/", "")),
    };

  return { route: "home" };
}

async function renderRoute() {
  const { route, slug } = parseRoute();

  updateActiveNav(route);
  setDocumentTitle(route);

  if (route === "projects") return renderProjects();
  if (route === "about") return renderAbout();
  if (route === "contact") return renderHome(true);
  if (route === "blog") return renderBlog();
  if (route === "post") return renderPost(slug);

  return renderHome(false);
}

window.addEventListener("hashchange", renderRoute);
renderRoute();

/* =========================================================
   FAB SCROLL TOP
   ========================================================= */

const scrollTopBtn = document.getElementById("scrollTopBtn");

function updateFab() {
  scrollTopBtn.classList.toggle("is-visible", window.scrollY > 300);
}

window.addEventListener("scroll", updateFab, { passive: true });

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

updateFab();
