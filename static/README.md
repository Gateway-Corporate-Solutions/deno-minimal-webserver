# CSS Component Library Documentation

A modern, responsive CSS component library built with a dark theme and
professional design patterns. Perfect for creating product pages, landing pages,
and business websites.

## Getting Started

Include the component library in your HTML:

```html
<link rel="stylesheet" href="components.css">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link
    href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
    rel="stylesheet"
>
```

## CSS Variables

The library uses CSS custom properties for easy theming:

```css
:root {
    --primary: #0f0f0f;
    --secondary: #4299e1;
    --accent: #f56565;
    --success: #48bb78;
    /* ... and many more */
}
```

## Components

### Typography

#### Headings

```html
<h1 class="heading-1">Main Title</h1>
<h2 class="heading-2">Section Title</h2>
<h3 class="heading-3">Subsection</h3>
<h4 class="heading-4">Small Header</h4>
```

#### Text Classes

```html
<p class="text-lead">Lead paragraph with accent line</p>
<p class="text-base">Regular paragraph text</p>
<p class="text-large">Larger paragraph text</p>
<p class="text-small">Small text</p>
```

#### Text Alignment

```html
<p class="text-center">Centered text</p>
<p class="text-left">Left aligned text</p>
<p class="text-right">Right aligned text</p>
```

### Buttons

#### Basic Button

```html
<button class="btn btn-primary">Primary Button</button>
<button class="btn btn-secondary">Secondary Button</button>
<button class="btn btn-accent">Accent Button</button>
<button class="btn btn-outline">Outline Button</button>
```

#### Button Sizes

```html
<button class="btn btn-primary btn-sm">Small</button>
<button class="btn btn-primary">Default</button>
<button class="btn btn-primary btn-lg">Large</button>
```

#### Loading State

```html
<button class="btn btn-primary loading">Loading...</button>
```

### Cards

#### Basic Card

```html
<div class="card">
    <div class="card-header">
        <h3 class="card-title">Card Title</h3>
    </div>
    <div class="card-body">
        <p class="card-text">Card content goes here.</p>
    </div>
    <div class="card-footer">
        <button class="btn btn-primary">Action</button>
    </div>
</div>
```

#### Card Variants

```html
<div class="card card-primary">Primary themed card</div>
<div class="card card-accent">Accent themed card</div>
<div class="card card-centered">Centered content card</div>
```

### Icons

#### Icon Circles

```html
<div class="icon-circle icon-primary icon-lg">🚀</div>
<div class="icon-circle icon-secondary icon-md">⭐</div>
<div class="icon-circle icon-success icon-sm">✓</div>
```

#### Icon Sizes

- `icon-sm`: 60x60px
- `icon-md`: 80x80px (default)
- `icon-lg`: 90x90px

#### Icon Colors

- `icon-primary`: Blue gradient
- `icon-secondary`: Red/green gradient
- `icon-success`: Green gradient
- `icon-warning`: Orange gradient

### Forms

#### Form Container

```html
<div class="form-container">
    <form>
        <div class="form-group">
            <label class="form-label" for="name">Name</label>
            <input
                class="form-input"
                type="text"
                id="name"
                placeholder="Enter your name"
            >
        </div>

        <div class="form-group">
            <label class="form-label" for="message">Message</label>
            <textarea
                class="form-textarea"
                id="message"
                placeholder="Your message"
            ></textarea>
        </div>

        <button class="btn btn-primary w-full" type="submit">Submit</button>
    </form>
</div>
```

### Grid System

#### Auto-fit Grid

```html
<div class="grid grid-auto-fit gap-lg">
    <div class="card">Card 1</div>
    <div class="card">Card 2</div>
    <div class="card">Card 3</div>
</div>
```

#### Fixed Columns

```html
<div class="grid grid-3 gap-md">
    <div class="card">Card 1</div>
    <div class="card">Card 2</div>
    <div class="card">Card 3</div>
</div>
```

#### Grid Options

- `grid-1`: Single column
- `grid-2`: Two columns
- `grid-3`: Three columns
- `grid-4`: Four columns
- `grid-auto-fit`: Auto-fit with minimum 320px
- `grid-auto-fill`: Auto-fill with minimum 320px

#### Gap Sizes

- `gap-sm`: Small gap
- `gap-md`: Medium gap
- `gap-lg`: Large gap
- `gap-xl`: Extra large gap

### Navigation

#### Navbar

