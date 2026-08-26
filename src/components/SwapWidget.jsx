import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDownUp, Settings, Wallet } from 'lucide-react';

const SwapWidget = () => {
  const [inputValue, setInputValue] = useState('');
  const [isReversed, setIsReversed] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  
  // Rough estimate, in reality this would be fetched from an oracle or the Raydium router
  const rtxPerSol = 150000; 
  
  const outputValue = inputValue 
    ? (isReversed ? (parseFloat(inputValue) / rtxPerSol) : (parseFloat(inputValue) * rtxPerSol)).toLocaleString(undefined, { maximumFractionDigits: isReversed ? 6 : 2 }) 
    : '';

  const handleSwapClick = () => {
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 3000);
  };

  const handleReverse = () => {
    setIsReversed(!isReversed);
    setInputValue(''); // Reset input on swap to avoid confusion, or keep it. We'll reset it to keep it clean.
  };

  const solTokenInfo = {
    symbol: 'SOL',
    labelPay: 'Tribute (Pay)',
    labelReceive: 'Spoils (Receive)',
    balance: 'Treasury: 0.00 SOL',
    icon: <img src="https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/So11111111111111111111111111111111111111112/logo.png" alt="SOL" className="w-6 h-6 rounded-full shadow-sm" />
  };

  const rtxTokenInfo = {
    symbol: 'RTX',
    labelPay: 'Tribute (Pay)',
    labelReceive: 'Spoils (Receive)',
    balance: 'Treasury: 0.00 RTX',
    icon: <img src="/logo.png" alt="RTX" className="w-6 h-6 rounded-full" />
  };

  const topToken = isReversed ? rtxTokenInfo : solTokenInfo;
  const bottomToken = isReversed ? solTokenInfo : rtxTokenInfo;

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.8 }}
      className="w-full max-w-md lg:ml-auto lg:mr-0 bg-transparent backdrop-blur-sm border-2 border-gold-500/50 rounded-3xl p-6 shadow-[0_0_50px_rgba(212,175,55,0.15)] relative overflow-hidden"
    >
      {/* Decorative Glow */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/20 rounded-full blur-3xl pointer-events-none"></div>

      <div className="flex justify-between items-center mb-8 relative z-10 border-b border-gold-500/30 pb-4">
        <h3 className="text-gold-400 font-serif font-bold text-xl tracking-widest uppercase shadow-sm">RottyX Exchange</h3>
        <button className="p-2 rounded-full transition-colors text-gold-400/70 hover:text-gold-300 hover:bg-gold-500/10 border border-gold-500/20">
          <Settings className="w-4 h-4" />
        </button>
      </div>

      <div className="space-y-3 relative z-10">
        {/* Input Box (Top) */}
        <div className="bg-black/40 backdrop-blur-md border border-gold-500/30 rounded-2xl p-5 transition-all hover:border-gold-500/60 focus-within:border-gold-400 shadow-inner">
          <div className="flex justify-between mb-3">
            <span className="text-gold-200/70 font-serif text-sm tracking-widest uppercase">{topToken.labelPay}</span>
            <span className="text-gold-400/60 text-xs font-serif tracking-wider uppercase">{topToken.balance}</span>
          </div>
          <div className="flex items-center justify-between">
            <input 
              type="number"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="0.0"
              className="bg-transparent text-white text-3xl font-serif font-bold w-full outline-none placeholder-slate-700"
            />
            <div className="flex items-center gap-2 bg-gradient-to-r from-slate-900 to-black border border-gold-500/40 rounded-full py-1.5 px-3 ml-2 shrink-0 shadow-[0_0_10px_rgba(212,175,55,0.2)]">
              {topToken.icon}
              <span className="text-gold-100 font-bold text-sm tracking-wider">{topToken.symbol}</span>
            </div>
          </div>
        </div>

        {/* Swap Arrow */}
        <div className="absolute left-1/2 -translate-x-1/2 top-[47%] -translate-y-1/2 z-20">
          <button 
            onClick={handleReverse}
            className="bg-black border-2 border-gold-500 text-gold-400 p-2.5 rounded-full hover:bg-gold-950 transition-all shadow-[0_0_15px_rgba(212,175,55,0.5)] hover:scale-110 active:scale-95"
          >
            <ArrowDownUp className="w-5 h-5" />
          </button>
        </div>

        {/* Output Box (Bottom) */}
        <div className="bg-black/40 backdrop-blur-md border border-gold-500/30 rounded-2xl p-5 transition-all shadow-inner">
          <div className="flex justify-between mb-3">
            <span className="text-gold-200/70 font-serif text-sm tracking-widest uppercase">{bottomToken.labelReceive}</span>
            <span className="text-gold-400/60 text-xs font-serif tracking-wider uppercase">{bottomToken.balance}</span>
          </div>
          <div className="flex items-center justify-between">
            <input 
              type="text"
              value={outputValue}
              readOnly
              placeholder="0.0"
              className="bg-transparent text-white text-3xl font-serif font-bold w-full outline-none placeholder-slate-700"
            />
            <div className="flex items-center gap-2 bg-gradient-to-r from-slate-900 to-black border border-gold-500/40 rounded-full py-1.5 px-3 ml-2 shrink-0 shadow-[0_0_10px_rgba(212,175,55,0.2)]">
              {bottomToken.icon}
              <span className="text-gold-100 font-bold text-sm tracking-wider">{bottomToken.symbol}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Raydium Router Info */}
      <div className="flex justify-between items-center px-3 mt-5 mb-6 text-xs font-serif font-medium tracking-widest uppercase">
        <span className="text-gold-200/50">Forged by</span>
        <span className="text-gold-400 flex items-center gap-2">
          <div className="w-2 h-2 bg-gold-400 rounded-full shadow-[0_0_5px_#d4af37]"></div>
          Raydium Router
        </span>
      </div>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={handleSwapClick}
        className="w-full bg-gradient-to-r from-gold-600 to-gold-400 text-slate-950 font-bold text-lg py-4 rounded-xl flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all hover:shadow-[0_0_30px_rgba(212,175,55,0.6)]"
      >
        <Wallet className="w-5 h-5" />
        SWAP (COMING SOON)
      </motion.button>

      {/* Coming Soon Popup Overlay */}
      <AnimatePresence>
        {showPopup && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="absolute bottom-24 left-1/2 -translate-x-1/2 z-[100] bg-slate-950 border border-gold-500 text-gold-400 px-6 py-3 rounded-full shadow-2xl flex items-center gap-3 font-medium whitespace-nowrap"
          >
            <Wallet className="w-5 h-5" />
            RottyX swap coming soon
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default SwapWidget;
