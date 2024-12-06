import { useState } from "react";

const Settings = (props: {
    backToMainMenu: () => void;
}) => {
    const [language, setLanguage] = useState("de"); // Standard: Deutsch
    const [darkMode, setDarkMode] = useState(false); // Standard: Dark Mode aus
    const [notifications, setNotifications] = useState(true); // Standard: Benachrichtigungen an
    const [timezone, setTimezone] = useState("Europe/Berlin"); // Standard: Berlin
    const [autoUpdates, setAutoUpdates] = useState(true); // Standard: Auto-Updates an
    const [password, setPassword] = useState(""); // Passwort
    const [confirmPassword, setConfirmPassword] = useState(""); // Passwort Wiederholung
    const [error, setError] = useState(""); // Fehlernachricht für Passwortvergleich





    // Funktion zum Umschalten des Dark Mode
    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };




    // Funktion zum Umschalten von Benachrichtigungen
    const toggleNotifications = () => {
        setNotifications(!notifications);
    };






    // Funktion zum Umschalten von Auto-Updates
    const toggleAutoUpdates = () => {
        setAutoUpdates(!autoUpdates);
    };






    // Passwort Validierung
    const handleSaveSettings = () => {
        if (password !== confirmPassword) {
            setError("Passwörter stimmen nicht überein!");
            return;
        }
        // Hier könnte eine API-Anfrage oder lokale Speicherung stattfinden
        setError(""); // Fehler zurücksetzen
        alert("Einstellungen gespeichert!");
    };





    return (
        <div className="w-full h-full justify-center max-w-[80rem] select-none bg-[#c22727]">
            <div className="animate-fadeInAnimation p-6">
                <h2 className="text-2xl font-semibold text-slate-100 mb-8">Einstellungen</h2>



                {/* Spracheinstellung */}
                <div className="mb-6">
                    <label className="block text-lg font-medium text-slate-100 mb-2">Sprache</label>
                    <select
                        value={language}
                        onChange={(e) => setLanguage(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-md bg-[#c22727] text-slate-100 font-semibold"
                    >
                        <option value="de">Deutsch</option>
                        <option value="en">Englisch</option>
                        <option value="fr">Französisch</option>
                    </select>
                </div>





                {/* Dark Mode */}
                <div className="mb-6 flex items-center justify-between">
                    <label className="text-lg font-medium text-slate-100">Dunkler Modus</label>
                    <label
                        htmlFor="darkModeToggle"
                        className={`inline-flex items-center cursor-pointer w-[50px] h-[28px] rounded-full transition-all duration-300 ${darkMode ? "bg-green-500" : "bg-gray-300"}`}
                    >
                        <span
                            className={`w-[20px] h-[20px] bg-white rounded-full shadow-md transform ${darkMode && "translate-x-[140%]"} transition-transform duration-300`}
                        />
                        <input
                            id="darkModeToggle"
                            type="checkbox"
                            className="hidden"
                            checked={darkMode}
                            onChange={toggleDarkMode}
                        />
                    </label>
                </div>









                {/* Benachrichtigungen */}
                <div className="mb-6 flex items-center justify-between">
                    <label className="text-lg font-medium text-slate-100">Benachrichtigungen</label>
                    <label
                        htmlFor="notificationsToggle"
                        className={`inline-flex items-center cursor-pointer w-[50px] h-[28px] rounded-full transition-all duration-300 ${notifications ? "bg-green-500" : "bg-gray-300"}`}
                    >
                        <span
                            className={`w-[20px] h-[20px] bg-white rounded-full shadow-md transform ${notifications && "translate-x-[140%]"} transition-transform duration-300`}
                        />
                        <input
                            id="notificationsToggle"
                            type="checkbox"
                            className="hidden" 
                            checked={notifications}
                            onChange={toggleNotifications}
                        />
                    </label>
                </div>








                {/* Automatische Updates */}
                <div className="mb-6 flex items-center justify-between">
                    <label className="text-lg font-medium text-slate-100">Automatische Updates</label>
                    <label
                        htmlFor="autoUpdatesToggle"
                        className={`inline-flex items-center cursor-pointer w-[50px] h-[28px] rounded-full transition-all duration-300 ${autoUpdates ? "bg-green-500" : "bg-gray-300"}`}
                    >
                        <span
                            className={`w-[20px] h-[20px] bg-white rounded-full shadow-md transform ${autoUpdates && "translate-x-[140%]"} transition-transform duration-300`}
                        />
                        <input
                            id="autoUpdatesToggle"
                            type="checkbox"
                            className="hidden"
                            checked={autoUpdates}
                            onChange={toggleAutoUpdates}
                        />
                    </label>
                </div>









                {/* Zeitzone */}
                <div className="mb-6">
                    <label className="block text-lg font-medium text-slate-100 mb-2">Zeitzone</label>
                    <select
                        value={timezone}
                        onChange={(e) => setTimezone(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-md bg-[#c22727] font-semibold text-slate-100"
                    >
                        <option value="Europe/Berlin">Berlin (GMT+1)</option>
                        <option value="Europe/London">London (GMT+0)</option>
                        <option value="America/New_York">New York (GMT-5)</option>
                        <option value="Asia/Tokyo">Tokyo (GMT+9)</option>
                        <option value="America/Los_Angeles">Los Angeles (GMT-8)</option>
                        <option value="Australia/Sydney">Sydney (GMT+10)</option>
                        <option value="Asia/Kolkata">Mumbai (GMT+5:30)</option>
                        <option value="Europe/Paris">Paris (GMT+1)</option>
                        <option value="Europe/Moscow">Moscow (GMT+3)</option>
                        <option value="Africa/Nairobi">Nairobi (GMT+3)</option>
                    </select>
                </div>









                {/* Passwort ändern */}
                <div className="mb-6">
                    <label className="block text-lg font-medium text-slate-100 mb-2">Neues Passwort</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Neues Passwort eingeben"
                        className="w-full p-3 border border-gray-300 rounded-md text-white bg-[#c22727]"
                    />
                </div>






                {/* Passwort wiederholen */}
                <div className="mb-6">
                    <label className="block text-lg font-medium text-slate-100 mb-2">Passwort wiederholen</label>
                    <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder="Passwort wiederholen"
                        className="w-full p-3 border border-gray-300 rounded-md text-white bg-[#c22727]"
                    />
                    {error && <p className="text-red-600 text-sm mt-2">{error}</p>}
                </div>







                {/* Speichern-Button */}
                <div className="flex justify-end gap-4 mt-10">
                    <div className="group flex justify-between hover:cursor-pointer items-center min-w-[10rem] font-semibold text-white px-6 py-2 rounded-2xl duration-300" onClick={props.backToMainMenu}
                    >
                        <img src="Graphic/arrow.svg" className="w-5 group-hover:-translate-x-3 duration-300" alt="Pfeil Icon für den zurück Knopf" />
                        <p>zurück</p>
                    </div>
                    <div onClick={handleSaveSettings}
                    className="min-w-[10rem] hover:bg-slate-100 hover:text-[#c22727] border text-center font-semibold text-white px-6 py-2 duration-300 rounded-2xl hover:cursor-pointer">
                        Speichern
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Settings;
