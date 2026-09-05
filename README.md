# 🦆 QUACKD Landing Page

The official QUACKD landing-page source code.

## Tech stack

- React 19
- TypeScript
- Vite 7
- Tailwind CSS 4
- Framer Motion
- Radix UI
- Lucide React

## Project structure

```text
quackd-landing/
├── public/
│   ├── assets/          # Static image assets
│   ├── favicon.svg
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── ui/          # Reusable UI components
│   │   └── error-boundary.tsx
│   ├── hooks/
│   ├── lib/
│   ├── pages/
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── .env.example
├── .gitignore
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## Requirements

- Node.js 20 or newer
- pnpm 9+ (recommended) or npm

## Install

```bash
pnpm install
```

## Development

```bash
pnpm dev
```

Open `http://localhost:5173/`.

Optional environment variables:

```bash
BASE_PATH=/ PORT=5173 pnpm dev
```

`BASE_PATH` defaults to `/` and `PORT` defaults to `5173`.

## Type checking

```bash
pnpm typecheck
```

## Production build

```bash
pnpm build
```

The optimized site is generated in `dist/`.

## Preview production build

```bash
pnpm serve
```

## Deployment

This is a standard Vite static site. The `dist/` directory can be deployed to any static hosting provider that supports Vite builds.

## Security

- Never commit `.env` files or private credentials.
- Never put wallet private keys, seed phrases, API secrets, or passwords in client-side code.
- Only variables intentionally exposed to the browser should use the `VITE_` prefix.
- Review repository history before making the GitHub repository public if secrets were ever committed previously.

## License

Add the project's intended license here before distributing the source publicly.
