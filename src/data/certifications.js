// Puedes poner URLs reales en image (https://...) o dejarla vacía.
// Si no hay imagen, se muestra un placeholder con degradado.

export const certifications = [
  {
    title: "Google UX Design Professional Certificate",
    issuer: "Coursera · Google",
    date: "2025-03-10", // ISO preferible (YYYY-MM-DD)
    credentialId: "ABC-123-UX",
    credentialUrl:
      "https://www.coursera.org/account/accomplishments/certificate/ABC-123",
    image: "", // URL de imagen o vacío
    tags: ["UX", "Investigación", "Prototipado"],
  },
  {
    title: "React Developer",
    issuer: "Meta",
    date: "2024-11-02",
    credentialId: "META-RD-2024",
    credentialUrl: "https://www.credly.com/badges/...",
    image: "",
    tags: ["React", "SPA", "Rendimiento"],
  },
  {
    title: "Web Accessibility Specialist (WAS)",
    issuer: "IAAP",
    date: "2024-05-20",
    credentialId: "IAAP-WAS-5678",
    credentialUrl: "https://www.accessibilityassociation.org/",
    image: "",
    tags: ["A11y", "WCAG", "Auditoría"],
  },
];
