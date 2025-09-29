import {Navigate, Outlet} from "react-router-dom";

const ProtectedRoute = () => {
    const isAuthorized = localStorage.getItem("user_token");

    console.log(!isAuthorized, "isAuthorized")
    if (!isAuthorized) return <Navigate to="/login"/>
    return <Outlet/>;
}

export default ProtectedRoute;