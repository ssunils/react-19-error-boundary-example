# React 19 Error Boundary Example

This repository demonstrates the implementation of error boundaries in React 19. It showcases how to effectively handle and recover from errors in React applications, preventing entire app crashes and providing a better user experience.

---

## Features

- **Class-based Error Boundary**: Demonstrates the traditional yet powerful class component approach to error boundaries
- **Custom Fallback UI**: Beautifully designed error states with retry capabilities
- **Interactive Demo**: Two counter components showcasing error handling differences
- **Granular Error Recovery**: Manage errors at the component level without affecting other parts of the application
- **React 19 Compatible**: Built with React 19's latest features and best practices

---

## Getting Started

### Prerequisites

- Node.js >= 16.x
- React 19.0.0-alpha.3 or higher

### Installation

1. Clone the repository:
   ```bash
   git clone git@github.com:ssunils/react-19-error-boundary-example.git
   ```

2. Navigate to the project directory:
   ```bash
   cd react-19-error-boundary-example
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

---

## Examples

### Error Boundary Component

```tsx
import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

class ErrorBoundary extends Component<Props, State> {
  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error caught by boundary:', error);
  }

  // ... rest of the implementation
}
```

### Buggy Counter Component

```tsx
import React, { useState } from 'react';

export function BuggyCounter({ threshold = 5 }) {
  const [count, setCount] = useState(0);

  if (count === threshold) {
    throw new Error(`Counter reached ${threshold}!`);
  }

  return (
    <div>
      <div>Count: {count}</div>
      <button onClick={() => setCount(c => c + 1)}>
        Increment
      </button>
    </div>
  );
}
```

---

## Project Structure

```
react-19-error-boundary-example/
├── src/
│   ├── components/
│   │   ├── ErrorBoundary.tsx    # Main error boundary implementation
│   │   └── BuggyCounter.tsx     # Component that intentionally throws errors
│   ├── App.tsx                  # Main application component
│   └── main.tsx                 # Application entry point
├── public/
├── package.json
└── README.md
```

---

## Key Features Explained

1. **Error Boundary Component**
   - Catches JavaScript errors anywhere in the child component tree
   - Logs error information for debugging
   - Displays a fallback UI
   - Provides error recovery mechanisms

2. **Interactive Demo Components**
   - Protected Counter: Demonstrates error recovery
   - Unprotected Counter: Shows default error behavior
   - Configurable error thresholds

3. **Styling and UI**
   - Modern, clean interface using Tailwind CSS
   - Responsive design
   - Clear visual feedback
   - Intuitive error states

---

## Technologies Used

- React 19
- TypeScript
- Tailwind CSS
- Vite
- Lucide React (for icons)

---

## Best Practices Demonstrated

1. **Error Handling**
   - Graceful error recovery
   - Informative error messages
   - Component isolation

2. **Type Safety**
   - Full TypeScript implementation
   - Proper interface definitions
   - Type-safe props

3. **User Experience**
   - Clear error feedback
   - Recovery options
   - Intuitive interface

---

## License

MIT

---

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.