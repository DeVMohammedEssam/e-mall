import React from "react";
import BigCard from "./BigCard";
import SmallCard from "./SmallCard";
import { trackWindowScroll } from "react-lazy-load-image-component";
const Computers = () => {
  return (
    <section className="computers">
      <div className="d-flex justify-content-end computers__seemore-row">
        <a href="#">see more</a>
      </div>
      <div className="row justify-content-between">
        <div className="col-12 col-md-6 text-center">
          <BigCard src={"/images/products/laptop1.jpg"} />
        </div>
        <div className="col-12 col-md-6">
          <div
            className="row justify-content-between"
            style={{ width: "100%", marginLeft: 0 }}
          >
            <SmallCard src="/images/products/laptop1.jpg" />
            <SmallCard src="/images/products/laptop2.jpg" />
            <div className="col-12   my-0 my-md-2" />
            <SmallCard src="/images/products/laptop2.jpg" />
            <SmallCard src="/images/products/laptop4.jpg" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default trackWindowScroll(Computers);
