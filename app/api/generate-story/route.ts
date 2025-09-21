import { openai } from "@ai-sdk/openai"
import { generateObject } from "ai"
import { z } from "zod"

const artisanStorySchema = z.object({
  storytelling: z.object({
    productStory: z
      .string()
      .describe("Compelling 150-word product story that connects traditional craftsmanship with modern values"),
    artisanBio: z.string().describe("50-word artisan biography highlighting heritage and expertise"),
    instagramCaption: z.string().describe("Under 100 character Instagram caption with relevant hashtags"),
  }),
  marketing: z.object({
    captions: z.array(z.string()).length(3).describe("3 Instagram captions with hashtags for different audiences"),
    mockupSuggestions: z
      .array(z.string())
      .length(3)
      .describe("3 lifestyle mockup ideas: modern home, festive decor, minimalist setup"),
    enhancementTips: z.array(z.string()).describe("Photo enhancement suggestions: lighting, background, composition"),
  }),
  branding: z.object({
    logoIdea: z.string().describe("Simple logo concept description combining text and cultural symbol"),
    tagline: z.string().describe("Short, memorable tagline for the artisan brand"),
    socialMediaIdeas: z
      .array(
        z.object({
          type: z.string().describe("Type of social media content: Reel, Story, Post"),
          script: z.string().describe("Content script or description"),
          caption: z.string().describe("Social media caption with hashtags"),
        }),
      )
      .length(2)
      .describe("2 social media post ideas with scripts and captions"),
  }),
  pricing: z.object({
    suggestedPrice: z.number().describe("Fair price suggestion based on materials, time, and cultural value"),
    justification: z.string().describe("Detailed narrative justifying the suggested price"),
    marketComparison: z.string().describe("Comparison with similar market products and positioning"),
  }),
  trends: z.object({
    colorPalettes: z.array(z.string()).describe("Trending color palettes that complement traditional techniques"),
    styleVariation: z.string().describe("One product variation idea blending tradition with modern trends"),
  }),
  translations: z.object({
    language: z.string().describe("The preferred language for translation"),
    translatedStory: z.string().describe("Product story translated to preferred language"),
    translatedCaption: z.string().describe("Instagram caption translated to preferred language"),
    seoKeywords: z.array(z.string()).describe("SEO keywords in both English and local language"),
  }),
})

