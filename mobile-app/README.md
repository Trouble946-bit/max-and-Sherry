# Grace Bites Mobile App

Food ordering app for Grace Bites - Trial Version

## Features

✅ Browse menu with images and prices
✅ Add items to cart
✅ Adjust quantities
✅ Place orders
✅ Track order status
✅ View order history

## Tech Stack

- **React Native** with Expo
- **Expo Router** for navigation
- **AsyncStorage** for cart persistence
- **Axios** for API calls

## Installation

1. Install dependencies:
```bash
cd mobile-app
npm install
```

2. Start the development server:
```bash
npm start
```

3. Run on Android:
```bash
npm run android
```

## Backend Connection

The app connects to the backend API. Update the API URL in `services/api.js`:

- **Android Emulator:** `http://10.0.2.2:3000/api`
- **Physical Device:** Use your computer's IP address (e.g., `http://192.168.1.100:3000/api`)

## Trial Version Limitations

- In-memory data storage (no persistent database)
- No real payment processing
- Limited to basic ordering functionality
- No user authentication

## Building for Production

To create an APK:

```bash
# Install EAS CLI
npm install -g eas-cli

# Configure project
eas build:configure

# Build Android APK
eas build --platform android --profile preview
```

## Testing

1. Make sure the backend server is running
2. Update API_BASE_URL in `services/api.js`
3. Start the app with `npm start`
4. Use Expo Go app or Android emulator

## Folder Structure

```
mobile-app/
├── app/              # App screens
│   ├── _layout.js    # Root layout with navigation
│   ├── index.js      # Home screen
│   ├── menu.js       # Menu listing
│   ├── cart.js       # Shopping cart
│   ├── checkout.js   # Checkout form
│   └── orders.js     # Order history
├── context/          # React Context
│   └── CartContext.js
├── services/         # API services
│   └── api.js
├── app.json          # Expo configuration
└── package.json
```

## Notes

- This is a trial version for demonstration purposes
- Backend must be running for the app to work
- Cart data is saved locally on the device
- Orders are stored in backend memory only