```html
<nav class="navbar">
    <div class="nav-content">
        <a href="#" class="nav-brand">Brand Name</a>
        <ul class="nav-menu">
            <li><a href="#features" class="nav-link">Features</a></li>
            <li><a href="#pricing" class="nav-link">Pricing</a></li>
            <li><a href="#contact" class="nav-link">Contact</a></li>
        </ul>
    </div>
</nav>
```

### Hero Section

```html
<section class="hero">
    <div class="hero-content">
        <h1 class="hero-title">Amazing Product</h1>
        <p class="hero-subtitle">Subtitle text</p>
        <p class="hero-text">Hero description text</p>
        <div class="hero-buttons">
            <button class="btn btn-primary btn-lg">Get Started</button>
            <button class="btn btn-secondary btn-lg">Learn More</button>
        </div>
    </div>
</section>
```

### Sections

```html
<section class="section">
    <div class="section-header">
        <h2 class="section-title">Section Title</h2>
        <p class="text-lead">Section description</p>
    </div>

    <!-- Section content -->
</section>
```

### Utility Classes

#### Layout

```html
<div class="container">Max-width container</div>
<div class="flex">Flexbox container</div>
<div class="flex-col">Flex column</div>
<div class="items-center">Center items</div>
<div class="justify-center">Center content</div>
<div class="justify-between">Space between</div>
```

#### Sizing

```html
<div class="w-full">Full width</div>
<div class="h-full">Full height</div>
```

#### Spacing

```html
<!-- Margins -->
<div class="mb-xs">Extra small margin bottom</div>
<div class="mb-sm">Small margin bottom</div>
<div class="mb-md">Medium margin bottom</div>
<div class="mb-lg">Large margin bottom</div>
<div class="mb-xl">Extra large margin bottom</div>

<!-- Top margins -->
<div class="mt-xs">Extra small margin top</div>
<!-- ... etc -->

<!-- Padding -->
<div class="p-xs">Extra small padding</div>
<div class="p-sm">Small padding</div>
<div class="p-md">Medium padding</div>
<div class="p-lg">Large padding</div>
<div class="p-xl">Extra large padding</div>
```

### Animations

```html
<div class="animate-fade-in">Fade in animation</div>
<div class="animate-slide-in">Slide in animation</div>
<div class="animate-pulse">Pulse animation</div>
```

## Common Patterns

### Feature Cards

```html
<div class="grid grid-auto-fit gap-lg">
    <div class="card card-primary card-centered">
        <div class="icon-circle icon-lg icon-primary">🚀</div>
        <div class="card-header">
            <h3 class="card-title">Feature Title</h3>
        </div>
        <div class="card-body">
            <p class="card-text">Feature description</p>
        </div>
    </div>
</div>
```

### Pricing Cards

```html
<div class="grid grid-3 gap-lg">
    <div class="card card-centered">
        <div class="card-header">
            <div class="icon-circle icon-md icon-primary">💎</div>
            <h3 class="card-title">Plan Name</h3>
            <div class="heading-2 text-center">
                $29<span class="text-small">/month</span>
            </div>
        </div>
        <div class="card-body">
            <!-- Features list -->
        </div>
        <div class="card-footer">
            <button class="btn btn-primary w-full">Choose Plan</button>
        </div>
    </div>
</div>
```

### Testimonials

```html
<div class="card">
    <div class="card-body">
        <p class="card-text text-large">"Testimonial quote here"</p>
    </div>
    <div class="card-footer">
        <div class="flex items-center gap-md">
            <div class="icon-circle icon-sm icon-primary">👤</div>
            <div>
                <div class="heading-4 mb-0">Customer Name</div>
                <div class="text-small">Company, Title</div>
            </div>
        </div>
    </div>
</div>
```

## Responsive Design

The library is mobile-first and includes responsive breakpoints:

- **Mobile**: < 768px
- **Tablet**: 768px - 992px
- **Desktop**: 992px - 1200px
- **Large Desktop**: > 1200px

Grid columns automatically stack on smaller screens:

- `grid-3` becomes `grid-2` on tablets
- All multi-column grids become single column on mobile

## Browser Support

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## Customization

Override CSS variables to customize the theme:

```css
:root {
    --primary: #your-primary-color;
    --secondary: #your-secondary-color;
    --accent: #your-accent-color;
}
```

## Performance

- Uses CSS Grid and Flexbox for layouts
- Minimal JavaScript required
- Optimized animations with `will-change` and GPU acceleration
- Respects `prefers-reduced-motion` for accessibility

## Accessibility

- High contrast mode support
- Focus-visible indicators
- Semantic HTML structure
- ARIA attributes where needed
- Keyboard navigation support
