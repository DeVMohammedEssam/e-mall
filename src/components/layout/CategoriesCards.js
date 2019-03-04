import React, { Component } from "react";
import Card from "./Card";
import uuid from "uuid";
import { trackWindowScroll } from "react-lazy-load-image-component";
class CategoriesCards extends Component {
  state = {
    cardImgSrc: [
      { src: "/images/products/accesories.jpg", title: "Accesories" },
      { src: "/images/products/cam.jpg", title: "Cameras" },
      { src: "/images/products/electronics.jpg", title: "Electronics" },
      { src: "/images/products/guittar.jpg", title: "musical instruments" },
      { src: "/images/products/headphone.jpg", title: "Headphones" },
      { src: "/images/products/laptop1.jpg", title: "Laptops" },
      { src: "/images/products/mobile1.jpg", title: "Mobiles" },
      { src: "/images/products/taplet1.jpg", title: "Teplets" },
      { src: "/images/products/watch1.jpg", title: "Watches" },
      { src: "http://placehold.it/200/550", title: "titleTest" },
      { src: "http://placehold.it/200/600", title: "titleTest" }
    ]
  };
  render() {
    const { cardImgSrc } = this.state;

    return (
      <div className="row categories">
        {cardImgSrc.map(img => {
          if (cardImgSrc.indexOf(img) < 9) {
            return (
              <Card
                key={uuid()}
                cardType="img-card--box"
                cardImgSrc={img.src}
                title={img.title}
              />
            );
          } else if (cardImgSrc.indexOf(img) === 9) {
            return (
              <div key={uuid()} className="img-card--box  ">
                <div className="img-card--box__moreButton">
                  <h1>
                    <i className="fas fa-chevron-right d-none d-sm-block" />
                    <i className="fas fa-chevron-down d-block d-sm-none" />
                  </h1>
                  <h2>All categories</h2>
                </div>
              </div>
            );
          } else return false;
        })}
      </div>
    );
  }
}

export default trackWindowScroll(CategoriesCards);
