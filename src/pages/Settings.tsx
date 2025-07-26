import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { User, Bell, Shield, CreditCard } from "lucide-react";

const Settings = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-wireframe-text">Settings</h1>
        <p className="text-wireframe-muted mt-1">Manage your account preferences and settings</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="border-wireframe-border">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-wireframe-text">
              <User className="h-5 w-5" />
              <span>Profile Settings</span>
            </CardTitle>
            <CardDescription className="text-wireframe-muted">
              Update your personal information
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-wireframe-text">Full Name</Label>
              <Input id="name" placeholder="John Doe" className="border-wireframe-border" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email" className="text-wireframe-text">Email</Label>
              <Input id="email" type="email" placeholder="john@example.com" className="border-wireframe-border" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="company" className="text-wireframe-text">Company</Label>
              <Input id="company" placeholder="Your Company" className="border-wireframe-border" />
            </div>
            <Button className="bg-wireframe-accent hover:bg-wireframe-accent/80">
              Save Profile
            </Button>
          </CardContent>
        </Card>

        <Card className="border-wireframe-border">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-wireframe-text">
              <Bell className="h-5 w-5" />
              <span>Notifications</span>
            </CardTitle>
            <CardDescription className="text-wireframe-muted">
              Configure your notification preferences
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="email-notifications" className="text-wireframe-text">Email Notifications</Label>
              <Switch id="email-notifications" />
            </div>
            <Separator className="bg-wireframe-border" />
            <div className="flex items-center justify-between">
              <Label htmlFor="campaign-updates" className="text-wireframe-text">Campaign Updates</Label>
              <Switch id="campaign-updates" />
            </div>
            <Separator className="bg-wireframe-border" />
            <div className="flex items-center justify-between">
              <Label htmlFor="client-messages" className="text-wireframe-text">Client Messages</Label>
              <Switch id="client-messages" />
            </div>
            <Separator className="bg-wireframe-border" />
            <div className="flex items-center justify-between">
              <Label htmlFor="weekly-reports" className="text-wireframe-text">Weekly Reports</Label>
              <Switch id="weekly-reports" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-wireframe-border">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-wireframe-text">
              <Shield className="h-5 w-5" />
              <span>Security</span>
            </CardTitle>
            <CardDescription className="text-wireframe-muted">
              Manage your account security settings
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="current-password" className="text-wireframe-text">Current Password</Label>
              <Input id="current-password" type="password" className="border-wireframe-border" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="new-password" className="text-wireframe-text">New Password</Label>
              <Input id="new-password" type="password" className="border-wireframe-border" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirm-password" className="text-wireframe-text">Confirm Password</Label>
              <Input id="confirm-password" type="password" className="border-wireframe-border" />
            </div>
            <Button variant="outline" className="border-wireframe-border">
              Update Password
            </Button>
          </CardContent>
        </Card>

        <Card className="border-wireframe-border">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2 text-wireframe-text">
              <CreditCard className="h-5 w-5" />
              <span>Billing</span>
            </CardTitle>
            <CardDescription className="text-wireframe-muted">
              Manage your subscription and billing
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 border border-wireframe-border rounded-lg">
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="font-medium text-wireframe-text">Professional Plan</h4>
                  <p className="text-sm text-wireframe-muted">$49/month</p>
                </div>
                <Badge className="bg-green-100 text-green-800 border-green-200">Active</Badge>
              </div>
            </div>
            <div className="space-y-2">
              <Label className="text-wireframe-text">Payment Method</Label>
              <div className="p-3 border border-wireframe-border rounded bg-wireframe-bg">
                <p className="text-sm text-wireframe-muted">**** **** **** 4242</p>
              </div>
            </div>
            <div className="flex space-x-2">
              <Button variant="outline" className="border-wireframe-border">
                Update Payment
              </Button>
              <Button variant="outline" className="border-wireframe-border">
                View Invoices
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Settings;