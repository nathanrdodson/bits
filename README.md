# Bits

> A beautifully simple atomic habit tracker. Do less, better.

## Overview

Bits is a minimalist habit tracking application focused on simplicity, performance, and visual appeal. Built on the principle that complexity is the enemy of execution, Bits does one thing exceptionally well: helps you track daily habits with zero friction.

**Philosophy:** Remove everything that doesn't directly serve the core purpose. No analytics dashboards, no social features, no gamification. Just you, your habits, and a satisfying way to mark them complete.

## Core Features

### Essential Functionality
1. **Add Habit** - Create habits with optional frequency targets
2. **Mark Complete** - One-tap completion recording with timestamp
3. **Visualize Progress** - Clean, minimal progress indicators

That's it. Everything else is noise.

## Technology Stack

### Frontend
- **Framework:** SvelteKit 2.x
  - Minimal runtime footprint
  - Fastest framework performance
  - Built-in SSR/SSG capabilities
  - Compile-time reactivity
- **Language:** TypeScript 5.x
  - Type safety and IDE support
  - Self-documenting code
  - Reduced runtime errors
- **Styling:** Tailwind CSS 3.x
  - Utility-first approach
  - Consistent design system
  - Automatic CSS purging
  - Minimal bundle size

### Data & State
- **State Management:** Svelte Stores (built-in)
  - No external dependencies
  - Reactive by default
  - Simple API
- **Data Persistence:** IndexedDB
  - Structured data storage
  - Asynchronous operations
  - Offline-first capability
  - Ample storage capacity

### Build & Development
- **Build Tool:** Vite 5.x
  - Instant HMR
  - Optimized production builds
  - Native ES modules
- **Package Manager:** pnpm
  - Fast, efficient dependency management
  - Strict dependency resolution
- **Testing:** Vitest + Playwright
  - Unit tests: Vitest
  - E2E tests: Playwright

### Deployment
- **Target:** Static Site / PWA
- **Hosting:** Vercel, Netlify, or Cloudflare Pages
- **PWA Features:**
  - Offline support
  - Install to home screen
  - Fast, app-like experience

## Technical Architecture

### Data Model

```typescript
interface Habit {
  id: string;              // UUID v4
  name: string;            // Display name
  frequency?: {
    times: number;         // Target completions
    period: 'day' | 'week' | 'month';
  };
  createdAt: number;       // Unix timestamp
}

interface Completion {
  id: string;              // UUID v4
  habitId: string;         // Foreign key to Habit
  completedAt: number;     // Unix timestamp
}
```

### Project Structure

```
bits/
├── src/
│   ├── lib/
│   │   ├── components/           # Svelte components
│   │   │   ├── HabitList.svelte
│   │   │   ├── HabitCard.svelte
│   │   │   ├── CompletionButton.svelte
│   │   │   └── AddHabitModal.svelte
│   │   ├── stores/              # Svelte stores for state
│   │   │   ├── habits.ts
│   │   │   └── completions.ts
│   │   ├── services/            # Business logic layer
│   │   │   └── db.ts            # IndexedDB wrapper
│   │   ├── utils/               # Helper functions
│   │   │   ├── uuid.ts          # UUID generation
│   │   │   └── date.ts          # Date utilities
│   │   └── types.ts             # TypeScript types
│   ├── routes/                  # SvelteKit routes
│   │   ├── +layout.svelte       # Root layout
│   │   └── +page.svelte         # Main app view
│   ├── app.html                 # HTML template
│   └── app.css                  # Global styles with Tailwind
├── static/                      # Static assets
│   └── manifest.json            # PWA manifest
├── tests/                       # Test files
│   ├── unit/                    # Unit tests
│   └── e2e/                     # E2E tests (Playwright)
├── svelte.config.js
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
├── vite.config.ts
├── playwright.config.ts
└── package.json
```

## Design Principles

1. **Ruthlessly Minimal** - Every feature must justify its existence
2. **Instantly Fast** - Zero loading, zero lag, zero friction
3. **Beautiful by Default** - Good design is not optional
4. **No Guilt** - Focus on progress, not perfection
5. **One Thing Well** - Habit tracking. That's it.

## UI/UX Specifications

### Main View
- **Layout:** Single-page application
- **Habit Display:**
  - Habit name (prominent)
  - Progress indicator (visual, non-numerical)
  - Completion button (large, satisfying interaction)
- **Add Habit:** Floating action button or header action
- **No Navigation:** Everything on one screen

### Add Habit Modal
- Minimal form with two fields:
  - Habit name (text input, required)
  - Frequency (optional select)
- Clean, focused design
- Keyboard shortcuts for power users

### Visual Design
- **Color Palette:** Minimal, monochromatic base with subtle accent
- **Typography:** Clean, readable sans-serif
- **Spacing:** Generous whitespace
- **Animations:** Subtle, purposeful (completion feedback)
- **Responsive:** Mobile-first, works beautifully on all screens

## Implementation Roadmap

### Phase 1: Beautiful MVP (2-3 weeks)
- [x] Technology stack decision
- [ ] Project setup and configuration
- [ ] Data models and IndexedDB service
- [ ] Svelte stores for state management
- [ ] Main habit list view
- [ ] Add habit form/modal
- [ ] Completion button with satisfying interaction
- [ ] Visual progress indicators
- [ ] Responsive design implementation
- [ ] PWA manifest and service worker
- [ ] Initial deployment

