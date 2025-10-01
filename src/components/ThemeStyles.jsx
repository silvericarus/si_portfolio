export default function ThemeStyles() {
  return (
    <style>{`
      :root {
        --md-sys-color-primary: #FF8D41;
        --md-sys-color-on-primary: #1A0E00;
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

      /* Botones / Cards / Chips / Topbar / FAB */
      .btn { height:44px; border-radius:9999px; padding:0 20px; font-weight:600; display:inline-flex; align-items:center; gap:.5rem; border:none; cursor:pointer; }
      .btn-filled { background:var(--md-sys-color-primary); color:var(--md-sys-color-on-primary); box-shadow:0 2px 8px rgba(0,0,0,.35); }
      .btn-filled:hover { filter:brightness(1.05); }
      .btn-outlined { color:var(--on-surface); border:1px solid var(--outline); background:transparent; }
      .btn-outlined:hover { background:color-mix(in srgb, var(--on-surface) 6%, transparent); }

      .card { background:var(--elev-1); border:1px solid rgba(255,255,255,0.06); border-radius:20px; padding:20px; }
      .chip { display:inline-flex; align-items:center; gap:.5rem; border-radius:9999px; border:1px solid var(--outline); padding:.25rem .75rem; background:color-mix(in srgb, var(--surface) 90%, var(--md-sys-color-primary) 10%); color:var(--on-surface-variant); }
      .topbar { position:sticky; top:0; z-index:50; backdrop-filter:blur(8px); background:color-mix(in srgb, var(--surface) 80%, transparent); border-bottom:1px solid rgba(255,255,255,0.06); }
      .fab { position:fixed; right:20px; bottom:calc(20px + env(safe-area-inset-bottom, 0px)); width:56px; height:56px; border-radius:16px; background:var(--md-sys-color-primary); color:var(--md-sys-color-on-primary); display:flex; align-items:center; justify-content:center; box-shadow:0 8px 24px rgba(0,0,0,.35); border:none; }
      .fab:hover { filter:brightness(1.05); }
      .fab:focus-visible { outline:2px solid var(--outline); outline-offset:2px; }
    `}</style>
  );
}
