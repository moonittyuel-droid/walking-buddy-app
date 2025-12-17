require('dotenv').config();
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: process.env.CORS_ORIGIN?.split(',') || '*',
    methods: ['GET', 'POST']
  }
});

// Middleware
app.use(helmet());
app.use(cors({
  origin: process.env.CORS_ORIGIN?.split(',') || '*'
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan('combined'));

// Rate limiting
const limiter = rateLimit({
  windowMs: parseInt(process.env.RATE_LIMIT_WINDOW_MS) || 15 * 60 * 1000,
  max: parseInt(process.env.RATE_LIMIT_MAX_REQUESTS) || 100
});
app.use('/api/', limiter);

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// API Routes (to be implemented)
app.use('/api/v1/auth', require('./routes/auth'));
app.use('/api/v1/users', require('./routes/users'));
app.use('/api/v1/walks', require('./routes/walks'));
app.use('/api/v1/messages', require('./routes/messages'));
app.use('/api/v1/businesses', require('./routes/businesses'));
app.use('/api/v1/places', require('./routes/places'));

// WebSocket connection handling
io.on('connection', (socket) => {
  console.log('New client connected:', socket.id);

  // Location update
  socket.on('location:update', (data) => {
    // Update user location in Redis
    // Broadcast to nearby users
  });

  // Presence
  socket.on('presence:online', (userId) => {
    socket.join(`user:${userId}`);
  });

  socket.on('presence:offline', (userId) => {
    socket.leave(`user:${userId}`);
  });

  // Walk requests
  socket.on('walk:request', (data) => {
    io.to(`user:${data.receiverId}`).emit('walk:requested', data);
  });

  socket.on('walk:accept', (data) => {
    io.to(`user:${data.requesterId}`).emit('walk:accepted', data);
  });

  socket.on('walk:decline', (data) => {
    io.to(`user:${data.requesterId}`).emit('walk:declined', data);
  });

  // Messaging
  socket.on('message:send', (data) => {
    io.to(`user:${data.receiverId}`).emit('message:received', data);
  });

  socket.on('disconnect', () => {
    console.log('Client disconnected:', socket.id);
  });
});

// Error handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    error: {
      message: err.message || 'Internal Server Error',
      ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
    }
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' });
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`🚀 Walking Buddy API running on port ${PORT}`);
  console.log(`📍 Environment: ${process.env.NODE_ENV}`);
  console.log(`🔌 WebSocket server ready`);
});

module.exports = { app, io };
