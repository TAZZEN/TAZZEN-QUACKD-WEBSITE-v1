# QUACKD Website

The public website for the **QUACKD community meme coin**, inspired by the open-source robotics project [`quackd`](https://github.com/rokbenko/quackd).

This repository contains a static React application. It is responsible for the public presentation layer: project narrative, token information, community links, and an interactive demonstration of the robotics concept. It is not the source code of the original robotics runtime and does not operate a physical robot.

## Production site

<https://tazzen.github.io/TAZZEN-QUACKD-WEBSITE-v1/>

## What this repository contains

The site combines two related but distinct parts of the QUACKD identity:

- **The community layer:** the website supports the QUACKD community meme coin and publishes its public token reference.
- **The robotics story:** the site explains the idea behind `quackd`, an open-source project that connects natural-language goals with capabilities already provided by a robot's controllers.

The distinction is intentional. This repository presents the community and its concept; [`rokbenko/quackd`](https://github.com/rokbenko/quackd) is the technical source of truth for the robotics software.

## Token reference

| Field | Value |
|---|---|
| Name | QUACKD |
| Symbol | `$QUACKD` |
| Network | Solana |
| Contract address | `GMogeMjrWFaEceasCPathoibjAh8qwhTC3Chw4Bfpump` |

The address is included as a public project reference. Verify the address independently before performing any on-chain transaction and conduct your own research.

## Technical relationship to `quackd`

The original `quackd` project is an open-source robotics system built around a clear separation of responsibilities:

| Layer | Responsibility |
|---|---|
| Robot controllers | Execute body-specific skills such as balance, walking, grasping, or driving |
| Steering loop | Convert perception and state into an approach or movement plan |
| Deliberation | Select the next high-level action from a natural-language goal |

The original project uses robot adapters and manifests to describe available sensors, capabilities, verbs, limits, and safety authority. It also provides simulation and provider integrations for development and testing.

This website references that model for communication purposes. It does not ship the original Python package, robot adapters, simulator, provider integrations, or safety executor.

## Repository layout

```text
.
├── .github/workflows/deploy-pages.yml  # CI build and GitHub Pages deployment
├── public/
│   ├── assets/                         # Static images served by the site
│   ├── favicon.svg                     # Browser icon
│   └── robots.txt                      # Crawler instructions
├── src/
│   ├── components/
│   │   ├── ui/                         # Reusable Radix-based UI primitives
│   │   └── error-boundary.tsx          # React render-error fallback
│   ├── hooks/                          # Reusable React hooks
│   ├── lib/utils.ts                    # Shared class-name utility
│   ├── pages/not-found.tsx             # Not-found view
│   ├── App.tsx                         # Page composition and interactions
│   ├── index.css                       # Global styles and responsive design
│   └── main.tsx                        # React application entry point
├── .env.example                        # Local environment variable reference
├── .gitignore                          # Ignored local and generated files
├── index.html                          # HTML shell and document metadata
├── package.json                         # Scripts and dependency declarations
├── pnpm-lock.yaml                       # Reproducible dependency resolution
├── pnpm-workspace.yaml                  # pnpm workspace and dependency policy
├── tsconfig.json                        # Strict TypeScript configuration
└── vite.config.ts                       # Vite, Tailwind, and path configuration
```

### Key files

| File | Purpose |
|---|---|
| `src/App.tsx` | Defines the page sections, navigation, mission demo, token presentation, contract address, and external links. |
| `src/index.css` | Defines the visual system, layout primitives, responsive behavior, animations, and component states. |
| `src/main.tsx` | Mounts React and wraps the application with the error boundary. |
| `vite.config.ts` | Configures Vite, Tailwind, the `@` source alias, and the deployment base path. |
| `tsconfig.json` | Enables strict TypeScript checks and maps `@/*` to `src/*`. |
| `pnpm-workspace.yaml` | Defines the workspace, catalog versions, build permissions, and dependency overrides. |
| `.github/workflows/deploy-pages.yml` | Installs dependencies, runs the production build, uploads `dist/`, and deploys GitHub Pages. |

## Local development

### Prerequisites

- Node.js `22.13.0` or later
- pnpm `11.24.0`

Install the project dependencies:

```bash
pnpm install
```

Start the development server:

```bash
pnpm dev
```

The local site is available at <http://localhost:5173/>.

Run the type checker:

```bash
pnpm run typecheck
```

Create a production build:

```bash
pnpm run build
```

The generated files are written to `dist/`. Preview that build locally with:

```bash
pnpm run serve
```

## Deployment

Deployment is handled by GitHub Actions whenever a commit reaches `main`. The workflow:

1. Checks out the repository.
2. Installs Node.js `22.13.0` and pnpm `11.24.0`.
3. Installs from the committed lockfile.
4. Builds the site with `BASE_PATH=/TAZZEN-QUACKD-WEBSITE-v1/`.
5. Uploads `dist/` as a Pages artifact.
6. Publishes the artifact to the `github-pages` environment.

The `BASE_PATH` is required because the site is hosted as a GitHub Pages project site rather than at the domain root. Removing it will cause asset paths to resolve incorrectly and can result in a blank page.

To deploy a change:

```bash
git checkout main
git pull --ff-only
# make and test changes
pnpm run typecheck
pnpm run build
git add .
git commit -m "Describe the change"
git push origin main
```

Monitor deployments from the [Actions page](https://github.com/TAZZEN/TAZZEN-QUACKD-WEBSITE-v1/actions).

## Content and source policy

Public copy should be specific, verifiable, and consistent with the project's actual scope.

- Describe this repository as the website and community presentation layer.
- Describe [`rokbenko/quackd`](https://github.com/rokbenko/quackd) as the original robotics software project.
- Do not present this site as the robotics runtime or claim that it controls a physical robot.
- Keep the published contract address synchronized across the website and README.
- Treat the original repository as the source of truth for robotics architecture, supported integrations, installation requirements, limitations, safety, and roadmap.
- Use the founder's public profile for public updates, not as a substitute for technical documentation.
- Do not commit private keys, seed phrases, API keys, passwords, or local `.env` files.

The website supports and presents the QUACKD community meme coin. That support is separate from any claim that the original robotics author endorses the token; the two projects should be described accurately and independently.

## Contributing

Keep pull requests focused and easy to review. Before opening a pull request:

1. Run `pnpm install` if dependency metadata changed.
2. Run `pnpm run typecheck`.
3. Run `pnpm run build`.
4. Check the page at desktop and mobile widths.
5. Review links, token details, metadata, and deployment paths.
6. Do not include secrets or generated directories such as `node_modules/` and `dist/`.

Use commit messages that describe the outcome, for example `Clarify token information` or `Improve mobile navigation`.

## Security

If a secret is committed accidentally, revoke it immediately, remove it from the working tree, and review the Git history. Removing a secret from the latest commit does not invalidate an exposed credential.

For security reports, do not open a public issue containing credentials or exploit details. Contact the repository owner privately through the available GitHub account channels.

## Licensing and attribution

This website is a separate project from the original `quackd` repository. Confirm the intended license for this repository before distributing it as an open-source package. The original project's license and attribution requirements are defined in its own repository and do not automatically transfer to this site.

## References

[1]: https://github.com/rokbenko/quackd "Original quackd robotics repository"
[2]: https://github.com/rokbenko/quackd/blob/main/docs/architecture.md "quackd architecture documentation"
[3]: https://github.com/rokbenko/quackd/blob/main/docs/adr/0017-robot-adapters-and-manifest.md "quackd robot adapter and manifest decision"
[4]: https://x.com/rokbenko "Rok Benko public profile"
[5]: https://tazzen.github.io/TAZZEN-QUACKD-WEBSITE-v1/ "QUACKD production website"
[6]: https://github.com/TAZZEN/TAZZEN-QUACKD-WEBSITE-v1/actions "QUACKD GitHub Actions workflows"

Documentation reviewed: 2026-09-06.
