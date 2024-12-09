import FlipCard from "../FlipCard";

const FahrplanView = (props : {
    backToContentManagement: () => void
}) => {
    return(
        <div className="animate-fadeInAnimation">
           <h2 className="text-3xl font-bold text-center text-slate-100 mb-8 mt-[4%]">
                Fahrplan - Übersicht
            </h2>
        <div className="grid grid-cols-3 grid-rows-1 gap-[5rem] mt-[5%]">
            <FlipCard />
            <FlipCard />
            <FlipCard />
        </div>
        <div className="w-full flex items-center justify-center mt-[5%]">
        <button
          onClick={() => props.backToContentManagement()}
          className="py-[0.7rem] mt-10 min-w-[12rem]  duration-200 px-4 bg-white text-[#c22727] font-semibold rounded-md hover:border hover:border-white hover:bg-[#c22727] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#c93636] focus:ring-opacity-50"
              >
                zurück
              </button>
        </div>       
        </div>
    )
}


export default FahrplanView;