import { TrendingUp, Users, MapPin, AlertCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

const topRiskProviders = [
  {
    name: "Sunshine Medical Center",
    location: "Miami, FL",
    riskScore: 92,
    claimsVolume: 2840,
    flaggedClaims: 156,
    specialty: "Multi-Specialty",
  },
  {
    name: "Dr. Robert Martinez",
    location: "Houston, TX", 
    riskScore: 87,
    claimsVolume: 1650,
    flaggedClaims: 89,
    specialty: "Cardiology",
  },
  {
    name: "Coast Medical Group",
    location: "Los Angeles, CA",
    riskScore: 84,
    claimsVolume: 3200,
    flaggedClaims: 124,
    specialty: "Primary Care",
  },
  {
    name: "Dr. Jennifer Adams",
    location: "Chicago, IL",
    riskScore: 81,
    claimsVolume: 980,
    flaggedClaims: 67,
    specialty: "Orthopedics",
  },
];

const regionStats = [
  { region: "Florida", providers: 1248, riskLevel: "High", avgRisk: 76 },
  { region: "Texas", providers: 2156, riskLevel: "Medium", avgRisk: 64 },
  { region: "California", providers: 3420, riskLevel: "Medium", avgRisk: 58 },
  { region: "New York", providers: 1890, riskLevel: "Low", avgRisk: 42 },
];

export const ProviderAnalytics = () => {
  const getRiskColor = (score: number) => {
    if (score >= 90) return "text-danger";
    if (score >= 80) return "text-warning";
    if (score >= 70) return "text-warning";
    return "text-success";
  };

  const getRegionBadge = (level: string) => {
    switch (level) {
      case "High": return <Badge className="bg-danger text-danger-foreground">High Risk</Badge>;
      case "Medium": return <Badge className="bg-warning text-warning-foreground">Medium Risk</Badge>;
      default: return <Badge className="bg-success text-success-foreground">Low Risk</Badge>;
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card className="bg-gradient-card border-border/50">
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-foreground flex items-center">
            <TrendingUp className="w-5 h-5 mr-2 text-primary" />
            High-Risk Providers
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {topRiskProviders.map((provider, index) => (
              <div key={index} className="border border-border/50 rounded-lg p-4 bg-card hover:bg-card-header/30 transition-colors">
                <div className="flex items-start justify-between mb-3">
                  <div className="space-y-1">
                    <h4 className="font-medium text-foreground">{provider.name}</h4>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                      <MapPin className="w-3 h-3" />
                      <span>{provider.location}</span>
                      <span>•</span>
                      <span>{provider.specialty}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className={`text-lg font-bold ${getRiskColor(provider.riskScore)}`}>
                      {provider.riskScore}%
                    </div>
                    <div className="text-xs text-muted-foreground">Risk Score</div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Claims Volume:</span>
                    <span className="font-medium">{provider.claimsVolume.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Flagged Claims:</span>
                    <span className="font-medium text-warning">{provider.flaggedClaims}</span>
                  </div>
                  <Progress value={provider.riskScore} className="h-2" />
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="bg-gradient-card border-border/50">
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-foreground flex items-center">
            <MapPin className="w-5 h-5 mr-2 text-secondary" />
            Regional Risk Analysis
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {regionStats.map((region, index) => (
              <div key={index} className="border border-border/50 rounded-lg p-4 bg-card">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <h4 className="font-medium text-foreground">{region.region}</h4>
                    {getRegionBadge(region.riskLevel)}
                  </div>
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <Users className="w-4 h-4" />
                    <span className="text-sm">{region.providers} providers</span>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Average Risk Score:</span>
                    <span className={`font-medium ${getRiskColor(region.avgRisk)}`}>
                      {region.avgRisk}%
                    </span>
                  </div>
                  <Progress value={region.avgRisk} className="h-2" />
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-6 p-4 bg-primary/5 border border-primary/20 rounded-lg">
            <div className="flex items-start space-x-3">
              <AlertCircle className="w-5 h-5 text-primary mt-0.5" />
              <div>
                <h5 className="font-medium text-primary mb-1">Regional Alert</h5>
                <p className="text-sm text-muted-foreground">
                  Florida shows elevated fraud activity with 23% increase in suspicious claims over the past quarter. 
                  Enhanced monitoring recommended for high-volume providers in Miami-Dade area.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};