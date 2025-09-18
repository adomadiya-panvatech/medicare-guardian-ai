import { AlertTriangle, DollarSign, Shield, TrendingDown, Users } from "lucide-react";
import { DashboardHeader } from "@/components/DashboardHeader";
import { KPICard } from "@/components/KPICard";
import { FraudChart } from "@/components/FraudChart";
import { AlertsTable } from "@/components/AlertsTable";
import { ProviderAnalytics } from "@/components/ProviderAnalytics";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="flex flex-col lg:flex-row gap-3 md:gap-4 lg:gap-6 p-3 md:p-4 lg:p-6 w-full overflow-x-hidden">
        {/* Main Content Area */}
        <div className="flex-1 space-y-3 md:space-y-4 lg:space-y-6 min-w-0 w-full">
          {/* KPI Overview Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
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
        <div className="w-full lg:w-80 xl:w-96 space-y-3 md:space-y-4 lg:space-y-6 flex-shrink-0">
          {/* Quick Actions Card */}
          <div className="bg-gradient-card border border-border/50 rounded-lg p-3 md:p-4 lg:p-6">
            <div className="flex items-center space-x-3 mb-3 md:mb-4 lg:mb-6">
              <div className="p-2 bg-primary/10 rounded-lg flex-shrink-0">
                <Shield className="w-4 h-4 md:w-5 md:h-5 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground text-sm md:text-base">Quick Actions</h3>
            </div>
            <div className="space-y-2 md:space-y-3">
              <button className="w-full p-2.5 md:p-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium text-sm">
                Generate Report
              </button>
              <button className="w-full p-2.5 md:p-3 bg-muted text-muted-foreground rounded-lg hover:bg-muted/80 transition-colors font-medium text-sm">
                Review High-Risk Cases
              </button>
              <button className="w-full p-2.5 md:p-3 bg-muted text-muted-foreground rounded-lg hover:bg-muted/80 transition-colors font-medium text-sm">
                Export Data
              </button>
            </div>
          </div>

          {/* AI Detection Status */}
        <Card className="bg-gradient-card border-border/50">
          <CardHeader>
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Shield className="w-5 h-5 text-primary" />
              </div>
              <CardTitle className="text-lg font-semibold text-foreground">
                AI Detection Status
              </CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Real-time Monitoring</span>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                <span className="text-success font-medium text-sm">Active</span>
              </div>
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
          </CardContent>
        </Card>

          {/* Recent Activity Card */}
          <div className="bg-gradient-card border border-border/50 rounded-lg p-3 md:p-4 lg:p-6">
            <div className="flex items-center space-x-3 mb-3 md:mb-4 lg:mb-6">
              <div className="p-2 bg-primary/10 rounded-lg flex-shrink-0">
                <AlertTriangle className="w-4 h-4 md:w-5 md:h-5 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground text-sm md:text-base">Recent Activity</h3>
            </div>
            <div className="space-y-2 md:space-y-3 lg:space-y-4">
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
          <div className="bg-gradient-card border border-border/50 rounded-lg p-3 md:p-4 lg:p-6">
            <div className="flex items-center justify-between mb-3 md:mb-4 lg:mb-6">
              <h3 className="font-semibold text-foreground text-sm md:text-base">Recent Fraud Alerts</h3>
              <button className="text-xs text-primary hover:text-primary/80 font-medium">View All</button>
            </div>
            <div className="space-y-2 md:space-y-3">
              <div className="flex items-start md:items-center p-2.5 md:p-3 bg-muted/30 rounded-lg">
                <div className="flex items-start md:items-center space-x-2 md:space-x-3 flex-1 min-w-0">
                  <div className="w-6 h-6 md:w-8 md:h-8 bg-danger/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 md:mt-0">
                    <AlertTriangle className="w-3 h-3 md:w-4 md:h-4 text-danger" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs md:text-sm font-medium text-foreground truncate">Dr. Sarah Johnson</p>
                    <p className="text-xs text-muted-foreground">Overbilling • $45,230</p>
                  </div>
                </div>
                <span className="bg-danger/20 text-danger text-xs px-1.5 md:px-2 py-0.5 md:py-1 rounded-full font-medium flex-shrink-0 ml-1">High Risk</span>
              </div>
              <div className="flex items-start md:items-center p-2.5 md:p-3 bg-muted/30 rounded-lg">
                <div className="flex items-start md:items-center space-x-2 md:space-x-3 flex-1 min-w-0">
                  <div className="w-6 h-6 md:w-8 md:h-8 bg-warning/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 md:mt-0">
                    <AlertTriangle className="w-3 h-3 md:w-4 md:h-4 text-warning" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs md:text-sm font-medium text-foreground truncate">Metro Healthcare</p>
                    <p className="text-xs text-muted-foreground">Upcoding • $23,410</p>
                  </div>
                </div>
                <span className="bg-warning/20 text-warning text-xs px-1.5 md:px-2 py-0.5 md:py-1 rounded-full font-medium flex-shrink-0 ml-1">Medium</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section - Provider Analytics (Desktop: hidden on mobile) */}
      <div className="hidden lg:block px-3 md:px-4 lg:px-6 pb-3 md:pb-4 lg:pb-6">
        <ProviderAnalytics />
      </div>
    </div>
  );
};

export default Index;
