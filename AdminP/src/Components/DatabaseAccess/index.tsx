const DatabaseAccess = (props:{
    backToMainMenu:() => void;
}) =>{


    


    return(
        <div className=" bg-gray-100 h-[90%] p-8 flex justify-center">
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
                    <div className="flex justify-end space-x-4">
                    <div  className="bg-[#c93636] font-semibold text-white px-6 py-2 rounded-md hover:bg-[#a12d2d] duration-300" onClick={props.backToMainMenu}>
                            Abbrechen
                        </div>
                        <div className="bg-[#3bbe76] font-semibold text-white px-6 py-2 duration-300 rounded-md hover:bg-[#309c61] ">
                            Speichern
                        </div>
                    </div>
                </div>
            </div>
    );
}
export default DatabaseAccess;