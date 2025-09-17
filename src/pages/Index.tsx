import { AlertTriangle, DollarSign, Shield, TrendingDown, Users } from "lucide-react";
import { DashboardHeader } from "@/components/DashboardHeader";
import { KPICard } from "@/components/KPICard";
import { FraudChart } from "@/components/FraudChart";
import { AlertsTable } from "@/components/AlertsTable";
import { ProviderAnalytics } from "@/components/ProviderAnalytics";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      
      <main className="p-6 space-y-6">
        {/* KPI Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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

        {/* Analytics & Alerts */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          <div className="xl:col-span-2">
            <AlertsTable />
          </div>
          <div className="space-y-6">
            <div className="bg-gradient-card border border-border/50 rounded-lg p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Shield className="w-6 h-6 text-primary" />
                <h3 className="font-semibold text-foreground">AI Detection Status</h3>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Real-time Monitoring</span>
                  <span className="text-success font-medium">Active</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">ML Model Accuracy</span>
                  <span className="text-foreground font-medium">94.7%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Claims Processed Today</span>
                  <span className="text-foreground font-medium">45,892</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">False Positive Rate</span>
                  <span className="text-success font-medium">2.1%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Provider Analytics */}
        <ProviderAnalytics />
      </main>
    </div>
  );
};

export default Index;
