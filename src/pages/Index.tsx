import { AlertTriangle, DollarSign, Shield, TrendingDown, Users } from "lucide-react";
import { DashboardHeader } from "@/components/DashboardHeader";
import { KPICard } from "@/components/KPICard";
import { FraudChart } from "@/components/FraudChart";
import { AlertsTable } from "@/components/AlertsTable";
import { ProviderAnalytics } from "@/components/ProviderAnalytics";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-hidden">
      <div className="flex flex-col lg:flex-row gap-4 lg:gap-6 p-4 lg:p-6 max-w-full">
        {/* Main Content Area */}
        <div className="flex-1 space-y-4 lg:space-y-6 min-w-0">
          {/* KPI Overview Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
            <KPICard
              title="Total Fraud Detected"
              value="$18.4M"
              change="12.5%"
              changeType="positive"
              icon={DollarSign}
              description="Amount saved through fraud prevention this quarter"
            />
            <KPICard
              title="Active Cases"
              value="847"
              change="8.2%"
              changeType="negative"
              icon={AlertTriangle}
              description="Currently under investigation"
            />
            <KPICard
              title="Risk Score Reduction"
              value="23%"
              change="5.1%"
              changeType="positive"
              icon={TrendingDown}
              description="Average provider risk score improvement"
            />
            <KPICard
              title="Monitored Providers"
              value="12,458"
              change="3.4%"
              changeType="neutral"
              icon={Users}
              description="Healthcare providers under active monitoring"
            />
          </div>

          {/* Charts Section */}
          <div className="w-full min-w-0">
            <FraudChart />
          </div>

          {/* Bottom Section - Provider Analytics (Mobile: moved to bottom) */}
          <div className="lg:hidden w-full min-w-0">
            <ProviderAnalytics />
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="w-full lg:w-80 xl:w-96 space-y-4 lg:space-y-6 flex-shrink-0">
          {/* Quick Actions Card */}
          <div className="bg-gradient-card border border-border/50 rounded-lg p-4 lg:p-6">
            <div className="flex items-center space-x-3 mb-4 lg:mb-6">
              <div className="p-2 bg-primary/10 rounded-lg flex-shrink-0">
                <Shield className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground text-sm lg:text-base">Quick Actions</h3>
            </div>
            <div className="space-y-3">
              <button className="w-full p-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium text-sm lg:text-base">
                Generate Report
              </button>
              <button className="w-full p-3 bg-muted text-muted-foreground rounded-lg hover:bg-muted/80 transition-colors font-medium text-sm lg:text-base">
                Review High-Risk Cases
              </button>
              <button className="w-full p-3 bg-muted text-muted-foreground rounded-lg hover:bg-muted/80 transition-colors font-medium text-sm lg:text-base">
                Export Data
              </button>
            </div>
          </div>

          {/* Recent Activity Card */}
          <div className="bg-gradient-card border border-border/50 rounded-lg p-4 lg:p-6">
            <div className="flex items-center space-x-3 mb-4 lg:mb-6">
              <div className="p-2 bg-primary/10 rounded-lg flex-shrink-0">
                <AlertTriangle className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground text-sm lg:text-base">Recent Activity</h3>
            </div>
            <div className="space-y-3 lg:space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-danger rounded-full mt-2 flex-shrink-0"></div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-foreground font-medium truncate">High-risk claim flagged</p>
                  <p className="text-xs text-muted-foreground">Provider ID: 12847 • 2 mins ago</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-warning rounded-full mt-2 flex-shrink-0"></div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-foreground font-medium truncate">Unusual billing pattern detected</p>
                  <p className="text-xs text-muted-foreground">Provider ID: 98234 • 15 mins ago</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-success rounded-full mt-2 flex-shrink-0"></div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-foreground font-medium truncate">Case resolved - $45K saved</p>
                  <p className="text-xs text-muted-foreground">Case ID: FR-2024-0892 • 1 hour ago</p>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Fraud Alerts Card */}
          <div className="bg-gradient-card border border-border/50 rounded-lg p-4 lg:p-6">
            <div className="flex items-center justify-between mb-4 lg:mb-6">
              <h3 className="font-semibold text-foreground text-sm lg:text-base">Recent Fraud Alerts</h3>
              <button className="text-xs text-primary hover:text-primary/80 font-medium">View All</button>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                <div className="flex items-center space-x-3 flex-1 min-w-0">
                  <div className="w-8 h-8 bg-danger/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <AlertTriangle className="w-4 h-4 text-danger" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-foreground truncate">Dr. Sarah Johnson</p>
                    <p className="text-xs text-muted-foreground">Overbilling • $45,230</p>
                  </div>
                </div>
                <span className="bg-danger/20 text-danger text-xs px-2 py-1 rounded-full font-medium flex-shrink-0">High Risk</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                <div className="flex items-center space-x-3 flex-1 min-w-0">
                  <div className="w-8 h-8 bg-warning/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <AlertTriangle className="w-4 h-4 text-warning" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-foreground truncate">Metro Healthcare</p>
                    <p className="text-xs text-muted-foreground">Upcoding • $23,410</p>
                  </div>
                </div>
                <span className="bg-warning/20 text-warning text-xs px-2 py-1 rounded-full font-medium flex-shrink-0">Medium</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section - Provider Analytics (Desktop: hidden on mobile) */}
      <div className="hidden lg:block px-4 lg:px-6 pb-4 lg:pb-6">
        <ProviderAnalytics />
      </div>
    </div>
  );
};

export default Index;
