# 🚶‍♂️ Walking Buddy

**Connect with neighbors for walks. Discover local places. Support local businesses.**

[![Live Demo](https://img.shields.io/badge/demo-live-brightgreen)](https://moonittyuel-droid.github.io/walking-buddy-app/)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Android](https://img.shields.io/badge/platform-Android-green.svg)](docs/ANDROID_DEPLOYMENT.md)
[![iOS](https://img.shields.io/badge/platform-iOS-lightgrey.svg)](docs/IOS_DEPLOYMENT.md)

## Overview

Walking Buddy is a location-based social mobile app that connects people in neighborhoods for walking companionship while promoting local businesses through targeted advertising.

**🌐 Live Landing Page**: https://moonittyuel-droid.github.io/walking-buddy-app/

## Core Features

### 👥 Social Connection
- Real-time location sharing with nearby walkers
- In-app messaging for walk requests
- Accept/decline walk invitations
- User profiles with walking preferences

### 📍 Location & Discovery
- Map view of available walkers in your area
- Customizable search radius (0.5km - 5km)
- Live walk tracking
- Safety features (report/block users)

### 🌳 Smart Suggestions
During walks, discover:
- Parks & green spaces
- Walking trails & scenic routes
- Cafes & restaurants
- Local attractions & landmarks

### 💰 Monetization
- Local business advertising
- Sponsored location pins
- Featured business listings
- Walking deals & discounts

## 🚀 Quick Start

### Android Development
**Get started in 15 minutes!**

```bash
# Clone and setup
git clone https://github.com/moonittyuel-droid/walking-buddy-app.git
cd walking-buddy-app/mobile
npm install

# Run on Android
npm run android
```

📱 **[Android Quick Start Guide](docs/QUICK_START_ANDROID.md)** - Step-by-step setup

📦 **[Android Deployment Guide](docs/ANDROID_DEPLOYMENT.md)** - Complete deployment to Play Store

### iOS Development
Coming soon! Check back for iOS setup instructions.

## Tech Stack

### Mobile App
- **Framework**: React Native (iOS & Android)
- **Maps**: Google Maps SDK
- **Real-time**: Socket.io
- **Auth**: Firebase Authentication

### Backend
- **API**: Node.js + Express
- **Database**: PostgreSQL + MongoDB
- **Cache**: Redis
- **Cloud**: AWS / GCP

### Services
- **Push Notifications**: Firebase Cloud Messaging
- **Storage**: AWS S3
- **Analytics**: Google Analytics + Mixpanel

## 📚 Documentation

### Getting Started
- [Quick Start (Android)](docs/QUICK_START_ANDROID.md) - 15-minute setup
- [Android Deployment](docs/ANDROID_DEPLOYMENT.md) - Complete deployment guide
- [Architecture](docs/ARCHITECTURE.md) - System design & technical details
- [Wireframes](docs/WIREFRAMES.md) - UI/UX design & user flows

### Business
- [Business Plan](docs/BUSINESS_PLAN.md) - Market analysis & financials
- [Marketing Strategy](docs/MARKETING_STRATEGY.md) - Go-to-market plan
- [Project Summary](docs/PROJECT_SUMMARY.md) - Complete overview

## Project Structure

```
walking-buddy-app/
├── mobile/                 # React Native mobile app
│   ├── android/           # Android native code
│   │   ├── app/
│   │   │   ├── build.gradle
│   │   │   └── src/main/
│   │   └── build.gradle
│   ├── ios/               # iOS native code (coming soon)
│   ├── src/
│   │   ├── screens/       # App screens
│   │   ├── components/    # Reusable components
│   │   ├── navigation/    # Navigation setup
│   │   ├── services/      # API & services
│   │   └── utils/         # Utilities
│   └── package.json
├── backend/               # Node.js backend
│   ├── src/
│   │   ├── routes/        # API routes
│   │   ├── controllers/   # Business logic
│   │   ├── models/        # Database models
│   │   ├── middleware/    # Middleware
│   │   └── services/      # External services
│   └── package.json
├── business-dashboard/    # Web dashboard for businesses
├── docs/                  # Documentation
│   ├── QUICK_START_ANDROID.md
│   ├── ANDROID_DEPLOYMENT.md
│   ├── ARCHITECTURE.md
│   ├── BUSINESS_PLAN.md
│   └── MARKETING_STRATEGY.md
└── README.md
```

## Development Phases

### Phase 1: MVP (3-4 months)
- [ ] User authentication & profiles
- [ ] Location sharing & map view
- [ ] Basic messaging system
- [ ] Walk request flow

### Phase 2: Enhanced Features (2-3 months)
- [ ] Walk tracking & history
- [ ] Nearby suggestions
- [ ] Safety features
- [ ] Push notifications

### Phase 3: Monetization (2 months)
- [ ] Business dashboard
- [ ] Ad integration
- [ ] Sponsored locations
- [ ] Analytics

### Phase 4: Scaling
- [ ] Performance optimization
- [ ] Advanced matching
- [ ] Community features
- [ ] Premium tier

## Revenue Model

### Primary: Local Business Ads (70%)
- Sponsored pins: $50-200/month
- Featured listings: $100-500/month
- Walking deals: 10-15% commission
- Banner ads: $5-15 CPM

### Secondary: Premium Users (25%)
- $4.99/month subscription
- Extended radius
- Ad-free experience
- Advanced filters

### Financial Projections
| Year | Users | Businesses | Revenue |
|------|-------|------------|---------|
| 1 | 50K | 500 | $500K |
| 2 | 250K | 2,500 | $2.5M |
| 3 | 1M | 10,000 | $10M |

## Getting Started

### Prerequisites
- Node.js 18+
- Android Studio (for Android)
- Xcode (for iOS)
- PostgreSQL 14+
- Redis
- Google Maps API key

### Installation

```bash
# Clone repository
git clone https://github.com/moonittyuel-droid/walking-buddy-app.git
cd walking-buddy-app

# Install backend dependencies
cd backend
npm install
cp .env.example .env
# Edit .env with your API keys

# Install mobile dependencies
cd ../mobile
npm install
```

### Running Locally

```bash
# Start backend
cd backend
npm run dev

# Start mobile app (Android)
cd mobile
npm run android

# Start mobile app (iOS)
npm run ios
```

## 🔐 Safety & Privacy

- End-to-end encrypted messaging
- Location data encryption
- GDPR/CCPA compliant
- User verification system
- Emergency contact feature
- In-app safety guidelines

## 🤝 Contributing

We welcome contributions! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for details.

## 📄 License

MIT License - see [LICENSE](LICENSE) for details.

## 📞 Contact

- **Website**: https://moonittyuel-droid.github.io/walking-buddy-app/
- **Email**: hello@walkingbuddy.app
- **GitHub**: https://github.com/moonittyuel-droid/walking-buddy-app
- **Issues**: https://github.com/moonittyuel-droid/walking-buddy-app/issues

## 🌟 Support

If you find this project helpful, please give it a ⭐️ on GitHub!

---

**Built with ❤️ for healthier, more connected communities**

Ready to deploy? Check out our guides:
- 📱 [Android Deployment Guide](docs/ANDROID_DEPLOYMENT.md)
- 🍎 iOS Deployment Guide (Coming Soon)
