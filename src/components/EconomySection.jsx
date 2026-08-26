import React, { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, RefreshCw } from 'lucide-react';

const EconomySection = () => {
  const [marketData, setMarketData] = useState({
    price: '0.000000',
    change: 'LIVE',
    volume: '12M',
  });
  const [isRefreshing, setIsRefreshing] = useState(false);

  const fetchPrice = useCallback(async () => {
    setIsRefreshing(true);
    try {
      const tokenAddress = 'GydeH85JRxmYifWFbHV8Fp4FQRnN5AFYXKCmXMN8rvRN';
      const response = await fetch(`https://lite-api.jup.ag/price/v3?ids=${tokenAddress}`);
      if (!response.ok) throw new Error('Network response was not ok');
      const jupData = await response.json();
      
      if (jupData[tokenAddress]) {
        const tokenData = jupData[tokenAddress];
        // Support both price and usdPrice depending on API response
        const rawPrice = parseFloat(tokenData.price || tokenData.usdPrice || 0);
        
        // Calculate Market Cap exactly like the reference project
        const amt = 357795337;
        const mcap = rawPrice * amt;
        
        const formatCurrency = (val) => {
          if (val === 0 || isNaN(val)) return '$0';
          if (val >= 1000000) return '$' + (val / 1000000).toFixed(2) + 'M';
          if (val >= 1000) return '$' + (val / 1000).toFixed(2) + 'K';
          return '$' + val.toLocaleString(undefined, { maximumFractionDigits: 2 });
        };
        
        setMarketData({
          price: rawPrice.toFixed(6),
          change: 'LIVE',
          volume: formatCurrency(mcap) // Use the volume field to show Market Cap
        });
      }
    } catch (error) {
      console.error('Failed to fetch token price:', error);
    } finally {
      setIsRefreshing(false);
    }
  }, []);

  useEffect(() => {
    fetchPrice();
    const intervalId = setInterval(fetchPrice, 60000);
    return () => clearInterval(intervalId);
  }, [fetchPrice]);

  const cards = [
    {
      title: "Legion NFT Series",
      image: "/economy-1.jpg",
      description: "Exclusive Roman-themed digital assets providing unparalleled governance and staking yields.",
    },
    {
      title: "Oracle of Wealth (Token)",
      image: "/economy-2.jpg",
      description: "The lifeblood of the empire. RTX powers transactions, staking, and market fees.",
    },
    {
      title: "Imperial Staking Pool",
      image: "/economy-3.jpg",
      description: "Lock your assets in the grand temples to earn passive yields and rare drops.",
    }
  ];

  return (
    <section id="economy" className="py-20 relative">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-12 lg:px-24 relative z-10">
        
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-12">
          <div className="w-12 h-12 bg-slate-900 border-2 border-gold-500 rounded flex items-center justify-center shadow-lg transform rotate-45">
            <span className="text-gold-500 font-serif font-bold text-xl transform -rotate-45">1</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 uppercase tracking-widest">
            Legionnaire Economy
          </h2>
        </div>

        {/* 4 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Static Cards */}
          {cards.map((card, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="bg-white border border-gold-200 rounded-xl shadow-sm hover:shadow-xl hover:border-gold-400 transition-all duration-300 flex flex-col h-full group overflow-hidden"
            >
              {/* Image Section (80% view) */}
              <div className="w-full relative bg-slate-100 border-b border-gold-200/60 overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 animate-pulse z-0"></div>
                <img src={card.image} alt={card.title} className="w-full h-auto object-contain relative z-10 group-hover:scale-105 transition-transform duration-700 ease-in-out" loading="lazy" />
              </div>
              
              {/* Text Section (20% view) */}
              <div className="p-4 md:p-5 flex flex-col flex-grow bg-white">
                <h3 className="text-lg font-serif font-bold text-slate-900 mb-1.5 leading-tight">{card.title}</h3>
                <p className="text-slate-600 font-sans text-xs leading-relaxed flex-grow">{card.description}</p>
                <button className="mt-3 text-xs font-bold text-gold-600 tracking-wider group-hover:text-gold-500 flex items-center gap-1 transition-colors uppercase">
                  Learn More <span className="text-sm leading-none">&rsaquo;</span>
                </button>
              </div>
            </motion.div>
          ))}

          {/* Live Data Widget Card */}
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-gradient-to-br from-gold-600 to-gold-400 border border-gold-300 rounded-xl p-8 shadow-[0_0_25px_rgba(212,175,55,0.3)] relative overflow-hidden flex flex-col h-full"
          >
            {/* White background glow */}
            <div className="absolute -top-10 -right-10 w-48 h-48 bg-white/30 rounded-full blur-3xl"></div>
            
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-6">
                <TrendingUp className="w-8 h-8 text-slate-950 drop-shadow-sm" />
                <div className="flex items-center gap-3">
                  <button 
                    onClick={fetchPrice}
                    disabled={isRefreshing}
                    className="p-1.5 rounded-full bg-white/20 text-slate-950 hover:bg-white/40 transition-colors border border-white/30 disabled:opacity-50 backdrop-blur-sm shadow-sm"
                    title="Refresh Live Data"
                  >
                    <RefreshCw className={`w-4 h-4 ${isRefreshing ? 'animate-spin' : ''}`} />
                  </button>
                  <span className="px-3 py-1 bg-slate-950 text-gold-400 border border-slate-800 shadow-md rounded-full text-xs font-bold tracking-wider">
                    LIVE
                  </span>
                </div>
              </div>
              
              <h3 className="text-slate-900/80 font-sans text-sm font-bold tracking-widest uppercase mb-1">RTX Token Price</h3>
              <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-8">
                <span className="text-3xl sm:text-4xl font-serif font-bold text-slate-950 tracking-tight break-all drop-shadow-sm">${marketData.price}</span>
                <span className="text-emerald-800 bg-emerald-100/60 px-2 py-0.5 rounded-full font-bold text-sm sm:text-base whitespace-nowrap shadow-sm border border-emerald-200/50">{marketData.change}</span>
              </div>

              {/* Animated Live Sparkline */}
              <div className="w-full h-16 mb-6 relative">
                <svg viewBox="0 0 100 30" className="w-full h-full overflow-visible" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stopColor="#020617" stopOpacity="0.2" />
                      <stop offset="100%" stopColor="#020617" stopOpacity="0" />
                    </linearGradient>
                    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                      <feGaussianBlur stdDeviation="1.5" result="blur" />
                      <feComposite in="SourceGraphic" in2="blur" operator="over" />
                    </filter>
                  </defs>
                  
                  {/* Animated Fill */}
                  <motion.path 
                    d="M0,25 C10,25 15,10 25,15 C35,20 40,5 50,10 C60,15 65,5 75,10 C85,15 90,0 100,0 L100,30 L0,30 Z" 
                    fill="url(#chartGradient)"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                  />
                  
                  {/* Animated Line drawing left to right */}
                  <motion.path 
                    d="M0,25 C10,25 15,10 25,15 C35,20 40,5 50,10 C60,15 65,5 75,10 C85,15 90,0 100,0" 
                    className="stroke-slate-950 stroke-[1.5] fill-none"
                    filter="url(#glow)"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                  />
                  
                  {/* Pulsing Dot at the leading edge */}
                  <motion.circle
                    cx="100" cy="0" r="1.5"
                    className="fill-slate-950"
                    filter="url(#glow)"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ 
                      scale: [1, 1.5, 1], 
                      opacity: [1, 0.7, 1] 
                    }}
                    transition={{ 
                      duration: 2, 
                      repeat: Infinity, 
                      ease: "easeInOut",
                      delay: 1.8
                    }}
                  />
                </svg>
              </div>

              <div className="pt-4 border-t border-slate-950/20 flex justify-between items-center">
                <span className="text-slate-900/80 font-bold text-sm uppercase tracking-wider">Market Cap</span>
                <span className="text-slate-950 font-bold drop-shadow-sm">{marketData.volume}</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default EconomySection;
