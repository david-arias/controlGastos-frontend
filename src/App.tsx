import "./App.css";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";

import Login from "./components/login/login";
import Dashboard from "./components/dashboard";

import ProtectedRoute from "./components/protectedRoute";

function App() {
    const isAuthenticated = !!localStorage.getItem("token");

    return (
        <Router>
            <Routes>
                <Route
                    path="/login"
                    element={
                        isAuthenticated ? (
                            <Navigate to="/dashboard" />
                        ) : (
                            <Login />
                        )
                    }
                />
                <Route
                    path="/dashboard"
                    element={
                        <ProtectedRoute>
                            <Dashboard />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/dashboard"
                    element={
                        isAuthenticated ? (
                            <Dashboard />
                        ) : (
                            <Navigate to="/login" />
                        )
                    }
                />
                <Route
                    path="/"
                    element={isAuthenticated ? <Dashboard /> : <Login />}
                />
            </Routes>
        </Router>
    );
}

export default App;
