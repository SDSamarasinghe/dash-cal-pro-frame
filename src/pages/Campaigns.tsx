import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plus, Play, Pause, BarChart3 } from "lucide-react";

const Campaigns = () => {
  const campaigns = [
    { id: 1, name: "Summer Sale 2024", status: "active", budget: "$5,000", clicks: "2,341", conversions: "89" },
    { id: 2, name: "Brand Awareness Q2", status: "paused", budget: "$3,500", clicks: "1,876", conversions: "45" },
    { id: 3, name: "Product Launch", status: "draft", budget: "$8,000", clicks: "0", conversions: "0" },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active": return "bg-green-100 text-green-800 border-green-200";
      case "paused": return "bg-yellow-100 text-yellow-800 border-yellow-200";
      case "draft": return "bg-gray-100 text-gray-800 border-gray-200";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-wireframe-text">Campaigns</h1>
          <p className="text-wireframe-muted mt-1">Manage your marketing campaigns</p>
        </div>
        <Button className="bg-wireframe-accent hover:bg-wireframe-accent/80">
          <Plus className="h-4 w-4 mr-2" />
          New Campaign
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="border-wireframe-border">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-wireframe-muted">Active Campaigns</CardTitle>
            <div className="text-2xl font-bold text-wireframe-text">3</div>
          </CardHeader>
        </Card>
        <Card className="border-wireframe-border">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-wireframe-muted">Total Budget</CardTitle>
            <div className="text-2xl font-bold text-wireframe-text">$16,500</div>
          </CardHeader>
        </Card>
        <Card className="border-wireframe-border">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-wireframe-muted">Total Clicks</CardTitle>
            <div className="text-2xl font-bold text-wireframe-text">4,217</div>
          </CardHeader>
        </Card>
      </div>

      <Card className="border-wireframe-border">
        <CardHeader>
          <CardTitle className="text-wireframe-text">Campaign Overview</CardTitle>
          <CardDescription className="text-wireframe-muted">
            Monitor and manage your active marketing campaigns
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {campaigns.map((campaign) => (
              <div key={campaign.id} className="flex items-center justify-between p-4 border border-wireframe-border rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-wireframe-bg border border-wireframe-border rounded flex items-center justify-center">
                    <BarChart3 className="h-6 w-6 text-wireframe-muted" />
                  </div>
                  <div>
                    <h3 className="font-medium text-wireframe-text">{campaign.name}</h3>
                    <p className="text-sm text-wireframe-muted">Budget: {campaign.budget}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Badge className={getStatusColor(campaign.status)}>
                    {campaign.status}
                  </Badge>
                  <div className="text-sm text-wireframe-muted">
                    {campaign.clicks} clicks • {campaign.conversions} conversions
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      <Play className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <Pause className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Campaigns;