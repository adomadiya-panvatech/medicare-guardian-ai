import { BarChart3, Shield, Users, Network, AlertTriangle, Menu } from "lucide-react";
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
  useSidebar,
} from "@/components/ui/sidebar";

const navigationItems = [
  { title: "Dashboard", url: "/", icon: BarChart3 },
  { title: "Active Alerts", url: "/alerts", icon: AlertTriangle },
  { title: "Provider Analysis", url: "/providers", icon: Users },
  { title: "Network Analysis", url: "/network", icon: Network },
];

export function AppSidebar() {
  const { state, toggleSidebar } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;
  const collapsed = state === "collapsed";

  const isActive = (path: string) => {
    if (path === "/") return currentPath === "/";
    return currentPath.startsWith(path);
  };

  return (
    <Sidebar
      className={`${collapsed ? "w-16" : "w-64"} transition-all duration-300`}
      collapsible="icon"
    >
      <SidebarContent className="bg-white border-r border-gray-200 flex flex-col min-h-screen">
        {/* Header */}
        <div className="p-6 border-b border-gray-200 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-gray-100 rounded-lg">
              <Shield className="w-6 h-6 text-gray-700" />
            </div>
            {!collapsed && (
              <div>
                <h2 className="font-bold text-gray-900">Medicare Fraud</h2>
                <p className="text-xs text-gray-500">Detection System</p>
              </div>
            )}
          </div>
          {/* Mobile Toggle */}
          <button
            className="lg:hidden p-2 rounded-md hover:bg-gray-100"
            onClick={toggleSidebar}
          >
            <Menu className="w-5 h-5 text-gray-700" />
          </button>
        </div>

        {/* Navigation */}
        <SidebarGroup>
          {!collapsed && (
            <SidebarGroupLabel className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
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
                        `flex items-center space-x-3 px-3 py-2 rounded-lg font-medium transition-colors
                        ${
                          navActive || isActive(item.url)
                            ? "bg-gray-100 text-gray-900 shadow-sm" // active
                            : "text-gray-600 hover:bg-gray-50 hover:text-gray-900" // default + hover
                        }`
                      }
                    >
                      <item.icon className="w-5 h-5 flex-shrink-0" />
                      {!collapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Footer */}
        {!collapsed && (
          <div className="mt-auto p-4 border-t border-gray-200">
            <div className="text-xs text-gray-500">
              <p className="font-medium text-gray-700">AI Detection Status</p>
              <div className="flex items-center space-x-2 mt-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-gray-600">Active & Monitoring</span>
              </div>
            </div>
          </div>
        )}
      </SidebarContent>
    </Sidebar>
  );
}
