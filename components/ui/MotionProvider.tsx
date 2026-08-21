'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

/**
 * One GSAP runtime for the whole document, driven entirely by `data-*`
 * attributes.
 *
 * The sections of this site are server components, and they stay that way: a
 * single client boundary here reads the DOM and wires the motion, so adding
 * animation to a section is a plain attribute rather than another
 * `'use client'` island and another hydration cost.
 *
 * Nothing is hidden until `html.motion-ready` is set (see the inline script in
 * app/layout.tsx), so the page is fully readable if JavaScript never runs.
 * Readers who ask for reduced motion get everything revealed immediately and no
 * tweens are created at all — relevant on a site whose visitors are more likely
 * than most to find movement uncomfortable.
 *
 * ── Attribute reference ───────────────────────────────────────────────────
 *   data-reveal[="up|down|left|right|scale|fade|blur|pop|draw"]  enter on scroll
 *   data-reveal-stagger[="0.08"]   direct children enter in sequence
 *   data-reveal-delay="0.2"        hold before entering, seconds
 *   data-parallax="40"             scrubbed drift, px, +ve travels up
 *   data-parallax-scope=".sel"     closest() selector to measure against
 *   data-parallax-zoom="1.12"      scrubbed drift + scale, for cover images
 *   data-float="8"                 idle sine loop, px
 *   data-orbit="0.5"               travel a sibling card's border, 0-1 start
 *   data-orbit-duration="30"       seconds per lap
 *   data-orbit-track               marks the card whose border is traced
 *   data-tilt="6"                  pointer-follow 3D tilt, degrees
 *   data-count                     count up to the number in the text
 *   data-split[="lines|words"]     split heading, rise each part behind a mask
 */

type Cleanup = () => void;

const EASE = 'power3.out';

/** Elements owning their transform permanently — never clearProps these. */
const TRANSFORM_OWNERS =
  '[data-parallax],[data-parallax-zoom],[data-float],[data-tilt],[data-orbit]';

const REVEAL_FROM: Record<string, gsap.TweenVars> = {
  up: { y: 28, opacity: 0 },
  down: { y: -28, opacity: 0 },
  left: { x: -36, opacity: 0 },
  right: { x: 36, opacity: 0 },
  scale: { scale: 0.94, opacity: 0 },
  fade: { opacity: 0 },
  blur: { y: 18, opacity: 0, filter: 'blur(10px)' },
  /* Rules and connectors draw themselves from the left. */
  draw: { scaleX: 0, opacity: 1 },
  /* Overshoots on arrival — for badges and tiles, not for running text. */
  pop: { scale: 0.4, opacity: 0 },
};

/** Variants wanting something other than the house ease/duration. */
const REVEAL_EASE: Record<string, string> = { pop: 'back.out(1.7)' };
const REVEAL_DURATION: Record<string, number> = { pop: 0.9 };

/** Mirror of the `from` vars, so each variant only animates what it offsets. */
function revealVars(variant: string) {
  const from = REVEAL_FROM[variant] || REVEAL_FROM.up;
  const to: gsap.TweenVars = { opacity: 1 };
  if ('y' in from) to.y = 0;
  if ('x' in from) to.x = 0;
  if ('scale' in from) to.scale = 1;
  if ('scaleX' in from) to.scaleX = 1;
  if ('filter' in from) to.filter = 'blur(0px)';
  return { from, to };
}

const num = (raw: string | undefined, fallback: number) => {
  const n = parseFloat(raw ?? '');
  return Number.isFinite(n) ? n : fallback;
};

/**
 * Hand the element back to CSS once it has arrived. The cards carry Tailwind
 * hover transforms (`hover:-translate-y-1`), and a leftover inline transform
 * from GSAP outranks them — clearing is what keeps the hover states alive.
 */
function release(el: HTMLElement) {
  if (!el.matches(TRANSFORM_OWNERS)) gsap.set(el, { clearProps: 'all' });
}

