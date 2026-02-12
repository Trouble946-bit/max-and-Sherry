# Max and Sherry - Complete Food Ordering System

A complete food ordering platform with website and mobile app (Trial Version).

## 🌟 Project Structure

```
grace-bites/
├── Website (Static)
│   ├── index.html
│   ├── gallery.html
│   ├── contact.html
│   ├── styles.css
│   └── script.js
├── backend/          # API Server
│   ├── server.js
│   ├── package.json
│   └── README.md
└── mobile-app/       # Android App
    ├── app/
    ├── services/
    ├── context/
    └── package.json
```

## 🚀 Quick Start

### 1. Backend Server

```bash
cd backend
npm install
npm start
```

Server runs on `http://localhost:3000`

### 2. Mobile App

```bash
cd mobile-app
npm install
npm start
```

Then:
- Press `a` for Android emulator
- Scan QR code with Expo Go app on physical device

### 3. Website

Simply open `index.html` in a browser or use:
```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx serve
```

## 📱 Features

### Website
✅ Home page with featured items
✅ Full gallery of menu items
✅ Contact page with form
✅ Responsive design
✅ Modern UI with gradients

### Mobile App
✅ Browse menu with images
✅ Add items to cart
✅ Adjust quantities
✅ Place orders with delivery info
✅ Track order status
✅ View order history
✅ Persistent cart (saved locally)

### Backend API
✅ RESTful API
✅ Menu management
✅ Order processing
✅ Customer order tracking
✅ In-memory storage (trial version)

## 🔗 Connecting Website & App

Both the website and mobile app use the same backend API:

**API Endpoints:**
- `GET /api/menu` - Get all menu items
- `POST /api/orders` - Place new order
- `GET /api/orders/:id` - Get order details
- `GET /api/orders/customer/:phone` - Get customer orders

## 💡 Trial Version Notes

This is a **trial version** with:
- ✅ Full functionality for testing
- ⚠️ In-memory data (resets on server restart)
- ⚠️ No database persistence
- ⚠️ No payment processing
- ⚠️ No user authentication

## 🔧 Configuration

### Mobile App API Connection

Edit `mobile-app/services/api.js`:

```javascript
// For Android Emulator
const API_BASE_URL = 'http://10.0.2.2:3000/api';

// For physical device (use your computer's IP)
const API_BASE_URL = 'http://192.168.1.100:3000/api';
```

### Find your IP address:

**Windows:**
```bash
ipconfig
```
Look for "IPv4 Address"

**Mac/Linux:**
```bash
ifconfig
```

## 📦 Building Android APK

```bash
cd mobile-app

# Install EAS CLI globally
npm install -g eas-cli

# Login to Expo
eas login

# Configure project
eas build:configure

# Build APK
eas build --platform android --profile preview
```

## 🌐 Deployment

### Website
- Already deployed to GitHub Pages
- URL: https://trouble946-bit.github.io/grace-bites/

### Backend (Choose one)
- **Render:** https://render.com (Free tier available)
- **Railway:** https://railway.app (Free tier available)
- **Fly.io:** https://fly.io (Free tier available)
- **Heroku:** https://heroku.com (Paid)

### Mobile App
- Build APK with EAS Build
- Distribute via email or file sharing
- For Play Store, you'll need a developer account ($25 one-time)

## 🧪 Testing the System

1. **Start backend:**
   ```bash
   cd backend && npm start
   ```

2. **Start mobile app:**
   ```bash
   cd mobile-app && npm start
   ```

3. **Test flow:**
   - Open app on phone/emulator
   - Browse menu
   - Add items to cart
   - Place order
   - Check "My Orders" with phone number

## 📋 API Documentation

### Get Menu
```bash
GET http://localhost:3000/api/menu
```

### Create Order
```bash
POST http://localhost:3000/api/orders
Content-Type: application/json

{
  "customerName": "John Doe",
  "customerPhone": "1234567890",
  "customerEmail": "john@example.com",
  "deliveryAddress": "123 Main St",
  "items": [
    {"id": 1, "name": "Pizza", "price": 22.99, "quantity": 2}
  ],
  "totalAmount": 45.98
}
```

### Get Customer Orders
```bash
GET http://localhost:3000/api/orders/customer/1234567890
```

## 🛠️ Tech Stack

**Website:**
- HTML5, CSS3, JavaScript
- Responsive design
- Modern UI/UX

**Backend:**
- Node.js
- Express
- CORS enabled
- RESTful API

**Mobile App:**
- React Native
- Expo
- Expo Router (navigation)
- AsyncStorage (cart persistence)
- Axios (API calls)

## 📝 Next Steps for Production

To convert to production:
1. Add MongoDB database
2. Implement user authentication (JWT)
3. Add payment gateway (Stripe/PayPal)
4. Add admin panel
5. Implement real-time order tracking
6. Add push notifications
7. Add image upload for menu items
8. Deploy backend to cloud platform
9. Publish app to Play Store

## 🐛 Troubleshooting

**App can't connect to backend:**
- Check backend is running
- Verify API_BASE_URL in `mobile-app/services/api.js`
- Use correct IP for physical devices

**Backend won't start:**
- Run `npm install` in backend folder
- Check if port 3000 is available
- Try different port in .env file

**App won't build:**
- Run `npm install` in mobile-app folder
- Clear cache: `expo start -c`
- Delete node_modules and reinstall

## 📄 License

Trial Version - For demonstration purposes

## 👨‍💻 Developer

Max and Sherry Food Ordering System v1.0.0 (Trial)

---

**Note:** This is a trial version. All data is stored in memory and will be lost when the server restarts. For production use, implement database persistence.