### Phase 2: Polish (1 week, if needed)
- [ ] Subtle animations and transitions
- [ ] Edit/delete habit functionality
- [ ] Dark mode support
- [ ] Performance optimization
- [ ] Accessibility audit (WCAG 2.1 AA)
- [ ] Cross-browser testing

**Strategy:** Ship Phase 1, use it in production, validate assumptions before Phase 2.

## What This App Will NOT Have

To maintain focus and simplicity, Bits explicitly excludes:

- ❌ Complex analytics or statistics dashboards
- ❌ Social features or sharing capabilities
- ❌ Gamification, points, or achievement systems
- ❌ Habit categories, tags, or organizational features
- ❌ Cloud sync (initially - local-first approach)
- ❌ Data export/import functionality
- ❌ Push notifications or reminders
- ❌ Settings pages with dozens of configuration options
- ❌ User accounts or authentication
- ❌ Integrations with third-party services

**If you need these features, this is not the right app.** Bits is intentionally minimal.

## Development Setup

### Prerequisites

Ensure you have the following installed:
- **Node.js** >= 18.x (recommend using [nvm](https://github.com/nvm-sh/nvm) or [fnm](https://github.com/Schniz/fnm))
- **pnpm** >= 8.x (install with `npm install -g pnpm`)

### Quick Start

```bash
# Clone repository
git clone https://github.com/nathanrdodson/bits.git
cd bits

# Install dependencies
pnpm install

# Start development server (opens at http://localhost:5173)
pnpm dev

# Open in browser and start developing!
```

### Available Scripts

```bash
# Development
pnpm dev              # Start dev server with hot module replacement
pnpm check            # Run type checking
pnpm check:watch      # Run type checking in watch mode

# Testing
pnpm test             # Run unit tests
pnpm test:watch       # Run unit tests in watch mode
pnpm test:e2e         # Run end-to-end tests

# Code Quality
pnpm format           # Format code with Prettier
pnpm lint             # Check code formatting

# Production
pnpm build            # Build for production (outputs to /build)
pnpm preview          # Preview production build locally
```

### Development Workflow

1. **Make Changes**: Edit files in `src/` - Vite will hot-reload automatically
2. **Type Check**: Run `pnpm check` to catch TypeScript errors
3. **Test**: Write tests in `tests/` and run with `pnpm test`
4. **Format**: Run `pnpm format` before committing
5. **Build**: Run `pnpm build` to test production build

### Key Technologies

- **SvelteKit 2.x**: Framework with static adapter for SPA mode
- **TypeScript 5.x**: Type safety throughout the codebase
- **Tailwind CSS 3.x**: Utility-first styling
- **IndexedDB** (via idb): Local-first data storage
- **Vite 5.x**: Lightning-fast build tool and dev server
- **Vitest**: Unit testing framework
- **Playwright**: End-to-end testing

### Data Storage

All data is stored locally in the browser's IndexedDB:
- **Database**: `bits-db`
- **Tables**: `habits`, `completions`
- **Location**: Browser storage (persistent across sessions)

To inspect data, use browser DevTools → Application → IndexedDB → bits-db

### Common Development Tasks

#### Adding a New Component

```bash
# Create component file
touch src/lib/components/YourComponent.svelte

# Import and use in another component
import YourComponent from '$lib/components/YourComponent.svelte';
```

#### Adding a New Store

```typescript
// src/lib/stores/yourStore.ts
import { writable } from 'svelte/store';

export const yourStore = writable<YourType>(initialValue);
```

#### Modifying Data Models

1. Update types in `src/lib/types.ts`
2. Update database schema in `src/lib/services/db.ts`
3. Increment `DB_VERSION` to trigger migration
4. Test with fresh database or implement migration logic

### Debugging Tips

- **Console Logs**: Check browser console for errors and warnings
- **Svelte DevTools**: Install browser extension for component inspection
- **IndexedDB**: Inspect data in Application tab of DevTools
- **Hot Reload**: Vite provides instant feedback - watch the browser update as you code

### Troubleshooting

**Port already in use:**
```bash
# Kill process on port 5173
lsof -ti:5173 | xargs kill -9
```

**TypeScript errors after pulling changes:**
```bash
# Sync SvelteKit-generated types
pnpm exec svelte-kit sync
pnpm check
```

**Build errors:**
```bash
# Clear cache and rebuild
rm -rf .svelte-kit build
pnpm build
```

**Dependency issues:**
```bash
# Clean install
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

**IndexedDB issues:**
```bash
# Clear browser data for localhost:5173
# DevTools → Application → Clear storage
```

## Performance Targets

- **Initial Load:** < 50kb JavaScript (gzipped)
- **First Contentful Paint:** < 1.5s (3G)
- **Time to Interactive:** < 2.5s (3G)
- **Lighthouse Score:** > 95 (Performance, Accessibility, Best Practices)
- **Bundle Size:** < 100kb total (all assets)

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari 14+, Chrome Android 90+)

**Progressive Enhancement:** Core functionality works without JavaScript (where possible).

## Contributing

This is a focused, opinionated project. Feature requests that add complexity will likely be declined. Bug fixes and performance improvements are always welcome.

## License

MIT License - See LICENSE file for details

## Acknowledgments

Built with a focus on doing one thing well. Inspired by the Unix philosophy and modern minimalist design principles.

---

**Version:** 0.1.0-alpha
**Status:** In Development
**Last Updated:** 2025-10-27
