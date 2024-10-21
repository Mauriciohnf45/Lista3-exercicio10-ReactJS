import React from 'react';

const ImageGallery = ({ images }) => {
  return (
    <div>
      {images.map((image, index) => (
        <img 
          key={index} 
          src={image.url} 
          alt={image.altText} 
          style={{ width: '150px', height: 'auto', margin: '10px' }} 
        />
      ))}
    </div>
  );
};

export default ImageGallery;
