import React, { useState } from "react";

import FileUploadIcon from "@mui/icons-material/FileUpload";
import Image from "next/image";

const UploadArea = () => {
  const [selectedFile, setSelectedFile] = useState<FileList>();

  const handleChange = (file: FileList) => {
    setSelectedFile(file);
  };

  const getImagePreview = (): string => {
    if (selectedFile) {
      return URL.createObjectURL(selectedFile[0]);
    }
    return "";
  };

  const handleRemoveFile = () => setSelectedFile(undefined);

  return (
    <div className="w-full flex flex-col gap-3">
      <div>
        <label className="text-white font-medium text-m">Upload file</label>
        <p className="text-light-gray">Drag or choose your file to upload</p>
      </div>
      {selectedFile ? (
        <div className="h-80 w-80 relative">
          <div
            onClick={handleRemoveFile}
            className="w-full h-full flex text-xl cursor-pointer font-bold text-white items-center justify-center absolute opacity-0 bg-black inset-0 z-50 hover:opacity-50 transition"
          >
            REMOVE
          </div>
          <Image src={getImagePreview()} alt="NFT Preview" layout="fill" />
        </div>
      ) : (
        <div className="w-full rounded transition hover:bg-transparent border-2 bg-gray-200 border-dashed border-purple-light h-52">
          <label
            htmlFor="dropzone-file"
            className="w-full h-full flex flex-col items-center justify-center cursor-pointer"
          >
            <FileUploadIcon className="text-gray-100 transition text-3xl" />
            <p className="text-gray-100 transition">
              <strong>Click to upload</strong> or drag and drop
            </p>
            <input
              accept="image/*"
              onChange={e => e.target?.files && handleChange(e.target.files)}
              value={selectedFile}
              id="dropzone-file"
              type="file"
              className="hidden"
            />
          </label>
        </div>
      )}
    </div>
  );
};

export default UploadArea;
