import React from 'react';
import { X, Info, Plus, ChevronDown } from 'lucide-react';
import { cn } from '../../lib/utils';
const CreateKBModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex justify-end bg-slate-900/40 backdrop-blur-[2px] transition-all duration-300"
      onClick={onClose}
    >
      <div 
        className="bg-white w-full max-w-md h-full shadow-2xl border-l border-slate-200 overflow-hidden flex flex-col transition-all duration-500 ease-in-out translate-x-0"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-8 py-6 border-b border-slate-100 bg-white sticky top-0 z-10">
          <div>
            <h3 className="text-xl font-bold text-slate-800">Create New Knowledge Base</h3>
            <p className="text-sm text-slate-500 mt-1 font-medium">Best for quick answers from documents, websites and text files.</p>
          </div>
          <button 
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-xl transition-all"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
        
        {/* Form Content */}
        <form className="flex-1 overflow-y-auto p-8 space-y-8">
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2.5">
              Name <span className="text-slate-400 font-medium">(Cannot be edited later)</span> <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              placeholder="Name"
              className="w-full bg-white border border-slate-200 focus:border-primary focus:ring-4 focus:ring-primary/5 rounded-xl px-4 py-3 text-sm outline-none transition-all placeholder:text-slate-300"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2.5">
              Description
            </label>
            <textarea
              placeholder="Description"
              className="w-full bg-white border border-slate-200 focus:border-primary focus:ring-4 focus:ring-primary/5 rounded-xl px-4 py-3 text-sm outline-none transition-all h-32 resize-none placeholder:text-slate-300"
            />
          </div>
          
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2.5">
              Vector Store <span className="text-red-500">*</span>
            </label>
            <div className="relative group">
              <select className="w-full bg-white border border-slate-200 group-hover:border-slate-300 focus:border-primary focus:ring-4 focus:ring-primary/5 rounded-xl px-4 py-3 text-sm outline-none transition-all appearance-none cursor-pointer pr-10 text-slate-600">
                  <option>Qdrant</option>
                  <option>Pinecone</option>
                  <option>Weaviate</option>
                </select>
                <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                  <ChevronDown className="w-5 h-5" />
                </div>
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2.5">
              LLM Embedding Model <span className="text-red-500">*</span>
            </label>
            <div className="relative group">
              <select className="w-full bg-white border border-slate-200 group-hover:border-slate-300 focus:border-primary focus:ring-4 focus:ring-primary/5 rounded-xl px-4 py-3 text-sm outline-none transition-all appearance-none cursor-pointer pr-10 text-slate-600">
                <option>text-embedding-ada-002</option>
                <option>text-embedding-3-small</option>
                <option>text-embedding-3-large</option>
              </select>
              <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                <ChevronDown className="w-5 h-5" />
              </div>
            </div>
          </div>
        </form>

        {/* Footer Area with Button */}
        <div className="px-8 py-6 border-t border-slate-100 bg-white sticky bottom-0 z-10 flex justify-end">
            <button 
              type="button"
              className="px-10 py-2.5 bg-[#4F46E5] hover:bg-[#4338CA] text-white rounded-xl text-sm font-bold shadow-lg shadow-primary/20 transition-all active:scale-95 flex items-center space-x-2"
              onClick={onClose}
            >
              <span>Create</span>
            </button>
        </div>
      </div>
    </div>
  );
};

export default CreateKBModal;
