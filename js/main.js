/* =========================================================
   DATOS EDITABLES
   ========================================================= */

const profile = {
  name: "Tu Nombre",
  initials: "TN",
  role: "Frontend Developer",
  email: "tu.email@ejemplo.com",
  github: "https://github.com/tu-usuario",
  linkedin: "https://www.linkedin.com/in/tu-usuario",
  cv: "cv.pdf",
  intro:
    "Desarrollador orientado a interfaces limpias, modernas y eficientes. Trabajo con sistemas visuales consistentes, accesibilidad y rendimiento.",
  stack: ["JavaScript", "HTML", "CSS", "Material 3", "Accesibilidad", "SEO técnico"],
  stats: [
    { value: "5+", label: "Años de experiencia" },
    { value: "30+", label: "Proyectos" },
    { value: "20+", label: "Clientes" }
  ]
};

const projects = [
  {
    title: "UI Kit M3 Dark",
    description:
      "Componentes y tokens visuales para iniciar interfaces oscuras con estética Material You.",
    tags: ["Design System", "CSS", "A11y"],
    year: "2026",
    demoEnabled: true,
    demoLink: "#",
    codeLink: "#"
  },
  {
    title: "Portafolio Performante",
    description:
      "Portfolio estático con estructura ligera, responsive y compatible con hosting estático.",
    tags: ["Vanilla JS", "SEO", "Performance"],
    year: "2026",
    demoEnabled: true,
    demoLink: "#",
    codeLink: "#"
  },
  {
    title: "Dashboard Analítico",
    description:
      "Interfaz de panel con tarjetas, filtros y visualización ordenada de métricas.",
    tags: ["UI", "Data", "Responsive"],
    year: "2025",
    demoEnabled: false,
    demoLink: "",
    codeLink: "#"
  },
  {
    title: "Landing Comercial",
    description:
      "Página de presentación para producto digital con CTA claro y jerarquía visual fuerte.",
    tags: ["Landing", "Copy", "CSS"],
    year: "2025",
    demoEnabled: true,
    demoLink: "#",
    codeLink: "#"
  }
];

const certifications = [
  {
    title: "Google UX Design Professional Certificate",
    issuer: "Coursera · Google",
    date: "2025-03-10",
    credentialId: "ABC-123-UX",
    credentialUrl: "#",
    image: "",
    tags: ["UX", "Investigación", "Prototipado"]
  },
  {
    title: "React Developer",
    issuer: "Meta",
    date: "2024-11-02",
    credentialId: "META-RD-2024",
    credentialUrl: "#",
    image: "",
    tags: ["React", "SPA", "Rendimiento"]
  },
  {
    title: "Web Accessibility Specialist",
    issuer: "IAAP",
    date: "2024-05-20",
    credentialId: "IAAP-WAS-5678",
    credentialUrl: "#",
    image: "",
    tags: ["A11y", "WCAG", "Auditoría"]
  }
];

const experience = [
  {
    role: "Frontend Developer",
    company: "Proyecto personal / freelance",
    period: "2024 — Presente",
    description:
      "Diseño y desarrollo de interfaces web limpias, responsive y orientadas a rendimiento.",
    tags: ["JavaScript", "CSS", "Performance"]
  },
  {
    role: "UI Developer",
    company: "Proyectos seleccionados",
    period: "2022 — 2024",
    description:
      "Construcción de componentes reutilizables y sistemas visuales coherentes para productos digitales.",
    tags: ["Design Systems", "A11y", "Material 3"]
  }
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
    mail:
      '<rect x="3" y="5" width="18" height="14" rx="2"></rect><path d="m3 7 9 6 9-6"></path>',
    github:
      '<path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5A4.8 4.8 0 0 0 9 18v4"></path>',
    external:
      '<path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>',
    folder:
      '<path d="M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7l-2-2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2Z"></path>',
    arrowRight:
      '<path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path>',
    arrowLeft:
      '<path d="M19 12H5"></path><path d="m12 19-7-7 7-7"></path>',
    star:
      '<path d="m12 3 2.7 5.47 6.03.88-4.36 4.25 1.03 6-5.4-2.84L6.6 19.6l1.03-6-4.36-4.25 6.03-.88L12 3Z"></path>',
    linkedin:
      '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle>',
    download:
      '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="M7 10l5 5 5-5"></path><path d="M12 15V3"></path>'
  };

  return `<svg ${common}>${icons[name] || ""}</svg>`;
}

function chips(tags) {
  return (tags || [])
    .map(tag => `<span class="chip">${escapeHtml(tag)}</span>`)
    .join("");
}

