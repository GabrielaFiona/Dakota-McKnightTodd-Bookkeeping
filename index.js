document.getElementById("year").textContent = new Date().getFullYear();
/* Google Fonts */
@import url("https://fonts.googleapis.com/css2?family=Bodoni+Moda:wght@500;700&family=Cormorant+Garamond:wght@400;600&family=Lora:wght@400;600&display=swap");

/* Brand */
:root {
  --blue-900:#323C54;
  --blue-300:#8190BE;
  --gold:#C99B41;
  --gray-50:#F1F3F4;
}

* {
  box-sizing:border-box;
  margin:0;
  padding:0;
}

body {
  font-family:"Lora",serif;
  background:var(--blue-900);
  color:#222;
  line-height:1.6;
}

/* Layout */
.container {
  max-width:1100px;
  margin:0 auto;
  padding:0 20px;
}
.section {
  padding:72px 0;
}
.split {
  display:grid;
  gap:28px;
}

@media (min-width:880px) {
  .split {
    grid-template-columns:1.2fr .8fr;
  }
}

/* Type */
h1,
h2,
h3 {
  font-family:"Bodoni Moda",serif;
  line-height:1.15;
}
h1 {
  font-size:clamp(40px,5vw,56px);
  margin-bottom:12px;
  color:#fff;
}
h2 {
  font-size:clamp(28px,3.5vw,36px);
  margin-bottom:10px;
  color:#1b2439;
}
h3 {
  font-size:clamp(20px,2.5vw,24px);
  margin-bottom:8px;
}

.lead {
  font-size:1.125rem;
  color:#dbe3ff;
}

.muted {
  color:#4a5167;
}

.accent-line {
  width:80px;
  height:3px;
  background:var(--gold);
  margin:14px 0 24px;
}

/* Buttons */
.btn {
  display:inline-block;
  padding:12px 18px;
  border-radius:8px;
  text-decoration:none;
  font-weight:700;
  transition:.2s;
}
.btn-gold {
  background:var(--gold);
  color:#1b2439;
}
.btn-gold:hover {
  filter:brightness(.96);
}
.btn-ghost {
  background:transparent;
  color:#fff;
  border:2px solid #fff;
}
.btn-ghost:hover {
  background:rgba(255,255,255,.1);
}

/* Hero */
.hero {
  color:#fff;
  padding:72px 0 48px;
  border-bottom:1px solid rgba(255,255,255,.1);
}
.hero .cta-row {
  display:flex;
  gap:14px;
  flex-wrap:wrap;
  margin-top:18px;
}

/* KPI tiles (clickable) */
.kpis {
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(140px,1fr));
  gap:12px;
  margin-top:30px;
}

.kpi {
  display:block;
  text-decoration:none;
  background:rgba(255,255,255,.08);
  border:1px solid rgba(255,255,255,.15);
  border-radius:8px;
  padding:16px;
  text-align:center;
  color:#e8edff;
  transition:transform .15s ease,
             background .15s ease,
             border-color .15s ease;
  cursor:pointer;
}

.kpi strong {
  display:block;
  font-size:22px;
  color:#fff;
}

.kpi:hover {
  transform:translateY(-1px);
  background:rgba(255,255,255,.12);
  border-color:rgba(255,255,255,.25);
}

/* Cards */
.card {
  background:var(--gray-50);
  border-radius:10px;
  padding:24px;
  box-shadow:0 6px 20px rgba(0,0,0,.08);
}

.check {
  list-style:none;
  margin:0;
  padding:0;
}
.check li {
  position:relative;
  padding-left:26px;
  margin:8px 0;
  color:#2c354d;
}
.check li::before {
  content:"✓";
  position:absolute;
  left:0;
  top:0;
  color:var(--gold);
  font-weight:700;
}

/* Utility */
.text-on-dark {
  color:#e8edff;
}

.btn-row {
  display:flex;
  gap:10px;
  flex-wrap:wrap;
  justify-content:center;
  margin-top:12px;
}

/* FOOTER — Clean, centered, one column, white text */
.footer {
  background:var(--blue-900);
  border-top:1px solid rgba(255,255,255,.08);
  padding:80px 0;
  text-align:center;
  color:#ffffff;
}

/* Wrapper: always stacked & centered */
.footer .wrap {
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  gap:24px;
  text-align:center;
}

/* Logo / brand area */
.brand-inline {
  display:flex;
  align-items:center;
  justify-content:center;
  gap:10px;
}

.brand-inline img {
  height:40px;
  width:auto;
}

.brand-inline span {
  font-family:"Cormorant Garamond",serif;
  font-weight:600;
  color:#ffffff;
}

/* Links & text */
.footer .links {
  text-align:center;
}

.footer a {
  color:#ffffff;
  text-decoration:none;
}

.footer a:hover {
  opacity:0.85;
}

/* Divider line */
.rule {
  height:1px;
  width:100%;
  max-width:300px;
  margin:12px auto;
  background:rgba(255,255,255,.2);
}

/* Small footer text */
.small {
  font-size:.9rem;
  color:#ffffff;
}

