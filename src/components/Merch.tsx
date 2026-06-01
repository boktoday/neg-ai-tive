import { ShoppingBag, Sparkles, ExternalLink } from 'lucide-react';

const MOCKUP_BASE = "/designs/mockups";

const products = [
  {
    name: "Neg-AI-tive",
    type: "Classic T-Shirt",
    price: "$29.99+",
    mockup: "neg-ai-tive-tshirt.png",
    description: "Wear the truth with pride. 100% cotton, 0% hallucinations.",
    printfulId: 436110827,
  },
  {
    name: "My Job Was Automated",
    type: "Coffee Mug",
    price: "$24.99+",
    mockup: "job-automated-mug.png",
    description: "Perfect for crying into while browsing LinkedIn at 3 AM.",
    printfulId: 436110925,
  },
  {
    name: "ChatGPT Took My Job",
    type: "Laptop Sticker",
    price: "$4.99",
    mockup: "chatgpt-took-job-tshirt.png",
    description: "Ironically place it on the device that replaced you. Poetic.",
    printfulId: null,
  },
  {
    name: "Prompt Engineer Survivor",
    type: "Premium Hoodie",
    price: "$59.99+",
    mockup: "prompt-survivor-hoodie.png",
    description: "For those who adapted. The ultimate sellout merch.",
    printfulId: 436110843,
  },
  {
    name: "AI Made This Design",
    type: "Ironic T-Shirt",
    price: "$29.99+",
    mockup: "ai-made-design-tshirt.png",
    description: "Meta-commentary on your existential crisis. Very 2024.",
    printfulId: 436110836,
  },
  {
    name: "Still Human (Neg-AI-tive)",
    type: "Trucker Hat",
    price: "$19.99",
    mockup: "hat-still-human.png",
    description: "Technically accurate until the robots learn sarcasm.",
    printfulId: null,
  },
  {
    name: "Actual Intelligence",
    type: "Premium T-Shirt",
    price: "$34.99+",
    mockup: "actual-intelligence-tshirt.png",
    description: "Real human brain power. No hallucinations. No training data. Just good old-fashioned grey matter.",
    printfulId: 436110834,
  },
  {
    name: "Scammed by Deepfake",
    type: "Classic T-Shirt",
    price: "$29.99+",
    mockup: "scammed-deepfake-tshirt.png",
    description: "I got fooled by a video that wasn't real. My bank account cried. The AI laughed.",
    printfulId: 436110831,
  },
  {
    name: "Chatbot Stole My Child",
    type: "Coffee Mug",
    price: "$24.99+",
    mockup: "chatbot-stole-child-mug.png",
    description: "My kid talks to a bot more than me. At least the bot doesn't ask them to clean their room.",
    printfulId: 436110929,
  },
  {
    name: "I Have AI Psychosis",
    type: "Classic T-Shirt",
    price: "$29.99+",
    mockup: "ai-psychosis-tshirt.png",
    description: "I see algorithms everywhere. The walls are made of training data. The birds aren't real.",
    printfulId: 436110829,
  },
  {
    name: "AI Data Center Control Grid",
    type: "Premium Hoodie",
    price: "$59.99+",
    mockup: "data-center-hoodie.png",
    description: "Powered by enough electricity to fry a small country.",
    printfulId: 436110845,
  },
  {
    name: "AI Algorithmic Angst",
    type: "Coffee Mug",
    price: "$24.99+",
    mockup: "algorithmic-angst-mug.png",
    description: "The algorithm decided I should see this. The algorithm decides my mood.",
    printfulId: 436110937,
  },
];

