import { useState } from "react";

import { BiUser, BiLock, BiShow, BiSolidShow } from "react-icons/bi";

import api from "../../api/axios";
import { ToastContainer, toast } from "react-toastify";

import { useNavigate } from "react-router-dom";

const LogForm = () => {
    let [isPassVisisble, setIsPassVisisble] = useState(true);

    const [formData, setFormData] = useState({
        username: "",
        password: "",
    });

    const navigate = useNavigate();

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        const notifyError = (mssgErrorTtl: string, mssgErrorBody: string) =>
            toast.error(
                <div>
                    <h4>{mssgErrorTtl}</h4>
                    <p>{mssgErrorBody}</p>
                </div>,
                { theme: "dark" }
            );

        try {
            const res = await api.post("/auth/login", formData);

            localStorage.setItem("token", res.data.token);
            localStorage.setItem("user", JSON.stringify(res.data.user));

            navigate("/dashboard");
        } catch (err: any) {
            notifyError(
                err.response?.data?.title || "Error al iniciar sesión",
                err.response?.data?.text || ""
            );
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="itemField">
                    <div className="fieldBox">
                        <div className="fields">
                            <div className="icon">
                                <BiUser />
                            </div>
                            <div className="textField">
                                <input
                                    id="field-user"
                                    type="text"
                                    placeholder="&nbsp;"
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            username: e.target.value,
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
                                <input
                                    id="field-pass"
                                    type={isPassVisisble ? "password" : "text"}
                                    placeholder="&nbsp;"
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            password: e.target.value,
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
                            <button
                                type="button"
                                onClick={() =>
                                    setIsPassVisisble((isPassVisisble = false))
                                }
                            >
                                <BiShow />
                            </button>
                        ) : (
                            <button
                                type="button"
                                onClick={() =>
                                    setIsPassVisisble((isPassVisisble = true))
                                }
                            >
                                <BiSolidShow />
                            </button>
                        )}
                    </div>
                </div>
                <button className="summitField" type="submit">
                    Iniciar sesión
                </button>
            </form>

            <ToastContainer />
        </>
    );
};

export default LogForm;
