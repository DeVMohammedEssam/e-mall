import React from "react";
import Slider from "./slider";
import { trackWindowScroll } from "react-lazy-load-image-component";
const TopTrendSlider = () => {
  return (
    <section className="top-trends pt-4">
      <div className="d-flex justify-content-between pr-5">
        <h3 className="top-trends__title">now trends</h3>
        <a href="#">see more</a>
      </div>
      <Slider />
    </section>
  );
};

export default trackWindowScroll(TopTrendSlider);
