const MainMenu = (props:{
    toOptions:() => void;
    toDatabaseAccess:() => void;
    toLogin:() => void;
}) => {
    return (
        <div className="w-full bg-slate-100 p-6 pl-10 select-none flex flex-col items-start">
            <h2 className="text-2xl font-bold text-left text-[#333333] mb-8">Hauptmenü</h2>

            {/* Menü-Container */}
            <div className="w-full mt-10 max-w-[500px]">
                {/* Datenbank Menü */}
                <div
                onClick={props.toDatabaseAccess}
                    className="relative group min-h-[8rem] duration-300 hover:scale-[101%] hover:cursor-pointer bg-white rounded-lg shadow-md hover:shadow-lg p-6 mb-6 w-full"
                     // Zum Datenbankzugriff wechseln
                >
                    <h3 className="text-xl font-semibold text-[#333333]">Datenbank</h3>
                    <p className="text-[#555555]">Verwalten Sie die Datenbankoptionen wie Sichern, Wiederherstellen oder einen neuen Nutzer anlegen.</p>
                </div>

                {/* Content Management Menü */}
                <div
                    className="relative group min-h-[8rem] duration-300 hover:scale-[101%] hover:cursor-pointer bg-white rounded-lg shadow-md hover:shadow-lg p-6 mb-6 w-full"
                     // Zum Content Management wechseln
                >
                    <h3 className="text-xl font-semibold text-[#333333]">Content Management</h3>
                    <p className="text-[#555555]">Verwalten Sie Inhalte und steuern Sie alle Inhalte Ihrer Plattform.</p>
                </div>

                {/* Einstellungen Menü */}
                <div onClick={props.toOptions}
                    className="relative group min-h-[8rem] duration-300 hover:scale-[101%] hover:cursor-pointer bg-white rounded-lg shadow-md hover:shadow-lg p-6 mb-6 w-full"
                     // Zu den Einstellungen wechseln
                >
                    <h3 className="text-xl font-semibold text-[#333333]">Einstellungen</h3>
                    <p className="text-[#555555]">Passen Sie die allgemeinen Einstellungen der Anwendung an.</p>
                </div>

                {/* Ausloggen Menü */}
                <div
                onClick={props.toLogin}
                    className="relative group min-h-[8rem] duration-300 hover:scale-[101%] hover:cursor-pointer bg-white rounded-lg shadow-md hover:shadow-lg p-6 mb-6 w-full"
                     // Ausloggen-Funktion
                >
                    <h3 className="text-xl font-semibold text-[#333333]">Ausloggen</h3>
                    <p className="text-[#555555]">Melden Sie sich von der Anwendung ab.</p>
                </div>
            </div>
        </div>
    );
};

export default MainMenu;
