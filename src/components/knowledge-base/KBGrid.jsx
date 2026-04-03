import React from 'react';
import { Search, Plus, ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-react';
import KnowledgeBaseCard from './KBCard';

const KnowledgeBase = ({ onCreateNew }) => {
  const mockKB = [
    { id: 1, title: 'Test 1', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy', createdOn: '16/07/2023' },
    { id: 2, title: 'Test 2', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy', createdOn: '16/07/2023' },
    { id: 3, title: 'Test 3', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy', createdOn: '16/07/2023' },
    { id: 4, title: 'Test 4', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy', createdOn: '16/07/2023' },
    { id: 5, title: 'Test 5', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy', createdOn: '16/07/2023' },
    { id: 6, title: 'Test 6', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy', createdOn: '16/07/2023' },
  ];

  return (
    <div className="flex-1 flex flex-col min-h-0 bg-background overflow-hidden relative">
      <div className="px-8 py-2.5 bg-white/50 border-b border-slate-200/60 backdrop-blur-sm z-10 sticky top-0">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-black text-slate-800 tracking-tight">Knowledge Base</h2>
          <div className="flex items-center space-x-4">
            <div className="relative group min-w-[320px]">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-hover:text-primary transition-colors" size={16} />
              <input
                type="text"
                placeholder="Search Knowledge Base..."
                className="w-full bg-slate-50 border border-slate-200 focus:border-primary focus:ring-4 focus:ring-primary/5 rounded-xl pl-10 pr-4 py-2.5 text-sm outline-none transition-all placeholder:text-slate-400"
              />
            </div>
            <button
              onClick={onCreateNew}
              className="px-6 py-2.5 bg-primary hover:bg-primary-dark text-white rounded-xl text-sm font-bold shadow-lg shadow-primary/20 transition-all active:scale-95 flex items-center space-x-2"
            >
              <Plus className="w-5 h-5" />
              <span>Create New</span>
            </button>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-hidden px-8 py-1">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 h-fit pt-1">
          {mockKB.map((kb) => (
            <KnowledgeBaseCard key={kb.id} {...kb} />
          ))}
        </div>
      </div>

      <div className="h-14 flex items-center justify-between px-8 bg-white border-t border-slate-100/80 shadow-md shadow-slate-200/20 z-10 relative">
        <div className="text-sm font-semibold text-slate-500">
          {mockKB.length} Total items
        </div>

        <div className="flex items-center space-x-8">
          <div className="flex items-center space-x-3">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Rows per page</span>
            <select className="bg-slate-50 border border-slate-200 rounded-lg text-xs font-bold px-2 py-1 outline-none text-slate-700 cursor-pointer">
              <option>10</option>
              <option>20</option>
              <option>50</option>
            </select>
          </div>

          <div className="flex items-center space-x-4">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Page 1 of 1</span>
            <div className="flex items-center space-x-1.5 pl-4 border-l border-slate-200">
              <button className="p-1.5 text-slate-300 hover:text-slate-600 hover:bg-slate-50 rounded-lg transition-all disabled:opacity-30" disabled>
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button className="w-8 h-8 flex items-center justify-center bg-primary text-white text-xs font-bold rounded-lg shadow-sm">1</button>
              <button className="p-1.5 text-slate-300 hover:text-slate-600 hover:bg-slate-50 rounded-lg transition-all disabled:opacity-30" disabled>
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KnowledgeBase;
