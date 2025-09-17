import { AlertTriangle, DollarSign, Shield, TrendingDown, Users } from "lucide-react";
import { DashboardHeader } from "@/components/DashboardHeader";
import { KPICard } from "@/components/KPICard";
import { FraudChart } from "@/components/FraudChart";
import { AlertsTable } from "@/components/AlertsTable";
import { ProviderAnalytics } from "@/components/ProviderAnalytics";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* <DashboardHeader /> */}

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-6">
        {/* Main Content Area */}
        <div className="lg:col-span-8 space-y-6">
          {/* KPI Overview Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
          <FraudChart />

        </div>

        {/* Right Sidebar */}
        <div className="lg:col-span-4 space-y-6">

          {/* Quick Actions Card */}
          <div className="bg-gradient-card border border-border/50 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 bg-primary/10 rounded-lg">
                <TrendingDown className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground">Quick Actions</h3>
            </div>
            <div className="space-y-3">
              <button className="w-full p-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium">
                Generate Report
              </button>
              <button className="w-full p-3 bg-muted text-muted-foreground rounded-lg hover:bg-muted/80 transition-colors font-medium">
                Review High-Risk Cases
              </button>
              <button className="w-full p-3 bg-muted text-muted-foreground rounded-lg hover:bg-muted/80 transition-colors font-medium">
                Export Data
              </button>
            </div>
          </div>

          {/* Recent Activity Card */}
          <div className="bg-gradient-card border border-border/50 rounded-lg p-6">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 bg-primary/10 rounded-lg">
                <AlertTriangle className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground">Recent Activity</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-danger rounded-full mt-2"></div>
                <div className="flex-1">
                  <p className="text-sm text-foreground font-medium">High-risk claim flagged</p>
                  <p className="text-xs text-muted-foreground">Provider ID: 12847 • 2 mins ago</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-warning rounded-full mt-2"></div>
                <div className="flex-1">
                  <p className="text-sm text-foreground font-medium">Unusual billing pattern detected</p>
                  <p className="text-xs text-muted-foreground">Provider ID: 98234 • 15 mins ago</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-success rounded-full mt-2"></div>
                <div className="flex-1">
                  <p className="text-sm text-foreground font-medium">Case resolved - $45K saved</p>
                  <p className="text-xs text-muted-foreground">Case ID: FR-2024-0892 • 1 hour ago</p>
                </div>
              </div>
            </div>
          </div>

          {/* Alerts Table */}
          <AlertsTable />
        </div>
      </div>

      {/* Bottom Section - Provider Analytics */}
      <div className="px-6 pb-6">
        <ProviderAnalytics />
      </div>
    </div>
  );
};

export default Index;
