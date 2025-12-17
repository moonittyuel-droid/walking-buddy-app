# Walking Buddy - System Architecture

## High-Level Architecture

### System Components

1. **Mobile Applications** (iOS & Android)
2. **Backend API Server**
3. **Real-time Services**
4. **Database Layer**
5. **External Services**
6. **Business Dashboard**

## Architecture Diagram

```
┌─────────────────────────────────────────────────────────────┐
│                     Mobile Applications                      │
│                    (React Native/Flutter)                    │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐   │
│  │  Auth    │  │   Map    │  │   Chat   │  │ Profile  │   │
│  └──────────┘  └──────────┘  └──────────┘  └──────────┘   │
└────────────────────────┬────────────────────────────────────┘
                         │
                         │ HTTPS/WSS
                         │
┌────────────────────────▼────────────────────────────────────┐
│                    API Gateway / Load Balancer              │
│                         (AWS ALB / Nginx)                    │
└────────────────────────┬────────────────────────────────────┘
                         │
         ┌───────────────┼───────────────┐
         │               │               │
┌────────▼────────┐ ┌───▼────────┐ ┌───▼──────────┐
│  Backend API    │ │  Real-time │ │   Business   │
│   (Node.js)     │ │  Service   │ │  Dashboard   │
│                 │ │ (Socket.io)│ │   (React)    │
│ ┌─────────────┐ │ │            │ │              │
│ │ Auth        │ │ │ Location   │ │ Analytics    │
│ │ Users       │ │ │ Messaging  │ │ Ad Manager   │
│ │ Walks       │ │ │ Presence   │ │ Campaigns    │
│ │ Businesses  │ │ └────────────┘ └──────────────┘
│ │ Ads         │ │
│ └─────────────┘ │
└────────┬────────┘
         │
┌────────▼──────────────────────────────────────────┐
│              Database Layer                        │
│  ┌──────────────┐  ┌──────────────┐  ┌─────────┐ │
│  │  PostgreSQL  │  │   MongoDB    │  │  Redis  │ │
│  │              │  │              │  │         │ │
│  │ Users        │  │ Messages     │  │ Cache   │ │
│  │ Walks        │  │ Chat History │  │ Session │ │
│  │ Businesses   │  │              │  │ Presence│ │
│  │ Ads          │  │              │  │         │ │
│  └──────────────┘  └──────────────┘  └─────────┘ │
└───────────────────────────────────────────────────┘
         │
┌────────▼──────────────────────────────────────────┐
│           External Services                        │
│  ┌──────────────┐  ┌──────────────┐  ┌─────────┐ │
│  │ Google Maps  │  │   Firebase   │  │  Stripe │ │
│  │              │  │              │  │         │ │
│  │ Geocoding    │  │ Auth         │  │ Payments│ │
│  │ Directions   │  │ Push Notif   │  │         │ │
│  │ Places       │  │ Analytics    │  │         │ │
│  └──────────────┘  └──────────────┘  └─────────┘ │
└───────────────────────────────────────────────────┘
```

## Data Flow

### User Discovery Flow
1. User enables location sharing
2. Mobile app sends location to backend via WebSocket
3. Backend updates Redis cache with user location
4. Backend queries nearby users within radius
5. Results sent back to mobile app
6. Map displays nearby available walkers

### Walk Request Flow
1. User A sends walk request to User B
2. Request sent via Socket.io to real-time service
3. Push notification sent to User B
4. User B accepts/declines
5. Response sent back to User A
6. If accepted, walk session created in PostgreSQL
7. Both users' locations tracked during walk

### Business Ad Delivery Flow
1. User opens map or starts walk
2. Backend queries businesses within walk radius
3. Sponsored businesses prioritized
4. Ad impressions logged to PostgreSQL
5. Ads displayed on map as sponsored pins
6. Click events tracked for analytics

## Database Schema

### PostgreSQL Tables

**users**
- id (UUID, PK)
- email (VARCHAR, UNIQUE)
- username (VARCHAR, UNIQUE)
- full_name (VARCHAR)
- profile_photo_url (VARCHAR)
- bio (TEXT)
- age (INT)
- gender (VARCHAR)
- created_at (TIMESTAMP)
- updated_at (TIMESTAMP)

**user_preferences**
- id (UUID, PK)
- user_id (UUID, FK)
- search_radius (FLOAT)
- preferred_pace (VARCHAR)
- age_range_min (INT)
- age_range_max (INT)
- gender_preference (VARCHAR)
- is_location_enabled (BOOLEAN)

**walks**
- id (UUID, PK)
- initiator_id (UUID, FK)
- partner_id (UUID, FK)
- status (VARCHAR) -- requested, accepted, in_progress, completed, cancelled
- start_time (TIMESTAMP)
- end_time (TIMESTAMP)
- distance (FLOAT)
- route_data (JSONB)
- created_at (TIMESTAMP)

**businesses**
- id (UUID, PK)
- name (VARCHAR)
- category (VARCHAR)
- location (GEOGRAPHY)
- address (TEXT)
- phone (VARCHAR)
- website (VARCHAR)
- subscription_tier (VARCHAR)
- created_at (TIMESTAMP)

