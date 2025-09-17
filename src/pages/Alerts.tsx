import { AlertTriangle, Clock, DollarSign, TrendingUp } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const Alerts = () => {
  const alertsData = [
    {
      id: "AL-2024-001",
      provider: "Dr. Smith Medical Center",
      type: "Overbilling",
      severity: "high",
      amount: "$125,000",
      timestamp: "2 hours ago",
      status: "Under Review"
    },
    {
      id: "AL-2024-002",
      provider: "Regional Health Clinic",
      type: "Duplicate Claims",
      severity: "medium",
      amount: "$45,000",
      timestamp: "4 hours ago",
      status: "Investigating"
    },
    {
      id: "AL-2024-003",
      provider: "Metro Diagnostic Center",
      type: "Phantom Billing",
      severity: "high",
      amount: "$89,500",
      timestamp: "6 hours ago",
      status: "Escalated"
    },
    {
      id: "AL-2024-004",
      provider: "Coastal Medical Group",
      type: "Upcoding",
      severity: "low",
      amount: "$12,300",
      timestamp: "8 hours ago",
      status: "Resolved"
    }
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "high": return "bg-destructive text-destructive-foreground";
      case "medium": return "bg-warning text-warning-foreground";
      case "low": return "bg-muted text-muted-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Under Review": return "bg-primary text-primary-foreground";
      case "Investigating": return "bg-warning text-warning-foreground";
      case "Escalated": return "bg-destructive text-destructive-foreground";
      case "Resolved": return "bg-success text-success-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="border-b border-border/50 pb-6">
        <h1 className="text-3xl font-bold text-foreground">Active Alerts</h1>
        <p className="text-muted-foreground mt-2">Real-time fraud detection alerts and investigations</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="bg-gradient-card border-border/50">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Active Alerts</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-3">
              <AlertTriangle className="w-8 h-8 text-destructive" />
              <div>
                <p className="text-2xl font-bold text-foreground">847</p>
                <p className="text-xs text-success">+12% from last week</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-card border-border/50">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">High Priority</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-3">
              <TrendingUp className="w-8 h-8 text-destructive" />
              <div>
                <p className="text-2xl font-bold text-foreground">23</p>
                <p className="text-xs text-destructive">Requires immediate attention</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-card border-border/50">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Potential Savings</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-3">
              <DollarSign className="w-8 h-8 text-success" />
              <div>
                <p className="text-2xl font-bold text-foreground">$2.4M</p>
                <p className="text-xs text-success">From current alerts</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-card border-border/50">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Avg Resolution Time</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-3">
              <Clock className="w-8 h-8 text-primary" />
              <div>
                <p className="text-2xl font-bold text-foreground">4.2 days</p>
                <p className="text-xs text-primary">-15% improvement</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Alerts Table */}
      <Card className="bg-gradient-card border-border/50">
        <CardHeader>
          <CardTitle className="text-foreground">Recent Alerts</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Alert ID</TableHead>
                <TableHead>Provider</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Severity</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Time</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {alertsData.map((alert) => (
                <TableRow key={alert.id}>
                  <TableCell className="font-medium text-primary">{alert.id}</TableCell>
                  <TableCell className="text-foreground">{alert.provider}</TableCell>
                  <TableCell className="text-foreground">{alert.type}</TableCell>
                  <TableCell>
                    <Badge className={getSeverityColor(alert.severity)}>
                      {alert.severity.toUpperCase()}
                    </Badge>
                  </TableCell>
                  <TableCell className="font-medium text-foreground">{alert.amount}</TableCell>
                  <TableCell className="text-muted-foreground">{alert.timestamp}</TableCell>
                  <TableCell>
                    <Badge className={getStatusColor(alert.status)}>
                      {alert.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default Alerts;