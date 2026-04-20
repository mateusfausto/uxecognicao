'use client';

const LinkedInIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

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
            Criado por Mateus Fausto
            <a
              href="https://www.linkedin.com/in/mateus-fausto-8248ba21a/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted hover:text-white transition-colors"
              aria-label="LinkedIn de Mateus Fausto"
            >
              <LinkedInIcon />
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}