/* ============================
   Config / Data (EDITA AQUÍ)
============================ */
const PROFILE = {
  name: "Aldo",
  email: "aldo.santiago.marquez@outlook.com",
  cvUrl: "AldoSantiago_CV.pdf", 
  githubUser: "Aldous6",
  // Repos que quieres arriba (si existen). Si no, se ignoran.
  githubFeatured: [
    "higgs4mu",
    "facial-emotion-classification-cnn",
    "audio-emotion-clasification-"
  ],
};

const EXPERIENCES = [
  {
    when: "Feb 2024 — Sep 2025",
    role_es: "Machine Learning on Simulation Data — Research Project",
    role_en: "Machine Learning on Simulation Data — Research Project",
    org_es: "BUAP • Puebla, México",
    org_en: "BUAP • Puebla, Mexico",
    bullets_es: [
      "Modelos supervisados sobre datasets de gran escala; pipelines reproducibles.",
      "Feature engineering, métricas (Accuracy, ROC-AUC), tuning y documentación.",
      "Comunicación de supuestos y resultados para colaboración/iteración."
    ],
    bullets_en: [
      "Supervised ML on large-scale datasets; reproducible pipelines.",
      "Feature engineering, metrics (Accuracy, ROC-AUC), tuning, documentation.",
      "Communicated assumptions/results for collaboration and iteration."
    ]
  },
  {
    when: "Jan 2023 — Sep 2025",
    role_es: "Remote Operator — Colaboración científica internacional",
    role_en: "Remote Operator — International scientific collaboration",
    org_es: "Remoto",
    org_en: "Remote",
    bullets_es: [
      "Monitoreo en tiempo real, data quality checks, incident logs.",
      "Coordinación de troubleshooting con equipos distribuidos.",
    ],
    bullets_en: [
      "Real-time monitoring, data quality checks, incident logs.",
      "Coordinated troubleshooting with distributed teams.",
    ]
  }
];

const PROJECTS = [
  {
    id: "cms-higgs-4mu",
    tag: "Physics • Data",
    title_es: "CMS Open Data: Higgs → 4μ",
    title_en: "CMS Open Data: Higgs → 4μ",
    desc_es: "Pipeline reproducible (Docker/CMSSW, ROOT) para reconstrucción y selección de 4 muones.",
    desc_en: "Reproducible pipeline (Docker/CMSSW, ROOT) for 4-muon reconstruction and selection.",
    stacks: ["C++/ROOT", "Docker", "Physics"],
    repo: "https://github.com/Aldous6/higgs4mu",
    live: "#"
  },
  {
    id: "emotion-cnn",
    tag: "ML • CV",
    title_es: "Facial Emotion Recognition (CNN)",
    title_en: "Facial Emotion Recognition (CNN)",
    desc_es: "CNN baseline y mejoras (data aug, balanceo) con métricas y matriz de confusión.",
    desc_en: "CNN baseline + improvements (augmentation, balancing) with metrics and confusion matrix.",
    stacks: ["Python", "Keras", "Computer Vision"],
    repo: "https://github.com/Aldous6/facial-emotion-classification-cnn",
    live: "#"
  },
  {
    id: "tourism-chatbot",
    tag: "NLP • Product",
    title_es: "Chatbot turístico (Datos + UX)",
    title_en: "Tourism chatbot (Data + UX)",
    desc_es: "Motor de respuestas con lógica y slots; enfoque en experiencia conversacional.",
    desc_en: "Response engine with slots/logic; focus on conversational UX.",
    stacks: ["Python", "NLP", "Product"],
    repo: "#",
    live: "#"
  }
];

const SKILLS = [
  { name: "Python", level: 90 },
  { name: "SQL", level: 80 },
  { name: "Machine Learning", level: 85 },
  { name: "Data Pipelines", level: 80 },
  { name: "Docker", level: 75 },
  { name: "C++ / ROOT", level: 70 }
];

