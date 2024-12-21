import { useRef, useState } from "react";
import { motion } from "framer-motion";

const DragDrop = (props: { backToContentManagement: () => void }) => {
  const [dragging, setDragging] = useState<boolean>(false);
  const [selectedLine, setSelectedLine] = useState<string>("1");
  const [uploadProgress, setUploadProgress] = useState<number | null>(null);
  const [recentUploads, setRecentUploads] = useState<{ fileName: string; line: string; time: string }[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const dragCounter = useRef<number>(0);
  const handleDragIn = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    dragCounter.current += 1;
    if (dragCounter.current === 1) {
      setDragging(true);
    }
  };

  const handleDragOut = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    dragCounter.current -= 1;
    if (dragCounter.current === 0) {
      setDragging(false);
    }
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setDragging(false);
    const files = event.dataTransfer.files;
    if (files.length > 0) {
      handleFileUpload(files[0]);
    }
  };

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      handleFileUpload(files[0]);
    }
  };

  const handleFileUpload = (file: File) => {
    setUploadProgress(0);
    const interval = setInterval(() => {
      setUploadProgress((prev) => {
        if (prev === null || prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 10;
      });
    }, 100);

    setTimeout(() => {
      const uploadTime = new Date().toLocaleTimeString();
      setRecentUploads((prev) => [
        { 
          fileName: file.name, 
          line: selectedLine, 
          time: uploadTime 
        },
        ...prev.slice(0, 4), // Limit to 5 uploads
      ]);
      alert(`Der Fahrplan für Linie ${selectedLine} wurde erfolgreich aktualisiert!`);
      setUploadProgress(null);
    }, 3000);
  };

  const triggerFileInput = () => {
    fileInputRef.current!.click();
  };

  return (
    <motion.div
      className="animate-fadeInAnimation mt-[5%]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-3xl font-bold text-center text-slate-100 mb-8">
        Fahrplanänderung
      </h2>

      <div className="w-full flex flex-col items-center justify-center">
        {/* Dropdown zur Auswahl der Linie */}
        <motion.div
          className="mb-6"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <label className="block text-lg font-semibold text-white mb-2" htmlFor="line-select">
            Wähle eine Linie aus:
          </label>
          <select
            id="line-select"
            value={selectedLine}
            onChange={(e) => setSelectedLine(e.target.value)}
            className="w-[15rem] py-2 px-3 bg-white border rounded-lg text-[#c22727] font-semibold focus:outline-none focus:ring-2 focus:ring-[#c22727]"
          >
            {Array.from({ length: 16 }, (_, i) => (
              <option key={i + 1} value={i + 1}>
                Linie {i + 1}
              </option>
            ))}
          </select>
        </motion.div>

        {/* Drag-and-Drop-Bereich */}
        <motion.div
          className="relative w-[25rem] h-[10rem] rounded-lg my-[2rem] flex justify-center items-center transition-all duration-300 hover:cursor-pointer"
          onDragEnter={handleDragIn}
          onDragLeave={handleDragOut}
          onDragOver={(event) => event.preventDefault()}
          onDrop={handleDrop}
          onClick={triggerFileInput}
          whileHover={{ scale: 1.05 }}
        >
          {/* Weiße Hülle */}
          <div className="absolute inset-0 bg-white rounded-lg border-4 border-[#c22727] p-1 pointer-events-none"></div>
          {/* Innerer Bereich */}
          <div
            className={`absolute inset-[4px] bg-slate-200 rounded-lg flex items-center justify-center
          ${dragging ? "bg-green-500" : "bg-slate-200"}`}
          >
            <p className="text-center text-lg font-semibold text-gray-600 z-10">
              {dragging ? "Lass die Dateien hier los" : "Zieh eine Datei hierher oder klicke"}
            </p>
          </div>
          <input
            ref={fileInputRef}
            type="file"
            className="hidden"
            onChange={handleFileSelect}
          />
        </motion.div>

        {/* Fortschrittsanzeige */}
        {uploadProgress !== null && (
          <div className="w-[25rem] mt-4">
            <motion.div
              className="w-full bg-white border-4 border-[#c22727] rounded-3xl h-8 p-[2px]"
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
            >
              <div
                className="bg-[#c22727] h-full rounded-3xl text-center text-white font-bold"
                style={{ width: `${uploadProgress}%` }}
              >
                {uploadProgress}%
              </div>
            </motion.div>
          </div>
        )}

        {/* Zuletzt hochgeladene Dateien */}
        {recentUploads.length > 0 && (
          <motion.div
            className="w-[25rem] mt-6 p-4 bg-slate-100 rounded-lg shadow-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <h3 className="text-lg font-semibold mb-3 text-gray-800">Zuletzt hochgeladen:</h3>
            <ul className="space-y-2">
              {recentUploads.map((upload, index) => (
                <li key={index} className="text-sm text-gray-700">
                  {upload.time} - <strong>{upload.fileName}</strong> für Linie {upload.line}
                </li>
              ))}
            </ul>
          </motion.div>
        )}

        {/* Zurück-Button */}
        <motion.div
          className="w-full flex items-center justify-center mt-10"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <div className="group flex justify-between hover:cursor-pointer items-center min-w-[10rem] font-semibold text-white px-6 py-2 rounded-2xl duration-300" onClick={props.backToContentManagement}>
            <img src="Graphic/arrow.svg" className="w-5 group-hover:-translate-x-3 duration-300" alt="Pfeil Icon für den zurück Knopf" />
            <p>zurück</p>
          </div>
        </motion.div>
      </div>
    </motion.div>

  );
};
export default DragDrop;
