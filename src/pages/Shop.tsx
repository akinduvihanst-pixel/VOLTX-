import { useState } from 'react';
import { Filter, ChevronDown } from 'lucide-react';
import ProductCard from '../components/ProductCard';

export default function Shop({ onAddToCart }: { onAddToCart: () => void }) {
  const [activeFilter, setActiveFilter] = useState('All');

  const products = [
    { id: '1', name: 'Neon Citrus', price: 34.99, image: 'https://picsum.photos/seed/citrus/400/500', badge: 'Bestseller', category: 'Energy' },
    { id: '2', name: 'Cyber Berry', price: 34.99, image: 'https://picsum.photos/seed/berry/400/500', category: 'Energy' },
    { id: '3', name: 'Void Cola', price: 34.99, image: 'https://picsum.photos/seed/cola/400/500', badge: 'New', category: 'Energy' },
    { id: '4', name: 'Quantum Apple', price: 34.99, image: 'https://picsum.photos/seed/apple/400/500', category: 'Energy' },
    { id: '5', name: 'Hydration: Blue Razz', price: 29.99, image: 'https://picsum.photos/seed/blue/400/500', category: 'Hydration' },
    { id: '6', name: 'Hydration: Watermelon', price: 29.99, image: 'https://picsum.photos/seed/melon/400/500', category: 'Hydration' },
    { id: '7', name: 'Starter Kit Bundle', price: 49.99, image: 'https://picsum.photos/seed/bundle/400/500', badge: 'Save 20%', category: 'Bundles' },
    { id: '8', name: 'Shaker Cup: Stealth', price: 14.99, image: 'https://picsum.photos/seed/shaker/400/500', category: 'Merch' },
  ];

  const filters = ['All', 'Energy', 'Hydration', 'Bundles', 'Merch'];

  const filteredProducts = activeFilter === 'All' 
    ? products 
    : products.filter(p => p.category === activeFilter);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
        <div>
          <h1 className="font-display text-6xl md:text-8xl uppercase tracking-wide">Shop All</h1>
          <p className="text-gray-400 mt-4 max-w-xl text-lg">
            Fuel your grind with our premium formulas. Select your weapon of choice.
          </p>
        </div>
        
        <div className="w-full md:w-auto flex items-center gap-4">
          <div className="relative flex-1 md:w-64">
            <select className="w-full appearance-none bg-brutal-gray border border-white/10 text-white py-3 px-4 pr-10 rounded-lg focus:outline-none focus:border-neon-green font-mono text-sm">
              <option>Sort by: Featured</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Newest Arrivals</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="flex overflow-x-auto pb-4 mb-8 gap-2 no-scrollbar">
        <div className="flex items-center gap-2 mr-4 text-gray-400">
          <Filter className="w-5 h-5" />
          <span className="font-bold uppercase tracking-widest text-sm">Filter:</span>
        </div>
        {filters.map(filter => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`whitespace-nowrap px-6 py-2 rounded-full font-bold uppercase tracking-widest text-sm transition-colors border ${
              activeFilter === filter 
                ? 'bg-white text-black border-white' 
                : 'bg-transparent text-gray-400 border-white/10 hover:border-white/30'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <ProductCard 
            key={product.id} 
            {...product} 
            onAddToCart={onAddToCart} 
          />
        ))}
      </div>
    </div>
  );
}
