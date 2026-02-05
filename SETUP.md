# Setup Instructions

## Quick Start

### 1. Install Dependencies

Open two terminals:

**Terminal 1 (Backend):**
```powershell
cd server
npm install
```

**Terminal 2 (Frontend):**
```powershell
cd client
npm install
```

### 2. Configure Environment Variables

**Backend (.env file is already created in server directory)**
- Located at: `server/.env`
- **IMPORTANT**: Replace the JWT secrets with your own random strings
- You can generate secure secrets using Node.js:
  ```powershell
  node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"
  ```

### 3. Start MongoDB

**Windows:**
```powershell
net start MongoDB
```

**If MongoDB is not installed:**
- Download from: https://www.mongodb.com/try/download/community
- Or use MongoDB Atlas (cloud): https://www.mongodb.com/cloud/atlas
- Update `MONGODB_URI` in `server/.env` with your connection string

### 4. Start the Applications

**Terminal 1 (Backend):**
```powershell
cd server
npm run run
```
Server will start at: http://localhost:8000

**Terminal 2 (Frontend):**
```powershell
cd client
npm run dev
```
Frontend will start at: http://localhost:5173

### 5. Test the Application

1. Open browser and go to: http://localhost:5173
2. Click "Sign Up" to create an account
3. Fill in the registration form
4. Login with your credentials
5. Start tweeting!

## Default Admin Setup

To create an admin user:
1. Register a normal user through the UI
2. Open MongoDB Compass or mongosh
3. Connect to your database
4. Find the user in the `users` collection
5. Update the `user_type` field to "admin"

Example MongoDB command:
```javascript
db.users.updateOne(
  { email: "admin@example.com" },
  { $set: { user_type: "admin" } }
)
```

## Troubleshooting

### Port Already in Use

**Kill process on Windows:**
```powershell
# Find process on port 8000
netstat -ano | findstr :8000

# Kill the process (replace PID with actual process ID)
taskkill /PID <PID> /F

# Find process on port 5173
netstat -ano | findstr :5173

# Kill the process
taskkill /PID <PID> /F
```

### MongoDB Not Running

```powershell
# Check MongoDB status
net start | findstr MongoDB

# Start MongoDB
net start MongoDB

# If MongoDB service doesn't exist, run mongod manually:
mongod --dbpath "C:\data\db"
```

### Cannot Connect to Backend

1. Check if backend server is running on port 8000
2. Verify `CORS_ORIGIN` in server/.env matches frontend URL
3. Check console for errors
4. Ensure MongoDB is connected

### Clear Cache Issues

```powershell
# Clear npm cache
npm cache clean --force

# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

## API Testing

You can test the API using tools like:
- Postman
- Thunder Client (VS Code extension)
- cURL

Example API test:
```powershell
# Health check
curl http://localhost:8000/

# Register user
curl -X POST http://localhost:8000/api/v1/users/register `
  -H "Content-Type: application/json" `
  -d '{
    "f_name": "John",
    "l_name": "Doe",
    "email": "john@example.com",
    "username": "johndoe",
    "password": "password123",
    "dob": "1990-01-01",
    "contact_no": "1234567890"
  }'
```

## Development Tips

1. **Hot Reload**: Both frontend and backend have hot reload enabled
2. **MongoDB Compass**: Use MongoDB Compass to visualize your data
3. **React DevTools**: Install React DevTools browser extension
4. **Network Tab**: Use browser DevTools Network tab to debug API calls
5. **Console**: Check both browser console and server terminal for errors

## Next Steps

After basic setup:
1. Explore the codebase
2. Create some test tweets
3. Test the like functionality
4. Try editing and deleting tweets
5. Create an admin user and test admin features

## Support

If you encounter issues:
1. Check the main README.md for detailed documentation
2. Review error messages in console
3. Verify all environment variables are set correctly
4. Ensure all dependencies are installed
5. Check MongoDB connection

Happy coding! 🚀
