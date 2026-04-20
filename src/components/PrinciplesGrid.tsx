'use client';
import { useEffect, useRef } from 'react';
import { principles } from '../app/data';

export default function PrinciplesGrid() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.querySelectorAll('.reveal').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 60);
            });
          }
        });
      },
      { threshold: 0.08 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="principles"
      ref={ref}
      className="relative py-16 sm:py-24 bg-panel overflow-hidden"
    >
      {/* bg decoration */}
      <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16 reveal">
          <span className="text-xs font-mono text-accent tracking-widest mb-4 px-3 py-1 rounded-full border border-accent/30 bg-accent/5">
            OS 12 PRINCÍPIOS
          </span>
          <h2 className="font-display text-[clamp(2.5rem,6vw,5rem)] leading-tight text-white">
            UMA VISÃO GERAL
          </h2>
          <p className="text-muted max-w-lg mt-4 text-sm leading-relaxed">
            Cada princípio representa um aspecto fundamental de como os seres humanos processam
            informações e interagem com interfaces digitais.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {principles.map((p, i) => {
            const col = p.color === 'accent' ? '#E07840' : '#5B9BD5';
            return (
              <button
                key={p.id}
                onClick={() => scrollTo(p.slug)}
                className="reveal principle-card text-left rounded-2xl border border-border bg-card p-5 flex flex-col gap-3 group"
              >
                {/* Number */}
                <div className="flex items-center justify-between">
                  <span
                    className="font-display text-3xl"
                    style={{ color: col + '40' }}
                  >
                    {String(p.id).padStart(2, '0')}
                  </span>
                  <span
                    className="text-xs font-mono px-2 py-0.5 rounded-md"
                    style={{ backgroundColor: col + '15', color: col }}
                  >
                    {p.tag}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-display text-xl leading-tight text-white group-hover:text-cream transition-colors">
                  {p.headline.split('\n')[0]}
                  {p.headline.split('\n').length > 1 && (
                    <span style={{ color: col }}>
                      {' '}
                      {p.headline.split('\n').slice(1).join(' ')}
                    </span>
                  )}
                </h3>

                {/* Count */}
                <div className="flex items-center gap-2 mt-auto pt-2 border-t border-border">
                  <span className="text-xs text-muted">
                    {p.bullets.length} conceitos
                  </span>
                  <span
                    className="ml-auto text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity"
                    style={{ color: col }}
                  >
                    Ver →
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </section>
  );
}
