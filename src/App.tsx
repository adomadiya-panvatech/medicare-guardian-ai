import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { AppSidebar } from "@/components/AppSidebar";
import Index from "./pages/Index";
import Alerts from "./pages/Alerts";
import Providers from "./pages/Providers";
import NetworkAnalysis from "./pages/Network";
import NotFound from "./pages/NotFound";
import MedicareFraudDashboard from "./components/MedicareFraudDashboard";
import { Shield, Search, PlusCircleIcon, Bell, Settings, User, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useIsMobile } from "@/hooks/use-mobile";

const queryClient = new QueryClient();

const AppLayout = () => {
  const navigate = useNavigate();
  const isMobile = useIsMobile();

  return (
    <div className="flex min-h-screen w-full">
      <AppSidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <header className="bg-gradient-header border-b border-border/50 px-3 md:px-6 py-3 md:py-4 shadow-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 md:space-x-4">
              {isMobile && (
                <SidebarTrigger className="text-white hover:bg-white/10 p-2 -ml-2">
                  <Menu className="w-5 h-5" />
                </SidebarTrigger>
              )}
              <div className="flex items-center space-x-2 md:space-x-3">
                <div className="flex items-center justify-center w-8 h-8 md:w-10 md:h-10 bg-white/20 rounded-lg backdrop-blur-sm">
                  <Shield className="w-4 h-4 md:w-6 md:h-6 text-white" />
                </div>
                <div className="min-w-0">
                  <h1 className="text-sm md:text-xl font-bold text-white truncate">Medicare Fraud Detection</h1>
                  <p className="text-xs text-white/80 hidden sm:block">AI-Powered Healthcare Analytics</p>
                </div>
              </div>
            </div>

            <div className="flex items-center space-x-2 md:space-x-4">
              {!isMobile && (
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    placeholder="Search claims, providers..."
                    className="pl-10 w-60 lg:w-80 bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:bg-white/20"
                  />
                </div>
              )}

              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/10 h-8 w-8 md:h-10 md:w-10"
                onClick={() => navigate("/dashboard")}
              >
                <PlusCircleIcon className="w-4 h-4 md:w-5 md:h-5" />
              </Button>

              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 h-8 w-8 md:h-10 md:w-10">
                <Bell className="w-4 h-4 md:w-5 md:h-5" />
              </Button>

              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 h-8 w-8 md:h-10 md:w-10">
                <Settings className="w-4 h-4 md:w-5 md:h-5" />
              </Button>

              <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 h-8 w-8 md:h-10 md:w-10">
                <User className="w-4 h-4 md:w-5 md:h-5" />
              </Button>
            </div>
          </div>
        </header>

        <main className="flex-1 bg-background overflow-x-hidden">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/alerts" element={<Alerts />} />
            <Route path="/providers" element={<Providers />} />
            <Route path="/network" element={<NetworkAnalysis />} />
            <Route path="/dashboard" element={<MedicareFraudDashboard />} />
            {/* Catch-all route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <SidebarProvider>
          <AppLayout />
        </SidebarProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
