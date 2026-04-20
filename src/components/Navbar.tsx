'use client';
import { useEffect, useRef, useState } from 'react';
import { principles } from '../app/data';

export default function Navbar() {
  const [active, setActive] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);

      // Determine active section
      const sections = ['hero', ...principles.map((p) => p.slug)];
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActive(id);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false);
  };

  return (
    <>
      {/* Progress bar */}
      <ProgressBar />

      <header
        className={`fixed top-3 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${
          scrolled
            ? 'w-[calc(100%-1rem)] sm:w-[calc(100%-2rem)] max-w-6xl rounded-2xl bg-panel/90 backdrop-blur border border-border shadow-2xl'
            : 'w-full bg-transparent'
        }`}
      >
        <nav className="flex items-center justify-between px-3 sm:px-6 py-3">
          {/* Logo */}
          <button
            onClick={() => scrollTo('hero')}
            className="flex items-center gap-2 group"
          >
            <span className="w-7 h-7 rounded-md bg-accent flex items-center justify-center text-bg font-bold text-xs font-mono">
              UX
            </span>
            <span className="text-white font-display text-lg tracking-wider hidden sm:block">
              COGNIÇÃO
            </span>
          </button>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-6">
            {principles.slice(0, 6).map((p) => (
              <button
                key={p.slug}
                onClick={() => scrollTo(p.slug)}
                className={`nav-link text-xs font-medium tracking-wide transition-colors ${
                  active === p.slug ? 'text-accent' : 'text-muted hover:text-white'
                }`}
              >
                {p.tag}
              </button>
            ))}
          </div>

          {/* CTA + hamburger */}
          <div className="flex items-center gap-3">           
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="lg:hidden flex flex-col gap-1 p-2"
              aria-label="Menu"
            >
              <span className={`block h-0.5 w-5 bg-white transition-all ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
              <span className={`block h-0.5 w-5 bg-white transition-all ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-0.5 w-5 bg-white transition-all ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="lg:hidden border-t border-border px-6 pb-4">
            <div className="grid grid-cols-2 gap-2 pt-4">
              {principles.map((p) => (
                <button
                  key={p.slug}
                  onClick={() => scrollTo(p.slug)}
                  className="text-left text-xs text-muted hover:text-white py-2 px-3 rounded-lg hover:bg-card transition-colors"
                >
                  <span className="text-accent font-mono font-bold mr-1">{String(p.id).padStart(2, '0')}.</span>
                  {p.tag}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>
    </>
  );
}

function ProgressBar() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const update = () => {
      const s = document.documentElement.scrollTop;
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setWidth(h > 0 ? (s / h) * 100 : 0);
    };
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);

  return (
    <div
      id="progress-bar"
      style={{ width: `${width}%` }}
    />
  );
}
