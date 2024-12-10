import { useRef, useState } from "react";

const DragDrop = (props: { backToContentManagement: () => void }) => {

  // State for dragging status
  const [dragging, setDragging] = useState<boolean>(false);

  // Ref for file input element
  const fileInputRef = useRef<HTMLInputElement>(null);

  const dragCounter = useRef<number>(0);


  // On dragging file over the drop area
  const handleDragIn = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    dragCounter.current += 1;

    if (dragCounter.current == 1){
      setDragging(true);
    }
  };

  // On dragging file out of the drop area
  const handleDragOut = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    dragCounter.current -= 1;

    if (dragCounter.current == 0){
      setDragging(false);
    }
  };

  // On dropping file on the drop area
  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setDragging(false);
    const files = event.dataTransfer.files;
    dragCounter.current -= 0;

    // Do something with the files
    if (files.length > 0) {
      alert(`Datei(n) wurde(n) hinzugefügt: ${files[0].name}`);
    }
  };

  // On selecting file from explorer
  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;

    // Do something with the files
    if (files && files.length > 0) {
      alert(`Datei(n) wurde(n) hinzugefügt: ${files[0].name}`);
    }
  };

  // Trigger file input on click
  const triggerFileInput = () => {
      //trigger click event of input element
      fileInputRef.current!.click();
  };

  return (
    <div className="animate-fadeInAnimation mt-[5%]">
      <h2 className="text-3xl font-bold text-center text-slate-100 mb-8 ">
        Änderungen per Drag and Drop
      </h2>

      {/* Drag and Drop */}
      <div className="w-full flex items-center justify-center ">
        <div
          className={`flex justify-center items-center w-[25rem] h-[10rem] border-4 border-dashed rounded-lg transition-all duration-300 my-[2rem] hover:cursor-pointer 
        ${
          dragging
            ? "border-[#c22727] bg-green-500 animate-pulse opacity-100" // Animation bei Dragging
            : "border-gray-400 bg-slate-200 opacity-85" // Standard-Design
        }`}
          onDragEnter={handleDragIn} // Handle drag in event
          onDragLeave={handleDragOut} // Handle drag out event
          onDragOver={(event) => event.preventDefault()} // Prevent default behavior
          onDrop={handleDrop} // Handle drop event
          onClick={triggerFileInput} // Trigger file input on click
        >
          <p className="text-center text-lg font-semibold text-gray-600">
            {dragging ? "Lass die Dateien hier los" : "Zieh eine Datei hierher"}
          </p>
          {/* Input-Element for data selection from explorer */}
          <input
            ref={fileInputRef}
            type="file"
            multiple // Ermöglicht das Hochladen mehrerer Dateien
            className="hidden" // Versteckt das Input-Element
            onChange={handleFileSelect}
          />
        </div>
      </div>

      {/* Back to ContentManagement-Menu Button */}
      <div className="w-full flex items-center justify-center">
        <button
          onClick={() => props.backToContentManagement()}
          className="py-[0.7rem] mt-10 min-w-[12rem]  duration-200 px-4 bg-white text-[#c22727] font-semibold rounded-md hover:border hover:border-white hover:bg-[#c22727] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#c93636] focus:ring-opacity-50"
        >
          zurück
        </button>
      </div>
    </div>
  );
};

export default DragDrop;
