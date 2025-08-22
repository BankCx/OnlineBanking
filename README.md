# Bank of Checkmarx - Online Banking

This is the React-based web application for the intentionally vulnerable Bank of Checkmarx demo application. It provides a modern, responsive interface for online banking operations.

## Technology Stack
- **Framework**: React 18.2.0
- **Build Tool**: Create React App
- **Routing**: React Router DOM
- **Forms**: React Hook Form
- **HTTP Client**: Axios
- **Notifications**: React Toastify
- **Styling**: CSS3/Modern CSS

## Features
- User authentication and login
- Account management
- Fund transfers
- Transaction history
- Document upload
- Account balance checking
- Profile management

## Quick Start

### Prerequisites
- Node.js 16+ and npm
- Access to Bank API and Core Backend services

### Installation
```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build

# Run tests
npm test
```

The application will be available at `http://localhost:3000`

### Environment Configuration
Create a `.env` file in the root directory:
```bash
REACT_APP_API_BASE_URL=http://localhost:8000
REACT_APP_CORE_API_URL=http://localhost:8080
REACT_APP_API_KEY=your_api_key_here
```

## Docker Deployment

### Build Docker Image
```bash
docker build -t bank-online-banking .
```

### Run Container
```bash
docker run -p 3000:3000 bank-online-banking
```

### Using Docker Compose
```bash
# From project root
docker-compose up online-banking
```

## API Integration
The application integrates with:
- **Bank API** (port 8000) - Authentication, file operations
- **Core Backend** (port 8080) - Account management, transactions

## Development

### Project Structure
```
src/
├── components/          # Reusable UI components
│   ├── Login.js        # Login form component
│   └── Transfer.js     # Transfer functionality
├── services/           # API service layer
│   ├── api.js          # Main API client
│   ├── userService.js  # User-related operations
│   └── notificationService.js
├── config/             # Configuration files
│   └── appConfig.js    # Application settings
├── constants/          # Application constants
│   └── securityConstants.js
└── utils/              # Utility functions
    └── securityUtils.js
```

### Available Scripts
- `npm start` - Start development server
- `npm run build` - Build for production
- `npm test` - Run test suite
- `npm run eject` - Eject from Create React App

### Code Quality
- ESLint configuration for code quality
- Prettier for code formatting
- Testing with React Testing Library

## Security Notes

⚠️ **This is an intentionally vulnerable demo application.** Do not use in production.

Known vulnerabilities include:
- Hardcoded API keys
- Client-side security validation
- XSS vulnerabilities
- Insufficient input validation
- Insecure data storage

## Recommended Checkmarx One Configuration
- Criticality: 5
- Cloud Insights: Yes
- Internet-facing: Yes
