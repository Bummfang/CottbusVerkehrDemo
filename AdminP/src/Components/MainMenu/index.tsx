import { useEffect, useState } from "react";

const MainMenu = (props: {
    toOptions: () => void;
    toDatabaseAccess: () => void;
    toContentManagement: () => void;
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
        <div className="w-full bg-slate-100 p-6 pl-10 select-none flex flex-col 
         desktop-l:items-start desktop-l:mt-0  mobile:items-center mobile:mt-[3rem]">
            <div className="desktop-l:ml-10 mobile:ml-0">
            <h2 className="text-3xl font-bold desktop-l:text-left  mobile:text-center text-[#444444] mb-8">Hauptmenü</h2>

            {/* Menü-Container */}
            <div className="w-full mt-16 max-w-[50rem] desktop-l:block mobile:grid grid-cols-2 grid-rows-2 gap-x-[2rem] place-content-center place-items-center">
                {/* Datenbank Menü */}
                <div
                    onClick={props.toDatabaseAccess}
                    className={`relative group desktop-l:min-h-[8rem] mobile:min-h-[10rem] hover:cursor-pointer hover:scale-[105%] hover:bg-[#c93636]  bg-white rounded-lg shadow-md p-6 mb-6 w-full opacity-0 transform transition-all duration-500 ${
                        showCards[0] ? "opacity-100 translate-x-0" : "translate-x-[-100%]"
                    }`}
                >
                    <h3 className="text-xl font-semibold text-[#333333] duration-300  group-hover:text-white">Datenbankverwaltung</h3>
                    <p className="text-[#555555] group-hover:text-white duration-300">Verwalten Sie die Datenbankoptionen wie Sichern, Wiederherstellen oder einen neuen Nutzer anlegen.</p>
                </div>

                {/* Content Management Menü */}
                <div
                    onClick={props.toContentManagement}
                    className={`relative group desktop-l:min-h-[8rem] mobile:min-h-[10rem] hover:cursor-pointer hover:scale-[105%] hover:bg-[#c93636]  bg-white rounded-lg shadow-md p-6 mb-6 w-full opacity-0 transform transition-all duration-500 ${
                        showCards[1] ? "opacity-100 translate-x-0" : "translate-x-[-100%]"
                    }`}
                >
                    <h3 className="text-xl font-semibold text-[#333333] duration-300  group-hover:text-white">Content Management</h3>
                    <p className="text-[#555555] group-hover:text-white duration-300">Verwalten Sie Inhalte und steuern Sie alle Inhalte Ihrer Plattform.</p>
                </div>

                {/* Einstellungen Menü */}
                <div
                    onClick={props.toOptions}
                    className={`relative group desktop-l:min-h-[8rem] mobile:min-h-[10rem] hover:cursor-pointer hover:scale-[105%] hover:bg-[#c93636]  bg-white rounded-lg shadow-md p-6 mb-6 w-full opacity-0 transform transition-all duration-500 ${
                        showCards[2] ? "opacity-100 translate-x-0" : "translate-x-[-100%]"
                    }`}
                >
                    <h3 className="text-xl font-semibold text-[#333333] duration-300 group-hover:text-white">Einstellungen</h3>
                    <p className="text-[#555555] group-hover:text-white duration-300">Passen Sie die allgemeinen Einstellungen der Anwendung an.</p>
                </div>

                {/* Ausloggen Menü */}
                <div
                    onClick={props.toLogin}
                    className={`relative group desktop-l:min-h-[8rem] mobile:min-h-[10rem] hover:cursor-pointer hover:scale-[105%] hover:bg-[#c93636]  bg-white rounded-lg shadow-md p-6 mb-6 w-full opacity-0 transform transition-all duration-500 ${
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
