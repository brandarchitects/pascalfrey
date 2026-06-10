/* Pascal Frey — Studio Ultramarin
   Motion layer: GSAP + ScrollTrigger, kinetic variable-font hero,
   floating work previews. Degrades to a static page without JS
   and honours prefers-reduced-motion. */

(function () {
  "use strict";

  var docEl = document.documentElement;
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var canHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;

  /* ---------- Zürich clock ---------- */

  function tick() {
    var label;
    try {
      label = new Intl.DateTimeFormat("de-CH", {
        hour: "2-digit",
        minute: "2-digit",
        timeZone: "Europe/Zurich"
      }).format(new Date());
    } catch (e) {
      label = "";
    }
    var nav = document.getElementById("navClock");
    var menu = document.getElementById("menuClock");
    if (nav) nav.textContent = label ? "Zürich " + label : "Zürich";
    if (menu) menu.textContent = label || "—:—";
  }
  tick();
  setInterval(tick, 30000);

  /* ---------- Header: hairline + hide on scroll down ---------- */

  var header = document.querySelector(".site-header");
  var lastY = 0;

  function onScroll() {
    var y = window.scrollY;
    if (header) {
      header.classList.toggle("is-scrolled", y > 24);
      if (y > 520 && y > lastY + 4 && !document.body.classList.contains("menu-open")) {
        header.classList.add("is-hidden");
      } else if (y < lastY - 4 || y < 520) {
        header.classList.remove("is-hidden");
      }
    }
    lastY = y;
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* ---------- Mobile menu ---------- */

  var burger = document.getElementById("burger");
  var menu = document.getElementById("mobileMenu");

  function setMenu(open) {
    document.body.classList.toggle("menu-open", open);
    if (burger) {
      burger.setAttribute("aria-expanded", open ? "true" : "false");
      burger.setAttribute("aria-label", open ? "Menü schliessen" : "Menü öffnen");
    }
    if (menu) menu.setAttribute("aria-hidden", open ? "false" : "true");
    if (open) header.classList.remove("is-hidden");
  }

  if (burger && menu) {
    burger.addEventListener("click", function () {
      setMenu(!document.body.classList.contains("menu-open"));
    });
    menu.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () { setMenu(false); });
    });
    window.addEventListener("keydown", function (e) {
      if (e.key === "Escape") setMenu(false);
    });
  }

  /* ---------- Back to top ---------- */

  var toTop = document.getElementById("toTop");
  if (toTop) {
    toTop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
    });
  }

  /* ---------- Kinetic hero: split rows into chars ---------- */

  var BASE_W = 580, BASE_D = 117;
  var chars = [];

  document.querySelectorAll("[data-kinetic]").forEach(function (el) {
    var text = el.textContent;
    el.textContent = "";
    for (var i = 0; i < text.length; i++) {
      var s = document.createElement("span");
      s.className = "ch";
      s.textContent = text[i];
      el.appendChild(s);
      chars.push({ el: s, w: BASE_W, d: BASE_D, tw: BASE_W, td: BASE_D });
    }
  });

  /* Cursor-proximity variable-font morph (desktop only) */
  if (canHover && !reduceMotion && chars.length) {
    var mx = -9999, my = -9999;
    var raf = null, running = false, idleTimer = null, pointerActive = false;
    var RADIUS = 260;

    var morph = function () {
      var busy = false;
      for (var i = 0; i < chars.length; i++) {
        var c = chars[i];
        var r = c.el.getBoundingClientRect();
        var dist = Math.hypot(mx - (r.left + r.width / 2), my - (r.top + r.height / 2));
        var p = Math.max(0, 1 - dist / RADIUS);
        p = p * p * (3 - 2 * p); // smoothstep
        c.tw = BASE_W + p * 320;  // wght 580 -> 900
        c.td = BASE_D - p * 39;   // wdth 117 -> 78
        c.w += (c.tw - c.w) * 0.16;
        c.d += (c.td - c.d) * 0.16;
        if (Math.abs(c.tw - c.w) > 0.3 || Math.abs(c.td - c.d) > 0.1) busy = true;
        c.el.style.fontVariationSettings = "'wght' " + c.w.toFixed(1) + ",'wdth' " + c.d.toFixed(1);
      }
      if (busy || pointerActive) {
        raf = requestAnimationFrame(morph);
      } else {
        running = false;
        raf = null;
      }
    };

    window.addEventListener("pointermove", function (e) {
      mx = e.clientX;
      my = e.clientY;
      pointerActive = true;
      clearTimeout(idleTimer);
      idleTimer = setTimeout(function () { pointerActive = false; }, 120);
      if (!running) {
        running = true;
        raf = requestAnimationFrame(morph);
      }
    }, { passive: true });
  }

  /* ---------- Static fallback ---------- */

  if (reduceMotion || typeof gsap === "undefined") {
    docEl.classList.remove("js");
    return;
  }

  gsap.registerPlugin(ScrollTrigger);
  gsap.defaults({ ease: "power3.out" });

  /* ---------- Entrance choreography ---------- */

  var intro = gsap.timeline({ delay: 0.15 });

  var rows = document.querySelectorAll(".kinetic .row-inner");
  if (rows.length) {
    intro.fromTo(rows, { y: 0, yPercent: 108 }, {
      y: 0,
      yPercent: 0,
      duration: 1.2,
      stagger: 0.12,
      ease: "expo.out"
    });
  }

  var heroRest = document.querySelectorAll("[data-hero-fade]");
  if (heroRest.length) {
    gsap.set(heroRest, { opacity: 0, y: 24 });
    intro.to(
      heroRest,
      { opacity: 1, y: 0, duration: 1.0, stagger: 0.08 },
      rows.length ? "-=0.8" : 0
    );
  }

  /* Hero parallax out while scrolling */
  var kinetic = document.querySelector(".kinetic");
  if (kinetic) {
    gsap.to(kinetic, {
      yPercent: -6,
      opacity: 0.3,
      ease: "none",
      scrollTrigger: {
        trigger: ".hero",
        start: "bottom 90%",
        end: "bottom 35%",
        scrub: true
      }
    });
  }

  /* ---------- Generic reveals ---------- */

  gsap.utils.toArray("[data-reveal]").forEach(function (el) {
    gsap.to(el, {
      opacity: 1,
      y: 0,
      duration: 1.0,
      delay: parseFloat(el.getAttribute("data-reveal-delay") || 0),
      scrollTrigger: { trigger: el, start: "top 88%", once: true }
    });
  });

  /* ---------- Constructivist stand-ins: staggered shape entry ---------- */

  gsap.utils.toArray(".standin").forEach(function (canvas) {
    var shapes = canvas.querySelectorAll("[data-shape]");
    if (!shapes.length) return;
    gsap.set(shapes, { opacity: 0, scale: 0.85, transformOrigin: "50% 50%" });
    gsap.to(shapes, {
      opacity: 1,
      scale: 1,
      duration: 0.9,
      stagger: 0.07,
      ease: "back.out(1.4)",
      scrollTrigger: { trigger: canvas, start: "top 84%", once: true }
    });
  });

  /* ---------- Awards: cascading list ---------- */

  var awards = gsap.utils.toArray(".awards li");
  if (awards.length) {
    gsap.from(awards, {
      opacity: 0,
      y: 16,
      duration: 0.8,
      stagger: 0.06,
      scrollTrigger: { trigger: ".awards", start: "top 82%", once: true }
    });
  }

  /* ---------- Logo grid: quiet fade-in ---------- */

  var logos = gsap.utils.toArray(".logo-grid > div");
  if (logos.length) {
    gsap.from(logos, {
      opacity: 0,
      duration: 0.9,
      stagger: { each: 0.04, from: "start" },
      scrollTrigger: { trigger: ".logo-grid", start: "top 85%", once: true }
    });
  }

  /* ---------- Work list: floating preview (desktop) ---------- */

  var preview = document.getElementById("workPreview");
  var workList = document.getElementById("workList");

  if (canHover && preview && workList) {
    var px = 0, py = 0, tx = 0, ty = 0;
    var prRaf = null, prActive = false;

    var follow = function () {
      px += (tx - px) * 0.12;
      py += (ty - py) * 0.12;
      preview.style.transform =
        "translate(" + (px + 28) + "px," + (py - preview.offsetHeight / 2) + "px)" +
        (prActive ? " scale(1)" : " scale(.94)");
      prRaf = requestAnimationFrame(follow);
    };

    workList.addEventListener("pointermove", function (e) {
      tx = e.clientX;
      ty = e.clientY;
    }, { passive: true });

    workList.querySelectorAll(".work-item").forEach(function (item) {
      item.addEventListener("pointerenter", function (e) {
        var id = item.getAttribute("data-preview");
        preview.querySelectorAll(".pv").forEach(function (p) {
          p.classList.toggle("show", p.getAttribute("data-pv") === id);
        });
        tx = e.clientX;
        ty = e.clientY;
        if (!prActive && px === 0 && py === 0) { px = tx; py = ty; }
        prActive = true;
        preview.classList.add("active");
        if (!prRaf) prRaf = requestAnimationFrame(follow);
      });
    });

    workList.addEventListener("pointerleave", function () {
      prActive = false;
      preview.classList.remove("active");
      setTimeout(function () {
        if (!prActive && prRaf) {
          cancelAnimationFrame(prRaf);
          prRaf = null;
        }
      }, 300);
    });
  }
})();
