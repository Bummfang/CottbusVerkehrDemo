import { useEffect, useState } from "react";

const MainMenu = (props: {
    toOptions: () => void;
    toDatabaseAccess: () => void;
    toLogin: () => void;
}) => {
// Zustand, um zu verfolgen, wann jede Karte sichtbar wird
const [showCards, setShowCards] = useState([false, false, false, false]);

useEffect(() => {
    // Verzögerungen für jede Karte
    const timers = [
        setTimeout(() => setShowCards([true, false, false, false]), 200),
        setTimeout(() => setShowCards([true, true, false, false]), 400),
        setTimeout(() => setShowCards([true, true, true, false]), 600),
        setTimeout(() => setShowCards([true, true, true, true]), 800)
    ];

    // Cleanup der Timer
    return () => timers.forEach(clearTimeout);
}, []);

    return (
        <div className="w-full bg-slate-100 p-6 pl-10 select-none flex flex-col items-start">
            <div className="ml-10">
            <h2 className="text-2xl font-bold text-left text-[#333333] mb-8">Hauptmenü</h2>

            {/* Menü-Container */}
            <div className="w-full mt-10 max-w-[500px]">
                {/* Datenbank Menü */}
                <div
                    onClick={props.toDatabaseAccess}
                    className={`relative group min-h-[8rem] hover:cursor-pointer hover:scale-[105%] hover:bg-[#c93636]  bg-white rounded-lg shadow-md p-6 mb-6 w-full opacity-0 transform transition-all duration-500 ${
                        showCards[0] ? "opacity-100 translate-x-0" : "translate-x-[-100%]"
                    }`}
                >
                    <h3 className="text-xl font-semibold text-[#333333] duration-300  group-hover:text-white">Datenbank</h3>
                    <p className="text-[#555555] group-hover:text-white duration-300">Verwalten Sie die Datenbankoptionen wie Sichern, Wiederherstellen oder einen neuen Nutzer anlegen.</p>
                </div>

                {/* Content Management Menü */}
                <div
                    onClick={props.toDatabaseAccess}
                    className={`relative group min-h-[8rem] hover:cursor-pointer hover:scale-[105%] hover:bg-[#c93636]  bg-white rounded-lg shadow-md p-6 mb-6 w-full opacity-0 transform transition-all duration-500 ${
                        showCards[1] ? "opacity-100 translate-x-0" : "translate-x-[-100%]"
                    }`}
                >
                    <h3 className="text-xl font-semibold text-[#333333] duration-300  group-hover:text-white">Content Management</h3>
                    <p className="text-[#555555] group-hover:text-white duration-300">Verwalten Sie Inhalte und steuern Sie alle Inhalte Ihrer Plattform.</p>
                </div>

                {/* Einstellungen Menü */}
                <div
                    onClick={props.toOptions}
                    className={`relative group min-h-[8rem] hover:cursor-pointer hover:scale-[105%] hover:bg-[#c93636]  bg-white rounded-lg shadow-md p-6 mb-6 w-full opacity-0 transform transition-all duration-500 ${
                        showCards[2] ? "opacity-100 translate-x-0" : "translate-x-[-100%]"
                    }`}
                >
                    <h3 className="text-xl font-semibold text-[#333333] duration-300  group-hover:text-white">Einstellungen</h3>
                    <p className="text-[#555555] group-hover:text-white duration-300">Passen Sie die allgemeinen Einstellungen der Anwendung an.</p>
                </div>

                {/* Ausloggen Menü */}
                <div
                    onClick={props.toLogin}
                    className={`relative group min-h-[8rem] hover:cursor-pointer hover:scale-[105%] hover:bg-[#c93636]  bg-white rounded-lg shadow-md p-6 mb-6 w-full opacity-0 transform transition-all duration-500 ${
                        showCards[3] ? "opacity-100 translate-x-0" : "translate-x-[-100%]"
                    }`}
                >
                    <h3 className="text-xl font-semibold text-[#333333]  duration-300 group-hover:text-white">Ausloggen</h3>
                    <p className="text-[#555555] group-hover:text-white duration-300" group-hover:text-white duration-300>Melden Sie sich von der Anwendung ab.</p>
                </div>
            </div>
            </div>
        </div>
    );
};

export default MainMenu;
