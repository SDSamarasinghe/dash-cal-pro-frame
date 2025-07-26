import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Plus, 
  FileText, 
  DollarSign,
  Calendar,
  Eye,
  Download,
  Upload
} from "lucide-react";

// Mock data
const proposals = [
  { 
    id: "P001", 
    client: "TechCorp Inc.", 
    title: "Q4 Digital Marketing Campaign", 
    value: "$25,000", 
    status: "Sent", 
    date: "2024-01-15",
    type: "proposal"
  },
  { 
    id: "P002", 
    client: "RetailPlus", 
    title: "Brand Awareness Strategy", 
    value: "$15,500", 
    status: "Draft", 
    date: "2024-01-12",
    type: "proposal"
  },
  { 
    id: "I001", 
    client: "StartupX", 
    title: "Social Media Management", 
    value: "$8,200", 
    status: "Paid", 
    date: "2024-01-10",
    type: "invoice"
  },
  { 
    id: "I002", 
    client: "FashionCo", 
    title: "Content Creation Package", 
    value: "$12,300", 
    status: "Overdue", 
    date: "2024-01-08",
    type: "invoice"
  },
];

const services = [
  "Social Media Management",
  "Content Creation",
  "Paid Advertising",
  "SEO Optimization",
  "Brand Strategy",
  "Email Marketing",
  "Analytics & Reporting"
];

export default function Proposals() {
  const [showNewProposal, setShowNewProposal] = useState(false);
  const [activeTab, setActiveTab] = useState("proposals");

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Sent": return "bg-blue-100 text-blue-800";
      case "Draft": return "bg-gray-100 text-gray-800";
      case "Paid": return "bg-green-100 text-green-800";
      case "Overdue": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const filteredItems = proposals.filter(item => 
    activeTab === "proposals" ? item.type === "proposal" : item.type === "invoice"
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Proposals & Invoices</h1>
          <p className="text-muted-foreground">
            Manage your business documents and track payments
          </p>
        </div>
        
        <Dialog open={showNewProposal} onOpenChange={setShowNewProposal}>
          <DialogTrigger asChild>
            <Button className="flex items-center gap-2">
              <Plus className="h-4 w-4" />
              Create New Proposal
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>Create New Proposal</DialogTitle>
            </DialogHeader>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Form */}
              <div className="space-y-4">
                <div>
                  <Label htmlFor="client">Client Name</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select client" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="techcorp">TechCorp Inc.</SelectItem>
                      <SelectItem value="retailplus">RetailPlus</SelectItem>
                      <SelectItem value="startupx">StartupX</SelectItem>
                      <SelectItem value="fashionco">FashionCo</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label htmlFor="title">Proposal Title</Label>
                  <Input id="title" placeholder="Enter proposal title..." />
                </div>
                
                <div>
                  <Label>Services Offered</Label>
                  <div className="grid grid-cols-1 gap-2 mt-2">
                    {services.map((service, index) => (
                      <label key={index} className="flex items-center gap-2 p-2 bg-wireframe-light rounded">
                        <input type="checkbox" className="rounded" />
                        <span className="text-sm">{service}</span>
                      </label>
                    ))}
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="price">Total Price</Label>
                    <Input id="price" placeholder="$0.00" />
                  </div>
                  <div>
                    <Label htmlFor="duration">Duration</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select duration" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1month">1 Month</SelectItem>
                        <SelectItem value="3months">3 Months</SelectItem>
                        <SelectItem value="6months">6 Months</SelectItem>
                        <SelectItem value="12months">12 Months</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="terms">Terms and Conditions</Label>
                  <Textarea 
                    id="terms" 
                    placeholder="Enter terms and conditions..." 
                    rows={4}
                  />
                </div>
                
                <div>
                  <Label>Company Logo</Label>
                  <div className="mt-2 border-2 border-dashed border-muted-foreground/20 rounded-lg p-6 text-center">
                    <Upload className="h-8 w-8 mx-auto text-muted-foreground mb-2" />
                    <p className="text-sm text-muted-foreground">
                      Click to upload or drag and drop
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <Button className="flex-1">Create Proposal</Button>
                  <Button variant="outline">Save Draft</Button>
                </div>
              </div>
              
              {/* Preview Panel */}
              <div className="bg-wireframe-light p-6 rounded-lg">
                <h3 className="text-lg font-medium mb-4 text-foreground">Live Preview</h3>
                
                {/* Mock PDF Preview */}
                <div className="bg-card border rounded-lg p-6 space-y-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="w-16 h-8 bg-muted rounded mb-2" />
                      <h4 className="font-bold text-lg">MarketingPro</h4>
                      <p className="text-sm text-muted-foreground">Digital Marketing Solutions</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground">Proposal #P003</p>
                      <p className="text-sm text-muted-foreground">{new Date().toLocaleDateString()}</p>
                    </div>
                  </div>
                  
                  <div className="border-t pt-4">
                    <h5 className="font-medium mb-2">Client Information</h5>
                    <div className="bg-wireframe-light p-3 rounded">
                      <p className="text-sm">[Client Name]</p>
                      <p className="text-sm text-muted-foreground">[Client Address]</p>
                    </div>
                  </div>
                  
                  <div className="border-t pt-4">
                    <h5 className="font-medium mb-2">Proposal Title</h5>
                    <div className="bg-wireframe-light p-3 rounded">
                      <p className="text-sm">[Proposal Title]</p>
                    </div>
                  </div>
                  
                  <div className="border-t pt-4">
                    <h5 className="font-medium mb-2">Services</h5>
                    <div className="space-y-2">
                      {[1, 2, 3].map((item) => (
                        <div key={item} className="flex justify-between items-center bg-wireframe-light p-2 rounded">
                          <span className="text-sm">[Service {item}]</span>
                          <span className="text-sm">$[Price]</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center font-medium">
                      <span>Total</span>
                      <span>$[Total Price]</span>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 flex gap-2">
                  <Button variant="outline" size="sm" className="flex items-center gap-1">
                    <Eye className="h-3 w-3" />
                    Preview
                  </Button>
                  <Button variant="outline" size="sm" className="flex items-center gap-1">
                    <Download className="h-3 w-3" />
                    Download
                  </Button>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="proposals" className="flex items-center gap-2">
            <FileText className="h-4 w-4" />
            Proposals
          </TabsTrigger>
          <TabsTrigger value="invoices" className="flex items-center gap-2">
            <DollarSign className="h-4 w-4" />
            Invoices
          </TabsTrigger>
        </TabsList>

        <TabsContent value={activeTab} className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg font-medium">
                {activeTab === "proposals" ? "Proposals" : "Invoices"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {filteredItems.map((item) => (
                  <div key={item.id} className="flex items-center justify-between p-4 border rounded-lg bg-wireframe-light">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center">
                        {item.type === "proposal" ? (
                          <FileText className="h-5 w-5" />
                        ) : (
                          <DollarSign className="h-5 w-5" />
                        )}
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">{item.client}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <Calendar className="h-3 w-3 text-muted-foreground" />
                          <span className="text-xs text-muted-foreground">{item.date}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <p className="font-medium text-foreground">{item.value}</p>
                        <Badge className={`text-xs ${getStatusColor(item.status)}`}>
                          {item.status}
                        </Badge>
                      </div>
                      
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm">
                          <Eye className="h-3 w-3" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <Download className="h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}