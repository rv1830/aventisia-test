import React from 'react';
import { Search, Bell, ChevronDown, Zap } from 'lucide-react';
import { cn } from '../../lib/utils';

const Header = () => {
  return (
    <header className="h-14 flex items-center justify-between px-6 bg-secondary text-slate-300 border border-white/5 relative z-10">
      <div className="flex items-center space-x-6 shrink-0">
        <div className="flex items-center space-x-2">
          <div className="w-7 h-7 rounded bg-[#5D5FEF] flex items-center justify-center shadow-lg shadow-[#5D5FEF]/20">
            <Zap className="text-white w-4 h-4" fill="currentColor" />
          </div>
          <span className="text-lg font-bold text-white tracking-tight">Workspace</span>
        </div>
 
        <div className="flex items-center space-x-2 bg-secondary-light/20 px-3 py-1 rounded-lg border border-white/5 hover:bg-secondary-light/40 transition-all cursor-default">
          <span className="text-[11px] font-medium text-slate-300">Workspace 1</span>
          <ChevronDown className="w-3.5 h-3.5 text-slate-500" />
        </div>
      </div>

      <div className="flex-1 max-w-2xl px-8">
        <div className="relative group">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 group-focus-within:text-indigo-400 transition-colors" />
          <input
            type="text"
            placeholder="Search..."
            className="w-full bg-[#1A1A35] border border-white/5 rounded-lg py-1.5 pl-10 pr-12 text-sm text-slate-200 placeholder:text-slate-500 focus:outline-none focus:ring-1 focus:ring-indigo-500/50 transition-all"
          />
          <div className="absolute right-3 top-1/2 -translate-y-1/2 px-1.5 py-0.5 rounded border border-white/10 bg-[#252545] text-[10px] text-slate-500 font-mono">
            ⌘K
          </div>
        </div>
      </div>

      <div className="flex items-center space-x-4 shrink-0">
        <div className="p-1.5 rounded-lg transition-colors relative cursor-default">
          <Bell className="w-5 h-5 text-slate-400" />
          <div className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-secondary"></div>
        </div>
        <div className="w-8 h-8 rounded-full bg-[#5D5FEF] flex items-center justify-center text-[11px] font-bold text-white shadow-lg shadow-[#5D5FEF]/20 cursor-default">
          GK
        </div>
      </div>
    </header>
  );
};

export default Header;
