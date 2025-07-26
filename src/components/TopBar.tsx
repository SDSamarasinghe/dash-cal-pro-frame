import { Bell, User } from "lucide-react";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function TopBar() {
  return (
    <header className="h-14 bg-card border-b flex items-center justify-between px-4">
      <div className="flex items-center gap-2">
        <SidebarTrigger />
        <div className="h-6 w-px bg-border mx-2" />
        <h1 className="text-lg font-medium text-foreground">Digital Marketing Dashboard</h1>
      </div>
      
      <div className="flex items-center gap-3">
        {/* Notifications */}
        <Button variant="ghost" size="sm" className="relative">
          <Bell className="h-4 w-4" />
          <Badge variant="destructive" className="absolute -top-1 -right-1 h-4 w-4 p-0 text-xs">
            3
          </Badge>
        </Button>
        
        {/* User Profile */}
        <Button variant="ghost" size="sm" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-muted rounded-full flex items-center justify-center">
            <User className="h-4 w-4" />
          </div>
          <span className="hidden md:block text-sm">John Doe</span>
        </Button>
      </div>
    </header>
  );
}