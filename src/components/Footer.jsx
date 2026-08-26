import React from 'react';
import { Globe, Camera, Video, Send, MessageSquare } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative pt-20 pb-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-12 sm:px-16 lg:px-24 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img 
                src="/logo.png" 
                alt="RottyX Logo" 
                className="w-14 h-14 rounded-full shadow-sm drop-shadow-md"
              />
              <span className="font-serif font-bold text-2xl text-slate-900 tracking-wider">ROTTY X</span>
            </div>
            <p className="text-slate-700 font-sans text-sm leading-relaxed max-w-sm mb-8">
              The Ancient Legion of decentralized finance. Forging an eternal digital empire where honor meets prosperity.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/60 border border-gold-300 flex items-center justify-center text-slate-700 hover:text-gold-600 hover:border-gold-500 hover:bg-white transition-all shadow-sm">
                <Globe className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/60 border border-gold-300 flex items-center justify-center text-slate-700 hover:text-gold-600 hover:border-gold-500 hover:bg-white transition-all shadow-sm">
                <Send className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/60 border border-gold-300 flex items-center justify-center text-slate-700 hover:text-gold-600 hover:border-gold-500 hover:bg-white transition-all shadow-sm">
                <MessageSquare className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/60 border border-gold-300 flex items-center justify-center text-slate-700 hover:text-gold-600 hover:border-gold-500 hover:bg-white transition-all shadow-sm">
                <Camera className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/60 border border-gold-300 flex items-center justify-center text-slate-700 hover:text-gold-600 hover:border-gold-500 hover:bg-white transition-all shadow-sm">
                <Video className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links Column 1 */}
          <div>
            <h4 className="text-slate-900 font-serif font-bold uppercase tracking-widest mb-6">Explore</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-slate-700 hover:text-gold-600 text-sm transition-colors font-medium">Home</a></li>
              <li><a href="#" className="text-slate-700 hover:text-gold-600 text-sm transition-colors font-medium">About</a></li>
              <li><a href="#" className="text-slate-700 hover:text-gold-600 text-sm transition-colors font-medium">Marketplace</a></li>
            </ul>
          </div>

          {/* Links Column 2 */}
          <div>
            <h4 className="text-slate-900 font-serif font-bold uppercase tracking-widest mb-6">Ecosystem</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-slate-700 hover:text-gold-600 text-sm transition-colors font-medium">Staking</a></li>
              <li><a href="#" className="text-slate-700 hover:text-gold-600 text-sm transition-colors font-medium">Roadmap</a></li>
              <li><a href="#" className="text-slate-700 hover:text-gold-600 text-sm transition-colors font-medium">Governance</a></li>
            </ul>
          </div>

          {/* Links Column 3 */}
          <div>
            <h4 className="text-slate-900 font-serif font-bold uppercase tracking-widest mb-6">Resources</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-slate-700 hover:text-gold-600 text-sm transition-colors font-medium">Contact Us</a></li>
              <li><a href="#" className="text-slate-700 hover:text-gold-600 text-sm transition-colors font-medium">Important Links</a></li>
              <li><a href="#" className="text-slate-700 hover:text-gold-600 text-sm transition-colors font-medium flex items-center gap-2">Whitepaper <span className="bg-gold-100 text-gold-600 text-[10px] px-1.5 py-0.5 rounded border border-gold-200">V1.2</span></a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gold-300 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-slate-600 text-xs font-medium">
            &copy; {new Date().getFullYear()} RottyX Project. All rights reserved. Built for the Legion.
          </p>
          <p className="text-slate-500 text-[10px] max-w-lg">
            WARNING: Digital assets carry high risk. The value of NFTs and tokens can fluctuate wildly. Participate at your own discretion. Not financial advice.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
