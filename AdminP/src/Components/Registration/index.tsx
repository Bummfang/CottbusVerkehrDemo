import axios from "axios";
import { useState } from "react";

const Registration = (props: { backToLogin: () => void; }) => {


  const [username,setUsername] = useState<string>('');
  const [password,setPassword] = useState<string>('');
  const [confirmPasswort,setConfirmPasswort] = useState<string>('');
  const [adminKey,setAdminKey] = useState<string>('');
  const [registText, setRegistText] = useState<string>('');


  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      if (password !== confirmPasswort) {
        console.error("Passwörter stimmen nicht überein !");
        return;
      }
      // console.log(username,password,adminKey);
      await axios.post("http://localhost:3000/api/register", {
        username,
        password,
        adminKey
      });
      setRegistText('Registrierung erfolgreich!');
      const timer = setTimeout(() => {
        props.backToLogin();
        return () => clearTimeout(timer);
      },1000)
    }
    catch {
      setRegistText('Fehler beim registrieren!')
    }
  };

  return (

    <>
      {/* Main container for centering the form */}
      <div className="w-full h-full flex select-none flex-col items-center mt-[15%] animate-fadeInAnimation">

        {/* Form container with padding, shadow, and maximum width */}
        <div className="bg-white p-8 rounded-3xl shadow-lg w-full max-w-xl duration-300">

          {/* Title of the form */}
          <h2 className="text-center text-2xl font-bold text-[#265d91] mb-6">Registrierung</h2>

          {/* Form element */}
          <form className="space-y-6" onSubmit={(e) => handleLogin(e)}>
            {/* Username input field */}
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">Benutzername*</label>
              <input
                id="username"
                type="text"
                onChange={(e) => setUsername(e.target.value)}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#c93636] focus:border-[#c93636] placeholder-gray-400 text-white bg-slate-800"
                placeholder="Benutzername eingeben"
                required // Ensures the field is mandatory
              />
            </div>



            {/* Password input field */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Passwort*</label>
              <input
                id="password"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#c93636] focus:border-[#c93636] placeholder-gray-400 text-white bg-slate-800"
                placeholder="Passwort eingeben"
                required // Ensures the field is mandatory
              />
            </div>

            {/* Confirm password input field */}
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Passwort bestätigen*</label>
              <input
                id="confirmPassword"
                type="password"
                onChange={(e) => setConfirmPasswort(e.target.value)}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#c93636] focus:border-[#c93636] placeholder-gray-400 text-white bg-slate-800"
                placeholder="Passwort erneut eingeben"
                required // Ensures the field is mandatory
              />
            </div>

            {/* Email input field */}
            <div>
              <label htmlFor="adminKey" className="block text-sm font-medium text-gray-700">Admin Key</label>
              <input
                id="adminKey"
                type="text"
                onChange={(e) => setAdminKey(e.target.value)}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-[#c93636] focus:border-[#c93636] placeholder-gray-400 text-white bg-slate-800"
                placeholder="Admin Key eingeben"
                required // Ensures the field is mandatory
              />
            </div>

            {/* Button section for form actions */}
            <div className="flex flex-row gab-5 justify-between items-center gap-5">
              {/* Back to login button */}
              <div onClick={props.backToLogin}
                className="py-2 px-6 mt-10 duration-200 group flex justify-between text-white bg-[#265d91] hover:bg-[#356fa5] min-w-[10rem] border-black font-semibold rounded-md hover:border-none focus:outline-none focus:ring-2 focus:ring-[#c93636] focus:ring-opacity-50"
              >
                <img src="Graphic/arrow.svg" className="w-5 group-hover:-translate-x-3 duration-300" alt="Pfeil Icon für den zurück Knopf" />
                <p>zurück</p>
              </div>

              {/* Submit registration button */}
              <button
                type="submit"
                className="py-2 mt-10 duration-200 px-4 bg-[#3bbe76] text-white min-w-[10rem] font-semibold rounded-md hover:bg-[#309c61] focus:outline-none focus:ring-2 focus:ring-[#c93636] focus:ring-opacity-50"
              >
                Registrieren
              </button>
            </div>
          </form>
        </div>

        {/* Information text */}
        <div className={`mt-5 border rounded-xl bg-[#353535] text-[0.8rem] font-semibold p-1 text-center text-white px-3 ${registText === "" ? "opacity-0":"opacity-100"}`}>{registText}</div>
      </div>
    </>
  );
}

export default Registration;
