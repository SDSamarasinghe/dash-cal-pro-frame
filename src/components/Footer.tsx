import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="bg-card border-t border-wireframe-border mt-auto">
      <div className="px-6 py-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-primary rounded flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xs">MP</span>
            </div>
            <span className="text-sm font-medium text-wireframe-text">MarketingPro</span>
          </div>
          
          <div className="flex items-center gap-6 text-sm text-wireframe-muted">
            <a href="/privacy" className="hover:text-wireframe-text transition-colors">
              Privacy Policy
            </a>
            <Separator orientation="vertical" className="h-4 bg-wireframe-border" />
            <a href="/terms" className="hover:text-wireframe-text transition-colors">
              Terms of Service
            </a>
            <Separator orientation="vertical" className="h-4 bg-wireframe-border" />
            <a href="/support" className="hover:text-wireframe-text transition-colors">
              Support
            </a>
          </div>
          
          <div className="text-sm text-wireframe-muted">
            © 2024 MarketingPro. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}