import ContentManagementIcon from "../Svg/contentmanagement";
import DatabaseIcon from "../Svg/database";
import LogoutIcon from "../Svg/logout";
import SettingsIcon from "../Svg/setting";
import 'leaflet/dist/leaflet.css';

const MainMenu = (props: {
    toOptions: () => void;
    toDatabaseAccess: () => void;
    toContentManagement: () => void;
    toLogin: () => void;
}) => {



    return (
        <div className="w-full flex justify-center  bg-[#c22727] animate-fadeInAnimation">
            <div className="w-[80%] border flex rounded-3xl bg-slate-100">
                {/**                                ! */}
                <div className="flex flex-col justify-around w-full h-full p-4">
                    {/* Titelbereich */}
                    <h1 className="text-lg font-bold text-[#c22727]">Verkehrsinformationen</h1>

                    {/* Verkehrsstörungen, Abfahrtszeiten und Karte */}
                    <div className="flex justify-between mt-4">
                        {/* Verkehrsstörungen */}
                        <div className="flex-1 p-3 bg-white rounded-lg shadow-sm">
                            <h2 className="text-sm font-semibold text-[#c22727]">Aktuelle Verkehrsstörungen</h2>
                            <ul className="mt-3 space-y-1">
                                <li className="p-2 border rounded-lg bg-[#ffe4e4]">
                                    <p className="font-bold text-sm">⚠️ Linie 1 - Verzögerung</p>
                                    <p className="text-xs text-gray-600">
                                        Aufgrund von Bauarbeiten in der Karl-Marx-Straße verspätet sich die Tram 1 um ca. 10 Minuten.
                                    </p>
                                </li>
                                <li className="p-2 border rounded-lg bg-[#ffe4e4]">
                                    <p className="font-bold text-sm">⚠️ Linie 15 - Ausfall</p>
                                    <p className="text-xs text-gray-600">
                                        Der Bus 15 entfällt zwischen 12:00 und 14:00 aufgrund eines technischen Defekts.
                                    </p>
                                </li>
                            </ul>
                        </div>

                        {/* Live-Abfahrten */}
                        <div className="flex-1 ml-3 p-3 bg-white rounded-lg shadow-sm">
                            <h2 className="text-sm font-semibold text-[#c22727]">Live-Abfahrten</h2>
                            <ul className="mt-3 space-y-1">
                                <li className="flex justify-between border-b pb-1">
                                    <span className="text-sm">Tram 1 Richtung Hauptbahnhof</span>
                                    <span className="font-semibold text-sm">5 Min</span>
                                </li>
                                <li className="flex justify-between border-b pb-1">
                                    <span className="text-sm">Bus 15 Richtung Spremberger Turm</span>
                                    <span className="font-semibold text-gray-500 text-sm">Entfällt</span>
                                </li>
                                <li className="flex justify-between border-b pb-1">
                                    <span className="text-sm">Tram 4 Richtung Sandow</span>
                                    <span className="font-semibold text-sm">12 Min</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Karte */}
                    <div className="mt-4 p-3 bg-white rounded-lg shadow-sm">
                        <h2 className="text-sm font-semibold text-[#c22727]">Karte</h2>
                        <div className="mt-3">
                            <iframe
                                className="w-full h-64 rounded-lg"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24306.90701808321!2d14.3139263!3d51.7602278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47080510c2b41a7d%3A0x6d36fc315a5f0b1a!2sCottbus%2C%20Deutschland!5e0!3m2!1sde!2sus!4v1638824680501!5m2!1sde!2sus"
                                loading="lazy"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>


            {/**Navigation Bar */}
            <div className="h-[15%] w-[50%] ml-16 mt-14 shadow-lg fixed bottom-0 mb-10 duration-300 border bg-slate-100 rounded-3xl flex justify-around items-center">


                <div onClick={props.toContentManagement} className="hover:shadow-md hover:scale-[115%] group hover:cursor-pointer duration-500 hover:bg-[#c22727] w-[8rem] h-[8rem] rounded-2xl flex flex-col justify-center items-center">
                    <ContentManagementIcon className="w-[1.5rem] fill-[#757575] group-hover:fill-slate-100"></ContentManagementIcon>
                    <p className="text-[0.8rem] font-semibold mt-4 text-[#727272] group-hover:text-slate-100">WEBSEITE</p>
                </div>

                <div onClick={props.toDatabaseAccess} className="hover:shadow-md hover:scale-[115%] group hover:cursor-pointer duration-500 hover:bg-[#c22727] w-[8rem] h-[8rem] rounded-2xl flex flex-col justify-center items-center">
                    <DatabaseIcon className="w-[1.5rem] fill-[#757575] group-hover:fill-slate-100"></DatabaseIcon>
                    <p className="text-[0.8rem] font-semibold mt-4 text-[#727272] group-hover:text-slate-100">DATENBANK</p>
                </div>

                <div onClick={props.toOptions} className="hover:shadow-md hover:scale-[115%] group hover:cursor-pointer duration-500 hover:bg-[#c22727] w-[8rem] h-[8rem] rounded-2xl flex flex-col justify-center items-center">
                    <SettingsIcon className="w-[1.5rem] fill-[#757575] group-hover:fill-slate-100" ></SettingsIcon>
                    <p className="text-[0.8rem] font-semibold mt-4 text-[#727272] group-hover:text-slate-100">EINSTELLUNG</p>
                </div>

                <div onClick={props.toLogin} className="hover:shadow-md  hover:scale-[115%] group hover:cursor-pointer duration-500 hover:bg-[#c22727] w-[8rem] h-[8rem] rounded-2xl flex flex-col justify-center items-center">
                    <LogoutIcon className="w-[1.5rem] fill-[#757575] group-hover:fill-slate-100"  ></LogoutIcon>
                    <p className="text-[0.8rem] font-semibold mt-4 text-[#727272] group-hover:text-slate-100">ABMELDEN</p>
                </div>
            </div>
        </div>
    );
};
export default MainMenu;
