# Next.js Project

A modern web application built with Next.js, React, and TypeScript for a job project. It contains three different sections: first, a dashboard; second, a list of games; and third, a select component.

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm package manager

### Installation

1. Clone the repository:

```bash
git clone https://github.com/Sarah-Mn/bs-project.git
cd bs-project
```

2. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Project Folder Structure

```
├── public/                 # Static files (images, fonts, etc.)
│   ├── images/            # Image assets
│   ├── fonts/             # Font files
│   └── favicon.ico        # Favicon
│
├── src/                   # Source code directory
│   ├── pages/              # Page Router
│   │   ├── _app.tsx
│   │   ├── _document.tsx
│   │   ├── index.tsx      # Home page
│   │   ├── api/          # API routes
│   │   │   └── [...]
│   │   └── [...]/        # Other pages/routes
│   │         ├── index.tsx
│   │
│   ├── styles/        # CSS styles
│   │   └── globals.css   # Global styles
│   │
│   ├── layout/        # Layout components
│   │   └── dashboard/       # Dashboard Layout components (header, footer, etc.)
│   │   │   └── [...]
│   │   │
│   │   └── publicLayout/       # Public Layout components (header, footer, etc.)
│   │       └── [...]
│   │
│   ├── components/        # Reusable React components
│   │   ├── ui/           # UI components (buttons, inputs, etc.)
│   │       └── [...]
│   │
│   ├── features/        # Feature-specific components
│   │   └── [...]
│   │
│   └── services/              # Utility functions and libraries
│       └── api/        # API client functions
│       │    └── api.ts  #Global Axios api service
│       └── [...]
│
│
├── .env.local            # Environment variables (local)
├── .env.example          # Example environment variables
├── .gitignore            # Git ignore file
├── next.config.js        # Next.js configuration
├── package.json          # Project dependencies and scripts
├── tsconfig.json         # TypeScript configuration
├── postcss.config.js     # PostCSS configuration
└── README.md             # Project documentation
```

## Folder Descriptions

### `/public`

Static assets that are served directly. Files in this directory can be referenced from the root URL (`/`).

### `/src/pages`

The Page Router directory. Each folder represents a route segment, and `index.tsx` files define the UI for that route.

- **index.tsx**: Unique UI for a route and makes routes publicly accessible

### `/src/components`

Reusable React components organized by type or feature. Components are modular and can be imported across the application.

### `/src/types`

TypeScript type definitions and interfaces for type safety across the application.

## Available Scripts

- `npm run dev` - Starts the development server
- `npm run build` - Creates an optimized production build
- `npm run start` - Starts the production server
- `npm run lint` - Runs ESLint to check code quality
- `npm run type-check` - Runs TypeScript compiler to check types

## Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
NEXT_PUBLIC_API_BASE_URL=https://dummyjson.com
NEXT_PUBLIC_API_TIMEOUT=10000
```

## Tech Stack

- **Framework**: Next.js 14+
- **Language**: TypeScript
- **Styling**: Tailwind CSS / CSS Modules
- **State Management**: React Context / Local State
- **API**: REST
- **Deployment**: Vercel

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)

## License

This project is licensed under the MIT License.
