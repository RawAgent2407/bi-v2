# Button Component

A reusable button component with 4 different design variants and 3 size options.

## Props

- `children` (required): The content to display inside the button
- `variant` (optional): Button style variant - `'dark'` | `'light'` | `'dark-outline'` | `'light-outline'` (default: `'dark'`)
- `className` (optional): Additional CSS classes
- `onClick` (optional): Click handler function
- `type` (optional): Button type - `'button'` | `'submit'` | `'reset'` (default: `'button'`)
- `disabled` (optional): Whether the button is disabled (default: `false`)

## Variants

### Dark

- Background: Gray-900
- Text: White
- Hover: Gray-800
- Use for primary actions

### Light

- Background: White
- Text: Gray-900
- Border: Gray-200
- Hover: Gray-100
- Use for secondary actions

### Dark Outline

- Background: Transparent
- Text: Gray-900
- Border: Gray-800
- Hover: Gray-100
- Use for subtle actions

### Light Outline

- Background: Transparent
- Text: White
- Border: White
- Hover: White background with gray text
- Use for buttons on dark backgrounds

## Dimensions

- **Width**: 9.4375rem (151px)
- **Height**: 3rem (48px)
- **Padding**: 0.75rem 2rem (12px 32px)
- **Border Radius**: 0.125rem (2px)
- **Gap**: 0.625rem (10px)

## Usage Examples

```jsx
import Button from '../Button'

// Basic usage
<Button>Click me</Button>

// With variant
<Button variant="light">
  Contact us
</Button>

// With custom className
<Button variant="dark-outline" className="shadow-md">
  Explore More
</Button>

// With onClick handler
<Button variant="dark" onClick={() => console.log('clicked')}>
  Submit
</Button>

// Disabled button
<Button variant="light" disabled>
  Loading...
</Button>
```

## Features

- Consistent styling across the application
- Focus states with ring indicators
- Smooth transitions
- Responsive design
- Accessible with proper ARIA attributes
- TypeScript support (if using TypeScript)
