import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const LazyLoadedImg = ({ alt, src }) => {
  return <LazyLoadImage src={src} alt={alt} effect={"blur"} />;
};

export default LazyLoadedImg;
