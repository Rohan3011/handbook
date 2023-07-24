export interface DashboardTitleProps {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
}

export default function DashboardTitle({
  title,
  subtitle,
  children,
}: DashboardTitleProps) {
  return (
    <div className="container flex items-center pb-8">
      <div className="space-y-2">
        <h1 className="text-4xl font-bold">{title}</h1>
        <h4 className="text-muted-foreground">{subtitle}</h4>
      </div>
      <div className="ml-auto">{children}</div>
    </div>
  );
}
