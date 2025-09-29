
# Portafolio — React puro (npm + webpack + Babel)

Proyecto **sin Next.js, sin Vite y sin Tailwind**. Usa React 18, Webpack y Babel.
Incluye tu landing con Material 3 (tema oscuro), acento `#FF8D41`, gradiente acento→gris y FAB.

## Requisitos
- Node.js 18+

## Instalar y ejecutar
```bash
npm install
npm start
```

Se abrirá el navegador en `http://localhost:5174`. Para producción:
```bash
npm run build
```

## Estructura
```
src/
  index.html
  index.jsx
  App.jsx
  PortfolioLanding.jsx   # landing con tokens M3 y FAB
  styles.css             # estilos globales (layout básico)
webpack.config.js
.babelrc
package.json
```
