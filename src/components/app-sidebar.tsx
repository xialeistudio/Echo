import { useTranslation } from "react-i18next";
import {
  Home,
  Mic,
  PanelLeftClose,
  PanelLeftOpen,
  Settings,
} from "lucide-react";
import { useLocation, NavLink } from "react-router-dom";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { useSidebar } from "@/components/ui/sidebar";

const items = [
  {
    titleKey: "nav.home",
    url: "/",
    icon: Home,
  },
  {
    titleKey: "nav.speaking",
    url: "/speaking",
    icon: Mic,
  },
  {
    titleKey: "nav.settings",
    url: "/settings",
    icon: Settings,
  },
];

function CollapseButton() {
  const { state, toggleSidebar } = useSidebar();
  const { t } = useTranslation();

  return (
    <SidebarMenuButton onClick={toggleSidebar}>
      {state === "collapsed" ? <PanelLeftOpen /> : <PanelLeftClose />}
      <span className={state === "collapsed" ? "invisible" : ""}>{t("nav.collapse")}</span>
    </SidebarMenuButton>
  );
}

export function AppSidebar() {
  const { t } = useTranslation();
  const location = useLocation();

  return (
    <Sidebar collapsible="icon" className="border-t border-gray-200">
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.url}>
                  <SidebarMenuButton
                    asChild
                    isActive={location.pathname === item.url}
                  >
                    <NavLink to={item.url}>
                      <item.icon />
                      <span>{t(item.titleKey)}</span>
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