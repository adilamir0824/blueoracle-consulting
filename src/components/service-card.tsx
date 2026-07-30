import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function ServiceCard({ icon: Icon, title, description }: ServiceCardProps) {
  return (
    <div className="group rounded-xl border border-slate-200 bg-white p-8 shadow-sm transition-colors hover:border-cyan-300 hover:shadow-md">
      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-cyan-50 text-cyan-600 transition-colors group-hover:bg-cyan-100">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mt-6 font-display text-xl font-semibold text-slate-900">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-slate-600">{description}</p>
    </div>
  );
}
