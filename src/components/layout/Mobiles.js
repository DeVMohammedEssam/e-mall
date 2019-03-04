import React from "react";
import BigCard from "./BigCard";
import SmallCard from "./SmallCard";
const Mobiles = () => {
  return (
    <section className="computers">
      <div className="d-flex justify-content-end computers__seemore-row">
        <a href="#">see more</a>
      </div>
      <div className="row justify-content-between">
        <div className="col-12 col-md-6 text-center">
          <BigCard src={"/images/products/mobile1.jpg"} />
        </div>
        <div className="col-12 col-md-6">
          <div
            className="row justify-content-between"
            style={{ width: "100%", marginLeft: 0 }}
          >
            <SmallCard src={"/images/products/tablet3.jpg"} />
            <SmallCard src={"/images/products/mobile3.jpg"} />
            <div className="col-12   my-0 my-md-2" />
            <SmallCard src={"/images/products/mobile4.jpg"} />
            <SmallCard src={"/images/products/mobile5.jpg"} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mobiles;
