# TweetHub - Scalable REST API with Authentication & Role-Based Access

A full-stack Twitter clone application built with Node.js, Express, MongoDB, and React.js featuring secure authentication, role-based access control, and complete CRUD operations.

## 📋 Table of Contents
- [Project Overview](#project-overview)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Project Structure](#project-structure)
- [Database Schema](#database-schema)
- [API Documentation](#api-documentation)
- [Setup Instructions](#setup-instructions)
- [Environment Variables](#environment-variables)
- [Running the Application](#running-the-application)
- [Test Credentials](#test-credentials)
- [Security Features](#security-features)
- [Scalability Notes](#scalability-notes)

## 🎯 Project Overview

TweetHub is a Twitter-inspired social media platform that demonstrates enterprise-level backend architecture with secure authentication, role-based access control, and RESTful API design principles. The application includes both backend APIs and a functional frontend UI for complete user interaction.

**Live Demo:** [Add your deployed link here]

## 🛠 Tech Stack

### Backend
- **Runtime:** Node.js (v18+)
- **Framework:** Express.js (v5.2.1)
- **Database:** MongoDB (v9.1.5) with Mongoose ODM
- **Authentication:** JWT (jsonwebtoken)
- **Password Hashing:** bcrypt
- **API Versioning:** /api/v1
- **Security:** cookie-parser, CORS

### Frontend
- **Framework:** React.js (v19.2.0)
- **Build Tool:** Vite (v7.2.4)
- **Routing:** React Router DOM (v7.13.0)
- **HTTP Client:** Axios (v1.13.4)
- **Styling:** Tailwind CSS (v4.1.18)
- **State Management:** Context API

## ✨ Features

### Backend Features
✅ **User Authentication**
- User registration with password hashing (bcrypt)
- Secure login with JWT access & refresh tokens
- Token-based authentication with HTTP-only cookies
- Logout functionality with token invalidation

✅ **Role-Based Access Control (RBAC)**
- User roles: `user` and `admin`
- Admin can delete any tweet
- Users can only edit/delete their own tweets

✅ **CRUD Operations for Tweets**
- Create new tweets (280 character limit)
- Read all tweets with pagination
- Read tweets by specific user
- Update own tweets (with edited indicator)
- Delete own tweets (users) or any tweet (admins)
- Like/unlike tweets

✅ **API Best Practices**
- RESTful API design
- API versioning (/api/v1)
- Proper HTTP status codes
- Input validation and sanitization
- Centralized error handling
- Async/await with error wrapper

### Frontend Features
✅ **User Interface**
- Responsive design with Tailwind CSS
- User registration and login forms
- Protected routes and dashboards
- Real-time tweet feed with infinite scroll
- Tweet creation with character counter
- Edit and delete modals with confirmation dialogs
- Empty states and loading indicators
- Active route highlighting in navigation

✅ **User Experience**
- Toast notifications for success/error
- Form validation with visual feedback
- Modal-based confirmations (no browser alerts)
- Dynamic content updates without page reload
- Conditional rendering based on auth state

## 📁 Project Structure

```
PrimetradeAIProject/
│
├── client/                          # Frontend Application
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── layout/
│   │   │   │   ├── Navbar.jsx      # Navigation with auth state
│   │   │   │   └── Footer.jsx      # Footer component
│   │   │   └── shared/
│   │   │       ├── ConfirmDialog.jsx    # Reusable confirmation modal
│   │   │       └── EditTweetModal.jsx   # Tweet edit modal
│   │   ├── context/
│   │   │   └── AuthContext.jsx     # Global auth state management
│   │   ├── pages/
│   │   │   ├── Home.jsx            # Landing page
│   │   │   ├── Login.jsx           # Login page
│   │   │   ├── Register.jsx        # Registration page
│   │   │   ├── TweetsPage.jsx      # All tweets feed
│   │   │   ├── UserDashboard.jsx   # User's own tweets
│   │   │   ├── AdminDashboard.jsx  # Admin panel
│   │   │   └── ...
│   │   ├── services/
│   │   │   ├── api.js              # Axios instance with interceptors
│   │   │   ├── authService.js      # Auth API calls
│   │   │   └── tweetService.js     # Tweet API calls
│   │   ├── App.jsx                 # Root component with routing
│   │   ├── Layout.jsx              # Layout wrapper
│   │   └── main.jsx                # Entry point
│   ├── .env                        # Environment variables
│   ├── package.json
│   └── vite.config.js
│
├── server/                          # Backend Application
│   ├── src/
│   │   ├── controller/
│   │   │   ├── user.controller.js  # User auth controllers
│   │   │   └── tweet.controller.js # Tweet CRUD controllers
│   │   ├── db/
│   │   │   └── index.js            # MongoDB connection
│   │   ├── middleware/
│   │   │   └── auth.middleware.js  # JWT verification middleware
│   │   ├── model/
│   │   │   ├── user.model.js       # User schema with methods
│   │   │   └── tweet.model.js      # Tweet schema
│   │   ├── route/
│   │   │   ├── user.route.js       # User routes
│   │   │   └── tweet.route.js      # Tweet routes
│   │   ├── utils/
│   │   │   ├── ApiError.js         # Custom error class
│   │   │   ├── ApiResponse.js      # Standard response format
│   │   │   └── asyncHandler.js     # Async error wrapper
│   │   ├── app.js                  # Express app configuration
│   │   └── index.js                # Server entry point
│   ├── .env                        # Environment variables
│   └── package.json
│
└── README.md                        # Project documentation
```

## 🗄 Database Schema

### User Collection
```javascript
{
  _id: ObjectId,
  f_name: String (required),
  l_name: String (required),
  email: String (required, unique),
  username: String (required, unique),
  dob: Date (required),
  contact_no: String (required),
  user_type: String (enum: ['user', 'admin'], default: 'user'),
  password: String (required, hashed),
  refreshToken: String,
  createdAt: Date,
  updatedAt: Date
}
```

### Tweet Collection
```javascript
{
  _id: ObjectId,
  content: String (required, max: 280),
  owner: ObjectId (ref: 'User'),
  likes: [ObjectId] (ref: 'User'),
  isEdited: Boolean (default: false),
  editedAt: Date,
  createdAt: Date,
  updatedAt: Date
}
```

## 📚 API Documentation

### Base URL
```
http://localhost:8000/api/v1
```

### Authentication Endpoints

#### 1. Register User
```http
POST /users/register
```
**Request Body:**
```json
{
  "f_name": "John",
  "l_name": "Doe",
  "email": "john@example.com",
  "username": "johndoe",
  "dob": "1990-01-01",
  "contact_no": "1234567890",
  "password": "password123",
  "user_type": "user"
}
```
**Response:** `201 Created`
```json
{
  "statusCode": 201,
  "data": {
    "_id": "...",
    "f_name": "John",
    "l_name": "Doe",
    "username": "johndoe",
    "email": "john@example.com",
    "user_type": "user"
  },
  "message": "User registered successfully",
  "success": true
}
```

#### 2. Login User
```http
POST /users/login
```
**Request Body:**
```json
{
  "identifier": "john@example.com",
  "password": "password123"
}
```
**Response:** `200 OK` (Sets HTTP-only cookies)
```json
{
  "statusCode": 200,
  "data": {
    "user": { /* user object */ },
    "accessToken": "jwt_token_here"
  },
  "message": "User logged in successfully",
  "success": true
}
```

#### 3. Logout User
```http
POST /users/logout
```
**Headers:** `Authorization: Bearer <token>` OR Cookie: `accessToken`
**Response:** `200 OK`

### Tweet Endpoints

#### 4. Get All Tweets
```http
GET /tweets?page=1&limit=20&sortBy=createdAt&order=desc
```
**Response:** `200 OK`
```json
{
  "statusCode": 200,
  "data": {
    "tweets": [ /* array of tweets */ ],
    "pagination": {
      "currentPage": 1,
      "totalPages": 5,
      "totalTweets": 100,
      "hasNextPage": true,
      "hasPrevPage": false
    }
  },
  "message": "Tweets fetched successfully",
  "success": true
}
```

#### 5. Get Tweet by ID
```http
GET /tweets/:tweetId
```
**Response:** `200 OK`

#### 6. Get User's Tweets
```http
GET /tweets/user/:userId?page=1&limit=10
```
**Response:** `200 OK`

#### 7. Create Tweet
```http
POST /tweets
```
**Headers:** `Authorization: Bearer <token>`
**Request Body:**
```json
{
  "content": "Hello, World! This is my first tweet."
}
```
**Response:** `201 Created`

#### 8. Update Tweet
```http
PATCH /tweets/:tweetId
```
**Headers:** `Authorization: Bearer <token>`
**Request Body:**
```json
{
  "content": "Updated tweet content"
}
```
**Response:** `200 OK`
**Authorization:** Only tweet owner can update

#### 9. Delete Tweet
```http
DELETE /tweets/:tweetId
```
**Headers:** `Authorization: Bearer <token>`
**Response:** `200 OK`
**Authorization:** Tweet owner OR admin

#### 10. Like/Unlike Tweet
```http
POST /tweets/:tweetId/like
```
**Headers:** `Authorization: Bearer <token>`
**Response:** `200 OK`
```json
{
  "statusCode": 200,
  "data": {
    "liked": true,
    "likesCount": 42
  },
  "message": "Tweet liked successfully",
  "success": true
}
```

### Error Responses
All endpoints return errors in this format:
```json
{
  "statusCode": 400,
  "message": "Error message here",
  "success": false,
  "errors": []
}
```

## 🚀 Setup Instructions

### Prerequisites
- Node.js (v18 or higher)
- MongoDB (v6 or higher)
- npm or yarn
- Git

### 1. Clone the Repository
```bash
git clone <your-repo-url>
cd PrimetradeAIProject
```

### 2. Backend Setup

#### Install Dependencies
```bash
cd server
npm install
```

#### Configure Environment Variables
Create a `.env` file in the `server` directory:
```env
PORT=8000
MONGODB_URI=mongodb://localhost:27017/tweethub
CORS_ORIGIN=http://localhost:5173

ACCESS_TOKEN_SECRET=your_access_token_secret_here_change_this
ACCESS_TOKEN_EXPIRY=1d

REFRESH_TOKEN_SECRET=your_refresh_token_secret_here_change_this
REFRESH_TOKEN_EXPIRY=10d
```

**Generate secure secrets:**
```bash
node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"
```

#### Start MongoDB
Make sure MongoDB is running on your system:
```bash
# Windows
mongod

# macOS (with Homebrew)
brew services start mongodb-community

# Linux
sudo systemctl start mongod
```

#### Run the Backend Server
```bash
# Development mode with auto-reload
npm run dev

# Production mode
npm start
```
Server will run on `http://localhost:8000`

### 3. Frontend Setup

#### Install Dependencies
```bash
cd ../client
npm install
```

#### Configure Environment Variables
Create a `.env` file in the `client` directory:
```env
VITE_API_URL=http://localhost:8000/api/v1
```

#### Run the Frontend
```bash
npm run dev
```
Frontend will run on `http://localhost:5173`

## 🔧 Environment Variables

### Backend (.env)
| Variable | Description | Example |
|----------|-------------|---------|
| PORT | Server port | 8000 |
| MONGODB_URI | MongoDB connection string | mongodb://localhost:27017/tweethub |
| CORS_ORIGIN | Allowed frontend origin | http://localhost:5173 |
| ACCESS_TOKEN_SECRET | JWT access token secret | (64-char hex string) |
| ACCESS_TOKEN_EXPIRY | Access token validity | 1d |
| REFRESH_TOKEN_SECRET | JWT refresh token secret | (64-char hex string) |
| REFRESH_TOKEN_EXPIRY | Refresh token validity | 10d |

### Frontend (.env)
| Variable | Description | Example |
|----------|-------------|---------|
| VITE_API_URL | Backend API base URL | http://localhost:8000/api/v1 |

## 🎮 Running the Application

### Development Mode
1. Start MongoDB service
2. Start backend server: `cd server && npm run dev`
3. Start frontend: `cd client && npm run dev`
4. Open browser: `http://localhost:5173`

### Create Admin User
**Note:** Admin accounts can only be created via API (not through the frontend registration form). The frontend registration is restricted to regular users only.

Use Postman or any API client to create an admin user:
```http
POST http://localhost:8000/api/v1/users/register
Content-Type: application/json

{
  "f_name": "Admin",
  "l_name": "User",
  "email": "admin@tweethub.com",
  "username": "admin",
  "dob": "1990-01-01",
  "contact_no": "1234567890",
  "password": "admin123",
  "user_type": "admin"
}
```

## 🔑 Test Credentials

### Admin Account
For testing admin features (delete any tweet):
- **Email:** admin@tweethub.com
- **Username:** admin
- **Password:** admin123

**Note:** Admin accounts must be created through API/Postman as shown above. They cannot be created through the frontend registration form.

### Regular User Accounts
For testing user features (create, edit, delete own tweets):

**User 1:**
- **Email:** user@example.com
- **Username:** user1
- **Password:** 123456

**User 2:**
- **Email:** user2@example.com
- **Username:** user2
- **Password:** 123456

**Important:** 
- ✅ Regular users **CAN** register through the frontend at `/register`
- ❌ Admin accounts **CANNOT** be created through frontend registration
- ❌ `user_type: "admin"` is ignored in frontend registration for security reasons
- ✅ Use the API endpoint directly (Postman/cURL) to create admin users

### Test the Application
1. **Register** a new user account through frontend (only creates regular users)
2. **Login** with admin or user credentials
3. **Create** tweets from the dashboard
4. **Edit** your own tweets (users only)
5. **Delete** your tweets (users) or any tweet (admin)
6. **Like** tweets from other users
7. **Browse** all tweets in the Tweets page

## 🔒 Security Features

### 1. Password Security
- Passwords hashed using bcrypt (10 salt rounds)
- Never stored or transmitted in plain text
- Pre-save hook in User model for automatic hashing

### 2. JWT Authentication
- Dual token system (access + refresh tokens)
- Access tokens: Short-lived (1 day)
- Refresh tokens: Stored in HTTP-only cookies
- Token verification middleware on protected routes

### 3. HTTP Security
- CORS configured with specific origin
- HTTP-only cookies prevent XSS attacks
- Cookie parser for secure cookie handling
- Authorization header support

### 4. Input Validation
- Content length validation (280 chars for tweets)
- Required field validation
- Email format validation
- Password strength requirements

### 5. Authorization
- Role-based access control (RBAC)
- Ownership verification for updates
- Admin override capabilities
- Protected routes with JWT middleware

### 6. Error Handling
- Centralized error handling
- Custom ApiError class
- Async error wrapper (asyncHandler)
- No sensitive data in error responses

## 📈 Scalability Notes

### Current Architecture
The application follows a modular, scalable architecture suitable for growth:

#### 1. Microservices Ready
- **Separation of Concerns:** Controllers, services, models are decoupled
- **API Versioning:** Easy to maintain multiple API versions
- **Independent Deployment:** Frontend and backend can be deployed separately

#### 2. Database Optimization
- **Indexing:** User email, username indexed for faster queries
- **Pagination:** All list endpoints support pagination
- **Population:** Efficient use of Mongoose populate for relationships
- **Future:** Can migrate to MongoDB Atlas for cloud scaling

#### 3. Caching Strategy (Recommended)
```javascript
// Redis caching for frequently accessed data
- User profiles: 15-minute cache
- Tweet feed: 5-minute cache
- Trending tweets: 10-minute cache
```

#### 4. Load Balancing (Production)
```
                    Load Balancer (Nginx)
                           |
        +------------------+------------------+
        |                  |                  |
    Server 1           Server 2          Server 3
        |                  |                  |
        +------------------+------------------+
                           |
                    MongoDB Cluster
```

#### 5. Horizontal Scaling
- **Stateless Backend:** No session storage, scales horizontally
- **Database Sharding:** MongoDB supports sharding for large datasets
- **CDN:** Static assets can be served via CDN
- **Container Ready:** Can be dockerized for Kubernetes deployment

#### 6. Future Enhancements
- **Message Queue:** RabbitMQ/Kafka for async tasks (email, notifications)
- **WebSockets:** Real-time updates using Socket.io
- **Rate Limiting:** Prevent API abuse with express-rate-limit
- **Monitoring:** Implement logging with Winston/Morgan
- **Search:** Elasticsearch for full-text tweet search
- **Media Upload:** AWS S3 for images/videos
- **Analytics:** Track user engagement and metrics

### Docker Deployment (Optional)

#### Backend Dockerfile
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
EXPOSE 8000
CMD ["npm", "start"]
```

#### Frontend Dockerfile
```dockerfile
FROM node:18-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

#### Docker Compose
```yaml
version: '3.8'
services:
  mongodb:
    image: mongo:latest
    ports:
      - "27017:27017"
    volumes:
      - mongo-data:/data/db
  
  backend:
    build: ./server
    ports:
      - "8000:8000"
    environment:
      - MONGODB_URI=mongodb://mongodb:27017/tweethub
    depends_on:
      - mongodb
  
  frontend:
    build: ./client
    ports:
      - "80:80"
    depends_on:
      - backend

volumes:
  mongo-data:
```

## 📝 API Testing with Postman

Import this collection to test all endpoints:
1. Create a new collection in Postman
2. Add environment variables:
   - `base_url`: http://localhost:8000/api/v1
   - `access_token`: (will be set automatically after login)
3. Use the endpoints documented above

## 🐛 Common Issues & Solutions

### Issue: MongoDB Connection Failed
**Solution:** 
- Ensure MongoDB is running
- Check MONGODB_URI in .env
- Verify MongoDB port (default: 27017)

### Issue: CORS Error
**Solution:**
- Verify CORS_ORIGIN in backend .env matches frontend URL
- Check if cookies are being sent with credentials

### Issue: JWT Token Invalid
**Solution:**
- Regenerate ACCESS_TOKEN_SECRET and REFRESH_TOKEN_SECRET
- Clear browser cookies and login again

### Issue: Port Already in Use
**Solution:**
```bash
# Find and kill process using port 8000
# Windows
netstat -ano | findstr :8000
taskkill /PID <PID> /F

# macOS/Linux
lsof -ti:8000 | xargs kill -9
```
