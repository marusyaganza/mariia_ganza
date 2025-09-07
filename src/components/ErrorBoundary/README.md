# Error Boundaries

This directory contains error boundary components designed to match the "Digital Detective" theme of the portfolio.

## Components

### ErrorBoundary
The main error boundary component that catches JavaScript errors anywhere in the child component tree.

**Features:**
- Detective-themed error UI with film noir styling
- Development mode shows detailed error information
- Retry functionality to reset the error state
- Full page reload option
- Custom fallback UI support

**Usage:**
```tsx
import { ErrorBoundary } from '@/components/ErrorBoundary';

<ErrorBoundary>
  <YourComponent />
</ErrorBoundary>
```

### SectionErrorBoundary
A specialized error boundary for individual sections of the portfolio.

**Features:**
- Section-specific error messages
- Compact error UI that fits within the page layout
- Maintains the detective theme
- Automatic section naming

**Usage:**
```tsx
import { SectionErrorBoundary } from '@/components/ErrorBoundary';

<SectionErrorBoundary sectionName="Hero">
  <Hero />
</SectionErrorBoundary>
```

## Hooks

### useErrorHandler
A custom hook for handling errors with optional external service integration.

**Usage:**
```tsx
import { useErrorHandler } from '@/hooks/useErrorHandler';

const { handleError } = useErrorHandler({
  logToConsole: true,
  reportToService: (error, errorInfo) => {
    // Send to Sentry, LogRocket, etc.
  },
  showNotification: (message) => {
    // Show toast notification
  }
});
```

## Integration

Error boundaries are already integrated into:

1. **Root Layout** (`src/app/layout.tsx`) - Catches all application errors
2. **Main Page** (`src/app/page.tsx`) - Each section wrapped with SectionErrorBoundary
3. **Layout Component** (`src/components/Layout/Layout.tsx`) - Protects visual effects

## Testing

Visit `/test-error` to test the error boundaries with a controlled error component.

## Styling

The error boundaries use the same design system as the rest of the portfolio:
- CSS custom properties for colors and fonts
- Film noir aesthetic with shadows and glows
- Responsive design
- Smooth animations

## Customization

You can customize the error boundaries by:

1. **Custom Fallback UI:**
```tsx
<ErrorBoundary fallback={<CustomErrorComponent />}>
  <YourComponent />
</ErrorBoundary>
```

2. **Error Handling:**
```tsx
<ErrorBoundary onError={(error, errorInfo) => {
  // Custom error handling logic
}}>
  <YourComponent />
</ErrorBoundary>
```

3. **Styling:** Modify the CSS modules to match your design requirements.
