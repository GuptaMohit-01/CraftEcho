import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const steps = [
  {
    icon: "upload",
    title: "Share Your Craft",
    description:
      "Upload photos of your work and tell us about your craft type, region, materials, and the story behind your creation.",
    details: ["Product photos", "Craft details", "Cultural context", "Artisan journey"],
  },
  {
    icon: "wand",
    title: "AI Magic Happens",
    description:
      "Our AI analyzes your inputs and generates personalized content across storytelling, marketing, branding, and pricing.",
    details: ["Story generation", "Visual enhancement", "Brand creation", "Price optimization"],
  },
  {
    icon: "download",
    title: "Get Your Assets",
    description:
      "Download professionally crafted stories, enhanced images, branding materials, and marketing content in multiple languages.",
    details: ["Marketing copy", "Enhanced photos", "Brand assets", "Multi-language content"],
  },
  {
    icon: "share",
    title: "Share & Sell",
    description:
      "Use your new digital assets across social media, marketplaces, and your own channels to reach global audiences.",
    details: ["Social media ready", "E-commerce optimized", "SEO friendly", "Cultural authentic"],
  },
]

const SimpleIcon = ({ type }: { type: string }) => {
  const iconStyles = "h-6 w-6 text-primary-foreground"

  switch (type) {
    case "upload":
      return (
        <div className={`${iconStyles} relative`}>
          <div className="absolute bottom-0 left-1/2 w-3 h-1 bg-current transform -translate-x-1/2"></div>
          <div className="absolute bottom-1 left-1/2 w-1 h-3 bg-current transform -translate-x-1/2"></div>
          <div className="absolute top-1 left-1/2 w-0 h-0 border-l-2 border-r-2 border-b-2 border-transparent border-b-current transform -translate-x-1/2"></div>
        </div>
      )
    case "wand":
      return (
        <div className={`${iconStyles} relative`}>
          <div className="absolute top-0 left-0 w-4 h-1 bg-current transform rotate-45 origin-left"></div>
          <div className="absolute top-1 right-1 w-1 h-1 bg-current rounded-full"></div>
          <div className="absolute top-0 right-0 w-1 h-1 bg-current rounded-full"></div>
        </div>
      )
    case "download":
      return (
        <div className={`${iconStyles} relative`}>
          <div className="absolute top-0 left-1/2 w-3 h-1 bg-current transform -translate-x-1/2"></div>
          <div className="absolute top-1 left-1/2 w-1 h-3 bg-current transform -translate-x-1/2"></div>
          <div className="absolute bottom-1 left-1/2 w-0 h-0 border-l-2 border-r-2 border-t-2 border-transparent border-t-current transform -translate-x-1/2"></div>
        </div>
      )
    case "share":
      return (
        <div className={`${iconStyles} relative`}>
          <div className="absolute top-1/2 left-0 w-2 h-1 bg-current transform -translate-y-1/2"></div>
          <div className="absolute top-1/2 right-0 w-2 h-1 bg-current transform -translate-y-1/2"></div>
          <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-current rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
        </div>
      )
    default:
      return <div className={`${iconStyles} border-2 border-current rounded`}></div>
  }
}

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 lg:py-32 bg-muted/30">
      <div className="container max-w-screen-xl">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            From traditional craft to{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              digital success
            </span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            Our simple 4-step process transforms your handmade creations into compelling digital experiences that honor
            your heritage while reaching modern audiences.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <Card className="h-full border-border/50 bg-card/50 backdrop-blur">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                      <SimpleIcon type={step.icon} />
                    </div>
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted text-sm font-bold">
                      {index + 1}
                    </div>
                  </div>
                  <CardTitle className="text-xl">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed mb-4">{step.description}</CardDescription>
                  <ul className="space-y-2">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary/60"></div>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <div className="h-6 w-6 border-r-2 border-t-2 border-muted-foreground/50 transform rotate-45"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button asChild size="lg" className="gap-2">
            <Link href="/create">
              Start Your Journey
              <div className="h-4 w-4 border-r-2 border-t-2 border-current transform rotate-45"></div>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
