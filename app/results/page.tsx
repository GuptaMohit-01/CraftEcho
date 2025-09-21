import { ResultsDisplay } from "@/components/results-display"
import { Header } from "@/components/header"

export default function ResultsPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="container max-w-6xl py-12">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            Your{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">AI-Generated</span>{" "}
            Content
          </h1>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            Professional storytelling, marketing materials, and branding assets crafted specifically for your artisan
            craft.
          </p>
        </div>
        <ResultsDisplay />
      </div>
    </main>
  )
}
