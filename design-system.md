# One Rugged Design System

## Color Palette

### Primary Colors
```css
/* Primary Blue */
--primary-blue: #235faa;
--primary-blue-hover: #1e4f94;
--primary-blue-light: #235faa/10;

/* Secondary Gold */
--secondary-gold: #fab928;
--secondary-gold-hover: #e6a625;
--secondary-gold-light: #fab928/10;

/* Neutral Grays */
--slate-50: #f8fafc;
--slate-100: #f1f5f9;
--slate-200: #e2e8f0;
--slate-300: #cbd5e1;
--slate-400: #94a3b8;
--slate-500: #64748b;
--slate-600: #475569;
--slate-700: #334155;
--slate-800: #1e293b;
--slate-900: #0f172a;
--slate-950: #020617;

/* Semantic Colors */
--success: #10b981;
--warning: #f59e0b;
--error: #ef4444;
--info: #3b82f6;
```

### Gradient Combinations
```css
/* Primary Gradient */
background: linear-gradient(to right, #235faa, #fab928);

/* Background Gradients */
background: linear-gradient(to bottom right, #0f172a, #1e293b, #0f172a);
background: linear-gradient(to bottom right, #f8fafc, #ffffff);

/* Overlay Gradients */
background: linear-gradient(to right, #0f172a/95, #1e293b/85, #0f172a/70);
background: linear-gradient(to top, rgba(0,0,0,0.6), transparent);
```

## Typography

### Font Weights
```css
--font-normal: 400;
--font-medium: 500;
--font-semibold: 600;
--font-bold: 700;
```

### Font Sizes & Line Heights
```css
/* Headings */
--text-4xl: 2.25rem; /* 36px */ line-height: 2.5rem; /* 40px */
--text-5xl: 3rem; /* 48px */ line-height: 1;
--text-6xl: 3.75rem; /* 60px */ line-height: 1;

/* Body Text */
--text-base: 1rem; /* 16px */ line-height: 1.5rem; /* 24px */
--text-lg: 1.125rem; /* 18px */ line-height: 1.75rem; /* 28px */
--text-xl: 1.25rem; /* 20px */ line-height: 1.75rem; /* 28px */
--text-2xl: 1.5rem; /* 24px */ line-height: 2rem; /* 32px */

/* Small Text */
--text-sm: 0.875rem; /* 14px */ line-height: 1.25rem; /* 20px */
--text-xs: 0.75rem; /* 12px */ line-height: 1rem; /* 16px */
```

### Typography Classes
```css
/* Heading Styles */
.heading-primary {
  font-size: 3.75rem; /* text-6xl */
  font-weight: 700; /* font-bold */
  line-height: 1;
  color: #0f172a; /* slate-900 */
}

.heading-secondary {
  font-size: 2.25rem; /* text-4xl */
  font-weight: 700; /* font-bold */
  line-height: 2.5rem;
  color: #0f172a; /* slate-900 */
}

/* Body Text */
.body-large {
  font-size: 1.25rem; /* text-xl */
  line-height: 1.75rem;
  color: #475569; /* slate-600 */
}

.body-regular {
  font-size: 1rem; /* text-base */
  line-height: 1.5rem;
  color: #475569; /* slate-600 */
}
```

## Spacing System (8px Grid)

### Spacing Scale
```css
--space-1: 0.25rem; /* 4px */
--space-2: 0.5rem; /* 8px */
--space-3: 0.75rem; /* 12px */
--space-4: 1rem; /* 16px */
--space-6: 1.5rem; /* 24px */
--space-8: 2rem; /* 32px */
--space-12: 3rem; /* 48px */
--space-16: 4rem; /* 64px */
--space-20: 5rem; /* 80px */
--space-24: 6rem; /* 96px */
```

### Layout Spacing
```css
/* Section Padding */
.section-padding {
  padding-top: 5rem; /* py-20 */
  padding-bottom: 5rem;
}

/* Container Max Width */
.container {
  max-width: 80rem; /* max-w-7xl */
  margin-left: auto;
  margin-right: auto;
  padding-left: 1rem; /* px-4 */
  padding-right: 1rem;
}

@media (min-width: 640px) {
  .container {
    padding-left: 1.5rem; /* sm:px-6 */
    padding-right: 1.5rem;
  }
}

@media (min-width: 1024px) {
  .container {
    padding-left: 2rem; /* lg:px-8 */
    padding-right: 2rem;
  }
}
```

## Border Radius

