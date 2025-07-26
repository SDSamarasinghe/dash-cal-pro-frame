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
    <div className="space-y-8">
      {/* Welcome Section */}
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold text-wireframe-text">Dashboard Overview</h1>
          <p className="text-wireframe-muted mt-2">Welcome back! Here's what's happening with your campaigns.</p>
        </div>
        <div className="flex gap-3">
          <Button className="bg-wireframe-accent hover:bg-wireframe-accent/80">
            <Plus className="h-4 w-4 mr-2" />
            New Campaign
          </Button>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <Card key={stat.title} className="border-wireframe-border bg-card hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
              <CardTitle className="text-sm font-medium text-wireframe-muted">
                {stat.title}
              </CardTitle>
              <div className="w-8 h-8 bg-wireframe-accent rounded-lg flex items-center justify-center">
                <stat.icon className="h-4 w-4 text-wireframe-text" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-wireframe-text mb-1">{stat.value}</div>
              <p className="text-xs text-wireframe-muted">{stat.change}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content Area */}
        <div className="lg:col-span-2 space-y-8">
          {/* Quick Actions */}
          <Card className="border-wireframe-border">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-wireframe-text">Quick Actions</CardTitle>
              <p className="text-sm text-wireframe-muted">Frequently used actions for your campaigns</p>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Button className="h-16 flex flex-col items-center gap-2 bg-wireframe-accent hover:bg-wireframe-accent/80">
                  <Plus className="h-5 w-5" />
                  <span className="text-sm">Add Campaign</span>
                </Button>
                <Button variant="outline" className="h-16 flex flex-col items-center gap-2 border-wireframe-border hover:bg-wireframe-accent">
                  <Send className="h-5 w-5" />
                  <span className="text-sm">Send Report</span>
                </Button>
                <Button variant="outline" className="h-16 flex flex-col items-center gap-2 border-wireframe-border hover:bg-wireframe-accent">
                  <Calendar className="h-5 w-5" />
                  <span className="text-sm">Schedule Content</span>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Campaigns Table */}
          <Card className="border-wireframe-border">
            <CardHeader>
              <CardTitle className="text-xl font-semibold text-wireframe-text">Active Campaigns</CardTitle>
              <p className="text-sm text-wireframe-muted">Monitor your ongoing marketing campaigns</p>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {campaigns.map((campaign, index) => (
                  <div key={index} className="flex items-center justify-between p-5 border border-wireframe-border rounded-lg bg-card hover:bg-wireframe-accent/30 transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-wireframe-accent rounded-lg flex items-center justify-center">
                        <Activity className="h-6 w-6 text-wireframe-text" />
                      </div>
                      <div className="space-y-1">
                        <h4 className="font-semibold text-wireframe-text">{campaign.name}</h4>
                        <p className="text-sm text-wireframe-muted">{campaign.client}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-6">
                      <div className="text-right">
                        <p className="text-lg font-semibold text-wireframe-text">{campaign.budget}</p>
                        <Badge 
                          className={`${
                            campaign.status === 'Active' 
                              ? 'bg-green-100 text-green-800 border-green-200' 
                              : campaign.status === 'Planning'
                              ? 'bg-blue-100 text-blue-800 border-blue-200'
                              : 'bg-gray-100 text-gray-800 border-gray-200'
                          }`}
                        >
                          {campaign.status}
                        </Badge>
                      </div>
                      <div className="flex flex-col items-center gap-2">
                        <span className="text-xs text-wireframe-muted">Performance</span>
                        <div className="w-20 h-3 bg-wireframe-bg border border-wireframe-border rounded-full overflow-hidden">
                          <div 
                            className={`h-full rounded-full transition-all ${
                              campaign.performance === 'High' ? 'bg-green-500 w-5/6' :
                              campaign.performance === 'Medium' ? 'bg-yellow-500 w-1/2' :
                              'bg-red-500 w-1/4'
                            }`}
                          />
                        </div>
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
          <Card className="border-wireframe-border">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-wireframe-text flex items-center gap-2">
                <Activity className="h-5 w-5" />
                Upcoming Tasks
              </CardTitle>
              <p className="text-sm text-wireframe-muted">Your schedule for today</p>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {upcomingTasks.map((task, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-wireframe-accent/20 rounded-lg border border-wireframe-border">
                    <div className={`w-3 h-3 rounded-full mt-2 ${
                      task.priority === 'High' ? 'bg-red-500' :
                      task.priority === 'Medium' ? 'bg-yellow-500' : 'bg-green-500'
                    }`} />
                    <div className="flex-1">
                      <p className="text-sm font-medium text-wireframe-text">{task.task}</p>
                      <p className="text-xs text-wireframe-muted mt-1">{task.time}</p>
                      <Badge 
                        className={`text-xs mt-2 ${
                          task.priority === 'High' ? 'bg-red-100 text-red-800 border-red-200' :
                          task.priority === 'Medium' ? 'bg-yellow-100 text-yellow-800 border-yellow-200' :
                          'bg-green-100 text-green-800 border-green-200'
                        }`}
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
          <Card className="border-wireframe-border">
            <CardHeader>
              <CardTitle className="text-lg font-semibold text-wireframe-text flex items-center gap-2">
                <MessageSquare className="h-5 w-5" />
                Recent Messages
              </CardTitle>
              <p className="text-sm text-wireframe-muted">Latest client communications</p>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentMessages.map((message, index) => (
                  <div key={index} className="p-4 bg-wireframe-accent/20 rounded-lg border border-wireframe-border hover:bg-wireframe-accent/30 transition-colors cursor-pointer">
                    <div className="flex justify-between items-start mb-2">
                      <p className="text-sm font-semibold text-wireframe-text">{message.client}</p>
                      <span className="text-xs text-wireframe-muted">{message.time}</span>
                    </div>
                    <p className="text-sm text-wireframe-muted">{message.message}</p>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="w-full mt-4 border-wireframe-border hover:bg-wireframe-accent">
                View All Messages
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}