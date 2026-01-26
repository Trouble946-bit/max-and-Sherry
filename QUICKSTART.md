# 🚀 Quick Start Guide - Grace Bites

## What You Have

✅ **Static Website** - Already live at: https://trouble946-bit.github.io/grace-bites/
✅ **Backend API** - Node.js server for food ordering
✅ **Android App** - React Native mobile app (Trial Version)

---

## ⚡ Running the System

### Step 1: Start the Backend Server

```powershell
cd backend
npm install
npm start
```

✅ Server will run on `http://localhost:3000`

### Step 2: Run the Mobile App

```powershell
cd mobile-app
npm install
npm start
```

Then:
- Press `a` to open Android emulator
- Or scan QR code with Expo Go app

---

## 📱 Installing on Android Phone

### Option 1: Use Expo Go (Easiest)

1. Install **Expo Go** from Play Store
2. Make sure phone and computer are on same WiFi
3. Run `npm start` in mobile-app folder
4. Scan the QR code with Expo Go app

### Option 2: Build APK

```powershell
cd mobile-app
npm install -g eas-cli
eas build:configure
eas build --platform android --profile preview
```

Download the APK and install on your phone.

---

## 🔧 Important: Connecting App to Backend

**For Android Emulator:**
Already configured - uses `http://10.0.2.2:3000`

**For Physical Phone:**
1. Find your computer's IP address:
   ```powershell
   ipconfig
   ```
   Look for "IPv4 Address" (e.g., 192.168.1.100)

2. Edit `mobile-app/services/api.js`:
   ```javascript
   const API_BASE_URL = 'http://YOUR_IP:3000/api';
   ```

3. Make sure your phone and computer are on the same WiFi

---

## ✅ Testing the Complete Flow

1. **Start backend:** `cd backend && npm start`
2. **Start app:** `cd mobile-app && npm start`
3. **In the app:**
   - Tap "Browse Menu"
   - Add items to cart
   - Go to cart
   - Proceed to checkout
   - Fill in your details
   - Place order
   - Check "My Orders" with your phone number

---

## 📋 What Each Part Does

### Website (Static)
- Browse food gallery
- Contact form
- Information display
- **Lives at:** https://trouble946-bit.github.io/grace-bites/

### Backend API
- Stores menu items
- Processes orders
- Tracks order status
- **Runs on:** http://localhost:3000

### Mobile App
- Browse menu
- Add to cart
- Place orders
- Track deliveries

---

## 🎯 Trial Version Features

✅ Full ordering functionality
✅ Cart management
✅ Order tracking
✅ Menu browsing

⚠️ **Limitations:**
- Data stored in memory (resets on server restart)
- No real payments
- No user accounts
- No database persistence

---

## 🐛 Common Issues

**"Cannot connect to backend"**
- Make sure backend is running: `cd backend && npm start`
- Check the API URL in `mobile-app/services/api.js`

**"App won't start"**
- Clear cache: `npm start -- --clear`
- Reinstall: `rm -rf node_modules && npm install`

**"Backend won't start"**
- Install dependencies: `cd backend && npm install`
- Check if port 3000 is free

---

## 📂 Project Structure

```
grace-bites/
├── index.html          # Website homepage
├── gallery.html        # Food gallery
├── contact.html        # Contact page
├── styles.css          # Website styles
├── script.js           # Website JavaScript
├── backend/            # API Server
│   ├── server.js       # Main server file
│   └── package.json    # Dependencies
└── mobile-app/         # Android App
    ├── app/            # App screens
    ├── services/       # API calls
    └── context/        # Cart management
```

---

## 🎉 You're Ready!

Your complete food ordering system is set up:
- ✅ Website deployed
- ✅ Backend ready
- ✅ Mobile app ready
- ✅ All code on GitHub

**Next steps:**
1. Test the backend: `cd backend && npm start`
2. Test the app: `cd mobile-app && npm start`
3. Try placing an order!

---

**Questions?** Check [PROJECT_README.md](PROJECT_README.md) for detailed documentation.
