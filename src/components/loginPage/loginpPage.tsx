import { useState, useEffect } from "react";

import Splash from "../splash/splash";
import LoginForm from "./loginForm";
import RegisterForm from "./registerForm";

function LoginPage() {
    const [dataLoad, setDataLoad] = useState(false);
    let [isLogin, setIsLogin] = useState(true);

    const handleRegisterSuccess = () => {
        setIsLogin(true); // Cambia la vista a Login
    };

    useEffect(() => {
        // get server is OK
        setTimeout(() => {
            setDataLoad(true);
        }, 3000);
    }, []);

    return (
        <>
            <div className="topMssg z-10 flex justify-center items-center w-screen h-[30vh] top-0 left-0 absolute">
                <div className="box p-2 text-center ">
                    <h3 className="text-3xl p-2 text-sky-900">
                        ¡Hola de nuevo! 😁
                    </h3>
                    <p className="text-lg text-sky-900">
                        Ingresa a tu cuenta o crea una nueva para organizar tus
                        finanzas.
                    </p>
                </div>
            </div>
            <div
                className={`w-screen z-20 transition-all duration-300 left-0 bg-linear-to-t from-blue-950 to-blue-800 absolute ${dataLoad ? "block h-[70vh] rounded-t-4xl top-[30vh]" : "top-0 h-screen flex justify-center items-center"}`}
            >
                {!dataLoad ? (
                    <Splash />
                ) : (
                    <>
                        <div className="p-4 w-full">
                            <div className="borderBisel-rounded relative bg-slate-50/25 flex h-16 w-full rounded-4xl">
                                <div
                                    className={`m-2 border-sky-500 border-2 border-solid transition-all duration-300 absolute w-42 bg-slate-50 z-10 h-12 border-none rounded-4xl pillBox ${isLogin ? "left-0" : "left-[50%]"}`}
                                >
                                    &nbsp;
                                </div>
                                <button
                                    className={`border-none rounded-sm m-2 flex justify-center w-1/2 z-20 items-center ${isLogin ? "text-blue-950" : "text-slate-50"}`}
                                    onClick={() => {
                                        setIsLogin((isLogin = true));
                                    }}
                                >
                                    <p>Iniciar sesión</p>
                                </button>
                                <button
                                    className={`border-none rounded-sm m-2 flex justify-center w-1/2 z-20 items-center ${!isLogin ? "text-blue-950" : "text-slate-50"}`}
                                    onClick={() => {
                                        setIsLogin((isLogin = false));
                                    }}
                                >
                                    <p>Registrarse</p>
                                </button>
                            </div>
                        </div>
                        <div className="p-4">
                            {isLogin ? (
                                <div className="loginForm">
                                    <LoginForm />
                                </div>
                            ) : (
                                <div className="RegisterForm">
                                    <RegisterForm
                                        onRegisterSuccess={
                                            handleRegisterSuccess
                                        }
                                    />
                                </div>
                            )}
                        </div>
                    </>
                )}
            </div>
        </>
    );
}

export default LoginPage;
