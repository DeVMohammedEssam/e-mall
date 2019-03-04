import React from "react";
import LazyLodedImg from "./lazyLodedImg";
const SmallCard = ({ src }) => {
  return (
    <div className="computers__small-card small-card ">
      <div className="overlay-container p-4">
        <div className="overlay overlay--dark ">
          <button className="btn btn-light btn--overlay" style={{}}>
            Show details
          </button>
        </div>
        <div className="row">
          <div className="col-12 col-lg-6">
            <div className="card__img-container small-card__img">
              <LazyLodedImg src={src} alt="Computer" />
            </div>
          </div>
          <div className="col-12 col-lg-6 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias illum
          </div>
        </div>
        <i className="fas fa-star float-right" />
        <div className="clearfix" />
      </div>
    </div>
  );
};

export default SmallCard;
