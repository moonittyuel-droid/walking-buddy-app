# Walking Buddy - Android Deployment Guide

Complete guide to build, test, and deploy Walking Buddy on Android.

## Prerequisites

### Required Software
- **Node.js**: 18+ (LTS recommended)
- **Java Development Kit (JDK)**: 17
- **Android Studio**: Latest version (Flamingo or newer)
- **Android SDK**: API Level 33
- **React Native CLI**: `npm install -g react-native-cli`

### Environment Setup

#### 1. Install Android Studio
Download from: https://developer.android.com/studio

During installation, ensure these components are selected:
- Android SDK
- Android SDK Platform
- Android Virtual Device
- Performance (Intel HAXM) - for emulator

#### 2. Configure Android SDK
Open Android Studio → Settings → Appearance & Behavior → System Settings → Android SDK

Install:
- Android 13.0 (Tiramisu) - API Level 33
- Android SDK Build-Tools 33.0.0
- Android SDK Platform-Tools
- Android SDK Tools

#### 3. Set Environment Variables

**Windows:**
```bash
setx ANDROID_HOME "%LOCALAPPDATA%\Android\Sdk"
setx PATH "%PATH%;%LOCALAPPDATA%\Android\Sdk\platform-tools"
```

**macOS/Linux:**
Add to `~/.bash_profile` or `~/.zshrc`:
```bash
export ANDROID_HOME=$HOME/Library/Android/sdk
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/platform-tools
export PATH=$PATH:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/tools/bin
```

Then run: `source ~/.bash_profile` or `source ~/.zshrc`

#### 4. Verify Installation
```bash
java -version
# Should show Java 17

node -v
# Should show v18+

adb version
# Should show Android Debug Bridge version
```

## Project Setup

### 1. Clone Repository
```bash
git clone https://github.com/moonittyuel-droid/walking-buddy-app.git
cd walking-buddy-app/mobile
```

### 2. Install Dependencies
```bash
npm install
# or
yarn install
```

### 3. Configure API Keys

Create `mobile/android/local.properties`:
```properties
sdk.dir=/Users/YOUR_USERNAME/Library/Android/sdk
GOOGLE_MAPS_API_KEY=your_google_maps_api_key_here
```

Create `mobile/.env`:
```bash
API_URL=http://10.0.2.2:3000/api/v1
GOOGLE_MAPS_API_KEY=your_google_maps_api_key_here
FIREBASE_API_KEY=your_firebase_api_key
FIREBASE_PROJECT_ID=your_firebase_project_id
```

### 4. Setup Firebase

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create new project: "Walking Buddy"
3. Add Android app:
   - Package name: `com.walkingbuddy.app`
   - Download `google-services.json`
   - Place in `mobile/android/app/`

### 5. Setup Google Maps

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Enable APIs:
   - Maps SDK for Android
   - Places API
   - Directions API
   - Geocoding API
3. Create API key with Android restrictions
4. Add to `local.properties` and `.env`

## Development Build

### Start Metro Bundler
```bash
npm start
# or
yarn start
```

### Run on Emulator

#### Create Android Virtual Device (AVD)
1. Open Android Studio
2. Tools → Device Manager
3. Create Device
4. Select: Pixel 6 Pro
5. System Image: Android 13.0 (API 33)
6. Finish

#### Launch App
```bash
npm run android
# or
yarn android
```

This will:
- Start the emulator (if not running)
- Build the app
- Install on emulator
- Launch the app

### Run on Physical Device

#### Enable Developer Options
1. Settings → About Phone
2. Tap "Build Number" 7 times
3. Go back → Developer Options
4. Enable "USB Debugging"

#### Connect Device
```bash
# Connect via USB
adb devices
# Should show your device

# Run app
npm run android
```

## Production Build

### 1. Generate Signing Key

```bash
cd android/app
keytool -genkeypair -v -storetype PKCS12 -keystore walking-buddy-release.keystore -alias walking-buddy -keyalg RSA -keysize 2048 -validity 10000
```

Enter details:
- Password: (choose strong password)
- First and Last Name: Walking Buddy
- Organization: Your Company
- City, State, Country: Your details

**IMPORTANT**: Store keystore file and passwords securely!

### 2. Configure Gradle

Create `mobile/android/gradle.properties` (if not exists):
```properties
WALKING_BUDDY_UPLOAD_STORE_FILE=walking-buddy-release.keystore
WALKING_BUDDY_UPLOAD_KEY_ALIAS=walking-buddy
WALKING_BUDDY_UPLOAD_STORE_PASSWORD=your_keystore_password
WALKING_BUDDY_UPLOAD_KEY_PASSWORD=your_key_password
```

