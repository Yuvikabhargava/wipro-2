import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
console.log("AuthContext:", useContext(AuthContext));
 // ✅ Ensure correct path

const Navbar = () => {
    const { isAuthenticated, logout } = useContext(AuthContext);  // ✅ Ensure this is wrapped in AuthProvider

    return (
        <nav>
            <a href="/">Home</a>
            {isAuthenticated ? (
                <>
                    <a href="/dashboard">Dashboard</a>
                    <a href="/profile">Profile</a>
                    <button onClick={logout}>Logout</button>
                </>
            ) : (
                <a href="/login">Login</a>
            )}
        </nav>
    );
};

export default Navbar;
