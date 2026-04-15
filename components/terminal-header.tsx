import { cn } from "@/lib/cn";

export function TerminalHeader({
  prompt = "$",
  children,
  className,
}: {
  prompt?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("font-mono text-sm text-muted mb-6", className)}>
      <span className="text-accent mr-2">{prompt}</span>
      {children}
    </div>
  );
}

export function PageTitle({ children, subtitle }: { children: React.ReactNode; subtitle?: React.ReactNode }) {
  return (
    <div className="mb-10">
      <h1 className="text-3xl md:text-4xl font-semibold tracking-tight">{children}</h1>
      {subtitle ? <p className="mt-3 text-muted max-w-xl">{subtitle}</p> : null}
    </div>
  );
}
