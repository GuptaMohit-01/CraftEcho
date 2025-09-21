import { ArtisanForm } from "@/components/artisan-form"
import { Header } from "@/components/header"

export default function CreatePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="container max-w-4xl py-12">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            Share Your{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Craft Story</span>
          </h1>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            Tell us about your craft and let AI help you create compelling stories, marketing content, and branding
            materials that honor your heritage.
          </p>
        </div>
        <ArtisanForm />
      </div>
    </main>
  )
}
