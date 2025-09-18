import { BarChart3, Shield, Users, Network, AlertTriangle, Menu, ChevronLeft, ChevronRight } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
  useSidebar,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";

const navigationItems = [
  { title: "Dashboard", url: "/", icon: BarChart3 },
  { title: "Active Alerts", url: "/alerts", icon: AlertTriangle },
  { title: "Provider Analysis", url: "/providers", icon: Users },
  { title: "Network Analysis", url: "/network", icon: Network },
];

export function AppSidebar() {
  const { state, toggleSidebar, isMobile } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;
  const collapsed = state === "collapsed";

  const isActive = (path: string) => {
    if (path === "/") return currentPath === "/";
    return currentPath.startsWith(path);
  };

  return (
    <Sidebar
      className="transition-all duration-300 ease-in-out"
      collapsible="icon"
      variant="sidebar"
    >
      <SidebarHeader className="border-b border-border/50">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Shield className="w-6 h-6 text-primary" />
            </div>
            {!collapsed && (
              <div className="flex-1 min-w-0">
                <h2 className="font-bold text-foreground truncate">Medicare Fraud</h2>
                <p className="text-xs text-muted-foreground truncate">Detection System</p>
              </div>
            )}
          </div>
          
          {/* Collapse Toggle Button */}
          <Button
            variant="ghost"
            size="sm"
            onClick={toggleSidebar}
            className="h-8 w-8 p-0 hover:bg-muted"
            aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            {collapsed ? (
              <ChevronRight className="h-4 w-4" />
            ) : (
              <ChevronLeft className="h-4 w-4" />
            )}
          </Button>
        </div>
      </SidebarHeader>

      <SidebarContent className="flex flex-col flex-1">
        {/* Navigation */}
        <SidebarGroup className="flex-1">
          {!collapsed && (
            <SidebarGroupLabel className="px-4 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              Navigation
            </SidebarGroupLabel>
          )}
          <SidebarGroupContent>
            <SidebarMenu className="space-y-1 px-3">
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.url}
                      end={item.url === "/"}
                      className={({ isActive: navActive }) =>
                        `flex items-center space-x-3 px-3 py-2.5 rounded-lg font-medium transition-all duration-200 relative group
                        ${
                          navActive || isActive(item.url)
                            ? "bg-primary/10 text-primary border-r-2 border-primary" 
                            : "text-muted-foreground hover:bg-muted hover:text-foreground" 
                        }`
                      }
                    >
                      <item.icon className="w-5 h-5 flex-shrink-0" />
                      {!collapsed && (
                        <span className="truncate">{item.title}</span>
                      )}
                      {collapsed && (
                        <div className="absolute left-full ml-2 px-2 py-1 bg-popover text-popover-foreground text-sm rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap z-50">
                          {item.title}
                        </div>
                      )}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      {/* Footer */}
      <SidebarFooter className="border-t border-border/50">
        {!collapsed ? (
          <div className="p-4">
            <div className="text-xs">
              <p className="font-medium text-foreground mb-2">AI Detection Status</p>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-muted-foreground">Active & Monitoring</span>
              </div>
            </div>
          </div>
        ) : (
          <div className="p-4 flex justify-center">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" title="AI Detection Status: Active & Monitoring"></div>
          </div>
        )}
      </SidebarFooter>
    </Sidebar>
  );
}
