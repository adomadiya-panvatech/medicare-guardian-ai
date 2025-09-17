import { AlertTriangle, Eye, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const alerts = [
  {
    id: "ALT-2024-001",
    provider: "Dr. Sarah Johnson",
    type: "Overbilling",
    riskScore: 89,
    amount: "$45,230",
    status: "High",
    date: "2024-01-15",
  },
  {
    id: "ALT-2024-002", 
    provider: "Metro Healthcare Center",
    type: "Upcoding",
    riskScore: 76,
    amount: "$23,410",
    status: "Medium",
    date: "2024-01-14",
  },
  {
    id: "ALT-2024-003",
    provider: "Dr. Michael Chen",
    type: "Phantom Billing",
    riskScore: 94,
    amount: "$67,890",
    status: "Critical",
    date: "2024-01-13",
  },
  {
    id: "ALT-2024-004",
    provider: "Valley Medical Group",
    type: "Unbundling",
    riskScore: 68,
    amount: "$18,750",
    status: "Medium", 
    date: "2024-01-12",
  },
];

export const AlertsTable = () => {
  const getRiskBadge = (status: string, score: number) => {
    if (status === "Critical" || score >= 90) {
      return <Badge className="bg-danger text-danger-foreground">Critical</Badge>;
    } else if (status === "High Risk" || score >= 80) {
      return <Badge className="bg-warning text-warning-foreground">High Risk</Badge>;
    } else {
      return <Badge className="bg-success/20 text-success">Medium Risk</Badge>;
    }
  };

  return (
    <Card className="bg-gradient-card border-border/50">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-lg font-semibold text-foreground">Recent Fraud Alerts</CardTitle>
        <Button variant="outline" size="sm">
          View All Alerts
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {alerts.map((alert) => (
            <div key={alert.id} className="flex items-center justify-between p-4 border border-border/50 rounded-lg bg-card hover:bg-card-header/30 transition-colors">
              <div className="flex items-center space-x-4">
                <div className="flex items-center justify-center w-10 h-10 bg-danger/10 rounded-lg">
                  <AlertTriangle className="w-5 h-5 text-danger" />
                </div>
                <div className="space-y-1">
                  <div className="flex items-center space-x-3">
                    <p className="font-medium text-foreground">{alert.provider}</p>
                    {getRiskBadge(alert.status, alert.riskScore)}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {alert.type} • {alert.amount} • Risk Score: {alert.riskScore}%
                  </p>
                  <p className="text-xs text-muted-foreground">Alert ID: {alert.id} • {alert.date}</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm">
                  <Eye className="w-4 h-4 mr-2" />
                  Investigate
                </Button>
                
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="w-4 h-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>View Details</DropdownMenuItem>
                    <DropdownMenuItem>Assign Investigator</DropdownMenuItem>
                    <DropdownMenuItem>Mark as False Positive</DropdownMenuItem>
                    <DropdownMenuItem className="text-danger">Escalate</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};