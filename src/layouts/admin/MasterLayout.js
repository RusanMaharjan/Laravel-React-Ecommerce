import React from "react";

import {Routes, Route, Navigate } from 'react-router-dom';
import '../../assets/admin/css/styles.css';
import '../../assets/admin/js/scripts';
import Footer from "./Footer";

import Navbar from './Navbar'
import Sidebar from "./Sidebar";

import routes from "../../routes/routes";

const MasterLayout = () => {
    return (
        <div className="sb-nav-fixed">
            <Navbar />

            <div id="layoutSidenav">
                <div id="layoutSidenav_nav">
                    <Sidebar />
                </div>

                <div id="layoutSidenav_content">
                    <main>
                        <Routes>
                            <Route path="/admin" element={<Navigate to="/admin/dashboard" />}/>
                        </Routes>
                        
                        <h1>This is master page</h1>

                    </main>

                    <Footer/>
                </div>
            </div>
        </div>
    );
}

export default MasterLayout;
