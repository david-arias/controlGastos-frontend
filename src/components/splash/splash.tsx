import "./splash.css";
import isoLogo from "../../assets/logo-iso.svg";

const Splash = () => {
    return (
        <>
            <div className="flex justify-center items-center animate__animated animate__fadeIn">
                <div className="splashImg animate__animated animate__bounceIn">
                    <img src={isoLogo} alt="" />
                </div>
            </div>
        </>
    );
};

export default Splash;
