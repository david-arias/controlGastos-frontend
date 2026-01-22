import "./loginPage.css";
import Splash from "../splash/splash";

import { useState, useEffect } from "react";

import api from "../../api/axios";

const LoginPage = () => {
    const [dataLoad, setDataLoad] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await api.get("/");
                if (res.data.dbok) {
                    setTimeout(() => {
                        setDataLoad(true);
                    }, 3000);
                } else {
                }
                console.log(dataLoad, res.data.dbok);
            } catch (err: any) {
                console.log(err);
            }
        };
        fetchData();
    }, []);

    return (
        <>
            <div className="topMssg">
                <div className="box">
                    <h3>¡Hola de nuevo! 😁</h3>
                    <p>
                        Ingresa a tu cuenta o crea una nueva para organizar tus
                        finanzas.
                    </p>
                </div>
            </div>
            <div className={`mainBox ${dataLoad ? "loaded" : ""}`}>
                {!dataLoad ? (
                    <Splash />
                ) : (
                    <>
                        <p>lorem</p>
                    </>
                )}
            </div>
        </>
    );
};

export default LoginPage;
