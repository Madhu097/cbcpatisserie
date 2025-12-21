# CBC Patisserie - Single Page Website

**Tagline:** Baked with Love, Brewed with Care

A beautiful, modern single-page website for CBC Patisserie - a premium café, bakery, and confectionery business.

## 🎨 Features

### Design & Aesthetics
- ✨ **Premium café-style UI** with warm color palette (coffee, brown, cream tones)
- 🎭 **Smooth animations** and micro-interactions throughout
- 📱 **Fully responsive** design (mobile, tablet, desktop)
- 🌊 **Glassmorphism effects** and modern design patterns
- 🎯 **Accessibility-focused** with ARIA labels and keyboard navigation

### Sections Included
1. **Hero Section** - Eye-catching introduction with CTA buttons
2. **About Us** - Brand story with feature cards
3. **Menu Showcase** - Interactive tabbed menu with 4 categories
4. **Gallery** - Visual showcase of products and ambience
5. **Testimonials** - Google Reviews integration
6. **Location & Map** - Google Maps embed with contact info
7. **Contact/CTA** - Multiple contact methods including WhatsApp

### Technical Features
- ⚡ **Fast loading** with optimized code
- 🔍 **SEO-friendly** structure with proper meta tags
- 🗺️ **Google Maps** integration
- ⭐ **Google Reviews** ready for integration
- 📝 **Easy-to-update** menu section
- 🖼️ **Lazy loading** support for images
- 🎯 **Smooth scrolling** navigation
- 📊 **Performance optimized** with debouncing

## 📁 File Structure

```
cbc-website/
│
├── index.html          # Main HTML file
├── styles.css          # All styling and animations
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## 🚀 Quick Start

### Option 1: Direct Opening
Simply open `index.html` in any modern web browser.

### Option 2: Local Server (Recommended)
For better performance and testing:

```bash
# Using Python
python -m http.server 8000

# Using Node.js (http-server)
npx http-server

# Using PHP
php -S localhost:8000
```

Then visit `http://localhost:8000` in your browser.

## 🛠️ Customization Guide

### 1. Update Business Information

#### Contact Details
Edit in `index.html`:
- **Phone Number**: Search for `+1 (234) 567-890` and replace
- **Email**: Search for `info@cbcpatisserie.com` and replace
- **WhatsApp**: Update the `wa.me/1234567890` link

