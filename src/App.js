import React from 'react';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import ForgotPassword from './components/auth/ForgotPassword';
import ResetPassword from './components/auth/ResetPassword';
import EmailVerification from './components/auth/EmailVerification';
import BlogList from './components/blog/BlogList';
import CreateBlog from './components/blog/CreateBlog';
import EditBlog from './components/blog/EditBlog';
import PrivateRoute from './components/common/PrivateRoute';

const App = () => (
  <Router>

    <Routes>
    {/* <Route exact path="/" element={<BlogList/>} /> */}
    <Route exact path="/login" element={<Login/>} />
    <Route exact path="/register" element={<Register/>} />
    <Route exact path="/forgot-password" element={<ForgotPassword/>} />
    <Route exact path="/reset-password/:token" element={<ResetPassword/>} />
    <Route exact path="/verify-email/:token" element={<EmailVerification/>} />
    <Route
          path="/"
          element={<PrivateRoute  element={BlogList} />}
        />
        <Route
          path="/create-blog"
          element={<PrivateRoute  element={CreateBlog} />}
        />
        <Route
          path="/edit-blog/:id"
          element={<PrivateRoute  element={EditBlog} />}
        />
    </Routes>
   

  </Router>
);

export default App;