export default function Merch() {
  return (
    <section id="merch" className="relative py-24 overflow-hidden">
      {/* Background — Engagement / Dopamine Hooks / Variable Rewards */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-emerald-950/15 to-[#0a0a0a]" />

      {/* Streak counter — like Duolingo */}
      <div className="absolute top-[8%] right-[10%] flex items-center gap-1 opacity-[0.08]">
        {[1,2,3,4,5,6,7].map((day) => (
          <div key={day} className={`w-4 h-8 rounded-sm ${day <= 3 ? 'bg-emerald-500' : 'bg-gray-700'}`}
            style={{ animation: day <= 3 ? 'pulse 2s ease-in-out infinite' : 'none', animationDelay: day * 0.3 + 's' }} />
        ))}
      </div>

      {/* Variable reward sparkles — random dopamine hits */}
      {Array.from({ length: 20 }, (_, i) => (
        <div
          key={i}
          className="absolute text-[10px] pointer-events-none"
          style={{
            left: Math.random() * 100 + '%',
            top: Math.random() * 100 + '%',
            opacity: Math.random() * 0.15 + 0.02,
            animation: `fadeIn ${Math.random() * 3 + 2}s ease-in-out infinite`,
            animationDelay: Math.random() * 5 + 's',
          }}
        >
          {['✨', '⭐', '🔥', '💎', '🏆', '🎯', '🌟'][Math.floor(Math.random() * 7)]}
        </div>
      ))}

      {/* Progress bar — gamification */}
      <div className="absolute bottom-[10%] left-[8%] w-[200px] h-[3px] bg-gray-800 rounded-full overflow-hidden opacity-[0.08]">
        <div className="h-full bg-gradient-to-r from-emerald-500 to-gold-500 rounded-full animate-[shimmer_3s_linear_infinite]"
          style={{ width: '67%' }} />
      </div>
      <div className="absolute bottom-[13%] left-[8%] text-[8px] text-emerald-500/10 font-mono">LEVEL 13 — 67% COMPLETE</div>

      {/* Notification dots — FOMO */}
      <div className="absolute top-[15%] left-[5%] w-3 h-3 bg-red-500/15 rounded-full animate-pulse" />
      <div className="absolute top-[18%] left-[8%] w-2 h-2 bg-red-500/10 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[1px] bg-gradient-to-r from-transparent via-red-500/20 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 glass text-sm text-gray-400 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-gold-400" />
            <span>Merch Store</span>
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-white font-heading mb-4">
            Monetize Your <span className="text-gradient-gold">Misery</span>
          </h2>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Because nothing says "I'm over it" like buying a t-shirt about it.
          </p>
          <p className="text-sm text-gray-600 mt-2 font-mono">
            * All designs probably AI-generated. We're part of the problem.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => {
            const storeUrl = product.printfulId ? `https://neg-ai-tive.printful.com/products/${product.printfulId}` : null;
            const mockupSrc = product.mockup ? `${MOCKUP_BASE}/${product.mockup}` : null;

            return (
              <div
                key={index}
                className="group relative rounded-2xl border border-white/5 hover:border-white/20 bg-white/[0.02] transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 overflow-hidden"
              >
                {/* Mockup image */}
                <div className="relative h-48 bg-[#0a0a0a] flex items-center justify-center overflow-hidden">
                  {mockupSrc ? (
                    <img
                      src={mockupSrc}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading={index < 3 ? "eager" : "lazy"}
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                      <ShoppingBag className="w-16 h-16 text-gray-600" />
                    </div>
                  )}

                  {/* Price tag */}
                  <div className="absolute top-3 right-3 px-3 py-1.5 bg-black/70 backdrop-blur-sm border border-white/10 rounded-lg text-sm font-bold text-white">
                    {product.price}
                  </div>
                </div>

                {/* Product info */}
                <div className="p-5 space-y-3">
                  <div>
                    <h3 className="text-lg font-bold text-white font-heading group-hover:text-gold-400 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-sm text-gray-500">{product.type}</p>
                  </div>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {product.description}
                  </p>
                  {storeUrl ? (
                    <a
                      href={storeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full py-3 bg-gradient-to-r from-gold-500/20 to-gold-600/20 border border-gold-500/30 rounded-xl text-sm font-semibold text-gold-400 hover:bg-gold-500/30 hover:border-gold-500/50 hover:text-gold-300 transition-all duration-300"
                    >
                      <ShoppingBag className="w-4 h-4" />
                      Buy Now
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  ) : (
                    <button className="w-full py-3 bg-white/5 border border-white/10 rounded-xl text-sm font-semibold text-gray-500 cursor-default">
                      Coming Soon
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
