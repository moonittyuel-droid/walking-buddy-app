# Contributing to Walking Buddy

Thank you for your interest in contributing to Walking Buddy! We welcome contributions from the community.

## Getting Started

1. Fork the repository
2. Clone your fork: `git clone https://github.com/YOUR_USERNAME/walking-buddy-app.git`
3. Create a branch: `git checkout -b feature/your-feature-name`
4. Make your changes
5. Commit: `git commit -m "Add your feature"`
6. Push: `git push origin feature/your-feature-name`
7. Open a Pull Request

## Development Setup

### Prerequisites
- Node.js 18+
- React Native CLI or Flutter SDK
- PostgreSQL 14+
- Redis
- Google Maps API key

### Backend Setup
```bash
cd backend
npm install
cp .env.example .env
# Edit .env with your configuration
npm run dev
```

### Mobile Setup
```bash
cd mobile
npm install
# For iOS
npm run ios
# For Android
npm run android
```

## Code Style

- Follow ESLint configuration
- Use Prettier for formatting
- Write meaningful commit messages
- Add comments for complex logic
- Write tests for new features

## Pull Request Guidelines

- Keep PRs focused on a single feature/fix
- Update documentation as needed
- Add tests for new functionality
- Ensure all tests pass
- Follow the PR template

## Reporting Issues

- Use GitHub Issues
- Provide clear description
- Include steps to reproduce
- Add screenshots if applicable
- Specify environment details

## Code of Conduct

- Be respectful and inclusive
- Welcome newcomers
- Provide constructive feedback
- Focus on the code, not the person

## Questions?

Open an issue or reach out to hello@walkingbuddy.app

Thank you for contributing! 🚶‍♂️
