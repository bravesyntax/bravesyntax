# Brave Syntax - Portfolio Website

A modern, fully-responsive portfolio website built with Next.js, React, TypeScript, and Tailwind CSS. Features smooth animations, dark mode support, and a professional contact form.

[![Live Demo](https://img.shields.io/badge/demo-online-green.svg)](https://bravesyntax.vercel.app/)
[![Next.js](https://img.shields.io/badge/Next.js-15.1.3-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)

## 👨‍💻 About

Hi! I'm **Deepak Kumar**, a passionate Frontend Developer with expertise in:

- **Languages**: HTML, CSS, JavaScript, TypeScript
- **Frameworks**: React.js, Next.js, MedusaJS
- **CMS Platforms**: WordPress, Shopify
- **Tools**: Git, VS Code, Figma, Photoshop
- **Databases**: MongoDB, Firebase

## ✨ Features

- **Modern Tech Stack**: Built with Next.js 15, React 19, and TypeScript
- **Responsive Design**: Fully responsive across all devices
- **Dark Mode**: Automatic theme detection with manual toggle
- **Smooth Animations**: Powered by Framer Motion
- **Contact Form**: Integrated Web3Forms for seamless communication
- **SEO Optimized**: Comprehensive meta tags and Open Graph support
- **Type Safety**: Full TypeScript implementation
- **Error Handling**: Custom error boundary for graceful error handling
- **Accessibility**: ARIA labels and semantic HTML throughout
- **Performance**: Optimized images and lazy loading

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/bravesyntax/bravesyntax.git
cd bravesyntax
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Set up environment variables:

Create a `.env.local` file in the root directory:

```env
# Web3Forms API Key for Contact Form
# Get your API key from: https://web3forms.com/
NEXT_PUBLIC_ACCESS_KEY=your_web3forms_access_key_here

# Environment
NODE_ENV=development

# App URL (for production)
NEXT_PUBLIC_APP_URL=https://bravesyntax.vercel.app
```

4. Run the development server:
```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
bravesyntax/
├── app/
│   ├── components/       # React components
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── ErrorBoundary.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── Loader.tsx
│   │   ├── Navbar.tsx
│   │   ├── Portfolio.tsx
│   │   └── Services.tsx
│   ├── hooks/           # Custom React hooks
│   │   ├── useContactForm.ts
│   │   ├── useDarkMode.ts
│   │   └── useScroll.ts
│   ├── globals.css      # Global styles
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Home page
├── assets/              # Images and static assets
│   └── assets.ts        # Asset exports
├── components/          # shadcn/ui components
│   └── ui/
├── lib/                 # Utility functions
│   ├── types.ts         # TypeScript types
│   └── utils.ts         # Utility functions
├── public/              # Public assets
├── .env.example         # Environment variables example
├── .prettierrc          # Prettier configuration
├── next.config.ts       # Next.js configuration
├── tailwind.config.ts   # Tailwind CSS configuration
└── tsconfig.json        # TypeScript configuration
```

## 🛠️ Built With

### Core Technologies
- [Next.js 15](https://nextjs.org/) - React framework
- [React 19](https://react.dev/) - UI library
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling

### UI & Animations
- [Framer Motion](https://www.framer.com/motion/) - Animations
- [shadcn/ui](https://ui.shadcn.com/) - UI components
- [Lucide React](https://lucide.dev/) - Icons
- [React Icons](https://react-icons.github.io/react-icons/) - Additional icons

### Form & Notifications
- [Web3Forms](https://web3forms.com/) - Contact form backend
- [React Hot Toast](https://react-hot-toast.com/) - Toast notifications

## 📝 Available Scripts

```bash
# Development
npm run dev          # Start development server

# Production
npm run build        # Build for production
npm start           # Start production server

# Code Quality
npm run lint        # Run ESLint
npm run format      # Format code with Prettier
```

## 🎨 Customization

### Changing Colors

Edit `tailwind.config.ts` to customize the color palette:

```typescript
theme: {
  extend: {
    colors: {
      // Add your custom colors here
    }
  }
}
```

### Adding Sections

1. Create a new component in `app/components/`
2. Import and add it to `app/page.tsx`
3. Update the navigation links in `app/components/Navbar.tsx`

### Modifying Content

- **Personal Info**: Update `app/components/Header.tsx` and `app/components/About.tsx`
- **Services**: Modify `app/components/Services.tsx`
- **Projects**: Edit `assets/assets.ts` to add/remove projects
- **Contact Info**: Update `app/components/Contact.tsx`

## 🌐 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Visit [Vercel](https://vercel.com)
3. Import your repository
4. Add environment variables
5. Deploy!

### Other Platforms

The project can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- Render
- AWS Amplify

## 📧 Contact Form Setup

1. Sign up at [Web3Forms](https://web3forms.com/)
2. Get your access key
3. Add it to `.env.local` as `NEXT_PUBLIC_ACCESS_KEY`
4. Test the contact form

## 🔧 Configuration

### Environment Variables

See `.env.example` for all required environment variables.

### SEO Configuration

Update `app/layout.tsx` to customize:
- Meta tags
- Open Graph tags
- Twitter Card tags
- Site verification codes

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Deepak Kumar**

- Portfolio: [bravesyntax.vercel.app](https://bravesyntax.vercel.app/)
- LinkedIn: [@deepak-kumar890](https://www.linkedin.com/in/deepak-kumar890/)
- GitHub: [@bravesyntax](https://github.com/bravesyntax)
- Email: bravesyntax@gmail.com

## 🙏 Acknowledgments

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Web3Forms](https://web3forms.com/)

## 📊 Project Status

This project is actively maintained and updated regularly with new features and improvements.

---

Made with ❤️ by [Deepak Kumar](https://github.com/bravesyntax)
