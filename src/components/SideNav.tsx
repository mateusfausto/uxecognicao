'use client';
import { useEffect, useState } from 'react';
import { principles } from '../app/data';

export default function SideNav() {
  const [active, setActive] = useState('');
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const heroBottom = (document.getElementById('principles')?.offsetTop ?? 0) - 100;
      setVisible(window.scrollY > heroBottom);

      const sections = principles.map((p) => p.slug);
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= window.innerHeight / 2) {
          setActive(id);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <nav className="fixed right-4 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-2.5 hidden xl:flex">
      {principles.map((p) => {
        const isActive = active === p.slug;
        const col = p.color === 'accent' ? '#E07840' : '#5B9BD5';
        return (
          <button
            key={p.slug}
            onClick={() => document.getElementById(p.slug)?.scrollIntoView({ behavior: 'smooth' })}
            title={`${String(p.id).padStart(2, '0')} — ${p.tag}`}
            className="relative group flex items-center justify-end gap-2"
          >
            {/* Tooltip */}
            <span className="opacity-0 group-hover:opacity-100 transition-opacity text-xs font-mono text-white bg-card border border-border rounded-md px-2 py-1 whitespace-nowrap pointer-events-none">
              {String(p.id).padStart(2, '0')} {p.tag}
            </span>
            {/* Dot */}
            <span
              className="block rounded-full transition-all duration-300"
              style={{
                width:  isActive ? '10px' : '6px',
                height: isActive ? '10px' : '6px',
                backgroundColor: isActive ? col : '#3A3A3A',
                boxShadow: isActive ? `0 0 8px ${col}60` : 'none',
              }}
            />
          </button>
        );
      })}
    </nav>
  );
}
