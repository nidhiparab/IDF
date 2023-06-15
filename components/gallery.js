import React, { useState, useRef } from 'react';
import Head from 'next/head';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const scrollContainerRef = useRef(null);

  const images = [
    { id: 1, src: '../images/Image1.jpg', alt: 'Image 1', title: 'CMS Bal Gurukul, Vegavaram, Andhra Pradesh 2015' },
    { id: 2, src: '../images/Image2.jpg', alt: 'Image 2', title: 'Infant Jesus Bal gurukul, Trichy 2016' },
    { id: 3, src: '../images/Image3.jpg', alt: 'Image 3', title: 'Kiranites Bal Gurukul, Goa 2015' },
    { id: 4, src: '../images/Image4.jpg', alt: 'Image 4', title: 'Divya Gyan Bal Gurukul 2, Canacona, Goa 2017' },
    { id: 5, src: '../images/Image5.jpg', alt: 'Image 5', title: 'Divya Gyan Bal Gurukul, Canacona, Goa 2017' },
    { id: 6, src: '../images/Image6.jpg', alt: 'Image 6', title: 'AIM for Seva Bal Gurukul 2, Hyderabad, 2013' },
    { id: 7, src: '../images/Image7.jpg', alt: 'Image 7', title: 'Bal Gurukul of Indian Development Foundation (IDF).' },
    { id: 8, src: '../images/Image8.jpg', alt: 'Image 8', title: 'Charumathi Bal Gurukul 2, Nalgonda 2012' },
    { id: 9, src: '../images/Image9.jpg', alt: 'Image 9', title: 'IDF Premanjali Bal Gurukul at D. Pochampally , Qutbullapur Mandal, Ranga Reddy District, T' },
    { id: 10, src: '../images/Image10.jpg', alt: 'Image 10', title: 'Asha Bal Gurukul, Manorama Nagar, Thane 2016' },
    { id: 11, src: '../images/Image11.jpg', alt: 'Image 11', title: 'IDF Railway Bal Gurukul, Secunderabad 3_edited_edited' },
    { id: 12, src: '../images/Image12.jpg', alt: 'Image 12', title: 'Prabha Rajan Bal Gurukul 2014 Chennai' },
    { id: 13, src: '../images/Image13.jpg', alt: 'Image 13', title: 'Deepak Bal Gurukul, Jaipur' },
    { id: 14, src: '../images/Image14.jpg', alt: 'Image 14', title: 'IDF Railway Bal Gurukul, Secunderabad 4' },
    { id: 15, src: '../images/Image15.jpg', alt: 'Image 15', title: 'Koshish bal gurukul 2, Malwani, Mumbai 2014' },
    { id: 16, src: '../images/Image16.jpg', alt: 'Image 16', title: 'Aarey bal gurukul, mumbai' },
    { id: 17, src: '../images/Image17.jpg', alt: 'Image 17', title: 'Saveriar bal gurukul 2, Salem,2012' },
    { id: 18, src: '../images/Image18.jpg', alt: 'Image 18', title: 'Thiruvalluvar Bal Gurukul 2, Kanyakumari 2017' },
    { title: 'Rockfort Bal Gurukul, TRichy, Tamil Nadu 2012', id: 19, src: '../images/Image19.jpg', alt: 'Image 19' },
    { id: 20, src: '../images/Image20.jpg', alt: 'Image 20', title: 'Annam Methipara Bal Gurukul 4' },
    { id: 21, src: '../images/Image21.jpg', alt: 'Image 21', title: 'Arulanandar Bal Gurukul' },
    { id: 22, src: '../images/Image22.jpg', alt: 'Image 22', title: 'ashakiran bal gurukul, nerul 12' },
    { id: 23, src: '../images/Image23.jpg', alt: 'Image 23', title: 'Damien Bal Gurukul 1' },
    { id: 24, src: '../images/Image24.jpg', alt: 'Image 24', title: 'Charumathi Bal Gurukul, Nalgonda 2012' },
    // Add more images as needed
  ];

  const handleClick = (id) => {
    setSelectedImage(id);
  };

  const toggleFullScreen = () => {
    setSelectedImage(null);
  };

  const handleArrowClick = (direction) => {
    const currentIndex = images.findIndex((img) => img.id === selectedImage);
    let nextIndex;
    if (direction === 'prev') {
      nextIndex = currentIndex > 0 ? currentIndex - 1 : images.length - 1;
    } else {
      nextIndex = currentIndex < images.length - 1 ? currentIndex + 1 : 0;
    }
    setSelectedImage(images[nextIndex].id);
  };

  return (
    <div className="container mx-auto px-4">
      <Head>
        <style>{`
          .scroll-container {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-template-rows: repeat(3, 1fr);
            grid-gap: 10px;
          }
          .scroll-item {
            position: relative;
            width: 100%;
            height: 0;
            padding-bottom: 100%;
            overflow: hidden;
          }
          .scroll-item img {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
            cursor: pointer;
          }
          .fullscreen-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.8);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 1000;
          }
          .fullscreen-content {
            position: relative;
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            backdrop-filter: blur(10px);
          }
          .fullscreen-image {
            width: 80%;
            max-height: 80vh;
            object-fit: contain; /* Ensures image doesn't enlarge beyond its original size */
            margin-bottom: 10px;
          }
          .fullscreen-title {
            text-align: center;
            margin-top: 10px;
            color: white;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.6); 
          }
          .close-button {
            position: absolute;
            top: 10px;
            right: 10px;
            padding: 8px;
            background-color: white;
            border: none;
            outline: none;
            cursor: pointer;
            z-index: 1100; 
          }
          
          .arrow-button {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            padding: 8px;
            background-color: white;
            border: none;
            outline: none;
            cursor: pointer;
            z-index: 1100; 
          }
          .arrow-button-left {
            left: 10px;
          }
          .arrow-button-right {
            right: 10px;
          }
        `}</style>
      </Head>

      <h1 className="text-3xl font-medium text-center text-gray-900 mb-8">Gallery</h1>

      <div className="scroll-container" ref={scrollContainerRef}>
        {images.map((image) => (
          <div key={image.id} className="scroll-item">
            <img
              src={image.src}
              alt={image.alt}
              className="w-full rounded-lg cursor-pointer"
              onClick={() => handleClick(image.id)}
            />
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="fullscreen-overlay">
          <button className="close-button" onClick={toggleFullScreen}>
            Close
          </button>
          <button
            className="arrow-button arrow-button-left"
            onClick={() => handleArrowClick('prev')}
          >
            &lt;
          </button>
          <button
            className="arrow-button arrow-button-right"
            onClick={() => handleArrowClick('next')}
          >
            &gt;
          </button>
          <div className="fullscreen-content">
            <img
              src={images.find((img) => img.id === selectedImage).src}
              alt=""
              className="fullscreen-image"
            />
            <h2 className="fullscreen-title">
              {images.find((img) => img.id === selectedImage).title}
            </h2>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
