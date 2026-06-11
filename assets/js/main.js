/* Pascal Frey — Studio Ultramarin, Runde 2
   Motion layer: GSAP + ScrollTrigger. Preloader with counting
   weight morph, dark poster hero, scroll-driven variable-font
   wave, floating work previews. Degrades to a static page
   without JS and honours prefers-reduced-motion. */

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
  var darkHero = document.querySelector(".hero");
  var lastY = 0;

  function headerTheme() {
    if (!header || !darkHero) return;
    var invert =
      !document.body.classList.contains("menu-open") &&
      window.scrollY < darkHero.offsetHeight - 56;
    header.classList.toggle("is-inverted", invert);
  }

  function onScroll() {
    var y = window.scrollY;
    if (header) {
      header.classList.toggle("is-scrolled", y > 24);
      if (y > 520 && y > lastY + 4 && !document.body.classList.contains("menu-open")) {
        header.classList.add("is-hidden");
      } else if (y < lastY - 4 || y < 520) {
        header.classList.remove("is-hidden");
      }
      headerTheme();
    }
    lastY = y;
  }

  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", headerTheme, { passive: true });
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
    headerTheme();
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

  var chars = [];

  document.querySelectorAll("[data-kinetic]").forEach(function (el) {
    var text = el.textContent;
    el.textContent = "";
    for (var i = 0; i < text.length; i++) {
      if (text[i] === " ") {
        el.appendChild(document.createTextNode(" "));
        continue;
      }
      var s = document.createElement("span");
      s.className = "ch";
      s.textContent = text[i];
      el.appendChild(s);
      chars.push(s);
    }
  });

  /* ---------- Static fallback ---------- */

  var preloader = document.getElementById("preloader");

  if (reduceMotion || typeof gsap === "undefined") {
    if (preloader) preloader.remove();
    docEl.classList.remove("js");
    return;
  }

  gsap.registerPlugin(ScrollTrigger);
  gsap.defaults({ ease: "power3.out" });

  /* ---------- Entrance choreography (released by the preloader) ---------- */

  var intro = gsap.timeline({ paused: true });

  var rows = document.querySelectorAll(".kinetic .row-inner");
  if (rows.length) {
    intro.fromTo(rows, { y: 0, yPercent: 112 }, {
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

  /* ---------- Preloader: counter with weight morph, curtain lift ---------- */

  var introSeen = false;
  try { introSeen = sessionStorage.getItem("pf-intro-seen") === "1"; } catch (e) {}

  if (preloader && !introSeen) {
    try { sessionStorage.setItem("pf-intro-seen", "1"); } catch (e) {}
    document.body.classList.add("is-loading");

    var countEl = document.getElementById("preCount");
    var countWrap = countEl ? countEl.parentNode : null;
    var barEl = document.getElementById("preBar");
    var count = { v: 0 };

    var boot = gsap.timeline();
    boot.to(count, {
      v: 100,
      duration: 1.5,
      ease: "power2.inOut",
      onUpdate: function () {
        var v = Math.round(count.v);
        if (countEl) countEl.textContent = (v < 10 ? "00" : v < 100 ? "0" : "") + v;
        if (countWrap) countWrap.style.fontVariationSettings = "'wght' " + (250 + count.v * 4.9).toFixed(0);
        if (barEl) barEl.style.transform = "scaleX(" + count.v / 100 + ")";
      }
    });
    boot.to(preloader, {
      yPercent: -100,
      duration: 0.85,
      ease: "expo.inOut",
      onStart: function () { document.body.classList.remove("is-loading"); },
      onComplete: function () { preloader.remove(); }
    }, "+=0.12");
    boot.add(function () { intro.play(); }, "-=0.5");
  } else {
    if (preloader) preloader.remove();
    gsap.delayedCall(0.15, function () { intro.play(); });
  }

  /* ---------- Headline morph: cursor proximity + scroll wave ----------
     One shared weight per char. The scroll wave sets the base weight
     (700 thinning to 290). The cursor adds a bipolar boost on top
     (desktop only): bold core under the pointer, a lighter ring around
     it — so the type breathes in both directions, like the v1 morph.
     The pointer also drags the background field along, slightly. */

  var kinetic = document.querySelector(".kinetic");
  if (kinetic && chars.length) {
    var SPREAD = 0.55;
    var RADIUS = 300;
    var last = Math.max(1, chars.length - 1);
    var state = chars.map(function (el) {
      return { el: el, base: 700, w: 700, tw: 700 };
    });
    var field = document.getElementById("heroField");
    var mx = -9999, my = -9999;
    var fx = 0, fy = 0, tfx = 0, tfy = 0;
    var raf = null, running = false, idleTimer = null, pointerActive = false;

    var render = function () {
      var busy = false;
      for (var i = 0; i < state.length; i++) {
        var c = state[i];
        var boost = 0;
        if (canHover) {
          var r = c.el.getBoundingClientRect();
          var dist = Math.hypot(mx - (r.left + r.width / 2), my - (r.top + r.height / 2));
          var p = Math.max(0, 1 - dist / RADIUS);
          /* bold core (p^2.5) minus lighter ring, peaking at p = 1/3 */
          boost = 200 * Math.pow(p, 2.5) - 1150 * p * (1 - p) * (1 - p);
        }
        c.tw = Math.max(150, Math.min(900, c.base + boost));
        c.w += (c.tw - c.w) * 0.14;
        if (Math.abs(c.tw - c.w) > 0.3) busy = true;
        c.el.style.fontVariationSettings = "'wght' " + c.w.toFixed(1);
      }
      if (field) {
        fx += (tfx - fx) * 0.045;
        fy += (tfy - fy) * 0.045;
        if (Math.abs(tfx - fx) > 0.3 || Math.abs(tfy - fy) > 0.3) busy = true;
        field.style.transform = "translate3d(" + fx.toFixed(1) + "px," + fy.toFixed(1) + "px,0)";
      }
      if (busy || pointerActive) {
        raf = requestAnimationFrame(render);
      } else {
        running = false;
        raf = null;
      }
    };

    var wake = function () {
      if (!running) {
        running = true;
        raf = requestAnimationFrame(render);
      }
    };

    if (canHover) {
      window.addEventListener("pointermove", function (e) {
        mx = e.clientX;
        my = e.clientY;
        tfx = (e.clientX / window.innerWidth - 0.5) * 56;
        tfy = (e.clientY / window.innerHeight - 0.5) * 36;
        pointerActive = true;
        clearTimeout(idleTimer);
        idleTimer = setTimeout(function () { pointerActive = false; }, 120);
        wake();
      }, { passive: true });
    }

    ScrollTrigger.create({
      trigger: ".hero",
      start: "top top",
      end: "+=85%",
      onUpdate: function (self) {
        var p = self.progress;
        for (var i = 0; i < state.length; i++) {
          var local = p * (1 + SPREAD) - (i / last) * SPREAD;
          local = Math.max(0, Math.min(1, local));
          local = local * local * (3 - 2 * local); // smoothstep
          state[i].base = 700 - local * 410;
        }
        kinetic.style.letterSpacing = (-0.048 + p * 0.03).toFixed(4) + "em";
        wake();
      }
    });

    gsap.utils.toArray(".kinetic .row").forEach(function (row, i) {
      gsap.to(row, {
        yPercent: -(8 + i * 9),
        ease: "none",
        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "bottom top",
          scrub: true
        }
      });
    });

    gsap.to(".hero-bg", {
      yPercent: 16,
      ease: "none",
      scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
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