const SKILL_DETAILS = {
  "Python": {
    es: {
      what: "Mi lenguaje principal para análisis, automatización y ML.",
      uses: [
        "EDA + limpieza con Pandas/NumPy, validación y chequeos.",
        "Entrenamiento/evaluación (sklearn, TF/Keras).",
        "Scripts reproducibles y notebooks; logging y métricas."
      ],
      pills: ["Pandas", "NumPy", "sklearn", "Keras", "Automation"]
    },
    en: {
      what: "My main language for analysis, automation, and ML.",
      uses: [
        "EDA + cleaning with Pandas/NumPy, validation checks.",
        "Training/evaluation (sklearn, TF/Keras).",
        "Reproducible scripts & notebooks; logging and metrics."
      ],
      pills: ["Pandas", "NumPy", "sklearn", "Keras", "Automation"]
    }
  },

  "SQL": {
    es: {
      what: "Consultas para análisis, métricas y extracción confiable.",
      uses: [
        "SELECT, JOINs simples, agregaciones y filtros.",
        "Construcción de métricas (KPIs) y validación de consistencia.",
        "Soporte para pipelines (inputs limpios y trazables)."
      ],
      pills: ["SELECT", "JOIN", "GROUP BY", "KPIs"]
    },
    en: {
      what: "Queries for analysis, metrics, and reliable extraction.",
      uses: [
        "SELECT, simple JOINs, aggregations and filters.",
        "KPI building and consistency validation.",
        "Pipeline support (clean, traceable inputs)."
      ],
      pills: ["SELECT", "JOIN", "GROUP BY", "KPIs"]
    }
  },

  "Machine Learning": {
    es: {
      what: "Modelado supervisado y evaluación con enfoque práctico.",
      uses: [
        "Diseño de métricas: accuracy, ROC-AUC, F1, confusion matrix.",
        "Validación/overfitting (train/val/test), regularización.",
        "Iteración: features → modelo → evaluación → mejora."
      ],
      pills: ["Classification", "Metrics", "Validation", "Tuning"]
    },
    en: {
      what: "Supervised modeling and evaluation with a practical mindset.",
      uses: [
        "Metrics: accuracy, ROC-AUC, F1, confusion matrix.",
        "Train/val/test validation, regularization.",
        "Iteration loop: features → model → evaluate → improve."
      ],
      pills: ["Classification", "Metrics", "Validation", "Tuning"]
    }
  },

  "Data Pipelines": {
    es: {
      what: "Pipelines reproducibles de datos: de crudo a usable.",
      uses: [
        "ETL/ELT: limpieza, normalización, checks, versionado.",
        "Estructura modular + outputs claros (CSV/JSON/artefactos).",
        "Reproducibilidad (Docker, scripts, documentación)."
      ],
      pills: ["ETL", "Validation", "Reproducibility", "Artifacts"]
    },
    en: {
      what: "Reproducible pipelines: from raw to usable data.",
      uses: [
        "ETL/ELT: cleaning, normalization, checks, versioning.",
        "Modular structure + clear outputs (CSV/JSON/artifacts).",
        "Reproducibility (Docker, scripts, docs)."
      ],
      pills: ["ETL", "Validation", "Reproducibility", "Artifacts"]
    }
  },

  "Docker": {
    es: {
      what: "Entornos reproducibles para correr lo mismo en cualquier máquina.",
      uses: [
        "Contenerización de proyectos (deps fijas, builds consistentes).",
        "Pipelines de análisis (ej. CMSSW/ROOT) sin “it works on my machine”.",
        "Bases para despliegues/servicios cuando aplica."
      ],
      pills: ["Containers", "Reproducibility", "Deploy-ready"]
    },
    en: {
      what: "Reproducible environments so runs are consistent anywhere.",
      uses: [
        "Containerizing projects (fixed deps, consistent builds).",
        "Analysis pipelines (e.g., CMSSW/ROOT) without env issues.",
        "Foundation for deployment/services when needed."
      ],
      pills: ["Containers", "Reproducibility", "Deploy-ready"]
    }
  },

  "C++ / ROOT": {
    es: {
      what: "Análisis científico con alto rendimiento y tooling de HEP.",
      uses: [
        "Selecciones, histogramas, masas invariantes, TLorentzVector.",
        "Lectura/NTuplización, cortes y validaciones.",
        "Resultados reproducibles y comparables en física de partículas."
      ],
      pills: ["ROOT", "Histograms", "TLorentzVector", "HEP"]
    },
    en: {
      what: "High-performance scientific analysis with HEP tooling.",
      uses: [
        "Selections, histograms, invariant masses, TLorentzVector.",
        "Reading/ntupling, cuts and validations.",
        "Reproducible results for particle physics analysis."
      ],
      pills: ["ROOT", "Histograms", "TLorentzVector", "HEP"]
    }
  }
};

