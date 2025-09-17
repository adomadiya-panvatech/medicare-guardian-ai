import { Users, TrendingUp, AlertTriangle, DollarSign } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const Providers = () => {
  const providersData = [
    {
      id: "PR-12847",
      name: "Metro Medical Center",
      specialty: "Cardiology",
      riskScore: 85,
      totalClaims: "2,450",
      suspiciousClaims: 45,
      totalAmount: "$1.2M",
      status: "High Risk"
    },
    {
      id: "PR-98234",
      name: "Regional Health Clinic", 
      specialty: "General Practice",
      riskScore: 62,
      totalClaims: "1,890",
      suspiciousClaims: 12,
      totalAmount: "$890K",
      status: "Medium Risk"
    },
    {
      id: "PR-45678",
      name: "Coastal Diagnostic Center",
      specialty: "Radiology",
      riskScore: 34,
      totalClaims: "3,200",
      suspiciousClaims: 8,
      totalAmount: "$2.1M", 
      status: "Low Risk"
    },
    {
      id: "PR-78901",
      name: "Downtown Surgery Center",
      specialty: "Surgery",
      riskScore: 78,
      totalClaims: "1,567",
      suspiciousClaims: 28,
      totalAmount: "$1.8M",
      status: "High Risk"
    }
  ];

  const getRiskColor = (score: number) => {
    if (score >= 70) return "bg-destructive text-destructive-foreground";
    if (score >= 40) return "bg-warning text-warning-foreground";
    return "bg-success text-success-foreground";
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "High Risk": return "bg-destructive text-destructive-foreground";
      case "Medium Risk": return "bg-warning text-warning-foreground";
      case "Low Risk": return "bg-success text-success-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="border-b border-border/50 pb-6">
        <h1 className="text-3xl font-bold text-foreground">Provider Analysis</h1>
        <p className="text-muted-foreground mt-2">Comprehensive analysis of healthcare provider billing patterns and risk assessment</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="bg-gradient-card border-border/50">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Providers</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-3">
              <Users className="w-8 h-8 text-primary" />
              <div>
                <p className="text-2xl font-bold text-foreground">12,458</p>
                <p className="text-xs text-success">+3.4% this month</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-card border-border/50">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">High Risk Providers</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-3">
              <AlertTriangle className="w-8 h-8 text-destructive" />
              <div>
                <p className="text-2xl font-bold text-foreground">234</p>
                <p className="text-xs text-destructive">Requires investigation</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-card border-border/50">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Avg Risk Score</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-3">
              <TrendingUp className="w-8 h-8 text-warning" />
              <div>
                <p className="text-2xl font-bold text-foreground">42.3</p>
                <p className="text-xs text-success">-5.2% improvement</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-card border-border/50">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Claims Value</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-3">
              <DollarSign className="w-8 h-8 text-success" />
              <div>
                <p className="text-2xl font-bold text-foreground">$156M</p>
                <p className="text-xs text-primary">This quarter</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Provider Risk Analysis Table */}
      <Card className="bg-gradient-card border-border/50">
        <CardHeader>
          <CardTitle className="text-foreground">Provider Risk Analysis</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Provider ID</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>Specialty</TableHead>
                <TableHead>Risk Score</TableHead>
                <TableHead>Total Claims</TableHead>
                <TableHead>Suspicious Claims</TableHead>
                <TableHead>Total Amount</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {providersData.map((provider) => (
                <TableRow key={provider.id}>
                  <TableCell className="font-medium text-primary">{provider.id}</TableCell>
                  <TableCell className="text-foreground font-medium">{provider.name}</TableCell>
                  <TableCell className="text-muted-foreground">{provider.specialty}</TableCell>
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      <Badge className={getRiskColor(provider.riskScore)}>
                        {provider.riskScore}
                      </Badge>
                    </div>
                  </TableCell>
                  <TableCell className="text-foreground">{provider.totalClaims}</TableCell>
                  <TableCell className="text-destructive font-medium">{provider.suspiciousClaims}</TableCell>
                  <TableCell className="text-foreground font-medium">{provider.totalAmount}</TableCell>
                  <TableCell>
                    <Badge className={getStatusColor(provider.status)}>
                      {provider.status}
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

export default Providers;