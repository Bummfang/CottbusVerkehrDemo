import FlipCard from "../FlipCard";

const NewsPage = () => {

    return(
    <>
      <div className="w-full h-full flex flex-col select-none items-center animate-fadeInAnimation">
        {/* Header with Logo and Title */}
        <div className={`w-full h-full bg-slate-100`}>
                <div className="w-full bg-slate-100">
                    <div className="w-full h-[6rem] bg-[#c93636] select-none flex items-center justify-between rounded-b-2xl border-b-2 border-slate-100">
                        {/* Title */}
                        <p className="text-white font-bold text-[1.5rem] ml-8">Aktuelle Nachrichten</p>
                        {/* Logo */}
                        <img className="h-[6rem] rounded-br-2xl" src="/Graphic/logo.webp" alt="Cottbus Verkehr Logo" />
                    </div>
                </div>
        </div>
     {/* Main Content */}
     <div className="w-full h-full border-2 
     grid grid-cols-3 grid-rows-2 place-items-center place-content-center
     gap-y-[20%] mt-[10%]">
     
   <FlipCard/>
   <FlipCard/>
   <FlipCard/>
   <FlipCard/>
   <FlipCard/>
   <FlipCard/>
        </div>
     </div>
     </>);
}

export default NewsPage;