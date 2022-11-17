import React from "react";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Dashboard from "./components/admin/Dashboard";
import Profile from "./components/admin/Profile";
import Login from "./components/frontend/auth/Login";
import Register from "./components/frontend/auth/Register";
import Home from "./components/frontend/Home";

import MasterLayout from "./layouts/admin/MasterLayout";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/home" element={<Home/>}/>
          <Route path="/admin" name="Admin" element={<MasterLayout/>}/>
          <Route path="/admin/dashboard" name="Dashboard" element={<Dashboard/>}/>
          <Route path="/admin/profile" name="Profile" element={<Profile/>}/>
          
          {/* auth routes */}
          <Route path="/register" element={<Register/>}/>
          <Route path="/login" element={<Login/>}/>

          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