**ad_campaigns**
- id (UUID, PK)
- business_id (UUID, FK)
- campaign_name (VARCHAR)
- budget (DECIMAL)
- spent (DECIMAL)
- start_date (DATE)
- end_date (DATE)
- status (VARCHAR)
- targeting_radius (FLOAT)

**ad_impressions**
- id (UUID, PK)
- campaign_id (UUID, FK)
- user_id (UUID, FK)
- timestamp (TIMESTAMP)
- location (GEOGRAPHY)

**ad_clicks**
- id (UUID, PK)
- campaign_id (UUID, FK)
- user_id (UUID, FK)
- timestamp (TIMESTAMP)

### MongoDB Collections

**messages**
```json
{
  "_id": "ObjectId",
  "conversation_id": "UUID",
  "sender_id": "UUID",
  "receiver_id": "UUID",
  "message": "String",
  "timestamp": "ISODate",
  "read": "Boolean"
}
```

**walk_routes**
```json
{
  "_id": "ObjectId",
  "walk_id": "UUID",
  "coordinates": [
    {"lat": 0.0, "lng": 0.0, "timestamp": "ISODate"}
  ],
  "points_of_interest": [
    {"name": "String", "type": "String", "location": {"lat": 0.0, "lng": 0.0}}
  ]
}
```

### Redis Cache Structure

**User Presence**
```
Key: user:location:{user_id}
Value: {lat: 0.0, lng: 0.0, status: "available", updated_at: timestamp}
TTL: 300 seconds
```

**Active Walks**
```
Key: walk:active:{walk_id}
Value: {initiator_id: UUID, partner_id: UUID, start_time: timestamp}
TTL: 14400 seconds (4 hours)
```

## API Endpoints

### Authentication
- POST `/api/auth/register` - Register new user
- POST `/api/auth/login` - Login user
- POST `/api/auth/logout` - Logout user
- POST `/api/auth/refresh` - Refresh token

### Users
- GET `/api/users/me` - Get current user profile
- PUT `/api/users/me` - Update profile
- GET `/api/users/nearby` - Get nearby users
- PUT `/api/users/location` - Update location
- PUT `/api/users/preferences` - Update preferences

### Walks
- POST `/api/walks/request` - Request a walk
- PUT `/api/walks/:id/accept` - Accept walk request
- PUT `/api/walks/:id/decline` - Decline walk request
- POST `/api/walks/:id/start` - Start walk
- POST `/api/walks/:id/end` - End walk
- GET `/api/walks/history` - Get walk history
- GET `/api/walks/:id/suggestions` - Get nearby suggestions

### Messages
- GET `/api/messages/:userId` - Get conversation
- POST `/api/messages` - Send message
- PUT `/api/messages/:id/read` - Mark as read

### Businesses (Dashboard)
- POST `/api/businesses/register` - Register business
- GET `/api/businesses/me` - Get business profile
- POST `/api/businesses/campaigns` - Create ad campaign
- GET `/api/businesses/campaigns/:id/analytics` - Get campaign analytics

### Public
- GET `/api/places/nearby` - Get nearby places
- GET `/api/routes/suggestions` - Get route suggestions

## WebSocket Events

### Client → Server
- `location:update` - Update user location
- `presence:online` - User comes online
- `presence:offline` - User goes offline
- `walk:request` - Send walk request
- `walk:accept` - Accept walk
- `walk:decline` - Decline walk
- `message:send` - Send message

### Server → Client
- `users:nearby` - Nearby users update
- `walk:requested` - Received walk request
- `walk:accepted` - Walk accepted
- `walk:declined` - Walk declined
- `message:received` - New message
- `notification` - General notification

## Security Measures

1. **Authentication**: JWT tokens with refresh mechanism
2. **Authorization**: Role-based access control (RBAC)
3. **Data Encryption**: TLS 1.3 for all communications
4. **Location Privacy**: Fuzzy location (100m radius) until walk accepted
5. **Rate Limiting**: API rate limits per user/IP
6. **Input Validation**: All inputs sanitized and validated
7. **SQL Injection Prevention**: Parameterized queries
8. **XSS Prevention**: Content Security Policy headers

## Scalability Considerations

1. **Horizontal Scaling**: Stateless API servers behind load balancer
2. **Database Sharding**: User data sharded by geographic region
3. **Caching Strategy**: Redis for hot data, CDN for static assets
4. **Message Queue**: RabbitMQ for async tasks (notifications, analytics)
5. **Microservices**: Separate services for location, messaging, ads
6. **CDN**: CloudFront for global content delivery

## Monitoring & Observability

- **Application Monitoring**: New Relic / Datadog
- **Error Tracking**: Sentry
- **Logging**: ELK Stack (Elasticsearch, Logstash, Kibana)
- **Metrics**: Prometheus + Grafana
- **Uptime Monitoring**: Pingdom / UptimeRobot
- **Performance**: Google Analytics, Mixpanel

## Disaster Recovery

- **Database Backups**: Daily automated backups to S3
- **Point-in-Time Recovery**: PostgreSQL WAL archiving
- **Multi-Region**: Active-passive setup in 2 AWS regions
- **Failover**: Automated DNS failover with Route53
- **RTO**: 1 hour
- **RPO**: 15 minutes
