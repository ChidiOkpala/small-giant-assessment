import { useState } from "react";

type UploadProps = {
  onChange: (file: File | null) => void;
  label?: string;
};

const Upload = ({ label, onChange }: UploadProps) => {
  const [file, setFile] = useState<File | null>(null);

  const handleChange = (file: File | null) => {
    setFile(file);

    onChange(file);
  };

  const handleDelete = () => {
    handleChange(null);
  };

  return (
    <div>
      {label && <label className="text-base font-bold text-[#333333] block mb-3">{label}</label>}
      <div className="flex flex-col items-center justify-center w-full">
        <label htmlFor="upload-file" className="flex flex-col items-center justify-center w-full h-48 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
            </svg>
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">DOC, DOCX, PDF</p>
          </div>
          <input onChange={(e) => handleChange(e.target.files![0])} accept=".doc,.docx,.pdf" id="upload-file" type="file" className="hidden" required />
        </label>
        {file && (
          <div className="flex items-center justify-between border border-gray-500 rounded-lg pl-2 w-full mt-2 overflow-hidden">
            <span className="py-2">
              {file?.name}
            </span>
            <span className="bg-red-500 text-white px-5 py-2 h-full" onClick={handleDelete}>Delete</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Upload;
