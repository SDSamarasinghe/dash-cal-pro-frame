import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="bg-background border-t border-border mt-auto">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
          {/* Brand Section */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center shadow-sm">
              <span className="text-primary-foreground font-bold text-sm">MP</span>
            </div>
            <div className="flex flex-col">
              <span className="text-base font-semibold text-foreground">MarketingPro</span>
              <span className="text-xs text-muted-foreground">Digital Marketing Solutions</span>
            </div>
          </div>
          
          {/* Links Section */}
          <div className="flex flex-wrap items-center justify-center gap-1 text-sm">
            <a 
              href="/privacy" 
              className="px-3 py-1 text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-accent"
            >
              Privacy Policy
            </a>
            <Separator orientation="vertical" className="h-4 mx-1" />
            <a 
              href="/terms" 
              className="px-3 py-1 text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-accent"
            >
              Terms of Service
            </a>
            <Separator orientation="vertical" className="h-4 mx-1" />
            <a 
              href="/support" 
              className="px-3 py-1 text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-accent"
            >
              Support
            </a>
          </div>
          
          {/* Copyright Section */}
          <div className="text-sm text-muted-foreground text-center lg:text-right">
            <p>© 2024 MarketingPro.</p>
            <p className="text-xs">All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}