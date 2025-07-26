import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { 
  Plus, 
  Filter, 
  Calendar as CalendarIcon,
  Facebook,
  Twitter,
  Instagram,
  Linkedin
} from "lucide-react";

// Mock data for calendar
const contentCategories = [
  { name: "Social Media", color: "bg-blue-500", count: 15 },
  { name: "Blog Posts", color: "bg-green-500", count: 8 },
  { name: "Email Campaigns", color: "bg-purple-500", count: 12 },
  { name: "Video Content", color: "bg-red-500", count: 6 },
  { name: "Infographics", color: "bg-yellow-500", count: 4 },
];

const scheduledPosts = [
  { date: 15, title: "Summer Sale Post", platform: "Facebook", category: "Social Media" },
  { date: 18, title: "Product Launch", platform: "Instagram", category: "Social Media" },
  { date: 22, title: "Industry Blog", platform: "Website", category: "Blog Posts" },
  { date: 25, title: "Newsletter", platform: "Email", category: "Email Campaigns" },
];

const currentDate = new Date();
const currentMonth = currentDate.getMonth();
const currentYear = currentDate.getFullYear();
const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

const monthNames = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

export default function ContentCalendar() {
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [showNewPostModal, setShowNewPostModal] = useState(false);

  const renderCalendarDays = () => {
    const days = [];
    const totalCells = 42; // 6 weeks × 7 days

    // Empty cells for days before the first day of the month
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(
        <div key={`empty-${i}`} className="h-24 bg-muted/20 border border-border"></div>
      );
    }

    // Days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const postsForDay = scheduledPosts.filter(post => post.date === day);
      const isToday = day === currentDate.getDate();
      
      days.push(
        <div 
          key={day} 
          className={`h-24 border border-border bg-card hover:bg-accent/20 cursor-pointer p-1 ${
            isToday ? 'ring-2 ring-primary' : ''
          }`}
          onClick={() => setSelectedDate(day)}
        >
          <div className="text-sm font-medium text-foreground mb-1">{day}</div>
          <div className="space-y-1">
            {postsForDay.map((post, index) => (
              <div 
                key={index} 
                className="text-xs p-1 bg-primary/10 rounded truncate"
                title={post.title}
              >
                {post.title}
              </div>
            ))}
          </div>
          {postsForDay.length === 0 && (
            <div className="h-16 border-2 border-dashed border-muted-foreground/20 rounded flex items-center justify-center">
              <Plus className="h-3 w-3 text-muted-foreground/40" />
            </div>
          )}
        </div>
      );
    }

    // Fill remaining cells
    while (days.length < totalCells) {
      days.push(
        <div key={`empty-end-${days.length}`} className="h-24 bg-muted/20 border border-border"></div>
      );
    }

    return days;
  };

  return (
    <div className="space-y-6">
      {/* Top Bar with Controls */}
      <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Content Calendar</h1>
          <p className="text-muted-foreground">
            {monthNames[currentMonth]} {currentYear}
          </p>
        </div>
        
        <div className="flex gap-3">
          <Button variant="outline" className="flex items-center gap-2">
            <Filter className="h-4 w-4" />
            Filter
          </Button>
          
          <Dialog open={showNewPostModal} onOpenChange={setShowNewPostModal}>
            <DialogTrigger asChild>
              <Button className="flex items-center gap-2">
                <Plus className="h-4 w-4" />
                Add New Post
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-md">
              <DialogHeader>
                <DialogTitle>Create New Post</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="title">Post Title</Label>
                  <Input id="title" placeholder="Enter post title..." />
                </div>
                
                <div>
                  <Label htmlFor="date">Date</Label>
                  <Input id="date" type="date" />
                </div>
                
                <div>
                  <Label htmlFor="time">Time</Label>
                  <Input id="time" type="time" />
                </div>
                
                <div>
                  <Label htmlFor="platform">Platform</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select platform" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="facebook">Facebook</SelectItem>
                      <SelectItem value="instagram">Instagram</SelectItem>
                      <SelectItem value="twitter">Twitter</SelectItem>
                      <SelectItem value="linkedin">LinkedIn</SelectItem>
                      <SelectItem value="email">Email</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label htmlFor="caption">Caption</Label>
                  <Textarea id="caption" placeholder="Write your post caption..." rows={3} />
                </div>
                
                <Button className="w-full">Schedule Post</Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Categories Sidebar */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg font-medium">Content Categories</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {contentCategories.map((category, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-wireframe-light rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className={`w-3 h-3 rounded-full ${category.color}`} />
                    <span className="text-sm font-medium text-foreground">{category.name}</span>
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {category.count}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Calendar */}
        <div className="lg:col-span-3">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg font-medium flex items-center gap-2">
                  <CalendarIcon className="h-5 w-5" />
                  {monthNames[currentMonth]} {currentYear}
                </CardTitle>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">Previous</Button>
                  <Button variant="outline" size="sm">Next</Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              {/* Calendar Header */}
              <div className="grid grid-cols-7 gap-0 mb-4">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                  <div key={day} className="h-8 flex items-center justify-center text-sm font-medium text-muted-foreground bg-muted">
                    {day}
                  </div>
                ))}
              </div>
              
              {/* Calendar Grid */}
              <div className="grid grid-cols-7 gap-0 border border-border">
                {renderCalendarDays()}
              </div>
              
              {/* Legend */}
              <div className="mt-4 flex flex-wrap gap-4 text-xs text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 border-2 border-dashed border-muted-foreground/40 rounded" />
                  <span>Drop content here</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-primary/10 rounded" />
                  <span>Scheduled content</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}