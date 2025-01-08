import ContentManagementIcon from "../Svg/contentmanagement";
import DatabaseIcon from "../Svg/database";
import LogoutIcon from "../Svg/logout";
import SettingsIcon from "../Svg/setting";


const MainMenu = (props: {
    toOptions: () => void;
    toDatabaseAccess: () => void;
    toContentManagement: () => void;
    toLogin: () => void;
}) => {


    return (
        <div className="w-full flex mt-[2%] h-[45rem] justify-center mb-[20%] bg-[#c22727] animate-fadeInAnimation">
            <div className="w-[80%] border flex rounded-3xl bg-slate-100 shadow-xl">
                {/**                                ! */}
                <div className="flex flex-col justify-around w-full h-full p-4">
                    {/* Titelbereich */}
                    <h1 className="text-lg font-bold text-[#6b6b6b]">Verkehrsinformationen</h1>

                    {/* 4er Grid */}
                    <div className="grid grid-cols-2 gap-3 mt-4">
                        {/* Verkehrsstörungen */}
                        <div className="p-3 bg-white rounded-2xl shadow-md">
                            <h2 className="text-sm font-bold text-[#b32323]">Aktuelle Verkehrsstörungen</h2>
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
                        <div className="p-3 bg-white rounded-2xl shadow-md">
                            <h2 className="text-sm font-bold text-[#313131]">Live-Abfahrten</h2>
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

                        {/* Neueste Blogeinträge */}
                        <div className="p-3 bg-white rounded-2xl shadow-md">
                            <h2 className="text-sm font-bold text-[#b32323]">Neueste Blogeinträge</h2>
                            <ul className="mt-3 space-y-3">
                                <li className="p-4 rounded-lg bg-[#fff4f4]">
                                    <p className="font-bold text-sm">🚦 Verkehrsentwicklung in Cottbus</p>
                                    <p className="text-xs text-gray-600 mt-2">
                                        Die Stadt Cottbus hat ein ambitioniertes Verkehrsprojekt gestartet, um den öffentlichen Nahverkehr grüner zu gestalten. 
                                        Erfahren Sie, wie sich dies auf Ihren Alltag auswirken könnte.
                                    </p>
                                </li>
                                <li className="p-4 rounded-lg bg-[#fff4f4]">
                                    <p className="font-bold text-sm">😄 Der Tag, an dem die Tram "vermisst" wurde</p>
                                    <p className="text-xs text-gray-600 mt-2">
                                        Lesen Sie die lustige Geschichte eines vergesslichen Straßenbahnfahrers, der eine komplette Linie vergaß - inklusive der kuriosen Reaktionen der Fahrgäste.
                                    </p>
                                </li>
                                <li className="p-4 rounded-lg bg-[#fff4f4]">
                                    <p className="font-bold text-sm">Neue Straßenbahn für Cottbus</p>
                                    <p className="text-xs text-gray-600 mt-2">
                                       Cottbus bekommt neue Straßenbahnen! Erfahren Sie, wie die neuen Bahnen aussehen und wann sie in Betrieb genommen werden. 
                                    </p>
                                </li>
                                
                            </ul>
                        </div>

                        {/* Kantinenmenü-Vorschau */}
                        <div className="p-3 bg-white rounded-2xl shadow-md">
                            <h2 className="text-sm font-bold text-[#2e2e2e]">Kantinenmenü</h2>
                            <ul className="mt-3 space-y-2">
                                <li className="p-3 border rounded-lg bg-[#f8f8f8]">
                                    <p className="font-bold text-sm">🍲 Montag</p>
                                    <ul className="text-xs text-gray-600 mt-1 space-y-1">
                                        <li>Klassisch: Schnitzel mit Kartoffelsalat</li>
                                        <li>Klassisch: Hühnerfrikassee mit Reis</li>
                                        <li>Vegetarisch: Gemüselasagne</li>
                                    </ul>
                                </li>
                                <li className="p-3 border rounded-lg bg-[#f8f8f8]">
                                    <p className="font-bold text-sm">🍝 Dienstag</p>
                                    <ul className="text-xs text-gray-600 mt-1 space-y-1">
                                        <li>Klassisch: Spaghetti Bolognese</li>
                                        <li>Klassisch: Schweinebraten mit Klößen</li>
                                        <li>Vegetarisch: Falafel mit Couscous</li>
                                    </ul>
                                </li>
                                <li className="p-3 border rounded-lg bg-[#f8f8f8]">
                                    <p className="font-bold text-sm">🥗 Mittwoch</p>
                                    <ul className="text-xs text-gray-600 mt-1 space-y-1">
                                        <li>Klassisch: Rinderroulade mit Rotkohl</li>
                                        <li>Klassisch: Fischfilet mit Kartoffelpüree</li>
                                        <li>Vegetarisch: Veggie-Bowl mit Hummus</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/**Navigation Bar */}
            <div className="h-[10.5rem] w-[42rem] ml-16 mt-14 shadow-lg fixed bottom-0 mb-10 duration-300 border bg-slate-100 rounded-3xl flex justify-around items-center">
                <div onClick={props.toContentManagement} className="hover:shadow-md hover:scale-[115%] group hover:cursor-pointer duration-500 hover:bg-[#c22727] w-[8rem] h-[8rem] rounded-2xl flex flex-col justify-center items-center">
                    <ContentManagementIcon className="w-[1.5rem] fill-[#757575] group-hover:fill-slate-100"></ContentManagementIcon>
                    <p className="text-[0.8rem] font-semibold mt-4 text-[#727272] group-hover:text-slate-100">WEBSEITE</p>
                </div>

                <div onClick={props.toDatabaseAccess} className="hover:shadow-md hover:scale-[115%] group hover:cursor-pointer duration-500 hover:bg-[#c22727] w-[8rem] h-[8rem] rounded-2xl flex flex-col justify-center items-center">
                    <DatabaseIcon className="w-[1.5rem] fill-[#757575] group-hover:fill-slate-100"></DatabaseIcon>
                    <p className="text-[0.8rem] font-semibold mt-4 text-[#727272] group-hover:text-slate-100">DATENBANK</p>
                </div>

                <div onClick={props.toOptions} className="hover:shadow-md hover:scale-[115%] group hover:cursor-pointer duration-500 hover:bg-[#c22727] w-[8rem] h-[8rem] rounded-2xl flex flex-col justify-center items-center">
                    <SettingsIcon className="w-[1.5rem] fill-[#757575] group-hover:fill-slate-100"></SettingsIcon>
                    <p className="text-[0.8rem] font-semibold mt-4 text-[#727272] group-hover:text-slate-100">EINSTELLUNG</p>
                </div>

                <div onClick={props.toLogin} className="hover:shadow-md  hover:scale-[115%] group hover:cursor-pointer duration-500 hover:bg-[#c22727] w-[8rem] h-[8rem] rounded-2xl flex flex-col justify-center items-center">
                    <LogoutIcon className="w-[1.5rem] fill-[#757575] group-hover:fill-slate-100"></LogoutIcon>
                    <p className="text-[0.8rem] font-semibold mt-4 text-[#727272] group-hover:text-slate-100">ABMELDEN</p>
                </div>
            </div>
        </div>
    );
};

export default MainMenu;
