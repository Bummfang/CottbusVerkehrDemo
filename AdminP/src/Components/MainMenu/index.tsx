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
        <div className="w-full flex  bg-[#c22727] animate-fadeInAnimation">
            <div className="w-[10rem] h-[60%] min-h-[45rem] ml-16 mt-14 shadow-2xl border bg-slate-100 rounded-3xl grid grid-col-1 grid-row-4 place-items-center">


                <div onClick={props.toContentManagement} className="hover:shadow-xl backdrop-blur-3xl bg-blur hover:scale-[115%] group hover:cursor-pointer duration-500 hover:bg-[#c22727] w-[80%] h-[7rem] rounded-2xl flex flex-col justify-center items-center">
                    <ContentManagementIcon className="w-[1.5rem] fill-[#757575] group-hover:fill-slate-100"></ContentManagementIcon>
                    <p className="text-[0.8rem] font-semibold mt-4 text-[#727272] group-hover:text-slate-100">WEBSEITE</p>
                </div>

                <div onClick={props.toDatabaseAccess} className="hover:shadow-xl bg-blur hover:scale-[115%] group hover:cursor-pointer duration-500 hover:bg-[#c22727] w-[80%] h-[7rem] rounded-2xl flex flex-col justify-center items-center">
                    <DatabaseIcon className="w-[1.5rem] fill-[#757575] group-hover:fill-slate-100"></DatabaseIcon>
                    <p className="text-[0.8rem] font-semibold mt-4 text-[#727272] group-hover:text-slate-100">DATENBANK</p>
                </div>

                <div onClick={props.toOptions} className="hover:shadow-xl bg-blur hover:scale-[115%] group hover:cursor-pointer duration-500 hover:bg-[#c22727] w-[80%] h-[7rem] rounded-2xl flex flex-col justify-center items-center">
                    <SettingsIcon className="w-[1.5rem] fill-[#757575] group-hover:fill-slate-100" ></SettingsIcon>
                    <p className="text-[0.8rem] font-semibold mt-4 text-[#727272] group-hover:text-slate-100">EINSTELLUNGEN</p>
                </div>

                <div onClick={props.toLogin} className="hover:shadow-xl bg-blur hover:scale-[115%] group hover:cursor-pointer duration-500 hover:bg-[#c22727] w-[80%] h-[7rem] rounded-2xl flex flex-col justify-center items-center">
                    <LogoutIcon className="w-[1.5rem] fill-[#757575] group-hover:fill-slate-100"  ></LogoutIcon>
                    <p className="text-[0.8rem] font-semibold mt-4 text-[#727272] group-hover:text-slate-100">ABMELDEN</p>
                </div>

            </div>
        </div>
    );
};

export default MainMenu;
