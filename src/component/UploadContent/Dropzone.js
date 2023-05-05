import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import "./Dropzone.css";

function Dropzone({ open }) {
  const onDrop = useCallback((acceptedFiles) => {
    // Do something with the files
  }, []);
  const { getRootProps, getInputProps, acceptedFiles, isDragActive } =
    useDropzone({ onDrop });
  const files = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  return (
    <>
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <>
            <p>Drag 'n' drop some files here, or click to select files</p>
            <button type="button" onClick={open} className="btn">
              Click to select files
            </button>
          </>
        )}
      </div>
      <aside>
        <ul>{files}</ul>
      </aside>
    </>
  );
}

export { Dropzone };
