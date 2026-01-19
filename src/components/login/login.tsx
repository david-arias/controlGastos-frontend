import "./login.css";

import LogForm from "./logForm";
import RegForm from "./regForm";

import { useState } from "react";
import { Navigate } from "react-router-dom";

const Login = () => {
    let [isLogin, setIsLogin] = useState(true);

    const handleRegisterSuccess = () => {
        setIsLogin(true); // Cambia la vista a Login
    };

    const isAuthenticated = !!localStorage.getItem("token");
    if (isAuthenticated) {
        <Navigate to="/dashboard" />;
    }

    return (
        <>
            <div className="topInfo">
                <div className="topMssg">
                    <h2>¡Hola de nuevo! 🤗</h2>
                    <p>
                        Ingresa a tu cuenta o crea una nueva para organizar tus
                        finanzas.
                    </p>
                </div>
            </div>
            <div className="bottomForm">
                <div className="topTab">
                    <div className="box">
                        <div className={`pillBox ${isLogin ? "active" : ""}`}>
                            &nbsp;
                        </div>
                        <button
                            className="item"
                            onClick={() => {
                                setIsLogin((isLogin = true));
                            }}
                        >
                            <p>Iniciar sesión</p>
                        </button>
                        <button
                            className="item"
                            onClick={() => {
                                setIsLogin((isLogin = false));
                            }}
                        >
                            <p>Registrarse</p>
                        </button>
                    </div>
                </div>

                <div className="formBox">
                    {isLogin ? (
                        <div className="loginForm">
                            <LogForm />
                        </div>
                    ) : (
                        <div className="RegisterForm">
                            <RegForm
                                onRegisterSuccess={handleRegisterSuccess}
                            />
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default Login;
