# React 19 Error Boundary Example

This repository showcases the implementation of error boundaries using React 19's enhanced capabilities. With the introduction of the `useErrorBoundary` hook, error handling in React has become more powerful and easier to manage, especially for functional components.

---

## Features

- **`useErrorBoundary` Hook**: Demonstrates how to handle errors in functional components using the new React 19 API.
- **Dynamic Fallback UI**: Examples include fallback UIs that allow users to retry or recover from errors.
- **Granular Error Recovery**: Manage errors at the individual component level without affecting sibling components.
- **Concurrent Rendering Support**: Seamless error handling compatible with React's concurrent rendering.

---

## Getting Started

### Prerequisites

- Node.js >= 16.x
- React 19 or higher

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/react-19-error-boundary-example.git
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
   npm start
   ```

---

## Examples

### Basic Usage of `useErrorBoundary`

```tsx
import React from "react";
import { useErrorBoundary } from "react";

function ErrorBoundaryExample({ children }: { children: React.ReactNode }) {
  const { ErrorBoundary, resetBoundary } = useErrorBoundary();

  return (
    <ErrorBoundary
      fallbackRender={({ error, resetErrorBoundary }) => (
        <div>
          <h1>An error occurred</h1>
          <p>{error.message}</p>
          <button onClick={resetErrorBoundary}>Retry</button>
        </div>
      )}
    >
      {children}
    </ErrorBoundary>
  );
}

export default ErrorBoundaryExample;
```

### Example with a Buggy Component

```tsx
function BuggyComponent() {
  const [shouldThrow, setShouldThrow] = React.useState(false);

  if (shouldThrow) {
    throw new Error("This is a test error!");
  }

  return (
    <div>
      <button onClick={() => setShouldThrow(true)}>Trigger Error</button>
    </div>
  );
}

function App() {
  return (
    <ErrorBoundaryExample>
      <BuggyComponent />
    </ErrorBoundaryExample>
  );
}

export default App;
```

---

## Folder Structure

```
react-19-error-boundary-example/
├── src/
│   ├── components/
│   │   ├── ErrorBoundaryExample.tsx
│   │   └── BuggyComponent.tsx
│   ├── App.tsx
│   └── index.tsx
├── public/
├── package.json
└── README.md
```
