import "./login.css";

import { useState } from "react";
import { BiUser, BiLock, BiShow, BiSolidShow, BiMailSend } from "react-icons/bi";
import { ToastContainer, toast } from 'react-toastify';


import api from '../../api/axios';

const Login = () => {
    let [isLogin, setIsLogin] = useState(true);
    let [isPassVisisble, setIsPassVisisble] = useState(true);

    const [formData, setFormData] = useState({ username: "", password: "", email: "", currency: "" });

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        console.log(formData);

        if (isLogin) {
            const loginData = { "username": formData.username, "password": formData.password }
            console.log(loginData);

            // const notifyError = (mssgErrorTtl: string, mssgErrorBody: string) => toast.error((<div>
            //     <h4>{mssgErrorTtl}</h4>
            //     <p>{mssgErrorBody}</p>
            // </div>), { theme: "dark" });
            // try {
            //     const res = await api.post('/auth/login', formData);
            //     console.log(res.data);
            //     // localStorage.setItem('token', res.data.token);
            //     // localStorage.setItem('user', JSON.stringify(res.data.user));
            //     //navigate('/dashboard'); // Redirigir al dashboard tras éxito
            // } catch (err: any) {
            //     notifyError(err.response?.data?.title || 'Error al iniciar sesión', err.response?.data?.text || '');
            // }
        } else {
            const loginData = { "username": formData.username, "password": formData.password, "email": formData.email }
            console.log(loginData);
        }


    }

    return (
        <>
            <div className="topInfo">
                <div className="topMssg">
                    <h2>¡Hola de nuevo! 🤗</h2>
                    <p>Ingresa a tu cuenta o crea una nueva para organizar tus finanzas.</p>
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
                            onClick={() => { setIsLogin((isLogin = true)); }}
                        >
                            <p>Iniciar sesión</p>
                        </button>
                        <button
                            className="item"
                            onClick={() => { setIsLogin((isLogin = false)); }}
                        >
                            <p>Registrarse</p>
                        </button>
                    </div>
                </div>

                <div className="formBox">
                    {isLogin ? (
                        <div className="loginForm">
                            <form onSubmit={handleSubmit}>
                                <div className="itemField">
                                    <div className="fieldBox">
                                        <div className="fields">
                                            <div className="icon">
                                                <BiUser />
                                            </div>
                                            <div className="textField">
                                                <input id="field-user"
                                                    type="text"
                                                    placeholder="&nbsp;"
                                                    onChange={(e) =>
                                                        setFormData({
                                                            ...formData,
                                                            username:
                                                                e.target.value,
                                                        })
                                                    }
                                                    required
                                                />
                                                <label htmlFor="field-user" className="lbl">
                                                    Usuario
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="itemField">
                                    <div className="fieldBox">
                                        <div className="fields">
                                            <div className="icon">
                                                <BiLock />
                                            </div>
                                            <div className="textField">

                                                <input id="field-pass"
                                                    type={isPassVisisble ? "password" : "text"}
                                                    placeholder="&nbsp;"
                                                    onChange={(e) =>
                                                        setFormData({
                                                            ...formData,
                                                            password:
                                                                e.target.value,
                                                        })
                                                    }
                                                    required
                                                />
                                                <label htmlFor="field-pass" className="lbl">
                                                    Contraseña
                                                </label>
                                            </div>
                                        </div>
                                        {isPassVisisble ? (
                                            <button type="button" onClick={() => setIsPassVisisble((isPassVisisble = false))} >
                                                <BiShow />
                                            </button>
                                        ) : (
                                            <button type="button" onClick={() => setIsPassVisisble((isPassVisisble = true))} >
                                                <BiSolidShow />
                                            </button>
                                        )}
                                    </div>
                                </div>
                                <button className="summitField" type="submit">Iniciar sesión</button>
                            </form>
                        </div>
                    ) : (
                        <div className="RegisterForm">
                            <form onSubmit={handleSubmit}>
                                <div className="itemField">
                                    <div className="fieldBox">
                                        <div className="fields">
                                            <div className="icon">
                                                <BiUser />
                                            </div>
                                            <div className="textField">
                                                <input id="fieldReg-user"
                                                    type="text"
                                                    placeholder="&nbsp;"
                                                    onChange={(e) =>
                                                        setFormData({
                                                            ...formData,
                                                            username:
                                                                e.target.value,
                                                        })
                                                    }
                                                    required
                                                />
                                                <label htmlFor="fieldReg-user" className="lbl">
                                                    Usuario
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="itemField">
                                    <div className="fieldBox">
                                        <div className="fields">
                                            <div className="icon">
                                                <BiMailSend />
                                            </div>
                                            <div className="textField">
                                                <input id="fieldReg-email"
                                                    type="email"
                                                    placeholder="&nbsp;"
                                                    onChange={(e) =>
                                                        setFormData({
                                                            ...formData,
                                                            email:
                                                                e.target.value,
                                                        })
                                                    }
                                                    required
                                                />
                                                <label htmlFor="fieldReg-email" className="lbl">
                                                    Correo electrónico
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button className="summitField" type="submit">Registrarte</button>
                            </form>
                        </div>
                    )}
                </div>
            </div>

            <ToastContainer />
        </>
    );
};

export default Login;
