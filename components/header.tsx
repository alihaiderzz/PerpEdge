"use client"

import { Button } from "@/components/ui/button"
import { TrendingUp, Menu, X } from "lucide-react"
import { useState } from "react"

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <a href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center crypto-glow">
            <TrendingUp className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold gradient-text">PerpEdge</span>
        </a>

        <nav className="hidden md:flex items-center gap-6">
          <a href="/learn" className="text-muted-foreground hover:text-foreground transition-colors">
            Learn
          </a>
          <a href="/journey" className="text-muted-foreground hover:text-foreground transition-colors">
            Journey
          </a>
          <a href="/tools" className="text-muted-foreground hover:text-foreground transition-colors">
            Tools
          </a>
          <a href="/community" className="text-muted-foreground hover:text-foreground transition-colors">
            Community
          </a>
        </nav>

        <div className="flex items-center gap-3">
          <Button variant="ghost" className="hidden md:inline-flex">
            Sign In
          </Button>
          <Button className="bg-primary hover:bg-primary/90 crypto-glow hidden sm:inline-flex">Start Learning</Button>
          <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-card/95 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <nav className="flex flex-col space-y-3">
              <a 
                href="/learn" 
                className="text-muted-foreground hover:text-foreground transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Learn
              </a>
              <a 
                href="/journey" 
                className="text-muted-foreground hover:text-foreground transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Journey
              </a>
              <a 
                href="/tools" 
                className="text-muted-foreground hover:text-foreground transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Tools
              </a>
              <a 
                href="/community" 
                className="text-muted-foreground hover:text-foreground transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Community
              </a>
            </nav>
            <div className="flex flex-col space-y-3 pt-4 border-t border-border">
              <Button variant="ghost" className="justify-start">
                Sign In
              </Button>
              <Button className="bg-primary hover:bg-primary/90 crypto-glow justify-start">
                Start Learning
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
