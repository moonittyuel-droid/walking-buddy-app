# Walking Buddy - Android Quick Start Guide

Get Walking Buddy running on Android in 15 minutes! ⚡

## Prerequisites Checklist

- [ ] Node.js 18+ installed
- [ ] Android Studio installed
- [ ] Java JDK 17 installed
- [ ] Android SDK API 33 installed
- [ ] Physical Android device OR emulator set up

## Step-by-Step Setup

### 1. Install Required Software (10 minutes)

**Install Node.js:**
```bash
# Download from https://nodejs.org/
# Or use nvm:
nvm install 18
nvm use 18
```

**Install Android Studio:**
- Download: https://developer.android.com/studio
- Install with default settings
- Open Android Studio → More Actions → SDK Manager
- Install: Android 13.0 (API 33), SDK Build-Tools 33.0.0

**Set Environment Variables:**

**macOS/Linux:**
```bash
# Add to ~/.zshrc or ~/.bash_profile
export ANDROID_HOME=$HOME/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/platform-tools

# Apply changes
source ~/.zshrc
```

**Windows:**
```bash
# Run in Command Prompt (Admin)
setx ANDROID_HOME "%LOCALAPPDATA%\Android\Sdk"
setx PATH "%PATH%;%LOCALAPPDATA%\Android\Sdk\platform-tools"
```

### 2. Clone & Setup Project (2 minutes)

```bash
# Clone repository
git clone https://github.com/moonittyuel-droid/walking-buddy-app.git
cd walking-buddy-app/mobile

# Install dependencies
npm install
```

### 3. Configure API Keys (3 minutes)

**Get Google Maps API Key:**
1. Go to: https://console.cloud.google.com/
2. Create new project: "Walking Buddy"
3. Enable: Maps SDK for Android, Places API
4. Create API key → Restrict to Android apps
5. Copy the API key

**Create Configuration Files:**

`mobile/android/local.properties`:
```properties
sdk.dir=/Users/YOUR_USERNAME/Library/Android/sdk
GOOGLE_MAPS_API_KEY=YOUR_GOOGLE_MAPS_API_KEY_HERE
```

`mobile/.env`:
```bash
API_URL=http://10.0.2.2:3000/api/v1
GOOGLE_MAPS_API_KEY=YOUR_GOOGLE_MAPS_API_KEY_HERE
```

**Setup Firebase (Optional for now):**
- Can skip for initial testing
- Required for: Push notifications, Authentication
- Setup later: https://console.firebase.google.com/

### 4. Run on Emulator (5 minutes)

**Create Android Virtual Device:**
```bash
# Open Android Studio
# Tools → Device Manager → Create Device
# Select: Pixel 6 Pro
# System Image: Android 13.0 (API 33)
# Finish
```

**Start the App:**
```bash
# Terminal 1: Start Metro bundler
npm start

# Terminal 2: Run on Android
npm run android
```

**First build takes 5-10 minutes!** ☕

### 5. Run on Physical Device (Alternative)

**Enable Developer Mode:**
1. Settings → About Phone
2. Tap "Build Number" 7 times
3. Go back → Developer Options
4. Enable "USB Debugging"

**Connect & Run:**
```bash
# Connect phone via USB
adb devices
# Should show your device

# Run app
npm run android
```

## Verify Installation

App should launch showing:
- ✅ Splash screen
- ✅ Welcome/Login screen
- ✅ Map view (after login)

## Common Issues & Fixes

### Issue: "SDK location not found"
```bash
# Create local.properties
echo "sdk.dir=$ANDROID_HOME" > android/local.properties
```

### Issue: "Command failed: ./gradlew app:installDebug"
```bash
# Clean and rebuild
cd android
./gradlew clean
cd ..
npm run android
```

### Issue: "Unable to load script"
```bash
# Reset Metro bundler
npm start -- --reset-cache
```

### Issue: "INSTALL_FAILED_UPDATE_INCOMPATIBLE"
```bash
# Uninstall old version
adb uninstall com.walkingbuddy.app
npm run android
```

### Issue: Maps not showing
- Verify API key in `local.properties`
- Check API is enabled in Google Cloud Console
- Ensure billing is enabled (required for Maps API)

## Next Steps

### Development
1. **Edit Code**: Changes auto-reload with Fast Refresh
2. **Debug**: Shake device → Enable Debug Menu
3. **Logs**: `adb logcat` or Chrome DevTools

### Testing
1. **Test on multiple devices**: Different screen sizes
2. **Test offline**: Airplane mode
3. **Test permissions**: Location, camera, storage

### Build Release
```bash
# Generate keystore (one-time)
cd android/app
keytool -genkeypair -v -storetype PKCS12 \
  -keystore walking-buddy-release.keystore \
  -alias walking-buddy -keyalg RSA -keysize 2048 \
  -validity 10000

# Build release APK
cd android
./gradlew assembleRelease

# APK location:
# android/app/build/outputs/apk/release/app-release.apk
```

## Development Workflow

### Daily Development
```bash
# Start Metro bundler
npm start

# Run on device/emulator
npm run android

# View logs
adb logcat | grep "ReactNative"
```

### Making Changes
1. Edit files in `mobile/src/`
2. Save → Auto-reload (Fast Refresh)
3. For native changes: Rebuild app

### Debugging
```bash
# Open Chrome DevTools
# Chrome → chrome://inspect → Inspect

# Or use React Native Debugger
# Download: https://github.com/jhen0409/react-native-debugger
```

## Project Structure

```
mobile/
├── android/              # Android native code
│   ├── app/
│   │   ├── src/main/
│   │   │   ├── AndroidManifest.xml
│   │   │   └── java/
│   │   └── build.gradle
│   └── build.gradle
├── src/                  # React Native code
│   ├── screens/         # App screens
│   ├── components/      # Reusable components
│   ├── navigation/      # Navigation setup
│   ├── services/        # API calls
│   └── utils/           # Utilities
├── package.json
└── .env
```

## Useful Commands

```bash
# Start Metro bundler
npm start

# Run on Android
npm run android

# Run tests
npm test

# Lint code
npm run lint

# Clean build
cd android && ./gradlew clean && cd ..

# List connected devices
adb devices

# Install APK manually
adb install path/to/app.apk

# Uninstall app
adb uninstall com.walkingbuddy.app

# View logs
adb logcat

# Clear app data
adb shell pm clear com.walkingbuddy.app
```

## Resources

### Documentation
- [React Native Docs](https://reactnative.dev/)
- [Android Developer Guide](https://developer.android.com/)
- [Full Deployment Guide](./ANDROID_DEPLOYMENT.md)

### Tools
- [Android Studio](https://developer.android.com/studio)
- [React Native Debugger](https://github.com/jhen0409/react-native-debugger)
- [Flipper](https://fbflipper.com/) - Mobile debugging

### Community
- [GitHub Issues](https://github.com/moonittyuel-droid/walking-buddy-app/issues)
- [Stack Overflow](https://stackoverflow.com/questions/tagged/react-native)

## Need Help?

**Common Questions:**
- Check [ANDROID_DEPLOYMENT.md](./ANDROID_DEPLOYMENT.md) for detailed guide
- Search [GitHub Issues](https://github.com/moonittyuel-droid/walking-buddy-app/issues)
- Ask on Stack Overflow with tag `react-native`

**Contact:**
- Email: dev@walkingbuddy.app
- GitHub: Open an issue

---

**You're ready to build Walking Buddy! 🚀**

Happy coding! 👨‍💻👩‍💻
