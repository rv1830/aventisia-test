import React from 'react';
import { 
  BarChart2, 
  Cpu, 
  Library, 
  Globe, 
  Settings, 
  Layers, 
  Zap, 
  Briefcase, 
  Terminal, 
  ShieldCheck, 
  BookOpen, 
  Key, 
  UserCircle, 
  Puzzle, 
  History 
} from 'lucide-react';
import { cn } from '../../lib/utils';

const SidebarSection = ({ title, children }) => (
  <div className="mb-6">
    {title && (
      <h3 className="px-6 mb-2 text-xs font-semibold text-text-muted uppercase tracking-wider">
        {title}
      </h3>
    )}
    <div className="space-y-1 px-3">
      {children}
    </div>
  </div>
);

const SidebarItem = ({ icon: Icon, label, isActive = false, isStatic = true }) => {
  return (
    <div
      className={cn(
        "flex items-center px-3 py-2 text-sm font-medium rounded-lg transition-colors cursor-pointer",
        isActive 
          ? "bg-primary text-white" 
          : "text-slate-400 hover:bg-slate-800 hover:text-white"
      )}
    >
      <Icon className={cn("w-5 h-5 mr-3", isActive ? "text-white" : "text-slate-400")} />
      <span>{label}</span>
    </div>
  );
};

const Sidebar = () => {
  return (
    <div className="w-64 h-full bg-secondary-dark flex flex-col text-slate-300 border-r border-slate-800/50">
      <div className="h-16 flex items-center px-6 border-b border-white/5">
        <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <Zap className="text-white w-5 h-5" fill="currentColor" />
            </div>
            <span className="text-xl font-bold text-white tracking-tight">Workspace</span>
        </div>
      </div>
      
      <div className="flex-1 overflow-y-auto py-6 scrollbar-hide">
        <SidebarSection title="My Projects">
          <SidebarItem icon={UserCircle} label="Agents" />
          <SidebarItem icon={Cpu} label="AI Models" />
          <SidebarItem icon={Library} label="Library" />
        </SidebarSection>
        
        <SidebarSection title="Orchestrator">
          <SidebarItem icon={Globe} label="Published" />
          <SidebarItem icon={Settings} label="Machines" />
          <SidebarItem icon={Layers} label="Queues" />
          <SidebarItem icon={Zap} label="Triggers" />
          <SidebarItem icon={Briefcase} label="Jobs" />
          <SidebarItem icon={Terminal} label="Executions" />
          <SidebarItem icon={ShieldCheck} label="Vault" />
        </SidebarSection>
        
        <SidebarSection>
          <SidebarItem icon={BookOpen} label="Knowledge Base" isActive={true} />
          <SidebarItem icon={Key} label="Key Store" />
        </SidebarSection>
        
        <SidebarSection title="Admin">
          <SidebarItem icon={UserCircle} label="Tenant" />
          <SidebarItem icon={Puzzle} label="Integrations" />
          <SidebarItem icon={History} label="Audit Log" />
        </SidebarSection>
      </div>
    </div>
  );
};

export default Sidebar;
