import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield } from 'lucide-react';

const monthlyFraudData = [
  { month: 'Jan', detected: 145, prevented: 124, amount: 2.3 },
  { month: 'Feb', detected: 178, prevented: 156, amount: 3.1 },
  { month: 'Mar', detected: 203, prevented: 189, amount: 4.2 },
  { month: 'Apr', detected: 167, prevented: 142, amount: 2.8 },
  { month: 'May', detected: 234, prevented: 218, amount: 5.4 },
  { month: 'Jun', detected: 198, prevented: 181, amount: 3.9 },
];

const fraudTypeData = [
  { name: 'Overbilling', value: 35, color: 'hsl(var(--chart-1))' },
  { name: 'Upcoding', value: 28, color: 'hsl(var(--chart-2))' },
  { name: 'Phantom Billing', value: 18, color: 'hsl(var(--chart-3))' },
  { name: 'Unbundling', value: 12, color: 'hsl(var(--chart-4))' },
  { name: 'Other', value: 7, color: 'hsl(var(--chart-5))' },
];

const COLORS = ['hsl(210, 85%, 45%)', 'hsl(185, 65%, 42%)', 'hsl(145, 70%, 45%)', 'hsl(35, 85%, 55%)', 'hsl(280, 65%, 55%)'];

export const FraudChart = () => {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-gradient-card border-border/50">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-foreground">Monthly Fraud Detection</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={monthlyFraudData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
                <YAxis stroke="hsl(var(--muted-foreground))" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'hsl(var(--card))',
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px'
                  }}
                />
                <Legend />
                <Bar dataKey="detected" fill="hsl(210, 85%, 45%)" name="Cases Detected" />
                <Bar dataKey="prevented" fill="hsl(185, 65%, 42%)" name="Fraud Prevented" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="bg-gradient-card border-border/50">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-foreground">Fraud Types Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={fraudTypeData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }: any) => `${name}: ${(Number(percent) * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {fraudTypeData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: 'hsl(var(--card))',
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px'
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Fraud Detection Trends + AI Detection Status in one row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Fraud Detection Trends */}
        <Card className="bg-gradient-card border-border/50">
          <CardHeader>
            <CardTitle className="text-lg font-semibold text-foreground">
              Fraud Detection Trends
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={monthlyFraudData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
                <YAxis stroke="hsl(var(--muted-foreground))" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "hsl(var(--card))",
                    border: "1px solid hsl(var(--border))",
                    borderRadius: "8px",
                  }}
                />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="amount"
                  stroke="hsl(145, 70%, 45%)"
                  strokeWidth={3}
                  name="Amount Saved ($M)"
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

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
      </div>
    </>
  );
};