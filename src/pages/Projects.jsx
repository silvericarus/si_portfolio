import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ExternalLink,
  FolderGit2,
  ArrowLeft,
  Star,
  Github,
  Mail,
} from "lucide-react";
import ThemeStyles from "../components/ThemeStyles.jsx";
import { projects } from "../data/projects.js";

export default function ProjectsPage() {
  const [query, setQuery] = useState("");

  const filteredProjects = projects.filter((p) => {
    const i = `${p.title} ${p.description} ${p.tags?.join(" ")}`.toLowerCase();
    return i.includes(query.toLowerCase());
  });

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
      <ThemeStyles />

      {/* Top App Bar */}
      <header className="topbar">
        <div className="container">
          <div className="row h-16">
            <div
              className="brand"
              style={{ display: "flex", alignItems: "center", gap: 12 }}
            >
              <div
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: 8,
                  background:
                    "linear-gradient(180deg, var(--md-sys-color-primary), #ffb366)",
                }}
              />
              <Link
                to="/"
                style={{
                  color: "var(--on-surface-variant)",
                  textDecoration: "none",
                }}
              >
                <span
                  style={{
                    fontSize: 12,
                    letterSpacing: 2,
                    textTransform: "uppercase",
                    color: "var(--on-surface-variant)",
                  }}
                >
                  Portafolio
                </span>
              </Link>
            </div>

            <nav className="nav" style={{ display: "flex", gap: 24 }}>
              <Link
                to="/proyectos"
                style={{ color: "var(--on-surface)", textDecoration: "none" }}
              >
                Proyectos
              </Link>
              <Link
                to="/" //TODO: cambiar a /sobre-mi cuando exista esa página
                style={{
                  color: "var(--on-surface-variant)",
                  textDecoration: "none",
                }}
              >
                Sobre mí
              </Link>
              <a
                href="/#contacto"
                style={{
                  color: "var(--on-surface-variant)",
                  textDecoration: "none",
                }}
              >
                Contacto
              </a>
            </nav>

            <div className="actions" style={{ display: "flex", gap: 12 }}>
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

      {/* Cabecera de página + buscador */}
      <section className="section">
        <div className="container">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 16,
            }}
          >
            <h1 style={{ fontSize: "clamp(28px,4vw,40px)", fontWeight: 800 }}>
              Todos los proyectos
            </h1>
            <Link to="/" className="btn btn-outlined">
              <ArrowLeft size={16} />
              Volver
            </Link>
          </div>

          <div
            style={{
              marginTop: 16,
              display: "flex",
              gap: 12,
              flexWrap: "wrap",
            }}
          >
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Buscar por título, tag, descripción…"
              style={{
                height: 44,
                borderRadius: 12,
                border: "1px solid var(--outline)",
                background: "var(--surface)",
                color: "var(--on-surface)",
                padding: "0 14px",
                minWidth: 260,
              }}
            />
          </div>
        </div>
      </section>

      {/* Grid de proyectos */}
      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="grid grid-3">
            {filteredProjects.map((p) => (
              <motion.article
                key={p.title}
                initial={{ opacity: 0, y: 6 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35 }}
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
                  {p.imageLink &&
                    ((
                      <img
                        style={{
                          display: "block",
                          margin: "auto",
                        }}
                        src={p.imageLink}
                        alt="logo"
                        width="91.5px"
                      ></img>
                    ) ||
                      "")}
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    gap: 12,
                    marginTop: 12,
                  }}
                >
                  <div>
                    <h3 style={{ fontSize: 20, fontWeight: 700 }}>{p.title}</h3>
                    <p
                      style={{
                        marginTop: 4,
                        color: "var(--on-surface-variant)",
                      }}
                    >
                      {p.description}
                    </p>
                    <div
                      style={{
                        marginTop: 8,
                        display: "flex",
                        flexWrap: "wrap",
                        gap: 8,
                      }}
                    >
                      {p.tags?.map((t) => (
                        <span key={t} className="chip">
                          {t}
                        </span>
                      ))}
                    </div>
                    {}
                  </div>
                  {(p.fav && <Star style={{ opacity: 1 }} fill="#FF8D41" />) ||
                    ""}
                </div>
                <div style={{ display: "flex", gap: 12, marginTop: 12 }}>
                  {p.demoLink && (
                    <a
                      className="btn btn-outlined"
                      href={p.demoLink}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <ExternalLink size={16} />
                      Demo
                    </a>
                  )}
                  {
                    <a
                      className="btn btn-filled"
                      href={p.codeLink}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FolderGit2 size={16} />
                      Código
                    </a>
                  }
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <ScrollToTopFAB />
    </main>
  );
}

// FAB (reusado)
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
      <ArrowLeft style={{ display: "none" }} />
      {/* icono arriba */}
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 19V5m0 0l-7 7m7-7l7 7"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </motion.button>
  );
}