/* ============================
   i18n
============================ */
const I18N = {
  es: {
    skip: "Saltar al contenido",
    theme: "Tema",
    cta: "Hablemos",
    nav: { about:"Sobre mí", experience:"Experiencia", projects:"Proyectos", repos:"Repos", skills:"Skills", contact:"Contacto" },
    hero: {
      kicker:"Data Scientist • ML Engineer • Física",
      title:"Construyo productos y análisis de datos\ncon rigor científico y enfoque de negocio.",
      lead:"End-to-end: definición del problema, limpieza y validación, feature engineering, entrenamiento/evaluación, y comunicación clara.",
      btnProjects:"Ver proyectos",
      copy:"Copiar",
      cardTitle:"Resumen",
      cardSub:"Disponible: Puebla / Remoto",
      b1:"✔ Modelos supervisados y NLP",
      b2:"✔ Pipelines reproducibles",
      b3:"✔ Dashboards y reporting",
      b4:"✔ Comunicación técnica/no-técnica",
      k1:"Enfoque", v1:"Impacto + Calidad",
      k2:"Stack",
      k3:"Interés", v3:"Data Products / ML aplicada",
      btnExp:"Ver experiencia",
      btnCv:"Descargar CV"
    },
    about: {
      title:"Sobre mí",
      subtitle:"Mezclo disciplina científica con ejecución práctica: entregables claros, medibles y listos para producción.",
      p1:"Soy físico con experiencia en ciencia de datos. Me gusta construir soluciones end-to-end: desde entender el problema, diseñar métricas y validar datos, hasta iterar modelos y presentar resultados accionables.",
      p2:"También tengo experiencia operando en colaboración científica internacional (monitoreo, data quality, incident logs), lo cual fortalece mi comunicación y trabajo distribuido.",
      highlights:"Highlights",
      h1k:"Fortalezas", h1v:"Estructura, claridad, ownership",
      h2k:"Preferencia", h2v:"Proyectos con impacto medible",
      h3k:"Industria", h3v:"Educación, salud, analítica, IA",
      h4k:"Ubicación", h4v:"MX • Remoto",
      quote:"“El mejor modelo no es el más complejo: es el que se entiende, se mantiene y mejora con datos reales.”"
    },
    exp: { title:"Experiencia", subtitle:"Timeline con foco en resultados y responsabilidades." },
    proj: { title:"Proyectos", subtitle:"Selección de trabajos con enfoque end-to-end." },
    repos: {
      title:"GitHub Repositories",
      subtitle:"Repos públicos (búsqueda, orden y carga automática).",
      more:"Ver más",
      searchPh:"Buscar repos…",
      loading:"Cargando repos…",
      error:"No se pudo cargar (rate limit). Intenta más tarde.",
      empty:"Sin resultados."
    },
    skills: { title:"Skills", subtitle:"Tecnologías y fortalezas clave." },
    contact: {
      title:"Contacto",
      subtitle:"¿Quieres colaborar o agendar una entrevista? Escríbeme.",
      fast:"Rápido",
      note:"Tip: si no recibes respuesta en 24–48h, reintenta por LinkedIn. Siempre reviso bandeja de entrada! :)",
      formTitle:"Mensaje",
      name:"Nombre",
      msg:"Mensaje",
      send:"Enviar",
      disclaimer:"Este formulario abre tu cliente de correo (no almaceno datos aquí)."
    }
  },
  en: {
    skip: "Skip to content",
    theme: "Theme",
    cta: "Let’s talk",
    nav: { about:"About", experience:"Experience", projects:"Projects", repos:"Repos", skills:"Skills", contact:"Contact" },
    hero: {
      kicker:"Data Scientist • ML Engineer • Physics",
      title:"I build data products and analyses\nwith scientific rigor and business focus.",
      lead:"End-to-end: problem framing, data validation, feature engineering, training/evaluation, and clear communication.",
      btnProjects:"View projects",
      copy:"Copy",
      cardTitle:"Snapshot",
      cardSub:"Available: Puebla / Remote",
      b1:"✔ Supervised ML & NLP",
      b2:"✔ Reproducible pipelines",
      b3:"✔ Dashboards & reporting",
      b4:"✔ Technical & non-technical comms",
      k1:"Focus", v1:"Impact + Quality",
      k2:"Stack",
      k3:"Interest", v3:"Data Products / Applied ML",
      btnExp:"See experience",
      btnCv:"Download CV"
    },
    about: {
      title:"About",
      subtitle:"I combine scientific discipline with practical execution: clear, measurable deliverables ready for production.",
      p1:"I’m a physicist with hands-on data science experience. I like building end-to-end solutions: from problem framing and metric design to data validation, model iteration, and actionable insights.",
      p2:"I also worked in international scientific operations (monitoring, data quality, incident logs), strengthening distributed collaboration and communication.",
      highlights:"Highlights",
      h1k:"Strengths", h1v:"Structure, clarity, ownership",
      h2k:"Preference", h2v:"Measurable impact projects",
      h3k:"Industry", h3v:"Education, health, analytics, AI",
      h4k:"Location", h4v:"MX • Remote",
      quote:"“The best model isn’t the most complex; it’s the one you can understand, maintain, and improve with real data.”"
    },
    exp: { title:"Experience", subtitle:"A timeline focused on outcomes and responsibilities." },
    proj: { title:"Projects", subtitle:"Selected work with an end-to-end mindset." },
    repos: {
      title:"GitHub Repositories",
      subtitle:"Public repos (search, sort, auto-load).",
      more:"Show more",
      searchPh:"Search repos…",
      loading:"Loading repos…",
      error:"Could not load (rate limit). Try later.",
      empty:"No results."
    },
    skills: { title:"Skills", subtitle:"Core technologies and strengths." },
    contact: {
      title:"Contact",
      subtitle:"Want to collaborate or schedule an interview? Message me.",
      fast:"Fast",
      note:"Tip: if you don’t hear back in 24–48h, ping me on LinkedIn. I always check inbox 🙂",
      formTitle:"Message",
      name:"Name",
      msg:"Message",
      send:"Send",
      disclaimer:"This opens your email client (no data stored here)."
    }
  }
};

/* ============================
   Helpers
============================ */
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

function toast(msg){
  const t = $("#toast");
  if(!t) return;
  t.textContent = msg;
  t.classList.add("is-on");
  clearTimeout(toast._t);
  toast._t = setTimeout(()=> t.classList.remove("is-on"), 2200);
}

function setCSSSpotlight(x, y){
  document.documentElement.style.setProperty("--x", `${x}px`);
  document.documentElement.style.setProperty("--y", `${y}px`);
}

function escapeHtml(s){
  return String(s)
    .replaceAll("&","&amp;")
    .replaceAll("<","&lt;")
    .replaceAll(">","&gt;")
    .replaceAll('"',"&quot;")
    .replaceAll("'","&#039;");
}

/* ============================
   Theme (lamp + fallback button)
============================ */
function initTheme(){
  const saved = localStorage.getItem("theme");
  const prefersLight = window.matchMedia?.("(prefers-color-scheme: light)")?.matches;
  const theme = saved || (prefersLight ? "light" : "dark");
  document.documentElement.dataset.theme = theme;

  // sync aria-pressed on lamp if exists
  const lamp = $("#lampToggle");
  if(lamp) lamp.setAttribute("aria-pressed", String(theme === "light"));
}

