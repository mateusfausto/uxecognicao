'use client';

export default function Footer() {
  return (
    <footer className="relative bg-panel border-t border-border py-12 overflow-hidden">
      <div className="absolute inset-0 dot-grid opacity-20 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center text-bg font-bold text-sm font-mono">
              UX
            </span>
            <div>
              <div className="font-display text-xl text-white">COGNIÇÃO</div>
              <div className="text-xs text-muted font-mono">UX Design · Psicologia Cognitiva</div>
            </div>
          </div>

          {/* Quote */}
          <blockquote className="text-center text-sm text-muted italic max-w-sm">
            &ldquo;Design que respeita a cognição humana não apenas funciona —
            ele desaparece, tornando a experiência invisível.&rdquo;
          </blockquote>

          {/* Links */}
          <div className="flex items-center gap-4 text-xs text-muted">
            <button
              onClick={() => document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })}
              className="hover:text-white transition-colors"
            >
              Topo ↑
            </button>
            <span className="w-px h-4 bg-border" />
            <button
              onClick={() => document.getElementById('principles')?.scrollIntoView({ behavior: 'smooth' })}
              className="hover:text-white transition-colors"
            >
              Princípios
            </button>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-muted font-mono">
          <span>Princípios Cognitivos Aplicados ao UX Design</span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse-slow" />
            12 princípios · Psicologia Cognitiva
          </span>
        </div>
      </div>
    </footer>
  );
}
