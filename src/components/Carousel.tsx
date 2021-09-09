import React from "react";
import { Image } from '@chakra-ui/react';
import { Carousel as CarouselReact } from "react-responsive-carousel";

type Image = {
  uid: string;
  url: string;
}

interface ImagesProps {
  images: Image[];
}

export default function Carousel({ images }: ImagesProps) {
  return (
    <CarouselReact 
      autoPlay
      infiniteLoop
      showStatus={false}
    >
      {images.map(image => {
        return (
          <div key={image.uid}>
            <Image  src={`${image.url}`} alt={`${image.uid}`} />
          </div>
        )
      })}
    </CarouselReact>
  );
}
