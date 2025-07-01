# cPanel Deployment Guide for React SPA

## 🚨 Common Issues & Solutions

### 1. **Blank Pages (Most Common)**
**Cause**: React Router + Apache configuration
**Solution**: Proper `.htaccess` file (already included)

### 2. **JavaScript Not Loading**
**Cause**: MIME types not configured
**Solution**: Added MIME types to `.htaccess`

### 3. **CSP Blocking Resources**
**Cause**: Strict Content Security Policy
**Solution**: Relaxed CSP for cPanel hosting

### 4. **Routing Issues**
**Cause**: Server not handling SPA routes
**Solution**: Changed to HashRouter + proper rewrites

## 📋 Deployment Checklist

### Step 1: Build the Project
```bash
npm run build
```

### Step 2: Upload Files to cPanel
1. **Upload ALL files** from `dist/` folder to your domain's `public_html` directory
2. **Make sure** `.htaccess` file is uploaded (it might be hidden)
3. **Verify** folder structure:
   ```
   public_html/
   ├── index.html
   ├── .htaccess
   ├── assets/
   │   ├── *.js files
   │   ├── *.css files
   │   └── images/
   └── other files...
   ```

### Step 3: Set File Permissions
- **Folders**: 755
- **Files**: 644
- **.htaccess**: 644

### Step 4: Test the Website
1. Visit your domain
2. Check browser console for errors (F12)
3. Test navigation between pages
4. Verify all assets load properly

## 🔧 Troubleshooting Commands

### Check if files uploaded correctly:
```bash
# In cPanel File Manager, verify:
ls -la public_html/
```

### Common cPanel Issues:

#### Issue 1: "File not found" errors
```bash
# Solution: Check file paths in index.html
# Make sure all assets use relative paths
```

#### Issue 2: CSS/JS not loading
```bash
# Solution: Verify MIME types in .htaccess
# Check file permissions are correct
```

#### Issue 3: Routing not working
```bash
# Solution: Verify .htaccess uploaded
# Check Apache mod_rewrite is enabled
```

## 📞 If Still Having Issues:

1. **Check Browser Console** (F12 → Console tab)
2. **Check Network Tab** (F12 → Network tab)
3. **Contact cPanel Support** if Apache modules are disabled
4. **Test with a simple HTML file** first to verify hosting works

## 🎯 Key Differences from Netlify:

| Feature | Netlify | cPanel |
|---------|---------|---------|
| Routing | Automatic | Needs .htaccess |
| HTTPS | Auto | May need setup |
| Build | Automatic | Manual upload |
| CSP | Flexible | Often restrictive |
| Node.js | Supported | Usually not |

## ✅ Success Indicators:

- ✅ Homepage loads without errors
- ✅ Navigation works (URLs change)
- ✅ No console errors
- ✅ All images/fonts load
- ✅ Forms submit properly

## 🆘 Emergency Fallback:

If nothing works, try this minimal approach:
1. Upload just `index.html` and `assets/` folder
2. Use this simple `.htaccess`:
   ```apache
   RewriteEngine On
   RewriteRule ^(?!assets/).*$ /index.html [L]
   ```