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

## Alternative Approach: Copying and Referencing Animation Files in a New Project

### Step 1: Copy Animation Files

1. **Identify Animation Files**: Determine which files contain the animations you want to reuse. These could be HTML, CSS, or JavaScript files.

2. **Copy Files**: Copy these files from your current project directory to the new project directory. You can use file explorer or terminal commands to do this.

   ```powershell
   # Example command to copy files
   Copy-Item -Path "C:\path\to\current\project\animations\*" -Destination "C:\path\to\new\project\animations" -Recurse
   ```

### Step 2: Reference Animation Files in the New Project

1. **Include CSS and JavaScript**: In your new project's HTML files, include the CSS and JavaScript files for the animations. This can be done by adding `<link>` and `<script>` tags in the `<head>` or before the closing `</body>` tag.

   ```html
   <!-- Include CSS for animations -->
   <link rel="stylesheet" href="animations/animation-styles.css">

   <!-- Include JavaScript for animations -->
   <script src="animations/animation-scripts.js"></script>
   ```

2. **Insert HTML Snippets**: Wherever you want to use the animations, insert the relevant HTML snippets into your new project's HTML files.

   ```html
   <!-- Example HTML snippet for an animation -->
   <div class="animated-element">
       <!-- Animation content here -->
   </div>
   ```

### Step 3: Verify Integration

1. **Test Animations**: Open your new project in a browser and verify that the animations work as expected. Check the console for any errors related to missing files or incorrect paths.

2. **Adjust Paths if Necessary**: Ensure that the paths to your CSS and JavaScript files are correct relative to the HTML files.