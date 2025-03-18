import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext"; // Ensure correct path

const PrivateRoute = ({ children }) => {
    const { isAuthenticated } = useContext(AuthContext); // Ensure AuthContext is implemented

    return isAuthenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
