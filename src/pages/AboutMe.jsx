import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Mail, Github, Linkedin, ArrowLeft, Star } from "lucide-react";
import ThemeStyles from "../components/ThemeStyles.jsx";
import CertificationGallery from "../components/CertificationGallery.jsx";

export default function AboutPage() {
  const skills = [
    "React",
    "Material 3",
    "Accesibilidad (A11y)",
    "Framer Motion",
    "Design Systems",
    "SSR/SSG",
    "SEO técnico",
    "Testing",
  ];
  const tools = [
    "JavaScript/TypeScript",
    "Webpack/Babel",
    "Git/GitHub",
    "REST/GraphQL",
    "CI/CD",
    "Vercel/Netlify",
  ];
  const stats = [
    { label: "Años de experiencia", value: "12+" },
    { label: "Proyectos entregados", value: "30+" },
  ];
  const exp = [
    {
      role: "Frontend Engineer",
      company: "Acme Corp",
      period: "2023 — 2025",
      desc: "Lideré la migración a tema oscuro M3, mejorando Core Web Vitals y accesibilidad AA.",
      tags: ["React", "M3", "A11y", "Perf"],
    },
    {
      role: "UI Developer",
      company: "Studio Pixel",
      period: "2021 — 2023",
      desc: "Diseño de Design System y librería de componentes auditables.",
      tags: ["Design System", "Docs", "Testing"],
    },
  ];

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
      {/* Tokens/reutilizables */}
      <ThemeStyles />

      {/* Top App Bar */}
      <header className="topbar">
        <div className="container">
          <div className="row h-16">
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
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
                  Portfolio
                </span>
              </Link>
            </div>

            <nav className="nav" style={{ display: "flex", gap: 24 }}>
              <Link
                to="/proyectos"
                style={{
                  color: "var(--on-surface-variant)",
                  textDecoration: "none",
                }}
              >
                Proyectos
              </Link>
              <Link
                to="/sobre-mi"
                style={{ color: "var(--on-surface)", textDecoration: "none" }}
              >
                Sobre mí
              </Link>
            </nav>

            <div className="actions" style={{ display: "flex", gap: 12 }}>
              <a
                className="btn btn-outlined"
                href="mailto:tu.email@ejemplo.com"
              >
                <Mail size={16} />
                Contrátame
              </a>
              <a
                className="btn btn-filled"
                href="https://github.com/tu-usuario"
                target="_blank"
                rel="noreferrer"
              >
                <Github size={16} />
                GitHub
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Hero / Presentación */}
      <section className="section" style={{ paddingTop: 40 }}>
        <div className="container">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 16,
              flexWrap: "wrap",
            }}
          >
            <h1 style={{ fontSize: "clamp(28px,4vw,40px)", fontWeight: 800 }}>
              Sobre mí
            </h1>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <Link to="/" className="btn btn-outlined">
                <ArrowLeft size={16} />
                Volver
              </Link>
            </div>
          </div>

          <div
            className="card"
            style={{
              marginTop: 16,
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: 24,
            }}
          >
            <div
              style={{
                display: "flex",
                gap: 20,
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              {/* Avatar simple con degradado */}
              <div
                style={{
                  width: 120,
                  height: 120,
                  borderRadius: "50%",
                  background:
                    "linear-gradient(135deg, var(--md-sys-color-primary), #ffb366)",
                  display: "grid",
                  placeItems: "center",
                  color: "var(--md-sys-color-on-primary)",
                  fontWeight: 800,
                  fontSize: 32,
                }}
              >
                TN
              </div>

              <div style={{ flex: 1, minWidth: 260 }}>
                <h2 style={{ margin: 0, fontSize: 24, fontWeight: 700 }}>
                  Tu Nombre
                </h2>
                <p
                  style={{
                    margin: "6px 0 0",
                    color: "var(--on-surface-variant)",
                  }}
                >
                  Desarrollador frontend enfocado en **interfaces limpias,
                  modernas y eficientes**. Me especializo en Material You (M3),
                  accesibilidad y rendimiento.
                </p>

                <div
                  style={{
                    marginTop: 14,
                    display: "flex",
                    gap: 12,
                    flexWrap: "wrap",
                  }}
                >
                  <a
                    className="btn btn-filled"
                    href="mailto:tu.email@ejemplo.com"
                  >
                    <Mail size={16} />
                    Escríbeme
                  </a>
                  <a
                    className="btn btn-outlined"
                    href="https://www.linkedin.com/in/tu-usuario"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Linkedin size={16} />
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div
              style={{
                display: "grid",
                gap: 12,
                gridTemplateColumns: "repeat(3, minmax(0,1fr))",
              }}
            >
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="card"
                  style={{ textAlign: "center", padding: "16px 12px" }}
                >
                  <div style={{ fontSize: 24, fontWeight: 800 }}>{s.value}</div>
                  <div
                    style={{ color: "var(--on-surface-variant)", fontSize: 12 }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Habilidades */}
      <section className="section" style={{ paddingTop: 24 }}>
        <div className="container">
          <div className="card">
            <h3 style={{ fontSize: 20, fontWeight: 700, marginTop: 0 }}>
              Habilidades
            </h3>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 8,
                marginTop: 12,
              }}
            >
              {skills.map((t) => (
                <span key={t} className="chip">
                  {t}
                </span>
              ))}
            </div>

            <h4 style={{ fontSize: 16, fontWeight: 700, marginTop: 20 }}>
              Herramientas
            </h4>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: 8,
                marginTop: 8,
              }}
            >
              {tools.map((t) => (
                <span key={t} className="chip">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
      <CertificationGallery />

      {/* CTA final */}
      <section className="section">
        <div className="container">
          <div
            className="card"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 16,
              flexWrap: "wrap",
            }}
          >
            <div>
              <h3 style={{ margin: 0, fontSize: 20, fontWeight: 700 }}>
                ¿Colaboramos?
              </h3>
              <p
                style={{
                  margin: "6px 0 0",
                  color: "var(--on-surface-variant)",
                }}
              >
                Cuéntame tu idea y vemos cómo llevarla a producción.
              </p>
            </div>
            <div style={{ display: "flex", gap: 12 }}>
              <a
                className="btn btn-filled"
                href="mailto:agonzalezrosa@hotmail.com"
              >
                <Mail size={16} />
                Contacto
              </a>
              <a
                className="btn btn-outlined"
                href="https://github.com/silvericarus"
                target="_blank"
                rel="noreferrer"
              >
                <Github size={16} />
                GitHub
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer simple */}
      <footer className="section" style={{ paddingTop: 40, paddingBottom: 40 }}>
        <div
          className="container"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 12,
            alignItems: "center",
          }}
        >
          <span style={{ color: "var(--on-surface-variant)", fontSize: 14 }}>
            © {new Date().getFullYear()} • Tu Nombre
          </span>
          <div style={{ display: "flex", gap: 16 }}>
            <Link to="/sobre-mi">Sobre mí</Link>
            <Link to="/proyectos">Proyectos</Link>
            <a href="/#contacto">Contacto</a>
          </div>
        </div>
      </footer>

      <ScrollToTopFAB />
    </main>
  );
}

/* ——— FAB reusado ——— */
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
      {/* Flecha arriba dibujada en línea para no importar más iconos */}
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
