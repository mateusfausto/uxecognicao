'use client';
import { useEffect, useRef } from 'react';

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Neural network canvas animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d')!;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    interface Node {
      x: number; y: number;
      vx: number; vy: number;
      r: number;
    }

    const nodes: Node[] = Array.from({ length: 55 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 2 + 1,
    }));

    let frame: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update
      nodes.forEach((n) => {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > canvas.width)  n.vx *= -1;
        if (n.y < 0 || n.y > canvas.height) n.vy *= -1;
      });

      // Connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 110) {
            const alpha = (1 - d / 110) * 0.35;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(224,120,64,${alpha})`;
            ctx.lineWidth = 0.6;
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      // Nodes
      nodes.forEach((n) => {
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(224,120,64,0.6)';
        ctx.fill();
      });

      frame = requestAnimationFrame(draw);
    };
    draw();
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('resize', resize);
    };
  }, []);

  const scrollDown = () => {
    document.getElementById('principles')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-bg"
    >
      {/* Noise texture */}
      <div className="noise absolute inset-0 pointer-events-none z-0" />

      {/* Neural canvas background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full opacity-50"
      />

      {/* Radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(224,120,64,0.07),transparent)] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-h-5xl pt-32">
        {/* Eyebrow */}
        
        {/* Main headline */}
        <h1 className="font-display text-[clamp(3.5rem,10vw,8rem)] leading-[0.9] tracking-wide text-white mb-6 animate-fade-up">
          PRINCÍPIOS
          <br />
          <span className="text-accent">COGNITIVOS</span>
          <br />
          APLICADOS AO
          <br />
          <span className="text-accent">
            UX DESIGN
          </span>
        </h1>

        {/* Subtitle */}
        <p
          className="text-muted text-base sm:text-lg max-w-xl mx-auto leading-relaxed mb-8 sm:mb-10 animate-fade-up"
          style={{ animationDelay: '0.15s' }}
        >
          12 princípios essenciais para criar experiências que respeitam
          a cognição humana na criação de interfaces visuais.
        </p>

        {/* CTA buttons */}
        <div
          className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center items-center animate-fade-up"
          style={{ animationDelay: '0.3s' }}
        >
          <button
            onClick={scrollDown}
            className="px-9 py-3.5 rounded-xl bg-accent text-bg font-semibold text-sm hover:bg-orange-500 transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(224,120,64,0.35)]"
          >
            Explorar os 12 Princípios
          </button>
          <a
            href="#percebemos-o-que-esperamos"
            className="px-14 py-3.5 rounded-xl border border-muted text-muted text-sm hover:border-accent/50 hover:bg-card transition-all"
          >
            Começar a Leitura
          </a>
        </div>

        {/* Stats row */}
        <div
          className="flex flex-wrap gap-6 sm:gap-8 justify-center mt-12 sm:mt-16 animate-fade-up pb-32"
          style={{ animationDelay: '0.45s' }}
        >
          {[
            { num: '12', label: 'Princípios' },
            { num: '6', label: 'Áreas de Cognição' },            
          ].map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-display text-4xl text-accent">{s.num}</div>
              <div className="text-xs text-muted mt-0.5 font-mono tracking-wider">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollDown}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted hover:text-white transition-colors animate-fade-in"
        style={{ animationDelay: '0.8s' }}
      >
        <span className="text-xs font-mono tracking-widest">SCROLL</span>
        <span className="w-px h-8 bg-gradient-to-b from-muted to-transparent animate-pulse-slow" />
      </button>
    </section>
  );
}
