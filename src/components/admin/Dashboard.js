import React from "react";
import Footer from "../../layouts/admin/Footer";
import Navbar from "../../layouts/admin/Navbar";
import Sidebar from "../../layouts/admin/Sidebar";

function Dashboard() {
    return(
        <div className="sb-nav-fixed">
            <Navbar />

            <div id="layoutSidenav">
                <div id="layoutSidenav_nav">
                    <Sidebar />
                </div>

                <div id="layoutSidenav_content">
                    <main>
                        <h1>This is dashboard</h1>

                    </main>

                    <Footer/>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;