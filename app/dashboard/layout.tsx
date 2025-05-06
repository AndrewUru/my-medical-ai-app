export const metadata = {
  title: "Dashboard | Análisis Médico AI",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
