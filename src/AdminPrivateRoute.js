import axios from "axios";
import React, {useState, useEffect} from "react";
import { Route, Navigate, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import MasterLayout from "./layouts/admin/MasterLayout";


function AdminPrivateRoute({...rest}) {

    const history = useNavigate();

    const [Authenticated, setAuthenticated] = useState(false)
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        axios.get(`/api/checkingAuthenticated`).then(res => {
            if(res.status === 200) {
                setAuthenticated(true);
            }
            setLoading(false);
        });
    
      return () => {
        setAuthenticated(false);
      }
    }, []);

    axios.interceptors.response.use(undefined, function axiosRetryInterceptor(err) {
        if(err.response.status === 401) {
            swal("Unauthorized", err.response.data.message, "warning");
            history('/');
        }
        return Promise.reject(err);
    });

    if(loading) {
        return <h1>Loading...</h1>
    }
    

    return (
        <Route {...rest}
            render={ ({props, location}) => 
                Authenticated ?
                ( <MasterLayout {...props} /> ) :
                ( <Navigate to={{pathname: "/login", state: {from: location} }} /> ) 
            }
        />
    );
}

export default AdminPrivateRoute;