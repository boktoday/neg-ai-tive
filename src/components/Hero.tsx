import { AlertTriangle, ArrowDown, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#07080a]">
      {/* ====== NIGHT SKY ====== */}

      {/* Stars — 80 tiny white dots scattered across the sky */}
      {Array.from({ length: 80 }, (_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-white"
          style={{
            width: (Math.random() * 2 + 1) + 'px',
            height: (Math.random() * 2 + 1) + 'px',
            left: Math.random() * 100 + '%',
            top: Math.random() * 55 + '%',
            opacity: Math.random() * 0.7 + 0.2,
            animation: `fadeIn ${Math.random() * 4 + 3}s ease-in-out infinite`,
            animationDelay: Math.random() * 5 + 's',
          }}
        />
      ))}

      {/* Twinkling brighter stars */}
      {Array.from({ length: 12 }, (_, i) => (
        <div
          key={'star-' + i}
          className="absolute rounded-full bg-white"
          style={{
            width: '3px',
            height: '3px',
            left: Math.random() * 94 + 3 + '%',
            top: Math.random() * 50 + 3 + '%',
            boxShadow: '0 0 6px 2px rgba(255,255,255,0.4)',
            animation: `fadeIn ${Math.random() * 3 + 2}s ease-in-out infinite`,
            animationDelay: Math.random() * 4 + 's',
          }}
        />
      ))}

      {/* ====== DATACENTRE BUILDING (horizon) ====== */}

      {/* Main warehouse structure */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[240px]"
        style={{
          background: 'linear-gradient(180deg, rgba(20,22,28,0.6) 0%, rgba(15,17,22,0.8) 50%, rgba(10,12,16,0.95) 100%)',
          borderTop: '1px solid rgba(239,68,68,0.15)',
          clipPath: 'polygon(5% 100%, 10% 20%, 90% 20%, 95% 100%)',
        }}
      >
        {/* Rooftop cooling units */}
        <div className="absolute top-[18%] left-[15%] w-[60px] h-[8px] bg-gray-700/40 rounded-sm" />
        <div className="absolute top-[18%] left-[30%] w-[60px] h-[8px] bg-gray-700/40 rounded-sm" />
        <div className="absolute top-[18%] left-[55%] w-[60px] h-[8px] bg-gray-700/40 rounded-sm" />
        <div className="absolute top-[18%] left-[70%] w-[60px] h-[8px] bg-gray-700/40 rounded-sm" />

        {/* Server windows — rows of glowing blue/green lights */}
        {Array.from({ length: 8 }, (_, row) => (
          Array.from({ length: 16 }, (_, col) => (
            <div
              key={`win-${row}-${col}`}
              className="absolute"
              style={{
                width: '18px',
                height: '10px',
                left: 40 + col * 34 + 'px',
                top: 60 + row * 24 + 'px',
                background: `rgba(${Math.random() > 0.3 ? '59, 130, 246' : '52, 211, 153'}, ${Math.random() * 0.4 + 0.3})`,
                borderRadius: '2px',
                boxShadow: Math.random() > 0.5
                  ? `0 0 8px 2px rgba(59,130,246,0.2)`
                  : `0 0 6px 1px rgba(52,211,153,0.15)`,
                animation: Math.random() > 0.7
                  ? `fadeIn ${Math.random() * 2 + 1.5}s ease-in-out infinite`
                  : 'none',
                animationDelay: Math.random() * 3 + 's',
              }}
            />
          ))
        ))}
      </div>

      {/* ====== GLOW THROWBACK ====== */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-gradient-to-t from-red-600/8 via-gold-500/4 to-transparent blur-[60px]" />

      {/* ====== POLE LINES / POWER LINES ====== */}
      <div className="absolute bottom-[240px] left-[8%] w-[1px] h-[40px] bg-gray-700/20" />
      <div className="absolute bottom-[240px] right-[8%] w-[1px] h-[40px] bg-gray-700/20" />
      <div className="absolute bottom-[240px] left-[12%] w-[1px] h-[30px] bg-gray-700/15" />
      <div className="absolute bottom-[240px] right-[12%] w-[1px] h-[30px] bg-gray-700/15" />

      {/* ====== CONTENT ====== */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        {/* Badge */}
        <div className="mb-6 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/[0.04] backdrop-blur-xl border border-white/[0.06] text-sm text-gray-400 rounded-full">
            <Sparkles className="w-4 h-4 text-gold-400" />
            <span>Awareness project on the real harms of AI</span>
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-7xl md:text-8xl lg:text-[10rem] font-black leading-none mb-4 animate-fade-in-up drop-shadow-[0_0_80px_rgba(239,68,68,0.25)]" style={{ animationDelay: '0.3s' }}>
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
          Every ChatGPT query runs on a building like this — glowing through the night<br />
          <span className="text-gold-400/80 font-semibold">consuming energy, water, and your future.</span>
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
          </a>
          <a
            href="#submit"
            className="group relative px-8 py-4 bg-white/[0.04] backdrop-blur-xl border border-white/[0.08] text-white font-bold text-lg rounded-xl transition-all duration-500 hover:scale-105 hover:bg-white/10 border-gold-500/30 hover:border-gold-500/60"
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