function formatDate(value) {
  if (!value) return "";

  return new Intl.DateTimeFormat("es-ES", {
    year: "numeric",
    month: "short"
  }).format(new Date(value));
}

function updateActiveNav(route) {
  document.querySelectorAll(".nav-link").forEach(link => {
    link.removeAttribute("aria-current");
  });

  const key =
    route === "projects"
      ? "projects"
      : route === "about"
        ? "about"
        : route === "contact"
          ? "contact"
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
    contact: "Contacto"
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
          stat => `
            <div class="stat">
              <div class="stat-value">${escapeHtml(stat.value)}</div>
              <div class="stat-label">${escapeHtml(stat.label)}</div>
            </div>
          `
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
          <p class="eyebrow">Diseño limpio · Vanilla JS · Neocities-ready</p>

          <h1 class="title">
            Construyo experiencias web
            <span class="title-mark">modernas</span>
            y
            <span class="title-mark">rápidas</span>.
          </h1>

          <p class="lead">
            Portafolio estático compatible con Neocities: sin build, sin dependencias de runtime,
            responsive y con estética Material You en dark.
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
          <div class="hero-orb"></div>

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
              Cuéntame qué necesitas y vemos cómo convertirlo en una web clara, rápida y mantenible.
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
        block: "start"
      });
    }, 0);
  } else {
    scrollToTopFocus();
  }
}

function renderProjects() {
  app.innerHTML = `
    <section class="section">
      <div class="container">
        <div class="section-heading">
          <div>
            <p class="eyebrow">Archivo de trabajo</p>
            <h1 class="section-title">Todos los proyectos</h1>
            <p class="section-subtitle">
              Filtra por título, descripción, año o tecnología. Edita el array
              <code>projects</code> para añadir tus trabajos reales.
            </p>
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

  const allTags = [...new Set(projects.flatMap(project => project.tags || []))].sort();
  const tagSelect = document.getElementById("projectTag");

  tagSelect.insertAdjacentHTML(
    "beforeend",
    allTags.map(tag => `<option value="${escapeHtml(tag)}">${escapeHtml(tag)}</option>`).join("")
  );

  const searchInput = document.getElementById("projectSearch");
  const grid = document.getElementById("projectsGrid");

  function applyFilters() {
    const q = searchInput.value.trim().toLowerCase();
    const tag = tagSelect.value;

    const filtered = projects.filter(project => {
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
            ${chips(profile.stack.concat(["Responsive", "UI/UX", "Testing", "Design Systems"]))}
          </div>
        </div>

        <div class="card card-pad">
          <h2 class="card-title">Resumen</h2>
          <p class="card-description skill-desc">
            Métricas orientativas. Sustitúyelas por datos reales cuando cierres el contenido.
          </p>

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
              item => `
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
              `
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
              Galería filtrable con vista ampliada. Puedes enlazar credenciales externas o imágenes locales.
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
              Puedo ayudarte a convertir una idea en una web clara, estable y compatible con hosting estático.
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

  const issuers = [...new Set(certifications.map(cert => cert.issuer))].sort();

  issuerSelect.insertAdjacentHTML(
    "beforeend",
    issuers.map(issuer => `<option value="${escapeHtml(issuer)}">${escapeHtml(issuer)}</option>`).join("")
  );

  function applyFilters() {
    const q = searchInput.value.trim().toLowerCase();
    const issuer = issuerSelect.value;

    const filtered = certifications
      .map((cert, index) => ({ ...cert, originalIndex: index }))
      .filter(cert => {
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

    grid.dataset.filteredIndexes = JSON.stringify(filtered.map(cert => cert.originalIndex));

    grid.innerHTML = filtered.length
      ? filtered.map(cert => certCard(cert, cert.originalIndex)).join("")
      : `<div class="card empty-state grid-empty">No hay certificaciones que coincidan con el filtro.</div>`;
  }

  searchInput.addEventListener("input", applyFilters);
  issuerSelect.addEventListener("change", applyFilters);

  grid.addEventListener("click", event => {
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

lightbox.addEventListener("click", event => {
  if (event.target === lightbox) {
    closeLightbox();
  }
});

lightboxPrev.addEventListener("click", () => moveLightbox(-1));
lightboxNext.addEventListener("click", () => moveLightbox(1));

window.addEventListener("keydown", event => {
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

  if (clean === "/proyectos") return "projects";
  if (clean === "/sobre-mi") return "about";
  if (clean === "/contacto") return "contact";

  return "home";
}

function renderRoute() {
  const route = parseRoute();

  updateActiveNav(route);
  setDocumentTitle(route);

  if (route === "projects") return renderProjects();
  if (route === "about") return renderAbout();
  if (route === "contact") return renderHome(true);

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
