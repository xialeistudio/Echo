import { Outlet } from "react-router-dom";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

export default function Layout() {
  return (
    <SidebarProvider
      defaultOpen={true}
      style={
        {
          "--sidebar-width": "150px",
          "--sidebar-width-icon": "48px",
        } as React.CSSProperties
      }
    >
      <AppSidebar />
      <main className="flex-1 flex flex-col h-screen w-full border-t border-border">
        <div className="flex-1 p-6 flex flex-col">
          <Outlet />
        </div>
      </main>
    </SidebarProvider>
  );
}
