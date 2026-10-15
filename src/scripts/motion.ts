import { animate, inView, scroll, stagger } from "motion";

const root = document.documentElement;
const motionOk = root.classList.contains("motion-ok");
const ease = [0.16, 1, 0.3, 1] as const;

/* Countdown real hasta la próxima fecha. Corre siempre; el "roll" de los
   dígitos solo con movimiento habilitado. */
function initCountdown() {
  const box = document.querySelector<HTMLElement>("[data-countdown]");
  if (!box) return;
  const target = new Date(box.dataset.countdown!).getTime();
  const els = {
    days: box.querySelector<HTMLElement>('[data-unit="days"]'),
    hours: box.querySelector<HTMLElement>('[data-unit="hours"]'),
    mins: box.querySelector<HTMLElement>('[data-unit="mins"]'),
    secs: box.querySelector<HTMLElement>('[data-unit="secs"]'),
  };

  const tick = () => {
    const diff = Math.max(0, target - Date.now());
    const s = Math.floor(diff / 1000);
    const values = {
      days: Math.floor(s / 86400),
      hours: Math.floor((s % 86400) / 3600),
      mins: Math.floor((s % 3600) / 60),
      secs: s % 60,
    };
    for (const key of Object.keys(values) as (keyof typeof values)[]) {
      const el = els[key];
      if (!el) continue;
      const next = String(values[key]).padStart(2, "0");
      if (el.textContent === next) continue;
      el.textContent = next;
      if (motionOk) animate(el, { y: ["-70%", "0%"], opacity: [0, 1] }, { duration: 0.35, ease });
    }
    return diff > 0;
  };

  if (tick()) {
    const id = setInterval(() => {
      if (!tick()) clearInterval(id);
    }, 1000);
  }
}

/* Header más sólido cuando el hero deja de dominar la pantalla. */
function initHeader() {
  const header = document.querySelector<HTMLElement>("[data-header]");
  const hero = document.querySelector<HTMLElement>("[data-hero]");
  if (!header || !hero) return;
  inView(
    hero,
    () => {
      header.removeAttribute("data-scrolled");
      return () => header.setAttribute("data-scrolled", "");
    },
    { amount: 0.35 },
  );
}

/* Spotlight: el brillo del borde sigue al cursor. Escribe variables CSS
   directo en el elemento, sin re-render. */
function initSpotlight() {
  if (!matchMedia("(hover: hover)").matches) return;
  document.querySelectorAll<HTMLElement>(".spotlight").forEach((card) => {
    card.addEventListener("pointermove", (e) => {
      const r = card.getBoundingClientRect();
      card.style.setProperty("--mx", `${e.clientX - r.left}px`);
      card.style.setProperty("--my", `${e.clientY - r.top}px`);
    });
  });
}

function initMenu() {
  const menu = document.getElementById("mobile-menu");
  menu?.querySelectorAll("[data-close-menu]").forEach((a) => a.addEventListener("click", () => menu.hidePopover()));
}

/* Entrada del hero: el titular sube línea por línea y el resto acompaña. */
function initHeroIntro() {
  animate("[data-hero-line]", { y: ["110%", "0%"] }, { duration: 1.1, delay: stagger(0.12, { startDelay: 0.1 }), ease });
  animate(
    "[data-hero-item]",
    { opacity: [0, 1], y: [24, 0] },
    { duration: 0.9, delay: stagger(0.08, { startDelay: 0.3 }), ease },
  );
}

/* Reveal al hacer scroll: grupos en cascada, elementos sueltos de a uno. */
function initReveals() {
  document.querySelectorAll<HTMLElement>("[data-stagger]").forEach((group) => {
    const items = group.querySelectorAll<HTMLElement>(":scope > [data-reveal]");
    inView(
      group,
      () => {
        animate(items, { opacity: [0, 1], y: [28, 0] }, { duration: 0.8, delay: stagger(0.09), ease });
      },
      { amount: 0.1 },
    );
  });

  document.querySelectorAll<HTMLElement>("[data-reveal]").forEach((el) => {
    if (el.parentElement?.hasAttribute("data-stagger")) return;
    inView(el, () => {
      animate(el, { opacity: [0, 1], y: [28, 0] }, { duration: 0.8, ease });
    }, { amount: 0.25 });
  });

  // Imágenes que se "destapan" de abajo hacia arriba
  const gallery = document.querySelector<HTMLElement>("[data-gallery]");
  if (gallery) {
    inView(
      gallery,
      () => {
        animate(
          gallery.querySelectorAll("[data-reveal-clip]"),
          { clipPath: ["inset(100% 0 0 0)", "inset(0% 0 0 0)"] },
          { duration: 1.1, delay: stagger(0.1), ease },
        );
      },
      { amount: 0.2 },
    );
  }
  document.querySelectorAll<HTMLElement>("[data-reveal-clip]").forEach((el) => {
    if (gallery?.contains(el)) return;
    // Se observa el contenedor: con clip-path al 100% el elemento no tiene
    // área visible y el IntersectionObserver nunca lo detectaría.
    inView(el.parentElement ?? el, () => {
      animate(el, { clipPath: ["inset(100% 0 0 0)", "inset(0% 0 0 0)"] }, { duration: 1.1, delay: 0.1, ease });
    }, { amount: 0.25 });
  });
}

/* Parallax suave de las fotos dentro de su marco. */
function initParallax() {
  document.querySelectorAll<HTMLElement>("[data-parallax]").forEach((el) => {
    const frame = el.parentElement;
    if (!frame) return;
    scroll(animate(el, { y: ["-7%", "7%"] }, { ease: "linear" }), {
      target: frame,
      offset: ["start end", "end start"],
    });
  });
}

/* Cifras que cuentan hacia arriba al entrar en pantalla. */
function initCounters() {
  document.querySelectorAll<HTMLElement>("[data-count-to]").forEach((el) => {
    const to = Number(el.dataset.countTo);
    const decimals = Number(el.dataset.decimals ?? 0);
    const format = (v: number) =>
      decimals > 0 ? v.toFixed(decimals) : Math.round(v).toLocaleString("es-AR");
    el.textContent = format(0);
    inView(el, () => {
      animate(0, to, { duration: 1.6, ease, onUpdate: (v) => (el.textContent = format(v)) });
    }, { amount: 1 });
  });
}

initCountdown();
initHeader();
initSpotlight();
initMenu();

if (motionOk) {
  initHeroIntro();
  initReveals();
  initParallax();
  initCounters();
}

root.classList.add("motion-ready");
