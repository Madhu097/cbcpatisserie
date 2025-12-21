# Google Integration Guide for CBC Patisserie

This guide will help you integrate Google Maps and Google Reviews into your CBC Patisserie website.

## 📍 Google Maps Integration

### Step 1: Find Your Business Location

1. Go to [Google Maps](https://www.google.com/maps)
2. Search for "CBC Patisserie" or your exact business address
3. Once you find your location, click on it

### Step 2: Get the Embed Code

1. Click the **"Share"** button
2. Select the **"Embed a map"** tab
3. Choose your preferred size:
   - Small (400px)
   - Medium (600px)
   - Large (800px)
   - **Custom** (recommended: 100% width, 450px height)
4. Copy the `<iframe>` code

### Step 3: Replace in Your Website

Open `index.html` and find this section (around line 380):

```html
<!-- Google Maps Embed - Replace with actual location -->
<iframe 
    src="https://www.google.com/maps/embed?pb=..." 
    width="100%" 
    height="450" 
    style="border:0;" 
    allowfullscreen="" 
    loading="lazy" 
    referrerpolicy="no-referrer-when-downgrade">
</iframe>
```

Replace the entire `<iframe>` tag with your copied code.

### Example:
```html
<iframe 
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.YOUR_ACTUAL_COORDINATES" 
    width="100%" 
    height="450" 
    style="border:0;" 
    allowfullscreen="" 
    loading="lazy" 
    referrerpolicy="no-referrer-when-downgrade">
</iframe>
```

---

## ⭐ Google Reviews Integration

You have **three options** for displaying Google Reviews:

### Option 1: Manual Reviews (Current - Easiest)

**Pros:** No API needed, full control over design
**Cons:** Must update manually

**How to Update:**

1. Go to your Google Business Profile
2. Copy your best reviews
3. Update the review cards in `index.html` (around line 330)

```html
<div class="review-card">
    <div class="review-stars">
        <!-- Add 5 stars for 5-star review, 4 for 4-star, etc. -->
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
        <i class="fas fa-star"></i>
    </div>
    <p class="review-text">"YOUR ACTUAL REVIEW TEXT HERE"</p>
    <div class="review-author">
        <div class="author-avatar">
            <i class="fas fa-user"></i>
        </div>
        <div class="author-info">
            <h4>Customer Name</h4>
            <p>Google Review</p>
        </div>
    </div>
</div>
```

### Option 2: Google Reviews Widget (Recommended)

**Pros:** Automatic updates, official Google widget
**Cons:** Limited styling options

**Steps:**

1. Visit [Google Reviews Widget Generator](https://www.google.com/business/)
2. Sign in with your Google Business account
3. Generate the widget code
4. Replace the entire reviews section with the widget

**Alternative Tools:**
- [EmbedSocial](https://embedsocial.com/products/reviews/)
- [Elfsight](https://elfsight.com/google-reviews-widget/)
- [Taggbox](https://taggbox.com/widget/google-reviews/)

### Option 3: Google Places API (Advanced)

**Pros:** Full control, automatic updates, custom design
**Cons:** Requires API key, coding knowledge, may have costs

**Steps:**

#### 1. Get Google Places API Key

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing
3. Enable "Places API"
4. Create credentials (API Key)
5. Restrict your API key (important for security):
   - Application restrictions: HTTP referrers
   - Add your website URL
   - API restrictions: Places API only

#### 2. Add API Script to Your Website

Add this before the closing `</body>` tag in `index.html`:

```html
<script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places"></script>
```

#### 3. Update JavaScript

Replace the `fetchGoogleReviews()` function in `script.js` with:

```javascript
async function fetchGoogleReviews() {
    const placeId = 'YOUR_GOOGLE_PLACE_ID'; // Get this from Google
    
    const service = new google.maps.places.PlacesService(
        document.createElement('div')
    );
    
    service.getDetails({
        placeId: placeId,
        fields: ['reviews', 'rating', 'user_ratings_total']
    }, (place, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            displayReviews(place.reviews);
        }
    });
}

function displayReviews(reviews) {
    const container = document.querySelector('.reviews-container');
    container.innerHTML = ''; // Clear existing reviews
    
    // Show top 3 reviews
    reviews.slice(0, 3).forEach(review => {
        const stars = '★'.repeat(review.rating) + '☆'.repeat(5 - review.rating);
        
        const reviewCard = `
            <div class="review-card">
                <div class="review-stars">
                    ${stars}
                </div>
                <p class="review-text">"${review.text}"</p>
                <div class="review-author">
                    <div class="author-avatar">
                        <img src="${review.profile_photo_url}" alt="${review.author_name}">
                    </div>
                    <div class="author-info">
                        <h4>${review.author_name}</h4>
                        <p>Google Review</p>
                    </div>
                </div>
            </div>
        `;
        
        container.innerHTML += reviewCard;
    });
}

// Call on page load
window.addEventListener('load', fetchGoogleReviews);
```

#### 4. Find Your Google Place ID

**Method 1: Using Place ID Finder**
1. Go to [Place ID Finder](https://developers.google.com/maps/documentation/javascript/examples/places-placeid-finder)
2. Search for your business
3. Copy the Place ID

**Method 2: From Google Maps URL**
1. Find your business on Google Maps
2. Look at the URL: `https://www.google.com/maps/place/...`
3. The Place ID is in the URL parameters

---

## 🔗 Update Google Reviews Link

Find this code in `index.html` (around line 365):

```html
<a href="#" class="btn btn-outline" target="_blank" rel="noopener">
    <i class="fab fa-google"></i> View All Google Reviews
</a>
```

Replace `#` with your actual Google Reviews URL:

**How to Get Your Reviews URL:**
1. Search for your business on Google
2. Click on your business listing
3. Scroll to reviews section
4. Click "See all reviews"
5. Copy the URL from your browser

**Example:**
```html
<a href="https://www.google.com/maps/place/CBC+Patisserie/@12.345,-67.890,17z/data=..." 
   class="btn btn-outline" 
   target="_blank" 
   rel="noopener">
    <i class="fab fa-google"></i> View All Google Reviews
</a>
```

---

## 📱 Update Contact Information

### Phone Number

Find and replace `+1 (234) 567-890` with your actual number:

```html
<p><a href="tel:+1234567890">+1 (234) 567-890</a></p>
```

**Format:** Use international format without spaces in `href`:
- Display: `+1 (234) 567-890`
- Link: `tel:+11234567890`

### Email

Replace `info@cbcpatisserie.com`:

```html
<p><a href="mailto:info@cbcpatisserie.com">info@cbcpatisserie.com</a></p>
```

### WhatsApp

Replace the WhatsApp number in the link:

```html
<p><a href="https://wa.me/1234567890" target="_blank">Chat with us</a></p>
```

**Format:** Use country code + number without + or spaces:
- India: `https://wa.me/919876543210`
- US: `https://wa.me/11234567890`

**Add Custom Message (Optional):**
```html
<a href="https://wa.me/919876543210?text=Hi!%20I%20would%20like%20to%20know%20more%20about%20CBC%20Patisserie">
```

---

## 🏢 Update Business Address

Find the address section (around line 390):

```html
<div class="info-text">
    <h3>Address</h3>
    <p>123 Bakery Street, City Name<br>State, Postal Code</p>
</div>
```

Replace with your actual address:

```html
<div class="info-text">
    <h3>Address</h3>
    <p>Your Street Address<br>City, State PIN Code</p>
</div>
```

---

## ⏰ Update Opening Hours

Find the opening hours section:

```html
<div class="info-text">
    <h3>Opening Hours</h3>
    <p>Mon - Sat: 7:00 AM - 8:00 PM<br>Sunday: 8:00 AM - 6:00 PM</p>
</div>
```

Update with your actual hours:

```html
<div class="info-text">
    <h3>Opening Hours</h3>
    <p>Monday - Friday: 8:00 AM - 9:00 PM<br>
       Saturday - Sunday: 9:00 AM - 10:00 PM<br>
       <small style="color: var(--primary-color);">Closed on Public Holidays</small>
    </p>
</div>
```

---

## 🎨 Styling Tips

### Change Star Color

In `styles.css`, find:

```css
.review-stars i {
    color: #FFB800;
}
```

Change to your preferred color (e.g., `#FFA500` for orange, `#FFD700` for gold).

### Adjust Review Card Layout

To show 2 reviews per row instead of 3:

```css
.reviews-container {
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
}
```

To show 4 reviews:

```css
.reviews-container {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}
```

---

## ✅ Testing Checklist

After making changes:

- [ ] Google Maps loads correctly
- [ ] Map shows correct location
- [ ] "Get Directions" button works
- [ ] Reviews display properly
- [ ] Star ratings show correctly
- [ ] Phone number is clickable (mobile)
- [ ] Email opens mail client
- [ ] WhatsApp link works
- [ ] Address is accurate
- [ ] Opening hours are correct
- [ ] All links open in new tab (where appropriate)

---

## 🆘 Troubleshooting

### Google Maps Not Showing

**Problem:** Gray box instead of map
**Solution:** 
- Check if iframe code is complete
- Verify internet connection
- Check browser console for errors

### Reviews Not Loading (API Method)

**Problem:** Reviews don't appear
**Solution:**
- Verify API key is correct
- Check if Places API is enabled
- Ensure Place ID is correct
- Check browser console for errors
- Verify API key restrictions

### Phone/WhatsApp Links Not Working

**Problem:** Links don't open phone/WhatsApp
**Solution:**
- Check number format (no spaces in href)
- Test on mobile device
- Verify WhatsApp is installed

---

## 📊 Analytics (Optional)

Track clicks on important elements:

Add to `script.js`:

```javascript
// Track phone clicks
document.querySelectorAll('a[href^="tel:"]').forEach(link => {
    link.addEventListener('click', () => {
        console.log('Phone number clicked');
        // Add Google Analytics event here
    });
});

// Track WhatsApp clicks
document.querySelectorAll('a[href*="wa.me"]').forEach(link => {
    link.addEventListener('click', () => {
        console.log('WhatsApp clicked');
        // Add Google Analytics event here
    });
});

// Track directions clicks
document.querySelectorAll('a[href*="#location"], a[href*="maps"]').forEach(link => {
    link.addEventListener('click', () => {
        console.log('Directions clicked');
        // Add Google Analytics event here
    });
});
```

---

## 🎯 Next Steps

1. ✅ Update Google Maps embed
2. ✅ Choose and implement reviews method
3. ✅ Update all contact information
4. ✅ Update address and hours
5. ✅ Test all links and integrations
6. ✅ Deploy website
7. ✅ Monitor and update reviews regularly

---

**Need Help?**

- Google Maps Help: https://support.google.com/maps
- Google My Business: https://support.google.com/business
- Places API Docs: https://developers.google.com/maps/documentation/places

---

**Made with ❤️ for CBC Patisserie**
