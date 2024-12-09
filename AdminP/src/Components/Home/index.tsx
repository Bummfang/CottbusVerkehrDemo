import { useState, useEffect } from "react"; // Importing React's useState and useEffect hooks
import Login from "../Login"; // Importing the Login component
import DatabaseAccess from "../DatabaseAccess"; // Importing the DatabaseAccess component
import Registration from "../Registration"; // Importing the Registration component
import MainMenu from "../MainMenu";
import Settings from "../Settings";
import axios from 'axios';
import ContentManagement from "../ContentManagement";
import ConnectionIcon from "../Svg/connection";
import NoConnectionIcon from "../Svg/noconnection";
import FahrplanView from "../FahrplanView";
import DragDrop from "../DragDrop";



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
    const contentManagement = <ContentManagement toDragDrop={() => setPageSelector(7)} toFahrplanView={() => setPageSelector(6)} backToMainMenu={() => setPageSelector(3)}></ContentManagement>
    const fahrplanView = <FahrplanView backToContentManagement={() => setPageSelector(5)} />
    const dragDrop = <DragDrop backToContentManagement={() => setPageSelector(3)}></DragDrop>


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
            case 6:
                return fahrplanView;
            case 7:
                return dragDrop;
            default: // Default case, render Login
                return loginComponent;
        }
    };

    // Function to render the correct page based on pageSelector
    const connectionIcon = () => {
        switch (connection) {
            case true: // If pageSelector is 0, render Login
                return <ConnectionIcon className="w-8 h-8 duration-300 fill-[#d4d4d4]"></ConnectionIcon>;
            case false: // If pageSelector is 1, render Registration
                return <NoConnectionIcon className="w-8 h-8 duration-300 fill-[#d4d4d4]"></NoConnectionIcon>;
            default:
                return <NoConnectionIcon className="w-8 h-8 duration-300 fill-[#d4d4d4]"></NoConnectionIcon>;
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
                <div className={`absolute w-full h-full bg-[#c22727] z-50 flex justify-center items-center 
                    ${loading ? 'animate-none' : 'animate-slide-out'}`}>

                    {/* Loading Spinner */}
                    <div className="border-t-4 flex justify-center items-center border-b-4 border-white text-[3.2rem] text-slate-100 font-bold w-16 h-16 animate-spin-slow mt-20">OG</div>
                </div>
            )}

            {/* Main Content Section */}
            <div className={`w-full h-full bg-[#c22727] ${loading ? 'opacity-0' : 'opacity-100'} transition-opacity top-0 duration-500`}>
                <div className="h-[8rem] bg-[#c22727] mt-auto flex justify-between items-center rounded-t-xl">

                    <div className={`flex justify-center items-center ml-10 ${pageSelector !== 0 ? "opacity-100":"opacity-0"}`}>
                        <img className="w-24 h-24 rounded-full border-4" src="Graphic/sandra.webp" alt="" />
                        <div className="flex flex-col ml-4">
                            <p className="text-[2rem] font-bold text-slate-100">Sandra Müller</p>
                            <p className="text-[1rem] font-semibold text-slate-100">Administrator</p>
                        </div>
                    </div>

                    <div className="flex justify-center items-center mr-4">
                        <div>
                            <p className="text-white font-bold text-[1rem]">{time}</p>
                        </div>
                        <div className="flex flex-col justify-center items-center mx-3 pl-5">
                            {connectionIcon()}
                        </div>
                    </div>
                </div>

                {/* ---------------------------------    Render the current page    ------------------------------------ */}
                <div className="w-full h-full bg-[#c22727] flex justify-center">
                    {renderPage()}
                </div>

            </div>
        </div>
    );
}
