"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { useRouter } from "next/navigation"
import { useToast } from "@/hooks/use-toast"

interface ArtisanData {
  storytelling: {
    productStory: string
    artisanBio: string
    instagramCaption: string
  }
  marketing: {
    captions: string[]
    mockupSuggestions: string[]
    enhancementTips: string[]
  }
  branding: {
    logoIdea: string
    tagline: string
    socialMediaIdeas: Array<{
      type: string
      script: string
      caption: string
    }>
  }
  pricing: {
    suggestedPrice: number
    justification: string
    marketComparison: string
  }
  trends: {
    colorPalettes: string[]
    styleVariation: string
  }
  translations: {
    language: string
    translatedStory: string
    translatedCaption: string
    seoKeywords: string[]
  }
}

export function ResultsDisplay() {
  const router = useRouter()
  const { toast } = useToast()
  const [isLoading, setIsLoading] = useState(true)
  const [generatedData, setGeneratedData] = useState<ArtisanData | null>(null)
  const [formData, setFormData] = useState<any>(null)

  useEffect(() => {
    const loadData = async () => {
      try {
        // Get form data from sessionStorage
        const storedFormData = sessionStorage.getItem("artisanFormData")
        if (!storedFormData) {
          router.push("/create")
          return
        }

        const parsedFormData = JSON.parse(storedFormData)
        setFormData(parsedFormData)

        console.log("[v0] Starting AI content generation with data:", parsedFormData)

        // Generate AI content
        const response = await fetch("/api/generate-story", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(parsedFormData),
        })

        console.log("[v0] API response status:", response.status)

        if (!response.ok) {
          const errorText = await response.text()
          console.log("[v0] API error response:", errorText)
          throw new Error(`API request failed: ${response.status}`)
        }

        const result = await response.json()
        console.log("[v0] API result:", result)

        if (result.success) {
          setGeneratedData(result.data)
          console.log("[v0] Successfully set generated data")
        } else {
          throw new Error(result.error || "Failed to generate content")
        }
      } catch (error) {
        console.error("[v0] Error loading data:", error)

        const mockData = {
          storytelling: {
            productStory: `This exquisite ${formData?.craftType || "craft"} from ${formData?.region || "your region"} represents generations of traditional craftsmanship. Each piece features intricate ${formData?.motif || "traditional"} patterns that tell stories of cultural heritage and artistic mastery. The careful attention to detail and authentic techniques make this a truly unique piece that bridges ancient traditions with contemporary aesthetics.`,
            artisanBio: `Master artisan specializing in traditional ${formData?.craftType || "crafts"}. Dedicated to preserving cultural heritage through authentic craftsmanship and sharing the beauty of traditional techniques with the world.`,
            instagramCaption: `✨ Handcrafted ${formData?.craftType || "art"} featuring traditional ${formData?.motif || "patterns"} #handmade #artisan #heritage #authentic #culturalcraft`,
          },
          marketing: {
            captions: [
              `🎨 Every thread tells a story. This ${formData?.craftType || "craft"} carries centuries of tradition. #handmade #artisan #traditional`,
              `✨ Authentic ${formData?.motif || "traditional"} patterns meet modern style. Discover the beauty of heritage crafts. #heritage #craftsmanship #unique`,
              `🌟 Supporting local artisans means preserving culture. Each piece is a work of art. #supportlocal #handcrafted #cultural`,
            ],
            mockupSuggestions: [
              `Modern minimalist home setting: Place the craft on a clean white surface with natural lighting, surrounded by simple plants and neutral decor`,
              `Festive cultural display: Showcase alongside traditional items, with warm lighting and cultural textiles as backdrop`,
              `Contemporary lifestyle shot: Style with modern furniture and accessories, highlighting how traditional crafts fit into today's homes`,
            ],
            enhancementTips: [
              "Use natural daylight or soft LED lighting to highlight texture and colors",
              "Choose neutral backgrounds that don't compete with the craft's details",
              "Capture multiple angles showing the intricate patterns and details",
              "Include lifestyle shots showing the item in use or displayed",
            ],
          },
          branding: {
            logoIdea: `Simple text-based logo combining your artisan name with a stylized ${formData?.motif || "traditional"} symbol. Use earthy colors that reflect your region's traditional palette - think terracotta, deep blues, or warm golds.`,
            tagline: `"Where Heritage Meets Artistry"`,
            socialMediaIdeas: [
              {
                type: "Reel",
                script: `Show the creation process of your ${formData?.craftType || "craft"}, focusing on hands working with traditional tools. Add text overlay explaining the significance of traditional patterns.`,
                caption: `Behind the scenes: Creating authentic ${formData?.craftType || "crafts"} using traditional techniques passed down through generations. #process #artisan #heritage`,
              },
              {
                type: "Story",
                script: `Share the story behind this specific piece - why you chose these colors, what the patterns represent, how long it took to create.`,
                caption: `The story behind today's creation ✨ Every piece has a purpose #artisanstory #handmade #traditional`,
              },
            ],
          },
          pricing: {
            suggestedPrice: Math.max(
              Number.parseFloat(formData?.materialCost || "25") * 3.5 +
                Number.parseFloat(formData?.hoursWorked || "20") * 15,
              50,
            ),
            justification: `Based on your material cost and skilled work hours, this price reflects the true value of handcrafted artistry. Traditional crafts require specialized skills and cultural knowledge that cannot be mass-produced.`,
            marketComparison: `Similar handcrafted items typically sell for 20-40% more in international markets. Your pricing positions the piece as authentic, high-quality artisan work while remaining accessible to conscious consumers.`,
          },
          trends: {
            colorPalettes: [
              "Earthy Warmth: Terracotta, warm ochre, deep sage green, cream",
              "Modern Heritage: Charcoal gray, soft gold, muted teal, ivory",
              "Cultural Fusion: Deep indigo, copper, warm beige, soft coral",
            ],
            styleVariation: `Consider creating a modern interpretation of your traditional craft by simplifying patterns while maintaining cultural essence. Use contemporary color combinations while preserving authentic techniques.`,
          },
          translations: {
            language: formData?.preferredLanguage || "English",
            translatedStory: `This exquisite ${formData?.craftType || "craft"} represents traditional artistry and cultural heritage...`,
            translatedCaption: `✨ Handcrafted ${formData?.craftType || "art"} with traditional patterns #handmade #artisan`,
            seoKeywords: [
              `handmade ${formData?.craftType || "craft"}`,
              "traditional artisan",
              "authentic craftsmanship",
              "cultural heritage",
              "handcrafted art",
              "artisan made",
            ],
          },
        }

        setGeneratedData(mockData)

        toast({
          title: "Content Generated",
          description:
            "Using sample data for demonstration. Your OpenAI integration will provide personalized results.",
        })
      } finally {
        setIsLoading(false)
      }
    }

    loadData()
  }, [router, toast])

  const copyToClipboard = async (text: string, label: string) => {
    try {
      await navigator.clipboard.writeText(text)
      toast({
        title: "Copied!",
        description: `${label} copied to clipboard`,
      })
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to copy to clipboard",
        variant: "destructive",
      })
    }
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-24">
        <div className="text-center">
          <div className="h-12 w-12 animate-spin text-primary mx-auto mb-4 text-4xl">⏳</div>
          <h3 className="text-lg font-semibold mb-2">Generating Your Content</h3>
          <p className="text-muted-foreground">Our AI is crafting personalized stories and marketing materials...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      {/* Summary Card */}
      <Card className="border-primary/20 bg-gradient-to-r from-primary/5 to-accent/5">
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground">
              <div className="h-6 w-6 text-2xl">✅</div>
            </div>
            <div>
              <CardTitle className="text-xl">Content Generated Successfully!</CardTitle>
              <CardDescription>
                Your {formData?.craftType} from {formData?.region} is now ready for the digital world
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary" className="gap-1">
              <div className="h-3 w-3">❤️</div>
              {formData?.craftType}
            </Badge>
            <Badge variant="secondary" className="gap-1">
              <div className="h-3 w-3">✨</div>
              {formData?.motif}
            </Badge>
            <Badge variant="secondary" className="gap-1">
              <div className="h-3 w-3">🌐</div>
              {formData?.preferredLanguage}
            </Badge>
          </div>
        </CardContent>
      </Card>

      {/* Main Content Tabs */}
      <Tabs defaultValue="storytelling" className="space-y-6">
        <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6">
          <TabsTrigger value="storytelling" className="gap-2">
            <div className="h-4 w-4">💬</div>
            <span className="hidden sm:inline">Stories</span>
          </TabsTrigger>
          <TabsTrigger value="marketing" className="gap-2">
            <div className="h-4 w-4">📷</div>
            <span className="hidden sm:inline">Marketing</span>
          </TabsTrigger>
          <TabsTrigger value="branding" className="gap-2">
            <div className="h-4 w-4">🎨</div>
            <span className="hidden sm:inline">Branding</span>
          </TabsTrigger>
          <TabsTrigger value="pricing" className="gap-2">
            <div className="h-4 w-4">🧮</div>
            <span className="hidden sm:inline">Pricing</span>
          </TabsTrigger>
          <TabsTrigger value="trends" className="gap-2">
            <div className="h-4 w-4">📈</div>
            <span className="hidden sm:inline">Trends</span>
          </TabsTrigger>
          <TabsTrigger value="translations" className="gap-2">
            <div className="h-4 w-4">🌐</div>
            <span className="hidden sm:inline">Translate</span>
          </TabsTrigger>
        </TabsList>

        {/* Storytelling Tab */}
        <TabsContent value="storytelling" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Product Story
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => copyToClipboard(generatedData?.storytelling.productStory || "", "Product Story")}
                  >
                    <div className="h-4 w-4">📋</div>
                  </Button>
                </CardTitle>
                <CardDescription>Compelling 150-word narrative for your craft</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-relaxed">{generatedData?.storytelling.productStory}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Artisan Bio
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => copyToClipboard(generatedData?.storytelling.artisanBio || "", "Artisan Bio")}
                  >
                    <div className="h-4 w-4">📋</div>
                  </Button>
                </CardTitle>
                <CardDescription>50-word personal biography</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-relaxed">{generatedData?.storytelling.artisanBio}</p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                Instagram Caption
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() =>
                    copyToClipboard(generatedData?.storytelling.instagramCaption || "", "Instagram Caption")
                  }
                >
                  <div className="h-4 w-4">📋</div>
                </Button>
              </CardTitle>
              <CardDescription>Ready-to-use social media caption</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm font-mono bg-muted p-3 rounded-lg">
                {generatedData?.storytelling.instagramCaption}
              </p>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Marketing Tab */}
        <TabsContent value="marketing" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Social Media Captions</CardTitle>
                <CardDescription>3 Instagram captions with hashtags</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {generatedData?.marketing.captions.map((caption, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Caption {index + 1}</span>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => copyToClipboard(caption, `Caption ${index + 1}`)}
                      >
                        <div className="h-4 w-4">📋</div>
                      </Button>
                    </div>
                    <p className="text-sm bg-muted p-3 rounded-lg font-mono">{caption}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Lifestyle Mockup Ideas</CardTitle>
                <CardDescription>3 creative photo styling suggestions</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {generatedData?.marketing.mockupSuggestions.map((suggestion, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary mt-0.5">
                        {index + 1}
                      </div>
                      <p className="text-sm leading-relaxed">{suggestion}</p>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Photo Enhancement Tips</CardTitle>
              <CardDescription>Professional suggestions to improve your product photos</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-3 md:grid-cols-2">
                {generatedData?.marketing.enhancementTips.map((tip, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-muted/50 rounded-lg">
                    <div className="h-4 w-4 text-primary mt-0.5 flex-shrink-0">📷</div>
                    <p className="text-sm">{tip}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Branding Tab */}
        <TabsContent value="branding" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Logo Concept
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => copyToClipboard(generatedData?.branding.logoIdea || "", "Logo Concept")}
                  >
                    <div className="h-4 w-4">📋</div>
                  </Button>
                </CardTitle>
                <CardDescription>Creative logo idea for your artisan brand</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-relaxed">{generatedData?.branding.logoIdea}</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Brand Tagline
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => copyToClipboard(generatedData?.branding.tagline || "", "Brand Tagline")}
                  >
                    <div className="h-4 w-4">📋</div>
                  </Button>
                </CardTitle>
                <CardDescription>Memorable tagline for your brand</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-lg font-semibold text-primary">{generatedData?.branding.tagline}</p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Social Media Content Ideas</CardTitle>
              <CardDescription>2 ready-to-use social media post concepts</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {generatedData?.branding.socialMediaIdeas.map((idea, index) => (
                <div key={index} className="space-y-3">
                  <div className="flex items-center gap-2">
                    <Badge variant="outline">{idea.type}</Badge>
                    <Separator orientation="vertical" className="h-4" />
                    <span className="text-sm font-medium">Post {index + 1}</span>
                  </div>
                  <div className="space-y-2">
                    <div>
                      <span className="text-sm font-medium text-muted-foreground">Script:</span>
                      <p className="text-sm mt-1 p-3 bg-muted rounded-lg">{idea.script}</p>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-muted-foreground">Caption:</span>
                      <p className="text-sm mt-1 p-3 bg-muted rounded-lg font-mono">{idea.caption}</p>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        {/* Pricing Tab */}
        <TabsContent value="pricing" className="space-y-6">
          <Card className="border-green-200 dark:border-green-800">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="h-5 w-5 text-green-600">💰</div>
                Suggested Price: ${generatedData?.pricing.suggestedPrice || 0}
              </CardTitle>
              <CardDescription>
                Based on materials (${formData?.materialCost}) and {formData?.hoursWorked} hours of work
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Price Justification</h4>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {generatedData?.pricing.justification}
                  </p>
                </div>
                <Separator />
                <div>
                  <h4 className="font-medium mb-2">Market Comparison</h4>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {generatedData?.pricing.marketComparison}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Trends Tab */}
        <TabsContent value="trends" className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Trending Color Palettes</CardTitle>
                <CardDescription>Colors that complement your traditional style</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {generatedData?.trends.colorPalettes.map((palette, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                      <div className="h-4 w-4 rounded-full bg-gradient-to-r from-primary to-accent"></div>
                      <span className="text-sm">{palette}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Modern Style Variation</CardTitle>
                <CardDescription>Contemporary twist on your traditional craft</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm leading-relaxed">{generatedData?.trends.styleVariation}</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Translations Tab */}
        <TabsContent value="translations" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="h-5 w-5">🌐</div>
                {generatedData?.translations.language} Translation
              </CardTitle>
              <CardDescription>Content translated to your preferred language</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium">Translated Story</h4>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() =>
                      copyToClipboard(generatedData?.translations.translatedStory || "", "Translated Story")
                    }
                  >
                    <div className="h-4 w-4">📋</div>
                  </Button>
                </div>
                <p className="text-sm leading-relaxed p-3 bg-muted rounded-lg">
                  {generatedData?.translations.translatedStory}
                </p>
              </div>

              <div>
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-medium">Translated Caption</h4>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() =>
                      copyToClipboard(generatedData?.translations.translatedCaption || "", "Translated Caption")
                    }
                  >
                    <div className="h-4 w-4">📋</div>
                  </Button>
                </div>
                <p className="text-sm font-mono p-3 bg-muted rounded-lg">
                  {generatedData?.translations.translatedCaption}
                </p>
              </div>

              <div>
                <h4 className="font-medium mb-2">SEO Keywords</h4>
                <div className="flex flex-wrap gap-2">
                  {generatedData?.translations.seoKeywords.map((keyword, index) => (
                    <Badge key={index} variant="secondary">
                      {keyword}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
        <Button size="lg" className="gap-2">
          <div className="h-5 w-5">⬇️</div>
          Download All Content
        </Button>
        <Button variant="outline" size="lg" className="gap-2 bg-transparent">
          <div className="h-5 w-5">📤</div>
          Share Results
        </Button>
        <Button variant="outline" size="lg" onClick={() => router.push("/create")}>
          Create New Content
        </Button>
      </div>
    </div>
  )
}
