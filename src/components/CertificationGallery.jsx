import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, X } from "lucide-react";
import ThemeStyles from "./ThemeStyles.jsx";
import { certifications } from "../data/certifications.js";

/**
 * Galería de certificaciones con:
 * - Filtro por emisor + búsqueda por texto
 * - Orden por fecha (recientes primero)
 * - Lightbox accesible (Esc para cerrar, click en fondo)
 */
export default function CertificationGallery() {
  const [issuer, setIssuer] = useState("Todos");
  const [query, setQuery] = useState("");
  const [openIdx, setOpenIdx] = useState(null);

  // Sacamos lista de emisores únicos
  const issuers = useMemo(() => {
    const all = Array.from(new Set(certifications.map((c) => c.issuer))).sort();
    return ["Todos", ...all];
  }, []);

  // Filtro y orden
  const filtered = useMemo(() => {
    const text = query.trim().toLowerCase();
    return certifications
      .filter((c) => issuer === "Todos" || c.issuer === issuer)
      .filter((c) => {
        if (!text) return true;
        const haystack = `${c.title} ${c.issuer} ${c.tags?.join(" ")} ${
          c.credentialId
        }`.toLowerCase();
        return haystack.includes(text);
      })
      .sort((a, b) => new Date(b.date) - new Date(a.date)); // recientes primero
  }, [issuer, query]);

  // Cerrar lightbox con Escape
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setOpenIdx(null);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <section
      className="section"
      aria-labelledby="certificaciones-heading"
      style={{ paddingTop: 0 }}
    >
      <ThemeStyles />
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
          <h2
            id="certificaciones-heading"
            style={{ fontSize: "clamp(22px,3vw,28px)", fontWeight: 800 }}
          >
            Certificaciones
          </h2>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
            <select
              value={issuer}
              onChange={(e) => setIssuer(e.target.value)}
              aria-label="Filtrar por emisor"
              style={{
                height: 44,
                borderRadius: 12,
                border: "1px solid var(--outline)",
                background: "var(--surface)",
                color: "var(--on-surface)",
                padding: "0 14px",
                minWidth: 200,
              }}
            >
              {issuers.map((i) => (
                <option key={i} value={i}>
                  {i}
                </option>
              ))}
            </select>

            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Buscar por título, tag, ID…"
              aria-label="Buscar certificaciones"
              style={{
                height: 44,
                borderRadius: 12,
                border: "1px solid var(--outline)",
                background: "var(--surface)",
                color: "var(--on-surface)",
                padding: "0 14px",
                minWidth: 240,
              }}
            />
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-3" style={{ marginTop: 16 }}>
          {filtered.map((c, idx) => (
            <motion.article
              key={c.title + c.credentialId}
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35 }}
              className="card"
              style={{ display: "flex", flexDirection: "column", gap: 12 }}
            >
              {/* Thumb */}
              <button
                onClick={() => setOpenIdx(idx)}
                aria-label={`Abrir certificado ${c.title}`}
                style={{
                  border: "none",
                  padding: 0,
                  cursor: "zoom-in",
                  background: "transparent",
                  borderRadius: 12,
                  overflow: "hidden",
                  position: "relative",
                  height: 144,
                }}
              >
                {c.image ? (
                  <img
                    src={c.image}
                    alt={`Certificado ${c.title}`}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                ) : (
                  <div
                    style={{
                      width: "100%",
                      height: "100%",
                      display: "grid",
                      placeItems: "center",
                      border: "1px solid rgba(255,255,255,0.08)",
                      borderRadius: 12,
                      background:
                        "linear-gradient(135deg, var(--md-sys-color-primary-container), color-mix(in srgb, var(--md-sys-color-primary) 35%, black))",
                      color: "var(--on-primary-container)",
                      fontWeight: 700,
                    }}
                  >
                    {c.issuer}
                  </div>
                )}
              </button>

              {/* Info */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: 12,
                }}
              >
                <div>
                  <div style={{ fontSize: 18, fontWeight: 700 }}>{c.title}</div>
                  <div
                    style={{ fontSize: 12, color: "var(--on-surface-variant)" }}
                  >
                    {c.issuer} ·{" "}
                    {new Date(c.date).toLocaleDateString("es-ES", {
                      year: "numeric",
                      month: "short",
                    })}
                  </div>
                </div>
              </div>

              {/* Tags */}
              {!!c.tags?.length && (
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {c.tags.map((t) => (
                    <span key={t} className="chip">
                      {t}
                    </span>
                  ))}
                </div>
              )}

              {/* Acciones */}
              <div style={{ display: "flex", gap: 12 }}>
                {c.credentialUrl && (
                  <a
                    className="btn btn-outlined"
                    href={c.credentialUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <ExternalLink size={16} /> Ver credencial
                  </a>
                )}
                {c.credentialId && (
                  <span className="chip" title="ID de credencial">
                    ID: {c.credentialId}
                  </span>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {openIdx !== null && filtered[openIdx] && (
        <Lightbox
          cert={filtered[openIdx]}
          onClose={() => setOpenIdx(null)}
          onPrev={() =>
            setOpenIdx((i) => (i - 1 + filtered.length) % filtered.length)
          }
          onNext={() => setOpenIdx((i) => (i + 1) % filtered.length)}
        />
      )}
    </section>
  );
}

/* ——— Lightbox accesible ——— */
function Lightbox({ cert, onClose, onPrev, onNext }) {
  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Certificado: ${cert.title}`}
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,.6)",
        display: "grid",
        placeItems: "center",
        zIndex: 100,
      }}
    >
      <div
        className="card"
        onClick={(e) => e.stopPropagation()}
        style={{
          width: "min(920px, 92vw)",
          maxHeight: "90vh",
          overflow: "auto",
          padding: 16,
          display: "grid",
          gap: 12,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 12,
          }}
        >
          <div>
            <div style={{ fontSize: 18, fontWeight: 800 }}>{cert.title}</div>
            <div style={{ fontSize: 12, color: "var(--on-surface-variant)" }}>
              {cert.issuer}
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Cerrar"
            className="btn btn-outlined"
            style={{ height: 36 }}
          >
            <X size={16} /> Cerrar
          </button>
        </div>

        <div
          style={{
            borderRadius: 12,
            overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          {cert.image ? (
            <img
              src={cert.image}
              alt={`Certificado ${cert.title}`}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                maxHeight: "65vh",
                display: "block",
              }}
            />
          ) : (
            <div
              style={{
                display: "grid",
                placeItems: "center",
                height: "50vh",
                background:
                  "linear-gradient(135deg, var(--md-sys-color-primary-container), color-mix(in srgb, var(--md-sys-color-primary) 35%, black))",
                color: "var(--on-primary-container)",
                fontWeight: 800,
              }}
            >
              {cert.title}
            </div>
          )}
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 12,
            flexWrap: "wrap",
          }}
        >
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {cert.tags?.map((t) => (
              <span key={t} className="chip">
                {t}
              </span>
            ))}
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            <button
              onClick={onPrev}
              className="btn btn-outlined"
              aria-label="Anterior"
            >
              ‹ Anterior
            </button>
            <button
              onClick={onNext}
              className="btn btn-filled"
              aria-label="Siguiente"
            >
              Siguiente ›
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
