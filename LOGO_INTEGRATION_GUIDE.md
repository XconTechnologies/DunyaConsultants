# University Logo Integration Guide

## Steps to integrate your university logos:

### 1. Extract the RAR file
- Extract the `FINAL LOGO WEBP_1750422157598.rar` file to access the WEBP logo files
- You should have individual `.webp` files for each university

### 2. Upload logos to the project
- Create a folder: `client/public/logos/`
- Upload all your `.webp` logo files to this folder
- Name them consistently (e.g., `harvard.webp`, `stanford.webp`, etc.)

### 3. Update the university data
In `client/src/components/university-partners-section.tsx`, update the `logoUrl` paths to match your actual file names:

```javascript
{ name: "Harvard University", logoUrl: "/logos/harvard.webp", ... },
{ name: "Stanford University", logoUrl: "/logos/stanford.webp", ... },
// etc.
```

### 4. Logo file naming convention
Suggested naming format:
- Use lowercase
- Replace spaces with hyphens
- Example: "University of Oxford" → `oxford.webp`
- Example: "Massachusetts Institute of Technology" → `mit.webp`

### 5. Fallback handling
The current code includes fallback handling:
- If a logo fails to load, it will show a placeholder
- This ensures the layout remains intact even if some logos are missing

### 6. Recommended logo specifications
- Format: WEBP (already provided)
- Size: Consistent dimensions (e.g., 200x100px or similar)
- Background: Transparent or white
- Quality: High resolution for crisp display

### 7. Testing
After uploading:
1. Check that logos display correctly
2. Verify hover animations work
3. Test on different screen sizes
4. Ensure fast loading times

### Current implementation
The university partners section is ready to display your logos with:
- 4x4 grid layout per slide
- Auto-scrolling carousel
- Hover effects and animations
- Country and ranking badges
- 250+ university slots ready for your logos