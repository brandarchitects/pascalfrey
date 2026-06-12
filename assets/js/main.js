/* Pascal Frey — Studio Ultramarin, Runde 2
   Motion layer: GSAP + ScrollTrigger. Dark poster hero,
   scroll-driven variable-font wave, floating work previews.
   Degrades to a static page without JS and honours
   prefers-reduced-motion. */

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
    var menu = document.getElementById("menuClock");
    if (menu) menu.textContent = label || "—:—";
    document.querySelectorAll("[data-clock]").forEach(function (el) {
      el.textContent = label || "—:—";
    });
  }
  tick();
  setInterval(tick, 30000);

  /* ---------- Header: hairline + hide on scroll down ---------- */

  var header = document.querySelector(".site-header");
  var darkHero = document.querySelector(".hero, [data-dark-page]");
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

  /* ---------- Ambient palette: the two dominant, clearly separated hues
     of an image (saturation-weighted hue histogram) as deep ambient
     HSL tones. Shared by the landing gallery and the depth gallery. */

  function ambientPaletteFrom(imgEl) {
    function toAmbient(r, g, b) {
      r /= 255; g /= 255; b /= 255;
      var max = Math.max(r, g, b), min = Math.min(r, g, b);
      var l = (max + min) / 2, h = 0, sat = 0;
      if (max !== min) {
        var d = max - min;
        sat = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        if (max === r) h = ((g - b) / d + (g < b ? 6 : 0)) / 6;
        else if (max === g) h = ((b - r) / d + 2) / 6;
        else h = ((r - g) / d + 4) / 6;
      }
      sat = Math.min(0.82, Math.max(0.3, sat * 1.6));
      l = Math.min(0.46, Math.max(0.28, l));
      return "hsl(" + Math.round(h * 360) + ", " + Math.round(sat * 100) + "%, " + Math.round(l * 100) + "%)";
    }
    try {
      var S = 32;
      var c = document.createElement("canvas");
      c.width = S; c.height = S;
      var x = c.getContext("2d", { willReadFrequently: true });
      x.drawImage(imgEl, 0, 0, S, S);
      var d = x.getImageData(0, 0, S, S).data;

      var BINS = 12;
      var bins = [];
      for (var bi = 0; bi < BINS; bi++) bins.push({ r: 0, g: 0, b: 0, w: 0 });
      var flat = { r: 0, g: 0, b: 0, n: 0 };

      for (var i = 0; i < S * S; i++) {
        var r = d[i * 4], g = d[i * 4 + 1], b = d[i * 4 + 2];
        flat.r += r; flat.g += g; flat.b += b; flat.n++;
        var max = Math.max(r, g, b), min = Math.min(r, g, b);
        var sat = max === 0 ? 0 : (max - min) / max;
        if (sat < 0.12 || max < 30) continue; /* skip grey + near-black */
        var dlt = max - min, h;
        if (max === r) h = ((g - b) / dlt + (g < b ? 6 : 0)) / 6;
        else if (max === g) h = ((b - r) / dlt + 2) / 6;
        else h = ((r - g) / dlt + 4) / 6;
        var bin = bins[Math.min(BINS - 1, (h * BINS) | 0)];
        bin.r += r * sat; bin.g += g * sat; bin.b += b * sat; bin.w += sat;
      }

      var first = bins[0], fi = 0;
      for (var k = 1; k < BINS; k++) {
        if (bins[k].w > first.w) { first = bins[k]; fi = k; }
      }
      var second = null;
      for (var m = 0; m < BINS; m++) {
        var dist = Math.min(Math.abs(m - fi), BINS - Math.abs(m - fi));
        if (dist < 2) continue; /* must sit clearly apart on the wheel */
        if (!second || bins[m].w > second.w) second = bins[m];
      }

      if (first.w > 6) {
        var c1 = toAmbient(first.r / first.w, first.g / first.w, first.b / first.w);
        var c2;
        if (second && second.w > first.w * 0.12) {
          c2 = toAmbient(second.r / second.w, second.g / second.w, second.b / second.w);
        } else {
          c2 = c1.replace(/(\d+)%\)$/, function (_, l2) {
            return Math.max(18, Math.round(l2 * 0.6)) + "%)";
          });
        }
        return [c1, c2];
      }
      var fc = toAmbient(flat.r / flat.n, flat.g / flat.n, flat.b / flat.n);
      return [fc, fc];
    } catch (e) {
      return null;
    }
  }

  /* ---------- Gallery: the ambient field takes the image's colours ----------
     Samples two zones of the current image (canvas, 32px), boosts them
     to deep ambient tones and feeds them into the blob gradients via
     registered custom properties (--ga/--gb), which transition smoothly.
     Works without GSAP: crossfade and scale are plain CSS transitions. */

  var galleryStage = document.getElementById("galleryStage");
  if (galleryStage) {
    var gSection = document.getElementById("galerie");
    var gFrame = document.getElementById("galleryFrame");
    var gImgs = gFrame.querySelectorAll(".g-img");
    var gCap = document.getElementById("galleryCaption");
    var gCount = document.getElementById("galleryCount");
    var gItems = [];
    document.querySelectorAll("#galleryData li").forEach(function (li) {
      gItems.push({
        src: li.getAttribute("data-src"),
        cap: li.getAttribute("data-caption") || "",
        alt: li.getAttribute("data-alt") || "",
        pal: null
      });
    });

    var gCur = 0, gActive = 0, gBusy = false;

    function gPad(n) { return (n < 10 ? "0" : "") + n; }

    function gApplyPalette(item) {
      if (!item.pal || !gSection) return;
      gSection.style.setProperty("--ga", item.pal[0]);
      gSection.style.setProperty("--gb", item.pal[1]);
    }

    function gShow(i, instant) {
      if (gBusy) return;
      i = (i + gItems.length) % gItems.length;
      var item = gItems[i];
      var next = gImgs[1 - gActive];
      var prev = gImgs[gActive];
      gBusy = true;

      var swap = function () {
        if (item.pal === null) item.pal = ambientPaletteFrom(next);
        gApplyPalette(item);
        next.classList.add("is-active");
        next.removeAttribute("aria-hidden");
        prev.classList.remove("is-active");
        prev.setAttribute("aria-hidden", "true");
        if (gCap) gCap.textContent = item.cap;
        if (gCount) gCount.textContent = gPad(i + 1) + " / " + gPad(gItems.length);
        gActive = 1 - gActive;
        gCur = i;
        /* preload the neighbour */
        var pre = new Image();
        pre.src = gItems[(i + 1) % gItems.length].src;
        setTimeout(function () { gBusy = false; }, instant ? 0 : 500);
      };

      next.alt = item.alt;
      if (next.getAttribute("src") === item.src && next.complete) {
        swap();
      } else {
        next.onload = swap;
        next.onerror = function () { gBusy = false; };
        next.src = item.src;
      }
    }

    var gPrev = document.getElementById("galleryPrev");
    var gNext = document.getElementById("galleryNext");
    if (gPrev) gPrev.addEventListener("click", function () { gShow(gCur - 1); });
    if (gNext) gNext.addEventListener("click", function () { gShow(gCur + 1); });

    /* swipe */
    var gDownX = null;
    gFrame.addEventListener("pointerdown", function (e) { gDownX = e.clientX; }, { passive: true });
    gFrame.addEventListener("pointerup", function (e) {
      if (gDownX === null) return;
      var dx = e.clientX - gDownX;
      gDownX = null;
      if (Math.abs(dx) > 40) gShow(gCur + (dx < 0 ? 1 : -1));
    }, { passive: true });

    /* initial palette once the first image is ready */
    var first = gImgs[0];
    var gInit0 = function () {
      gItems[0].pal = ambientPaletteFrom(first);
      gApplyPalette(gItems[0]);
    };
    if (first.complete && first.naturalWidth) gInit0();
    else first.addEventListener("load", gInit0);
  }

  /* ---------- Depth gallery (/galerie) ----------
     Native scroll drives a camera ride through z-staggered images
     (CSS 3D, no WebGL). The sticky stage stays fixed while the world
     is pushed towards the viewer; scroll velocity tilts the world and
     lifts grain + ambient slightly. Falls back to a static image list
     for reduced motion / no JS. */

  var depthTrack = document.getElementById("depthTrack");
  if (depthTrack) {
    var dStage = document.getElementById("depthStage");
    var dWorld = document.getElementById("depthWorld");
    var dAmbient = document.getElementById("depthAmbient");
    var dGrain = dStage ? dStage.querySelector(".hero-grain") : null;
    var dCap = document.getElementById("depthCaption");
    var dCount = document.getElementById("depthCount");
    var dItems = [];
    dWorld.querySelectorAll(".depth-item").forEach(function (fig) {
      dItems.push({
        el: fig,
        img: fig.querySelector("img"),
        cap: fig.getAttribute("data-caption") || "",
        z: 0,
        pal: null
      });
    });

    if (reduceMotion || dItems.length === 0) {
      depthTrack.classList.add("depth-static");
    } else {
      var GAP = 820;
      var VIEW = 430; /* comfortable viewing distance in front of the camera */
      var D_OFFS = [[-9, -4], [10, 5], [-7, 6], [8, -6], [-10, 2], [9, 4]];
      dItems.forEach(function (it, i) {
        var o = D_OFFS[i % D_OFFS.length];
        it.z = -i * GAP - VIEW;
        it.el.style.transform =
          "translate(-50%, -50%) translate3d(" + o[0] + "vw," + o[1] + "vh," + it.z + "px)";
      });
      depthTrack.style.height = dItems.length * 120 + 40 + "vh";

      var dCam = 0, dCamT = 0, dPrev = 0, dActive = -1;

      var depthScroll = function () {
        var total = depthTrack.offsetHeight - window.innerHeight;
        var top = depthTrack.getBoundingClientRect().top;
        var p = Math.min(1, Math.max(0, -top / Math.max(1, total)));
        dCamT = p * (dItems.length - 1) * GAP;
      };
      window.addEventListener("scroll", depthScroll, { passive: true });
      window.addEventListener("resize", depthScroll, { passive: true });
      depthScroll();

      var dSetPal = function (it) {
        var apply = function () {
          if (!it.pal) it.pal = ambientPaletteFrom(it.img);
          if (it.pal && dStage) {
            dStage.style.setProperty("--ga", it.pal[0]);
            dStage.style.setProperty("--gb", it.pal[1]);
          }
        };
        if (it.img.complete && it.img.naturalWidth) apply();
        else it.img.addEventListener("load", apply, { once: true });
      };

      var dPad = function (n) { return (n < 10 ? "0" : "") + n; };

      var depthFrame = function () {
        dCam += (dCamT - dCam) * 0.075;
        var vel = dCam - dPrev;
        dPrev = dCam;
        var norm = Math.min(1, Math.abs(vel) / 36);

        var tilt = Math.max(-1.6, Math.min(1.6, vel * 0.018));
        dWorld.style.transform = "rotateX(" + (-tilt).toFixed(3) + "deg) translateZ(" + dCam.toFixed(1) + "px)";
        if (dAmbient) dAmbient.style.transform = "scale(" + (1 + norm * 0.07).toFixed(3) + ")";
        if (dGrain) dGrain.style.opacity = (0.3 + norm * 0.2).toFixed(3);

        for (var i = 0; i < dItems.length; i++) {
          var it = dItems[i];
          var ahead = -(it.z + dCam); /* px in front of the camera */
          var o;
          if (ahead < -80) o = 0;
          else if (ahead < 160) o = (ahead + 80) / 240; /* flying past */
          else if (ahead > GAP * 2.3) o = 0;
          else if (ahead > GAP * 1.45) o = 1 - (ahead - GAP * 1.45) / (GAP * 0.85);
          else o = 1;
          it.el.style.opacity = o.toFixed(3);
          it.el.style.visibility = o <= 0.01 ? "hidden" : "visible";
        }

        var idx = Math.max(0, Math.min(dItems.length - 1, Math.round(dCam / GAP)));
        if (idx !== dActive) {
          dActive = idx;
          dSetPal(dItems[idx]);
          if (dCap) dCap.textContent = dItems[idx].cap;
          if (dCount) dCount.textContent = dPad(idx + 1) + " / " + dPad(dItems.length);
        }

        requestAnimationFrame(depthFrame);
      };
      requestAnimationFrame(depthFrame);
    }
  }

  /* ---------- Static fallback ---------- */

  if (reduceMotion || typeof gsap === "undefined") {
    docEl.classList.remove("js");
    return;
  }

  gsap.registerPlugin(ScrollTrigger);
  gsap.defaults({ ease: "power3.out" });

  /* ---------- Entrance choreography ---------- */

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

  /* ---------- Entrance: straight onto the live page, no preloader ---------- */

  gsap.delayedCall(0.15, function () { intro.play(); });

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
    var glow = document.getElementById("heroGlow");
    var mx = -9999, my = -9999;
    var fx = 0, fy = 0, tfx = 0, tfy = 0;
    var gx = 0, gy = 0, go = 0, gInit = false;
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
      if (glow && gInit) {
        var tgx = mx;
        var tgy = my + window.scrollY;
        var tgo = pointerActive && tgy < darkHero.offsetHeight ? 1 : 0;
        gx += (tgx - gx) * 0.07;
        gy += (tgy - gy) * 0.07;
        go += (tgo - go) * 0.05;
        if (Math.abs(tgx - gx) > 0.5 || Math.abs(tgy - gy) > 0.5 || Math.abs(tgo - go) > 0.01) busy = true;
        glow.style.transform = "translate3d(" + gx.toFixed(1) + "px," + gy.toFixed(1) + "px,0)";
        glow.style.opacity = go.toFixed(3);
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
        if (!gInit) {
          gx = e.clientX;
          gy = e.clientY + window.scrollY;
          gInit = true;
        }
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
