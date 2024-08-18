import React, { useState } from 'react';

const ImgUpload = () => {
  const [image, setImage] = useState(null);

  const handleImageUpload = (event) => {
    setImage(URL.createObjectURL(event.target.files[0]));
  };

  return (
    <div>
      <input type="file" onChange={handleImageUpload} />
      {image && <img src={image} alt="Uploaded Preview" className="w-[200px]" />}
    </div>
  );
};

export default ImgUpload;
