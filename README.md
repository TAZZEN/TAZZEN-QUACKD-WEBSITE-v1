# QUACKD Website

A polished static landing page for **QUACKD**, a community-facing project and supporter of the QUACKD Solana meme coin. The project is inspired by the open-source robotics project [`quackd`](https://github.com/rokbenko/quackd), connecting a small robot story, a language-model-driven planning layer, and the wider community around the idea.

> **Project scope:** This repository is the website for the QUACKD community meme coin and its robotics-inspired culture. It is not the original `quackd` robotics runtime, it does not control a robot, and it does not provide an AI agent or blockchain contract implementation.

## QUACKD Community Meme Coin

This project explicitly supports and promotes **$QUACKD**, a community meme coin on Solana. The token is part of the identity and community layer represented by this website.

| Token detail | Value |
|---|---|
| Name | QUACKD |
| Symbol | `$QUACKD` |
| Network | Solana |
| Contract address | `GMogeMjrWFaEceasCPathoibjAh8qwhTC3Chw4Bfpump` |

The contract address above is displayed publicly on the website as the community-provided token reference. Always verify the address independently before taking any on-chain action, and do your own research before participating.

## Live Website

The deployed website is available at:

**<https://tazzen.github.io/TAZZEN-QUACKD-WEBSITE-v1/>**

Every push to `main` triggers the GitHub Pages workflow in [`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml).

## Project Purpose

The website has four purposes:

1. **Explain the concept.** It presents the idea of giving a small robot a higher-level interface for natural-language goals.
2. **Connect the story to the source project.** It links visitors to the original open-source `quackd` repository and distinguishes the original engineering project from this community-facing website.
3. **Provide a clear visual identity.** It uses a robot-duck visual system, responsive sections, motion, and interactive mission examples.
4. **Support the community meme coin.** It gives $QUACKD a clear identity, displays its Solana contract address, and provides a public home for the flock.

The page uses illustrative language such as “Give the Meme Duck a Brain.” That language is a communication device, not a claim that this repository implements a production robot brain.

## Relationship to the Original `quackd` Project

The original [`rokbenko/quackd`](https://github.com/rokbenko/quackd) project describes itself as an open-source bridge between **human-level goals** and a robot's existing low-level capabilities. Its central design separates three responsibilities:

| Layer | Responsibility | Example |
|---|---|---|
| Robot reflexes | Execute balance, walking, grasping, driving, or other body-specific skills | A robot controller maintains balance or performs a learned motion |
| Steering | Turn perception and state into an approach or movement plan | Navigate toward a detected ball |
| Deliberation | Select the next high-level action from a natural-language goal | Interpret “find the ball and kick it” |

The original project uses robot adapters and manifests to describe the capabilities, sensors, verbs, limits, and safety authority of a connected body. It supports simulation and multiple integration paths, while keeping the robot's own controllers responsible for low-level movement.

This website borrows the **conceptual vocabulary** of that architecture for storytelling. It does not include the Python package, robot adapters, simulator, provider integrations, or safety executor from the original project. Visitors who want to understand or run the actual robotics system should use the original repository and its documentation.

## Repository Structure

```text
TAZZEN-QUACKD-WEBSITE-v1/
├── .github/
│   └── workflows/
│       └── deploy-pages.yml       # Automated GitHub Pages build and deployment
├── public/
│   ├── assets/                    # Static visual assets used by the page
│   ├── favicon.svg                # Browser tab icon
│   └── robots.txt                 # Search-engine crawling instructions
├── src/
│   ├── components/
│   │   ├── ui/                    # Reusable Radix-based UI primitives
│   │   └── error-boundary.tsx     # Prevents uncaught React errors from breaking the page silently
│   ├── hooks/
│   │   ├── use-mobile.tsx         # Mobile viewport behavior
│   │   └── use-toast.ts           # Toast state and actions
│   ├── lib/
│   │   └── utils.ts               # Shared utility helpers, including class merging
│   ├── pages/
│   │   └── not-found.tsx          # Fallback page component
│   ├── App.tsx                    # Main page composition and interactive sections
│   ├── index.css                  # Global styles, theme, responsive layout, and animations
│   └── main.tsx                   # React entry point and error-boundary mounting
├── .env.example                   # Documented local environment variables
├── .gitignore                     # Excludes dependencies, builds, logs, and secrets
├── index.html                     # Vite HTML shell and metadata
├── package.json                   # Scripts and dependencies
├── pnpm-lock.yaml                 # Reproducible dependency resolution
├── pnpm-workspace.yaml            # pnpm catalog, workspace, and dependency overrides
├── tsconfig.json                  # TypeScript compiler settings and @ alias
└── vite.config.ts                 # Vite, Tailwind, base path, and @ alias configuration
```

### File-by-file responsibilities

| File or directory | Role | Safe to edit? |
|---|---|---:|
| `src/App.tsx` | Page content, sections, navigation, buttons, mission interactions, external links, and displayed contract text | Yes, after reviewing the intended public claims |
| `src/index.css` | Brand colors, typography, grids, cards, animations, responsive behavior, and visual states | Yes; test mobile and desktop after changes |
| `src/main.tsx` | Application bootstrap and error boundary | Usually only for application-level concerns |
| `src/components/ui/` | Generic interface primitives generated around Radix UI patterns | Yes, but keep components reusable and accessible |
| `src/components/error-boundary.tsx` | Catches render errors and provides a visible fallback | Yes, but preserve useful error reporting |
| `src/hooks/` | Reusable React state and viewport behavior | Yes, when adding reusable interaction logic |
| `src/lib/utils.ts` | Shared class-name and utility functions | Yes, but keep it dependency-light |
| `public/assets/` | Images served without bundling | Yes; optimize large files and use descriptive names |
| `public/favicon.svg` | Favicon | Replace only with a valid SVG |
| `public/robots.txt` | Crawler policy | Review before changing indexing behavior |
| `index.html` | Document metadata and Vite entry shell | Update title, description, social metadata, and asset references here |
| `vite.config.ts` | Build configuration and GitHub Pages path handling | Preserve the `BASE_PATH` and `@` alias behavior |
| `tsconfig.json` | TypeScript strictness and source alias resolution | Keep `strict` enabled unless there is a documented reason |
| `pnpm-workspace.yaml` | Dependency catalog and reproducible overrides | Change only when dependency compatibility is understood |
| `.github/workflows/deploy-pages.yml` | Installs dependencies, builds `dist/`, and publishes GitHub Pages | Test workflow changes carefully |

## Technology Stack

| Technology | Use in this repository |
|---|---|
| React | Component-based page rendering |
| TypeScript | Strict type checking |
| Vite | Development server and production bundling |
| Tailwind CSS | Utility styling through the Vite plugin |
| Framer Motion | Motion and reveal interactions |
| Radix UI | Accessible primitive components |
| Lucide React | Interface icons |
| pnpm | Dependency installation and lockfile management |
| GitHub Actions | Continuous build and deployment |
| GitHub Pages | Static hosting |

The exact resolved versions are recorded in `pnpm-lock.yaml`. Use the lockfile rather than manually upgrading individual packages during routine setup.

## Local Development

### Requirements

- Node.js `22.13.0` or newer is recommended because the deployment workflow uses Node 22.
- pnpm `11.24.0` is the version used by the deployment workflow.

### Install

```bash
pnpm install
```

### Start the development server

```bash
pnpm dev
```

Open <http://localhost:5173/>.

### Type check

```bash
pnpm run typecheck
```

### Build for production

```bash
pnpm run build
```

The optimized static site is written to `dist/`.

### Preview the production build

```bash
pnpm run serve
```

## GitHub Pages Deployment

The deployment workflow performs the following steps:

1. Checks out the `main` branch.
2. Installs pnpm `11.24.0` and Node.js `22.13.0`.
3. Installs dependencies from `pnpm-lock.yaml`.
4. Builds the application with `BASE_PATH=/TAZZEN-QUACKD-WEBSITE-v1/`.
5. Uploads the `dist/` directory as a Pages artifact.
6. Deploys the artifact to the `github-pages` environment.

The `BASE_PATH` is essential because this is a project site hosted below the `tazzen.github.io` domain. Without it, JavaScript, CSS, and image paths can point to the domain root and produce a blank page.

## Content and Claim Governance

Because this website references robotics, artificial intelligence, and a token community, every public claim should be reviewed before it is published.

- Do not claim that the website controls a physical robot unless a real integration exists and has been tested.
- State clearly that this website supports the QUACKD community meme coin while keeping its relationship to the original robotics repository transparent.
- Do not publish a wallet private key, seed phrase, API key, or other secret.
- Treat the displayed contract address as public information, verify it before changing the page, and keep it consistent across the website and documentation.
- Link technical statements to the original project's documentation rather than presenting this landing page as the source of truth.
- Mark roadmap items as proposals unless they are already implemented.
- Check the original repository and the founder's public profile before describing a new update as current.

## Original Project and Founder References

The source project is maintained publicly at [`rokbenko/quackd`](https://github.com/rokbenko/quackd). Its README contains the authoritative explanation of the robotics architecture, supported providers, simulator, installation requirements, limitations, safety guidance, roadmap, and contribution process.

The founder's public profile is [`@rokbenko`](https://x.com/rokbenko). It is useful for following public build-in-public updates, but social posts should not replace the source repository for technical facts.

## License and Attribution

This website is a separate presentation project. Before distributing it as an open-source package, add the intended license and confirm that all visual assets and copied text are licensed for redistribution.

The original `quackd` project's license and attribution requirements are defined in its own repository and apply to that project, not automatically to this website. Supporting the QUACKD community meme coin does not by itself claim that the original robotics author endorses the token; the website should describe that relationship accurately.

## References

[1]: https://github.com/rokbenko/quackd "Original quackd open-source robotics project"
[2]: https://github.com/rokbenko/quackd/blob/main/docs/architecture.md "Original quackd architecture documentation"
[3]: https://github.com/rokbenko/quackd/blob/main/docs/adr/0017-robot-adapters-and-manifest.md "Original quackd robot adapters and manifest decision"
[4]: https://x.com/rokbenko "Rok Benko public profile"
[5]: https://tazzen.github.io/TAZZEN-QUACKD-WEBSITE-v1/ "Published QUACKD website"
[6]: https://github.com/TAZZEN/TAZZEN-QUACKD-WEBSITE-v1/actions "QUACKD website deployment workflows"

*Documentation reviewed on 2026-09-05.*
