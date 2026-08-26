import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDownUp, Settings, Wallet } from 'lucide-react';

const SwapWidget = () => {
  const [solAmount, setSolAmount] = useState('');
  
  // Rough estimate, in reality this would be fetched from an oracle or the Raydium router
  const rtxPerSol = 150000; 
  
  const rtxAmount = solAmount ? (parseFloat(solAmount) * rtxPerSol).toLocaleString(undefined, { maximumFractionDigits: 2 }) : '';

  const handleSwapClick = () => {
    // Redirect to Raydium swap with pre-filled parameters
    window.open('https://raydium.io/swap/?inputCurrency=sol&outputCurrency=GydeH85JRxmYifWFbHV8Fp4FQRnN5AFYXKCmXMN8rvRN', '_blank');
  };

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.8 }}
      className="w-full max-w-md mx-auto bg-slate-900/80 backdrop-blur-xl border border-gold-500/30 rounded-3xl p-5 sm:p-6 shadow-[0_0_40px_rgba(212,175,55,0.15)] relative overflow-hidden"
    >
      {/* Decorative Glow */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gold-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="flex justify-between items-center mb-6 relative z-10">
        <h3 className="text-white font-serif font-bold text-xl tracking-wide">Swap Tokens</h3>
        <button className="p-2 rounded-full hover:bg-slate-800 transition-colors text-slate-400 hover:text-gold-400">
          <Settings className="w-5 h-5" />
        </button>
      </div>

      <div className="space-y-2 relative z-10">
        {/* Input: SOL */}
        <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-4 transition-all focus-within:border-gold-500/50">
          <div className="flex justify-between mb-2">
            <span className="text-slate-400 text-sm font-medium">You Pay</span>
            <span className="text-slate-500 text-xs">Balance: 0.00 SOL</span>
          </div>
          <div className="flex items-center justify-between">
            <input 
              type="number"
              value={solAmount}
              onChange={(e) => setSolAmount(e.target.value)}
              placeholder="0.0"
              className="bg-transparent text-white text-3xl font-bold w-full outline-none placeholder-slate-700"
            />
            <div className="flex items-center gap-2 bg-slate-800 rounded-full py-1.5 px-3 ml-2 shrink-0">
              <div className="w-6 h-6 rounded-full bg-black flex items-center justify-center p-1">
                {/* Simple SOL logo representation */}
                <div className="w-full h-full bg-gradient-to-tr from-green-400 to-purple-500 rounded-full"></div>
              </div>
              <span className="text-white font-bold text-sm">SOL</span>
            </div>
          </div>
        </div>

        {/* Swap Arrow */}
        <div className="absolute left-1/2 -translate-x-1/2 top-[47%] -translate-y-1/2 z-20">
          <button className="bg-slate-900 border-4 border-slate-900 text-gold-400 p-2 rounded-xl hover:bg-slate-800 transition-colors shadow-lg hover:text-gold-300">
            <ArrowDownUp className="w-5 h-5" />
          </button>
        </div>

        {/* Output: RTX */}
        <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-4 transition-all">
          <div className="flex justify-between mb-2">
            <span className="text-slate-400 text-sm font-medium">You Receive</span>
            <span className="text-slate-500 text-xs">Balance: 0.00 RTX</span>
          </div>
          <div className="flex items-center justify-between">
            <input 
              type="text"
              value={rtxAmount}
              readOnly
              placeholder="0.0"
              className="bg-transparent text-white text-3xl font-bold w-full outline-none placeholder-slate-700"
            />
            <div className="flex items-center gap-2 bg-slate-800 rounded-full py-1.5 px-3 ml-2 shrink-0 border border-gold-500/30">
              <img src="/logo.png" alt="RTX" className="w-6 h-6 rounded-full" />
              <span className="text-white font-bold text-sm">RTX</span>
            </div>
          </div>
        </div>
      </div>

      {/* Raydium Router Info */}
      <div className="flex justify-between items-center px-2 mt-4 mb-6 text-xs font-medium">
        <span className="text-slate-500">Powered by</span>
        <span className="text-blue-400 flex items-center gap-1">
          <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
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
        SWAP ON RAYDIUM
      </motion.button>
    </motion.div>
  );
};

export default SwapWidget;
