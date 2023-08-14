import React from 'react';
import ReactDOM from 'react-dom/client';
import Carousel from './carousel';
import { images } from './images';

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
root.render(
  <Carousel images={images}/>
);
