import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUp,
  Github,
  Network,
  Mail,
  ExternalLink,
  FolderGit2,
  Star,
} from "lucide-react";
import { projects } from "../data/projects.js";

export default function PortfolioLanding() {
  return (
    <main
      style={{
        background:
          "linear-gradient(128deg, var(--md-sys-color-primary) 0%, color-mix(in srgb, var(--md-sys-color-primary) 24%, #1B1B1E) 18%, #1B1B1E 60%, #121214 100%)",
        minHeight: "100vh",
        width: "100%",
        overflowX: "hidden",
      }}
    >
      <style>{`
        :root {
          --md-sys-color-primary: #FF8D41;
          --md-sys-color-on-primary: #1A0E00;          /* AA/AAA sobre el primario */
          --md-sys-color-primary-container: #3B1C00;
          --md-sys-color-on-primary-container: #FFE7D2;

          --bg: #0B0B0C;
          --bg-dim: #1B1B1E;
          --surface: #121214;
          --on-surface: #ECE6F0;
          --surface-variant: #2A2A2E;
          --on-surface-variant: #C9C6CF;
          --outline: #8E8E96;

          --elev-1: color-mix(in srgb, var(--surface) 92%, var(--md-sys-color-primary) 8%);
          --elev-2: color-mix(in srgb, var(--surface) 89%, var(--md-sys-color-primary) 11%);
          --elev-3: color-mix(in srgb, var(--surface) 88%, var(--md-sys-color-primary) 12%);
          --elev-4: color-mix(in srgb, var(--surface) 86%, var(--md-sys-color-primary) 14%);
        }
        /* Tipografía y reset mínimos */
        html, body { background: var(--bg); color: var(--on-surface); }
        body { font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Inter, "Helvetica Neue", Arial, "Noto Sans"; }

        /* Botones M3 */
        .btn { height: 44px; border-radius: 9999px; padding: 0 20px; font-weight: 600; display: inline-flex; align-items: center; gap: .5rem; border: none; cursor: pointer; }
        .btn-filled { background: var(--md-sys-color-primary); color: var(--md-sys-color-on-primary); box-shadow: 0 2px 8px rgba(0,0,0,.35); }
        .btn-filled:hover { filter: brightness(1.05); }
        .btn-outlined { color: var(--on-surface); border: 1px solid var(--outline); background: transparent; }
        .btn-outlined:hover { background: color-mix(in srgb, var(--on-surface) 6%, transparent); }

        /* Card */
        .card { background: var(--elev-1); border: 1px solid rgba(255,255,255,0.06); border-radius: 20px; padding: 20px; }

        /* Chip */
        .chip { display:inline-flex; align-items:center; gap:.5rem; border-radius: 9999px; border:1px solid var(--outline); padding:.25rem .75rem; background: color-mix(in srgb, var(--surface) 90%, var(--md-sys-color-primary) 10%); color: var(--on-surface-variant); }

        /* Top App Bar */
        .topbar { position: sticky; top:0; z-index: 50; backdrop-filter: blur(8px); background: color-mix(in srgb, var(--surface) 80%, transparent); border-bottom:1px solid rgba(255,255,255,0.06); }
        .brand { display:flex; align-items:center; gap:12px; }
        .brand-badge { width:32px; height:32px; border-radius: 8px; background: linear-gradient(180deg, var(--md-sys-color-primary), #ffb366); }
        .nav { display:none; }
        .actions { display:flex; align-items:center; gap:12px; }
        @media (min-width: 768px){ .nav { display:flex; align-items:center; } }

        /* FAB */
        .fab { position: fixed; right: 20px; bottom: calc(20px + env(safe-area-inset-bottom, 0px)); width: 56px; height: 56px; border-radius: 16px; background: var(--md-sys-color-primary); color: var(--md-sys-color-on-primary); display: flex; align-items: center; justify-content: center; box-shadow: 0 8px 24px rgba(0,0,0,.35); border: none; }
        .fab:hover { filter: brightness(1.05); }
        .fab:focus-visible { outline: 2px solid var(--outline); outline-offset: 2px; }
      `}</style>
      {/* ====== Top App Bar ====== */}
      <header className="topbar">
        <div className="container">
          <div className="row h-16">
            <Link to="/" style={{ textDecoration: "none" }}>
              <div className="brand">
                <div className="brand-badge" />
                <span
                  style={{
                    fontSize: 12,
                    letterSpacing: 2,
                    textTransform: "uppercase",
                    color: "var(--on-surface-variant)",
                  }}
                >
                  Portfolio
                </span>
              </div>
            </Link>
            <nav className="nav">
              <Link to="/proyectos">Proyectos</Link>
              <Link to="/sobre-mi">Sobre mi</Link>
              <a href="#contacto">Contacto</a>
            </nav>
            <div className="actions">
              <a
                className="btn btn-outlined"
                href="mailto:agonzalezrosa@hotmail.com"
              >
                <Mail size={16} />
                Contáctame
              </a>
              <a
                className="btn btn-filled"
                href="https://github.com/silvericarus"
                target="_blank"
                rel="noreferrer"
              >
                <Github size={16} />
                Ver mis proyectos
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* ====== Hero ====== */}
      <section className="hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{ maxWidth: 800 }}
          >
            <p
              style={{
                marginBottom: 16,
                fontSize: 14,
                fontWeight: 600,
                letterSpacing: 1.5,
                color: "var(--on-surface-variant)",
              }}
            >
              APLICACIONES WEB · APLICACIONES MÓVILES · PROGRAMACIÓN PROFESIONAL
              · DISEÑO UI/UX
            </p>
            <h1
              style={{
                fontSize: "clamp(40px,6vw,64px)",
                lineHeight: 1.4,
                fontWeight: 800,
                color: "var(--on-surface)",
              }}
            >
              Construyo soluciones{" "}
              <span
                style={{
                  color: "var(--md-sys-color-on-primary)",
                  background: "var(--md-sys-color-primary)",
                  padding: "0 .4rem",
                  borderRadius: 8,
                }}
              >
                modernas
              </span>{" "}
              y{" "}
              <span
                style={{
                  color: "var(--md-sys-color-on-primary)",
                  background: "var(--md-sys-color-primary)",
                  padding: "0 .4rem",
                  borderRadius: 8,
                }}
              >
                rápidas
              </span>
              .
            </h1>
            <p
              style={{
                marginTop: 24,
                fontSize: 18,
                color: "var(--on-surface-variant)",
                maxWidth: 720,
              }}
            ></p>
            <div
              style={{
                marginTop: 24,
                display: "flex",
                flexWrap: "wrap",
                gap: 12,
              }}
            >
              <a className="btn btn-filled" href="#proyectos">
                <Star size={16} />
                Proyectos destacados
              </a>
              <a className="btn btn-outlined" href="#sobre-mi">
                <ArrowRight size={16} />
                Saber más
              </a>
              <a className="btn btn-outlined" href="#contacto">
                <Network size={16} />
                Redes
              </a>
            </div>
            <div
              style={{
                marginTop: 24,
                display: "flex",
                flexWrap: "wrap",
                gap: 8,
              }}
            >
              {["Web", "Android", "Python", "C", "Java", "Rust", "Lua"].map(
                (t) => (
                  <span key={t} className="chip">
                    {t}
                  </span>
                )
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ====== Proyectos ====== */}
      <section id="proyectos" className="section">
        <div className="container">
          <div
            style={{
              marginBottom: 24,
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
            }}
          >
            <h2 style={{ fontSize: "clamp(24px,3vw,36px)", fontWeight: 700 }}>
              Proyectos destacados
            </h2>
            <a
              href="#"
              style={{ fontSize: 14, color: "var(--on-surface-variant)" }}
            >
              Ver todos
            </a>
          </div>
          <div className="grid grid-3">
            {projects.map((p) => (
              <ProjectCard key={p.title} {...p} />
            ))}
          </div>
        </div>
      </section>

      {/* ====== Sobre mí ====== */}
      <section id="sobre-mi" className="section">
        <div className="container">
          <div className="grid" style={{ gridTemplateColumns: "1fr", gap: 24 }}>
            <div className="card">
              <h3 style={{ fontSize: 24, fontWeight: 600 }}>Sobre mí</h3>
              <p style={{ marginTop: 12, color: "var(--on-surface-variant)" }}>
                Soy desarrollador orientado a interfaces limpias, modernas y
                eficientes. Sigo Material You (M3) y priorizo accesibilidad,
                rendimiento y buenas prácticas. Este layout sirve como base para
                escalar tu portafolio: secciones, CMS, i18n, y despliegues.
              </p>
              <div style={{ marginTop: 20, display: "flex", gap: 12 }}>
                <a className="btn btn-filled" href="#contacto">
                  <Mail size={16} />
                  Hablemos
                </a>
                <a className="btn btn-outlined" href="#proyectos">
                  <ExternalLink size={16} />
                  Casos
                </a>
              </div>
            </div>
            <div className="card">
              <h4 style={{ fontSize: 18, fontWeight: 600 }}>
                Servicios / foco
              </h4>
              <ul
                style={{
                  marginTop: 12,
                  color: "var(--on-surface-variant)",
                  lineHeight: 1.7,
                }}
              >
                <li>• Diseño y maquetación con Material 3 (tema oscuro).</li>
                <li>• Componentes accesibles y responsivos.</li>
                <li>• Integración con CMS / Markdown / datos estáticos.</li>
                <li>• Auditorías de performance (Core Web Vitals).</li>
              </ul>
              <div
                style={{
                  marginTop: 16,
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 8,
                }}
              >
                {[
                  "UI/UX",
                  "Design Systems",
                  "A11y",
                  "SEO técnico",
                  "SSR/SSG",
                  "Testing",
                ].map((t) => (
                  <span key={t} className="chip">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ====== Contacto ====== */}
      <section id="contacto" className="section">
        <div className="container">
          <div
            className="card"
            style={{ display: "flex", flexDirection: "column", gap: 16 }}
          >
            <div>
              <h3 style={{ fontSize: 24, fontWeight: 600 }}>
                ¿Tienes un proyecto en mente?
              </h3>
              <p style={{ marginTop: 8, color: "var(--on-surface-variant)" }}>
                Cuéntame qué necesitas y construimos algo increíble.
              </p>
            </div>
            <div style={{ display: "flex", gap: 12 }}>
              <a className="btn btn-filled" href="mailto:tu.email@ejemplo.com">
                <Mail size={16} />
                Escríbeme
              </a>
              <a className="btn btn-outlined" href="#">
                <Github size={16} />
                GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ====== Footer ====== */}
      <footer className="section" style={{ paddingTop: 40, paddingBottom: 40 }}>
        <div
          className="container"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 12,
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <span style={{ color: "var(--on-surface-variant)", fontSize: 14 }}>
            © {new Date().getFullYear()} • Tu Nombre
          </span>
          <div style={{ display: "flex", gap: 16 }}>
            <a href="#sobre-mi">Sobre mí</a>
            <a href="#proyectos">Proyectos</a>
            <a href="#contacto">Contacto</a>
          </div>
        </div>
      </footer>

      <ScrollToTopFAB />
    </main>
  );
}

// FAB para volver arriba (Material 3)
function ScrollToTopFAB() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.button
      className="fab"
      aria-label="Volver arriba"
      title="Volver arriba"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : 8 }}
      transition={{ duration: 0.25 }}
      style={{
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? "auto" : "none",
      }}
    >
      <ArrowUp size={20} />
    </motion.button>
  );
}

