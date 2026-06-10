/* Pascal Frey — Galerie-Ultramarin
   Motion layer: GSAP + ScrollTrigger. Degrades to static page
   without JS and honours prefers-reduced-motion. */

(function () {
  "use strict";

  var docEl = document.documentElement;
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Header: hairline + hide on scroll down ---------- */

  var header = document.querySelector(".site-header");
  var lastY = 0;

  function onScroll() {
    var y = window.scrollY;
    if (header) {
      header.classList.toggle("is-scrolled", y > 24);
      if (y > 480 && y > lastY + 4) {
        header.classList.add("is-hidden");
      } else if (y < lastY - 4 || y < 480) {
        header.classList.remove("is-hidden");
      }
    }
    lastY = y;
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  if (reduceMotion || typeof gsap === "undefined") {
    // Static fallback: ensure everything is visible.
    docEl.classList.remove("js");
    return;
  }

  gsap.registerPlugin(ScrollTrigger);
  gsap.defaults({ ease: "power3.out" });

  /* ---------- Hero: line-mask reveal ---------- */

  function splitLines(el) {
    // Wrap each visual line for a masked reveal. We split on <br> /
    // explicit .line markers to keep German line breaks intentional.
    var lines = el.querySelectorAll(".line > span");
    return lines.length ? lines : null;
  }

  var heroTitle = document.querySelector("[data-hero-title]");
  var intro = gsap.timeline({ delay: 0.15 });

  if (heroTitle) {
    var spans = splitLines(heroTitle);
    if (spans) {
      gsap.set(spans, { yPercent: 112 });
      intro.to(spans, {
        yPercent: 0,
        duration: 1.3,
        stagger: 0.09,
        ease: "expo.out"
      });
    }
  }

  var heroRest = document.querySelectorAll("[data-hero-fade]");
  if (heroRest.length) {
    gsap.set(heroRest, { opacity: 0, y: 24 });
    intro.to(
      heroRest,
      { opacity: 1, y: 0, duration: 1.1, stagger: 0.1 },
      heroTitle ? "-=0.9" : 0
    );
  }

  var crest = document.querySelector("[data-crest]");
  if (crest) {
    gsap.set(crest, { opacity: 0, scale: 0.94, rotation: -4 });
    intro.to(
      crest,
      { opacity: 1, scale: 1, rotation: 0, duration: 1.4, ease: "expo.out" },
      "-=1.0"
    );
    // Slow drift while scrolling through the hero.
    gsap.to(crest, {
      yPercent: -10,
      rotation: 3,
      ease: "none",
      scrollTrigger: {
        trigger: crest,
        start: "top 80%",
        end: "bottom -40%",
        scrub: 1.2
      }
    });
  }

  /* ---------- Generic reveals ---------- */

  gsap.utils.toArray("[data-reveal]").forEach(function (el) {
    gsap.to(el, {
      opacity: 1,
      y: 0,
      duration: 1.1,
      delay: parseFloat(el.getAttribute("data-reveal-delay") || 0),
      scrollTrigger: { trigger: el, start: "top 86%" }
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
      scrollTrigger: { trigger: canvas, start: "top 84%" }
    });
  });

  /* ---------- Expertise rows: hairline draw ---------- */

  gsap.utils.toArray(".exp-row").forEach(function (row) {
    gsap.from(row, {
      opacity: 0,
      y: 18,
      duration: 0.9,
      scrollTrigger: { trigger: row, start: "top 90%" }
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
      scrollTrigger: { trigger: ".awards", start: "top 82%" }
    });
  }

  /* ---------- Logo grid: quiet fade-in ---------- */

  var logos = gsap.utils.toArray(".logo-grid > div");
  if (logos.length) {
    gsap.from(logos, {
      opacity: 0,
      duration: 0.9,
      stagger: { each: 0.04, from: "start" },
      scrollTrigger: { trigger: ".logo-grid", start: "top 85%" }
    });
  }

  /* ---------- Footer crest parallax ---------- */

  var footCrest = document.querySelector(".site-footer__crest");
  if (footCrest) {
    gsap.from(footCrest, {
      yPercent: 22,
      ease: "none",
      scrollTrigger: {
        trigger: ".site-footer",
        start: "top bottom",
        end: "bottom bottom",
        scrub: 1
      }
    });
  }
})();
