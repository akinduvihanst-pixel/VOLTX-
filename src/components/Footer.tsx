import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brutal-gray pt-16 pb-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <h2 className="font-display text-4xl mb-4">VOLT<span className="text-neon-green">X</span></h2>
            <p className="text-gray-400 max-w-sm mb-6">
              Fueling the next generation of athletes, gamers, and creators. Zero sugar, maximum hype.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-brutal-black rounded-full hover:bg-neon-green hover:text-black transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="p-2 bg-brutal-black rounded-full hover:bg-neon-green hover:text-black transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="p-2 bg-brutal-black rounded-full hover:bg-neon-green hover:text-black transition-colors"><Youtube className="w-5 h-5" /></a>
              <a href="#" className="p-2 bg-brutal-black rounded-full hover:bg-neon-green hover:text-black transition-colors"><Facebook className="w-5 h-5" /></a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold uppercase tracking-widest mb-4 text-sm">Shop</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-neon-green transition-colors">All Products</a></li>
              <li><a href="#" className="hover:text-neon-green transition-colors">Best Sellers</a></li>
              <li><a href="#" className="hover:text-neon-green transition-colors">Limited Drops</a></li>
              <li><a href="#" className="hover:text-neon-green transition-colors">Bundles</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold uppercase tracking-widest mb-4 text-sm">Support</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-neon-green transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-neon-green transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-neon-green transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-neon-green transition-colors">Track Order</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} VOLTX Energy. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
