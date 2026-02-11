import React from 'react';

export const Book3D: React.FC = () => {
  return (
    <div className="relative group perspective-[2000px] w-64 h-96 mx-auto md:w-80 md:h-[500px]">
      <div className="relative w-full h-full transition-transform duration-500 transform-style-3d group-hover:rotate-y-[-15deg] rotate-y-[-5deg]">
        
        {/* Front Cover */}
        <div className="absolute inset-0 bg-brand-900 rounded-r-md rounded-l-sm shadow-xl flex flex-col overflow-hidden backface-hidden z-20 border-l border-white/20">
          {/* Cover Art - Simulating a professional book cover */}
          <div className="h-full w-full bg-gradient-to-br from-brand-800 to-brand-950 p-6 flex flex-col justify-between relative">
            
            {/* Texture overlay */}
            <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
            
            {/* Top Badge */}
            <div className="relative z-10">
               <div className="inline-block px-3 py-1 bg-accent-500 text-white text-xs font-bold uppercase tracking-widest rounded-sm mb-4">
                 2025 Edition
               </div>
               <h1 className="text-3xl md:text-4xl font-serif font-bold text-white leading-tight mb-2">
                 Tax<br/>Compliance<br/><span className="text-brand-300">Handbook</span>
               </h1>
               <p className="text-brand-200 text-sm font-medium tracking-wide">For Ghanaian SMEs</p>
            </div>

            {/* Graphic Element */}
            <div className="relative z-10 flex-1 flex items-center justify-center">
              <div className="w-32 h-32 border-4 border-white/20 rounded-full flex items-center justify-center">
                 <div className="w-24 h-24 bg-white/10 rounded-full backdrop-blur-sm flex items-center justify-center">
                   <svg className="w-12 h-12 text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                   </svg>
                 </div>
              </div>
            </div>

            {/* Bottom Info */}
            <div className="relative z-10 border-t border-white/10 pt-4">
              <p className="text-white font-bold text-lg">LiteTax Series</p>
              <p className="text-brand-300 text-xs">Essential Guide Vol. 1</p>
            </div>
          </div>
          
          {/* Spine Highlight */}
          <div className="absolute left-0 top-0 bottom-0 w-3 bg-gradient-to-r from-white/20 to-transparent z-30"></div>
        </div>

        {/* Book Spine */}
        <div className="absolute top-1 bottom-1 left-0 w-12 bg-brand-950 transform origin-left rotate-y-90 translate-z-[1px] rounded-sm flex items-center justify-center">
           <span className="text-brand-200 text-xs font-bold uppercase tracking-widest rotate-90 whitespace-nowrap">LiteTax Ghana Guide</span>
        </div>

        {/* Pages (Thickness) */}
        <div className="absolute top-2 bottom-2 right-2 w-10 bg-white transform rotate-y-90 translate-x-[20px] translate-z-[-20px] shadow-inner bg-[url('https://www.transparenttextures.com/patterns/lined-paper.png')]"></div>
        <div className="absolute top-2 bottom-2 right-6 w-px bg-slate-200 transform translate-z-[-2px]"></div>
        <div className="absolute top-2 bottom-2 right-7 w-px bg-slate-200 transform translate-z-[-4px]"></div>
        <div className="absolute top-2 bottom-2 right-8 w-px bg-slate-200 transform translate-z-[-6px]"></div>

        {/* Back Cover (Usually not visible but good for 3D completeness) */}
        <div className="absolute inset-0 bg-brand-900 transform translate-z-[-40px] rounded-l-md shadow-2xl"></div>

        {/* Shadow */}
        <div className="absolute bottom-0 left-4 right-4 h-4 bg-black/40 blur-xl transform translate-y-8 rotate-x-90"></div>
      </div>
    </div>
  );
};