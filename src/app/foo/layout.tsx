import Sidebar from "@/components/Sidebar";

export default function FooLayout({
  children,
}: {
  children: React.ReactNode,
}) {
  return (
    <div className="min-h-screen flex overflow-hidden bg-gray-800">
      <div>
        <Sidebar />
      </div>
      <div className="flex-1 overflow-auto">
        {children}
      </div>
    </div>
  );
}
