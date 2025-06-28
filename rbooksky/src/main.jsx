import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Home.jsx';
import View from './View.jsx';

const router=createBrowserRouter([
  {
    path:'/',
    element:<Home/>
  },
  {
    path:'/app',
    element:<App/>
  },
  {
    path:'/view',
    element:<View/>
  }
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
