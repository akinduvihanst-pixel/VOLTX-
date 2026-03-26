import { motion } from 'motion/react';

export default function Marquee({ text, speed = 20, reverse = false }: { text: string, speed?: number, reverse?: boolean }) {
  return (
    <div className="overflow-hidden whitespace-nowrap bg-neon-green py-3 border-y border-black transform -rotate-2 scale-105 my-12">
      <motion.div
        initial={{ x: reverse ? '-100%' : '0%' }}
        animate={{ x: reverse ? '0%' : '-100%' }}
        transition={{ repeat: Infinity, ease: 'linear', duration: speed }}
        className="inline-block"
      >
        {Array.from({ length: 10 }).map((_, i) => (
          <span key={i} className="font-display text-2xl text-black uppercase tracking-widest mx-8">
            {text}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
