# GrandStay Hotels - Professional Booking Website

A fully responsive, professional hotel booking website built with HTML, CSS, and JavaScript.

## 📋 Overview

GrandStay Hotels is a modern, responsive hotel booking website featuring luxury accommodations with a clean, user-friendly interface. The website includes complete booking functionality, room selection, contact forms, and interactive elements.

## ✨ Features

### 🎨 Design & UI
- **Responsive Design**: Fully responsive layout that works on desktop, tablet, and mobile devices
- **Modern Aesthetic**: Clean, luxury-focused design with gold (#c19a6b) and navy blue (#1a3a5f) color scheme
- **Professional Typography**: Uses Montserrat for body text and Playfair Display for headings
- **Interactive Elements**: Hover effects, smooth transitions, and animations

### 💻 Functionality
- **Booking System**: Complete booking flow with date selection, guest count, and room type
- **Room Selection**: Interactive room cards with detailed information and pricing
- **Real-time Calculations**: Automatic calculation of stay duration and total cost
- **Modal Interface**: Professional booking modal with form validation
- **Contact Form**: Functional contact form with validation
- **Smooth Navigation**: Single-page navigation with smooth scrolling
- **Mobile Menu**: Hamburger menu for mobile devices

### 📱 Key Components
1. **Hero Section** - Full-screen banner with booking form
2. **Rooms & Suites** - Display of available accommodations
3. **Amenities** - Hotel facilities and services
4. **About Section** - Company information and statistics
5. **Contact Section** - Contact information and message form
6. **Footer** - Additional links and newsletter signup

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- Text editor for any modifications

### Installation

1. **Clone or download** the project files:
   ```
   task3.html  # Main HTML file
   style.css    # Stylesheet
   script.js    # JavaScript functionality
   ```

2. **Open the website**:
   - Double-click `task3.html` to open in your browser
   - Or serve through a local web server

### File Structure
```
project-directory/
│
├── task3.html          # Main HTML document
├── style.css           # All CSS styles
└── script.js           # All JavaScript functionality
```

## 🛠️ Usage

### Making a Booking
1. **Select Dates**: Choose check-in and check-out dates
2. **Choose Guests**: Select number of guests from dropdown
3. **Select Room Type**: Choose from Standard, Deluxe, Suite, or Presidential
4. **Click "Check Availability"**: Opens booking modal
5. **Complete Form**: Fill in personal details and confirm booking

### Room Features
- **Standard Room**: $159/night - 300 sq ft, 2 guests
- **Deluxe Room**: $229/night - 450 sq ft, 3 guests
- **Executive Suite**: $349/night - 650 sq ft, 4 guests
- **Presidential Suite**: $599/night - 1200 sq ft, 4 guests

### Responsive Breakpoints
- **Desktop**: 992px and above
- **Tablet**: 768px to 991px
- **Mobile**: 767px and below

## 🧩 Customization

### Changing Colors
Edit the CSS variables in `style.css`:
```css
/* Primary Colors */
#1a3a5f    /* Navy Blue - Primary color */
#c19a6b    /* Gold - Accent color */
```

### Adding New Rooms
Add room objects to the `rooms` array in `script.js`:
```javascript
{
    id: 5,
    name: "New Room Type",
    description: "Room description",
    price: 299,
    image: "image-url.jpg",
    size: "400 sq ft",
    guests: 3,
    beds: 2,
    features: ["Feature 1", "Feature 2"]
}
```

### Modifying Amenities
Edit the amenities grid in the HTML file or add more cards in the amenities section.

## 📞 Contact Information

The website includes pre-filled contact information:
- **Address**: 123 Luxury Avenue, Suite 100, New York, NY 10001
- **Phone**: +1 (555) 123-4567
- **Email**: reservations@grandstay.com
- **Hours**: 24/7 reservation desk

## 🔧 Browser Compatibility

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 📱 Performance Notes

- All external resources (fonts, icons) loaded from CDN
- Optimized images from Unsplash
- Minimal JavaScript with efficient DOM manipulation
- CSS animations for smooth transitions

## 📝 Development Notes

### JavaScript Features
- Form validation and submission handling
- Date calculations for booking duration
- Interactive modal system
- Toast notifications for user feedback
- Responsive navigation toggle

### CSS Features
- Flexbox and Grid layouts
- CSS transitions and animations
- Responsive design with media queries
- Custom form styling
- Print-friendly styles

## 🐛 Troubleshooting

### Common Issues

1. **Dates not showing correctly**
   - Ensure browser supports HTML5 date input
   - Check JavaScript console for errors

2. **Mobile menu not working**
   - Ensure JavaScript is enabled in browser
   - Check console for JavaScript errors

3. **Forms not submitting**
   - Check browser console for validation errors
   - Ensure all required fields are filled

### Debugging
Open browser developer tools (F12) to:
- Check JavaScript console for errors
- Inspect CSS styles
- Test responsive design

## 📄 License

This project is provided as a sample hotel booking website. Images are sourced from Unsplash with appropriate licensing. Fonts and icons are loaded from CDN services.

## 👏 Credits

- **Design**: Custom professional hotel booking design
- **Icons**: Font Awesome 6.4.0
- **Fonts**: Google Fonts (Montserrat, Playfair Display)
- **Images**: Unsplash (hotel and room photography)
- **Development**: Custom HTML, CSS, and JavaScript

## 🔮 Future Enhancements

Potential features to add:
- User authentication system
- Payment integration
- Room availability calendar
- Review and rating system
- Multi-language support
- Dark mode toggle
- Admin dashboard for room management

---

**Note**: This is a front-end demonstration. For a production environment, you would need:
- Backend server for data persistence
- Database for room inventory and bookings
- Payment gateway integration
- Email service for confirmations
- Security measures for user data

Enjoy using the GrandStay Hotels booking website! 🏨
