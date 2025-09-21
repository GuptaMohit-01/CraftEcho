import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const features = [
  {
    icon: "message",
    title: "Hyper-Personalized Storytelling",
    description:
      "Transform your craft details into compelling product stories, artisan bios, and social media captions that connect with your audience.",
    complexity: "Easy to Build",
    impact: "High emotional value",
  },
  {
    icon: "camera",
    title: "Visual Marketing Generation",
    description:
      "Enhance product photos, create lifestyle mockups, and generate Instagram-ready content that showcases your crafts beautifully.",
    complexity: "Easy to Build",
    impact: "Very visual appeal",
  },
  {
    icon: "palette",
    title: "Personalized Branding Toolkit",
    description:
      "Generate custom logos, taglines, and social media content that reflects your unique artisan identity and cultural heritage.",
    complexity: "Easy to Build",
    impact: "Strong business appeal",
  },
  {
    icon: "calculator",
    title: "Smart Pricing Calculator",
    description:
      "Get fair pricing suggestions based on materials, time invested, and cultural value with detailed justifications.",
    complexity: "Medium",
    impact: "Direct revenue impact",
  },
  {
    icon: "trending",
    title: "Trend Harmonization",
    description:
      "Discover trending styles and colors that complement your traditional techniques, bridging heritage with modern appeal.",
    complexity: "Medium",
    impact: "Market relevance",
  },
  {
    icon: "languages",
    title: "Multi-Lingual Voice Interface",
    description:
      "Speak in your native language and get content translated for global audiences while preserving cultural authenticity.",
    complexity: "Advanced",
    impact: "Inclusive accessibility",
  },
]

const SimpleIcon = ({ type }: { type: string }) => {
  const iconStyles = "h-5 w-5 text-primary"

  switch (type) {
    case "message":
      return (
        <div className={`${iconStyles} border-2 border-current rounded relative`}>
          <div className="absolute bottom-0 left-1 w-1 h-1 bg-current"></div>
        </div>
      )
    case "camera":
      return (
        <div className={`${iconStyles} border-2 border-current rounded relative`}>
          <div className="absolute top-1 left-1/2 w-2 h-1 bg-current rounded transform -translate-x-1/2"></div>
          <div className="absolute top-2 left-1/2 w-1 h-1 bg-current rounded-full transform -translate-x-1/2"></div>
        </div>
      )
    case "palette":
      return (
        <div className={`${iconStyles} relative`}>
          <div className="w-full h-full border-2 border-current rounded-full relative">
            <div className="absolute top-1 left-1 w-1 h-1 bg-current rounded-full"></div>
            <div className="absolute top-1 right-1 w-1 h-1 bg-current rounded-full"></div>
            <div className="absolute bottom-1 left-1/2 w-1 h-1 bg-current rounded-full transform -translate-x-1/2"></div>
          </div>
        </div>
      )
    case "calculator":
      return (
        <div className={`${iconStyles} border-2 border-current rounded grid grid-cols-3 gap-px p-1`}>
          <div className="w-1 h-1 bg-current"></div>
          <div className="w-1 h-1 bg-current"></div>
          <div className="w-1 h-1 bg-current"></div>
        </div>
      )
    case "trending":
      return (
        <div className={`${iconStyles} relative`}>
          <div className="absolute bottom-0 left-0 w-1 h-3 bg-current"></div>
          <div className="absolute bottom-0 left-2 w-1 h-4 bg-current"></div>
          <div className="absolute bottom-0 right-0 w-1 h-2 bg-current"></div>
        </div>
      )
    case "languages":
      return (
        <div className={`${iconStyles} border-2 border-current rounded relative`}>
          <div className="absolute top-1 left-1 right-1 border-t border-current"></div>
          <div className="absolute bottom-1 left-1 right-1 border-t border-current"></div>
        </div>
      )
    default:
      return <div className={`${iconStyles} border-2 border-current rounded`}></div>
  }
}

export function Features() {
  return (
    <section id="features" className="py-24 lg:py-32">
      <div className="container max-w-screen-xl">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <div className="mb-4 flex justify-center">
            <div className="flex items-center gap-2 rounded-full border border-border/50 bg-muted/50 px-4 py-2 text-sm">
              <div className="h-4 w-4 relative">
                <div
                  className="absolute inset-0 bg-primary opacity-80"
                  style={{
                    clipPath:
                      "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
                  }}
                ></div>
              </div>
              <span className="text-muted-foreground">AI-Powered Features</span>
            </div>
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            Everything you need to{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              digitize your craft
            </span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            From storytelling to pricing, our AI tools help you present your traditional crafts in ways that resonate
            with modern digital audiences.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card key={index} className="relative overflow-hidden border-border/50 bg-card/50 backdrop-blur">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <SimpleIcon type={feature.icon} />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                    <div className="flex items-center gap-2 mt-1">
                      <span
                        className={`text-xs px-2 py-1 rounded-full ${
                          feature.complexity === "Easy to Build"
                            ? "bg-green-500/10 text-green-600 dark:text-green-400"
                            : feature.complexity === "Medium"
                              ? "bg-yellow-500/10 text-yellow-600 dark:text-yellow-400"
                              : "bg-red-500/10 text-red-600 dark:text-red-400"
                        }`}
                      >
                        {feature.complexity}
                      </span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm leading-relaxed">{feature.description}</CardDescription>
                <div className="mt-3 flex items-center gap-2 text-xs text-muted-foreground">
                  <div className="h-3 w-3 bg-current transform rotate-45 relative">
                    <div className="absolute -top-1 -left-1 w-2 h-2 bg-current rounded-full"></div>
                    <div className="absolute -top-1 -right-1 w-2 h-2 bg-current rounded-full"></div>
                  </div>
                  <span>{feature.impact}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