function flashThemeRipple(fromEl){
  const ripple = $("#themeRipple");
  if(!ripple || !fromEl) return;

  const r = fromEl.getBoundingClientRect();
  const x = ((r.left + r.width / 2) / window.innerWidth) * 100;
  const y = ((r.top + r.height / 2) / window.innerHeight) * 100;
  ripple.style.setProperty("--rx", `${x}%`);
  ripple.style.setProperty("--ry", `${y}%`);

  ripple.classList.add("is-on");
  setTimeout(()=> ripple.classList.remove("is-on"), 220);
}

function toggleTheme(fromEl){
  const current = document.documentElement.dataset.theme || "dark";
  const next = current === "dark" ? "light" : "dark";

  flashThemeRipple(fromEl);

  document.documentElement.dataset.theme = next;
  localStorage.setItem("theme", next);

  const lamp = $("#lampToggle");
  if(lamp) lamp.setAttribute("aria-pressed", String(next === "light"));

  toast(next === "dark"
    ? (LANG === "es" ? "Modo oscuro" : "Dark mode")
    : (LANG === "es" ? "Modo claro" : "Light mode")
  );
}

function initThemeControls(){
  // New lamp
  $("#lampToggle")?.addEventListener("click", (e)=> toggleTheme(e.currentTarget));

  // Backward compatible: old chip
  $("#themeToggle")?.addEventListener("click", (e)=> toggleTheme(e.currentTarget));
}

/* ============================
   Language
============================ */
let LANG = localStorage.getItem("lang") || "es";

function t(key){
  const parts = key.split(".");
  let node = I18N[LANG];
  for(const p of parts){
    node = node?.[p];
  }
  return (typeof node === "string") ? node : null;
}

function applyI18n(){
  document.documentElement.lang = LANG;

  $$("[data-i18n]").forEach(el=>{
    const k = el.getAttribute("data-i18n");
    const v = t(k);
    if(!v) return;

    // Soporta saltos de línea seguros: "\n" -> <br>
    if(v.includes("\n")){
      el.innerHTML = escapeHtml(v).replaceAll("\n", "<br />");
    }else{
      el.textContent = v;
    }
  });

  $("#langLabel") && ($("#langLabel").textContent = LANG.toUpperCase());
  localStorage.setItem("lang", LANG);

  // placeholders dinámicos (no están en data-i18n)
  const repoSearch = $("#repoSearch");
  if(repoSearch) repoSearch.placeholder = I18N[LANG].repos.searchPh;

  const moreBtn = $("#reposMore");
  if(moreBtn) moreBtn.textContent = I18N[LANG].repos.more;

  renderTimeline();
  renderProjects();
  renderSkills();
  renderRepos(); // re-render por si cambian labels
}

function toggleLang(){
  LANG = (LANG === "es") ? "en" : "es";
  toast(LANG === "es" ? "Idioma: Español" : "Language: English");
  applyI18n();
}

/* ============================
   Scroll progress + scrollspy
============================ */
function initScrollProgress(){
  const bar = $("#scrollbarBar");
  if(!bar) return;

  const onScroll = ()=>{
    const doc = document.documentElement;
    const max = doc.scrollHeight - doc.clientHeight;
    const p = max > 0 ? (doc.scrollTop / max) : 0;
    bar.style.width = `${Math.min(100, Math.max(0, p*100))}%`;
  };
  window.addEventListener("scroll", onScroll, { passive:true });
  onScroll();
}

function initScrollSpy(){
  const links = $$(".nav__link[data-section]");
  const sections = links
    .map(a => document.getElementById(a.dataset.section))
    .filter(Boolean);

  if(!sections.length) return;

  const obs = new IntersectionObserver((entries)=>{
    const visible = entries
      .filter(e => e.isIntersecting)
      .sort((a,b) => b.intersectionRatio - a.intersectionRatio)[0];
    if(!visible) return;

    const id = visible.target.id;
    links.forEach(a => a.classList.toggle("is-active", a.dataset.section === id));
  }, { threshold:[0.15, 0.3, 0.55], rootMargin:"-20% 0px -55% 0px" });

  sections.forEach(s => obs.observe(s));
}

function initSmoothNav(){
  $$(".nav__link[href^='#']").forEach(a=>{
    a.addEventListener("click", (e)=>{
      const id = a.getAttribute("href");
      const target = document.querySelector(id);
      if(!target) return;
      e.preventDefault();

      closeMobileNav();

      const top = target.getBoundingClientRect().top + window.scrollY - (getHeaderH() - 6);
      window.scrollTo({ top, behavior: "smooth" });
    });
  });
}

function getHeaderH(){
  const h = getComputedStyle(document.documentElement).getPropertyValue("--headerH");
  const n = parseFloat(h);
  return Number.isFinite(n) ? n : 74;
}

/* ============================
   Mobile nav
============================ */
function openMobileNav(){
  const menu = $("#navMenu");
  const btn = $("#navToggle");
  if(!menu || !btn) return;

  menu.classList.add("is-open");
  btn.setAttribute("aria-expanded", "true");
  btn.setAttribute("aria-label", LANG === "es" ? "Cerrar menú" : "Close menu");
}
function closeMobileNav(){
  const menu = $("#navMenu");
  const btn = $("#navToggle");
  if(!menu || !btn) return;

  menu.classList.remove("is-open");
  btn.setAttribute("aria-expanded", "false");
  btn.setAttribute("aria-label", LANG === "es" ? "Abrir menú" : "Open menu");
}
function initMobileNav(){
  const btn = $("#navToggle");
  const menu = $("#navMenu");
  if(!btn || !menu) return;

  btn.addEventListener("click", ()=>{
    menu.classList.contains("is-open") ? closeMobileNav() : openMobileNav();
  });

  document.addEventListener("click", (e)=>{
    if(!menu.classList.contains("is-open")) return;
    if(menu.contains(e.target) || btn.contains(e.target)) return;
    closeMobileNav();
  });

  window.addEventListener("resize", ()=>{
    if(window.innerWidth > 760) closeMobileNav();
  });
}

