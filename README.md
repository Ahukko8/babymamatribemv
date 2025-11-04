# Babymamatribemv - Baby Items Store

A modern, responsive e-commerce website for selling baby items, built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 🏠 **Home Page** - Welcoming landing page with hero section and features
- 🛍️ **Products Page** - Browse products with category filtering
- 📖 **About Us** - Learn about the company story and values
- 📧 **Contact Us** - Get in touch with contact form and information
- ✨ **Modern Animations** - Smooth animations using Framer Motion
- 📱 **Mobile Responsive** - Fully responsive design for all devices
- 🎨 **Beautiful UI** - Theme matched to the logo colors

## Tech Stack

- **Next.js 14** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library

## Getting Started

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
├── app/
│   ├── about/          # About Us page
│   ├── contact/        # Contact Us page
│   ├── products/       # Products page
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Home page
├── components/
│   ├── Navbar.tsx      # Navigation component
│   └── Footer.tsx      # Footer component
├── public/
│   └── logo.jpg        # Company logo
└── ...
```

## Color Theme

The UI theme is based on the logo colors:
- **Primary Brown**: `#8B6F47` - Main brand color
- **Dark Brown**: `#5C4228` - Text and accents
- **Light Beige**: `#E8DCC5` - Backgrounds
- **Coral**: `#D4A99C` - Accent color
- **Green**: `#C4D5B8` - Secondary accent

## Build

To create a production build:

```bash
npm run build
```

To start the production server:

```bash
npm start
```
