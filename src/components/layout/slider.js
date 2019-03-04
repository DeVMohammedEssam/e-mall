import React, { Component } from "react";
import Card from "./Card";
class Slider extends Component {
  state = {
    cardImg: [
      {
        src: "/images/products/mobile2.jpg",
        title:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, cum."
      },
      {
        src: "/images/products/laptop2.jpg",
        title:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, cum."
      },
      {
        src: "/images/products/watch1.jpg",
        title:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, cum."
      },
      {
        src: "/images/products/laptop4.jpg",
        title:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, cum."
      },
      {
        src: "/images/products/mobile3.jpg",
        title:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, cum."
      },
      {
        src: "http://placehold.it/200/350",
        title:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, cum."
      },
      {
        src: "/images/products/mobile4.jpg",
        title:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, cum."
      },
      {
        src: "http://placehold.it/200/450",
        title:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, cum."
      },
      {
        src: "http://placehold.it/200/500",
        title:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, cum."
      },
      {
        src: "http://placehold.it/200/550",
        title:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, cum."
      },
      {
        src: "http://placehold.it/200/600",
        title:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, cum."
      }
    ]
  };

  render() {
    const { cardImg } = this.state;
    return (
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            className="active"
          />
          <li data-target="#carouselExampleIndicators" data-slide-to="1" />
          <li data-target="#carouselExampleIndicators" data-slide-to="2" />
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active mt-5">
            <div className="row carousel-itme__row">
              {cardImg.map(img => {
                if (cardImg.indexOf(img) + 1 > 4) {
                  return false;
                } else {
                  return (
                    <Card
                      key={img.src}
                      cardType="img-card--rounded"
                      cardImgSrc={img.src}
                      title={img.title}
                      hasOverlay={true}
                      hasButtons={true}
                    />
                  );
                }
              })}
            </div>
          </div>
          <div className="carousel-item mt-5">
            <div className="row carousel-itme__row">
              {cardImg.map(img => {
                if (cardImg.indexOf(img) + 1 > 4) {
                  return false;
                } else {
                  return (
                    <Card
                      key={img.src}
                      cardType="img-card--rounded"
                      cardImgSrc={img.src}
                      title={img.title}
                      hasOverlay={true}
                      hasButtons={true}
                    />
                  );
                }
              })}
            </div>
          </div>
          <div className="carousel-item mt-5">
            <div className="row carousel-itme__row">
              {cardImg.map(img => {
                if (cardImg.indexOf(img) + 1 > 4) {
                  return false;
                } else {
                  return (
                    <Card
                      key={img.src}
                      cardType="img-card--rounded"
                      cardImgSrc={img.src}
                      title={img.title}
                      hasOverlay={true}
                      hasButtons={true}
                    />
                  );
                }
              })}
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <i
              className="fas fa-chevron-left carousel-control-prev-icon"
              aria-hidden="true"
            />
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <i
              className="fas fa-chevron-right  carousel-control-next-icon"
              aria-hidden="true"
            />
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    );
  }
}

export default Slider;
