import { useState, useEffect } from "react"; // Importing React's useState and useEffect hooks
import Login from "../Login"; // Importing the Login component
import DatabaseAccess from "../DatabaseAccess"; // Importing the DatabaseAccess component
import Registration from "../Registration"; // Importing the Registration component
import MainMenu from "../MainMenu";
import Settings from "../Settings";
import axios from 'axios';
import ContentManagement from "../ContentManagement";



export default function Home() {
    // pageSelector is a state variable to track which page to render.
    const [pageSelector, setPageSelector] = useState(0);
    // loading state to manage loading screen
    const [loading, setLoading] = useState(true);
    // status led state
    const [connection, setConnection] = useState(false);
    // Time Display
    const [time, setTime] = useState<string>(new Date().toLocaleTimeString());




    // Components to render based on pageSelector
    const loginComponent = <Login toRegistration={() => setPageSelector(1)} login={() => setPageSelector(3)} />;
    const databaseAccess = <DatabaseAccess backToMainMenu={() => setPageSelector(3)} />;
    const registrationComponent = <Registration backToLogin={() => setPageSelector(0)} />;
    const mainMenu = <MainMenu toContentManagement={() => setPageSelector(5)} toLogin={() => setPageSelector(0)} toDatabaseAccess={() => setPageSelector(2)} toOptions={() => setPageSelector(4)}></MainMenu>
    const settings = <Settings backToMainMenu={() => setPageSelector(3)}></Settings>
    const contentManagement = <ContentManagement backToMainMenu={() => setPageSelector(3)}></ContentManagement>


    // Script Componens




    // Function to render the correct page based on pageSelector
    const renderPage = () => {
        switch (pageSelector) {
            case 0: // If pageSelector is 0, render Login
                return loginComponent;
            case 1: // If pageSelector is 1, render Registration
                return registrationComponent;
            case 2: // If pageSelector is 2, render DatabaseAccess
                return databaseAccess;
            case 3:
                return mainMenu;
            case 4:
                return settings;
            case 5:
                return contentManagement;
            default: // Default case, render Login
                return loginComponent;
        }
    };



    // UseEffect for time feature
    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);

        return () => {
            clearInterval(timer);
        };
    }, []);


    // Simulate loading (show the cover for 3 seconds, then slide out)
    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false); // End loading after 3 seconds
        }, 3000); // Delay of 3 seconds

        return () => clearTimeout(timer); // Cleanup timeout on component unmount
        // Loading for low latancy computers or bad internet connection
    }, []);


    // --------------------------------------------------------------------  API REQUESTS

    // Api request for status led
    useEffect(() => {
        const checkConnection = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/connection');
                if (response.status === 200) {
                    setConnection(true);


                }
            }
            catch {
                setConnection(false);
            }
        };
        checkConnection();
        const interval = setInterval(checkConnection, 3000);
        return () => clearInterval(interval);
    });



















    return (
        <div className="w-full h-screen flex flex-col">
            {/* Red Cover with Loading Animation */}
            {loading && (
                <div className={`absolute w-full h-screen bg-[#c22727] z-50 flex justify-center items-center 
                    ${loading ? 'animate-none' : 'animate-slide-out'}`}>

                    {/* Loading Spinner */}
                    <div className="border-t-4 border-b-4 border-white rounded-full w-16 h-16 animate-spin-slow mt-20"></div>
                </div>
            )}

            {/* Main Content Section */}
            <div className={`w-full h-screen relative bg-[#c22727] ${loading ? 'opacity-0' : 'opacity-100'} transition-opacity fixed top-0 duration-500`}>
                <div className="h-[8rem] bg-[#c22727] mt-auto flex justify-between items-center rounded-t-xl">

                    <div className="flex justify-center items-center pl-5">
                        {/* Status Indicator */}
                        <div className={`w-4 h-4 rounded-full duration-300 ${connection ? "bg-green-400" : "bg-yellow-400"}`}>
                            <div className={`rounded-full w-4 h-4 animate-pulse-background duration-300 ${connection ? "bg-green-600" : "bg-yellow-600"}`} />
                        </div>
                        {/* Status Text */}
                        <p className="font-bold text-white text-[0.8rem] pl-4">Netzwerkstatus</p>
                    </div>
                    <div>
                        <p className="text-white font-bold text-[1rem] mr-10">{time}</p>
                    </div>
                </div>



                {/* ---------------------------------    Render the current page    ------------------------------------ */}
                <div className="w-full flex justify-center items-center">
                    {renderPage()}
                </div>




            </div>
        </div>
    );
}
