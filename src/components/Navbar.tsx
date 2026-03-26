import { Link } from 'react-router-dom';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar({ onCartClick }: { onCartClick: () => void }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-brutal-black/90 backdrop-blur-md border-b border-brutal-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="font-display text-3xl tracking-wider text-white hover:text-neon-green transition-colors">
            VOLT<span className="text-neon-green">X</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/shop" className="text-sm font-bold uppercase tracking-widest hover:text-neon-green transition-colors">Shop</Link>
            <Link to="/#drops" className="text-sm font-bold uppercase tracking-widest hover:text-neon-pink transition-colors">Drops</Link>
            <Link to="/#community" className="text-sm font-bold uppercase tracking-widest hover:text-neon-blue transition-colors">Community</Link>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <button 
              onClick={onCartClick}
              className="relative p-2 hover:text-neon-green transition-colors group"
            >
              <ShoppingCart className="w-6 h-6" />
              <span className="absolute top-0 right-0 bg-neon-green text-black text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                2
              </span>
            </button>
            <button 
              className="md:hidden p-2 hover:text-neon-green transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-16 left-0 right-0 bg-brutal-black border-b border-brutal-gray"
          >
            <div className="flex flex-col px-4 py-6 space-y-6">
              <Link to="/shop" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-display uppercase tracking-widest hover:text-neon-green">Shop</Link>
              <Link to="/#drops" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-display uppercase tracking-widest hover:text-neon-pink">Drops</Link>
              <Link to="/#community" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-display uppercase tracking-widest hover:text-neon-blue">Community</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
