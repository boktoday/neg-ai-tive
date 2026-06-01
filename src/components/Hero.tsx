import { AlertTriangle, ArrowDown, Sparkles } from 'lucide-react';

const particles = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  size: Math.random() * 4 + 1,
  x: Math.random() * 100,
  y: Math.random() * 100,
  duration: Math.random() * 10 + 10,
  delay: Math.random() * 5,
  opacity: Math.random() * 0.3 + 0.1,
}));

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0a]">
      {/* Ambient particles */}
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full bg-red-500/20"
          style={{
            width: p.size + 'px',
            height: p.size + 'px',
            left: p.x + '%',
            top: p.y + '%',
            opacity: p.opacity,
            animation: `float ${p.duration}s ease-in-out ${p.delay}s infinite`,
          }}
        />
      ))}

      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-red-600/10 rounded-full blur-[120px] animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-gold-500/10 rounded-full blur-[120px] animate-pulse-slow" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-br from-red-600/5 via-transparent to-gold-500/5 rounded-full blur-[150px]" />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        {/* Badge */}
        <div className="mb-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 glass text-sm text-gray-400 rounded-full">
            <Sparkles className="w-4 h-4 text-gold-400" />
            <span>Awareness project on the real harms of AI</span>
          </div>
        </div>

        {/* Icon */}
        <div className="mb-8 flex justify-center animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <div className="relative">
            <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-red-600/20 to-gold-500/20 flex items-center justify-center border border-white/10 glow-red">
              <AlertTriangle className="w-12 h-12 text-gold-400" strokeWidth={1.5} />
            </div>
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center animate-pulse">
              <span className="text-black text-xs font-bold">!</span>
            </div>
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-7xl md:text-8xl lg:text-[10rem] font-black leading-none mb-6 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <span className="block text-gradient drop-shadow-[0_0_40px_rgba(239,68,68,0.3)]">
            NEG-AI-TIVE
          </span>
        </h1>

        {/* Subtext */}
        <p
          className="text-xl md:text-2xl text-gray-300 font-medium mb-3 animate-fade-in-up"
          style={{ animationDelay: '0.5s' }}
        >
          The Hidden Cost of Artificial Intelligence
        </p>

        <p
          className="text-base md:text-lg text-gray-500 max-w-2xl mx-auto mb-10 animate-fade-in-up leading-relaxed"
          style={{ animationDelay: '0.6s' }}
        >
          Artists replaced. Writers ghosted. Coders obsolete. Marketers buried in spam.
          <span className="block mt-1 text-gold-400/80 font-semibold">
            The negative effects of AI are real. Here's the evidence..
          </span>
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up"
          style={{ animationDelay: '0.7s' }}
        >
          <a
            href="#stories"
            className="group relative px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white font-bold text-lg rounded-xl transition-all duration-500 hover:scale-105 overflow-hidden"
          >
            <span className="relative z-10">Read the Horror Stories</span>
            <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-gold-500 opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
            <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100" />
          </a>
          <a
            href="#submit"
            className="group relative px-8 py-4 glass glass-hover text-white font-bold text-lg rounded-xl transition-all duration-500 hover:scale-105 border-gold-500/30 hover:border-gold-500/60"
          >
            <span className="relative z-10">Share Your Trauma</span>
          </a>
          <a
            href="https://aiorchestrator.com.au"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-8 py-4 bg-white/5 border border-white/10 text-white font-bold text-lg rounded-xl transition-all duration-500 hover:scale-105 hover:bg-white/10"
          >
            Get Evidence
          </a>
        </div>

        {/* Stats bar */}
        <div
          className="mt-16 flex flex-wrap justify-center gap-8 animate-fade-in-up"
          style={{ animationDelay: '0.9s' }}
        >
          {[
            { label: 'Victims', value: '12,847' },
            { label: 'Jobs Lost to AI', value: '∞' },
            { label: 'F*cks Given', value: '0' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-white font-heading">{stat.value}</div>
              <div className="text-xs text-gray-600 uppercase tracking-widest mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-5 h-5 text-gray-600" />
      </div>
    </section>
  );
}