### Radius Scale
```css
--radius-sm: 0.125rem; /* 2px */
--radius-md: 0.375rem; /* 6px */
--radius-lg: 0.5rem; /* 8px */
--radius-xl: 0.75rem; /* 12px */
--radius-2xl: 1rem; /* 16px */
--radius-3xl: 1.5rem; /* 24px */
--radius-full: 9999px; /* rounded-full */
```

### Component Radius
```css
/* Buttons */
.btn-radius {
  border-radius: 0.5rem; /* rounded-lg */
}

/* Cards */
.card-radius {
  border-radius: 1rem; /* rounded-2xl */
}

/* Large Cards */
.card-large-radius {
  border-radius: 1.5rem; /* rounded-3xl */
}
```

## Button Components

### Primary Button
```css
.btn-primary {
  background: #fab928;
  color: white;
  padding: 1rem 2rem; /* px-8 py-4 */
  border-radius: 0.5rem; /* rounded-lg */
  font-weight: 600; /* font-semibold */
  transition: all 0.3s ease;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}

.btn-primary:hover {
  background: #e6a625;
  transform: scale(1.05);
}
```

### Secondary Button
```css
.btn-secondary {
  background: #235faa;
  color: white;
  padding: 1rem 2rem; /* px-8 py-4 */
  border-radius: 0.5rem; /* rounded-lg */
  font-weight: 600; /* font-semibold */
  transition: all 0.3s ease;
}

.btn-secondary:hover {
  background: #1e4f94;
}
```

### Outline Button
```css
.btn-outline {
  background: transparent;
  color: white;
  border: 2px solid rgba(255, 255, 255, 0.3);
  padding: 1rem 2rem; /* px-8 py-4 */
  border-radius: 0.5rem; /* rounded-lg */
  font-weight: 600; /* font-semibold */
  transition: all 0.3s ease;
}

.btn-outline:hover {
  border-color: white;
  background: rgba(255, 255, 255, 0.1);
}
```

### Gradient Button
```css
.btn-gradient {
  background: linear-gradient(to right, #235faa, #fab928);
  color: white;
  padding: 1rem 2rem; /* px-8 py-4 */
  border-radius: 0.5rem; /* rounded-lg */
  font-weight: 600; /* font-semibold */
  transition: all 0.3s ease;
  transform: scale(1);
}

.btn-gradient:hover {
  background: linear-gradient(to right, #1e4f94, #e6a625);
  transform: scale(1.05);
}
```

## Card Components

### Basic Card
```css
.card {
  background: white;
  border-radius: 1rem; /* rounded-2xl */
  padding: 2rem; /* p-8 */
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.card:hover {
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  transform: translateY(-0.5rem);
}
```

### Feature Card
```css
.feature-card {
  background: #1e293b; /* slate-800 */
  border-radius: 0.75rem; /* rounded-xl */
  padding: 2rem; /* p-8 */
  text-align: center;
  transition: all 0.3s ease;
  color: white;
}

.feature-card:hover {
  background: #334155; /* slate-700 */
  transform: scale(1.05);
}
```

### Testimonial Card
```css
.testimonial-card {
  background: white;
  border-radius: 1.5rem; /* rounded-3xl */
  padding: 2rem; /* p-8 */
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  border: 1px solid #f1f5f9; /* border-slate-100 */
  position: relative;
  overflow: hidden;
  transition: all 0.5s ease;
}

.testimonial-card:hover {
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  border-color: rgba(250, 185, 40, 0.2);
}
```

## Icon Components

### Icon Container
```css
.icon-container {
  background: #fab928;
  width: 4rem; /* w-16 */
  height: 4rem; /* h-16 */
  border-radius: 1rem; /* rounded-2xl */
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1rem;
  transition: all 0.3s ease;
}

.icon-container:hover {
  transform: scale(1.1);
}
```

### Gradient Icon Container
```css
.icon-gradient {
  background: linear-gradient(to bottom right, #235faa, #fab928);
  width: 3rem; /* w-12 */
  height: 3rem; /* h-12 */
  border-radius: 0.75rem; /* rounded-xl */
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}
```

## Form Components

### Input Field
```css
.form-input {
  width: 100%;
  padding: 0.75rem 1rem; /* px-4 py-3 */
  border: 1px solid #cbd5e1; /* border-slate-300 */
  border-radius: 0.5rem; /* rounded-lg */
  transition: all 0.3s ease;
  font-size: 1rem;
}

.form-input:focus {
  outline: none;
  border-color: #fab928;
  box-shadow: 0 0 0 2px rgba(250, 185, 40, 0.2);
}
```

