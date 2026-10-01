"use client";

import { useEffect } from "react";

const SELECTOR = "[data-reveal]";

// Progressive enhancement: SSR and unsupported browsers never hide content.
export default function ScrollReveal() {
  useEffect(() => {
    const root = document.querySelector("main");
    if (!root || !("IntersectionObserver" in window)) return;

    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const seen = new Set<string>();
    const pending = new Set<HTMLElement>();

    const remember = (element: HTMLElement) => {
      if (element.dataset.revealKey) seen.add(element.dataset.revealKey);
    };
    const reveal = (element: HTMLElement, animate = false) => {
      pending.delete(element);
      observer.unobserve(element);
      remember(element);
      element.dataset.revealState = animate ? "entering" : "visible";
    };
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) {
        const element = entry.target as HTMLElement;
        if (entry.isIntersecting && pending.has(element)) reveal(element, !motion.matches);
      }
    }, { rootMargin: "0px 0px -32px 0px", threshold: 0 });

    const revealWithin = (target: Element) => {
      const parent = target.closest<HTMLElement>(SELECTOR);
      if (parent) reveal(parent);
      target.querySelectorAll<HTMLElement>(SELECTOR).forEach(element => reveal(element));
    };
    const revealHash = (hash = window.location.hash) => {
      if (!hash) return;
      try {
        const target = document.getElementById(decodeURIComponent(hash.slice(1)));
        if (target) revealWithin(target);
      } catch { /* A malformed fragment must not prevent enhancement. */ }
    };
    const register = (element: HTMLElement) => {
      if (element.dataset.revealState) return;
      const rect = element.getBoundingClientRect();
      if (motion.matches || rect.top < window.innerHeight ||
          (element.dataset.revealKey && seen.has(element.dataset.revealKey)) ||
          element.contains(document.activeElement)) {
        reveal(element);
        return;
      }
      element.dataset.revealState = "pending";
      pending.add(element);
      observer.observe(element);
    };

    revealHash();
    root.querySelectorAll<HTMLElement>(SELECTOR).forEach(register);

    // Expanded projects retain their grid structure and join the same observer.
    const mutations = new MutationObserver(records => {
      for (const record of records) {
        record.removedNodes.forEach(node => {
          if (!(node instanceof HTMLElement)) return;
          for (const element of pending) {
            if (node.contains(element)) {
              pending.delete(element);
              observer.unobserve(element);
            }
          }
        });
        record.addedNodes.forEach(node => {
          if (!(node instanceof HTMLElement)) return;
          if (node.matches(SELECTOR)) register(node);
          node.querySelectorAll<HTMLElement>(SELECTOR).forEach(register);
        });
      }
    });
    mutations.observe(root, { childList: true, subtree: true });

    const onFocus = (event: FocusEvent) => {
      if (event.target instanceof Element) revealWithin(event.target);
    };
    const onClick = (event: MouseEvent) => {
      if (!(event.target instanceof Element)) return;
      const anchor = event.target.closest<HTMLAnchorElement>("a[href]");
      if (!anchor) return;
      const url = new URL(anchor.href, window.location.href);
      if (url.origin === window.location.origin && url.pathname === window.location.pathname) revealHash(url.hash);
    };
    const onHashChange = () => revealHash();
    const onMotionChange = () => {
      if (motion.matches) root.querySelectorAll<HTMLElement>(SELECTOR).forEach(element => reveal(element));
    };
    const onAnimationEnd = (event: AnimationEvent) => {
      if (event.animationName === "lab-reveal" && event.target instanceof HTMLElement) reveal(event.target);
    };
    document.addEventListener("focusin", onFocus);
    document.addEventListener("click", onClick, true);
    window.addEventListener("hashchange", onHashChange);
    motion.addEventListener("change", onMotionChange);
    root.addEventListener("animationend", onAnimationEnd);

    return () => {
      observer.disconnect();
      mutations.disconnect();
      document.removeEventListener("focusin", onFocus);
      document.removeEventListener("click", onClick, true);
      window.removeEventListener("hashchange", onHashChange);
      motion.removeEventListener("change", onMotionChange);
      root.removeEventListener("animationend", onAnimationEnd);
      root.querySelectorAll<HTMLElement>(SELECTOR).forEach(element => { delete element.dataset.revealState; });
    };
  }, []);

  return null;
}
