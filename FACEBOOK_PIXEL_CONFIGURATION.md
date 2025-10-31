# Facebook Pixel Event Configuration Guide

## Multiple Tracking Methods Implemented

Your registration form now uses **3 different tracking approaches** that work together:

---

## ✅ **APPROACH 1: URL-Based Tracking (RECOMMENDED FOR EVENT SETUP TOOL)**

### How it works:
- When registration succeeds, the URL changes to: `/events/register-now?event=EVENT_SLUG&registered=success`
- Facebook Pixel tracks this as a PageView
- Event Setup Tool can easily detect URL pattern changes

### How to configure in Event Setup Tool:
1. Open Facebook Events Manager → Event Setup Tool
2. Click "Add Events" → "From a new website URL"
3. Enter your website URL
4. **Instead of clicking buttons**, use URL tracking:
   - Click "Track URLs" tab
   - Match URL contains: `registered=success`
   - Event Type: `CompleteRegistration`
   - Add parameters:
     - content_name: `{{event}}` (from URL parameter)
5. Click "Verify" and test a registration

---

## ✅ **APPROACH 2: Button Attributes for Auto-Detection**

### Implemented attributes:
- `id="event-register-button"` - Unique identifier
- `class="fb-event-register"` - Facebook-specific class
- `data-fb-event="Lead"` - Event type marker
- `data-pixel-event="Lead"` - Alternative marker
- `data-event-name="{event title}"` - Event metadata
- `role="button"` - Accessibility + detection
- `aria-label="Register for event"` - Screen reader + detection

### How to configure in Event Setup Tool:
1. Open Event Setup Tool
2. Click on the page with registration form
3. Look for the orange "Register Now" button
4. It should now be highlightable with these attributes
5. Click the button and select "Track Event"
6. Choose event type: `Lead` or `CompleteRegistration`

---

## ✅ **APPROACH 3: Standard Event Tracking (Already Working)**

### What's tracked:
- ✓ `CompleteRegistration` event on successful form submission
- ✓ Includes event metadata (name, value, currency)
- ✓ `PageView` on registration success

### Status:
**Already working** - You'll see these events in Facebook Events Manager under "Test Events" or "Recent Events"

The warning "unverified event" means you need to verify using Approach 1 or 2 above.

---

## 📋 **STEP-BY-STEP: Configure Using URL Tracking (Easiest)**

1. **Open Facebook Business Manager**
   - Go to Events Manager
   - Select your Pixel (ID: 1131878482257088)

2. **Click "Add Events" → "From the Pixel"**

3. **Choose "URL-based" tracking**:
   - Select "Equals" or "Contains"
   - URL pattern: `/events/register-now?registered=success`
   - Event Name: `CompleteRegistration`

4. **Add Parameters** (Optional but recommended):
   - Parameter: `content_name`
   - Value: Use URL parameter `event` or set to "Event Registration"

5. **Click "Confirm"**

6. **Test**: 
   - Complete a test registration on your site
   - Check Events Manager → Test Events
   - You should see `CompleteRegistration` event

---

## 🔧 **Alternative: Manual Configuration in Events Manager**

If Event Setup Tool doesn't work:

1. Go to Events Manager → Data Sources → Your Pixel
2. Click "Settings" → "Event Setup Tool"
3. Skip auto-detection
4. Manually add event:
   - Event Name: `CompleteRegistration`
   - Trigger: URL contains `registered=success`
   - OR CSS Selector: `#event-register-button`

---

## 🎯 **What Each Button Tracks:**

### "Register Now" Button on Event Details Page:
- Links to registration form page
- No tracking (just navigation)

### "Register Now" Submit Button on Registration Form:
- `Lead` event (when form is valid and submitted)
- `PageView` event (URL changes to include `?registered=success`)
- `CompleteRegistration` event (on successful API response)

---

## 📊 **How to Verify It's Working:**

1. **Facebook Pixel Helper Extension**:
   - Install Chrome extension
   - Visit registration page
   - Complete a registration
   - Should see:
     - PageView (on success)
     - CompleteRegistration

2. **Events Manager**:
   - Go to Events Manager → Test Events
   - Complete a test registration
   - Should see events appear in real-time

3. **Check for "Unverified" Warning**:
   - If still unverified, use Approach 1 (URL tracking)
   - This verifies the event automatically

---

## 💡 **Why This Works:**

1. **URL Tracking** = Event Setup Tool can see URL changes
2. **Button Attributes** = Auto-detection can find buttons in DOM
3. **Standard Events** = Tracking code fires correctly

The combination ensures maximum compatibility with Facebook's tracking tools.

---

## 🚨 **Troubleshooting:**

**Q: Event Setup Tool still can't find the button?**
→ Use URL-based tracking (Approach 1) instead

**Q: Events show as "unverified"?**
→ Configure verification in Events Manager using URL pattern

**Q: No events appearing?**
→ Check Facebook Pixel Helper to confirm pixel is loaded
→ Check browser console for errors
→ Verify Pixel ID: 1131878482257088

**Q: Want to track other events?**
→ Use same pattern: Change URL on success, track PageView + custom event

---

## 📞 **Your Pixel ID:** 1131878482257088

Use this when configuring events in Facebook Business Manager.
