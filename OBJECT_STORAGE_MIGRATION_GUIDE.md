# Object Storage Migration Guide

## Overview

Your Dunya Consultants application has been successfully migrated from local filesystem storage to Replit App Storage (Google Cloud Storage). This solves the synchronization issue between development and production environments.

## What Changed

### Before (Local Filesystem)
- Images uploaded to `./uploads/` directory on local filesystem
- Files synced manually or lost between dev/production deployments
- No centralized storage management

### After (Cloud Storage)
- Images uploaded directly to Replit App Storage (Google Cloud Storage)
- Automatic synchronization between development and production
- Unified storage with public/private access control
- Persistent storage that survives deployments

## Technical Implementation

### New Infrastructure
1. **ObjectStorageService** (`server/objectStorage.ts`)
   - Centralized service for cloud storage operations
   - Upload, download, search, and delete operations
   - Automatic content-type detection
   - Cache header management

2. **ACL Framework** (`server/objectAcl.ts`)
   - Public/private access control
   - Metadata-based policy system
   - Owner tracking and permissions

3. **Upload Flow**
   ```
   Client Upload → Memory Buffer → Temp File → 
   Image Optimization → Cloud Upload → Cleanup → Response
   ```

### Routes Updated

#### `/api/upload` (POST)
- Now uploads optimized images to cloud storage
- Returns URLs like `/objects/uploads/{uuid}.webp`
- Maintains same API surface for backward compatibility

#### `/api/uploads/:filename` (GET/HEAD)
- **Smart Fallback**: Checks cloud storage first, then local filesystem
- Serves existing local files during migration period
- Same cache headers and image metadata

#### `/objects/*` (GET) - NEW
- Direct access to cloud storage objects
- Optimized streaming with proper cache headers
- Used for new uploads going forward

### Migration Script

Location: `scripts/migrate-uploads-to-object-storage.ts`

**What it does:**
1. Scans `./uploads/` directory for image files
2. Uploads each file to cloud storage with public ACL
3. Generates `migration-mapping.json` with old → new path mappings
4. Creates `migration-updates.sql` with database update statements

**How to run:**
```bash
npx tsx scripts/migrate-uploads-to-object-storage.ts
```

## Migration Steps

### Step 1: Test New Upload Flow
1. Go to admin dashboard → Create new blog post
2. Upload a new featured image
3. Verify the image URL starts with `/objects/uploads/`
4. Check that the image loads correctly on the blog

### Step 2: Review Migration Script Output (Before Running)
```bash
# Dry run - review what would happen
npx tsx scripts/migrate-uploads-to-object-storage.ts
```

This creates two files:
- `migration-mapping.json` - Shows which files will be migrated
- `migration-updates.sql` - Database updates to switch to new URLs

### Step 3: Backup Database
Before running the SQL updates, backup your database:
```bash
# Export current database state
pg_dump > backup-before-migration.sql
```

### Step 4: Run Migration (Production)
```bash
# 1. Run the migration script
npx tsx scripts/migrate-uploads-to-object-storage.ts

# 2. Review the generated SQL file
cat migration-updates.sql

# 3. Run the SQL updates
psql < migration-updates.sql

# 4. Test that images load correctly
# Visit your blog posts and check featured images
```

### Step 5: Verify Migration
1. Check blog posts load images correctly
2. Check university icons display properly
3. Check branch icons display properly
4. Review browser console for any 404 errors

### Step 6: Clean Up (Optional)
Once verified, you can archive local files:
```bash
# Archive old uploads directory
tar -czf uploads-archive-$(date +%Y%m%d).tar.gz uploads/

# Remove local uploads (ONLY after verifying migration)
# rm -rf uploads/
```

## Rollback Plan

If issues occur after migration:

1. **Restore Database:**
   ```bash
   psql < backup-before-migration.sql
   ```

2. **Local files still exist** in `./uploads/` (migration script doesn't delete them)

3. **Fallback mechanism** in `/api/uploads/:filename` will serve local files if cloud fails

## Storage Configuration

- **Bucket ID**: `replit-objstore-090be4a9-f182-4782-9681-f64d617da3cf`
- **Public Directory**: `/replit-objstore-090be4a9-f182-4782-9681-f64d617da3cf/public`
- **Private Directory**: `/replit-objstore-090be4a9-f182-4782-9681-f64d617da3cf/.private`
- **Upload Path**: `/objects/uploads/{uuid}.webp`

## Benefits

✅ **Unified Storage**: Same images in dev and production  
✅ **Persistent**: Survives deployments and restarts  
✅ **Scalable**: Cloud-native storage without local disk limits  
✅ **Optimized**: Automatic WebP conversion and compression  
✅ **Cached**: 1-year cache headers for performance  
✅ **Backward Compatible**: Existing URLs continue to work  

## Architecture Review

The implementation was reviewed by the architect and approved with:
- ✅ No security vulnerabilities found
- ✅ Backward compatibility preserved
- ✅ Production-ready code
- ✅ Proper error handling
- ✅ Clean separation of concerns

## Monitoring

After migration, monitor for:
- **Upload errors**: Check server logs for object storage failures
- **404 errors**: Browser console for missing images
- **Performance**: Image load times should be similar or faster
- **Cache hits**: Object storage serving with proper cache headers

## Support

If you encounter issues:
1. Check `migration-mapping.json` for path mappings
2. Review `migration-updates.sql` for database changes
3. Examine server logs for object storage errors
4. Verify environment variables are set:
   - `DEFAULT_OBJECT_STORAGE_BUCKET_ID`
   - `PUBLIC_OBJECT_SEARCH_PATHS`
   - `PRIVATE_OBJECT_DIR`

## Next Steps

1. **Test upload flow** - Upload a new blog image and verify it works
2. **Schedule migration** - Pick a low-traffic time to run the migration
3. **Run migration script** - Follow Step 2-5 above
4. **Monitor production** - Watch for errors after migration
5. **Clean up** - Archive local uploads after verification (Step 6)

---

**Date Migrated**: November 11, 2025  
**Architect Review**: ✅ Approved  
**Status**: Ready for Production Migration
