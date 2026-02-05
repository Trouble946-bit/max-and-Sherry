# 📦 Building Grace Bites Android App (APK Installer)

## Option 1: Easiest - Use Expo Go (Recommended for Trial)

**No build needed! Install and test immediately:**

1. **Install Expo Go from Play Store**
   - Search "Expo Go" in Play Store
   - Install the app (free)

2. **Run the app:**
   ```powershell
   cd mobile-app
   npm install
   npm start
   ```

3. **Scan the QR code** with Expo Go app
   - App will load in seconds
   - No APK installation needed

---

## Option 2: Build APK File (Standalone Installer)

### Prerequisites:
- Expo account (free): https://expo.dev/signup
- EAS CLI installed: ✅ Already installed

### Step-by-Step:

**1. Login to Expo:**
```powershell
cd mobile-app
eas login
```
Enter your Expo username and password

**2. Configure the project:**
```powershell
eas build:configure
```
Press Enter for all prompts

**3. Build the APK:**
```powershell
eas build --platform android --profile preview
```

**What happens:**
- ⏱️ Build takes 10-20 minutes (runs on Expo's servers)
- 📧 You'll get an email when done
- 📥 Download link will be provided

**4. Install on phone:**
- Download the APK file from the link
- Transfer to phone or download directly
- Enable "Install from Unknown Sources" in phone settings
- Tap APK to install

---

## Option 3: Quick Test with Expo Go (No Account Needed)

**If you just want to test RIGHT NOW:**

1. **Start the development server:**
   ```powershell
   cd mobile-app
   npm start
   ```

2. **Options that appear:**
   - Press `a` - Opens in Android emulator (if installed)
   - Press `w` - Opens in web browser
   - Scan QR code with Expo Go app

---

## ⚡ FASTEST WAY (Right Now):

```powershell
# Terminal 1: Start Backend
cd backend
npm start

# Terminal 2: Start App
cd mobile-app
npm start
```

Then press `a` for Android emulator OR scan QR with Expo Go app!

---

## 📱 Using Android Emulator (No Phone Needed)

**Install Android Studio:**
1. Download: https://developer.android.com/studio
2. Install Android Studio
3. Open AVD Manager (Virtual Device Manager)
4. Create a device (Pixel 6, Android 13)
5. Start the emulator

**Run app in emulator:**
```powershell
cd mobile-app
npm start
# Press 'a' when emulator is running
```

---

## 🎯 Recommendation for Testing:

**Use Expo Go** - It's the fastest way to test your app:
- ✅ No build time (instant)
- ✅ No APK needed
- ✅ Hot reload (changes appear immediately)
- ✅ Perfect for development and testing

**Build APK later** when you want to:
- Share with others who don't have Expo Go
- Distribute outside Play Store
- Test as a standalone app

---

## 🔧 Troubleshooting

**"eas: command not found"**
```powershell
npm install -g eas-cli
```

**"Need to login"**
```powershell
eas login
```
Create account at https://expo.dev/signup (free)

**"Build failed"**
- Check app.json is properly configured
- Make sure package.json has no errors
- Try: `npm install` then rebuild

**"Can't connect to backend"**
- Start backend first: `cd backend && npm start`
- Update API URL in `mobile-app/services/api.js`

---

## 📊 Build Time Comparison

| Method | Time | Pros | Cons |
|--------|------|------|------|
| **Expo Go** | 10 seconds | Fast, hot reload | Needs Expo Go app |
| **Cloud Build** | 15-20 min | Easy, no setup | Requires account |
| **Local Build** | 30-60 min | Full control | Complex setup |
| **Android Studio** | 10-20 min | Professional | Large download |

---

## 🚀 Quick Start (Right Now!)

Want to test immediately? Do this:

```powershell
# 1. Start backend
cd backend
npm start

# 2. In another terminal, start app
cd mobile-app
npm start

# 3. Choose one:
#    - Press 'a' for Android emulator
#    - Scan QR with Expo Go app
#    - Press 'w' for web browser
```

That's it! Your app is running! 🎉
