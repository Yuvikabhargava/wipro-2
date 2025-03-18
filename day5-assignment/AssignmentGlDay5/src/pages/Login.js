import React, { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogin = () => {
        login();
        navigate("/dashboard"); // Redirect to Dashboard after login
    };

    return (
        <div>
            <h2>Login Page</h2>
            <button onClick={handleLogin}>Login</button>
        </div>
    );
};

export default Login;
