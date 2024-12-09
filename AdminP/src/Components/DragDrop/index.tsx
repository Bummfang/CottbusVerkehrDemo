import { useDrop } from "react-dnd";

const DragDrop = (props: { backToContentManagement: () => void }) => {


      function Bucket() {
        const [{ canDrop, isOver }, drop] = useDrop(() => ({
          // The type (or types) to accept - strings or symbols
          accept: 'BOX',
          // Props to collect
          collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop()
          })
        }))
      
        return (
          <div
            ref={drop}
            role={'Dustbin'}
            style={{ backgroundColor: isOver ? 'red' : 'white' }}
          >
            {canDrop ? 'Release to drop' : 'Drag a box here'}
          </div>
        )
      }


  return (
    <div className="animate-fadeInAnimation">
      <h2 className="text-3xl font-bold text-center text-slate-100 mb-8 mt-[4%]">
        Änderungen per Drag and Drop
      </h2>

      {/* Drag and Drop */}
    
      
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
