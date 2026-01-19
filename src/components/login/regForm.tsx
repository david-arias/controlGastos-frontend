import { useState } from "react";

import {
    BiUser,
    BiLock,
    BiShow,
    BiSolidShow,
    BiMailSend,
    BiCaretDown,
    BiDollar,
} from "react-icons/bi";

import api from "../../api/axios";
import { ToastContainer, toast } from "react-toastify";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

interface RegisterProps {
    onRegisterSuccess: () => void;
}

const RegForm = ({ onRegisterSuccess }: RegisterProps) => {
    let [isPassVisisble, setIsPassVisisble] = useState(true);

    const [formData, setFormData] = useState({
        username: "",
        password: "",
        email: "",
        currency: "",
    });

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        console.log(formData);

        const notifyError = (mssgErrorTtl: string, mssgErrorBody: string) =>
            toast.error(
                <div>
                    <h4>{mssgErrorTtl}</h4>
                    <p>{mssgErrorBody}</p>
                </div>,
                { theme: "dark" }
            );

        const showSwal = (title: string, text: string) => {
            withReactContent(Swal)
                .fire({
                    title,
                    text,
                    icon: "success",
                    showConfirmButton: false,
                })
                .then((res: any) => {
                    if (res.isDismissed) {
                        onRegisterSuccess();
                    }
                });
        };

        try {
            const res = await api.post("/auth/register", formData);
            console.log(res.data);

            showSwal(
                res.data?.title || "Error al registrar",
                res.data?.text || ""
            );
        } catch (err: any) {
            notifyError(
                err.response?.data?.title || "Error al registrar",
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
                                    id="fieldReg-user"
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
                <div className="itemField">
                    <div className="fieldBox">
                        <div className="fields">
                            <div className="icon">
                                <BiMailSend />
                            </div>
                            <div className="textField">
                                <input
                                    id="fieldReg-email"
                                    type="email"
                                    placeholder="&nbsp;"
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            email: e.target.value,
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
                <div className="itemField">
                    <div className="fieldBox">
                        <div className="fieldsSel">
                            <div className="icon">
                                <BiDollar />
                            </div>
                            <div className="selectField">
                                <select
                                    name="currency"
                                    id="fieldReg-currency"
                                    onChange={(e) =>
                                        setFormData({
                                            ...formData,
                                            currency: e.target.value,
                                        })
                                    }
                                    required
                                >
                                    <option defaultValue={""} disabled>
                                        Selecciona una moneda
                                    </option>
                                    <option value="COP">
                                        COP - Peso Colombian
                                    </option>
                                    <option value="USD">USD - Dolares</option>
                                    <option value="EUR">EUR - Euros</option>
                                </select>
                            </div>
                            <label htmlFor="fieldReg-currency" className="lbl">
                                <BiCaretDown />
                            </label>
                        </div>
                    </div>
                </div>

                <button className="summitField" type="submit">
                    Registrarte
                </button>
            </form>

            <ToastContainer />
        </>
    );
};

export default RegForm;
