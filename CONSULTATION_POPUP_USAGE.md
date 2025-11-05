# Universal Consultation Popup - Usage Guide

## Overview
The consultation form now has a **universal shareable link** system. When someone visits `/book-consultation`, the popup automatically opens on whatever page they're currently on, and the URL updates to make it shareable.

## How It Works

### 1. Direct Link Access
- Visit: `https://yourwebsite.com/book-consultation`
- The popup opens automatically
- Users can share this link via WhatsApp, email, QR codes, social media, etc.
- When popup closes, user returns to the homepage

### 2. Button Click Behavior
- When user clicks a "Book Consultation" button anywhere on the site
- The popup opens AND the URL changes to `/book-consultation`
- User stays on the same page (no reload)
- When popup closes, URL reverts to the previous page
- This makes the popup shareable even when opened from within the site

## Adding the Button to Your Pages

### Simple Usage
```tsx
import BookConsultationButton from "@/components/book-consultation-button";

// In your component:
<BookConsultationButton />
```

### Custom Styling
```tsx
<BookConsultationButton 
  variant="outline" 
  size="lg"
  className="bg-blue-600 hover:bg-blue-700"
/>
```

### Custom Text
```tsx
<BookConsultationButton>
  Get Free Consultation Now
</BookConsultationButton>
```

### All Options
```tsx
<BookConsultationButton 
  variant="default" // or "outline", "ghost", "link"
  size="default"    // or "sm", "lg", "icon"
  className="custom-classes"
>
  Custom Button Text
</BookConsultationButton>
```

## Advanced Usage - Custom Buttons

If you need a completely custom button:

```tsx
import { useConsultationPopup } from "@/contexts/consultation-popup-context";

function MyCustomButton() {
  const { openConsultationPopup } = useConsultationPopup();
  
  return (
    <button onClick={openConsultationPopup}>
      My Custom Button
    </button>
  );
}
```

## Benefits

1. **SEO Friendly**: The URL changes reflect the current state
2. **Shareable**: Users can copy/paste the URL when popup is open
3. **No Page Reload**: Smooth experience, stays on current page
4. **Universal**: Works from any page on the website
5. **Marketing**: Easy to share on social media, QR codes, business cards
6. **Analytics**: Track when users access via direct link vs button click

## Example Use Cases

1. **WhatsApp Message**: "Book your consultation here: yourwebsite.com/book-consultation"
2. **QR Code**: Generate QR for `/book-consultation` on marketing materials
3. **Email Campaign**: Include direct link in email newsletters
4. **Social Media**: Share the link in posts/stories
5. **SMS**: Send link to potential students
