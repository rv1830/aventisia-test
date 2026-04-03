import React from 'react';
import { MoreVertical, Calendar } from 'lucide-react';

const KnowledgeBaseCard = ({ title, description, createdOn }) => {
  return (
    <div className="group bg-white rounded-xl border border-slate-200/60 p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:border-primary/20">
      <div className="flex items-start justify-between mb-4">
        <h4 className="text-lg font-bold text-slate-800 group-hover:text-primary transition-colors pr-2 truncate">
          {title}
        </h4>
        <button className="text-slate-400 hover:text-slate-600 transition-colors p-1.5 hover:bg-slate-50 rounded-lg">
          <MoreVertical className="w-5 h-5 shrink-0" />
        </button>
      </div>
      
      <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-3 min-h-[4.5rem]">
        {description}
      </p>
      
      <div className="flex items-center text-slate-400 text-xs font-medium uppercase tracking-tight">
        <Calendar className="w-3.5 h-3.5 mr-2 text-slate-300" />
        Created on: <span className="ml-1 text-slate-600">{createdOn}</span>
      </div>
    </div>
  );
};

export default KnowledgeBaseCard;
