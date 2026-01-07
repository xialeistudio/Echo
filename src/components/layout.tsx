import { Outlet } from "react-router-dom";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

export default function Layout() {
  return (
    <SidebarProvider
      className="border-t border-gray-200"
      defaultOpen={true}
      style={
        {
          "--sidebar-width": "150px",
          "--sidebar-width-icon": "48px",
        } as React.CSSProperties
      }
    >
      <AppSidebar />
      <main className="p-2">
        <Outlet />
      </main>
    </SidebarProvider>
  );
}
