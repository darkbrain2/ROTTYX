import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const MarketplacePreview = () => {
  const [startIndex, setStartIndex] = useState(0);

  const mockNFTs = [
    {
      id: 1,
      name: "Spartan-Class Heavy",
      tag: "Legendary Armor",
      image: "https://images.unsplash.com/photo-1605806616949-1e87b487cb2a?q=80&w=2070&auto=format&fit=crop",
      price: "150 RTX"
    },
    {
      id: 2,
      name: "Delphic Oracle",
      tag: "Mythic Artifact",
      image: "https://images.unsplash.com/photo-1544413660-299165566b1d?q=80&w=1964&auto=format&fit=crop",
      price: "320 RTX"
    },
    {
      id: 3,
      name: "Centurion's Blade",
      tag: "Epic Weapon",
      image: "https://images.unsplash.com/photo-1590248880220-4107297e20ec?q=80&w=1974&auto=format&fit=crop",
      price: "85 RTX"
    },
    {
      id: 4,
      name: "Gladiator's Helm",
      tag: "Rare Armor",
      image: "https://images.unsplash.com/photo-1636570643751-bb3cb6211be8?q=80&w=2080&auto=format&fit=crop",
      price: "45 RTX"
    },
    {
      id: 5,
      name: "Imperial Standard",
      tag: "Epic Banner",
      image: "https://images.unsplash.com/photo-1518991268305-6804ec6fc7ba?q=80&w=2070&auto=format&fit=crop",
      price: "200 RTX"
    }
  ];

  const nextSlide = () => {
    setStartIndex((prev) => (prev + 1) % (mockNFTs.length - 3)); // Showing 4 items, so max index is length - 4
  };

  const prevSlide = () => {
    setStartIndex((prev) => (prev === 0 ? mockNFTs.length - 4 : prev - 1));
  };

  const displayItems = mockNFTs.slice(startIndex, startIndex + 4);
  if (displayItems.length < 4) {
      displayItems.push(...mockNFTs.slice(0, 4 - displayItems.length));
  }

  return (
    <section id="marketplace" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-12 lg:px-24 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-slate-900 border-2 border-gold-500 rounded flex items-center justify-center shadow-lg transform rotate-45">
              <span className="text-gold-500 font-serif font-bold text-xl transform -rotate-45">2</span>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 uppercase tracking-widest">
                The Forge
              </h2>
              <p className="text-slate-600 mt-1 font-sans text-sm">Discover and trade legendary assets.</p>
            </div>
          </div>
          
          <div className="flex gap-3">
            <button 
              onClick={prevSlide}
              className="w-10 h-10 rounded-full border border-gold-400 flex items-center justify-center text-gold-600 hover:bg-gold-500 hover:text-white transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={nextSlide}
              className="w-10 h-10 rounded-full border border-gold-400 flex items-center justify-center text-gold-600 hover:bg-gold-500 hover:text-white transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* NFT Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence mode="wait">
            {displayItems.map((nft, index) => (
              <motion.div
                key={nft.id + "-" + index}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group relative bg-white rounded-xl p-3 border border-gold-200 hover:border-gold-400 transition-all duration-300 shadow-sm hover:shadow-xl"
              >
                <div className="relative aspect-[3/4] rounded-lg overflow-hidden mb-4">
                  <div className="absolute inset-0 bg-slate-100 animate-pulse"></div>
                  <img 
                    src={nft.image} 
                    alt={nft.name} 
                    className="w-full h-full object-cover relative z-10 group-hover:scale-110 transition-transform duration-700 ease-in-out mix-blend-normal"
                    loading="lazy"
                  />
                  <div className="absolute top-3 right-3 z-20 bg-white/90 backdrop-blur-md px-2 py-1 rounded text-xs font-bold text-gold-600 border border-gold-200 uppercase tracking-wider shadow-sm">
                    NFT Preview
                  </div>
                </div>
                
                <div className="px-2 pb-2">
                  <p className="text-gold-600 text-xs font-bold tracking-widest uppercase mb-1">{nft.tag}</p>
                  <h3 className="text-lg font-serif font-bold text-slate-900 mb-3 truncate">{nft.name}</h3>
                  <div className="flex justify-between items-center pt-3 border-t border-slate-100">
                    <span className="text-slate-500 text-sm">Price</span>
                    <span className="text-gold-600 font-bold">{nft.price}</span>
                  </div>
                  <button className="w-full mt-4 bg-slate-900 hover:bg-gold-500 text-white font-bold py-2 rounded transition-colors text-sm shadow-md">
                    MINT NOW
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

export default MarketplacePreview;
