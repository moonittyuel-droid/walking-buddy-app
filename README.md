# 🚶‍♂️ Walking Buddy

**Connect with neighbors for walks. Discover local places. Support local businesses.**

## Overview

Walking Buddy is a location-based social mobile app that connects people in neighborhoods for walking companionship while promoting local businesses through targeted advertising.

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

## Tech Stack

### Mobile App
- **Framework**: React Native / Flutter
- **Maps**: Google Maps SDK
- **Real-time**: Firebase / Socket.io
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

## Project Structure

```
walking-buddy-app/
├── mobile/                 # React Native mobile app
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

### Primary: Local Business Ads
- Sponsored pins: $50-200/month
- Featured listings: $100-500/month
- Walking deals: 10-15% commission
- Banner ads: $5-15 CPM

### Secondary: Premium Users
- $4.99/month subscription
- Extended radius
- Ad-free experience
- Advanced filters

## Getting Started

### Prerequisites
- Node.js 18+
- React Native CLI / Flutter SDK
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

# Install mobile dependencies
cd ../mobile
npm install

# Set up environment variables
cp .env.example .env
# Edit .env with your API keys
```

### Running Locally

```bash
# Start backend
cd backend
npm run dev

# Start mobile app (iOS)
cd mobile
npm run ios

# Start mobile app (Android)
npm run android
```

## Safety & Privacy

- End-to-end encrypted messaging
- Location data encryption
- GDPR/CCPA compliant
- User verification system
- Emergency contact feature
- In-app safety guidelines

## Contributing

We welcome contributions! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for details.

## License

MIT License - see [LICENSE](LICENSE) for details.

## Contact

- Website: [walkingbuddy.app](https://walkingbuddy.app)
- Email: hello@walkingbuddy.app
- Twitter: [@walkingbuddyapp](https://twitter.com/walkingbuddyapp)

---

**Built with ❤️ for healthier, more connected communities**
