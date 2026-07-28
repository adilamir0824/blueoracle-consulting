import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function ServiceCard({ icon: Icon, title, description }: ServiceCardProps) {
  return (
    <div className="group rounded-xl border border-white/5 bg-navy-900/50 p-8 transition-colors hover:border-gold-500/20 hover:bg-navy-800/50">
      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gold-500/10 text-gold-500 transition-colors group-hover:bg-gold-500/20">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mt-6 font-display text-xl font-semibold text-white">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-slate-400">{description}</p>
    </div>
  );
}
