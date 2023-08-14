import React, { useState, useEffect } from 'react';
import { handlePrevImage, handleNextImage, handledDotClicks } from './carousel-helpers';

const Carousel = props => {
  const [currentImage, setCurrentImage] = useState(0);
  const [intervalID, setIntervalId] = useState(null);
  const images = props.images;

  // useEffect(() => {
  //   setIntervalId(setInterval(
  //     handleNextImage(currentImage, setCurrentImage, images, intervalID, setIntervalId),
  //     3000));
  // }, [currentImage]);

  return (
    <>
      <div className="row">
        <div className='col-full image-wrapper'>
          <div className="row">
            <div className="col-one-fifth prev-item flex-center">
              <i onClick={() => { handlePrevImage(currentImage, setCurrentImage, intervalID, setIntervalId); }} className="fas fa-chevron-left"></i>
            </div>
            <div className="col-three-fifths flex-center">
              <img src={images[currentImage].src} alt={images[currentImage].alt} />
            </div>
            <div className="col-one-fifth next-item flex-center">
              <i onClick={() => { handleNextImage(currentImage, setCurrentImage, images, intervalID, setIntervalId); }} className="fas fa-chevron-right"></i>
            </div>
          </div>
          <div className="row">
            <div className="col-full dot-container flex-center">
              {images.map((image, index) => {
                return (
                  <React.Fragment key={image.id}>
                    {currentImage === image.id && (
                      <i key={image.id} onClick={event => handledDotClicks(image.id, setCurrentImage, intervalID, setIntervalId)} className="dot fas fa-circle"></i>
                    )}
                    {currentImage !== image.id && (
                      <i key={image.id} onClick={event => handledDotClicks(image.id, setCurrentImage, intervalID, setIntervalId)} className="dot far fa-circle"></i>
                    )}
                  </React.Fragment>);
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Carousel;
