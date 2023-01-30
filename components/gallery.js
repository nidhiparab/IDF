import React, { useState } from 'react';
import Head from 'next/head';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    { id: 1, src: '../images/Image1.png', alt: 'Image 1', title: 'Image 1 Title' },
    { id: 2, src: '../images/Image2.png', alt: 'Image 2', title: 'Image 2 Title' },
    { id: 3, src: '../images/Image3.png', alt: 'Image 3', title: 'Image 3 Title' },
    { id: 1, src: '../images/Image1.png', alt: 'Image 1', title: 'Image 1 Title' },
    { id: 2, src: '../images/Image2.png', alt: 'Image 2', title: 'Image 2 Title' },
    { id: 3, src: '../images/Image3.png', alt: 'Image 3', title: 'Image 3 Title' },
    { id: 1, src: '../images/Image1.png', alt: 'Image 1', title: 'Image 1 Title' },
    { id: 2, src: '../images/Image2.png', alt: 'Image 2', title: 'Image 2 Title' },
    { id: 3, src: '../images/Image3.png', alt: 'Image 3', title: 'Image 3 Title' },
  ];

  const handleClick = (id) => {
    setSelectedImage(id);
  };

  return (
    <div className="container mx-auto px-4">
 

      <h1 className="text-3xl font-medium text-center text-gray-900 mb-8">Gallery</h1>

      <div className="grid grid-cols-3 gap-4">
        {images.map(image => (
          <div key={image.id}>
            <img src={image.src} alt={image.alt} className="w-full rounded-lg cursor-pointer" onClick={() => handleClick(image.id)} />
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="w-full  max-w-lg bg-blue-100 rounded-lg p-4">
            <img src={images.find(img => img.id === selectedImage).src} alt="" className="w-full rounded-lg mb-4" />
            <h2 className="text-xl font-medium text-center text-gray-900 mb-4">{images.find(img => img.id === selectedImage).title}</h2>
            <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-medium py-2 px-4 rounded-lg" onClick={() => setSelectedImage(null)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
