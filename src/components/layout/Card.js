import React from "react";
import LazyLodedImg from "./lazyLodedImg";
const Card = ({ cardType, cardImgSrc, title, hasOverlay, hasButtons }) => {
  return (
    <div className={`${cardType} p-0`}>
      {hasOverlay && (
        <div className="overlay-container">
          <div className="overlay overlay--dark ">
            <button className="btn btn-light btn--overlay">Show details</button>
          </div>
          <div className="card__img-container ordinary-card__img">
            <LazyLodedImg className="img-fluid" src={cardImgSrc} alt="" />
          </div>
        </div>
      )}

      {!hasOverlay && (
        <div className="card__img-container ordinary-card__img">
          <LazyLodedImg className="img-fluid" src={cardImgSrc} alt="" />
        </div>
      )}
      <div className="card--button__container px-3">
        <h4 className={`img-card__title ${hasButtons && "text-left"}`}>
          {title}
        </h4>
        {hasButtons && (
          <div className="card__buttons-container ">
            <button className="btn buy-button ">Buy now</button>
            <button className="btn fav-button">
              <i class="fas fa-star star-icon" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
