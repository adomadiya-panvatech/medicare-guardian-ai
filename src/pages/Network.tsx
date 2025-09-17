import { Network as NetworkIcon, Share2, Users, AlertCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const Network = () => {
  const networkData = [
    {
      id: "NET-001",
      name: "Metro Medical Network",
      providers: 12,
      connections: 45,
      riskLevel: "High",
      suspiciousActivities: 8,
      totalClaims: "$2.4M",
      flaggedAmount: "$340K"
    },
    {
      id: "NET-002", 
      name: "Regional Healthcare Alliance",
      providers: 8,
      connections: 28,
      riskLevel: "Medium",
      suspiciousActivities: 3,
      totalClaims: "$1.8M",
      flaggedAmount: "$125K"
    },
    {
      id: "NET-003",
      name: "Coastal Medical Group",
      providers: 15,
      connections: 67,
      riskLevel: "Low",
      suspiciousActivities: 1,
      totalClaims: "$3.2M",
      flaggedAmount: "$45K"
    },
    {
      id: "NET-004",
      name: "Downtown Specialist Network",
      providers: 6,
      connections: 23,
      riskLevel: "High",
      suspiciousActivities: 12,
      totalClaims: "$1.5M",
      flaggedAmount: "$480K"
    }
  ];

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case "High": return "bg-destructive text-destructive-foreground";
      case "Medium": return "bg-warning text-warning-foreground";
      case "Low": return "bg-success text-success-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="border-b border-border/50 pb-6">
        <h1 className="text-3xl font-bold text-foreground">Network Analysis</h1>
        <p className="text-muted-foreground mt-2">Analyze provider networks and relationships to identify potential fraud rings</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="bg-gradient-card border-border/50">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Active Networks</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-3">
              <NetworkIcon className="w-8 h-8 text-primary" />
              <div>
                <p className="text-2xl font-bold text-foreground">156</p>
                <p className="text-xs text-success">Identified networks</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-card border-border/50">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">High Risk Networks</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-3">
              <AlertCircle className="w-8 h-8 text-destructive" />
              <div>
                <p className="text-2xl font-bold text-foreground">23</p>
                <p className="text-xs text-destructive">Under investigation</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-card border-border/50">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Total Connections</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-3">
              <Share2 className="w-8 h-8 text-warning" />
              <div>
                <p className="text-2xl font-bold text-foreground">1,247</p>
                <p className="text-xs text-primary">Provider relationships</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-card border-border/50">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-muted-foreground">Network Providers</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center space-x-3">
              <Users className="w-8 h-8 text-success" />
              <div>
                <p className="text-2xl font-bold text-foreground">3,892</p>
                <p className="text-xs text-muted-foreground">In active networks</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Network Analysis Visualization Placeholder */}
      <Card className="bg-gradient-card border-border/50">
        <CardHeader>
          <CardTitle className="text-foreground">Network Visualization</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-64 bg-muted/20 rounded-lg flex items-center justify-center border-2 border-dashed border-border">
            <div className="text-center">
              <NetworkIcon className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-muted-foreground">Interactive network visualization will be displayed here</p>
              <p className="text-sm text-muted-foreground mt-2">Shows provider relationships and connection patterns</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Network Risk Analysis Table */}
      <Card className="bg-gradient-card border-border/50">
        <CardHeader>
          <CardTitle className="text-foreground">Network Risk Analysis</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Network ID</TableHead>
                <TableHead>Network Name</TableHead>
                <TableHead>Providers</TableHead>
                <TableHead>Connections</TableHead>
                <TableHead>Risk Level</TableHead>
                <TableHead>Suspicious Activities</TableHead>
                <TableHead>Total Claims</TableHead>
                <TableHead>Flagged Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {networkData.map((network) => (
                <TableRow key={network.id}>
                  <TableCell className="font-medium text-primary">{network.id}</TableCell>
                  <TableCell className="text-foreground font-medium">{network.name}</TableCell>
                  <TableCell className="text-foreground">{network.providers}</TableCell>
                  <TableCell className="text-foreground">{network.connections}</TableCell>
                  <TableCell>
                    <Badge className={getRiskColor(network.riskLevel)}>
                      {network.riskLevel}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-destructive font-medium">{network.suspiciousActivities}</TableCell>
                  <TableCell className="text-foreground font-medium">{network.totalClaims}</TableCell>
                  <TableCell className="text-destructive font-medium">{network.flaggedAmount}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default Network;