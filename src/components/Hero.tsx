import { AlertTriangle, ArrowDown, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0a]">
      {/* ====== BACKGROUND CANVAS — reflects all 9 issue briefs ====== */}

      {/* 1. DATA CENTRE GRID — server rack lines + pulsing nodes */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />

      {/* 2. NEURAL NETWORK NODES — floating data packets */}
      {Array.from({ length: 40 }, (_, i) => (
        <div
          key={i}
          className="absolute rounded-full"
          style={{
            width: (Math.random() * 3 + 1) + 'px',
            height: (Math.random() * 3 + 1) + 'px',
            left: Math.random() * 100 + '%',
            top: Math.random() * 100 + '%',
            background: i % 3 === 0
              ? 'rgba(239, 68, 68, 0.4)'
              : i % 3 === 1
                ? 'rgba(245, 158, 11, 0.3)'
                : 'rgba(59, 130, 246, 0.2)',
            animation: `drift ${Math.random() * 30 + 20}s linear infinite`,
            animationDelay: Math.random() * 10 + 's',
          }}
        />
      ))}

      {/* 3. SURVEILLANCE EYE / ALGORITHM WATCHER — rotating rings */}
      <div className="absolute top-[15%] right-[10%] w-[180px] h-[180px] opacity-[0.08]">
        <div className="absolute inset-0 border border-red-500/30 rounded-full animate-[spin_8s_linear_infinite]" />
        <div className="absolute inset-[20px] border border-gold-500/20 rounded-full animate-[spin_12s_linear_infinite_reverse]" />
        <div className="absolute inset-[40px] border border-blue-500/15 rounded-full animate-[spin_16s_linear_infinite]" />
        <div className="absolute inset-[75px] w-[30px] h-[30px] bg-red-500/20 rounded-full blur-[6px]" />
      </div>

      {/* 4. DEEPFAKE GLITCH LINES — horizontal scan artifacts */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-full h-[2px] bg-gradient-to-r from-transparent via-red-500/10 to-transparent"
          style={{
            top: '25%',
            animation: 'shimmer 3s linear infinite',
            animationDelay: '0s',
          }}
        />
        <div
          className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-gold-500/8 to-transparent"
          style={{
            top: '60%',
            animation: 'shimmer 5s linear infinite',
            animationDelay: '1s',
          }}
        />
        <div
          className="absolute w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/5 to-transparent"
          style={{
            top: '80%',
            animation: 'shimmer 4s linear infinite',
            animationDelay: '2s',
          }}
        />
      </div>

      {/* 5. CHATBOT DATA STREAMS — vertical crawling code */}
      <div className="absolute top-0 right-[5%] w-[1px] h-full bg-gradient-to-b from-transparent via-gold-500/5 to-transparent opacity-40"
        style={{ animation: 'float 6s ease-in-out infinite' }} />
      <div className="absolute top-0 left-[12%] w-[1px] h-full bg-gradient-to-b from-transparent via-red-500/5 to-transparent opacity-30"
        style={{ animation: 'float 8s ease-in-out infinite 1s' }} />
      <div className="absolute top-0 left-[35%] w-[1px] h-full bg-gradient-to-b from-transparent via-blue-500/4 to-transparent opacity-25"
        style={{ animation: 'float 10s ease-in-out infinite 2s' }} />

      {/* 6. EROSION / CORRUPTION — jagged glitch blocks */}
      {[
        { top: '12%', left: '8%', w: 60, h: 1, delay: '0s' },
        { top: '45%', left: '75%', w: 80, h: 1, delay: '2s' },
        { top: '70%', left: '20%', w: 40, h: 1, delay: '4s' },
        { top: '30%', left: '85%', w: 50, h: 1, delay: '1s' },
        { top: '55%', left: '5%', w: 70, h: 1, delay: '3s' },
      ].map((g, i) => (
        <div
          key={i}
          className="absolute bg-gradient-to-r from-transparent via-red-500/8 to-transparent"
          style={{
            top: g.top,
            left: g.left,
            width: g.w + 'px',
            height: g.h + 'px',
            animation: `glitch 1s infinite`,
            animationDelay: g.delay,
          }}
        />
      ))}

      {/* 7. ORBS — one for each major theme */}
      <div className="absolute top-[20%] left-[20%] w-[400px] h-[400px] bg-red-600/8 rounded-full blur-[100px] animate-pulse-slow" />
      <div className="absolute bottom-[20%] right-[20%] w-[350px] h-[350px] bg-gold-500/6 rounded-full blur-[100px] animate-pulse-slow" style={{ animationDelay: '2s' }} />
      <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-red-600/4 via-transparent to-blue-600/4 rounded-full blur-[120px]" />

      {/* 8. MATRIX RAIN — subtle code characters */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {['01', '10', 'AI', '??', '!!', '00', '11', '::', '{}', '[]', '<>', '()', '&&', '||'].map((chars, i) => (
          <div
            key={i}
            className="absolute text-[8px] font-mono text-gold-500/10"
            style={{
              left: (i * 7.5 + 2) + '%',
              top: '-5%',
              writingMode: 'vertical-rl',
              animation: `fadeIn ${Math.random() * 4 + 3}s ease-in-out infinite`,
              animationDelay: (i * 0.4) + 's',
              transform: `rotate(180deg)`,
            }}
          >
            {Array(20).fill(chars).join(' ')}
          </div>
        ))}
      </div>

      {/* ====== CONTENT ====== */}
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
        <h1 className="text-7xl md:text-8xl lg:text-[10rem] font-black leading-none mb-6 animate-fade-in-up drop-shadow-[0_0_60px_rgba(239,68,68,0.2)]" style={{ animationDelay: '0.3s' }}>
          <span className="block text-gradient">
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
            The negative effects of AI are real. Here's the evidence.
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
            Share Your Trauma
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
