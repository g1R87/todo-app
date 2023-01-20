import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AuthContextProvider from './context/authContext';
import Login from './pages/Login';
import Signup from './pages/Signup';
import TodoDetails from './pages/TodoDetails';

//remove-later

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/todo/:id',
    element: <TodoDetails />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/signup',
    element: <Signup />,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AuthContextProvider>
      <div className="container">
        <RouterProvider router={router} />
      </div>
    </AuthContextProvider>
  </React.StrictMode>
);