#### Address & Location
1. Find the `<iframe>` tag in the Location section
2. Get your Google Maps embed code:
   - Go to [Google Maps](https://maps.google.com)
   - Search for your location
   - Click "Share" → "Embed a map"
   - Copy the iframe code
   - Replace the existing iframe

#### Opening Hours
Update the hours in the Location section's info card.

### 2. Add Real Images

#### Gallery Images
Replace the placeholder gallery items in `script.js`:

```javascript
const galleryImages = [
    {
        title: 'Fresh Coffee',
        category: 'beverages',
        imageUrl: 'path/to/your/image.jpg'  // Add this
    },
    // ... more images
];
```

Then update the gallery generation to use real images:
```javascript
galleryItem.innerHTML = `
    <img src="${image.imageUrl}" alt="${image.title}" loading="lazy">
    <div class="gallery-overlay">
        <i class="fas fa-search-plus"></i>
    </div>
`;
```

#### Hero Background
Add a background image to the hero section in `styles.css`:

```css
.hero {
    background-image: url('path/to/hero-image.jpg');
    background-size: cover;
    background-position: center;
}
```

### 3. Google Reviews Integration

#### Option A: Manual Reviews (Current)
Update the review cards in `index.html` with your actual Google reviews.

#### Option B: Automatic Integration
1. Get a Google Places API key
2. Add this script before closing `</body>`:
```html
<script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places"></script>
```
3. Implement the `fetchGoogleReviews()` function in `script.js`

#### Option C: Google Reviews Widget
Use the official Google Reviews widget:
1. Visit [Google Reviews Widget](https://www.google.com/business/)
2. Generate embed code for your business
3. Replace the reviews section

### 4. Update Menu Items

Edit the menu categories in `index.html`. Each category has this structure:

```html
<div class="menu-item">
    <div class="menu-item-icon">☕</div>
    <h3>Item Name</h3>
    <p>Item description</p>
</div>
```

You can also add prices:
```html
<div class="menu-item">
    <div class="menu-item-icon">☕</div>
    <h3>Espresso <span class="price">$3.50</span></h3>
    <p>Rich and bold Italian espresso</p>
</div>
```

Then add this CSS:
```css
.price {
    float: right;
    color: var(--primary-color);
    font-weight: 600;
}
```

### 5. Social Media Links

Update social media links in the Contact section:

```html
<a href="https://facebook.com/yourpage" class="social-link">
    <i class="fab fa-facebook-f"></i>
</a>
```

### 6. Color Customization

All colors are defined as CSS variables in `styles.css`. Update these:

```css
:root {
    --primary-color: #8B4513;      /* Main brown */
    --secondary-color: #D4A574;    /* Light brown */
    --accent-color: #E8C4A0;       /* Cream accent */
    /* ... more colors */
}
```

### 7. Fonts

Current fonts:
- **Headings**: Playfair Display (serif)
- **Body**: Inter (sans-serif)

To change fonts:
1. Visit [Google Fonts](https://fonts.google.com)
2. Select your fonts
3. Update the `<link>` tag in `index.html`
4. Update CSS variables:
```css
--font-heading: 'YourFont', serif;
--font-body: 'YourFont', sans-serif;
```

## 📱 Mobile Responsiveness

The website is fully responsive with breakpoints at:
- **Desktop**: 1200px+
- **Tablet**: 768px - 1199px
- **Mobile**: < 768px

Test on different devices or use browser DevTools.

## 🔧 Advanced Customization

### Add a Contact Form

Add this HTML in the Contact section:

```html
<form class="contact-form" id="contactForm">
    <input type="text" placeholder="Your Name" required>
    <input type="email" placeholder="Your Email" required>
    <textarea placeholder="Your Message" rows="5" required></textarea>
    <button type="submit" class="btn btn-primary">Send Message</button>
</form>
```

Add form styling in `styles.css` and handling in `script.js`.

### Add Online Ordering

Integrate with services like:
- **UberEats** - Add order button
- **DoorDash** - Embed menu
- **Custom Solution** - Build ordering system

### Analytics Integration

Add Google Analytics:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🌐 Deployment

### Option 1: GitHub Pages (Free)
1. Create a GitHub repository
2. Upload all files
3. Go to Settings → Pages
4. Select main branch
5. Your site will be at `username.github.io/repo-name`

### Option 2: Netlify (Free)
1. Visit [Netlify](https://netlify.com)
2. Drag and drop your folder
3. Get instant deployment
4. Custom domain available

### Option 3: Vercel (Free)
1. Visit [Vercel](https://vercel.com)
2. Import your project
3. Deploy with one click

### Option 4: Traditional Hosting
Upload files via FTP to any web hosting service:
- Hostinger
- Bluehost
- SiteGround
- GoDaddy

## 🎯 SEO Optimization

### Current SEO Features
- ✅ Semantic HTML5 structure
- ✅ Meta description
- ✅ Proper heading hierarchy
- ✅ Alt tags ready for images
- ✅ Fast loading times
- ✅ Mobile-friendly

### Additional SEO Steps
1. **Add Favicon**: Create and link a favicon.ico
2. **Open Graph Tags**: For social media sharing
3. **Schema Markup**: For rich search results
4. **Sitemap**: Create sitemap.xml
5. **Robots.txt**: Add robots.txt file

Example Open Graph tags:
```html
<meta property="og:title" content="CBC Patisserie - Baked with Love">
<meta property="og:description" content="Fresh bakery and coffee shop">
<meta property="og:image" content="path/to/share-image.jpg">
<meta property="og:url" content="https://yourwebsite.com">
```

## 📊 Performance Tips

1. **Optimize Images**:
   - Use WebP format
   - Compress images (TinyPNG, ImageOptim)
   - Use appropriate sizes

2. **Minify Code**:
   - Minify CSS and JS for production
   - Use tools like UglifyJS, CSSNano

3. **Enable Caching**:
   - Add cache headers in server config
   - Use CDN for static assets

4. **Lazy Loading**:
   - Already implemented for images
   - Add `loading="lazy"` to images

## 🐛 Troubleshooting

### Menu tabs not working
- Check browser console for errors
- Ensure script.js is loaded

### Google Maps not showing
- Verify iframe embed code
- Check internet connection

### Mobile menu not opening
- Clear browser cache
- Check JavaScript console

### Animations not smooth
- Test on different browsers
- Check device performance

## 📞 Support & Updates

For questions or customization help:
- Email: info@cbcpatisserie.com
- Review the code comments
- Check browser console for errors

## 📄 License

This website template is created for CBC Patisserie. All rights reserved.

## 🎉 Credits

- **Design & Development**: F1RSTLOOK Digital
- **Fonts**: Google Fonts (Playfair Display, Inter)
- **Icons**: Font Awesome
- **Client**: CBC Patisserie

---

**Made with ❤️ for CBC Patisserie**

*Baked with Love, Brewed with Care*
