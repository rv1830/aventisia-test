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
      <h3 className="px-6 mb-3 text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none">
        {title}
      </h3>
    )}
    <div className="space-y-0.5">
      {children}
    </div>
  </div>
);

const SidebarItem = ({ icon: Icon, label, isActive = false, isStatic = true }) => {
  return (
    <div
      className={cn(
        "flex items-center px-6 py-2.5 text-sm font-semibold transition-all cursor-default group relative",
        isActive
          ? "bg-[#EEF2FF] text-[#4F46E5] border-l-4 border-[#4F46E5]"
          : "text-slate-500 hover:bg-slate-50 hover:text-slate-800"
      )}
    >
      <Icon className={cn("w-5 h-5 mr-3 shrink-0", isActive ? "text-[#4F46E5]" : "text-slate-400 group-hover:text-slate-600")} />
      <span>{label}</span>
    </div>
  );
};

const Sidebar = () => {
  return (
    <div className="w-52 h-full bg-white flex flex-col text-slate-600 shadow-sm overflow-hidden transition-all duration-300">
      <div className="flex-1 overflow-y-auto py-6 scrollbar-hide border-r border-slate-100">
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
