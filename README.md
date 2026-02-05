# TweetHub - Twitter Clone with MERN Stack

A full-featured Twitter-like social media application built with MongoDB, Express.js, React, and Node.js with Role-Based Access Control (RBAC).

## Features

### Authentication & Authorization
- JWT-based authentication with access and refresh tokens
- Role-based access control (User & Admin roles)
- Secure password hashing with bcrypt
- HTTP-only cookies for token storage

### Tweet Management
- Create tweets (max 280 characters)
- Edit and delete tweets (owners & admins)
- Like/unlike tweets
- View all tweets with pagination
- View user-specific tweets
- Admin can delete any tweet

### User Management
- User registration with validation
- User login/logout
- Profile management
- User dashboard

## Tech Stack

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM
- **JWT** - Authentication
- **Bcrypt** - Password hashing
- **Cookie-parser** - Cookie handling
- **CORS** - Cross-origin resource sharing

### Frontend
- **React 19** - UI library
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **React Router DOM** - Routing
- **Axios** - HTTP client
- **Context API** - State management

## Project Structure

```
PrimetradeAIProject/
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/    # Reusable components
│   │   │   └── layout/   # Layout components (Navbar, Footer)
│   │   ├── context/      # React Context (AuthContext)
│   │   ├── pages/        # Page components
│   │   ├── services/     # API service files
│   │   ├── App.jsx       # Main app component
│   │   └── main.jsx      # Entry point
│   ├── .env              # Environment variables
│   └── package.json
│
└── server/                # Backend Node.js application
    ├── src/
    │   ├── controller/   # Request handlers
    │   ├── middleware/   # Express middleware
    │   ├── model/        # Mongoose models
    │   ├── route/        # API routes
    │   ├── utils/        # Utility functions
    │   ├── db/           # Database connection
    │   ├── app.js        # Express app setup
    │   └── index.js      # Server entry point
    ├── .env.example      # Example environment variables
    └── package.json
```

## Installation & Setup

### Prerequisites
- Node.js (v18 or higher)
- MongoDB (v6 or higher)
- npm or yarn

### Backend Setup

1. Navigate to server directory:
```bash
cd server
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file in server directory:
```bash
cp .env.example .env
```

4. Configure environment variables in `.env`:
```env
PORT=8000
MONGODB_URI=mongodb://localhost:27017
CORS_ORIGIN=http://localhost:5173

# Generate secure random strings for these:
ACCESS_TOKEN_SECRET=your-access-token-secret-here
ACCESS_TOKEN_EXPIRY=1d
REFRESH_TOKEN_SECRET=your-refresh-token-secret-here
REFRESH_TOKEN_EXPIRY=7d
```

5. Start MongoDB service (if running locally):
```bash
# On Windows
net start MongoDB

# On macOS/Linux
sudo systemctl start mongod
```

6. Start the backend server:
```bash
# Development mode
npm run run

# Production mode
npm start
```

Server will run on `http://localhost:8000`

### Frontend Setup

1. Navigate to client directory:
```bash
cd client
```

2. Install dependencies:
```bash
npm install
```

3. The `.env` file is already configured with:
```env
VITE_API_URL=http://localhost:8000/api/v1
```

4. Start the development server:
```bash
npm run dev
```

Frontend will run on `http://localhost:5173`

## API Endpoints

### Authentication Routes (`/api/v1/users`)

| Method | Endpoint | Auth Required | Description |
|--------|----------|---------------|-------------|
| POST | `/register` | No | Register new user |
| POST | `/login` | No | Login user |
| POST | `/logout` | Yes | Logout user |

### Tweet Routes (`/api/v1/tweets`)

| Method | Endpoint | Auth Required | Description |
|--------|----------|---------------|-------------|
| GET | `/` | No | Get all tweets (pagination) |
| GET | `/:tweetId` | No | Get single tweet |
| GET | `/user/:userId` | No | Get user's tweets |
| POST | `/` | Yes | Create new tweet |
| PATCH | `/:tweetId` | Yes | Update tweet (owner only) |
| DELETE | `/:tweetId` | Yes | Delete tweet (owner/admin) |
| POST | `/:tweetId/like` | Yes | Like/unlike tweet |

## Usage

### User Registration
1. Navigate to `/register`
2. Fill in all required fields:
   - First Name
   - Last Name
   - Email
   - Username
   - Date of Birth
   - Contact Number
   - Password (min 6 characters)
3. Click "Create Account"
4. Redirected to login page

### User Login
1. Navigate to `/login`
2. Enter email and password
3. Click "Sign In"
4. Redirected to dashboard

### Creating Tweets
1. Login to your account
2. Navigate to `/dashboard` or `/tweets`
3. Use the tweet form at the top
4. Type your message (max 280 characters)
5. Click "Tweet" to post

### Interacting with Tweets
- **Like**: Click the heart icon
- **Edit**: Click the edit icon (your tweets only)
- **Delete**: Click the delete icon (your tweets or admin)

## Color Scheme

The application uses a consistent color palette:
- **Primary Orange**: `#EE6C29`
- **Primary Jet**: `#282B2B`
- **Primary Moonstone**: `#7AA6B3`
- **Gray Shades**: Various for UI elements

## Security Features

1. **Password Security**
   - Passwords hashed with bcrypt (10 rounds)
   - Minimum 6 characters required

2. **JWT Tokens**
   - Access token (1 day expiry)
   - Refresh token (7 days expiry)
   - HTTP-only cookies

3. **Input Validation**
   - Email format validation
   - Username uniqueness check
   - Content length validation (280 chars)

4. **CORS Protection**
   - Configured origin whitelist
   - Credentials support enabled

5. **Error Handling**
   - Centralized error handling
   - Custom ApiError class
   - Async handler wrapper

## Development

### Running in Development Mode

Backend:
```bash
cd server
npm run run
```

Frontend:
```bash
cd client
npm run dev
```

### Building for Production

Frontend:
```bash
cd client
npm run build
```

Backend is ready for production with:
```bash
cd server
npm start
```

## Troubleshooting

### MongoDB Connection Issues
- Ensure MongoDB service is running
- Check `MONGODB_URI` in `.env`
- Verify database name matches in code

### CORS Errors
- Verify `CORS_ORIGIN` in backend `.env`
- Ensure frontend URL matches exactly

### JWT Errors
- Generate new secure secrets
- Clear cookies and localStorage
- Check token expiry settings

### Port Already in Use
```bash
# Kill process on port 8000 (Windows)
netstat -ano | findstr :8000
taskkill /PID <PID> /F

# Kill process on port 5173 (Windows)
netstat -ano | findstr :5173
taskkill /PID <PID> /F
```

## Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is for educational purposes.

## Contact

For issues and questions, please create an issue in the repository.

---

**Note**: This is a learning project and should not be used in production without proper security audits and enhancements.
