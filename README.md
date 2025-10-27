# bits

Bits is a beautifully simple atomic habit-tracker.

## Philosophy

**Do less, better.** Bits focuses on making habit tracking effortless and beautiful. No complicated features, no overwhelming dashboards, no guilt-inducing statistics. Just you, your habits, and a satisfying way to mark them complete.

## Core Features

Three things. That's it.

1. **Add a habit** - Name it, optionally set a frequency (e.g., "twice a day")
2. **Mark it done** - One tap to record completion
3. **See your progress** - Beautiful, minimal visualization

Everything else is noise.

## Data Model

Keep it simple. Two entities, minimal fields.

### Habit
```
{
  id: string
  name: string
  frequency?: {
    times: number      // e.g., 2
    period: string     // 'day', 'week', 'month'
  }
  createdAt: timestamp
}
```

### Completion
```
{
  id: string
  habitId: string
  completedAt: timestamp
}
```

## Technology Stack

**To be decided:**
- Frontend framework (React, Vue, Svelte?)
- UI library/styling (Tailwind, styled-components?)
- State management
- Data persistence (Local storage, IndexedDB, backend?)
- Mobile approach (PWA, React Native, Flutter?)

## Project Structure

```
bits/
├── src/
│   ├── components/       # UI components
│   │   ├── HabitList
│   │   ├── HabitCard
│   │   ├── AddHabit
│   │   └── CompletionButton
│   ├── models/          # Data models and types
│   ├── hooks/           # Custom React hooks (if using React)
│   ├── services/        # Business logic and data management
│   ├── utils/           # Helper functions
│   └── styles/          # Global styles
├── public/              # Static assets
└── tests/               # Test files
```

## UI Design

**One main view.** Everything you need, nothing you don't.

### Main Screen
- List of habits, each showing:
  - Name
  - Visual progress indicator
  - Large, satisfying completion button
- Simple "+" button to add new habit

### Add Habit Form
- Habit name (required)
- Frequency (optional): times per period
- That's it. No descriptions, no categories, no tags.

## Implementation Plan

### Phase 1: Beautiful MVP
- [ ] Set up minimal project structure
- [ ] Implement data models (Habit, Completion)
- [ ] Create main habit list view
- [ ] Build simple add habit form
- [ ] Implement satisfying "mark as done" interaction
- [ ] Add visual progress indicators
- [ ] Local storage persistence
- [ ] Make it beautiful

### Phase 2: Polish (only if needed)
- [ ] Subtle animations
- [ ] Edit/delete habits
- [ ] Dark mode (maybe)
- [ ] Performance optimization

That's it. Ship phase 1, use it, see if phase 2 is even necessary.

## Design Principles

1. **Ruthlessly minimal** - Every feature must justify its existence
2. **Instantly fast** - Zero loading, zero lag, zero friction
3. **Beautiful by default** - Good design is not optional
4. **No guilt** - Progress, not perfection
5. **One thing well** - Habit tracking. That's it.

## What This App Will NOT Have

- Complex analytics or statistics
- Social features
- Gamification or points systems
- Habit categories or tags
- Cloud sync (at least not initially)
- Export/import features
- Notifications (your choice to open the app)
- Settings pages with dozens of options

If you want those features, use a different app. Bits does one thing: helps you track habits beautifully and simply.
