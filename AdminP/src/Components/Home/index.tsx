import { useState } from "react"; // Importing React's useState hook for managing component state
import Login from "../Login"; // Importing the Login component
import DatabaseAccess from "../DatabaseAccess"; // Importing the DatabaseAccess component
import Registration from "../Registration"; // Importing the Registration component

// Home component that controls which page is displayed based on the pageSelector state
export default function Home() {
    // pageSelector is a state variable that tracks which page to render. 
    // Initially, it's set to 0 (Login page).
    const [pageSelector, setPageSelector] = useState(0);

    // Assigning components to variables for later rendering based on pageSelector value.
    const loginComponent = <Login toRegistration={() => setPageSelector(1)} login={() => setPageSelector(2)} />;
    const databaseAccess = <DatabaseAccess />;
    const registrationComponent = <Registration backToLogin={() => setPageSelector(0)} />;

    // Function to render the correct page based on the current pageSelector value.
    const renderPage = () => {
        switch (pageSelector) {
            case 0: // If pageSelector is 0, display the Login component
                return loginComponent;
            case 1: // If pageSelector is 1, display the Registration component
                return registrationComponent;
            case 2: // If pageSelector is 2, display the DatabaseAccess component
                return databaseAccess;
            default: // Fallback case for invalid pageSelector values (renders the Login page)
                return loginComponent;
        }
    };

    return (
        <div className="w-full h-screen flex flex-col">
            {/* Header Section */}
            <div className="w-full bg-slate-100">
                <div className="w-full h-[6rem] bg-[#c93636] select-none flex items-center justify-between rounded-b-2xl border-b-2 border-slate-100">
                    {/* Title */}
                    <p className="text-white font-bold text-[1.5rem] ml-8">Cottbusverkehr Admin Tool</p>
                    {/* Logo */}
                    <img className="h-[6rem] rounded-br-2xl" src="/Graphic/logo.webp" alt="Cottbus Verkehr Logo" />
                </div>
            </div>

            {/* Main Content Section: Dynamically render the current page */}
            <div className="w-full h-full bg-slate-100">
                {renderPage()} {/* This renders the component based on the current pageSelector */}
            </div>

            {/* Footer Section with Status Indicator */}
            <div className="w-full bg-slate-100 select-none">
                <div className="h-[8rem] bg-[#c93636] mt-auto flex justify-between items-center rounded-t-xl">
                    <div></div>
                    <div className="flex justify-center items-center">
                        {/* Status Text */}
                        <p className="font-bold text-white">Status</p>
                        {/* Status Indicator: Green for non-Registration pages, Yellow for Registration page */}
                        <div className={`w-4 h-4 rounded-full mr-10 ml-4 ${pageSelector !== 1 ? "bg-green-400" : "bg-yellow-400"}`}>
                            <div className={`rounded-full w-4 h-4 animate-pulse-background ${pageSelector !== 1 ? "bg-green-600" : "bg-yellow-600"}`} />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}
