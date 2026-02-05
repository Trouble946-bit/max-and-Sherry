# 📦 Build Grace Bites Android APK - Simple Steps

## Step 1: Create Expo Account (Free)

1. Go to: **https://expo.dev/signup**
2. Sign up with email (it's free!)
3. Verify your email

## Step 2: Login to EAS

```powershell
cd mobile-app
eas login
```

Enter your Expo username/email and password

## Step 3: Build the APK

```powershell
eas build --platform android --profile preview
```

**What happens:**
- ✅ Build takes 10-20 minutes
- ✅ Runs on Expo's cloud servers (no local setup needed)
- ✅ You'll get a download link when done
- ✅ Email notification when ready

## Step 4: Download & Install

1. **Check build status:**
   ```powershell
   eas build:list
   ```

2. **When complete**, you'll get a download link like:
   ```
   https://expo.dev/artifacts/eas/[unique-id].apk
   ```

3. **Download the APK** to your phone
4. **Enable "Install Unknown Apps"** in phone settings
5. **Tap the APK** to install
6. **Open Grace Bites** app!

---

## ⚡ Alternative: Use Expo Go (No Build Needed)

**Fastest way to test on your phone RIGHT NOW:**

1. **Install Expo Go** from Play Store
2. **Start the app:**
   ```powershell
   cd mobile-app
   npm start
   ```
3. **Scan QR code** with Expo Go
4. **App loads instantly!** (no APK needed)

This is perfect for testing the trial version.

---

## 📱 Update Backend URL for Phone Testing

Before building, update the API URL for your phone:

**Edit:** `mobile-app/services/api.js`

```javascript
// Find your computer's IP address first:
// Windows: Run "ipconfig" in PowerShell
// Look for "IPv4 Address" (e.g., 192.168.1.100)

const API_BASE_URL = 'http://YOUR_COMPUTER_IP:3000/api';
// Example: 'http://192.168.1.100:3000/api'
```

**Make sure:**
- Backend is running: `cd backend && npm start`
- Phone and computer on same WiFi

---

## 🔍 Check Your Computer's IP

```powershell
ipconfig
```

Look for **IPv4 Address** under your WiFi adapter (e.g., 192.168.1.100)

---

## 📋 Complete Build Command

```powershell
# 1. Login (one-time)
cd c:\Users\Fa\Documents\Anenenji\Programming\grace-bites\mobile-app
eas login

# 2. Build APK (takes 10-20 minutes)
eas build --platform android --profile preview

# 3. Check status
eas build:list

# 4. Download APK from the link provided
```

---

## 🎯 Recommendation

**For Trial Testing:**
- Use **Expo Go** (instant, no build needed)

**For Distribution/Sharing:**
- Build **APK** (can install without Expo Go)

---

## ✅ Quick Test Commands

```powershell
# Terminal 1: Backend
cd backend
npm start

# Terminal 2: Mobile App
cd mobile-app
npm start
# Then scan QR with Expo Go app
```

This lets you test everything without waiting for a build!

---

## 🆘 Need Help?

**Can't create Expo account?**
- Use GitHub to sign up: https://expo.dev/signup

**Build fails?**
- Check app.json is valid
- Try: `eas build:configure`

**Want to skip account?**
- Use Expo Go app (no account needed for testing)
