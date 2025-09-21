import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="container max-w-screen-xl">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-8 flex justify-center">
            <div className="flex items-center gap-2 rounded-full border border-border/50 bg-muted/50 px-4 py-2 text-sm">
              <div className="h-4 w-4 bg-accent relative transform rotate-45">
                <div className="absolute -top-1 -left-1 w-2 h-2 bg-accent rounded-full"></div>
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-accent rounded-full"></div>
              </div>
              <span className="text-muted-foreground">Empowering artisans worldwide</span>
            </div>
          </div>

          <h1 className="mb-6 text-4xl font-bold tracking-tight text-balance sm:text-6xl lg:text-7xl">
            Bridge your{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              cultural heritage
            </span>{" "}
            with the digital world
          </h1>

          <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground text-pretty">
            AI-powered platform that transforms your traditional crafts into compelling stories, stunning marketing
            content, and authentic brand experiences that resonate with modern audiences.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button asChild size="lg" className="gap-2 text-base">
              <Link href="/create">
                <div className="h-5 w-5 relative">
                  <div
                    className="absolute inset-0 bg-current opacity-80"
                    style={{
                      clipPath:
                        "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
                    }}
                  ></div>
                </div>
                Start Creating Stories
                <div className="h-4 w-4 border-r-2 border-t-2 border-current transform rotate-45"></div>
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="gap-2 text-base bg-transparent">
              <div className="h-5 w-5 border-2 border-current rounded-full relative">
                <div className="absolute top-1 left-1 right-1 border-t border-current"></div>
                <div className="absolute top-2 left-1 right-1 border-t border-current"></div>
                <div className="absolute top-0 bottom-0 left-1/2 border-l border-current transform -translate-x-px"></div>
              </div>
              View Examples
            </Button>
          </div>

          <div className="mt-12 flex items-center justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-green-500"></div>
              <span>Multi-language support</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-blue-500"></div>
              <span>Cultural authenticity</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-purple-500"></div>
              <span>AI-powered insights</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