/* ============================
   Reveal animations
============================ */
function initReveal(){
  const els = $$(".reveal");
  if(!els.length) return;

  const obs = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(e.isIntersecting){
        e.target.classList.add("is-in");
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.15 });

  els.forEach(el=> obs.observe(el));
}

/* ============================
   Render: Timeline
============================ */
function renderTimeline(){
  const root = $("#timeline");
  if(!root) return;

  root.innerHTML = EXPERIENCES.map(x=>{
    const role = (LANG === "es") ? x.role_es : x.role_en;
    const org  = (LANG === "es") ? x.org_es  : x.org_en;
    const bullets = (LANG === "es") ? x.bullets_es : x.bullets_en;

    const li = bullets.map(b=> `<li>${escapeHtml(b)}</li>`).join("");
    return `
      <article class="titem">
        <div class="titem__when">${escapeHtml(x.when)}</div>
        <div>
          <h3 class="titem__role">${escapeHtml(role)}</h3>
          <p class="titem__org">${escapeHtml(org)}</p>
          <ul class="titem__bullets">${li}</ul>
        </div>
      </article>
    `;
  }).join("");
}

/* ============================
   Render: Projects (filters + modal)
============================ */
const FILTERS = ["All", "ML", "NLP", "Physics", "Product", "CV"];
let activeFilter = "All";
let searchTerm = "";

function projectCategory(p){
  const s = (p.stacks || []).join(" ").toLowerCase();
  const tag = (p.tag || "").toLowerCase();
  if(s.includes("nlp") || tag.includes("nlp")) return "NLP";
  if(s.includes("physics") || tag.includes("physics")) return "Physics";
  if(s.includes("product") || tag.includes("product")) return "Product";
  if(s.includes("keras") || s.includes("pytorch") || tag.includes("ml")) return "ML";
  if(tag.includes("cv")) return "CV";
  return "All";
}

function renderFilters(){
  const root = $("#projectFilters");
  if(!root) return;

  const labels = {
    es: { All:"Todos", ML:"ML", NLP:"NLP", Physics:"Física", Product:"Producto", CV:"CV" },
    en: { All:"All",   ML:"ML", NLP:"NLP", Physics:"Physics", Product:"Product", CV:"CV" },
  };

  root.innerHTML = FILTERS.map(f=>{
    const txt = labels[LANG][f] || f;
    const on = (activeFilter === f) ? "is-on" : "";
    return `<button class="chipFilter ${on}" type="button" data-filter="${f}">${txt}</button>`;
  }).join("");

  $$(".chipFilter", root).forEach(btn=>{
    btn.addEventListener("click", ()=>{
      activeFilter = btn.dataset.filter;
      renderProjects();
      renderFilters();
    });
  });
}

function renderProjects(){
  renderFilters();

  const grid = $("#projectGrid");
  if(!grid) return;

  const normalized = (s) => String(s || "").toLowerCase();
  const list = PROJECTS
    .map(p => ({...p, cat: projectCategory(p)}))
    .filter(p => activeFilter === "All" ? true : p.cat === activeFilter)
    .filter(p => {
      if(!searchTerm) return true;
      const title = (LANG === "es") ? p.title_es : p.title_en;
      const desc  = (LANG === "es") ? p.desc_es  : p.desc_en;
      return normalized(title).includes(searchTerm) ||
             normalized(desc).includes(searchTerm) ||
             normalized(p.tag).includes(searchTerm);
    });

  grid.innerHTML = list.map(p=>{
    const title = (LANG === "es") ? p.title_es : p.title_en;
    const desc  = (LANG === "es") ? p.desc_es  : p.desc_en;
    const pills = (p.stacks || []).slice(0,3).map(s=>`<span class="pillMini">${escapeHtml(s)}</span>`).join("");
    return `
      <article class="pcard" tabindex="0" role="button" aria-label="Abrir ${escapeHtml(title)}" data-pid="${p.id}">
        <div class="pcard__tag">${escapeHtml(p.tag)} • ${escapeHtml(p.cat)}</div>
        <h3 class="pcard__title">${escapeHtml(title)}</h3>
        <p class="pcard__desc">${escapeHtml(desc)}</p>
        <div class="pcard__meta">${pills}</div>
      </article>
    `;
  }).join("");

  $$(".pcard", grid).forEach(card=>{
    const open = ()=> openProject(card.dataset.pid);
    card.addEventListener("click", open);
    card.addEventListener("keydown", (e)=>{
      if(e.key === "Enter" || e.key === " "){
        e.preventDefault();
        open();
      }
    });
  });
}

