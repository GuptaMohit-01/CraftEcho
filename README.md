# CraftAI - Empowering Local Artisans 🎨
## Where every artisan’s voice is amplified by AI”


An AI-powered platform that bridges traditional craftsmanship with modern digital marketing, helping artisans transform their cultural heritage into compelling digital experiences and reach global audiences.

![CraftAI Platform](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![OpenAI](https://img.shields.io/badge/OpenAI-412991?style=for-the-badge&logo=openai&logoColor=white)

## 🌟 Overview

CraftAI is a comprehensive digital transformation platform specifically designed for traditional artisans. It combines AI-powered content generation with cultural sensitivity to help craftspeople create compelling digital presences while preserving their authentic heritage.

### 🎯 Mission
- **Economic Empowerment**: Enable fair pricing and global market access
- **Cultural Preservation**: Maintain authentic storytelling with modern appeal
- **Digital Inclusion**: Provide multi-language support and accessibility
- **Market Expansion**: Connect artisans with global audiences while preserving cultural roots

## ✨ Key Features

### 🎨 **Hyper-Personalized Storytelling**
- Transform craft details into compelling narratives
- Preserve cultural authenticity while appealing to modern audiences
- Generate product stories, artisan bios, and brand narratives

### 📱 **Visual Marketing Generation**
- AI-powered photo enhancement suggestions
- Lifestyle mockup ideas for social media
- Instagram-ready content with optimized hashtags
- Visual styling tips for product photography

### 🏷️ **Personalized Branding Toolkit**
- Logo concepts incorporating cultural symbols
- Brand taglines and social media scripts
- Cultural heritage integration with modern design principles
- Consistent brand voice across all platforms

### 💰 **Smart Pricing Calculator**
- Fair pricing based on materials, time investment, and cultural value
- Market comparison and pricing justification
- Revenue optimization strategies
- Transparent pricing breakdown for customers

### 📈 **Trend Harmonization**
- Modern color palettes complementing traditional techniques
- Style variations bridging heritage with contemporary appeal
- Market trend analysis with cultural sensitivity
- Seasonal adaptation suggestions

### 🌍 **Multi-Lingual Voice Interface**
- Native language input with global translation capabilities
- SEO keyword generation in multiple languages
- Cultural authenticity preservation across translations
- Support for 12+ regional languages including Hindi, Bengali, Tamil, Telugu

## 🛠️ Technical Stack

### Frontend
- **Next.js 14** - React framework with App Router
- **React 19** - Latest React features and hooks
- **TypeScript** - Type-safe development
- **Tailwind CSS v4** - Modern utility-first styling
- **Radix UI** - Accessible component primitives

### AI & Backend
- **OpenAI GPT-4o-mini** - AI content generation with structured output
- **Next.js API Routes** - Serverless backend functions
- **Zod** - Schema validation and type safety

### State Management
- **React Hooks** - Built-in state management
- **SessionStorage** - Form data persistence
- **LocalStorage** - Authentication demo

### UI/UX
- **Responsive Design** - Mobile-first approach
- **Dark/Light Mode** - Theme switching
- **Accessibility** - WCAG compliant components
- **Cultural Design** - Warm color palette with cultural authenticity

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn
- OpenAI API key (optional - falls back to mock data)

### Installation

1. **Clone the repository**
   \`\`\`bash
   git clone https://github.com/yourusername/craftai-platform.git
   cd craftai-platform
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   # or
   yarn install
   \`\`\`

3. **Set up environment variables**
   \`\`\`bash
   cp .env.example .env.local
   \`\`\`
   
   Add your OpenAI API key to `.env.local`:
   \`\`\`
   OPENAI_API_KEY=your_openai_api_key_here
   \`\`\`

4. **Run the development server**
   \`\`\`bash
   npm run dev
   # or
   yarn dev
   \`\`\`

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Demo Credentials
For testing the authentication system:
- **Email**: `demo@craftai.com`
- **Password**: `demo123`

## 📱 Usage Guide

### For Artisans

1. **Create Your Profile**
   - Sign up with your email
   - Add your craft specialization and region
   - Upload a profile photo (optional)

2. **Submit Your Craft Details**
   - Select your craft type (pottery, textiles, jewelry, etc.)
   - Choose your region (Kutch Gujarat, Rajasthan, Kerala, etc.)
   - Describe your traditional motifs and techniques
   - Share your artisan journey and story
   - Upload product photos
   - Input material costs and time investment

3. **Generate AI Content**
   - Get personalized product stories
   - Receive marketing copy and social media content
   - Access branding suggestions and logo concepts
   - Get smart pricing recommendations
   - View trend analysis and style variations
   - Download content in your preferred language

4. **Use Generated Content**
   - Copy content with one-click functionality
   - Adapt suggestions to your specific needs
   - Use across social media, websites, and marketing materials

### For Developers

#### Project Structure
\`\`\`
craftai-platform/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   ├── auth/              # Authentication pages
│   ├── dashboard/         # User dashboard
│   └── results/           # Results display
├── components/            # React components
│   ├── ui/               # Reusable UI components
│   ├── artisan-form.tsx  # Main form component
│   ├── results-display.tsx # Results interface
│   └── ...
├── lib/                  # Utility functions
└── public/              # Static assets
\`\`\`

#### Key Components

- **ArtisanForm**: Multi-step form for craft input
- **ResultsDisplay**: Tabbed interface for AI-generated content
- **Header**: Navigation with authentication state
- **Dashboard**: User profile and quick actions

#### API Routes

- `POST /api/generate-story` - Generate AI content from form data
- Includes fallback to mock data when OpenAI API is unavailable

## 🎨 Design System

### Color Palette
- **Primary**: Warm earth tones reflecting cultural heritage
- **Secondary**: Complementary colors for modern appeal
- **Accent**: Vibrant colors for call-to-action elements
- **Neutral**: Sophisticated grays for text and backgrounds

### Typography
- **Headings**: Inter font family for modern readability
- **Body**: Optimized line height (1.4-1.6) for comfortable reading
- **Cultural Elements**: Subtle texture patterns for authenticity

### Layout Principles
- **Mobile-First**: Responsive design starting from mobile
- **Flexbox Priority**: Modern layout techniques
- **Accessibility**: WCAG compliant with proper contrast ratios
- **Cultural Sensitivity**: Design elements respecting traditional aesthetics

## 🔧 Configuration

### Environment Variables
\`\`\`bash
# Required for AI content generation
OPENAI_API_KEY=your_openai_api_key

# Optional: Custom API endpoints
NEXT_PUBLIC_API_URL=http://localhost:3000/api
\`\`\`

### Customization

#### Adding New Craft Types
Update the craft types in `components/artisan-form.tsx`:
\`\`\`typescript
const craftTypes = [
  "Pottery & Ceramics",
  "Handwoven Textiles",
  "Jewelry & Metalwork",
  // Add your new craft type here
]
\`\`\`

#### Adding New Regions
Update regions in the same file:
\`\`\`typescript
const regions = [
  "Kutch, Gujarat",
  "Rajasthan",
  // Add your new region here
]
\`\`\`

#### Customizing AI Prompts
Modify the prompts in `app/api/generate-story/route.ts` to adjust AI output style and content.

## 🤝 Contributing

We welcome contributions from developers, designers, and cultural experts!

### How to Contribute

1. **Fork the repository**
2. **Create a feature branch**
   \`\`\`bash
   git checkout -b feature/amazing-feature
   \`\`\`
3. **Make your changes**
4. **Commit your changes**
   \`\`\`bash
   git commit -m 'Add some amazing feature'
   \`\`\`
5. **Push to the branch**
   \`\`\`bash
   git push origin feature/amazing-feature
   \`\`\`
6. **Open a Pull Request**

### Contribution Guidelines

- **Cultural Sensitivity**: Ensure all contributions respect and preserve cultural authenticity
- **Accessibility**: Maintain WCAG compliance in all UI changes
- **Documentation**: Update documentation for any new features
- **Testing**: Test thoroughly across different devices and browsers
- **Code Quality**: Follow TypeScript best practices and existing code style

### Areas for Contribution

- **Language Support**: Add more regional languages and dialects
- **Craft Types**: Expand support for additional traditional crafts
- **AI Prompts**: Improve AI content generation for specific regions/crafts
- **UI/UX**: Enhance user experience and accessibility
- **Performance**: Optimize loading times and responsiveness
- **Integration**: Add support for e-commerce platforms and social media APIs

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Traditional Artisans**: For preserving cultural heritage and inspiring this platform
- **Cultural Consultants**: For ensuring authentic representation
- **Open Source Community**: For the amazing tools and libraries
- **AI Research Community**: For advancing accessible AI technology

## 📞 Support

- **Documentation**: Check this README and inline code comments
- **Issues**: Report bugs and request features via GitHub Issues
- **Discussions**: Join community discussions in GitHub Discussions
- **Email**: Contact us at support@craftai.com

## 🗺️ Roadmap

### Phase 1 (Current)
- ✅ Core AI content generation
- ✅ Multi-language support
- ✅ Responsive design
- ✅ Authentication system

### Phase 2 (Upcoming)
- 🔄 E-commerce platform integration
- 🔄 Social media API connections
- 🔄 Advanced analytics dashboard
- 🔄 Collaborative features for artisan communities

### Phase 3 (Future)
- 📋 Mobile app development
- 📋 Marketplace integration
- 📋 Advanced AI features (image generation, voice input)
- 📋 International expansion

---
** Our website Link : [https://craftecho-ai.vercel.app/](https://craftecho-ai.vercel.app/)**

**Built with ❤️ for artisans worldwide**

*Preserving heritage, embracing innovation*
