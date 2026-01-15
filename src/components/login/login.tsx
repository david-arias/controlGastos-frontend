import "./login.css";

import React, { useState } from "react";
import { BiUser, BiLock, BiShow } from "react-icons/bi";

const Login = () => {
    let [isActive, setIsActive] = useState(true);
    const [formData, setFormData] = useState({ username: "", password: "" });

    return (
        <>
            <div className="topInfo">top info</div>
            <div className="bottomForm">
                <div className="topTab">
                    <div className="box">
                        <div className={`pillBox ${isActive ? "active" : ""}`}>
                            &nbsp;
                        </div>
                        <button
                            className="item"
                            onClick={() => setIsActive((isActive = true))}
                        >
                            <p>Login</p>
                        </button>
                        <button
                            className="item"
                            onClick={() => setIsActive((isActive = false))}
                        >
                            <p>Register</p>
                        </button>
                    </div>
                </div>

                <div className="formBox">
                    {isActive ? (
                        <div className="loginForm">
                            <form action="">
                                <div className="itemField">
                                    <div className="fieldBox">
                                        <div className="icon">
                                            <BiUser />
                                        </div>
                                        <div className="textField">
                                            <label htmlFor="" className="lbl">
                                                Username
                                            </label>
                                            <input
                                                type="text"
                                                onChange={(e) =>
                                                    setFormData({
                                                        ...formData,
                                                        username:
                                                            e.target.value,
                                                    })
                                                }
                                                required
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="itemField">
                                    <div className="fieldBox">
                                        <div className="icon">
                                            <BiLock />
                                        </div>
                                        <div className="textField">
                                            <label htmlFor="" className="lbl">
                                                Password
                                            </label>
                                            <input
                                                type="password"
                                                onChange={(e) =>
                                                    setFormData({
                                                        ...formData,
                                                        password:
                                                            e.target.value,
                                                    })
                                                }
                                                required
                                            />
                                        </div>
                                        <button>
                                            <BiShow />
                                        </button>
                                    </div>
                                </div>
                                <button className="summitField">Sign in</button>
                            </form>
                        </div>
                    ) : (
                        <p>register</p>
                    )}
                </div>
            </div>
        </>
    );
};

export default Login;
