import React, { useCallback } from "react";
import { assets } from "../../../assets/assets";
import { useDropzone } from "react-dropzone";

const Assignment = () => {
  const onDrop = useCallback((acceptedFiles) => {
    // Do something with the files
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  return (
    <div {...getRootProps()} className="bg-white w-full p-3 rounded-2xl">
      <p className="text-textGrey font-lexend underline text-base">
        Upload Assignment
      </p>
      <div className="flex flex-col items-center justify-center w-full border-3 border-primary rounded-3xl mt-2">
        <input {...getInputProps()} />
        {isDragActive ? (
          <div className="flex flex-col items-center gap-3 p-5 cursor-pointer">
            <img
              src={assets.uploadCloudIcon}
              alt="upload files icon"
              className="w-14 h-14 text-primary"
            />
            <p className="font-lexend text-base text-textGrey underline">
              Drag files here ...
            </p>
            <p className="font-lexend text-xs text-textGrey underline">
              Supported Format{" "}
              <span className="text-primary">pdf,docs,text,xls,mp4</span>
            </p>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-3 p-5 cursor-pointer hover:underline">
            <img
              src={assets.uploadCloudIcon}
              alt="upload files icon"
              className="w-14 h-14 text-primary"
            />
            <p className="font-lexend text-base text-textGrey ">
              Drag and drop files here or{" "}
              <span className="text-primary">Browse</span>
            </p>
            <p className="font-lexend text-xs text-textGrey ">
              Supported Format{" "}
              <span className="text-primary">pdf,docs,text,xls,mp4</span>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Assignment;
