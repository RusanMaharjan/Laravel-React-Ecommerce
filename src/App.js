import React from "react";
import {BrowserRouter as Router, Navigate, Route, Routes} from 'react-router-dom'
import Dashboard from "./components/admin/Dashboard";
import Profile from "./components/admin/Profile";
import Login from "./components/frontend/auth/Login";
import Register from "./components/frontend/auth/Register";
import Home from "./components/frontend/Home";
import AdminPrivateRoute from './AdminPrivateRoute';

import MasterLayout from "./layouts/admin/MasterLayout";
import axios from 'axios';
import Page403 from "./components/errors/Page403";
import Page404 from "./components/errors/Page404";
import Category from "./components/admin/Category";

axios.defaults.baseURL = "http://localhost:8000/";
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Accept'] = 'application/json';

axios.defaults.withCredentials = true;
axios.interceptors.request.use(function (config){
  const token = localStorage.getItem('auth_token');
  config.headers.Authorization = token ? `Bearer ${token}` : '';
  return config;
});


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/admin" name="Admin" element={<MasterLayout/>}/>
          <Route path="/admin/dashboard" name="Dashboard" element={<Dashboard/>}/>
          <Route path="/admin/profile" name="Profile" element={<Profile/>}/>
          <Route path="/admin/add-category" name="Category" element={<Category/>}/>
          

          {/* error pages */}
          <Route path="/403" element={<Page403/>}/>
          <Route path="/404" element={<Page404/>}/>




          {/* auth routes */}
          <Route path="/login" element={localStorage.getItem('auth_token') ? <Navigate to='/'/> : <Login/> }/>
          
          <Route path="/register" element={localStorage.getItem('auth_token') ? <Navigate to='/'/> : <Register/>}/>
          {/* <Route path="/register" element={<Register/>}/>
          <Route path="/login" element={<Login/>}/> */}
          
          <Route element={<AdminPrivateRoute path='/admin' name="Admin"/>} />
        </Routes>

      </Router>
    </div>
  );
}

export default App;
