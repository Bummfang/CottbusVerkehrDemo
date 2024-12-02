import { useState, useEffect } from "react"; // Importing React's useState and useEffect hooks
import Login from "../Login"; // Importing the Login component
import DatabaseAccess from "../DatabaseAccess"; // Importing the DatabaseAccess component
import Registration from "../Registration"; // Importing the Registration component

export default function Home() {
    // pageSelector is a state variable to track which page to render.
    const [pageSelector, setPageSelector] = useState(0);
    // loading state to manage loading screen
    const [loading, setLoading] = useState(true);

    // Components to render based on pageSelector
    const loginComponent = <Login toRegistration={() => setPageSelector(1)} login={() => setPageSelector(2)} />;
    const databaseAccess = <DatabaseAccess />;
    const registrationComponent = <Registration backToLogin={() => setPageSelector(0)} />;

    // Function to render the correct page based on pageSelector
    const renderPage = () => {
        switch (pageSelector) {
            case 0: // If pageSelector is 0, render Login
                return loginComponent;
            case 1: // If pageSelector is 1, render Registration
                return registrationComponent;
            case 2: // If pageSelector is 2, render DatabaseAccess
                return databaseAccess;
            default: // Default case, render Login
                return loginComponent;
        }
    };

    // Simulate loading (show the cover for 3 seconds, then slide out)
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false); // End loading after 3 seconds
        }, 3000); // Delay of 3 seconds

        return () => clearTimeout(timer); // Cleanup timeout on component unmount
    }, []);

    return (
        <div className="w-full h-screen flex flex-col relative">
            {/* Red Cover with Loading Animation */}
            {loading && (
                <div className={`absolute w-full h-full bg-red-600 z-50 flex justify-center items-center 
                    ${loading ? 'animate-none' : 'animate-slide-out'}`}>

                    {/* Loading Spinner */}
                    <div className="border-t-4 border-b-4 border-white rounded-full w-16 h-16 animate-spin-slow mt-20"></div>
                </div>
            )}

            {/* Main Content Section */}
            <div className={`w-full h-full bg-slate-100 ${loading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500`}>
                <div className="w-full bg-slate-100">
                    <div className="w-full h-[6rem] bg-[#c93636] select-none flex items-center justify-between rounded-b-2xl border-b-2 border-slate-100">
                        {/* Title */}
                        <p className="text-white font-bold text-[1.5rem] ml-8">Cottbusverkehr Admin Tool</p>
                        {/* Logo */}
                        <img className="h-[6rem] rounded-br-2xl" src="/Graphic/logo.webp" alt="Cottbus Verkehr Logo" />
                    </div>
                </div>

                {/* Render the current page */}
                <div className="w-full h-full bg-slate-100">
                    {renderPage()}
                </div>
            </div>

            {/* Footer Section */}
            <div className="w-full bg-slate-100 select-none">
                <div className="h-[8rem] bg-[#c93636] mt-auto flex justify-between items-center rounded-t-xl">
                    <div></div>
                    <div className="flex justify-center items-center">
                        {/* Status Text */}
                        <p className="font-bold text-white">Status</p>
                        {/* Status Indicator */}
                        <div className={`w-4 h-4 rounded-full mr-10 ml-4 ${pageSelector !== 1 ? "bg-green-400" : "bg-yellow-400"}`}>
                            <div className={`rounded-full w-4 h-4 animate-pulse ${pageSelector !== 1 ? "bg-green-600" : "bg-yellow-600"}`} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
