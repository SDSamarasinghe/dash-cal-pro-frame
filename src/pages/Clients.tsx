import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plus, Users, Mail, Phone } from "lucide-react";

const Clients = () => {
  const clients = [
    { 
      id: 1, 
      name: "TechCorp Inc.", 
      email: "contact@techcorp.com", 
      phone: "+1 (555) 123-4567",
      status: "active", 
      campaigns: 3,
      revenue: "$15,000"
    },
    { 
      id: 2, 
      name: "Fashion Forward", 
      email: "hello@fashionforward.com", 
      phone: "+1 (555) 987-6543",
      status: "active", 
      campaigns: 2,
      revenue: "$8,500"
    },
    { 
      id: 3, 
      name: "Local Bistro", 
      email: "info@localbistro.com", 
      phone: "+1 (555) 456-7890",
      status: "inactive", 
      campaigns: 1,
      revenue: "$3,200"
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active": return "bg-green-100 text-green-800 border-green-200";
      case "inactive": return "bg-gray-100 text-gray-800 border-gray-200";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-wireframe-text">Clients</h1>
          <p className="text-wireframe-muted mt-1">Manage your client relationships</p>
        </div>
        <Button className="bg-wireframe-accent hover:bg-wireframe-accent/80">
          <Plus className="h-4 w-4 mr-2" />
          Add Client
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="border-wireframe-border">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-wireframe-muted">Total Clients</CardTitle>
            <div className="text-2xl font-bold text-wireframe-text">12</div>
          </CardHeader>
        </Card>
        <Card className="border-wireframe-border">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-wireframe-muted">Active Clients</CardTitle>
            <div className="text-2xl font-bold text-wireframe-text">8</div>
          </CardHeader>
        </Card>
        <Card className="border-wireframe-border">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm font-medium text-wireframe-muted">Total Revenue</CardTitle>
            <div className="text-2xl font-bold text-wireframe-text">$26,700</div>
          </CardHeader>
        </Card>
      </div>

      <Card className="border-wireframe-border">
        <CardHeader>
          <CardTitle className="text-wireframe-text">Client Directory</CardTitle>
          <CardDescription className="text-wireframe-muted">
            View and manage all your clients
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {clients.map((client) => (
              <div key={client.id} className="flex items-center justify-between p-4 border border-wireframe-border rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-wireframe-bg border border-wireframe-border rounded flex items-center justify-center">
                    <Users className="h-6 w-6 text-wireframe-muted" />
                  </div>
                  <div>
                    <h3 className="font-medium text-wireframe-text">{client.name}</h3>
                    <div className="flex items-center space-x-4 text-sm text-wireframe-muted mt-1">
                      <div className="flex items-center space-x-1">
                        <Mail className="h-3 w-3" />
                        <span>{client.email}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Phone className="h-3 w-3" />
                        <span>{client.phone}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Badge className={getStatusColor(client.status)}>
                    {client.status}
                  </Badge>
                  <div className="text-sm text-wireframe-muted text-right">
                    <div>{client.campaigns} campaigns</div>
                    <div>{client.revenue} revenue</div>
                  </div>
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Clients;