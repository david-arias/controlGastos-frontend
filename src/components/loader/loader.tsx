import { DNA } from "react-loader-spinner";

function Loader() {
    return (
        <>
            <div className="fixed top-0 left-0 w-screen h-screen z-100 flex items-center justify-center bg-sky-950/80 backdrop-blur-md animate__animated animate__fadeIn">
                <div className="w-20">
                    <DNA
                        visible={true}
                        height="80"
                        width="80"
                        ariaLabel="dna-loading"
                        dnaColorOne="#ffffff"
                        dnaColorTwo="#2481A6"
                    />
                </div>
            </div>
        </>
    );
}

export default Loader;
