# 🚨 cPanel Troubleshooting Guide

## Step 1: Check Browser Console
1. Press **F12** to open developer tools
2. Go to **Console** tab
3. Look for any red error messages
4. Common errors to look for:
   - `Failed to load module`
   - `404 Not Found`
   - `MIME type errors`

## Step 2: Check Network Tab
1. In developer tools, go to **Network** tab
2. Refresh the page (F5)
3. Look for failed requests (red entries)
4. Check if JavaScript/CSS files are loading

## Step 3: Verify File Upload
**In cPanel File Manager, check:**
```
public_html/
├── index.html ✅
├── .htaccess ✅ (might be hidden - enable "Show Hidden Files")
├── assets/
│   ├── index-[hash].js ✅
│   ├── index-[hash].css ✅
│   └── other files...
├── src/ ❌ (should NOT be here in production)
└── favicon.svg ✅
```

## Step 4: Check File Permissions
- **Folders**: 755
- **Files**: 644
- **Especially check**: .htaccess file permissions

## Step 5: Test .htaccess
Create a simple test file:
```html
<!-- test.html -->
<h1>Test Page</h1>
<a href="/test-route">Test Route</a>
```
If clicking the link shows a 404, .htaccess isn't working.

## Step 6: Check Apache Modules
Contact your hosting provider to ensure these are enabled:
- `mod_rewrite` (for routing)
- `mod_mime` (for file types)
- `mod_headers` (for security headers)

## Step 7: Upload Verification Checklist
- [ ] All files from `dist/` folder uploaded
- [ ] .htaccess file uploaded (check hidden files)
- [ ] File permissions set correctly
- [ ] No `src/` folder in production
- [ ] index.html is in root directory

## Step 8: Emergency Fallback
If nothing works, try this minimal approach:

1. **Create simple index.html:**
```html
<!DOCTYPE html>
<html>
<head>
    <title>Test</title>
</head>
<body>
    <h1>Basic HTML Test</h1>
    <p>If you see this, hosting works.</p>
</body>
</html>
```

2. **If basic HTML works but React doesn't:**
   - Check JavaScript file paths in developer tools
   - Verify MIME types in .htaccess
   - Contact hosting support about JavaScript execution

## Common cPanel Hosting Issues:

### Issue 1: "Loading..." never disappears
**Cause**: JavaScript files not loading
**Check**: Network tab for failed JS requests

### Issue 2: 404 errors on page refresh
**Cause**: .htaccess not working
**Fix**: Ensure mod_rewrite is enabled

### Issue 3: Blank white page
**Cause**: JavaScript errors
**Check**: Console for error messages

### Issue 4: CSS not loading
**Cause**: MIME type issues
**Fix**: Verify .htaccess MIME types

## Contact Information:
If these steps don't resolve the issue:
- **Email**: hello@silahub.com
- **Check**: Browser console errors
- **Provide**: Screenshot of any error messages