function openProject(id){
  const p = PROJECTS.find(x=> x.id === id);
  if(!p) return;

  const title = (LANG === "es") ? p.title_es : p.title_en;
  const desc  = (LANG === "es") ? p.desc_es  : p.desc_en;

  $("#modalTag") && ($("#modalTag").textContent = p.tag);
  $("#modalTitle") && ($("#modalTitle").textContent = title);
  $("#modalDesc") && ($("#modalDesc").textContent = desc);

  const pills = (p.stacks || []).map(s=>`<span class="pill__item">${escapeHtml(s)}</span>`).join("");
  $("#modalPills") && ($("#modalPills").innerHTML = pills);

  const repo = $("#modalRepo");
  const live = $("#modalLive");
  if(repo){
    repo.href = p.repo || "#";
    repo.style.display = p.repo && p.repo !== "#" ? "inline-flex" : "none";
  }
  if(live){
    live.href = p.live || "#";
    live.style.display = p.live && p.live !== "#" ? "inline-flex" : "none";
  }

  openModal();
}

function openSkill(name){
  const info = SKILL_DETAILS?.[name]?.[LANG] || SKILL_DETAILS?.[name]?.es;
  const tag = (LANG === "es") ? "Habilidad" : "Skill";

  const mTag = $("#modalTag");
  const mTitle = $("#modalTitle");
  const mDesc = $("#modalDesc");
  const mPills = $("#modalPills");

  if(mTag) mTag.textContent = tag;
  if(mTitle) mTitle.textContent = name;

  if(mDesc){
    const what = escapeHtml(info?.what || (LANG === "es" ? "Detalle no disponible." : "No details available."));
    const uses = (info?.uses || []).map(u => `<li>${escapeHtml(u)}</li>`).join("");
    mDesc.innerHTML = `
      <p class="muted" style="margin:0 0 10px; line-height:1.6">${what}</p>
      ${uses ? `<ul class="titem__bullets" style="margin:0; padding-left:18px">${uses}</ul>` : ""}
    `;
  }

  if(mPills){
    const pills = (info?.pills || []).map(p => `<span class="pill__item">${escapeHtml(p)}</span>`).join("");
    mPills.innerHTML = pills;
  }

  // esconder botones Repo/Demo en modo skill
  const repo = $("#modalRepo");
  const live = $("#modalLive");
  if(repo) repo.style.display = "none";
  if(live) live.style.display = "none";

  openModal();
}


function openModal(){
  const m = $("#modal");
  if(!m) return;

  m.classList.add("is-open");
  m.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";

  // focus close button (no el backdrop)
  const closeBtn = m.querySelector("button.iconBtn[data-close]") || m.querySelector("button.iconBtn");
  closeBtn?.focus?.();
}

