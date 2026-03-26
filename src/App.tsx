import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Product from './pages/Product';

export default function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-brutal-black text-white font-sans selection:bg-neon-green selection:text-black">
        <Navbar onCartClick={() => setIsCartOpen(true)} />
        <main className="flex-grow pt-16">
          <Routes>
            <Route path="/" element={<Home onAddToCart={() => setIsCartOpen(true)} />} />
            <Route path="/shop" element={<Shop onAddToCart={() => setIsCartOpen(true)} />} />
            <Route path="/product/:id" element={<Product onAddToCart={() => setIsCartOpen(true)} />} />
          </Routes>
        </main>
        <Footer />
        <CartDrawer isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      </div>
    </BrowserRouter>
  );
}
