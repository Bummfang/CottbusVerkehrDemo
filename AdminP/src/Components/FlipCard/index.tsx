import { useState } from "react";

const FlipCard = () => {

  const [flipped, setFlipped] = useState<boolean>(false);

  /* Fahrplan - Nodes */
  const nodes = [
    { id: 1, x: 100, y: 50, label: 'Sachsendorfer Hauptstr.' },
    { id: 2, x: 150, y: 100, label: 'Chopinstraße' },
    { id: 3, x: 160, y: 150, label: 'Hauptbahnhof' },
    { id: 4, x: 200, y: 200, label: 'Universität' },
    { id: 5, x: 210, y: 250, label: 'Stadthalle/Post' },
  ];

  /* Fahrplan - Edges */
  const edges = [
    { from: 1, to: 2 },
    { from: 2, to: 3 },
    { from: 3, to: 4 },
    { from: 4, to: 5 },
  ];

  return (
    <div className="flex flex-col">
      <div className={`card w-[25rem] h-[30rem] ${flipped ? "flipped" : ""}`}>
        {/* Card Front */}
        <div className="card__content w-[25rem] border border-[#909090] h-[30rem] rounded-md relative p-20 transition-transform duration-1000 text-white">
          <div className="card__front absolute top-0 bottom-0 right-0 left-0 p-8 bg-white text-[#151515]  rounded-md flex flex-col">
            <div className="h-[20rem] flex flex-col">

              <img
                src="/Graphic/logo.webp"
                alt="Cottbus Verkehr Logo"
                className=""
              />

              {/* Text - Block */}
              <span className="font-bold text-[1.6rem] mt-[2rem]  ">
                Linie 16 hat eine neue Haltestelle!
              </span>
              <p className="mt-[1rem]">
                Bitte beachten Sie, dass Linie 16 ein neuen Fahrplan hat. Die
                Haltestelle Sachsendorfer Haupt...
              </p>
            </div>

            {/* Button on Front */}
            <div
              onClick={() => {
                setFlipped(!flipped);
              }}
              className="bg-[#c93636] hover:text-[#c93636] hover:bg-white hover:border hover:border-[#c93636] duration-500 w-[8rem] text-center text-white text-[1rem] rounded-md p-2 mt-[2rem] cursor-pointer font-semibold"
            >
              Fahrplan
            </div>
          </div>

          {/* Card Back */}
          <div className="card__back absolute top-0 bottom-0 right-0 left-0 p-8 bg-[#c93636] rounded-md flex-col flex">
            <div className="h-[20rem] flex flex-col">

              {/* Route Container */}
              <svg className="w-full h-full bg-white rounded-md">

                {/* Function for drawing edges */}
                {edges.map((edge, index) => {
                  const fromNode = nodes.find((node) => node.id === edge.from);
                  const toNode = nodes.find((node) => node.id === edge.to);

                  return (
                    <line
                      key={index}
                      x1={fromNode!.x}
                      y1={fromNode!.y}
                      x2={toNode!.x}
                      y2={toNode!.y}
                      stroke="black"
                      strokeWidth="2"
                    />
                  );
                })}

                {/* Function for drawing nodes */}
                {nodes.map((node) => (
                  <>
                  <circle
                    key={node.id}
                    cx={node.x}
                    cy={node.y}
                    r="8"
                    fill="#c93636"
                  />
                  <text
                  x={node.x}
                  y={node.y - 12}
                fill="#c93636"
                fontSize="15"
                textAnchor="right"
            >
            {node.label}
          </text>
          </>
                ))}
              </svg>
            </div>

            {/* Backside Button */}
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
