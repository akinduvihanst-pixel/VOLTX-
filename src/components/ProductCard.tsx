import { motion } from 'motion/react';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  image: string;
  badge?: string;
  onAddToCart: () => void;
}

export default function ProductCard({ id, name, price, image, badge, onAddToCart }: ProductCardProps) {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="group relative bg-brutal-gray rounded-xl overflow-hidden border border-white/5 hover:border-neon-green/50 transition-colors"
    >
      {badge && (
        <div className="absolute top-4 left-4 z-10 bg-neon-pink text-white text-xs font-bold uppercase tracking-widest py-1 px-3 rounded-full">
          {badge}
        </div>
      )}
      
      <Link to={`/product/${id}`} className="block relative aspect-[4/5] bg-brutal-black overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover mix-blend-lighten group-hover:scale-110 transition-transform duration-500"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brutal-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </Link>

      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <Link to={`/product/${id}`}>
            <h3 className="font-display text-2xl uppercase tracking-wide group-hover:text-neon-green transition-colors">{name}</h3>
          </Link>
          <span className="font-mono text-lg text-gray-300">${price}</span>
        </div>
        
        <button 
          onClick={onAddToCart}
          className="w-full bg-white text-black font-bold uppercase tracking-widest py-3 rounded hover:bg-neon-green transition-colors relative overflow-hidden group/btn"
        >
          <span className="relative z-10">Quick Add</span>
          <div className="absolute inset-0 bg-neon-green transform scale-x-0 origin-left group-hover/btn:scale-x-100 transition-transform duration-300 ease-out" />
        </button>
      </div>
    </motion.div>
  );
}
