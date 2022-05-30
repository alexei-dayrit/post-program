export const handlePrevImage = (currentImage, setCurrentImage, intervalID, setIntervalId) => {
  (currentImage === 0) ? setCurrentImage(4) : setCurrentImage(currentImage - 1);
  clearInterval(intervalID);
  intervalID = setInterval(handleNextImage, 3000);
};

export const handleNextImage = (currentImage, setCurrentImage, images, intervalID, setIntervalId) => {
  console.log(images);
  console.log('test:', setIntervalId);
  if (currentImage === images.length - 1) {
    setCurrentImage(0);
  } else {
    setCurrentImage(currentImage + 1);
  }
  clearInterval(intervalID);
  setIntervalId(setInterval(() => {
    handleNextImage(currentImage, setCurrentImage, images, intervalID);
  }, 3000));
};

export const handledDotClicks = (id, setCurrentImage, intervalID, setIntervalId) => {
  setCurrentImage(id);
  clearInterval(intervalID);
  setIntervalId(setInterval(handleNextImage, 3000));
};
