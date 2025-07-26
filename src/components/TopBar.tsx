import { Bell, User, LogOut, Settings, User2 } from "lucide-react";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useAuth } from "@/hooks/useAuth";
import { useNavigate } from "react-router-dom";

export function TopBar() {
  const { user, signOut } = useAuth();
  const navigate = useNavigate();
  const notifications = [
    { id: 1, title: "New campaign approved", message: "Summer Sale campaign has been approved", time: "2 min ago" },
    { id: 2, title: "Client message", message: "TechCorp sent a new message", time: "1 hour ago" },
    { id: 3, title: "Budget alert", message: "Campaign budget 80% utilized", time: "3 hours ago" },
  ];

  return (
    <header className="sticky top-0 z-50 h-16 bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60 border-b border-wireframe-border">
      <div className="flex h-full items-center justify-between px-4">
        <div className="flex items-center gap-3">
          <SidebarTrigger className="hover:bg-wireframe-accent" />
          <div className="h-6 w-px bg-wireframe-border" />
          <div className="flex flex-col">
            <h1 className="text-lg font-semibold text-wireframe-text">MarketingPro</h1>
            <p className="text-xs text-wireframe-muted">Digital Marketing Dashboard</p>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          {/* Notifications */}
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="ghost" size="sm" className="relative hover:bg-wireframe-accent">
                <Bell className="h-4 w-4 text-wireframe-text" />
                <Badge className="absolute -top-1 -right-1 h-5 w-5 p-0 text-xs bg-red-500 text-white border-0">
                  {notifications.length}
                </Badge>
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80 p-0" align="end">
              <div className="p-4 border-b border-wireframe-border">
                <h4 className="font-medium text-wireframe-text">Notifications</h4>
                <p className="text-sm text-wireframe-muted">You have {notifications.length} unread notifications</p>
              </div>
              <div className="max-h-96 overflow-y-auto">
                {notifications.map((notification) => (
                  <div key={notification.id} className="p-4 border-b border-wireframe-border hover:bg-wireframe-accent cursor-pointer">
                    <div className="flex justify-between items-start mb-1">
                      <h5 className="text-sm font-medium text-wireframe-text">{notification.title}</h5>
                      <span className="text-xs text-wireframe-muted">{notification.time}</span>
                    </div>
                    <p className="text-sm text-wireframe-muted">{notification.message}</p>
                  </div>
                ))}
              </div>
              <div className="p-2 border-t border-wireframe-border">
                <Button variant="ghost" className="w-full text-sm">
                  View all notifications
                </Button>
              </div>
            </PopoverContent>
          </Popover>
          
          {/* User Profile */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="sm" className="flex items-center gap-2 hover:bg-wireframe-accent">
                <div className="w-8 h-8 bg-wireframe-accent rounded-full flex items-center justify-center">
                  <User className="h-4 w-4 text-wireframe-text" />
                </div>
                <span className="hidden md:block text-sm text-wireframe-text">
                  {user?.user_metadata?.full_name || user?.email?.split('@')[0] || 'User'}
                </span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end">
              <DropdownMenuLabel className="text-wireframe-text">My Account</DropdownMenuLabel>
              <DropdownMenuSeparator className="bg-wireframe-border" />
              <DropdownMenuItem className="hover:bg-wireframe-accent cursor-pointer">
                <User2 className="mr-2 h-4 w-4" />
                <span>Profile</span>
              </DropdownMenuItem>
              <DropdownMenuItem 
                onClick={() => navigate('/settings')} 
                className="hover:bg-wireframe-accent cursor-pointer"
              >
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator className="bg-wireframe-border" />
              <DropdownMenuItem 
                onClick={signOut} 
                className="hover:bg-wireframe-accent cursor-pointer text-red-600"
              >
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}