import { useState } from "react";

const FlipCard = () => {
  const [flipped, setFlipped] = useState<Boolean>(false);

  return (
    <div className="flex flex-col">
      <div className={`card w-[25rem] h-[30rem] ${flipped ? "flipped" : ""}`}>
        <div className="card__content w-[25rem] border border-[#909090] h-[30rem] rounded-md relative p-20 transition-transform duration-1000 text-white">
          <div className="card__front absolute top-0 bottom-0 right-0 left-0 p-8 bg-white text-[#151515]  rounded-md flex flex-col">
          <div className="h-[20rem] flex flex-col">
            <img src="/Graphic/logo.webp" alt="Cottbus Verkehr Logo" className=""/>

              <span className="font-bold text-[1.6rem] mt-[2rem]  ">Linie 16 hat neuen Fahrplan!</span>
              <p className="mt-[2rem]">Bitte beachten Sie, dass Linie 16 ein neuen Fahrplan hat. Die Haltestelle Sachsendorfer Haupt...
              </p>
              </div>
              <div
        onClick={() => {
          setFlipped(!flipped);
        }}
        className="bg-[#c93636] hover:text-[#c93636] hover:bg-white hover:border hover:border-[#c93636] duration-500 w-[8rem] text-center text-white text-[1rem] rounded-md p-2 mt-[2rem] cursor-pointer font-semibold"
      >
        Mehr dazu
      </div>
          </div>
          <div className="card__back absolute top-0 bottom-0 right-0 left-0 p-8 bg-[#c93636] rounded-md flex-col flex">
            <div className="h-[20rem] flex flex-col">
            <p className="text-white ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Debitis possimus vero labore id minima dolorem expedita incidunt, 
            delectus eveniet magni tenetur sit inventore est dolorum in accusamus numquam ea voluptate.
            </p>
            <p className="text-white ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Debitis possimus vero labore id minima dolorem expedita incidunt, 
            delectus eveniet magni tenetur sit inventore est dolorum in accusamus numquam ea voluptate.
            </p>
            </div>
            <div
        onClick={() => {
          setFlipped(!flipped);
        }}
        className="bg-white w-[8rem] text-center text-[#c93636] hover:text-white hover:bg-[#c93636] duration-500 hover:border hover:border-white text-[1rem] rounded-md p-2 mt-[2rem] cursor-pointer font-semibold"
      >
        zurück
      </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default FlipCard;
