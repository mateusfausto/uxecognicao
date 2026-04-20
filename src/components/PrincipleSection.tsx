'use client';
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import type { Principle } from '../app/data';

interface Props {
  principle: Principle;
  index: number;
}

export default function PrincipleSection({ principle, index }: Props) {
  const sectionRef = useRef<HTMLElement>(null);
  const isEven = index % 2 === 0;

  // IntersectionObserver for reveal animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach((el, i) => {
              setTimeout(() => el.classList.add('visible'), i * 100);
            });
          }
        });
      },
      { threshold: 0.12 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const accentColor = principle.color === 'accent' ? '#E07840' : '#5B9BD5';

  return (
    <section
      id={principle.slug}
      ref={sectionRef}
      className="relative min-h-screen flex items-center py-12 sm:py-20 overflow-hidden"
    >
      {/* Dot grid bg */}
      <div className="absolute inset-0 dot-grid opacity-30 pointer-events-none" />

      {/* Huge background number */}
      <div
        className="section-number absolute select-none pointer-events-none"
        style={{
          [isEven ? 'right' : 'left']: '-2rem',
          top: '50%',
          transform: 'translateY(-50%)',
          opacity: 0.06,
        }}
      >
        {String(principle.id).padStart(2, '0')}
      </div>

      {/* Glow blob behind image */}
      <div
        className="absolute w-80 h-80 rounded-full blur-[120px] opacity-10 pointer-events-none"
        style={{
          backgroundColor: accentColor,
          [isEven ? 'left' : 'right']: '10%',
          top: '50%',
          transform: 'translateY(-50%)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-12">
        <div
          className={`grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-20 items-center ${
            isEven ? '' : 'lg:[&>*:first-child]:order-2'
          }`}
        >
          {/* ── Image side ── */}
          <div className={`reveal-${isEven ? 'left' : 'right'} relative`}>
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] bg-card">
              <Image
                src={principle.image}
                alt={principle.imageAlt}
                fill
                className={`object-cover ${isEven ? 'img-fade-right' : 'img-fade-left'}`}
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Overlay gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-${isEven ? 'r' : 'l'} from-transparent to-bg opacity-60`}
              />
            </div>

            {/* Floating tag */}
            <div
              className="absolute top-4 left-4 flex items-center gap-2 rounded-lg px-3 py-1.5 backdrop-blur-sm"
              style={{ backgroundColor: `${accentColor}20`, border: `1px solid ${accentColor}40` }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ backgroundColor: accentColor }}
              />
              <span className="text-xs font-mono font-semibold" style={{ color: accentColor }}>
                {principle.tag.toUpperCase()}
              </span>
            </div>

            {/* Decorative corner frame */}
            <div
              className="absolute -bottom-2 -right-2 w-12 h-12 border-b-2 border-r-2 rounded-br-lg"
              style={{ borderColor: accentColor + '60' }}
            />
            <div
              className="absolute -top-2 -left-2 w-12 h-12 border-t-2 border-l-2 rounded-tl-lg"
              style={{ borderColor: accentColor + '60' }}
            />
          </div>

          {/* ── Content side ── */}
          <div className="reveal flex flex-col gap-6">
            {/* Number + divider */}
            <div className="flex items-center gap-4">
              <span
                className="font-mono text-xs font-bold px-2.5 py-1 rounded-md"
                style={{ backgroundColor: accentColor + '18', color: accentColor }}
              >
                {String(principle.id).padStart(2, '0')}
              </span>
              <div className="flex-1 h-px bg-border" />
              <span className="text-xs text-muted font-mono">{principle.tag}</span>
            </div>

            {/* Headline */}
            <h2 className="font-display text-[clamp(2.2rem,4vw,3.8rem)] leading-[0.95] text-white">
              {principle.headline.split('\n').map((line, i) => (
                <span key={i}>
                  {i === 0 ? (
                    line
                  ) : (
                    <span style={{ color: accentColor }}> {line}</span>
                  )}
                </span>
              ))}
            </h2>

            {/* Accent line */}
            <div
              className="h-0.5 w-16 origin-left"
              style={{
                backgroundColor: accentColor,
                animation: 'lineGrow 1s ease both',
              }}
            />

            {/* Bullet cards */}
            <div className="flex flex-col gap-3">
              {principle.bullets.map((b, i) => (
                <div
                  key={i}
                  className="principle-card rounded-xl border border-border bg-card/60 p-4 flex gap-4 cursor-default"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  {/* Bullet number */}
                  <div
                    className="flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold font-mono mt-0.5"
                    style={{ backgroundColor: accentColor + '20', color: accentColor }}
                  >
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white mb-1">{b.title}</h3>
                    <p className="text-xs text-muted leading-relaxed">{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom section divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </section>
  );
}
