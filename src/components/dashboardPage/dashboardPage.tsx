import "./dashboardPage.css";

import { useState, useEffect } from "react";

// Plugins
import {
    BiDollar,
} from "react-icons/bi";

import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement } from 'chart.js';
const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
        {
            data: [12, 19],
            backgroundColor: [
                'rgba(255, 255, 255, 0.2)',
                'rgba(255, 255, 255, 1)'
            ],
            borderWidth: 0,
        },
    ],
};
ChartJS.register(ArcElement);


// components
import Loader from "../loader/loader";

function DashboardPage() {
    const [dataLoad, setDataLoad] = useState(false);
    let [isLoading, setIsLoading] = useState(true);

    const [userName, setUserName] = useState<string>("");

    useEffect(() => {
        // get server is OK
        setTimeout(() => {
            setIsLoading((isLoading = false));
        }, 3000);

        // GET user name
        const userDataString = localStorage.getItem("user");
        if (userDataString) {
            const userData = JSON.parse(userDataString);
            setUserName(userData.username);
        }
    }, []);

    const changeDate = async (val: any) => {
        console.log(val);

    }

    return (
        <>
            <div className="anima-noFade">
                {!isLoading ? <></> : <Loader />}
            </div>

            <div
                className={`topDash w-screen z-20 transition-all duration-300 left-0 bg-linear-to-t from-blue-950 to-blue-800 h-auto block rounded-b-4xl ${!isLoading ? "animate__animated animate__fadeInDown" : ""} `}
            >
                <div className="p-4">
                    <h1 className="text-xl text-slate-50">Hola, {userName}</h1>
                    <p className="text-sm pt-1 text-slate-50/80">
                        Empecemos a registrar tus gastos
                    </p>
                </div>
                <div className="pt-1 pb-2 pl-4 pr-4">
                    <div className="pb-4 animate__animated animate__fadeInUp anima-delay-200">
                        <div className="borderBisel-2 bg-slate-50/15 backdrop-blur-sm rounded-lg ">
                            <div className="flex items-center pr-4 pl-4 relative z-10">
                                <div className="w-8 h-8 text-slate-50">
                                    <BiDollar />
                                </div>
                                <div className="selField relative w-full  pl-3">
                                    <select
                                        className="relative text-slate-50 text-base transition-all duration-300 w-full h-10"
                                        id="curr-select"
                                        defaultValue="1"
                                        onChange={(e) => {
                                            changeDate(e.target.value)
                                        }}
                                    >
                                        <option value="1">
                                            Enero 2026
                                        </option>
                                        <option value="2" >
                                            Diciembre 2025
                                        </option>
                                        <option value="3" >
                                            Noviembre 2025
                                        </option>
                                        <option value="4" >
                                            Octubre 2025
                                        </option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-4 flex justify-between text-slate-50 text-center">
                    <div className="total">
                        <h3 className="text-xl">$9999999</h3>
                        <p className="text-sm">Total</p>
                    </div>
                    <div className="restante">
                        <div className="graph">
                            <Doughnut data={data} />
                        </div>
                        <div className="text">
                            <h3 className="text-xl">$9999999</h3>
                            <p className="text-sm">Total</p>
                        </div>
                    </div>
                    <div className="expense">
                        <h3 className="text-xl">$9999999</h3>
                        <p className="text-sm">Total</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DashboardPage;
