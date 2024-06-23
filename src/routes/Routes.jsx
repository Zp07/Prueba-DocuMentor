import { createBrowserRouter } from 'react-router-dom'
import App from '../App.jsx'
import Home from '../pages/home/Home.jsx'
import Login from '../pages/auth/Login.jsx'
import Register from '../pages/auth/Register.jsx'
import Profile from '../pages/profile/Profile.jsx'
import Board from '../pages/board/Board.jsx'
import Upload from '../pages/upload/Upload.jsx'

export const router = createBrowserRouter([
    {
      path : '/',
      element: <App />
    },
    {
      path: '/home',
      element: <Home />
    },
    {
      path:'/login',
      element: <Login />
    },
    {
      path:'/register',
      element:<Register />
    },
    {
      path: '/profile',
      element: <Profile />
    },
    {
      path: '/board',
      element: <Board />
    },
    {
      path: '/upload',
      element: <Upload />
    }
  ])