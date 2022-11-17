import React from "react";
import Navbar from "../../../layouts/frontend/Navbar";

function Register() {
    return(
        <div>
            <Navbar/>
            
            <div className="container py-5">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">
                                <h4>Register</h4>
                            </div>

                            <div className="card-body">
                                <form action="">
                                    <div className="form-group mb-3">
                                        <label className="form-label">Full Name</label>
                                        <input type="text" name="name" className="form-control" />
                                    </div>
                                    <div className="form-group mb-3">
                                        <label className="form-label">Email</label>
                                        <input type="email" name="email" className="form-control" />
                                    </div>
                                    <div className="form-group mb-3">
                                        <label className="form-label">Password</label>
                                        <input type="password" name="password" className="form-control" />
                                    </div>
                                    <div className="form-group mb-3">
                                        <label className="form-label">Confirm Password</label>
                                        <input type="password" name="confirm_password" className="form-control" />
                                    </div>
                                    <div className="form-group mb-3">
                                        <button type="submit" className="btn btn-primary">Register</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Register;