'use client';
import React from 'react';
import { ImgComparisonSlider } from '@img-comparison-slider/react';
import Image from 'next/image';
const ConfAfterImage = () => (
  <ImgComparisonSlider>
    <Image
      slot="first"
      src="/conf-image.jpg"
      alt="Panels"
      width={500}
      height={500}
    />
    <Image
      slot="second"
      src="/party-image.jpg"
      alt="Party"
      width={500}
      height={500}
    />
  </ImgComparisonSlider>
);

export default ConfAfterImage;