### Label
```css
.form-label {
  display: block;
  font-size: 0.875rem; /* text-sm */
  font-weight: 500; /* font-medium */
  color: #334155; /* slate-700 */
  margin-bottom: 0.5rem; /* mb-2 */
}
```

## Animation & Transitions

### Standard Transitions
```css
.transition-standard {
  transition: all 0.3s ease;
}

.transition-slow {
  transition: all 0.5s ease;
}

.transition-colors {
  transition: color 0.3s ease, background-color 0.3s ease, border-color 0.3s ease;
}
```

### Hover Effects
```css
.hover-scale {
  transition: transform 0.3s ease;
}

.hover-scale:hover {
  transform: scale(1.05);
}

.hover-lift {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.hover-lift:hover {
  transform: translateY(-0.5rem);
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}
```

### Pulse Animation
```css
.pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}
```

## Layout Components

### Grid Systems
```css
/* 2 Column Grid */
.grid-2 {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem; /* gap-8 */
}

/* 3 Column Grid */
.grid-3 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem; /* gap-8 */
}

/* Responsive Grid */
@media (max-width: 768px) {
  .grid-2, .grid-3 {
    grid-template-columns: 1fr;
  }
}

@media (min-width: 768px) and (max-width: 1024px) {
  .grid-3 {
    grid-template-columns: repeat(2, 1fr);
  }
}
```

### Flexbox Utilities
```css
.flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}

.flex-between {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.flex-col {
  display: flex;
  flex-direction: column;
}
```

## Shadow System

### Shadow Scale
```css
--shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
--shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
--shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
--shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
--shadow-2xl: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
```

### Component Shadows
```css
.card-shadow {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}

.card-shadow-hover {
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}

.button-shadow {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
}
```

## Responsive Breakpoints

### Breakpoint System
```css
/* Mobile First Approach */
/* xs: 0px */
/* sm: 640px */
/* md: 768px */
/* lg: 1024px */
/* xl: 1280px */
/* 2xl: 1536px */

@media (min-width: 640px) {
  /* Small devices and up */
}

@media (min-width: 768px) {
  /* Medium devices and up */
}

@media (min-width: 1024px) {
  /* Large devices and up */
}

@media (min-width: 1280px) {
  /* Extra large devices and up */
}
```

## Component-Specific Styles

### Header
```css
.header {
  background: white;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 50;
}

.logo {
  height: 3rem; /* h-12 */
  width: auto;
}
```

### Hero Section
```css
.hero {
  background: linear-gradient(to bottom right, #0f172a, #1e293b, #0f172a);
  color: white;
  overflow: hidden;
  height: 100vh;
}

.hero-overlay {
  background: linear-gradient(to right, #0f172a/95, #1e293b/85, #0f172a/70);
}
```

### Badge Component
```css
.badge {
  display: inline-flex;
  align-items: center;
  background: rgba(250, 185, 40, 0.2);
  border: 1px solid rgba(250, 185, 40, 0.3);
  border-radius: 9999px; /* rounded-full */
  padding: 0.5rem 1rem; /* px-4 py-2 */
  color: #fab928;
  font-size: 0.875rem; /* text-sm */
  font-weight: 500; /* font-medium */
}
```

## Usage Guidelines

### Color Usage
- **Primary Blue (#235faa)**: Main brand color, use for primary actions, links, and key UI elements
- **Secondary Gold (#fab928)**: Accent color, use for CTAs, highlights, and secondary actions
- **Slate Grays**: Use for text, backgrounds, and neutral elements
- **Gradients**: Use sparingly for hero sections, CTAs, and special highlights

### Typography Hierarchy
1. **H1**: Hero headlines (text-6xl, font-bold)
2. **H2**: Section headers (text-4xl, font-bold)
3. **H3**: Subsection headers (text-2xl, font-semibold)
4. **Body Large**: Important descriptions (text-xl)
5. **Body Regular**: Standard content (text-base)
6. **Small Text**: Captions, labels (text-sm)

### Spacing Consistency
- Use 8px grid system for all spacing
- Section padding: py-20 (80px)
- Card padding: p-8 (32px)
- Button padding: px-8 py-4 (32px horizontal, 16px vertical)
- Grid gaps: gap-8 (32px)

### Interactive States
- **Hover**: Scale transforms (1.05), color changes, shadow increases
- **Focus**: Ring outline with brand colors
- **Active**: Slightly darker colors, scale down (0.95)
- **Disabled**: Reduced opacity (0.5), no interactions