import React, { useState } from 'react';
import { Wallet, Menu, X, User } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleConnectWallet = () => {
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 3000);
  };

  const navLinks = ['Home', 'Marketplace', 'Staking', 'Roadmap', 'Governance', 'Whitepaper'];

  return (
    <nav className="w-full bg-cover bg-center border-b border-gold-200 sticky top-0 z-50 shadow-sm relative" style={{ backgroundImage: "url('/marble-bg.jpg')" }}>
      <div className="absolute inset-0 bg-white/40 pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center gap-3 cursor-pointer">
            <img 
              src="/logo.png" 
              alt="RottyX Logo" 
              className="w-14 h-14 rounded-full shadow-sm drop-shadow-md"
            />
            <span className="font-serif font-bold text-2xl text-gold-500 tracking-wider">ROTTY X</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a 
                key={link} 
                href={`#${link.toLowerCase()}`}
                className="text-slate-800 hover:text-gold-600 font-sans font-medium text-sm tracking-wide transition-all duration-300 relative group"
              >
                {link}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold-500 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Connect Wallet & User */}
          <div className="hidden md:flex items-center gap-4">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleConnectWallet}
              className="bg-gradient-to-r from-gold-600 to-gold-400 text-slate-950 font-bold px-6 py-2.5 rounded-full flex items-center gap-2 shadow-[0_0_15px_rgba(212,175,55,0.4)] hover:shadow-[0_0_25px_rgba(212,175,55,0.6)] transition-all"
            >
              <Wallet className="w-4 h-4" />
              CONNECT WALLET
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="w-12 h-12 flex items-center justify-center bg-white/90 backdrop-blur-sm border border-gold-300 rounded-lg shadow-sm text-slate-800 hover:text-gold-600 focus:outline-none transition-all"
            >
              {isMobileMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-cover bg-center border-b border-gold-200 shadow-md relative" style={{ backgroundImage: "url('/marble-bg.jpg')" }}>
          <div className="absolute inset-0 bg-white/40 pointer-events-none"></div>
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 relative z-10">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-slate-800 hover:text-gold-600 block px-3 py-2 rounded-md text-base font-medium"
              >
                {link}
              </a>
            ))}
            <div className="mt-4 px-3">
              <button 
                onClick={handleConnectWallet}
                className="w-full bg-gradient-to-r from-gold-600 to-gold-400 text-slate-950 font-bold px-6 py-3 rounded-md flex items-center justify-center gap-2"
              >
                <Wallet className="w-5 h-5" />
                CONNECT WALLET
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Coming Soon Popup Overlay */}
      <AnimatePresence>
        {showPopup && (
          <motion.div 
            initial={{ opacity: 0, y: -20, x: '-50%' }}
            animate={{ opacity: 1, y: 20, x: '-50%' }}
            exit={{ opacity: 0, y: -20, x: '-50%' }}
            className="fixed top-20 left-1/2 z-[100] bg-slate-950 border border-gold-500 text-gold-400 px-6 py-3 rounded-full shadow-2xl flex items-center gap-3 font-medium whitespace-nowrap"
          >
            <Wallet className="w-5 h-5" />
            RottyX swap coming soon
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
