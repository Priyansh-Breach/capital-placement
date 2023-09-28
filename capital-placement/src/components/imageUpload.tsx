import React, { useState } from 'react';
import './imageUpload.css';
import {FiUpload} from "react-icons/fi"


interface ImageUploadProps {
  GetData: (data: any) => void; // Define the prop for the function
}


const ImageUpload: React.FC<ImageUploadProps> = ({GetData}) => {
  const [image, setImage] = useState<File | null>(null);

  const handleDeleteImage = () => {
    setImage(null);
    GetData(null);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const droppedImage = e.dataTransfer.files[0];
    if (droppedImage) {
      setImage(droppedImage);
      GetData(droppedImage);
    }
  };

  return (
    <div className="image-upload-container">
      <div className={`upload_area ${image ? 'hidden' : ''}`} onDragOver={handleDragOver} onDrop={handleDrop}>
        <div className="cyan-ribbon">Upload Cover Image</div>
        <div className="dashed-border">
          <div id='inner_upload_cover'>
            <FiUpload id="upload_icon" />
            <p id='upload_font'>Upload Cover Image</p>
            <p id='upload_font_secondary'>16:9 ratio is recommended. Max image size 1mb</p>
          </div>
        </div>
      </div>

      {image && (
        <div className="image-preview">
          <img src={URL.createObjectURL(image)} alt="Preview" id='uploaded_image' />
          <div className="white-ribbon">
            <button className="delete-button" onClick={handleDeleteImage}>Delete & Re-Upload</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageUpload;
