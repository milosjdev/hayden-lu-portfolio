# Brandon L. Clark - Personal Portfolio Website

A modern, responsive portfolio website built with Next.js 14, TypeScript, and Material-UI (MUI) showcasing Brandon's expertise as a Senior Python Developer.

## Features

- **Modern Design**: Clean, professional design with dark theme and gradient accents
- **Responsive Layout**: Fully responsive design that works on all devices
- **Interactive Animations**: Smooth animations and transitions using Framer Motion
- **Project Showcase**: Detailed project pages with code snippets and technical details
- **Contact Form**: Functional contact form with validation
- **SEO Optimized**: Meta tags and structured data for better search visibility

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **UI Library**: Material-UI (MUI) v5
- **Styling**: Tailwind CSS + MUI theming
- **Animations**: Framer Motion
- **Icons**: Material-UI Icons + Heroicons

## Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── Navigation.tsx      # Main navigation component
│   │   └── Footer.tsx          # Footer component
│   ├── projects/
│   │   ├── page.tsx           # Projects listing page
│   │   └── [id]/
│   │       └── page.tsx       # Individual project detail pages
│   ├── about/
│   │   └── page.tsx           # About page with resume information
│   ├── contact/
│   │   └── page.tsx           # Contact page with form
│   ├── theme/
│   │   └── theme.ts           # MUI theme configuration
│   ├── utils/
│   │   └── imageUtils.ts      # Image utility functions
│   ├── layout.tsx             # Root layout component
│   ├── page.tsx               # Home page
│   └── globals.css            # Global styles
```

## Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```

3. **Open in Browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Pages

### Home Page
- Hero section with personal introduction
- Skills showcase with animated cards
- Featured projects grid
- Call-to-action buttons

### About Page
- Professional summary
- Experience timeline
- Skills with proficiency levels
- Education and military background

### Projects Page
- Searchable and filterable project grid
- Category-based filtering
- Project cards with key metrics
- Links to detailed project pages

### Project Detail Pages
- Image/video carousel
- Detailed project descriptions
- Challenges and solutions
- Code snippets with syntax highlighting
- Technology stack
- Live demo and GitHub links

### Contact Page
- Contact information
- Functional contact form
- Social media links
- Professional availability status

## Customization

### Adding New Projects
1. Add project data to the projects array in `src/app/page.tsx` and `src/app/projects/page.tsx`
2. Create corresponding project detail data in `src/app/projects/[id]/page.tsx`
3. Add project images to the `public/` directory

### Updating Personal Information
1. Update resume information in `src/app/about/page.tsx`
2. Modify contact information in `src/app/contact/page.tsx`
3. Update social media links in `src/app/components/Footer.tsx`

### Styling Customization
1. Modify the theme in `src/app/theme/theme.ts`
2. Update global styles in `src/app/globals.css`
3. Customize component styles using MUI's sx prop

## Deployment

The website is ready for deployment on platforms like:
- Vercel (recommended for Next.js)
- Netlify
- AWS Amplify
- Any static hosting service

### Vercel Deployment
1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically

## Performance Features

- **Image Optimization**: Next.js automatic image optimization
- **Code Splitting**: Automatic code splitting for better performance
- **Lazy Loading**: Images and components load as needed
- **SEO**: Meta tags and structured data
- **Accessibility**: WCAG compliant design

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is for personal portfolio use. All rights reserved.

## Contact

**Brandon L. Clark**
- Email: brandonclarktech@gmail.com
- Phone: +1 (917)-733-7651
- GitHub: [@bleeclark](https://github.com/bleeclark)
- LinkedIn: [brandonclarkswift](https://www.linkedin.com/in/brandonclarkswift)
- Twitter: [@theamazingclark](https://x.com/theamazingclark)
