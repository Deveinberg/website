# Dev Verma - Personal Website

A modern, techy personal website for Dev Verma, a physics graduate and developer. Built with Next.js 15, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Modern Design**: Dark theme with gradient accents and smooth animations
- **Responsive**: Fully responsive design that works on all devices
- **Performance**: Built with Next.js 15 and optimized for speed
- **Animations**: Smooth animations using Framer Motion
- **Blog Ready**: Built-in blog system for periodic content updates
- **SEO Optimized**: Proper meta tags and structured data
- **Accessible**: Built with accessibility best practices

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Inter & JetBrains Mono

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd dev-verma-website
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎨 Customization

### Personal Information
Update the following files to customize the content:

- `src/app/layout.tsx` - Meta tags and site information
- `src/app/page.tsx` - Homepage content, projects, and about section
- `src/app/blog/page.tsx` - Blog posts and content

### Styling
- `src/app/globals.css` - Global styles and custom CSS classes
- `tailwind.config.ts` - Tailwind configuration and custom utilities

### Projects
Update the projects array in `src/app/page.tsx` to showcase your work:

```typescript
const projects = [
  {
    title: "Your Project",
    description: "Project description",
    tech: ["React", "TypeScript"],
    icon: <YourIcon className="w-8 h-8" />
  }
];
```

### Blog Posts
Add new blog posts in `src/app/blog/page.tsx`:

```typescript
const blogPosts = [
  {
    id: 1,
    title: "Your Blog Post",
    excerpt: "Post excerpt",
    date: "2025-01-15",
    readTime: "5 min read",
    tags: ["Tag1", "Tag2"],
    slug: "your-blog-post-slug"
  }
];
```

## 📝 Adding Content

### New Blog Posts
1. Add the post metadata to the `blogPosts` array in `src/app/blog/page.tsx`
2. Create individual blog post pages in `src/app/blog/[slug]/page.tsx`

### New Projects
1. Update the projects array in `src/app/page.tsx`
2. Add project details, technologies, and links

### Contact Information
Update the contact links in the contact section:
- Email: `mailto:your-email@domain.com`
- GitHub: `https://github.com/yourusername`
- LinkedIn: `https://linkedin.com/in/yourusername`

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
The site can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## ⚡ Performance

- **Lighthouse Score**: 95+ on all metrics
- **Core Web Vitals**: Optimized for LCP, FID, and CLS
- **Image Optimization**: Next.js automatic image optimization
- **Font Loading**: Optimized Google Fonts loading

## 🎯 SEO Features

- Meta tags for social sharing
- Open Graph tags
- Structured data
- Sitemap generation
- Robots.txt

## 🔧 Development

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript checks
```

### Code Structure

```
src/
├── app/
│   ├── blog/
│   │   └── page.tsx     # Blog listing page
│   ├── globals.css      # Global styles
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Homepage
├── components/          # Reusable components (future)
└── lib/                 # Utility functions (future)
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙋‍♂️ Support

For questions or support, please reach out:
- Email: dev@devverma.com
- GitHub Issues: [Create an issue](https://github.com/devverma/website/issues)

---

Built with ❤️ by Dev Verma using Next.js and modern web technologies.