export async function POST(req: Request) {
  try {
    const { craftType, region, motif, artisanJourney, materialCost, hoursWorked, preferredLanguage } = await req.json()

    const generateMockData = () => ({
      storytelling: {
        productStory: `This exquisite ${craftType} from ${region} represents generations of traditional craftsmanship. Each piece features intricate ${motif} patterns that tell stories of cultural heritage and artistic mastery. ${artisanJourney.slice(0, 100)}... The careful attention to detail and authentic techniques make this a truly unique piece that bridges ancient traditions with contemporary aesthetics. Every element reflects the artisan's deep connection to their cultural roots while appealing to modern sensibilities.`,
        artisanBio: `Master artisan from ${region} specializing in traditional ${craftType}. ${artisanJourney.slice(0, 50)}... Dedicated to preserving cultural heritage through authentic craftsmanship.`,
        instagramCaption: `✨ Handcrafted ${craftType} from ${region} featuring traditional ${motif} patterns #handmade #${craftType.replace(/\s+/g, "").toLowerCase()} #${region.replace(/\s+/g, "").toLowerCase()} #artisan #heritage #authentic`,
      },
      marketing: {
        captions: [
          `🎨 Every thread tells a story. This ${craftType} from ${region} carries centuries of tradition. #handmade #artisan #${craftType.replace(/\s+/g, "").toLowerCase()}`,
          `✨ Authentic ${motif} patterns meet modern style. Discover the beauty of traditional ${craftType}. #heritage #craftsmanship #unique`,
          `🌟 Supporting local artisans means preserving culture. Each piece is a work of art. #supportlocal #handcrafted #cultural`,
        ],
        mockupSuggestions: [
          `Modern minimalist home setting: Place the ${craftType} on a clean white surface with natural lighting, surrounded by simple plants and neutral decor`,
          `Festive cultural display: Showcase alongside traditional items from ${region}, with warm lighting and cultural textiles as backdrop`,
          `Contemporary lifestyle shot: Style with modern furniture and accessories, highlighting how traditional crafts fit into today's homes`,
        ],
        enhancementTips: [
          "Use natural daylight or soft LED lighting to highlight texture and colors",
          "Choose neutral backgrounds that don't compete with the craft's details",
          `Capture multiple angles showing the intricate ${motif} patterns`,
          "Include lifestyle shots showing the item in use or displayed",
        ],
      },
      branding: {
        logoIdea: `Simple text-based logo combining your artisan name with a stylized ${motif} symbol. Use earthy colors that reflect ${region}'s traditional palette - think terracotta, deep blues, or warm golds.`,
        tagline: `"Where Heritage Meets Artistry" or "Authentic ${craftType} from ${region}"`,
        socialMediaIdeas: [
          {
            type: "Reel",
            script: `Show the creation process of your ${craftType}, focusing on hands working with traditional tools. Add text overlay explaining the significance of ${motif} patterns.`,
            caption: `Behind the scenes: Creating authentic ${craftType} using traditional techniques passed down through generations. Each ${motif} pattern has meaning. #process #artisan #heritage`,
          },
          {
            type: "Story",
            script: `Share the story behind this specific piece - why you chose these colors, what the ${motif} represents, how long it took to create.`,
            caption: `The story behind today's creation ✨ Every piece has a purpose #artisanstory #handmade #${region.replace(/\s+/g, "").toLowerCase()}`,
          },
        ],
      },
      pricing: {
        suggestedPrice: Math.max(Number.parseFloat(materialCost) * 3.5 + Number.parseFloat(hoursWorked) * 15, 50),
        justification: `Based on your material cost of $${materialCost} and ${hoursWorked} hours of skilled work, this price reflects the true value of handcrafted artistry. Traditional ${craftType} requires specialized skills and cultural knowledge that cannot be mass-produced. The ${motif} patterns represent cultural heritage that adds significant value beyond materials and time.`,
        marketComparison: `Similar handcrafted ${craftType} from ${region} typically sell for 20-40% more in international markets. Your pricing positions the piece as authentic, high-quality artisan work while remaining accessible to conscious consumers who value cultural preservation and ethical craftsmanship.`,
      },
      trends: {
        colorPalettes: [
          "Earthy Warmth: Terracotta, warm ochre, deep sage green, cream",
          "Modern Heritage: Charcoal gray, soft gold, muted teal, ivory",
          "Cultural Fusion: Deep indigo, copper, warm beige, soft coral",
        ],
        styleVariation: `Consider creating a modern interpretation of your traditional ${craftType} by simplifying the ${motif} pattern while maintaining its cultural essence. Use contemporary color combinations while preserving the authentic techniques that make your work special.`,
      },
      translations: {
        language: preferredLanguage,
        translatedStory:
          preferredLanguage === "English"
            ? `This exquisite ${craftType} represents traditional artistry from ${region}...`
            : `[This would be translated to ${preferredLanguage}] This exquisite ${craftType} represents traditional artistry from ${region}...`,
        translatedCaption:
          preferredLanguage === "English"
            ? `✨ Handcrafted ${craftType} from ${region} #handmade #artisan`
            : `[Translated to ${preferredLanguage}] ✨ Handcrafted ${craftType} from ${region} #handmade #artisan`,
        seoKeywords: [
          `handmade ${craftType}`,
          `${region} artisan`,
          `traditional ${motif}`,
          "authentic craftsmanship",
          "cultural heritage",
          "handcrafted art",
          `${craftType.toLowerCase()} art`,
          "artisan made",
        ],
      },
    })

    const hasOpenAI = process.env.OPENAI_API_KEY

    if (!hasOpenAI) {
      return Response.json({ success: true, data: generateMockData() })
    }

    try {
      const prompt = `
      You are an AI assistant designed to empower local artisans by bridging cultural heritage with a digital-native audience.
      
      Create comprehensive, culturally authentic content for:
      • Craft type: ${craftType}
      • Region: ${region}
      • Motif/Design: ${motif}
      • Artisan's journey: ${artisanJourney}
      • Material cost: $${materialCost}
      • Hours worked: ${hoursWorked}
      • Preferred language: ${preferredLanguage}
      
      Guidelines:
      - Honor cultural authenticity while appealing to modern digital audiences
      - Create storytelling that connects traditional craftsmanship with contemporary values
      - Ensure pricing reflects both material costs, time investment, and cultural significance
      - Generate content that celebrates heritage while being accessible to global audiences
      - Include emotional storytelling that highlights the artisan's personal journey
      - Suggest pricing that values the artisan's skill and cultural preservation
      - Provide marketing content that educates audiences about the craft's cultural importance
      
      Focus on creating content that empowers artisans economically while preserving cultural heritage.
      `

      const { object } = await generateObject({
        model: openai("gpt-4o-mini"),
        schema: artisanStorySchema,
        prompt,
        maxTokens: 3000,
        temperature: 0.7,
      })

      return Response.json({ success: true, data: object })
    } catch (openaiError: any) {
      console.error("OpenAI API error:", openaiError)

      if (
        openaiError.message?.includes("quota") ||
        openaiError.message?.includes("exceeded") ||
        openaiError.status === 429
      ) {
        console.log("OpenAI quota exceeded, falling back to mock data")
        return Response.json({ success: true, data: generateMockData() })
      }

      // For other OpenAI errors, also fall back to mock data
      console.log("OpenAI API error, falling back to mock data")
      return Response.json({ success: true, data: generateMockData() })
    }
  } catch (error) {
    console.error("Error generating artisan story:", error)
    return Response.json({ success: false, error: "Failed to generate story" }, { status: 500 })
  }
}
