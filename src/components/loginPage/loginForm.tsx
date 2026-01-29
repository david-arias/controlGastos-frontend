import { useState } from "react";

import { BiUser, BiLock, BiShow, BiSolidShow } from "react-icons/bi";

import api from "../../api/axios";
import { ToastContainer, toast } from "react-toastify";

import { useNavigate } from "react-router-dom";

function LoginForm() {
    let [isPassVisisble, setIsPassVisisble] = useState(true);

    const [formData, setFormData] = useState({
        username: "",
        password: "",
    });

    const navigate = useNavigate();

    const handleSubmit = async (e: any) => {
        e.preventDefault();

        const notifyError = (mssgErrorTtl: string, mssgErrorBody: string) => {
            toast.error(
                <div>
                    <h4>{mssgErrorTtl}</h4>
                    <p>{mssgErrorBody}</p>
                </div>,
                { theme: "dark" },
            );
        };

        try {
            const res = await api.post("/auth/login", formData);

            localStorage.setItem("token", res.data.token);
            localStorage.setItem("user", JSON.stringify(res.data.user));

            navigate("/dashboard");
        } catch (err: any) {
            notifyError(
                err.response?.data?.title || "Error al iniciar sesión",
                err.response?.data?.text || "",
            );
        }

        console.log(formData);
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="pb-4 animate__animated animate__fadeInUp anima-delay-0">
                    <div className="borderBisel-2 bg-slate-50/15 backdrop-blur-sm rounded-lg ">
                        <div className="flex items-center pt-2 pb-2 pr-4 pl-4 relative z-10">
                            <div className="w-8 h-8 text-slate-50">
                                <BiUser />
                            </div>
                            <div className="textField relative w-full">
                                <input
                                    className="relative text-slate-50 text-base transition-all duration-300 w-full h-10"
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
                                <label
                                    htmlFor="field-user"
                                    className="lbl absolute text-base text-slate-50 transition-all duration-300"
                                >
                                    Usuario
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pb-4 animate__animated animate__fadeInUp anima-delay-100">
                    <div className="borderBisel-2 bg-slate-50/15 backdrop-blur-sm rounded-lg ">
                        <div className="flex items-center pt-2 pb-2 pr-4 pl-4 relative z-10">
                            <div className="w-8 h-8 text-slate-50">
                                <BiLock />
                            </div>
                            <div className="textField relative w-full">
                                <input
                                    className="relative text-slate-50 text-base transition-all duration-300 w-full h-10"
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
                                <label
                                    htmlFor="field-pass"
                                    className="lbl absolute text-base text-slate-50 transition-all duration-300"
                                >
                                    Contraseña
                                </label>
                            </div>
                            {isPassVisisble ? (
                                <button
                                    className="w-8 h-8 text-slate-50"
                                    type="button"
                                    onClick={() =>
                                        setIsPassVisisble(
                                            (isPassVisisble = false),
                                        )
                                    }
                                >
                                    <BiShow />
                                </button>
                            ) : (
                                <button
                                    className="w-8 h-8 text-slate-50"
                                    type="button"
                                    onClick={() =>
                                        setIsPassVisisble(
                                            (isPassVisisble = true),
                                        )
                                    }
                                >
                                    <BiSolidShow />
                                </button>
                            )}
                        </div>
                    </div>
                </div>
                <button
                    className="borderBisel-2 relative w-full h-15 text-slate-50 text-base border-sm rounded-sm bg-linear-to-t from-sky-500 to-indigo-500 animate__animated animate__fadeInUp anima-delay-200"
                    type="submit"
                >
                    Iniciar sesión
                </button>

                <ToastContainer />
            </form>
        </>
    );
}

export default LoginForm;
