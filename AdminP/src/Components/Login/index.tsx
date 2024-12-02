const Login = (props: {
  login: () => void;
  toRegistration: () => void;
}) => {

  return (
    <>
      <div className="w-full h-full flex flex-col select-none items-center justify-center animate-fadeInAnimation">
        {/* Outer container for centering the form with animation */}
        <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-xl duration-300">
          <h2 className="text-center text-2xl font-bold text-[#c93636] mb-6">Anmeldung</h2>
          {/* Header section with the title of the form */}

          <form className="space-y-6" onSubmit={props.login}>
            {/* Form container with a 6-unit space between form elements */}
            
            {/* Username input field */}
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">Benutzername*</label>
              <input
                id="username"
                type="text"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#c93636] focus:border-[#c93636] placeholder-gray-400 text-white bg-slate-800"
                placeholder="Benutzername eingeben"
                required
              />
            </div>

            {/* Password input field */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Passwort*</label>
              <input
                id="password"
                type="password"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#c93636] focus:border-[#c93636] placeholder-gray-400 text-white bg-slate-800"
                placeholder="Passwort eingeben"
                required
              />
            </div>

            {/* Admin key input field (optional) */}
            <div>
              <label htmlFor="adminKey" className="block text-sm font-medium text-gray-700">Administrator-Schlüssel</label>
              <input
                id="adminKey"
                type="text"
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#c93636] focus:border-[#c93636] placeholder-gray-400 text-white bg-slate-800"
                placeholder="Administrator-Schlüssel eingeben"
              />
            </div>

            {/* Button row: login button and registration button */}
            <div className="flex flex-row gab-5 justify-center items-center gap-5">
              <button
                type="submit"
                className="py-2 mt-10 min-w-[10rem] duration-200 px-4 bg-[#c93636] text-white font-semibold rounded-md hover:bg-[#a32a2a] focus:outline-none focus:ring-2 focus:ring-[#c93636] focus:ring-opacity-50"
              >
                Anmeldung
              </button>

              {/* Button to navigate to the Registration page */}
              <div onClick={props.toRegistration}
                className="py-2 mt-10 min-w-[10rem] flex justify-center item-center duration-200 px-4 bg-[#265d91] text-white font-semibold rounded-md hover:bg-[#3bbe76] focus:outline-none focus:ring-2 focus:ring-[#c93636] focus:ring-opacity-50"
              >
                Registration
              </div>
            </div>

          </form>
        </div>

        {/* Informational text below the form */}
        <p className="mt-[10%] text-[1.2rem] font-semibold p-1 text-center">Sie sind aktuell nicht mit dem Backend Service verbunden. Bitte melden Sie sich an!</p>
        <p className="mt-2 text-[0.8rem] font-semibold p-1 text-center">Hinweis: Bitte melden Sie sich nur mit entsprechender Berechtigung an. Fehlerhafte Anmeldeversuche werden aus Sicherheitsgründen protokolliert.</p>
      </div>
    </>
  );
}
export default Login;
