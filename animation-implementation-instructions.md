# Animation Implementation Instructions

## General Steps
1. Choose the animation folder you want to use from the `animations` directory
2. Copy the required files (HTML structure, CSS, and JavaScript)
3. Follow the animation-specific instructions below

## Available Animations

### 1. Fade-In Animation
**Files Required:**
- styles.css
- script.js

**Step 1: Create Animation Assets**
1. Create a folder in your project for animations (e.g., `assets/animations` or `src/animations`)
2. Copy these files into your animations folder:
   - EXAMPLE - `fade-in/styles.css`
   - EXAMPLE - `fade-in/script.js`
   - EXAMPLE - 'global/styles.css'

**Important Note About Global Styles:**
The global styles file (`global/styles.css`) provides consistent styling across all animations including:
- Typography classes (`.animation-text`, `.animation-heading`)
- Button styles (`.animation-button`)
- Container layouts (`.animation-container`)
- Utility classes (`.animation-flex-center`, `.animation-grid`)
- CSS Variables for colors (using `var(--animation-primary)`, etc.)

Always include the global styles before any animation-specific styles:
```html
<link rel="stylesheet" href="[your-path]/animations/global/styles.css">
<link rel="stylesheet" href="[your-path]/animations/[animation-name]/styles.css">
```

**Step 2: Add Script Reference**
Add the script reference before your closing `</body>` tag:
```html
<script src="[your-path]/animations/[animation-name]/script.js"></script>
```

**Step 3: Add HTML Structure**
Copy this structure to where you want the animation: