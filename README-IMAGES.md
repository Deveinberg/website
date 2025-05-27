# Adding Images from devverma.com

This document explains how to add images from Dev Verma's original website to this new site.

## Image Placeholders

The website currently has placeholders for the following images:

### 1. Profile Images
- **Hero Section**: Circular profile image (160x160px recommended)
- **About Section**: Larger profile/portrait image (320x320px recommended)

### 2. Project Images
- **FLIQ 2025 Project**: Image related to quantum error correction work
- **Quantum Gate Decomposition**: Visualization of quantum gates or research
- **Vibration Analysis**: Equipment or data visualization
- **Glassy Systems**: Research setup or simulation results

## How to Add Images

### Method 1: Manual Download
1. Visit [devverma.com](https://devverma.com)
2. Right-click on images and save them to `public/images/`
3. Update the image paths in the components

### Method 2: Using the Download Script
1. Update the URLs in `scripts/download-images.js` with actual image URLs from devverma.com
2. Run the script:
   ```bash
   node scripts/download-images.js
   ```

## Image Requirements

- **Format**: JPG, PNG, or WebP
- **Profile Images**: Square aspect ratio (1:1)
- **Project Images**: Landscape aspect ratio (16:9 or 4:3)
- **Size**: Optimized for web (under 500KB each)

## Updating Components

After adding images, update these files:

### Hero Section Profile Image
File: `src/app/page.tsx`
Replace the User icon with:
```jsx
<img 
  src="/images/dev-profile.jpg" 
  alt="Dev Verma" 
  className="w-full h-full rounded-full object-cover"
/>
```

### About Section Image
File: `src/app/page.tsx`
Replace the placeholder with:
```jsx
<img 
  src="/images/dev-about.jpg" 
  alt="Dev Verma" 
  className="w-full h-full rounded-xl object-cover"
/>
```

### Project Images
Add images to each project card by replacing the placeholder div with:
```jsx
<img 
  src="/images/project-name.jpg" 
  alt="Project Name" 
  className="w-full h-full object-cover rounded-lg"
/>
```

## Image Optimization

For better performance, consider:
1. Using Next.js Image component for automatic optimization
2. Adding multiple sizes for responsive design
3. Using WebP format for modern browsers

## Next.js Image Component Example

```jsx
import Image from 'next/image';

<Image
  src="/images/dev-profile.jpg"
  alt="Dev Verma"
  width={160}
  height={160}
  className="rounded-full"
  priority
/>
```

## Notes

- All images should be placed in the `public/images/` directory
- Update alt text to be descriptive for accessibility
- Consider adding loading states for better UX
- Test images on different screen sizes 