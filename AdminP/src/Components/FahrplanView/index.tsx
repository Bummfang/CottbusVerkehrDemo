import { motion } from "framer-motion";
import FlipCard from "../FlipCard";

const FahrplanView = (props: { backToContentManagement: () => void }) => {
  return (
    <div className="">
     <motion.div
     initial={{ y: -20, opacity: 0 }}
     animate={{ y: 0, opacity: 1 }}
     transition={{ delay: 0.5 }}
     >
      <h2 className="text-3xl font-bold text-center text-slate-100 mb-8 mt-[4%]">
        Fahrplan - Übersicht
      </h2>
      </motion.div>
      <div className="grid grid-cols-3 grid-rows-1 gap-[5rem] mt-[5%]">
        <motion.div 
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
        >
          <FlipCard />
        </motion.div>
        <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.65 }}
        >
          <FlipCard />
        </motion.div>
        <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.8 }}
        >
          <FlipCard />
        </motion.div>
      </div>
      <div className="w-full flex items-center justify-center mt-[5%]">
        <motion.div
          className="w-full flex items-center justify-center mt-10"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div
            className="group flex justify-between hover:cursor-pointer items-center min-w-[10rem] font-semibold text-white px-6 py-2 rounded-2xl duration-300"
            onClick={props.backToContentManagement}
          >
            <img
              src="Graphic/arrow.svg"
              className="w-5 group-hover:-translate-x-3 duration-300"
              alt="Pfeil Icon für den zurück Knopf"
            />
            <p>zurück</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FahrplanView;
