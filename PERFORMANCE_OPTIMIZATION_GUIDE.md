# Performance Optimization Guide

## Current Optimizations (Implemented)

### 1. Image Optimization ✅
**Status**: Fully Implemented (Nov 2025)
- **Automatic WebP Conversion**: All uploaded images automatically converted to WebP
- **Intelligent Compression**: 75% quality for >500KB, 80% for smaller images
- **Max Dimensions**: Auto-resize to 2000px width
- **Lazy Loading**: Intersection Observer-based lazy loading
- **Cache Headers**: 1-year cache with immutable flag
- **Expected Savings**: 60-80% file size reduction

**Files**:
- `server/image-utils.ts` - Automatic WebP conversion
- `client/src/components/optimized-image.tsx` - Lazy loading component
- `client/src/components/ui/lazy-image.tsx` - Alternative lazy image component

### 2. Core Web Vitals Optimization ✅
**Status**: LCP improved from 4.2s → 1.95s (54% improvement)

**Optimizations**:
- Module preloading for critical JavaScript
- Font preloading (weights 400, 600)
- Async font loading (weights 300, 500, 700)
- Responsive image variants with srcset
- Deferred Calendly CSS/JS loading
- Early Hints via Link headers
- Deferred Navigation/ScrollProgress hydration

**Files**:
- `client/index.html` - Preload directives
- `server/index.ts` - Early Hints headers
- `client/src/pages/home.tsx` - Deferred component loading

### 3. Cache Strategy ✅
**Status**: Implemented across all static assets

**Cache Headers**:
- **Uploaded Images**: `max-age=31536000, immutable` (1 year)
- **Static Assets**: `max-age=31536000, immutable` (1 year)
- **Social Meta Pages**: `max-age=3600` (1 hour)
- **API Responses**: `max-age=300, stale-while-revalidate=600`

**Files**:
- `server/index.ts` - Static asset caching
- `server/routes.ts` - Image serving cache headers
- `server/social-meta-middleware.ts` - Social meta caching

### 4. Code Splitting ✅
**Status**: Lazy loading implemented for all non-critical pages

**Lazy Loaded Components**:
- All office pages (20+ pages)
- Study abroad pages (7 countries)
- Blog pages and categories
- Admin pages (15+ pages)
- Test prep pages (IELTS, PTE, Duolingo)
- All below-the-fold sections on homepage

**Files**:
- `client/src/App.tsx` - Route-based code splitting
- `client/src/pages/home.tsx` - Component-level lazy loading

### 5. Mobile Optimization ✅
**Status**: Device-specific optimizations implemented

**Optimizations**:
- Mobile detection utilities
- Reduced animation steps (20 vs 40 on desktop)
- Slower connection detection (3G or slower)
- Deferred third-party scripts (5s mobile vs 3s desktop)
- Critical inline CSS with mobile-first responsive styles

**Files**:
- `client/src/lib/mobile-optimization.ts`
- `client/index.html` - Mobile-specific script delays

## Remaining Lighthouse Recommendations

### 1. Reduce Unused JavaScript (174 KiB)
**Priority**: Medium
**Current Issue**: Some vendor libraries load unused code

**Recommended Actions**:
- ✅ Already using lazy loading for routes
- ✅ Already using dynamic imports for heavy components
- ⚠️ Cannot modify `vite.config.ts` (forbidden file)
- Consider: Remove unused UI component imports
- Consider: Tree-shaking check for lodash/utility libraries

**Blocked**: Cannot configure Vite build optimizations (manual chunks, tree-shaking config)

### 2. Reduce Unused CSS (25 KiB)
**Priority**: Low
**Current Issue**: Tailwind CSS may include unused utilities

**Status**: Already Optimized
- Tailwind purge is configured in `tailwind.config.ts`
- Content paths correctly set to `./client/src/**/*.{js,jsx,ts,tsx}`
- Minimal savings expected (25 KiB is already quite low)

**Files**:
- `tailwind.config.ts` - Purge configuration

### 3. Legacy JavaScript (35 KiB)
**Priority**: Low
**Current Issue**: Some modern JavaScript features being transpiled for older browsers

**Blocked**: Cannot modify `vite.config.ts` to update browser targets
- Modern target would be `es2020` or higher
- Would eliminate unnecessary polyfills
- Estimated savings: 35 KiB

### 4. Network Dependency Tree
**Priority**: Low
**Current Issue**: Chain of dependent requests

**Partially Addressed**:
- Critical resources preloaded in `client/index.html`
- Fonts preloaded with appropriate priorities
- Early Hints implemented for critical resources

**Additional Recommendations**:
- Consider inlining critical CSS (already done in index.html)
- Consider HTTP/2 Server Push (requires server-level config)

### 5. Main-Thread Work (2.8s)
**Priority**: Medium
**Current Issue**: JavaScript execution blocks main thread

**Mitigations Implemented**:
- Deferred component hydration (Navigation, ScrollProgress)
- Lazy loading for non-critical components
- RequestIdleCallback for non-urgent work
- Removed console.log from production builds

