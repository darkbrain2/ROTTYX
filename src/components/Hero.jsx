import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative w-full min-h-[calc(100vh-80px)] flex items-center justify-center overflow-hidden bg-slate-900">
      {/* Background Image Placeholder / Gradient */}
      <div className="absolute inset-0 z-0 bg-black">
        <div className="w-full h-full bg-[url('/rottyx-hero.jpg')] bg-cover bg-center opacity-70" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-slate-950/90 z-10" />
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 uppercase tracking-wider drop-shadow-2xl"
        >
          Rotty X <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 via-gold-200 to-gold-600">
            Forging a Digital Empire
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-4 text-xl text-slate-300 max-w-2xl mx-auto mb-10 font-sans font-light leading-relaxed"
        >
          The Ancient Legion of decentralized finance. Build your legacy on the blockchain, command your assets, and conquer the new digital frontier.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-6 justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-slate-950 font-bold px-8 py-4 rounded-full flex items-center justify-center gap-2 hover:bg-slate-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.2)]"
          >
            GET STARTED
            <ArrowRight className="w-5 h-5" />
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border-2 border-gold-600/60 bg-slate-900/40 backdrop-blur-sm text-gold-400 font-bold px-8 py-4 rounded-full flex items-center justify-center gap-2 hover:bg-gold-900/30 transition-all hover:border-gold-400"
          >
            EXPLORE THE MARKET
          </motion.button>
        </motion.div>
      </div>
      
      {/* Decorative Bottom Edge */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-600 to-transparent z-20 opacity-50"></div>
    </div>
  );
};

export default Hero;