/** Mark as arrived so the pre-paint hiding rule stops applying. */
function markShown(el: Element) {
  el.setAttribute('data-shown', '');
}

export function MotionProvider() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    root.classList.add('motion-ready');

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Reduced motion: show everything, create nothing.
    if (reduced) {
      document
        .querySelectorAll('[data-reveal], [data-reveal-stagger] > *, [data-split]')
        .forEach(markShown);
      return;
    }

    gsap.registerPlugin(ScrollTrigger, SplitText);

    // One claim set per behaviour family, not one global set: an element may
    // legitimately both enter and drift (`data-reveal` + `data-float`), and a
    // single shared set would let the first pass swallow it and silently drop
    // every later behaviour. Families that fight over the same property do
    // share a set — entrances all write opacity, parallax writes `y`.
    const entry = new WeakSet<Element>(); // split / stagger / reveal
    const drift = new WeakSet<Element>(); // parallax / parallax-zoom
    const bob = new WeakSet<Element>(); //   float
    const orbiting = new WeakSet<Element>(); // orbit
    const tilted = new WeakSet<Element>();
    const counted = new WeakSet<Element>();
    const cleanups: Cleanup[] = [];
    const splits: SplitText[] = [];
    const ctx = gsap.context(() => {});

    // ── Split headings ────────────────────────────────────────────────────
    // Lines are measured, so this has to wait for the webfonts to settle.
    function bindSplit(el: HTMLElement) {
      const mode = el.dataset.split === 'words' ? 'words' : 'lines';
      let split: SplitText;
      try {
        split = SplitText.create(el, { type: mode, mask: mode, linesClass: 'motion-line' });
      } catch {
        // Any failure to split must still leave the heading readable.
        markShown(el);
        gsap.set(el, { opacity: 1 });
        return;
      }
      splits.push(split);
      const parts = (mode === 'words' ? split.words : split.lines) as HTMLElement[];
      if (!parts.length) {
        markShown(el);
        gsap.set(el, { opacity: 1 });
        return;
      }
      markShown(el);
      gsap.set(el, { opacity: 1 });
      gsap.from(parts, {
        yPercent: 108,
        duration: 0.95,
        ease: 'power4.out',
        stagger: 0.09,
        delay: num(el.dataset.revealDelay, 0.05),
        scrollTrigger: { trigger: el, start: 'top 92%', once: true },
      });
    }

    // ── Scroll reveals ────────────────────────────────────────────────────
    /**
     * Children enter in sequence. Built as a timeline rather than one staggered
     * tween so a child can declare its own `data-reveal` variant — the rule
     * under a section heading draws itself while the text around it rises.
     */
    function bindStagger(group: HTMLElement) {
      const kids = (Array.from(group.children) as HTMLElement[]).filter(
        (k) => !k.hasAttribute('data-split'),
      );
      if (!kids.length) return;
      kids.forEach((k) => entry.add(k)); // claim, so the single pass skips them

      const fallback = group.dataset.revealStaggerVariant || 'up';
      const step = num(group.dataset.revealStagger, 0.08);

      const tl = gsap.timeline({
        delay: num(group.dataset.revealDelay, 0),
        scrollTrigger: { trigger: group, start: 'top 86%', once: true },
      });

      kids.forEach((kid, i) => {
        const variant = kid.dataset.reveal || fallback;
        const { from, to } = revealVars(variant);
        if (variant === 'draw') gsap.set(kid, { transformOrigin: 'left center' });
        tl.fromTo(
          kid,
          from,
          {
            ...to,
            duration: REVEAL_DURATION[variant] ?? 0.8,
            ease: REVEAL_EASE[variant] ?? EASE,
            onStart: () => markShown(kid),
            onComplete: () => release(kid),
          },
          i * step,
        );
      });
    }

    function bindReveal(el: HTMLElement) {
      const variant = el.dataset.reveal || 'up';
      const { from, to } = revealVars(variant);
      if (variant === 'draw') gsap.set(el, { transformOrigin: 'left center' });
      gsap.fromTo(el, from, {
        ...to,
        duration: REVEAL_DURATION[variant] ?? 0.85,
        ease: REVEAL_EASE[variant] ?? EASE,
        delay: num(el.dataset.revealDelay, 0),
        scrollTrigger: { trigger: el, start: 'top 88%', once: true },
        onStart: () => markShown(el),
        onComplete: () => release(el),
      });
    }

    // ── Parallax ──────────────────────────────────────────────────────────
    function scopeOf(el: HTMLElement) {
      const sel = el.dataset.parallaxScope;
      return (sel && el.closest(sel)) || el.parentElement || el;
    }

    /**
     * Anything already on screen at load has to start at its designed offset,
     * or the composition is visibly wrong before the reader scrolls at all. A
     * pass that begins above the fold is therefore anchored to raw scroll
     * (zero travel at scroll zero) rather than to the element entering.
     */
    function parallaxTrigger(scope: Element): ScrollTrigger.Vars {
      const top = scope.getBoundingClientRect().top + window.scrollY;
      if (top < window.innerHeight * 0.9) {
        return { start: 0, end: () => window.innerHeight, scrub: 0.9, invalidateOnRefresh: true };
      }
      return {
        trigger: scope,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 0.9,
        invalidateOnRefresh: true,
      };
    }

    function isAboveFold(scope: Element) {
      return scope.getBoundingClientRect().top + window.scrollY < window.innerHeight * 0.9;
    }

    function bindParallax(el: HTMLElement) {
      const dist = num(el.dataset.parallax, 40);
      const scope = scopeOf(el);
      gsap.fromTo(
        el,
        { y: isAboveFold(scope) ? 0 : dist },
        { y: -dist, ease: 'none', force3D: true, scrollTrigger: parallaxTrigger(scope) },
      );
    }

    /** Cover images: the scale keeps the frame filled while the photo drifts. */
    function bindParallaxZoom(el: HTMLElement) {
      const zoom = num(el.dataset.parallaxZoom, 1.05);
      const scope = scopeOf(el);
      const travel = Math.max(((zoom - 1) / 2) * (el.offsetHeight || 240), 12);
      gsap.set(el, { scale: zoom });
      gsap.fromTo(
        el,
        { y: isAboveFold(scope) ? 0 : travel },
        { y: -travel, ease: 'none', force3D: true, scrollTrigger: parallaxTrigger(scope) },
      );
    }

    /**
     * Idle drift. Deliberately on `yPercent` while parallax uses `y` — GSAP
     * sums the two, so a decoration can float and parallax at once.
     */
    function bindFloat(el: HTMLElement) {
      const px = num(el.dataset.float, 8);
      const height = el.offsetHeight || 20;
      gsap.to(el, {
        yPercent: (-px / height) * 100,
        duration: gsap.utils.random(2.4, 3.8),
        delay: gsap.utils.random(0, 1.2),
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
      });
    }

    /**
     * Walks a decoration around the border of a sibling card, marked
     * `data-orbit-track`. The dot rides the card's own rounded rectangle, so
     * it stays welded to the edge at any width.
     *
     * This owns the element's transform outright — an orbiting dot carries
     * neither `data-parallax` nor `data-float`, because those write `y` and
     * `yPercent`, the two channels the orbit needs to place and centre itself.
     *
     * Geometry comes from offset* rather than getBoundingClientRect: the card
     * carries `data-tilt`, and a rect measured mid-tilt is the bounding box of
     * a rotated element, which would swell the path as the pointer moves.
     */
    function bindOrbit(el: HTMLElement) {
      const track = el.parentElement?.querySelector<HTMLElement>('[data-orbit-track]');
      if (!track) return;

      const state = { t: num(el.dataset.orbit, 0) };
      let w = 0;
      let h = 0;
      let r = 0;
      let ox = 0;
      let oy = 0;
      let perimeter = 0;

      const measure = () => {
        w = track.offsetWidth;
        h = track.offsetHeight;
        r = Math.min(
          parseFloat(getComputedStyle(track).borderTopLeftRadius) || 0,
          w / 2,
          h / 2,
        );
        // Both the dot and the card are placed against the same relative
        // wrapper, so the card's offset is already in the dot's coordinates.
        ox = track.offsetLeft;
        oy = track.offsetTop;
        perimeter = 2 * (w - 2 * r) + 2 * (h - 2 * r) + 2 * Math.PI * r;
      };

      /** Distance along the border to a point on it, clockwise from top-left. */
      const pointAt = (d: number) => {
        const edgeX = w - 2 * r;
        const edgeY = h - 2 * r;
        const arc = (Math.PI / 2) * r;

        if (d < edgeX) return { x: r + d, y: 0 };
        d -= edgeX;
        if (d < arc) {
          const a = d / r;
          return { x: w - r + r * Math.sin(a), y: r - r * Math.cos(a) };
        }
        d -= arc;
        if (d < edgeY) return { x: w, y: r + d };
        d -= edgeY;
        if (d < arc) {
          const a = d / r;
          return { x: w - r + r * Math.cos(a), y: h - r + r * Math.sin(a) };
        }
        d -= arc;
        if (d < edgeX) return { x: w - r - d, y: h };
        d -= edgeX;
        if (d < arc) {
          const a = d / r;
          return { x: r - r * Math.sin(a), y: h - r + r * Math.cos(a) };
        }
        d -= arc;
        if (d < edgeY) return { x: 0, y: h - r - d };
        d -= edgeY;
        // Square corners leave every arc zero-length, so guard the divide.
        const a = r > 0 ? d / r : 0;
        return { x: r - r * Math.cos(a), y: r - r * Math.sin(a) };
      };

      const place = () => {
        if (!perimeter) return;
        const t = ((state.t % 1) + 1) % 1;
        const { x, y } = pointAt(t * perimeter);
        gsap.set(el, { x: ox + x, y: oy + y });
      };

      // The dot is driven from the card's corner, so its authored inset goes.
      gsap.set(el, {
        left: 0,
        top: 0,
        right: 'auto',
        bottom: 'auto',
        xPercent: -50,
        yPercent: -50,
      });
      measure();
      place();

      gsap.to(state, {
        t: state.t + 1,
        duration: num(el.dataset.orbitDuration, 30),
        ease: 'none',
        repeat: -1,
        onUpdate: place,
      });

      const ro = new ResizeObserver(() => {
        measure();
        place();
      });
      ro.observe(track);
      cleanups.push(() => ro.disconnect());
    }

    // ── Pointer tilt ──────────────────────────────────────────────────────
    function bindTilt(el: HTMLElement) {
      const max = num(el.dataset.tilt, 6);
      gsap.set(el, { transformPerspective: 1000, transformOrigin: 'center' });
      const toY = gsap.quickTo(el, 'rotationY', { duration: 0.55, ease: 'power3.out' });
      const toX = gsap.quickTo(el, 'rotationX', { duration: 0.55, ease: 'power3.out' });

      const move = (e: PointerEvent) => {
        const r = el.getBoundingClientRect();
        toY(((e.clientX - r.left) / r.width - 0.5) * max * 2);
        toX(-((e.clientY - r.top) / r.height - 0.5) * max * 2);
      };
      const leave = () => {
        toY(0);
        toX(0);
      };

      el.addEventListener('pointermove', move);
      el.addEventListener('pointerleave', leave);
      cleanups.push(() => {
        el.removeEventListener('pointermove', move);
        el.removeEventListener('pointerleave', leave);
      });
    }

    // ── Number count-up ───────────────────────────────────────────────────
    function bindCount(el: HTMLElement) {
      const original = el.textContent || '';
      const match = original.match(/^(\D*?)([\d][\d,]*(?:\.\d+)?)([\s\S]*)$/);
      if (!match) return;

      const [, prefix, raw, suffix] = match;
      const target = parseFloat(raw.replace(/,/g, ''));
      if (!Number.isFinite(target)) return;

      const decimals = (raw.split('.')[1] || '').length;
      const grouped = raw.includes(',');
      const counter = { v: 0 };

      // Write through the existing text node rather than replacing it:
      // assigning textContent is a childList mutation, which would wake the
      // observer below on every frame of the count.
      const node = el.firstChild;
      const write = (text: string) => {
        if (node && node.nodeType === Node.TEXT_NODE) node.nodeValue = text;
        else el.textContent = text;
      };

      gsap.to(counter, {
        v: target,
        duration: 1.7,
        ease: 'power2.out',
        scrollTrigger: { trigger: el, start: 'top 92%', once: true },
        onUpdate: () => {
          const shown = grouped
            ? counter.v.toLocaleString('en-GB', {
                minimumFractionDigits: decimals,
                maximumFractionDigits: decimals,
              })
            : counter.v.toFixed(decimals);
          write(`${prefix}${shown}${suffix}`);
        },
        // Restore the authored string so formatting is exact once it lands.
        onComplete: () => write(original),
      });
    }

    // ── Scanner ───────────────────────────────────────────────────────────
    let fontsReady = false;

    const passes: Array<[string, (el: HTMLElement) => void, WeakSet<Element>]> = [
      ['[data-reveal-stagger]', bindStagger, entry],
      ['[data-reveal]', bindReveal, entry],
      ['[data-parallax]', bindParallax, drift],
      ['[data-parallax-zoom]', bindParallaxZoom, drift],
      ['[data-float]', bindFloat, bob],
      ['[data-orbit]', bindOrbit, orbiting],
      ['[data-count]', bindCount, counted],
    ];

    const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (canHover) passes.push(['[data-tilt]', bindTilt, tilted]);

    function scan() {
      ctx.add(() => {
        // Splitting measures line boxes, so it waits for the webfonts.
        if (fontsReady) {
          document.querySelectorAll<HTMLElement>('[data-split]').forEach((el) => {
            if (entry.has(el)) return;
            entry.add(el);
            bindSplit(el);
          });
        }
        for (const [selector, bind, claimed] of passes) {
          document.querySelectorAll<HTMLElement>(selector).forEach((el) => {
            if (claimed.has(el)) return;
            claimed.add(el);
            bind(el);
          });
        }
      });
    }

    // Fonts change line boxes and image loads change page height; both move
    // every trigger position, so measure again once they settle.
    let timer: ReturnType<typeof setTimeout> | undefined;
    const refresh = () => ScrollTrigger.refresh();
    const rescan = () => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        scan();
        refresh();
      }, 250);
    };

    scan();

    // Split headings stay hidden until they are bound, so the font wait needs a
    // backstop: if `fonts.ready` never settles the heading must still appear.
    const openSplits = () => {
      if (fontsReady) return;
      fontsReady = true;
      scan();
      refresh();
    };
    document.fonts?.ready?.then(openSplits);
    const splitFallback = setTimeout(openSplits, 1500);
    window.addEventListener('load', refresh);

    // The App Router swaps the tree in place; pick up whatever arrives. Menus
    // and carousels churn this too, hence the debounce.
    const mo = new MutationObserver(rescan);
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      mo.disconnect();
      clearTimeout(timer);
      clearTimeout(splitFallback);
      window.removeEventListener('load', refresh);
      cleanups.forEach((fn) => fn());
      splits.forEach((s) => s.revert());
      ctx.revert();
    };
  }, [pathname]);

  return null;
}
