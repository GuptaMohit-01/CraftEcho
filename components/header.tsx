"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

export function Header() {
  const [user, setUser] = useState<any>(null)
  const router = useRouter()

  useEffect(() => {
    const userData = localStorage.getItem("craftai_user")
    if (userData) {
      setUser(JSON.parse(userData))
    }
  }, [])

  const handleSignOut = () => {
    localStorage.removeItem("craftai_user")
    setUser(null)
    router.push("/")
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 max-w-screen-xl items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
            <div className="h-4 w-4 bg-primary-foreground rounded-full relative">
              <div className="absolute top-0 left-1 w-1 h-1 bg-primary rounded-full"></div>
              <div className="absolute top-1 right-0 w-1 h-1 bg-primary rounded-full"></div>
              <div className="absolute bottom-0 left-0 w-1 h-1 bg-primary rounded-full"></div>
            </div>
          </div>
          <span className="text-xl font-bold text-balance">CraftAI</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="/#features"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Features
          </Link>
          <Link
            href="/#how-it-works"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            How It Works
          </Link>
          <Link
            href="/create"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Create
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          {user ? (
            <>
              <span className="text-sm text-muted-foreground hidden sm:inline">Welcome, {user.name}</span>
              <Button asChild variant="ghost" size="sm">
                <Link href="/dashboard">Dashboard</Link>
              </Button>
              <Button variant="outline" size="sm" onClick={handleSignOut}>
                Sign Out
              </Button>
            </>
          ) : (
            <>
              <Button asChild variant="ghost" size="sm">
                <Link href="/auth/signin">Sign In</Link>
              </Button>
              <Button asChild size="sm" className="gap-2">
                <Link href="/create">
                  <div className="h-4 w-4 relative">
                    <div
                      className="absolute inset-0 bg-current opacity-80"
                      style={{
                        clipPath:
                          "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
                      }}
                    ></div>
                  </div>
                  Get Started
                </Link>
              </Button>
            </>
          )}
        </div>
      </div>
    </header>
  )
}