function ProjectCard({
  title,
  description,
  tags,
  codeLink,
  demoLink,
  demoEnabled,
  fav,
  imageLink,
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 6 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="card"
    >
      <div
        style={{
          height: 144,
          width: "100%",
          borderRadius: 12,
          background:
            "linear-gradient(160deg, var(--md-sys-color-primary-container), color-mix(in srgb, var(--md-sys-color-primary) 35%, black))",
          border: "1px solid rgba(255,255,255,0.08)",
          alignContent: "center",
        }}
      >
        {imageLink &&
          ((
            <img
              style={{
                display: "block",
                margin: "auto",
              }}
              src={imageLink}
              alt="logo"
              width="91.5px"
            ></img>
          ) ||
            "")}
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          gap: 12,
          marginTop: 12,
        }}
      >
        <div>
          <h3 style={{ fontSize: 20, fontWeight: 600 }}>{title}</h3>
          <p style={{ marginTop: 4, color: "var(--on-surface-variant)" }}>
            {description}
          </p>
        </div>
        {(fav && <Star style={{ opacity: 1 }} fill="#FF8D41" />) || ""}
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 8 }}>
        {tags.map((t) => (
          <span key={t} className="chip">
            {t}
          </span>
        ))}
      </div>
      <div
        style={{ display: "flex", alignItems: "center", gap: 12, marginTop: 8 }}
      >
        {demoEnabled ? (
          <a href={demoLink} className="btn btn-outlined">
            <ExternalLink size={16} />
            Demo
          </a>
        ) : (
          ""
        )}
        <a href={codeLink} className="btn btn-filled">
          <FolderGit2 size={16} />
          Código
        </a>
      </div>
    </motion.article>
  );
}
