import { Home, Mic, Settings } from "lucide-react";
import { useLocation, NavLink } from "react-router-dom";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { useSidebar } from "@/components/ui/sidebar";
import { PanelLeftIcon } from "lucide-react";

const items = [
  {
    title: "首页",
    url: "/",
    icon: Home,
  },
  {
    title: "口语",
    url: "/speaking",
    icon: Mic,
  },
  {
    title: "设置",
    url: "/settings",
    icon: Settings,
  },
];

function CollapseButton() {
  const { state, toggleSidebar } = useSidebar();

  return (
    <SidebarMenuButton onClick={toggleSidebar}>
      <PanelLeftIcon />
      <span className={state === "collapsed" ? "invisible" : ""}>收起</span>
    </SidebarMenuButton>
  );
}

export function AppSidebar() {
  const location = useLocation();

  return (
    <Sidebar collapsible="icon" className="border-t border-gray-200">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={location.pathname === item.url}
                  >
                    <NavLink to={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <CollapseButton />
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
