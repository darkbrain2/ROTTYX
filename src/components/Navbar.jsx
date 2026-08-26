import React, { useState } from 'react';
import { Wallet, Menu, X, User } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleConnectWallet = () => {
    if (!isConnected) {
      setIsConnected(true);
      setWalletAddress('0x7F...3B9A');
    } else {
      setIsConnected(false);
      setWalletAddress('');
    }
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
            {isConnected ? (
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 bg-slate-50 border border-gold-300 rounded-full px-4 py-2">
                  <span className="text-gold-600 text-sm font-bold">{walletAddress}</span>
                </div>
                <div className="w-10 h-10 rounded-full bg-slate-50 border border-gold-400 flex items-center justify-center cursor-pointer hover:bg-slate-100 transition-colors">
                  <User className="w-5 h-5 text-gold-600" />
                </div>
              </div>
            ) : (
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleConnectWallet}
                className="bg-gradient-to-r from-gold-600 to-gold-400 text-slate-950 font-bold px-6 py-2.5 rounded-full flex items-center gap-2 shadow-[0_0_15px_rgba(212,175,55,0.4)] hover:shadow-[0_0_25px_rgba(212,175,55,0.6)] transition-all"
              >
                <Wallet className="w-4 h-4" />
                CONNECT WALLET
              </motion.button>
            )}
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
                {isConnected ? walletAddress : 'CONNECT WALLET'}
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
