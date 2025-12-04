**FotoStoriz**

Brief, polished landing site and storytelling UI built with modern front-end tools. FotoStoriz is a small product/marketing site focused on stories, pricing, and feature pages — implemented with a component-driven React + Vite stack and Tailwind CSS.

**Quick summary**
- **Purpose:** Marketing/landing pages for a photo/story product.
- **Contents:** Home, Features, Pricing, Stories, Story detail pages, reusable UI components.

**Features**
- **Multi-page layout:** Home, Features, Pricing, Stories, single Story view.
- **Reusable components:** Buttons, Hero sections, Feature blocks, Story cards, Pricing plans, FAQ, Header/Footer, Form components.
- **Routing:** Client-side routing with `react-router-dom`.
- **Responsive design:** Mobile-first layout with Tailwind CSS utilities and responsive components.
- **Accessibility-minded markup:** Semantic HTML, keyboard-friendly navigation, focus states, and considerate ARIA where appropriate.
- **Modern tooling:** Fast dev server and optimized builds with Vite.

**Technologies & Libraries**
- **Framework:** `react` (v19)
- **Bundler / Dev server:** `vite` (with `@vitejs/plugin-react`)
- **Styling:** `tailwindcss` (v4) and utilities like `clsx`, `class-variance-authority`, and `tailwind-merge` for class composition
- **Routing:** `react-router-dom`
- **Linting:** `eslint` with React plugins (`@eslint/js`, `eslint-plugin-react-hooks`, `eslint-plugin-react-refresh`)
- **Dev tooling:** Type definitions (`@types/react`, `@types/react-dom`) and Vite React plugin

**Accessibility (A11y)**
- **Semantic HTML:** Components use proper heading levels, landmarks (header/footer/main), lists, and buttons.
- **Keyboard navigation:** Interactive elements are keyboard focusable; dropdowns/menus should be reachable and operable with keyboard controls.
- **Visible focus states:** Focus outlines are preserved for keyboard users and not removed visually.
- **Alt text:** Images in `src/assets` and story cards include alt text where applicable; add descriptive alt text for content images.
- **Contrast & readability:** Text colors and background combinations follow good contrast practices (verify with an automated checker).

Accessibility notes: run an automated scanner (like axe) and manual keyboard testing to find gaps. Add ARIA attributes only where semantic HTML is insufficient.

**Responsiveness**
- The project uses a mobile-first Tailwind setup. Components include responsive utility classes (sm/md/lg/xl breakpoints) to adapt layout and spacing.
- Hero images, story cards, and grids collapse to single-column layouts on small screens and expand to multi-column layouts on larger screens.

**Project Structure (important files)**
- `index.html` — Vite entry HTML
- `src/main.jsx` — app bootstrap
- `src/App.jsx` — top-level routes and layout
- `src/pages/` — `Home.jsx`, `Features.jsx`, `Pricing.jsx`, `Stories.jsx`, `Story.jsx`
- `src/components/` — small, reusable components (e.g., `Header.jsx`, `HeroComponent.jsx`, `StoryCard.jsx`, `PricingPlans.jsx`)
- `src/utils/` — helpers like `cn.js` (className utility) and `stories.js` (sample story data)
- `package.json` — scripts and dependencies

**Getting Started (Development)**

Requirements:
- Node.js (recommended LTS >= 18)
- npm (or use `pnpm`/`yarn` if preferred — adjust commands accordingly)

Install dependencies and run the development server:

```powershell
# install dependencies
npm install

# start dev server (Vite)
npm run dev
```

Available scripts (from `package.json`):
- `npm run dev` — start Vite dev server with HMR
- `npm run build` — produce optimized production build
- `npm run preview` — locally preview the production build
- `npm run lint` — run ESLint across the codebase

Build & preview production bundle:

```powershell
npm run build
npm run preview
```

**Usage / How the app is organized**
- Routes are defined in `src/App.jsx` and map to the pages in `src/pages/`.
- Components are intentionally small and composable — to add a new section, create a component under `src/components/` and import it into the appropriate page.

**Styling conventions**
- Tailwind CSS is used for layout and utilities.
- Use `clsx` + `class-variance-authority` patterns for conditionally composed class names and variants.
- `tailwind-merge` is used to safely merge utility class strings when needed.

**Screenshots**
- ***Home Page***
![foto-storiz vercel app_(Nest Hub Max)](https://github.com/user-attachments/assets/35e5ff26-75ab-4636-a3b8-c6555207b659)

- ***Features Page***
![foto-storiz vercel app_(Nest Hub Max) (3)](https://github.com/user-attachments/assets/45930d3e-13a2-49e4-b576-55d636f12d4b)

- ***Stories Page***
![foto-storiz vercel app_(Nest Hub Max) (2)](https://github.com/user-attachments/assets/71c36072-4a92-4761-9bac-f16c9b1fe213)

- ***Story Page***
![foto-storiz vercel app_story_jonh-prickston-cityscapes(Nest Hub Max)](https://github.com/user-attachments/assets/26119545-7fd5-4463-9dc5-8ea682894f78)

- ***Pricing Page***
![foto-storiz vercel app_(Nest Hub Max) (4)](https://github.com/user-attachments/assets/33397284-b5c6-4d36-a896-ab3c667bcca7)
