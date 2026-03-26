import { motion, AnimatePresence } from 'motion/react';
import { X, Plus, Minus, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CartDrawer({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const cartItems = [
    { id: 1, name: 'Neon Citrus', price: 34.99, quantity: 1, image: 'https://picsum.photos/seed/citrus/200/200' },
    { id: 2, name: 'Cyber Berry', price: 34.99, quantity: 1, image: 'https://picsum.photos/seed/berry/200/200' },
  ];

  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />
          
          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-brutal-gray border-l border-white/10 z-50 flex flex-col"
          >
            <div className="p-6 border-b border-white/10 flex justify-between items-center bg-brutal-black">
              <h2 className="font-display text-2xl uppercase tracking-wider">Your Cart</h2>
              <button onClick={onClose} className="p-2 hover:text-neon-green transition-colors">
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {cartItems.map((item) => (
                <div key={item.id} className="flex gap-4 bg-brutal-black p-4 rounded-lg border border-white/5">
                  <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-md bg-brutal-gray" />
                  <div className="flex-1 flex flex-col justify-between">
                    <div className="flex justify-between">
                      <h3 className="font-bold">{item.name}</h3>
                      <button className="text-gray-500 hover:text-neon-pink transition-colors">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                    <p className="text-neon-green font-mono">${item.price}</p>
                    <div className="flex items-center gap-3 mt-2">
                      <button className="p-1 bg-brutal-gray rounded hover:bg-white/10"><Minus className="w-3 h-3" /></button>
                      <span className="text-sm font-mono">{item.quantity}</span>
                      <button className="p-1 bg-brutal-gray rounded hover:bg-white/10"><Plus className="w-3 h-3" /></button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-6 bg-brutal-black border-t border-white/10">
              <div className="flex justify-between mb-4 font-mono text-lg">
                <span>Subtotal</span>
                <span className="text-neon-green">${total.toFixed(2)}</span>
              </div>
              <p className="text-xs text-gray-500 mb-6 text-center">Shipping & taxes calculated at checkout</p>
              <Link 
                to="/checkout" 
                onClick={onClose}
                className="block w-full bg-neon-green text-black text-center font-display text-xl uppercase tracking-wider py-4 hover:bg-white transition-colors"
              >
                Checkout Now
              </Link>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
