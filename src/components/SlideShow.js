import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

import fire from '../assets/fire.jpg';
import air from '../assets/air.jpg';
import water from '../assets/water.jpg';
import earth from '../assets/earth.jpg';

import '../styles/SlideShow.css'


const photos = [
  {
    element: fire,
    altText: 'Image of fire',
    caption: ''
  },
  {
    element: air,
    altText: 'Picture of sky',
    caption: 'Anahata Vishuddha'
  },
  {
    element: water,
    altText: 'A picture of the ocean',
    caption: 'Svadisthana'
  },
  {
    element: earth,
    altText: 'A picture of the desert',
    caption: ''
  }
];

const SlideShow = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === photos.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? photos.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = photos.map((photo) => {
    return (
      <CarouselItem
        className="custom-tag"
        tag="div"
        key={photo.element}
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
      >
        <img className="carousel-image" src={photo.element} alt={photo.altText} />
        <CarouselCaption className="carousel-title" captionHeader={photo.caption} />
      </CarouselItem>
    );
  });

  return (
    <div className="container-slides">
      <Carousel
        className="space"
        activeIndex={activeIndex}
        next={next}
        previous={previous}
      >
        <CarouselIndicators items={photos} activeIndex={activeIndex} onClickHandler={goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
      </Carousel>
    </div>
  );
}

export default SlideShow;