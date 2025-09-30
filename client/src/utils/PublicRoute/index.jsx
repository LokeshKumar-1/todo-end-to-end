import {getToken} from "../../api/storageService.js";
import {VITE_STORAGE_KEY} from "../../config/env.js";
import {Navigate, Outlet} from "react-router-dom";

const PublicRoute = () => {
    const isAuthorized = localStorage.getItem("token");

    console.log(isAuthorized, "isAuthorized in public")

    if (isAuthorized) {
        return <Navigate to="/dashboard"/>; // redirect to dashboard if logged in
    }

    return <Outlet/>;
}

export default PublicRoute;