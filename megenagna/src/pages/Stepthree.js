import "../App.css";
import React, { useState } from "react";
import { useDropzone } from "react-dropzone";

function Stepthree({ data, onChange, onNext }) {
  const [selectedImage, setSelectedImage] = useState(null);

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    onDrop: (acceptedFiles) => {
      const file = acceptedFiles[0];
      if (file) {
        setSelectedImage(URL.createObjectURL(file));
        onChange(file);
      }
    },
  });
  return (
    <div className="contu">
      <div className="middlediv">
        <p>inser event image</p>
        <div
          {...getRootProps({ className: "dropzone" })}
          style={{
            border: "2px dashed #ccc",
            padding: "80px",
            textAlign: "center",
            cursor: "pointer",
            margin: "30px",
          }}
        >
          <input {...getInputProps()} />
          <p>Drag and drop an image here, or click to select one</p>
        </div>

        {selectedImage && (
          <div>
            <h3>Selected Image Preview:</h3>
            <img
              src={selectedImage}
              alt="Preview"
              style={{ width: "100px", height: "100px", objectFit: "cover" }}
            />
          </div>
        )}
        <button onClick={onNext}>Next</button>
      </div>
    </div>
  );
}

export default Stepthree;
