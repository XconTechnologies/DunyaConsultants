# WhatsApp Channel CTA - Manual Code

## How to Add WhatsApp CTA Manually in Blog Editor

You can paste this HTML code anywhere in your blog post content using the HTML editor:

```html
<div class="my-8 px-4 sm:px-6 lg:px-8 whatsapp-cta-container">
  <div class="max-w-4xl mx-auto">
    <div class="bg-gradient-to-r from-[#1D50C9] to-[#1845B3] rounded-2xl shadow-xl p-6 sm:p-8 border border-blue-600/20" style="background: linear-gradient(to right, #1D50C9, #1845B3); border-radius: 1rem; box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1); padding: 2rem; border: 1px solid rgba(37, 99, 235, 0.2);">
      <div style="display: flex; flex-direction: column; align-items: center; justify-content: space-between; gap: 1.5rem;">
        
        <!-- Left Section - Icon and Text -->
        <div style="display: flex; align-items: center; gap: 1rem; text-align: center;">
          <div style="background: rgba(255, 255, 255, 0.2); padding: 1rem; border-radius: 50%; box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>
          </div>
          <div>
            <h3 class="whatsapp-cta-heading" style="color: white !important; font-weight: bold; font-size: 1.25rem; margin-bottom: 0.25rem;">
              Stay Updated with Our WhatsApp Channel
            </h3>
            <p class="whatsapp-cta-text" style="color: white !important; font-size: 1rem;">
              Get instant updates on visa news, scholarships, and study abroad opportunities!
            </p>
          </div>
        </div>

        <!-- Right Section - CTA Button -->
        <a href="https://whatsapp.com/channel/0029VbAnwfe8qIzremjcqn2V" target="_blank" rel="noopener noreferrer" style="width: 100%; max-width: 200px;">
          <button style="width: 100%; background: white; color: #1D50C9; font-weight: 600; padding: 0.75rem 1.5rem; border-radius: 0.75rem; box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1); border: none; cursor: pointer; transition: all 0.3s; display: flex; align-items: center; justify-content: center; gap: 0.5rem;">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path>
              <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path>
            </svg>
            Join Channel
          </button>
        </a>
      </div>
    </div>
  </div>
</div>
```

## Instructions:

1. Go to the blog editor
2. Switch to HTML mode (toggle button at top of editor)
3. Paste the above code where you want the WhatsApp CTA to appear
4. Switch back to visual mode
5. Save the blog post

## Current Automatic Placement:

The WhatsApp CTA is currently set to automatically appear:
- **Before the "Related Blogs" section** at the bottom of every blog post

This ensures it appears on all blog posts without needing to manually add it each time.
