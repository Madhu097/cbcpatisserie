# Hero Video Guide for CBC Patisserie

## Video Requirements

To add a video to your hero section, you'll need a video file with the following specifications:

### Recommended Specifications:
- **Format**: MP4 (H.264 codec)
- **Resolution**: 1920x1080 (Full HD) or higher
- **Aspect Ratio**: 16:9
- **Duration**: 10-30 seconds (it will loop)
- **File Size**: Keep under 5MB for fast loading
- **Frame Rate**: 30fps or 60fps

### Content Suggestions:
The video should showcase your patisserie in an appealing way:
- Overhead shots of fresh pastries, cakes, and coffee
- Close-ups of coffee being poured or latte art
- Slow-motion shots of croissants, macarons, or other baked goods
- Warm, inviting café atmosphere
- Soft, natural lighting

## Where to Get Videos

### Option 1: Free Stock Videos
Download free videos from these sites:
1. **Pexels Videos** - https://www.pexels.com/videos/
   - Search for: "coffee shop", "bakery", "pastry", "café"
   
2. **Pixabay Videos** - https://pixabay.com/videos/
   - Search for: "patisserie", "coffee", "bakery"
   
3. **Coverr** - https://coverr.co/
   - Browse food and café categories

### Option 2: Create Your Own
- Film your own patisserie with a smartphone
- Use good lighting (natural light works best)
- Keep the camera steady or use a tripod
- Film in landscape orientation

## How to Add the Video

1. **Download or create your video**
2. **Name the file**: `hero-video.mp4`
3. **Place it in your website folder**: 
   ```
   c:\Users\kuruv\OneDrive\Desktop\cbc website\hero-video.mp4
   ```
4. The video is already configured in your HTML and CSS!

## Optimization Tips

### Compress Your Video:
If your video is too large, compress it using:
- **Online**: https://www.freeconvert.com/video-compressor
- **Desktop**: HandBrake (free software)

### Target Settings for Compression:
- Resolution: 1920x1080
- Bitrate: 2000-3000 kbps
- Format: MP4 (H.264)

## Fallback

If you don't have a video yet, the website will display the beautiful gradient background that's already configured. The gradient will show until you add a video file.

## Testing

After adding your video:
1. Open `index.html` in your browser
2. The video should autoplay and loop
3. It should be muted by default
4. The text should be clearly visible over the video

## Troubleshooting

**Video not playing?**
- Check the file name is exactly `hero-video.mp4`
- Check the file is in the correct folder
- Try a different browser
- Check the video codec is H.264

**Video too dark/bright?**
- Adjust the overlay opacity in `styles.css` (line 393)
- Change `rgba(0, 0, 0, 0.5)` - increase the last number for darker, decrease for lighter

**Text not readable?**
- Increase the overlay darkness (see above)
- The current setting is 0.5 (50% dark)
