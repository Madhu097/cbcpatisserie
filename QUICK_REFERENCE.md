# CBC Patisserie Website - Quick Reference Card

## 📞 Contact Information to Update

| Item | Current Value | Location in Code | Line # (approx) |
|------|---------------|------------------|-----------------|
| **Phone** | +1 (234) 567-890 | index.html | ~420 |
| **Email** | info@cbcpatisserie.com | index.html | ~428 |
| **WhatsApp** | 1234567890 | index.html | ~436 |
| **Address** | 123 Bakery Street | index.html | ~395 |
| **Hours** | Mon-Sat: 7AM-8PM | index.html | ~405 |

## 🗺️ Google Maps

**Current:** Placeholder (Empire State Building)
**To Update:** Replace `<iframe>` tag at line ~380 in index.html

**Quick Steps:**
1. Google Maps → Search your business
2. Share → Embed a map
3. Copy iframe code
4. Paste in index.html

## ⭐ Google Reviews

**Current:** 3 manual review cards
**Location:** index.html, lines ~330-365

**Update Options:**
- **Easy:** Edit existing review cards manually
- **Medium:** Use Google Reviews widget
- **Advanced:** Implement Places API (see INTEGRATION_GUIDE.md)

## 🍽️ Menu Items

**Location:** index.html, lines ~180-300
**Categories:**
- Coffee & Beverages (id="coffee")
- Cakes & Pastries (id="cakes")
- Bakery Items (id="bakery")
- Confectionery & Desserts (id="desserts")

**To Add Item:**
```html
<div class="menu-item">
    <div class="menu-item-icon">🍰</div>
    <h3>Item Name</h3>
    <p>Description</p>
</div>
```

## 🖼️ Gallery Images

**Location:** script.js, lines ~50-75
**Current:** 6 placeholder items

**To Add Real Images:**
1. Add images to a folder (e.g., `images/`)
2. Update `galleryImages` array in script.js
3. Modify gallery generation code

## 🎨 Colors

**Location:** styles.css, lines ~5-20

| Color Variable | Current Value | Usage |
|----------------|---------------|-------|
| --primary-color | #8B4513 | Main brown |
| --secondary-color | #D4A574 | Light brown |
| --accent-color | #E8C4A0 | Cream |

## 🔗 Social Media Links

**Location:** index.html, lines ~450-460

```html
<a href="https://facebook.com/yourpage">Facebook</a>
<a href="https://instagram.com/yourpage">Instagram</a>
<a href="https://twitter.com/yourpage">Twitter</a>
```

## 📱 Important Files

| File | Purpose | Edit Frequency |
|------|---------|----------------|
| index.html | Main content | Often |
| styles.css | Design/colors | Rarely |
| script.js | Functionality | Rarely |
| README.md | Documentation | Never |
| INTEGRATION_GUIDE.md | Setup help | Never |

## 🚀 Quick Deploy

**Local Testing:**
```bash
# Open directly
Double-click index.html

# OR use local server
python -m http.server 8000
```

**Online Hosting:**
- **Free:** Netlify, Vercel, GitHub Pages
- **Paid:** Any web hosting (upload via FTP)

## ✅ Pre-Launch Checklist

- [ ] Update phone number
- [ ] Update email address
- [ ] Update WhatsApp number
- [ ] Update physical address
- [ ] Update opening hours
- [ ] Add Google Maps embed
- [ ] Add/update reviews
- [ ] Update menu items
- [ ] Add real gallery images
- [ ] Update social media links
- [ ] Test on mobile
- [ ] Test all links
- [ ] Check spelling/grammar

## 🔍 Common Edits

### Change Business Name
**Find:** "CBC Patisserie" (appears ~15 times)
**Replace:** Your business name
**Files:** index.html, README.md

### Change Tagline
**Find:** "Baked with Love, Brewed with Care"
**Replace:** Your tagline
**Location:** index.html (lines ~60, ~470)

### Add Logo Image
**Add to HTML:**
```html
<div class="logo">
    <img src="images/logo.png" alt="CBC Patisserie">
    <span>CBC Patisserie</span>
</div>
```

### Change Fonts
**Current:** Playfair Display + Inter
**Update:** Line ~15 in index.html (Google Fonts link)
**And:** Lines ~15-16 in styles.css (font variables)

## 📞 Support

**Documentation:**
- README.md - Full documentation
- INTEGRATION_GUIDE.md - Google integrations
- This file - Quick reference

**Browser Console:**
Press F12 to check for errors

**Test URLs:**
- Phone: tel:+1234567890
- Email: mailto:info@cbcpatisserie.com
- WhatsApp: https://wa.me/1234567890

## 💡 Pro Tips

1. **Always test locally** before deploying
2. **Keep backups** of working versions
3. **Test on mobile** - most users are mobile
4. **Optimize images** - compress before uploading
5. **Update reviews** regularly for freshness
6. **Monitor analytics** to see what works
7. **Check all links** after any update

## 🎯 Priority Updates

**High Priority (Do First):**
1. Google Maps location
2. Phone number
3. Address
4. Opening hours

**Medium Priority:**
5. Email address
6. WhatsApp number
7. Menu items
8. Reviews

**Low Priority:**
9. Gallery images
10. Social media links
11. Colors/fonts
12. Additional features

---

**Last Updated:** 2024
**Version:** 1.0
**For:** CBC Patisserie
