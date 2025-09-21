"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useRouter } from "next/navigation"

const craftTypes = [
  "Terracotta pottery",
  "Handwoven textiles",
  "Wood carving",
  "Metal work",
  "Jewelry making",
  "Leather craft",
  "Bamboo craft",
  "Stone carving",
  "Embroidery",
  "Painting",
  "Sculpture",
  "Other",
]

const regions = [
  "Kutch, Gujarat",
  "Rajasthan",
  "Kerala",
  "West Bengal",
  "Uttar Pradesh",
  "Maharashtra",
  "Tamil Nadu",
  "Karnataka",
  "Odisha",
  "Assam",
  "Other",
]

const languages = [
  "English",
  "Hindi",
  "Bengali",
  "Tamil",
  "Telugu",
  "Marathi",
  "Gujarati",
  "Kannada",
  "Malayalam",
  "Punjabi",
  "Urdu",
  "Other",
]

export function ArtisanForm() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    craftType: "",
    region: "",
    motif: "",
    artisanJourney: "",
    materialCost: "",
    hoursWorked: "",
    preferredLanguage: "English",
    productImage: null as File | null,
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      setFormData((prev) => ({ ...prev, productImage: file }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      console.log("[v0] Form submitted with data:", formData)

      // Store form data in sessionStorage for the results page
      sessionStorage.setItem("artisanFormData", JSON.stringify(formData))
      console.log("[v0] Form data stored in sessionStorage")

      // Navigate to results page
      router.push("/results")
    } catch (error) {
      console.error("[v0] Error submitting form:", error)
      router.push("/results")
    } finally {
      setIsLoading(false)
    }
  }

  const isFormValid =
    formData.craftType &&
    formData.region &&
    formData.motif &&
    formData.artisanJourney &&
    formData.materialCost &&
    formData.hoursWorked

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Product Image Upload */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="h-5 w-5 text-primary">📷</div>
            Product Photo
          </CardTitle>
          <CardDescription>
            Upload a clear photo of your craft. This will be enhanced and used for marketing materials.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center w-full">
            <label
              htmlFor="product-image"
              className="flex flex-col items-center justify-center w-full h-64 border-2 border-border border-dashed rounded-lg cursor-pointer bg-muted/50 hover:bg-muted/70 transition-colors"
            >
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                {formData.productImage ? (
                  <div className="text-center">
                    <div className="w-8 h-8 mb-4 text-primary mx-auto text-2xl">📷</div>
                    <p className="mb-2 text-sm text-foreground">
                      <span className="font-semibold">{formData.productImage.name}</span>
                    </p>
                    <p className="text-xs text-muted-foreground">Click to change image</p>
                  </div>
                ) : (
                  <div className="text-center">
                    <div className="w-8 h-8 mb-4 text-muted-foreground mx-auto text-2xl">⬆️</div>
                    <p className="mb-2 text-sm text-muted-foreground">
                      <span className="font-semibold">Click to upload</span> or drag and drop
                    </p>
                    <p className="text-xs text-muted-foreground">PNG, JPG or JPEG (MAX. 10MB)</p>
                  </div>
                )}
              </div>
              <input id="product-image" type="file" className="hidden" accept="image/*" onChange={handleImageUpload} />
            </label>
          </div>
        </CardContent>
      </Card>

      {/* Craft Details */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="h-5 w-5 text-primary">🎨</div>
            Craft Details
          </CardTitle>
          <CardDescription>Tell us about your craft type, origin, and design elements.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="craft-type">Craft Type</Label>
              <Select value={formData.craftType} onValueChange={(value) => handleInputChange("craftType", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select your craft type" />
                </SelectTrigger>
                <SelectContent>
                  {craftTypes.map((craft) => (
                    <SelectItem key={craft} value={craft}>
                      {craft}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="region" className="flex items-center gap-2">
                <div className="h-4 w-4">📍</div>
                Region
              </Label>
              <Select value={formData.region} onValueChange={(value) => handleInputChange("region", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select your region" />
                </SelectTrigger>
                <SelectContent>
                  {regions.map((region) => (
                    <SelectItem key={region} value={region}>
                      {region}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="motif">Motif/Design Elements</Label>
            <Input
              id="motif"
              placeholder="e.g., Peacock, Floral patterns, Geometric designs"
              value={formData.motif}
              onChange={(e) => handleInputChange("motif", e.target.value)}
            />
          </div>
        </CardContent>
      </Card>

      {/* Artisan Story */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="h-5 w-5 text-primary">✨</div>
            Your Story
          </CardTitle>
          <CardDescription>
            Share your journey as an artisan. This will be used to create authentic, personal narratives.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <Label htmlFor="artisan-journey">Artisan Journey</Label>
            <Textarea
              id="artisan-journey"
              placeholder="Tell us about your craft journey, family traditions, inspiration, or what makes your work special..."
              className="min-h-[120px] resize-none"
              value={formData.artisanJourney}
              onChange={(e) => handleInputChange("artisanJourney", e.target.value)}
            />
          </div>
        </CardContent>
      </Card>

      {/* Pricing Information */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="h-5 w-5 text-primary">💰</div>
            Pricing Details
          </CardTitle>
          <CardDescription>Help us calculate fair pricing based on your investment and time.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="material-cost">Material Cost ($)</Label>
              <Input
                id="material-cost"
                type="number"
                placeholder="0.00"
                min="0"
                step="0.01"
                value={formData.materialCost}
                onChange={(e) => handleInputChange("materialCost", e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="hours-worked" className="flex items-center gap-2">
                <div className="h-4 w-4">⏰</div>
                Hours Worked
              </Label>
              <Input
                id="hours-worked"
                type="number"
                placeholder="0"
                min="0"
                step="0.5"
                value={formData.hoursWorked}
                onChange={(e) => handleInputChange("hoursWorked", e.target.value)}
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Language Preference */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <div className="h-5 w-5 text-primary">🌐</div>
            Language Preference
          </CardTitle>
          <CardDescription>Choose your preferred language for content generation and translations.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <Label htmlFor="language">Preferred Language</Label>
            <Select
              value={formData.preferredLanguage}
              onValueChange={(value) => handleInputChange("preferredLanguage", value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select your preferred language" />
              </SelectTrigger>
              <SelectContent>
                {languages.map((language) => (
                  <SelectItem key={language} value={language}>
                    {language}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Submit Button */}
      <div className="flex justify-center pt-6">
        <Button type="submit" size="lg" disabled={!isFormValid || isLoading} className="gap-2 min-w-[200px]">
          {isLoading ? (
            <>
              <div className="h-5 w-5 animate-spin">⏳</div>
              Generating Content...
            </>
          ) : (
            <>
              <div className="h-5 w-5">✨</div>
              Generate AI Content
            </>
          )}
        </Button>
      </div>
    </form>
  )
}
