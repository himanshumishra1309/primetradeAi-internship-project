import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Layout } from './Layout'
import Home from './pages/Home'
import TweetsPage from './pages/TweetsPage'
import Login from './pages/Login'
import Register from './pages/Register'
import UserDashboard from './pages/UserDashboard'
import UserProfile from './pages/UserProfile'
import UserSettings from './pages/UserSettings'
import TweetDetail from './pages/TweetDetail'
import AdminDashboard from './pages/AdminDashboard'
import AdminUserManagement from './pages/AdminUserManagement'
import AdminAnalytics from './pages/AdminAnalytics'
import NotFound from './pages/NotFound'
import Unauthorized from './pages/Unauthorized'

function App() {
  const router = createBrowserRouter(
    [
      {
        path: '/',
        element: <Layout/>,
        children: [
          {
            index: true,
            element: <Home/>
          },
          {
            path: 'tweets',
            element: <TweetsPage/>
          },
          {
            path: 'login',
            element: <Login/>
          },
          {
            path: 'register',
            element: <Register/>
          },
          {
            path: 'dashboard',
            element: <UserDashboard/>
          },
          {
            path: 'profile',
            element: <UserProfile/>
          },
          {
            path: 'settings',
            element: <UserSettings/>
          },
          {
            path: 'tweet/:id',
            element: <TweetDetail/>
          },
          {
            path: 'admin/dashboard',
            element: <AdminDashboard/>
          },
          {
            path: 'admin/users',
            element: <AdminUserManagement/>
          },
          {
            path: 'admin/analytics',
            element: <AdminAnalytics/>
          },
          {
            path: 'unauthorized',
            element: <Unauthorized/>
          },
          {
            path: '*',
            element: <NotFound/>
          }
        ]
      }
    ]
  )
  return (
    <RouterProvider router={router}/>
  )
}

export default App
