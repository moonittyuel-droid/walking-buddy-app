# Walking Buddy - App Wireframes & User Flows

## Screen Descriptions

### 1. Onboarding Screens

#### Welcome Screen
- App logo and tagline
- "Get Started" button
- "Sign In" link

#### Sign Up Screen
- Email input
- Password input
- Confirm password
- "Create Account" button
- Social sign-up options (Google, Apple)
- Terms & Privacy links

#### Profile Setup
- Upload profile photo
- Enter name
- Enter age
- Select gender
- Write bio (optional)
- "Continue" button

#### Preferences Setup
- Select walking pace (Slow, Moderate, Fast)
- Set search radius slider (0.5km - 5km)
- Age range preference
- Gender preference (Any, Male, Female, Non-binary)
- "Get Walking!" button

### 2. Main App Screens

#### Home/Map Screen (Primary)
**Top Bar:**
- Profile icon (left)
- "Walking Buddy" title (center)
- Filter icon (right)

**Map View:**
- User's current location (blue dot)
- Nearby available walkers (green pins with profile photos)
- Sponsored business locations (yellow star pins)
- Parks and trails (green area overlays)

**Bottom Sheet (Swipe Up):**
- List view of nearby walkers
- Each card shows:
  - Profile photo
  - Name, age
  - Distance away
  - Walking pace
  - "Request Walk" button

**Floating Action Button:**
- Toggle location sharing (ON/OFF)
- Status indicator (Available, Busy, Walking)

#### User Profile Card (Tap on map pin)
- Profile photo (large)
- Name, age
- Bio
- Distance away
- Walking preferences
- "Send Message" button
- "Request Walk" button
- "Report User" link

#### Messages Screen
**Top Bar:**
- "Messages" title
- Search icon

**Conversation List:**
- Each conversation shows:
  - Profile photo
  - Name
  - Last message preview
  - Timestamp
  - Unread badge

**Empty State:**
- Illustration
- "No messages yet"
- "Start a conversation to plan your first walk!"

#### Chat Screen
**Top Bar:**
- Back button
- Profile photo + name
- More options (...)

**Message Area:**
- Chat bubbles (sent/received)
- Timestamps
- Walk request cards:
  - "Walk Request from [Name]"
  - "Accept" / "Decline" buttons

**Bottom:**
- Text input
- Quick replies: "Want to walk?", "Available in 10 mins", "Where to?"
- Send button

#### Active Walk Screen
**Map View:**
- Current route (blue line)
- Both users' locations (animated dots)
- Nearby suggestions (pins):
  - Parks (green)
  - Cafes (brown)
  - Restaurants (red)
  - Attractions (purple)

**Top Card:**
- Partner's profile photo
- "Walking with [Name]"
- Duration timer
- Distance counter
- "End Walk" button

**Bottom Sheet:**
- "Nearby Suggestions" tab
  - List of places with:
    - Name
    - Category
    - Distance
    - Rating
    - "Navigate" button
- "Chat" tab
  - Quick chat with walk partner

#### Walk History Screen
**Top Bar:**
- "My Walks" title
- Filter icon (This week, This month, All time)

**Stats Card:**
- Total walks
- Total distance
- Total time
- Favorite walking partner

**Walk List:**
- Each walk shows:
  - Date
  - Partner's photo + name
  - Duration
  - Distance
  - Route thumbnail map
  - "View Details" link

#### Walk Details Screen
- Full route map
- Walk statistics
- Places visited
- Photos (if any)
- "Walk Again" button
- "Share Walk" button

#### Profile Screen
**Profile Header:**
- Cover photo
- Profile photo (large)
- Edit button
- Name, age
- Bio
- Location (city)

**Stats:**
- Total walks
- Total distance
- Member since

**Sections:**
- Walking Preferences
- Privacy Settings
- Safety & Verification
- Notifications
- Help & Support
- About
- Log Out

#### Settings Screen
**Account:**
- Edit profile
- Change password
- Email preferences

**Privacy:**
- Location sharing
- Who can message me
- Who can see my profile
- Block list

**Safety:**
- Emergency contacts
- Verify identity
- Safety tips

**Notifications:**
- Walk requests
- Messages
- Nearby walkers
- Promotions

**App:**
- Language
- Units (km/miles)
- Dark mode
- Clear cache

### 3. Business Screens (Separate Dashboard)

#### Business Login
- Email/password
- "Sign In" button
- "Register Business" link

#### Business Dashboard
**Overview:**
- Active campaigns
- Total impressions
- Total clicks
- Revenue generated

**Quick Stats Cards:**
- Today's impressions
- This week's clicks
- Active ads
- Budget remaining

**Menu:**
- Campaigns
- Analytics
- Billing
- Settings

#### Create Campaign Screen
**Campaign Details:**
- Campaign name
- Start date / End date
- Daily budget
- Total budget

