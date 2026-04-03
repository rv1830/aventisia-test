import React from 'react';
import { Search, Bell, ChevronDown, User } from 'lucide-react';
import { cn } from '../../lib/utils';

const Header = () => {
  return (
    <header className="h-16 flex items-center justify-between px-1 bg-secondary-dark border-b border-white/5 shadow-sm text-slate-300">
      <div className="flex items-center space-x-2">
        <div className="flex items-center space-x-2 bg-slate-800/50 px-3 py-1.5 rounded-lg border border-slate-700/50 hover:bg-slate-800 transition-all cursor-pointer">
          <span className="text-sm font-semibold text-white">Workspace 1</span>
          <ChevronDown className="w-4 h-4 text-slate-400" />
        </div>
      </div>

      <div className="flex-1 max-w-xl mx-8">
        <div className="relative group">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500 group-hover:text-primary transition-colors" size={18} />
          <input
            type="text"
            placeholder="Search..."
            className="w-full bg-slate-800/30 border border-slate-700/30 hover:border-slate-600 focus:border-primary focus:bg-slate-800/50 text-white rounded-lg pl-10 pr-4 py-2 text-sm outline-none transition-all"
          />
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <button className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors relative">
          <Bell className="w-5 h-5" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-secondary-dark shadow-sm"></span>
        </button>
        <div className="flex items-center space-x-3 border-l border-slate-800 pl-4">
          <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center text-sm font-bold text-white shadow-lg shadow-primary/20 cursor-pointer">
            RK
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
