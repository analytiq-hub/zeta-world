// The site-wide navigation bar: Zeta World (home) · Learn · Explore · The proof.
// Each page loads this with <script src="./nav.js" defer></script>. It inserts the bar as the first
// element of <body> and publishes its height as the CSS variable --zw-nav-h, so pages can offset
// their own fixed panels. It also adds the credits line at the bottom of the page (the front page
// carries its own, in its text panel). It does nothing inside the front page's background view.
(function () {
  if (new URLSearchParams(location.search).has('bg')) return; // the front page's background view

  const PAGES = [
    { key: 'learn', href: './learn.html', label: 'Learn', title: 'From the primes to the proof, step by step' },
    { key: 'explore', href: './landscape.html', label: 'Explore', title: 'The zeta landscape, ξ(s), L(s,χ) and the primes' },
    { key: 'proof', href: './proof.html', label: 'The proof', title: "The announced proof's strategy, in pictures" },
  ];
  // Shared with the front page, which shows the same words in its text panel.
  const CREDITS = 'Built by <a href="https://github.com/Alex-lop">Alexander Lopez</a> and ' +
    '<a href="https://github.com/andrei-radulescu-banu">Andrei Radulescu-Banu</a> at Sundai AI Hack 150: Building 3D Worlds, November 2026.<br>' +
    '<a href="https://github.com/analytiq-hub/zeta-world">Source on GitHub</a> · ' +
    'Found a mistake? <a href="https://github.com/analytiq-hub/zeta-world/issues">Open an issue</a>.';
  const file = location.pathname.split('/').pop() || 'index.html';
  const current = { 'learn.html': 'learn', 'landscape.html': 'explore', 'proof.html': 'proof', 'step4.html': 'proof' }[file] || 'home';
  // Full-screen 3D pages get a fixed bar over the scene; scrolling pages get a sticky one.
  const fixed = current === 'home' || current === 'explore';

  const css = `
    :root { --zw-nav-h: 44px; }
    html { scroll-padding-top: calc(var(--zw-nav-h) + 8px); }
    .zw-nav { position: ${fixed ? 'fixed' : 'sticky'}; top: 0; left: 0; right: 0; z-index: 1000; height: var(--zw-nav-h);
      box-sizing: border-box; display: flex; align-items: center; gap: 4px; padding: 0 14px;
      background: rgba(5, 6, 15, 0.84); backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px);
      border-bottom: 1px solid rgba(255, 255, 255, 0.1); font: 500 14px/1 system-ui, -apple-system, "Segoe UI", sans-serif; }
    .zw-nav a { color: #b9b6cc; text-decoration: none; padding: 7px 10px; border-radius: 7px; white-space: nowrap; }
    .zw-nav a:hover, .zw-nav a:focus-visible { color: #ebe9f5; background: rgba(255, 255, 255, 0.07); }
    .zw-nav a[aria-current="page"] { color: #f5c542; background: rgba(245, 197, 66, 0.1); }
    .zw-nav .zw-home { display: flex; align-items: center; gap: 7px; margin-right: auto; color: #ebe9f5; font-weight: 600; }
    .zw-nav .zw-home b { color: #f5c542; font: italic 600 19px/1 Georgia, 'Times New Roman', serif; }
    .zw-credits { box-sizing: border-box; max-width: 1120px; margin: 0 auto; padding: 18px 16px 28px; color: #8c89a3;
      font: 13px/1.5 system-ui, -apple-system, "Segoe UI", sans-serif; border-top: 1px solid rgba(255, 255, 255, 0.08); }
    .zw-credits a { color: #8fd3ff; }
    .zw-credits.zw-float { position: fixed; right: 16px; bottom: 10px; z-index: 900; max-width: calc(100vw - 32px);
      width: max-content; padding: 4px 0 4px 14px; border: 0; border-radius: 10px; text-align: right; background: rgba(5, 6, 15, 0.7); font-size: 11.5px; }
    @media (max-width: 900px) { .zw-credits.zw-float { display: none; } }
    @media (max-width: 420px) {
      .zw-nav { padding: 0 6px; gap: 0; font-size: 13px; }
      .zw-nav a { padding: 7px 7px; }
      .zw-nav .zw-home span { display: none; }
    }`;
  const style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);

  const nav = document.createElement('nav');
  nav.className = 'zw-nav';
  nav.setAttribute('aria-label', 'Site');
  const home = document.createElement('a');
  home.className = 'zw-home';
  home.href = './index.html';
  home.title = 'Home';
  home.innerHTML = '<b>ζ</b><span>Zeta World</span>';
  if (current === 'home') home.setAttribute('aria-current', 'page');
  nav.appendChild(home);
  for (const p of PAGES) {
    const a = document.createElement('a');
    a.href = p.href;
    a.textContent = p.label;
    a.title = p.title;
    if (p.key === current) a.setAttribute('aria-current', 'page');
    nav.appendChild(a);
  }
  document.body.prepend(nav);

  if (current !== 'home') {
    const credits = document.createElement('footer');
    credits.className = 'zw-credits' + (current === 'explore' ? ' zw-float' : '');
    credits.innerHTML = CREDITS;
    document.body.appendChild(credits);
  }
})();
