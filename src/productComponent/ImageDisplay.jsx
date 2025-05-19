import React from 'react';

const ImageDisplay = ({ imageName }) => {
  return (
    <img
      src={`http://localhost:3000/api/product/${imageName}`}
      className="card-img-top rounded mx-auto d-block m-2"
      alt="image not found"
      style={{
        maxHeight: "270px",
        maxWidth: "100%",
        width: "auto",
      }}
    />
  );
};

export default ImageDisplay;
