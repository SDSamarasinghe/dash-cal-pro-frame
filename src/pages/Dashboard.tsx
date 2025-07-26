import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  TrendingUp, 
  Users, 
  DollarSign, 
  Activity,
  Plus,
  Send,
  Calendar,
  MessageSquare
} from "lucide-react";

// Mock data for wireframe
const stats = [
  { title: "Active Campaigns", value: "12", icon: Activity, change: "+2 from last month" },
  { title: "Total Clients", value: "48", icon: Users, change: "+8 from last month" },
  { title: "Revenue", value: "$85,400", icon: DollarSign, change: "+12% from last month" },
  { title: "Performance", value: "94%", icon: TrendingUp, change: "+5% from last week" },
];

const campaigns = [
  { name: "Summer Sale Campaign", client: "TechCorp", status: "Active", budget: "$15,000", performance: "High" },
  { name: "Brand Awareness Q3", client: "RetailPlus", status: "Planning", budget: "$8,500", performance: "Medium" },
  { name: "Product Launch", client: "StartupX", status: "Active", budget: "$22,000", performance: "High" },
  { name: "Holiday Promotion", client: "FashionCo", status: "Draft", budget: "$12,300", performance: "Low" },
];

const upcomingTasks = [
  { task: "Review Facebook Ad Performance", time: "10:00 AM", priority: "High" },
  { task: "Client Meeting - TechCorp", time: "2:00 PM", priority: "Medium" },
  { task: "Content Approval", time: "4:30 PM", priority: "Low" },
];

const recentMessages = [
  { client: "TechCorp", message: "Campaign results look great!", time: "2h ago" },
  { client: "RetailPlus", message: "Can we schedule a review?", time: "4h ago" },
  { client: "StartupX", message: "Budget approval received", time: "1d ago" },
];

export default function Dashboard() {
  return (
    <div className="space-y-6">
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <Card key={stat.title} className="bg-card border">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                {stat.title}
              </CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-foreground">{stat.value}</div>
              <p className="text-xs text-muted-foreground mt-1">{stat.change}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content Area */}
        <div className="lg:col-span-2 space-y-6">
          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-medium">Quick Actions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-3">
                <Button className="flex items-center gap-2">
                  <Plus className="h-4 w-4" />
                  Add Campaign
                </Button>
                <Button variant="outline" className="flex items-center gap-2">
                  <Send className="h-4 w-4" />
                  Send Report
                </Button>
                <Button variant="outline" className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  Schedule Content
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Campaigns Table */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-medium">Ongoing Campaigns</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {campaigns.map((campaign, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg bg-wireframe-light">
                    <div className="space-y-1">
                      <h4 className="font-medium text-foreground">{campaign.name}</h4>
                      <p className="text-sm text-muted-foreground">{campaign.client}</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <p className="text-sm font-medium">{campaign.budget}</p>
                        <Badge 
                          variant={campaign.status === 'Active' ? 'default' : 'secondary'}
                          className="text-xs"
                        >
                          {campaign.status}
                        </Badge>
                      </div>
                      <div className="w-16 h-2 bg-muted rounded-full">
                        <div 
                          className={`h-full rounded-full ${
                            campaign.performance === 'High' ? 'bg-success w-5/6' :
                            campaign.performance === 'Medium' ? 'bg-warning w-1/2' :
                            'bg-destructive w-1/4'
                          }`}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Sidebar */}
        <div className="space-y-6">
          {/* Upcoming Tasks */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-medium">Upcoming Tasks</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {upcomingTasks.map((task, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-wireframe-light rounded-lg">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2" />
                    <div className="flex-1">
                      <p className="text-sm font-medium text-foreground">{task.task}</p>
                      <p className="text-xs text-muted-foreground">{task.time}</p>
                      <Badge 
                        variant={task.priority === 'High' ? 'destructive' : task.priority === 'Medium' ? 'default' : 'secondary'}
                        className="text-xs mt-1"
                      >
                        {task.priority}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recent Messages */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-medium flex items-center gap-2">
                <MessageSquare className="h-4 w-4" />
                Recent Messages
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {recentMessages.map((message, index) => (
                  <div key={index} className="p-3 bg-wireframe-light rounded-lg">
                    <div className="flex justify-between items-start mb-1">
                      <p className="text-sm font-medium text-foreground">{message.client}</p>
                      <span className="text-xs text-muted-foreground">{message.time}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{message.message}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}