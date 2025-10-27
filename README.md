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
│   │   ├── components/       # Svelte components
│   │   │   ├── HabitList.svelte
│   │   │   ├── HabitCard.svelte
│   │   │   ├── CompletionButton.svelte
│   │   │   └── AddHabitModal.svelte
│   │   ├── stores/          # Svelte stores
│   │   │   ├── habits.ts
│   │   │   └── completions.ts
│   │   ├── services/        # Business logic
│   │   │   └── db.ts        # IndexedDB wrapper
│   │   └── utils/           # Helper functions
│   │       ├── date.ts
│   │       └── calculations.ts
│   ├── routes/              # SvelteKit routes
│   │   └── +page.svelte     # Main app view
│   └── app.html             # HTML template
├── static/                  # Static assets
├── tests/                   # Test files
│   ├── unit/
│   └── e2e/
├── svelte.config.js
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
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

```bash
# Prerequisites
Node.js >= 18.x
pnpm >= 8.x

# Clone repository
git clone https://github.com/nathanrdodson/bits.git
cd bits

# Install dependencies
pnpm install

# Start development server
pnpm dev

# Run tests
pnpm test

# Build for production
pnpm build

# Preview production build
pnpm preview
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
