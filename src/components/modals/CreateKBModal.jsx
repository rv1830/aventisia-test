import React from 'react';
import { X, Info, Plus } from 'lucide-react';
import { cn } from '../../lib/utils';
const CreateKBModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-[2px] transition-all animate-in fade-in duration-200">
      <div 
        className="bg-white w-full max-w-xl rounded-2xl shadow-2xl border border-slate-200 overflow-hidden animate-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-8 py-6 border-b border-slate-100 bg-slate-50/50">
          <div>
            <h3 className="text-xl font-bold text-slate-800">Create New Knowledge Base</h3>
            <p className="text-xs text-slate-500 mt-1 font-medium italic">Best for quick answers from documents, websites and text files.</p>
          </div>
          <button 
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-xl transition-all"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        
        <form className="p-8 space-y-6">
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">
              Name <span className="text-red-500 font-normal italic leading-none">(Cannot be edited later)</span> *
            </label>
            <input
              type="text"
              placeholder="e.g. Project Specs"
              className="w-full bg-white border border-slate-200 focus:border-primary focus:ring-4 focus:ring-primary/5 rounded-xl px-4 py-3 text-sm outline-none transition-all placeholder:text-slate-300"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">
              Description
            </label>
            <textarea
              placeholder="What this knowledge base contains..."
              className="w-full bg-white border border-slate-200 focus:border-primary focus:ring-4 focus:ring-primary/5 rounded-xl px-4 py-3 text-sm outline-none transition-all h-28 resize-none placeholder:text-slate-300"
            />
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">
                Vector Store *
              </label>
              <div className="relative">
                <select className="w-full bg-white border border-slate-200 focus:border-primary focus:ring-4 focus:ring-primary/5 rounded-xl px-4 py-3 text-sm outline-none transition-all appearance-none cursor-pointer pr-10">
                    <option>Qdrant</option>
                    <option>Pinecone</option>
                    <option>Weaviate</option>
                  </select>
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                    <Plus className="w-4 h-4 text-slate-400 rotate-45" />
                  </div>
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">
                LLM Embedding Model *
              </label>
              <div className="relative">
                <select className="w-full bg-white border border-slate-200 focus:border-primary focus:ring-4 focus:ring-primary/5 rounded-xl px-4 py-3 text-sm outline-none transition-all appearance-none cursor-pointer pr-10">
                  <option>text-embedding-ada-002</option>
                  <option>text-embedding-3-small</option>
                  <option>text-embedding-3-large</option>
                </select>
                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                  <Plus className="w-4 h-4 text-slate-400 rotate-45" />
                </div>
              </div>
            </div>
          </div>
          
          <div className="pt-4 flex justify-end">
            <button 
              type="button"
              className="px-8 py-3 bg-primary hover:bg-primary-dark text-white rounded-xl text-sm font-bold shadow-lg shadow-primary/30 transition-all active:scale-95 flex items-center space-x-2"
              onClick={onClose}
            >
              <span>Create</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateKBModal;
