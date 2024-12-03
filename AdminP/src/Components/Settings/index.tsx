import { useState } from "react";

const Settings = (props:{
    backToMainMenu:() => void;
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





    // Funktion zum Zurückkehren
    const handleBack = () => {
        // Zurück zur Hauptmenu oder Login-Seite
        alert("Zurück zur Hauptseite!");
    };





    return (
        <div className="bg-gray-100 select-none p-8 h-full">
            <div className="w-full max-w-[600px] mx-auto bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold text-[#333333] mb-8">Einstellungen</h2>



                {/* Spracheinstellung */}
                <div className="mb-6">
                    <label className="block text-lg font-medium text-[#333333] mb-2">Sprache</label>
                    <select
                        value={language}
                        onChange={(e) => setLanguage(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-md bg-white"
                    >
                        <option value="de">Deutsch</option>
                        <option value="en">Englisch</option>
                        <option value="fr">Französisch</option>
                    </select>
                </div>





                {/* Dark Mode */}
                <div className="mb-6 flex items-center justify-between">
                    <label className="text-lg font-medium text-[#333333]">Dark Mode</label>
                    <label
                        htmlFor="darkModeToggle"
                        className={`inline-flex items-center cursor-pointer w-[50px] h-[28px] rounded-full transition-all duration-300 ${darkMode ? "bg-blue-500" : "bg-gray-300"}`}
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
                    <label className="text-lg font-medium text-[#333333]">Benachrichtigungen</label>
                    <label
                        htmlFor="notificationsToggle"
                        className={`inline-flex items-center cursor-pointer w-[50px] h-[28px] rounded-full transition-all duration-300 ${notifications ? "bg-blue-500" : "bg-gray-300"}`}
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
                    <label className="text-lg font-medium text-[#333333]">Automatische Updates</label>
                    <label
                        htmlFor="autoUpdatesToggle"
                        className={`inline-flex items-center cursor-pointer w-[50px] h-[28px] rounded-full transition-all duration-300 ${autoUpdates ? "bg-blue-500" : "bg-gray-300"}`}
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
                    <label className="block text-lg font-medium text-[#333333] mb-2">Zeitzone</label>
                    <select
                        value={timezone}
                        onChange={(e) => setTimezone(e.target.value)}
                        className="w-full p-3 border border-gray-300 rounded-md bg-white"
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
                    <label className="block text-lg font-medium text-[#333333] mb-2">Neues Passwort</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Neues Passwort eingeben"
                        className="w-full p-3 border border-gray-300 rounded-md bg-white"
                    />
                </div>






                {/* Passwort wiederholen */}
                <div className="mb-6">
                    <label className="block text-lg font-medium text-[#333333] mb-2">Passwort wiederholen</label>
                    <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder="Passwort wiederholen"
                        className="w-full p-3 border border-gray-300 rounded-md bg-white"
                    />
                    {error && <p className="text-red-600 text-sm mt-2">{error}</p>}
                </div>







                {/* Speichern-Button */}
                <div className="flex justify-between">
                    <div onClick={props.backToMainMenu}
                        className="bg-[#3bbe76] min-w-[10rem] font-semibold text-white px-3 py-2 rounded-md hover:bg-[#309c61] duration-300"
                    >
                        zurück
                    </div>
                    <button
                        onClick={handleSaveSettings}
                        className="bg-[#265d91] min-w-[10rem] font-semibold text-white px-6 py-2 rounded-md hover:bg-[#356fa5] duration-300"
                    >
                        Speichern
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Settings;
