import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'motion/react';
import { Star, Zap, Droplets, Activity, ChevronDown, Check } from 'lucide-react';

export default function Product({ onAddToCart }: { onAddToCart: () => void }) {
  const { id } = useParams();
  const [selectedFlavor, setSelectedFlavor] = useState('Neon Citrus');
  const [purchaseType, setPurchaseType] = useState('one-time');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const flavors = [
    { name: 'Neon Citrus', color: 'bg-neon-green' },
    { name: 'Cyber Berry', color: 'bg-neon-pink' },
    { name: 'Void Cola', color: 'bg-brutal-black border border-white/20' },
    { name: 'Quantum Apple', color: 'bg-green-500' },
  ];

  const faqs = [
    { q: 'What is the caffeine content?', a: 'Each serving contains 200mg of natural caffeine extracted from green tea leaves, providing smooth energy without the crash.' },
    { q: 'Is it really zero sugar?', a: 'Yes. We use a proprietary blend of erythritol and monk fruit extract to achieve the perfect sweetness with 0g of sugar and only 10 calories.' },
    { q: 'How many servings per tub?', a: 'Each tub contains 40 fully loaded servings. We recommend 1 scoop per 16oz of water.' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
        {/* Product Images */}
        <div className="lg:w-1/2">
          <div className="sticky top-24">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="aspect-square bg-brutal-gray rounded-2xl overflow-hidden mb-6 border border-white/5"
            >
              <img 
                src="https://picsum.photos/seed/citrus/1000/1000" 
                alt="Product" 
                className="w-full h-full object-cover mix-blend-lighten"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <div className="grid grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <button key={i} className="aspect-square bg-brutal-gray rounded-lg overflow-hidden border border-white/5 hover:border-neon-green transition-colors">
                  <img src={`https://picsum.photos/seed/citrus${i}/200/200`} alt="Thumbnail" className="w-full h-full object-cover mix-blend-lighten" />
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Product Info */}
        <div className="lg:w-1/2">
          <div className="flex items-center gap-2 text-neon-green mb-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
            </div>
            <span className="text-white font-mono text-sm underline decoration-white/30 hover:decoration-white cursor-pointer">4.9 (2,451 Reviews)</span>
          </div>

          <h1 className="font-display text-5xl md:text-7xl uppercase tracking-wide mb-2">Neon Citrus</h1>
          <p className="text-2xl font-mono text-gray-300 mb-6">$34.99</p>

          <p className="text-lg text-gray-400 mb-8">
            Our flagship flavor. A hyper-charged blend of lemon, lime, and yuzu that hits like a lightning bolt. Formulated for elite focus and endurance.
          </p>

          <div className="grid grid-cols-3 gap-4 mb-10">
            <div className="bg-brutal-gray p-4 rounded-xl text-center border border-white/5">
              <Zap className="w-6 h-6 text-neon-green mx-auto mb-2" />
              <span className="block font-bold uppercase tracking-widest text-xs">200mg</span>
              <span className="text-xs text-gray-500">Caffeine</span>
            </div>
            <div className="bg-brutal-gray p-4 rounded-xl text-center border border-white/5">
              <Activity className="w-6 h-6 text-neon-pink mx-auto mb-2" />
              <span className="block font-bold uppercase tracking-widest text-xs">Zero</span>
              <span className="text-xs text-gray-500">Sugar</span>
            </div>
            <div className="bg-brutal-gray p-4 rounded-xl text-center border border-white/5">
              <Droplets className="w-6 h-6 text-neon-blue mx-auto mb-2" />
              <span className="block font-bold uppercase tracking-widest text-xs">100%</span>
              <span className="text-xs text-gray-500">Electrolytes</span>
            </div>
          </div>

          {/* Flavor Selection */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-bold uppercase tracking-widest">Flavor: <span className="text-gray-400">{selectedFlavor}</span></h3>
            </div>
            <div className="flex flex-wrap gap-3">
              {flavors.map((flavor) => (
                <button
                  key={flavor.name}
                  onClick={() => setSelectedFlavor(flavor.name)}
                  className={`w-12 h-12 rounded-full flex items-center justify-center transition-transform ${flavor.color} ${
                    selectedFlavor === flavor.name ? 'ring-4 ring-white ring-offset-4 ring-offset-brutal-black scale-110' : 'hover:scale-110'
                  }`}
                  title={flavor.name}
                >
                  {selectedFlavor === flavor.name && <Check className="w-6 h-6 text-black" />}
                </button>
              ))}
            </div>
          </div>

          {/* Purchase Options */}
          <div className="space-y-4 mb-8">
            <label className={`flex items-center justify-between p-4 rounded-xl border cursor-pointer transition-colors ${
              purchaseType === 'one-time' ? 'border-neon-green bg-neon-green/5' : 'border-white/10 hover:border-white/30'
            }`}>
              <div className="flex items-center gap-4">
                <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                  purchaseType === 'one-time' ? 'border-neon-green' : 'border-gray-500'
                }`}>
                  {purchaseType === 'one-time' && <div className="w-3 h-3 bg-neon-green rounded-full" />}
                </div>
                <span className="font-bold uppercase tracking-widest">One-Time Purchase</span>
              </div>
              <span className="font-mono">$34.99</span>
            </label>

            <label className={`flex items-center justify-between p-4 rounded-xl border cursor-pointer transition-colors ${
              purchaseType === 'subscribe' ? 'border-neon-green bg-neon-green/5' : 'border-white/10 hover:border-white/30'
            }`}>
              <div className="flex items-center gap-4">
                <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                  purchaseType === 'subscribe' ? 'border-neon-green' : 'border-gray-500'
                }`}>
                  {purchaseType === 'subscribe' && <div className="w-3 h-3 bg-neon-green rounded-full" />}
                </div>
                <div>
                  <span className="font-bold uppercase tracking-widest block">Subscribe & Save 20%</span>
                  <span className="text-xs text-neon-green font-mono">Delivery every 30 days</span>
                </div>
              </div>
              <span className="font-mono">$27.99</span>
            </label>
          </div>

          <button 
            onClick={onAddToCart}
            className="w-full bg-neon-green text-black font-display text-3xl uppercase tracking-widest py-6 hover:bg-white transition-colors mb-4 flex items-center justify-center gap-3"
          >
            Add To Cart <span className="font-sans text-xl font-bold">•</span> <span className="font-mono text-2xl">${purchaseType === 'subscribe' ? '27.99' : '34.99'}</span>
          </button>
          
          <div className="flex items-center justify-center gap-2 text-sm text-gray-400 font-mono mb-12">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            Selling fast. Only 14 left in stock.
          </div>

          {/* Accordions */}
          <div className="border-t border-white/10">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-white/10">
                <button 
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full py-6 flex justify-between items-center text-left hover:text-neon-green transition-colors"
                >
                  <span className="font-bold uppercase tracking-widest">{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 transition-transform ${openFaq === i ? 'rotate-180' : ''}`} />
                </button>
                {openFaq === i && (
                  <div className="pb-6 text-gray-400 leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
