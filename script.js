(() => {
  'use strict';

  const root = document.documentElement;
  const STORAGE_KEY = 'theme-preference';

  /* ---------- theme ---------- */
  const mql = window.matchMedia('(prefers-color-scheme: dark)');

  const applyTheme = (theme) => {
    if (theme === 'light' || theme === 'dark') {
      root.setAttribute('data-theme', theme);
    } else {
      root.removeAttribute('data-theme');
    }
    const isDark = theme === 'dark' || (!theme && mql.matches);
    const btn = document.querySelector('.theme-toggle');
    if (btn) btn.setAttribute('aria-pressed', String(isDark));
  };

  const stored = localStorage.getItem(STORAGE_KEY);
  applyTheme(stored);

  document.querySelector('.theme-toggle')?.addEventListener('click', () => {
    const current = root.getAttribute('data-theme') || (mql.matches ? 'dark' : 'light');
    const next = current === 'dark' ? 'light' : 'dark';
    localStorage.setItem(STORAGE_KEY, next);
    applyTheme(next);
  });

  mql.addEventListener('change', () => {
    if (!localStorage.getItem(STORAGE_KEY)) applyTheme(null);
  });

  /* ---------- mobile nav ---------- */
  const toggle = document.querySelector('.nav__toggle');
  const menu = document.getElementById('nav-menu');

  const setMenu = (open) => {
    if (!toggle || !menu) return;
    toggle.setAttribute('aria-expanded', String(open));
    menu.dataset.open = String(open);
  };

  toggle?.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') !== 'true';
    setMenu(open);
  });

  menu?.querySelectorAll('a').forEach((a) => {
    a.addEventListener('click', () => setMenu(false));
  });

  /* ---------- footer year ---------- */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
