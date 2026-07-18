import { useState, useEffect } from 'react';

const NAV_ITEMS = [
  { label: 'about',      href: '#about',      icon: '◈' },
  { label: 'projects',   href: '#projects',   icon: '◉' },
  { label: 'experience', href: '#experience', icon: '◆' },
  { label: 'contact',    href: '#contact',    icon: '◎' },
];

function Navbar() {
  const [scrolled, setScrolled]         = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [prevScrollY, setPrevScrollY]   = useState(0);
  const [navVisible, setNavVisible]     = useState(true);

  useEffect(() => {
    const onScroll = () => {
      const sy = window.scrollY;
      const docH = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docH > 0 ? Math.min((sy / docH) * 100, 100) : 0);

      // Hide top navbar after 80px; show again if scrolling up
      if (sy > 80) {
        setScrolled(true);
        setNavVisible(sy < prevScrollY); // show on scroll-up
      } else {
        setScrolled(false);
        setNavVisible(true);
      }
      setPrevScrollY(sy);

      // Determine active section
      const sections = NAV_ITEMS.map(n => n.href.slice(1));
      let current = '';
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 140) current = id;
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [prevScrollY]);

  return (
    <>
      {/* ── SCROLL PROGRESS BAR ── */}
      <div
        className="scroll-progress-bar"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />

      {/* ── TOP NAVBAR — slides up & fades when scrolled down ── */}
      <nav
        className={[
          'navbar',
          scrolled  ? 'navbar--scrolled'  : '',
          !navVisible ? 'navbar--hidden'  : '',
        ].join(' ').trim()}
      >
        <div className="nav-spacer" />
        <ul className="nav-links">
          {NAV_ITEMS.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                className={activeSection === href.slice(1) ? 'nav-link--active' : ''}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
        <div className="nav-right">
          <a
            href="https://github.com/cccabalde-lab"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-github"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
            GitHub
          </a>
        </div>
      </nav>

      {/* ── RIGHT SIDE NAV — appears when top nav hides ── */}
      <nav
        className={`side-nav${scrolled ? ' side-nav--visible' : ''}`}
        aria-label="Section navigation"
      >
        {/* mini scroll-progress arc inside the pill */}
        <div
          className="side-nav__progress"
          style={{ '--progress': `${scrollProgress}%` }}
          aria-hidden="true"
        />
        <ul className="side-nav__list">
          {NAV_ITEMS.map(({ label, href, icon }, idx) => {
            const id = href.slice(1);
            const isActive = activeSection === id;
            return (
              <li
                key={label}
                className="side-nav__item"
                style={{ '--i': idx }}
              >
                <a
                  href={href}
                  className={`side-nav__link${isActive ? ' side-nav__link--active' : ''}`}
                  aria-label={`Navigate to ${label}`}
                >
                  <span className="side-nav__tooltip">{label}</span>
                  <span className="side-nav__dot-wrap">
                    <span className="side-nav__icon">{icon}</span>
                    <span className="side-nav__dot" />
                  </span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