**IMPORTANT**: Add `gradle.properties` to `.gitignore`!

### 3. Build Release APK

```bash
cd android
./gradlew assembleRelease
```

APK location: `android/app/build/outputs/apk/release/app-release.apk`

### 4. Build Release AAB (for Play Store)

```bash
cd android
./gradlew bundleRelease
```

AAB location: `android/app/build/outputs/bundle/release/app-release.aab`

### 5. Test Release Build

```bash
# Install on device
adb install android/app/build/outputs/apk/release/app-release.apk

# Or use bundletool for AAB
bundletool build-apks --bundle=app-release.aab --output=app.apks --mode=universal
bundletool install-apks --apks=app.apks
```

## Google Play Store Deployment

### 1. Create Developer Account
- Go to [Google Play Console](https://play.google.com/console)
- Pay one-time $25 registration fee
- Complete account setup

### 2. Create App

**App Details:**
- App name: Walking Buddy
- Default language: English (US)
- App or game: App
- Free or paid: Free

**Category:**
- Category: Health & Fitness
- Tags: Social, Walking, Fitness, Local

### 3. Store Listing

**Short Description** (80 chars):
```
Find walking partners nearby. Discover local places. Walk together safely.
```

**Full Description** (4000 chars):
```
🚶‍♂️ Walking Buddy - Connect. Walk. Explore.

Find walking companions in your neighborhood and discover amazing local places together!

WHY WALKING BUDDY?

👥 Find Walking Partners
See who's available for a walk in real-time. Connect with people who share your pace and interests.

📍 Discover Local Places
Get smart suggestions for parks, trails, cafes, and attractions along your route.

💬 Easy Communication
Send walk requests, chat with partners, and coordinate meetups seamlessly.

🔒 Safe & Secure
User verification, ratings, safety features, and emergency contacts for peace of mind.

📊 Track Your Progress
Monitor walking history, distance, routes, and stay motivated with achievements.

🏪 Support Local Businesses
Discover exclusive deals and support your local community.

PERFECT FOR:
• People new to the area looking to make friends
• Fitness enthusiasts wanting walking accountability
• Anyone who feels unsafe walking alone
• Community-minded individuals
• Dog walkers looking for companions
• Seniors wanting social connection

HOW IT WORKS:
1. Create your profile with walking preferences
2. See nearby people available for walks on the map
3. Send a walk request and coordinate
4. Meet up, walk together, and discover local gems!

FEATURES:
✓ Real-time location-based matching
✓ In-app messaging
✓ Walk tracking with route history
✓ Nearby place suggestions
✓ Safety features (verification, ratings, reporting)
✓ Privacy controls
✓ Walking statistics and achievements
✓ Local business deals

Join thousands of people building healthier, more connected communities!

Download Walking Buddy today and never walk alone again. 🚶‍♀️

Questions? Contact us at hello@walkingbuddy.app
Website: walkingbuddy.app
```

**Screenshots** (Required: 2-8 screenshots):
- Home/Map screen
- User profile
- Walk request flow
- Active walk screen
- Messages screen
- Walk history
- Settings screen

**Feature Graphic** (1024 x 500):
Create banner with app logo and tagline

**App Icon** (512 x 512):
High-res version of launcher icon

### 4. Content Rating

Complete questionnaire:
- Target age: Everyone
- Content: Social interaction, location sharing
- Ads: Yes (if using ads)

### 5. App Content

**Privacy Policy:**
- Required for apps with user data
- Host at: https://walkingbuddy.app/privacy
- Include: data collection, usage, sharing, security

**Data Safety:**
Declare:
- Location data (collected, shared)
- Personal info (name, email, photos)
- Messages (collected, encrypted)
- Usage data (analytics)

**Target Audience:**
- Age: 13+ (or 18+ depending on policy)

**News Apps:**
- Not a news app

### 6. Pricing & Distribution

**Countries:**
- Select all or specific countries
- Recommended: Start with English-speaking countries

**Pricing:**
- Free (with in-app purchases for premium)

**In-app Products:**
- Premium Subscription: $4.99/month

### 7. App Releases

#### Internal Testing (Optional)
- Upload AAB
- Add test users (up to 100)
- Test for 1-2 weeks

#### Closed Testing (Optional)
- Expand to more testers
- Gather feedback
- Fix issues

#### Open Testing (Optional)
- Public beta
- Larger user base
- Final testing before production

#### Production Release
1. Upload AAB: `app-release.aab`
2. Release name: "1.0.0 - Initial Release"
3. Release notes:
```
🎉 Welcome to Walking Buddy!

• Find walking partners in your neighborhood
• Discover local parks, cafes, and attractions
• Track your walks and build healthy habits
• Connect with your community safely

This is our initial release. We'd love your feedback!
```

4. Review and rollout:
   - Start with 5% rollout
   - Monitor for crashes/issues
   - Gradually increase to 100%

### 8. Review Process

**Timeline:**
- First review: 7-14 days
- Updates: 1-3 days

**Common Rejection Reasons:**
- Missing privacy policy
- Incomplete data safety section
- Crashes on startup
- Missing required permissions explanation
- Inappropriate content

**Tips for Approval:**
- Test thoroughly before submission
- Provide clear permission rationales
- Include privacy policy
- Respond quickly to review feedback

## Post-Launch

### 1. Monitor Metrics

**Google Play Console:**
- Installs and uninstalls
- Ratings and reviews
- Crashes and ANRs
- User acquisition

**Firebase Analytics:**
- Active users (DAU/MAU)
- User engagement
- Retention rates
- Conversion funnels

### 2. Respond to Reviews
- Reply to all reviews (especially negative)
- Thank users for feedback
- Address issues promptly
- Show you care about user experience

### 3. Release Updates

**Version Naming:**
- Major: 1.0.0 → 2.0.0 (breaking changes)
- Minor: 1.0.0 → 1.1.0 (new features)
- Patch: 1.0.0 → 1.0.1 (bug fixes)

**Update Process:**
1. Increment version in `build.gradle`:
```gradle
versionCode 2  // Increment by 1
versionName "1.0.1"
```

2. Build new AAB
3. Upload to Play Console
4. Write release notes
5. Submit for review

### 4. Staged Rollout
- Start with 5-10% of users
- Monitor for 24-48 hours
- Check crash rates and reviews
- Gradually increase to 100%
- Halt rollout if issues detected

## Troubleshooting

### Build Errors

**Error: SDK location not found**
```bash
# Create local.properties
echo "sdk.dir=/Users/YOUR_USERNAME/Library/Android/sdk" > android/local.properties
```

**Error: Execution failed for task ':app:processDebugGoogleServices'**
```bash
# Ensure google-services.json is in android/app/
# Verify package name matches in Firebase
```

**Error: Could not find com.android.tools.build:gradle**
```bash
# Update android/build.gradle
classpath("com.android.tools.build:gradle:7.4.2")
```

### Runtime Errors

**App crashes on startup**
- Check logcat: `adb logcat`
- Verify all permissions in manifest
- Check Firebase configuration
- Ensure API keys are valid

**Maps not showing**
- Verify Google Maps API key
- Check API is enabled in Cloud Console
- Ensure billing is enabled
- Check API restrictions

**Location not working**
- Request runtime permissions
- Check location services enabled
- Verify manifest permissions
- Test on physical device (emulator may have issues)

### Performance Issues

**Slow app startup**
- Enable Hermes engine
- Optimize bundle size
- Use ProGuard in release

**High memory usage**
- Profile with Android Profiler
- Optimize images
- Fix memory leaks
- Use pagination for lists

## Best Practices

### Security
- Never commit keystore files
- Use environment variables for secrets
- Enable ProGuard for release
- Implement certificate pinning
- Encrypt sensitive data

### Performance
- Enable Hermes JS engine
- Use native modules when possible
- Optimize images (WebP format)
- Implement lazy loading
- Cache API responses

### User Experience
- Handle offline scenarios
- Show loading states
- Provide error messages
- Request permissions contextually
- Support dark mode

### Testing
- Write unit tests
- Implement E2E tests (Detox)
- Test on multiple devices
- Test different Android versions
- Test with slow network

## Resources

### Documentation
- [React Native Docs](https://reactnative.dev/docs/getting-started)
- [Android Developer Guide](https://developer.android.com/guide)
- [Google Play Console Help](https://support.google.com/googleplay/android-developer)

### Tools
- [Android Studio](https://developer.android.com/studio)
- [Firebase Console](https://console.firebase.google.com/)
- [Google Play Console](https://play.google.com/console)
- [Bundletool](https://github.com/google/bundletool)

### Community
- [React Native Community](https://github.com/react-native-community)
- [Stack Overflow](https://stackoverflow.com/questions/tagged/react-native)
- [Reddit r/reactnative](https://reddit.com/r/reactnative)

## Support

Need help? Contact us:
- Email: dev@walkingbuddy.app
- GitHub Issues: https://github.com/moonittyuel-droid/walking-buddy-app/issues
- Documentation: https://github.com/moonittyuel-droid/walking-buddy-app/tree/main/docs

---

**Ready to deploy Walking Buddy to millions of Android users!** 🚀📱
