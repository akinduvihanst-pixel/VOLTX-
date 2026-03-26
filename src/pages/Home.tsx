import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Zap, Activity, Battery, Droplets, Star, ArrowRight } from 'lucide-react';
import ProductCard from '../components/ProductCard';
import Marquee from '../components/Marquee';

export default function Home({ onAddToCart }: { onAddToCart: () => void }) {
  const bestsellers = [
    { id: '1', name: 'Neon Citrus', price: 34.99, image: 'https://picsum.photos/seed/citrus/400/500', badge: 'Bestseller' },
    { id: '2', name: 'Cyber Berry', price: 34.99, image: 'https://picsum.photos/seed/berry/400/500' },
    { id: '3', name: 'Void Cola', price: 34.99, image: 'https://picsum.photos/seed/cola/400/500', badge: 'New' },
    { id: '4', name: 'Quantum Apple', price: 34.99, image: 'https://picsum.photos/seed/apple/400/500' },
  ];

  return (
    <div className="w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/seed/hype/1920/1080?blur=2" 
            alt="Hero Background" 
            className="w-full h-full object-cover opacity-40"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brutal-black/50 to-brutal-black" />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="font-display text-7xl md:text-9xl uppercase tracking-tighter leading-none mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white via-neon-green to-neon-blue">
              Unleash <br/> The Voltage
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-10 max-w-2xl mx-auto font-medium">
              Zero sugar. Maximum hype. The official energy formula of the next generation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/shop" className="bg-neon-green text-black font-display text-2xl uppercase tracking-widest px-12 py-5 hover:bg-white transition-colors transform hover:scale-105 duration-200">
                Shop Now
              </Link>
              <Link to="/#drops" className="border-2 border-white/20 text-white font-display text-2xl uppercase tracking-widest px-12 py-5 hover:border-neon-pink hover:text-neon-pink transition-colors">
                View Drops
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Social Proof Bar */}
      <section className="border-y border-white/10 bg-brutal-gray py-8">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center gap-12 md:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          {['IGN', 'Kotaku', 'Men\'s Health', 'Complex', 'Hypebeast'].map((brand, i) => (
            <div key={i} className="font-display text-2xl md:text-3xl uppercase tracking-widest text-gray-400">
              {brand}
            </div>
          ))}
        </div>
      </section>

      {/* Product Highlights */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="font-display text-5xl md:text-7xl uppercase tracking-wide">Top Tier</h2>
            <p className="text-neon-green font-mono mt-2">/// Bestsellers</p>
          </div>
          <Link to="/shop" className="hidden md:flex items-center gap-2 text-gray-400 hover:text-neon-green transition-colors font-bold uppercase tracking-widest">
            View All <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {bestsellers.map((product) => (
            <ProductCard 
              key={product.id} 
              {...product} 
              onAddToCart={onAddToCart} 
            />
          ))}
        </div>
      </section>

      <Marquee text="Zero Sugar • Zero Crash • 100% Hype • " speed={15} />

      {/* Benefits Section */}
      <section className="py-24 bg-brutal-gray relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { icon: Zap, title: 'Clean Energy', desc: '200mg natural caffeine. No jitters.' },
              { icon: Activity, title: 'Focus Matrix', desc: 'Nootropics for mental clarity.' },
              { icon: Droplets, title: 'Hydration', desc: 'Packed with essential electrolytes.' },
              { icon: Battery, title: 'Zero Sugar', desc: 'Keto friendly. 10 calories.' },
            ].map((benefit, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="bg-brutal-black p-8 rounded-2xl border border-white/5 hover:border-neon-blue/50 transition-colors"
              >
                <benefit.icon className="w-12 h-12 text-neon-blue mb-6" />
                <h3 className="font-display text-2xl uppercase tracking-wide mb-3">{benefit.title}</h3>
                <p className="text-gray-400">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Limited Drops Section */}
      <section id="drops" className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-neon-pink/10 border border-neon-pink/30 rounded-3xl p-8 md:p-16 flex flex-col md:flex-row items-center gap-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-neon-pink/20 blur-[100px] rounded-full" />
          
          <div className="flex-1 z-10">
            <div className="inline-block bg-neon-pink text-white text-sm font-bold uppercase tracking-widest py-1 px-3 rounded-full mb-6">
              Limited Drop
            </div>
            <h2 className="font-display text-5xl md:text-7xl uppercase tracking-wide mb-6">
              Midnight <br/> Mango
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-md">
              Our most requested flavor is back for 48 hours only. Once it's gone, it's gone.
            </p>
            
            <div className="flex gap-4 mb-8">
              <div className="bg-brutal-black border border-white/10 p-4 rounded-lg text-center min-w-[80px]">
                <span className="block font-display text-3xl text-neon-pink">12</span>
                <span className="text-xs text-gray-500 uppercase font-bold">Hours</span>
              </div>
              <div className="bg-brutal-black border border-white/10 p-4 rounded-lg text-center min-w-[80px]">
                <span className="block font-display text-3xl text-neon-pink">45</span>
                <span className="text-xs text-gray-500 uppercase font-bold">Mins</span>
              </div>
              <div className="bg-brutal-black border border-white/10 p-4 rounded-lg text-center min-w-[80px]">
                <span className="block font-display text-3xl text-neon-pink">22</span>
                <span className="text-xs text-gray-500 uppercase font-bold">Secs</span>
              </div>
            </div>

            <button className="bg-neon-pink text-white font-display text-2xl uppercase tracking-widest px-12 py-5 hover:bg-white hover:text-neon-pink transition-colors w-full sm:w-auto">
              Secure Yours
            </button>
          </div>
          
          <div className="flex-1 relative z-10 w-full">
            <img 
              src="https://picsum.photos/seed/mango/600/600" 
              alt="Midnight Mango" 
              className="w-full h-auto object-cover rounded-2xl shadow-2xl shadow-neon-pink/20"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-24 bg-brutal-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display text-5xl md:text-7xl uppercase tracking-wide mb-4">The Hype is Real</h2>
            <div className="flex justify-center items-center gap-2 text-neon-green">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-6 h-6 fill-current" />)}
              <span className="text-white font-mono ml-2">4.9/5 (10k+ Reviews)</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Alex T.', role: 'Pro Gamer', text: 'Switched from G-Fuel and never looked back. The focus is insane and no crash.' },
              { name: 'Sarah M.', role: 'Crossfit Athlete', text: 'Tastes like candy but hits like a pre-workout. Neon Citrus is my daily go-to.' },
              { name: 'Marcus J.', role: 'Streamer', text: '12 hour streams are easy with this. Plus the tubs look sick on my shelf.' },
            ].map((review, i) => (
              <div key={i} className="bg-brutal-black p-8 rounded-2xl border border-white/5">
                <div className="flex text-neon-green mb-4">
                  {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-lg text-gray-300 mb-6 italic">"{review.text}"</p>
                <div>
                  <p className="font-bold uppercase tracking-widest">{review.name}</p>
                  <p className="text-sm text-gray-500 font-mono">{review.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Email Capture */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-neon-green" />
        <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/noise/1000/1000')] opacity-10 mix-blend-overlay" />
        
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
          <h2 className="font-display text-5xl md:text-7xl uppercase tracking-wide text-black mb-6">
            Join The Cult
          </h2>
          <p className="text-xl text-black/80 font-medium mb-10">
            Get 15% off your first order + early access to limited drops.
          </p>
          
          <form className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="ENTER YOUR EMAIL" 
              className="flex-1 bg-black text-white px-6 py-5 font-mono text-lg focus:outline-none focus:ring-2 focus:ring-white placeholder-gray-600"
            />
            <button type="submit" className="bg-white text-black font-display text-2xl uppercase tracking-widest px-10 py-5 hover:bg-black hover:text-neon-green transition-colors">
              Unlock 15% Off
            </button>
          </form>
          <p className="text-xs text-black/60 mt-4 font-mono">By joining, you agree to our Terms & Privacy Policy.</p>
        </div>
      </section>
    </div>
  );
}