**Targeting:**
- Location (map selector)
- Radius
- User demographics
- Time of day

**Ad Creative:**
- Business name
- Description
- Upload logo
- Upload photos
- Call-to-action

**Preview:**
- How ad appears on map
- How ad appears in suggestions

**Submit:**
- "Launch Campaign" button
- "Save as Draft" button

#### Analytics Screen
**Date Range Selector:**
- Last 7 days, 30 days, Custom

**Charts:**
- Impressions over time (line chart)
- Clicks over time (line chart)
- Click-through rate (%)
- Cost per click

**Demographics:**
- Age distribution (bar chart)
- Gender distribution (pie chart)
- Peak hours (heat map)

**Performance Table:**
- Campaign name
- Impressions
- Clicks
- CTR
- Spent
- Status

## User Flows

### Flow 1: First-Time User Registration
1. Open app → Welcome screen
2. Tap "Get Started"
3. Enter email, password → Sign up
4. Upload photo, enter details → Profile setup
5. Set preferences → Preferences setup
6. Enable location permission
7. Arrive at Map screen

### Flow 2: Request & Accept Walk
**User A (Requester):**
1. Open Map screen
2. See nearby User B
3. Tap on User B's pin
4. View profile card
5. Tap "Request Walk"
6. Confirmation: "Walk request sent"
7. Wait for response
8. Receive acceptance notification
9. Navigate to Active Walk screen

**User B (Receiver):**
1. Receive push notification
2. Open app → Messages screen
3. See walk request from User A
4. Tap "Accept"
5. Navigate to Active Walk screen

### Flow 3: During Walk
1. Active Walk screen shows both locations
2. Walk together (locations update in real-time)
3. View "Nearby Suggestions"
4. Tap on a cafe
5. See details (rating, distance, reviews)
6. Tap "Navigate"
7. Google Maps opens with directions
8. Arrive at cafe
9. Return to Active Walk screen
10. Continue walk or tap "End Walk"
11. Walk summary shown
12. "Rate your walk partner" prompt
13. Return to Map screen

### Flow 4: Business Creates Ad Campaign
1. Business logs in → Dashboard
2. Tap "Create Campaign"
3. Enter campaign details
4. Set targeting (location, radius, demographics)
5. Upload ad creative
6. Preview ad
7. Set budget
8. Tap "Launch Campaign"
9. Campaign goes live
10. View real-time analytics

### Flow 5: User Sees Business Ad
1. User opens Map screen
2. Sponsored business pins appear (yellow stars)
3. User taps on sponsored pin
4. Business card shows:
   - Name, category
   - Distance
   - Special offer (if any)
   - "Get Directions" button
5. User taps "Get Directions"
6. Click logged for business analytics
7. Navigation starts

## Design Principles

### Visual Design
- **Color Palette:**
  - Primary: Fresh green (#4CAF50)
  - Secondary: Sky blue (#2196F3)
  - Accent: Warm orange (#FF9800)
  - Background: Light gray (#F5F5F5)
  - Text: Dark gray (#333333)

- **Typography:**
  - Headers: Bold, 24-32px
  - Body: Regular, 14-16px
  - Captions: Light, 12px

- **Icons:**
  - Rounded, friendly style
  - Consistent stroke width
  - Material Design or SF Symbols

### UX Principles
1. **Safety First**: Prominent safety features, easy reporting
2. **Privacy Control**: Clear location sharing toggles
3. **Minimal Friction**: Quick walk requests, one-tap actions
4. **Social Proof**: Ratings, verified badges
5. **Gamification**: Walk streaks, achievements, badges
6. **Accessibility**: High contrast, screen reader support, large touch targets

### Interaction Patterns
- **Swipe**: Dismiss notifications, navigate between tabs
- **Long Press**: Quick actions (block user, delete message)
- **Pull to Refresh**: Update nearby users, refresh messages
- **Haptic Feedback**: Confirmation actions, walk requests
- **Animations**: Smooth transitions, loading states

## Responsive Design

### Mobile (Primary)
- Optimized for 375x667 (iPhone SE) to 428x926 (iPhone 14 Pro Max)
- Bottom navigation for easy thumb reach
- Floating action buttons for primary actions

### Tablet (Secondary)
- Split view: Map on left, list on right
- Larger cards with more information
- Multi-column layouts

### Accessibility
- VoiceOver/TalkBack support
- Dynamic type sizing
- High contrast mode
- Reduced motion option
- Color blind friendly palette

## Next Steps for Design

1. **Create High-Fidelity Mockups** in Figma
2. **Build Interactive Prototype** for user testing
3. **Conduct Usability Testing** with target users
4. **Iterate Based on Feedback**
5. **Create Design System** (components, patterns, guidelines)
6. **Prepare Assets** for development (icons, images, animations)
