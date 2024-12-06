import axios from "axios";
import {useState } from "react";

const Login = (props: {
  login: () => void;
  toRegistration: () => void;
}) => {

  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [adminkey, setAdminKey] = useState<string>('');
  const [backendMessage, setBackendMessage] = useState<string>('');



  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/api/login", {
        username,
        password,
        adminkey
      });
      setBackendMessage(response.data.message + "!");
      const timer = setTimeout(() => {
        props.login();
    }, 1000); 
    return () => clearTimeout(timer);
    }
    catch (err) {
      setBackendMessage("Nutzer nicht gefunden!");
    }
  };




  return (
    <>
      <div className="w-full h-full flex bg-[#c22727] flex-col select-none items-center mt-[5%] animate-fadeInAnimation">
        {/* Outer container for centering the form with animation */}
        <div className="bg-white p-8 rounded-2xl hover:scale-[102%]  shadow-xl w-full max-w-xl duration-300">
          <div className="w-full flex justify-center items-center">
          <img className="h-[7rem]" src="/Graphic/logo.png" alt="" />
          </div>
          {/* Header section with the title of the form */}

          <form className="space-y-6 mt-4" onSubmit={handleLogin}>
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
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            {/* Password input field */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Passwort*</label>
              <input
                id="password"
                type="password"
                className="mt-1 block w-full px-4 py-2 border  border-gray-300 rounded-md shadow-sm focus:ring-[#c93636] focus:border-[#c93636] placeholder-gray-400 text-white bg-slate-800"
                placeholder="Passwort eingeben"
                required
                onChange={(e) => setPassword(e.target.value)}
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
                onChange={(e) => setAdminKey(e.target.value)}
              />
            </div>

            {/* Button row: login button and registration button */}
            <div className="flex flex-row gab-5 justify-center items-center gap-5">
              {/* Button to navigate to the Registration page */}
              <div onClick={props.toRegistration}
                className="py-2 mt-10 min-w-[10rem] hover:cursor-pointer flex justify-center item-center duration-200 px-4 border border-[#c22727] text-[#c22727] font-semibold rounded-md hover:border-[#c22727] hover:bg-[#c22727] hover:text-slate-100"
              >
                Registration
              </div>

              <button
                type="submit"
                className="py-2 mt-10 min-w-[10rem] duration-200 px-4 bg-[#c22727] text-white font-semibold rounded-md hover:bg-[#309c61] focus:outline-none focus:ring-2 focus:ring-[#c93636] focus:ring-opacity-50"
              >
                Anmeldung
              </button>
            </div>

          </form>
        </div >

        {/* Informational text below the form */}
        < p className="mt-10 text-[1.2rem] font-semibold p-1 text-center text-slate-100" >Sie sind aktuell nicht mit dem Backend Service verbunden. Bitte melden Sie sich an!</p >
        <p className="mt-2 text-[0.8rem] font-semibold p-1 text-center text-slate-100">Hinweis: Bitte melden Sie sich nur mit entsprechender Berechtigung an. Fehlerhafte Anmeldeversuche werden aus Sicherheitsgründen protokolliert.</p>
        <div className={`mt-5 border rounded-xl bg-[#e0e0e0]  text-[0.9rem] font-semibold p-1 text-center text-slate-800 px-3 ${backendMessage === "" ? "opacity-0":"opacity-100" }`}>{backendMessage}</div>
      </div >
    </>
  );
}
export default Login;
