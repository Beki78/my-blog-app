import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import "./index.css";
import Layout from './components/Layout.jsx';
import ErrorPage from "./pages/ErrorPage.jsx"
import Home from "./pages/Home.jsx"
import PostDetail from "./pages/PostDetail.jsx"
import Register from "./pages/Register.jsx"
import LoginPage from "./pages/LoginPage.jsx";
import LogoutPage from "./pages/LogoutPage.jsx";
import UserProfile from "./pages/UserProfile.jsx";
import Authors from "./pages/Authors.jsx";
import CreatePosts from "./pages/CreatePosts.jsx";
import CategoryPosts from "./pages/CategoryPosts.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import EditPost from "./pages/EditPost.jsx";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "posts/:id", element: <PostDetail /> },
      { path: "register", element: <Register /> },
      { path: "login", element: <LoginPage /> },
      { path: "profile/:id", element: <UserProfile /> },
      { path: "authors", element: <Authors /> },
      { path: "posts/user/:id", element: <AuthorsPosts /> },
      { path: "create", element: <CreatePosts /> },
      { path: "posts/categories/:category", element: <CategoryPosts /> },
      { path: "myposts/:id", element: <Dashboard /> },
      { path: "posts/:id/edit", element: <EditPost /> },
      { path: "logout", element: <LogoutPage /> },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)