function closeModal(){
  const m = $("#modal");
  if(!m) return;

  m.classList.remove("is-open");
  m.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

function initModal(){
  const m = $("#modal");
  if(!m) return;

  m.addEventListener("click", (e)=>{
    const hit = e.target?.closest?.("[data-close]");
    if(hit) closeModal();
  });

  document.addEventListener("keydown", (e)=>{
    if(e.key === "Escape" && m.classList.contains("is-open")) closeModal();
  });
}

/* ============================
   Render: Skills (animates meter on view)
============================ */
function renderSkills(){
  const root = $("#skillsGrid");
  if(!root) return;

  root.innerHTML = SKILLS.map(s=>`
    <div class="sbox" role="button" tabindex="0" data-skill="${escapeHtml(s.name)}" aria-label="Abrir detalle de ${escapeHtml(s.name)}">
      <div class="sbox__top">
        <p class="sbox__name">${escapeHtml(s.name)}</p>
        <span class="sbox__lvl">${s.level}%</span>
      </div>
      <div class="meter" aria-label="${escapeHtml(s.name)} level">
        <div class="meter__bar" data-level="${s.level}"></div>
      </div>
    </div>
  `).join("");

  // animar barras cuando entren
  const bars = $$(".meter__bar", root);
  const obs = new IntersectionObserver((entries)=>{
    entries.forEach(e=>{
      if(e.isIntersecting){
        const bar = e.target;
        const lvl = Math.max(0, Math.min(100, Number(bar.dataset.level || 0)));
        requestAnimationFrame(()=>{ bar.style.width = `${lvl}%`; });
        obs.unobserve(bar);
      }
    });
  }, { threshold: 0.25 });
  bars.forEach(b=> obs.observe(b));

  // click/enter abre modal
  $$(".sbox", root).forEach(box=>{
    const name = box.dataset.skill;
    const open = ()=> openSkill(name);
    box.addEventListener("click", open);
    box.addEventListener("keydown", (e)=>{
      if(e.key === "Enter" || e.key === " "){
        e.preventDefault();
        open();
      }
    });
  });
}


/* ============================
   GitHub Repos (auto)
============================ */
let REPOS_ALL = [];
let REPOS_VISIBLE = 6;
let repoSearchTerm = "";
let repoSortMode = "pushed";
let reposLoaded = false;

function fmtDate(iso){
  try{
    return new Date(iso).toLocaleDateString(undefined, {year:"numeric", month:"short", day:"2-digit"});
  }catch{
    return "";
  }
}

function scoreRepo(r){
  // Featured arriba + reciente + estrellas
  const featured = PROFILE.githubFeatured.includes(r.name) ? 100000 : 0;
  const days = (Date.now() - new Date(r.pushed_at)) / 86400000;
  const recency = Math.max(0, 90 - days);
  return featured + (r.stargazers_count || 0) * 8 + recency;
}

async function loadRepos(){
  const grid = $("#reposGrid");
  if(!grid) return;

  grid.innerHTML = `<div class="pcard" style="cursor:default">
    <div class="pcard__tag">GitHub</div>
    <h3 class="pcard__title">${escapeHtml(I18N[LANG].repos.loading)}</h3>
    <p class="pcard__desc muted">github.com/${escapeHtml(PROFILE.githubUser)}</p>
  </div>`;

  try{
    const res = await fetch(`https://api.github.com/users/${encodeURIComponent(PROFILE.githubUser)}/repos?per_page=100&sort=pushed`, {
      headers: { "Accept": "application/vnd.github+json" }
    });

    if(!res.ok){
      throw new Error("GitHub API error");
    }

    const data = await res.json();
    // filtrar forks y archived, y ordenar por score por defecto
    REPOS_ALL = (data || [])
      .filter(r => !r.fork && !r.archived)
      .sort((a,b) => scoreRepo(b) - scoreRepo(a));

    reposLoaded = true;
    renderRepos();
  }catch{
    grid.innerHTML = `<div class="pcard" style="cursor:default">
      <div class="pcard__tag">GitHub</div>
      <h3 class="pcard__title">${escapeHtml(I18N[LANG].repos.error)}</h3>
      <p class="pcard__desc muted">Tip: GitHub limita requests si recargas mucho.</p>
    </div>`;
  }
}

function applyRepoFilters(){
  let list = [...REPOS_ALL];

  // search
  const term = repoSearchTerm;
  if(term){
    list = list.filter(r => {
      const hay = `${r.name || ""} ${r.description || ""} ${r.language || ""}`.toLowerCase();
      return hay.includes(term);
    });
  }

  // sort
  if(repoSortMode === "name"){
    list.sort((a,b)=> (a.name||"").localeCompare(b.name||""));
  }else if(repoSortMode === "stars"){
    list.sort((a,b)=> (b.stargazers_count||0) - (a.stargazers_count||0));
  }else{
    // pushed
    list.sort((a,b)=> new Date(b.pushed_at) - new Date(a.pushed_at));
  }

  // Featured always first (si existen)
  list.sort((a,b)=>{
    const af = PROFILE.githubFeatured.includes(a.name) ? 1 : 0;
    const bf = PROFILE.githubFeatured.includes(b.name) ? 1 : 0;
    return bf - af;
  });

  return list;
}

function renderRepos(){
  const grid = $("#reposGrid");
  const moreBtn = $("#reposMore");
  if(!grid) return;

  if(!reposLoaded){
    // si aún no cargan, no renderizar vacío
    return;
  }

  const list = applyRepoFilters();
  const slice = list.slice(0, REPOS_VISIBLE);

  if(!slice.length){
    grid.innerHTML = `<div class="pcard" style="cursor:default">
      <div class="pcard__tag">GitHub</div>
      <h3 class="pcard__title">${escapeHtml(I18N[LANG].repos.empty)}</h3>
      <p class="pcard__desc muted">Try another search.</p>
    </div>`;
    if(moreBtn) moreBtn.style.display = "none";
    return;
  }

  grid.innerHTML = slice.map(r=>{
    const featured = PROFILE.githubFeatured.includes(r.name);
    const tag = `GitHub${r.language ? ` • ${r.language}` : ""}${featured ? " • Featured" : ""}`;

    const pills = [
      r.language ? `<span class="pillMini">${escapeHtml(r.language)}</span>` : "",
      `<span class="pillMini">★ ${Number(r.stargazers_count||0)}</span>`,
      `<span class="pillMini">Updated ${escapeHtml(fmtDate(r.pushed_at))}</span>`
    ].filter(Boolean).join("");

    return `
      <article class="pcard" tabindex="0" role="link" aria-label="Open ${escapeHtml(r.name)} on GitHub" data-url="${escapeHtml(r.html_url)}">
        <div class="pcard__tag">${escapeHtml(tag)}</div>
        <h3 class="pcard__title">${escapeHtml(r.name)}</h3>
        <p class="pcard__desc">${escapeHtml(r.description || (LANG === "es" ? "Sin descripción." : "No description."))}</p>
        <div class="pcard__meta">${pills}</div>
      </article>
    `;
  }).join("");

  $$(".pcard", grid).forEach(card=>{
    const url = card.dataset.url;
    const go = ()=> window.open(url, "_blank", "noopener,noreferrer");
    card.addEventListener("click", go);
    card.addEventListener("keydown", (e)=>{
      if(e.key === "Enter" || e.key === " "){
        e.preventDefault();
        go();
      }
    });
  });

  if(moreBtn){
    moreBtn.style.display = list.length > REPOS_VISIBLE ? "inline-flex" : "none";
  }
}

function initReposUI(){
  const search = $("#repoSearch");
  const sort = $("#repoSort");
  const more = $("#reposMore");

  if(search){
    search.addEventListener("input", ()=>{
      repoSearchTerm = search.value.trim().toLowerCase();
      REPOS_VISIBLE = 6;
      renderRepos();
    });
  }

  if(sort){
    sort.addEventListener("change", ()=>{
      repoSortMode = sort.value || "pushed";
      REPOS_VISIBLE = 6;
      renderRepos();
    });
  }

  if(more){
    more.addEventListener("click", ()=>{
      REPOS_VISIBLE += 6;
      renderRepos();
    });
  }
}

/* ============================
   Copy email + Contact form
============================ */
async function copyEmail(){
  try{
    await navigator.clipboard.writeText(PROFILE.email);
    toast(LANG === "es" ? "Email copiado ✅" : "Email copied ✅");
  }catch{
    toast(LANG === "es" ? "No se pudo copiar" : "Could not copy");
  }
}

function initContact(){
  $("#copyEmailBtn")?.addEventListener("click", copyEmail);
  $("#copyEmailBtn2")?.addEventListener("click", copyEmail);

  $("#copyEmailBtn")?.querySelector(".mono")?.replaceChildren(document.createTextNode(PROFILE.email));
  $("#copyEmailBtn2") && ($("#copyEmailBtn2").textContent = PROFILE.email);

  const cv = $("#downloadCv");
  if(cv){
    cv.addEventListener("click", (e)=>{
      if(!PROFILE.cvUrl || PROFILE.cvUrl === "#"){
        e.preventDefault();
        toast(LANG === "es" ? "Pon la URL de tu CV en app.js" : "Set your CV URL in app.js");
      }
    });
    cv.setAttribute("href", PROFILE.cvUrl);
  }

  $("#contactForm")?.addEventListener("submit", (e)=>{
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = String(fd.get("name") || "").trim();
    const email = String(fd.get("email") || "").trim();
    const msg = String(fd.get("message") || "").trim();

    if(!name || !email || !msg){
      toast(LANG === "es" ? "Completa los campos." : "Please complete all fields.");
      return;
    }

    const subject = encodeURIComponent(`CV Contact — ${name}`);
    const body = encodeURIComponent(`From: ${name} <${email}>\n\n${msg}`);
    window.location.href = `mailto:${encodeURIComponent(PROFILE.email)}?subject=${subject}&body=${body}`;
  });
}

/* ============================
   Search + "⌘K" hint
============================ */
function initProjectSearch(){
  const input = $("#projectSearch");
  if(!input) return;

  input.addEventListener("input", ()=>{
    searchTerm = input.value.trim().toLowerCase();
    renderProjects();
  });

  // cmd/ctrl + k => si estás cerca de repos, enfoca repo search; si no, projects
  document.addEventListener("keydown", (e)=>{
    const isMac = navigator.platform.toLowerCase().includes("mac");
    const combo = isMac ? e.metaKey : e.ctrlKey;

    if(combo && e.key.toLowerCase() === "k"){
      e.preventDefault();

      const reposSection = $("#repos");
      const repoInput = $("#repoSearch");

      if(reposSection && repoInput){
        const r = reposSection.getBoundingClientRect();
        const reposVisibleNow = r.top < window.innerHeight * 0.6 && r.bottom > window.innerHeight * 0.2;
        if(reposVisibleNow){
          repoInput.focus();
          return;
        }
      }
      input.focus();
    }
  });
}

/* ============================
   Pointer spotlight
============================ */
function initSpotlight(){
  const move = (e)=> setCSSSpotlight(e.clientX, e.clientY);
  window.addEventListener("pointermove", move, { passive:true });
  setCSSSpotlight(window.innerWidth * 0.55, window.innerHeight * 0.25);
}

    // Preloader: espera a que carguen fuentes/imagenes (más realista en internet lento)
window.addEventListener("load", hidePreloader, { once:true });

// fallback por si "load" tarda demasiado (evita quedarse pegado)
setTimeout(hidePreloader, 2500);
/* ============================
   Init
============================ */
function init(){
    initEntryLanding();

  initTheme();
  applyI18n();

  $("#year") && ($("#year").textContent = String(new Date().getFullYear()));

  initThemeControls();
  $("#langToggle")?.addEventListener("click", toggleLang);

  initMobileNav();
  initSmoothNav();
  initScrollProgress();
  initScrollSpy();
  initReveal();
  initModal();
  initContact();
  initProjectSearch();
  initSpotlight();

  // Repos
  initReposUI();
  loadRepos();
}
function hidePreloader(){
  const p = document.getElementById("preloader");
  if(!p) return;

  // pequeño delay para que se vea “premium”
  setTimeout(()=>{
    p.classList.add("is-done");
    p.setAttribute("aria-hidden", "true");
  }, 200);
}

function initEntryLanding(){
  const entry = document.getElementById("entry");
  if(!entry) return;

  // mostrar solo primera vez (o cuando tú quieras)
  const seen = localStorage.getItem("seenEntry");
  if(seen === "1") return;

  // mostrar después del load (cuando ya quitaste preloader)
  const show = ()=> {
    entry.classList.add("is-on");
    entry.setAttribute("aria-hidden","false");
  };

  // pequeño delay para que se sienta intencional
  window.addEventListener("load", ()=> setTimeout(show, 120), { once:true });

  const close = ()=>{
    entry.classList.remove("is-on");
    entry.setAttribute("aria-hidden","true");
    localStorage.setItem("seenEntry","1");
  };

  entry.addEventListener("click", (e)=>{
    const btn = e.target.closest("[data-entry]");
    if(!btn) return;

    const action = btn.dataset.entry;
    if(action === "cv"){
      close();
      const about = document.getElementById("about") || document.getElementById("main");
      const top = about.getBoundingClientRect().top + window.scrollY - (getHeaderH() - 6);
      window.scrollTo({ top, behavior:"smooth" });
    }else if(action === "projects"){
      close();
      const sec = document.getElementById("projects");
      const top = sec.getBoundingClientRect().top + window.scrollY - (getHeaderH() - 6);
      window.scrollTo({ top, behavior:"smooth" });
    }else{
      close();
    }
  });

  document.addEventListener("keydown", (e)=>{
    if(e.key === "Escape" && entry.classList.contains("is-on")) close();
  });
}



document.addEventListener("DOMContentLoaded", init);
