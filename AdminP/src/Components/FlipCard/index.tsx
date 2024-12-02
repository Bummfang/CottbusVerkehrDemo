import { useState } from "react";

const FlipCard = () => {
  const [flipped, setFlipped] = useState<Boolean>(false);

  return (
    <div className="flex flex-col">
      <div className={`card w-[25rem] h-[30rem] ${flipped ? "flipped" : ""}`}>
        <div className="card__content w-[25rem] h-[30rem] text-center relative p-20 transition-transform duration-1000 text-white font-bold">
          <div className="card__front absolute top-0 bottom-0 right-0 left-0 p-8 bg-pink-600 flex items-center justify-center">
            <h2>Front</h2>
          </div>
          <div className="card__back absolute top-0 bottom-0 right-0 left-0 p-8 bg-teal-500 flex items-center justify-center">
            <h2>Back</h2>
          </div>
        </div>
      </div>
      <div
        onClick={() => {
          setFlipped(!flipped);
        }}
      >
        Klick mich
      </div>
    </div>
  );
};

export default FlipCard;
