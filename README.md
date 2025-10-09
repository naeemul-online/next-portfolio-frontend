# 🚀 Naeemul Islam - Full Stack Developer Portfolio

A modern, professional portfolio and blog system built with Next.js 14, featuring stunning animations, dark mode support, and a comprehensive blog management system.

![Next.js](https://img.shields.io/badge/Next.js-14-black)
![React](https://img.shields.io/badge/React-18-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38bdf8)

## ✨ LIVE

- Server: https://next-portfolio-backend-tau.vercel.app
- Client:  https://next-portfolio-frontend-seven.vercel.app

## ✨ Features

### 🎨 **Modern Design**
- **Stunning Animations**: Smooth transitions, hover effects, and micro-interactions throughout
- **Responsive Design**: Mobile-first approach, optimized for all devices
- **Glass Morphism**: Modern UI with backdrop blur effects
- **Gradient Accents**: Professional color schemes with animated gradients

### 📝 **Blog System**
- **Blog Cards**: Professional cards with hover animations, tags, and metadata
- **Blog Details**: Full-featured article pages with hero sections and author cards
- **Reading Time**: Automatic calculation of estimated reading time
- **View Counter**: Track article popularity
- **Tag System**: Organize content with categorized tags

### 💼 **Portfolio Sections**

#### Hero Section
- 3D parallax effects with mouse tracking
- Animated background with floating code symbols
- Status badge showing availability
- Tech stack showcase
- Social media links with glass morphism
- Smooth scroll indicator

#### Projects Section
- Grid layout with staggered animations
- Project cards with image zoom effects
- Tech stack badges with animations
- Live demo and GitHub links
- Hover effects with gradient glows

#### Contact Section
- **Form Validation**: React Hook Form with Zod schema
- **Shadcn UI Components**: Professional form inputs
- **Toast Notifications**: Success/error feedback with Sonner
- **Contact Information**: Email, location, and social links
- **Privacy Notice**: GDPR-compliant messaging

#### Navigation
- **Smart Navbar**: Scroll-based blur and shadow effects
- **Active States**: Visual indicators for current route
- **Mobile Menu**: Animated sheet with quick links
- **Logo Glow**: Subtle hover effects
- **Gradient Accent**: Bottom border on scroll

#### Footer
- **Multi-column Layout**: Brand, links, resources, and social
- **Scroll to Top**: Floating action button
- **Animated Elements**: Pulse effects and hover states
- **Background Grid**: Subtle texture patterns
- **Copyright Notice**: Dynamic year display

## 🛠️ Tech Stack

### Core Technologies
- **Next.js 14**: React framework with App Router
- **React 18**: UI library with hooks
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework

### UI Components
- **Shadcn/UI**: High-quality React components
- **Lucide React**: Beautiful icon library
- **Radix UI**: Accessible component primitives

### Form & Validation
- **React Hook Form**: Performant form management
- **Zod**: TypeScript-first schema validation
- **Sonner**: Toast notifications

### Animation & Effects
- **Framer Motion**: Advanced animations (optional)
- **CSS Transforms**: Hardware-accelerated animations
- **Intersection Observer**: Scroll-based animations

### Authentication
- **NextAuth.js**: Authentication solution
- **Session Management**: Secure user sessions

### Database & Storage
- **MongoDB**: NoSQL database
- **Express**: Backend API (if applicable)

## 📦 Installation

### Prerequisites
- Node.js 18+ and npm/yarn/pnpm
- MongoDB instance (local or cloud)

### Setup

1. **Clone the repository**
```bash
git clone https://github.com/naeemul-online/portfolio.git
cd portfolio
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. **Environment Variables**

Create a `.env.local` file in the root directory:

```env
# NextAuth
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_SECRET=your-secret-key

# Database
MONGODB_URI=your-mongodb-connection-string

# OAuth Providers (if applicable)
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
```

4. **Run the development server**
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

5. **Open your browser**
Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
├── app/
│   ├── (main)/
│   │   ├── page.tsx              # Home page
│   │   ├── blogs/
│   │   │   ├── page.tsx          # Blog listing
│   │   │   └── [id]/
│   │   │       └── page.tsx      # Blog details
│   │   └── dashboard/
│   │       └── page.tsx          # Admin dashboard
│   ├── auth/
│   │   └── login/
│   │       └── page.tsx          # Login page
│   ├── layout.tsx                # Root layout
│   └── globals.css               # Global styles
├── components/
│   ├── ui/
│   │   ├── BlogCard.tsx          # Blog card component
│   │   ├── BlogDetailsCard.tsx   # Blog details component
│   │   ├── ProjectCard.tsx       # Project card component
│   │   ├── button.tsx            # Shadcn button
│   │   ├── input.tsx             # Shadcn input
│   │   ├── form.tsx              # Shadcn form
│   │   └── ...                   # Other UI components
│   ├── sections/
│   │   ├── Hero.tsx              # Hero section
│   │   ├── Projects.tsx          # Projects section
│   │   ├── ContactMe.tsx         # Contact section
│   │   └── ...
│   ├── layout/
│   │   ├── Navbar.tsx            # Navigation bar
│   │   ├── Footer.tsx            # Footer
│   │   ├── nav-menu.tsx          # Nav menu component
│   │   └── navigation-sheet.tsx  # Mobile menu
│   └── ...
├── hooks/
│   └── useInView.tsx             # Intersection observer hook
├── lib/
│   └── utils.ts                  # Utility functions
├── public/
│   └── ...                       # Static assets
└── package.json
```

## 🎯 Key Components

### BlogCard
Professional blog card with:
- Hover animations and scale effects
- Tag display
- Author verification badge
- View count and reading time
- Gradient accent line

### BlogDetailsCard
Full blog article display with:
- Hero section with gradient
- Featured image
- Staggered animations
- Author card
- Metadata display

### Hero Section
Stunning landing section with:
- 3D parallax effects
- Mouse tracking
- Animated grid pattern
- Floating code symbols
- Status badge

### Projects Section
Portfolio showcase with:
- Responsive grid layout
- Hover effects
- Tech stack badges
- Action buttons
- Staggered animations

### Contact Form
Professional contact section with:
- Form validation
- Toast notifications
- Contact information cards
- Social media links

### Navigation
Smart navbar with:
- Scroll effects
- Active state indicators
- Mobile menu
- Gradient accents

## 🎨 Customization

### Theme Colors

Edit `app/globals.css` to customize colors:

```css
:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --primary: 221.2 83.2% 53.3%;
  --chart-1: 12 76% 61%;
  --chart-2: 173 58% 39%;
  /* ... more variables */
}
```

### Components

All components use Tailwind's core utility classes and are fully customizable. Modify the className props or extend the components as needed.

## 📱 Responsive Design

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

All components are mobile-first and fully responsive.

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project on [Vercel](https://vercel.com)
3. Configure environment variables
4. Deploy

### Other Platforms

The project can be deployed on any platform that supports Next.js:
- Netlify
- Railway
- AWS Amplify
- DigitalOcean App Platform

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Naeemul Islam**
- Email: naeemul.online@gmail.com
- Location: Dhaka, Bangladesh
- GitHub: [@naeemul-online](https://github.com/naeemul-online)
- Portfolio: [Live Demo](https://naeemul-portfolio.netlify.app)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Support

For support, email naeemul.online@gmail.com or open an issue on GitHub.

---

⭐ If you like this project, please give it a star on GitHub!

Made with ❤️ by Naeemul Islam