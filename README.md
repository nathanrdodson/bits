# bits

Bits is a beautifully simple atomic habit-tracker.

## Overview

A minimalist habit tracking app focused on simplicity and visual appeal. Track your daily habits, mark them as complete, and visualize your progress over time.

## Core Features

### 1. Habit Management
- **Create Habits**: Add new habits with name and optional frequency
- **Frequency System**: Define ideal habit periods (e.g., "twice a day", "once a week", "3 times per week")
- **Edit/Delete**: Modify or remove habits as needed

### 2. Action Tracking
- **Mark as Done**: Simple one-tap action to record habit completion
- **Timestamp Recording**: Every completion is timestamped
- **Quick Access**: Easy interface to mark habits complete throughout the day

### 3. Visualization
- **Pretty UI**: Clean, modern interface with attention to design
- **Progress Tracking**: Visual indicators showing completion status
- **Streak Display**: Show consecutive days/periods of completion
- **Calendar View**: See your habit completion history

## Data Model

### Habit
```
{
  id: string
  name: string
  description?: string
  frequency?: {
    times: number      // e.g., 2 for "twice"
    period: string     // 'day', 'week', 'month'
  }
  createdAt: timestamp
  color?: string       // for UI customization
  icon?: string        // optional emoji or icon
}
```

### Completion
```
{
  id: string
  habitId: string
  completedAt: timestamp
  note?: string        // optional note for this completion
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

## UI Components

### Main Views
1. **Habit List View**: Display all habits with quick-action buttons
2. **Habit Detail View**: See individual habit history and statistics
3. **Add/Edit Habit Form**: Create or modify habits
4. **Calendar View**: Monthly/weekly view of completions

### Key Components
- **HabitCard**: Displays habit with completion button and status
- **CompletionButton**: Large, satisfying button to mark habit done
- **FrequencyPicker**: UI to set habit frequency
- **StreakBadge**: Shows current streak count
- **ProgressRing**: Circular progress indicator for daily/weekly goals

## Implementation Phases

### Phase 1: MVP
- [ ] Set up project structure
- [ ] Implement basic data models
- [ ] Create habit list view
- [ ] Add habit creation form
- [ ] Implement "mark as done" functionality
- [ ] Basic local storage persistence

### Phase 2: Enhanced UX
- [ ] Add frequency tracking
- [ ] Implement streak calculation
- [ ] Create calendar view
- [ ] Add habit editing/deletion
- [ ] Improve UI with animations
- [ ] Add color/icon customization

### Phase 3: Advanced Features
- [ ] Statistics and insights
- [ ] Habit categories/tags
- [ ] Export/backup data
- [ ] Dark mode
- [ ] Notifications/reminders (if mobile)

### Phase 4: Polish
- [ ] Performance optimization
- [ ] Comprehensive testing
- [ ] Accessibility improvements
- [ ] Documentation
- [ ] Deployment

## Design Principles

1. **Simplicity First**: Remove friction from tracking habits
2. **Visual Feedback**: Make completions satisfying and visible
3. **No Guilt**: Focus on progress, not perfection
4. **Fast**: Loading and interactions should be instant
5. **Beautiful**: Design should spark joy

## Future Considerations

- Cloud sync across devices
- Social features (optional accountability partners)
- Habit templates/suggestions
- Integration with health apps
- Analytics and insights
- Habit stacking/chains
