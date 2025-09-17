import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface KPICardProps {
  title: string;
  value: string;
  change: string;
  changeType: "positive" | "negative" | "neutral";
  icon: LucideIcon;
  description?: string;
}

export const KPICard = ({ title, value, change, changeType, icon: Icon, description }: KPICardProps) => {
  const getChangeColor = () => {
    switch (changeType) {
      case "positive": return "text-success";
      case "negative": return "text-danger";
      default: return "text-muted-foreground";
    }
  };

  const getChangeSymbol = () => {
    switch (changeType) {
      case "positive": return "↗";
      case "negative": return "↘";
      default: return "→";
    }
  };

  return (
    <Card className="bg-gradient-card border-border/50 hover:shadow-md transition-all duration-300 animate-fade-in">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div className="space-y-2">
            <p className="text-sm font-medium text-muted-foreground">{title}</p>
            <div className="space-y-1">
              <p className="text-2xl font-bold text-foreground">{value}</p>
              <div className="flex items-center space-x-1">
                <span className={`text-sm font-medium ${getChangeColor()}`}>
                  {getChangeSymbol()} {change}
                </span>
                {description && (
                  <span className="text-xs text-muted-foreground">vs last month</span>
                )}
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg">
            <Icon className="w-6 h-6 text-primary" />
          </div>
        </div>
        {description && (
          <p className="text-xs text-muted-foreground mt-4 pt-4 border-t border-border/50">
            {description}
          </p>
        )}
      </CardContent>
    </Card>
  );
};