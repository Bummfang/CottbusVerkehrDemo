import { useEffect, useState } from "react";

const ContentManagement = (props:{
    backToMainMenu:() => void;
}) => {
    // Zustand, um zu verfolgen, wann jede Karte sichtbar wird
    const [showCards, setShowCards] = useState([false, false, false, false, false]);

    useEffect(() => {
        // Verzögerungen für jede Karte
        const timers = [
            setTimeout(() => setShowCards([true, false, false, false, false]), 200),
            setTimeout(() => setShowCards([true, true, false, false, false]), 400),
            setTimeout(() => setShowCards([true, true, true, false, false]), 600),
            setTimeout(() => setShowCards([true, true, true, true, false]), 800),
            setTimeout(() => setShowCards([true, true, true, true, true]), 1000),
        ];

        // Cleanup der Timer
        return () => timers.forEach(clearTimeout);
    }, []);

    return (
        <div className="w-full bg-slate-100 p-6 mt-[10%] flex flex-col items-center">
            <h2 className="text-3xl font-bold text-center text-[#444444] mb-8">
                Content Management
            </h2>

            {/* Grid-Container */}
            <div className="grid grid-cols-2 gap-8 max-w-[800px]">
                {/* Fahrplanübersicht */}
                <div

                    className={`group min-h-[8rem] hover:cursor-pointer hover:scale-[105%] hover:bg-[#c93636] bg-white rounded-lg shadow-md p-6 opacity-0 transform transition-all duration-500 ${showCards[0] ? "opacity-100 translate-y-0" : "translate-y-[-50px]"
                        }`}
                >
                    <h3 className="text-xl font-semibold text-[#333333] group-hover:text-white">
                        Fahrplanübersicht
                    </h3>
                    <p className="text-[#555555] group-hover:text-white">
                        Sehen Sie sich den aktuellen Fahrplan an.
                    </p>
                </div>

                {/* Fahrplanänderung */}
                <div

                    className={`group min-h-[8rem] hover:cursor-pointer hover:scale-[105%] hover:bg-[#c93636] bg-white rounded-lg shadow-md p-6 opacity-0 transform transition-all duration-500 ${showCards[1] ? "opacity-100 translate-y-0" : "translate-y-[-50px]"
                        }`}
                >
                    <h3 className="text-xl font-semibold text-[#333333] group-hover:text-white">
                        Fahrplanänderung
                    </h3>
                    <p className="text-[#555555] group-hover:text-white">
                        Passen Sie den Fahrplan nach Ihren Bedürfnissen an.
                    </p>
                </div>

                {/* Blog */}
                <div

                    className={`group min-h-[8rem] hover:cursor-pointer hover:scale-[105%] hover:bg-[#c93636] bg-white rounded-lg shadow-md p-6 opacity-0 transform transition-all duration-500 ${showCards[2] ? "opacity-100 translate-y-0" : "translate-y-[-50px]"
                        }`}
                >
                    <h3 className="text-xl font-semibold text-[#333333] group-hover:text-white">
                        Blog
                    </h3>
                    <p className="text-[#555555] group-hover:text-white">
                        Lesen oder verwalten Sie Blogeinträge.
                    </p>
                </div>

                {/* Kantine */}
                <div

                    className={`group min-h-[8rem] hover:cursor-pointer hover:scale-[105%] hover:bg-[#c93636] bg-white rounded-lg shadow-md p-6 opacity-0 transform transition-all duration-500 ${showCards[3] ? "opacity-100 translate-y-0" : "translate-y-[-50px]"
                        }`}
                >
                    <h3 className="text-xl font-semibold text-[#333333] group-hover:text-white">
                        Kantine
                    </h3>
                    <p className="text-[#555555] group-hover:text-white">
                        Sehen Sie das aktuelle Menü der Kantine.
                    </p>
                </div>
            </div>
            <div onClick={props.backToMainMenu}
                className={`py-2 px-6 opacity-0 mt-10 duration-200 group hover:cursor-pointer flex justify-between text-white bg-[#265d91] hover:bg-[#356fa5] min-w-[10rem] border-black font-semibold rounded-md hover:border-none 
                focus:outline-none focus:ring-2 focus:ring-[#c93636] focus:ring-opacity-50 ${showCards[4] ? "opacity-100 translate-y-0" : "translate-y-[-50px]"}`}
            >
                <img src="Graphic/arrow.svg" className="w-5 group-hover:-translate-x-3 duration-300" alt="Pfeil Icon für den zurück Knopf" />
                <p>zurück</p>
            </div>
        </div>
    );
};

export default ContentManagement;
