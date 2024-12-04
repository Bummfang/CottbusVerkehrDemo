const DatabaseAccess = (props:{
    backToMainMenu:() => void;
}) =>{


    


    return(
        <div className=" bg-gray-100 select-none p-8 flex justify-center">
                <div className="w-[90%] duration-700 bg-white p-6 rounded-lg shadow-lg">
                    {/* Optionen */}
                    <div className="animate-fadeInAnimation">
                        <h2 className="text-xl font-semibold mb-4">Datenbank Optionen</h2>
                        <div className="space-y-4 ">
                            <div>
                                <input
                                    type="radio"
                                    id="option1"
                                    name="databaseOption"
                                    value="option1"
                                    className="mr-2"
                                />
                                <label htmlFor="option1">Datenbank sichern</label>
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    id="option2"
                                    name="databaseOption"
                                    value="option2"

                                    className="mr-2"
                                />
                                <label htmlFor="option2">Datenbank wiederherstellen</label>
                            </div>
                            <div>
                                <input
                                    type="radio"
                                    id="option3"
                                    name="databaseOption"
                                    value="option3"
                                    className="mr-2"
                                />
                                <label htmlFor="option3">Datenbank löschen</label>
                            </div>
                        </div>
                    </div>

                    {/* Eingabefelder */}
                    <div className="my-6">
                        <h2 className="text-xl font-semibold mb-4">Datenbank-Einstellungen</h2>
                        <div className="space-y-4">
                            <div>
                                <label htmlFor="databaseName" className="block font-medium mb-2">
                                    Fahrplan Zugriff
                                </label>
                                <input
                                    type="text"
                                    id="databaseName"

                                    placeholder="Fahrplan eingeben"
                                    className="w-full p-3 border border-gray-300 rounded-md bg-slate-800 text-white"
                                />
                            </div>
                            <div>
                                <label htmlFor="username" className="block font-medium mb-2">
                                    Benutzername
                                </label>
                                <input
                                    type="text"
                                    id="username"

                                    placeholder="Benutzername eingeben"
                                    className="w-full p-3 border border-gray-300 rounded-md bg-slate-800 text-white" 
                                />
                            </div>
                            <div>
                                <label htmlFor="password" className="block font-medium mb-2">
                                    Passwort
                                </label>
                                <input
                                    type="password"
                                    id="password"

                                    placeholder="Passwort eingeben"
                                    className="w-full p-3 border border-gray-30 rounded-md bg-slate-800 text-white"
                                />
                            </div>
                        </div>
                    </div>
                    {/* Buttons */}
                    <div className="flex justify-between mt-10">
                    <div  className="bg-[#265d91] group flex justify-between hover:cursor-pointer hover:bg-[#356fa5]  items-center min-w-[10rem] font-semibold text-white px-6 py-2 rounded-md duration-300" onClick={props.backToMainMenu}>
                           <img src="Graphic/arrow.svg" className="w-5 group-hover:-translate-x-3 duration-300" alt="Pfeil Icon für den zurück Knopf" />
                           <p>zurück</p> 
                        </div>
                        <div className="bg-[#3bbe76] min-w-[10rem] text-center font-semibold text-white px-6 py-2 duration-300 rounded-md hover:bg-[#309c61] ">
                            Speichern
                        </div>
                    </div>
                </div>
            </div>
    );
}
export default DatabaseAccess;