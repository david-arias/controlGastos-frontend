import { useState, useEffect } from "react";

// Plugins
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// components
import Loader from "../loader/loader";

function DashboardPage() {
    const [dataLoad, setDataLoad] = useState(false);
    let [isLoading, setIsLoading] = useState(true);

    const [userName, setUserName] = useState<string>("");

    const responsive = {
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 3,
            slidesToSlide: 1, // optional, default to 1.
        },
    };

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

    return (
        <>
            <div className="anima-noFade">
                {!isLoading ? <></> : <Loader />}
            </div>

            <div
                className={`w-screen z-20 transition-all duration-300 left-0 bg-linear-to-t from-blue-950 to-blue-800 h-auto block rounded-b-4xl ${!isLoading ? "animate__animated animate__fadeInDown" : ""} `}
            >
                <div className="p-4">
                    <h1 className="text-xl text-slate-50">Hola, {userName}</h1>
                    <p className="text-sm pt-1 text-slate-50/80">
                        Empecemos a registrar tus gastos
                    </p>
                </div>
                <div className="p-4">
                    <div>
                        <Carousel
                            responsive={responsive}
                            draggable={true}
                            showDots={false}
                            arrows={false}
                            partialVisible={true}
                            ref={(el: any) => {
                                el.state.currentSlide = 4;
                                console.log(el);
                            }}
                        >
                            <button type="button">Noviembre 2025</button>
                            <button type="button">Diciembre 2025</button>
                            <button type="button">Enero 2026</button>
                            <button type="button">Febrero 2026</button>
                        </Carousel>
                    </div>
                </div>
            </div>
        </>
    );
}

export default DashboardPage;