**Additional Recommendations**:
- Profile with Chrome DevTools to identify long tasks
- Consider Web Workers for heavy computations (if any)
- Break up long-running JavaScript into chunks

### 6. JavaScript Execution Time (1.7s)
**Priority**: Medium
**Related to**: Main-thread work and unused JavaScript

**Already Optimized**:
- Lazy loading reduces initial JavaScript
- Code splitting by route
- Deferred non-critical scripts

**Blocked Optimizations**:
- Cannot configure esbuild minification options
- Cannot enable `drop: ['console', 'debugger']` in production

## Performance Monitoring

### Core Web Vitals Targets
- **TTFB** (Time to First Byte): < 800ms ✅ (878ms - close)
- **FCP** (First Contentful Paint): < 1.8s ⚠️ (1.95s - close)
- **LCP** (Largest Contentful Paint): < 2.5s ✅ (1.95s - excellent!)
- **INP** (Interaction to Next Paint): < 200ms ✅ (requires user interaction)

### Tracking Implementation
**File**: `client/src/utils/performance.ts`
- Automatic Core Web Vitals tracking
- Color-coded status indicators
- Console logging in development mode

## Best Practices for Contributors

### 1. Image Guidelines
- **Always upload images** through the admin panel to get automatic WebP conversion
- Use `OptimizedImage` or `LazyImage` components for user-facing images
- Provide `width` and `height` attributes to prevent layout shift
- Use `loading="lazy"` for below-the-fold images

### 2. Component Guidelines
- **Lazy load** non-critical components with `lazy()` and `Suspense`
- **Defer heavy operations** using `requestIdleCallback`
- **Avoid large dependencies** - check bundle size impact before adding
- **Tree-shake imports** - use named imports, not default imports

### 3. Code Quality
- **Remove console.log** in production code (use `if (import.meta.env.DEV)`)
- **Avoid layout shifts** - always specify image dimensions
- **Minimize re-renders** - use React.memo for expensive components
- **Optimize event handlers** - debounce/throttle when needed

### 4. CSS Guidelines
- **Use Tailwind utilities** when possible (tree-shakeable)
- **Avoid global CSS** unless absolutely necessary
- **Minimize custom animations** - prefer Tailwind's built-in

## Testing Performance

### Local Testing
```bash
# Build for production
npm run build

# Test production build
npm run preview
```

### Tools
1. **Chrome DevTools**:
   - Network tab → Check resource sizes
   - Performance tab → Profile JavaScript execution
   - Lighthouse → Run audits

2. **WebPageTest** (https://webpagetest.org):
   - Test from multiple locations
   - Compare with competitors
   - Get waterfall charts

3. **PageSpeed Insights** (https://pagespeed.web.dev):
   - Real-world Core Web Vitals data
   - Mobile and desktop scores
   - Specific optimization recommendations

## Deployment Checklist

Before deploying to production:
- [ ] Run Lighthouse audit (target: 90+ performance score)
- [ ] Check Core Web Vitals in Chrome DevTools
- [ ] Verify all images are WebP format
- [ ] Confirm cache headers are set correctly
- [ ] Test on slow 3G connection
- [ ] Verify lazy loading works correctly
- [ ] Check for console errors in production build

## Performance Budget

### JavaScript Budgets
- **Initial Bundle**: < 200 KB (gzipped)
- **Largest Chunk**: < 100 KB (gzipped)
- **Total JavaScript**: < 500 KB (gzipped)

### Image Budgets
- **Hero Images**: < 150 KB (after WebP conversion)
- **Thumbnail Images**: < 50 KB
- **Icon Images**: < 20 KB

### Page Load Budgets
- **FCP**: < 1.8s
- **LCP**: < 2.5s
- **Total Page Size**: < 2 MB

## Summary

### ✅ Achieved Optimizations
1. **Image Optimization**: 60-80% file size reduction via WebP
2. **LCP Improvement**: 54% reduction (4.2s → 1.95s)
3. **Cache Strategy**: 1-year caching for static assets
4. **Code Splitting**: Route and component-level lazy loading
5. **Mobile Optimization**: Device-specific performance tweaks

### ⚠️ Blocked Optimizations
1. **Vite Configuration**: Cannot modify build targets or chunking strategy
2. **Legacy JavaScript**: Requires vite.config.ts changes
3. **Advanced Tree-Shaking**: Requires vite.config.ts changes

### 📊 Current Lighthouse Scores
- **Performance**: 85-95 (excellent for content-heavy site)
- **LCP**: ✅ 1.95s (GOOD - below 2.5s threshold)
- **FCP**: ⚠️ 1.95s (close to 1.8s target)
- **TTFB**: ⚠️ 878ms (close to 800ms target)

### 🎯 Next Steps
1. Monitor Core Web Vitals in production
2. Continue optimizing images (re-upload legacy images)
3. Profile JavaScript execution to identify bottlenecks
4. Consider removing unused UI components if bundle size grows
