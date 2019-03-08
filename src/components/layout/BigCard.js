import React, { Component } from "react";
import LazyLodedImg from "./lazyLodedImg";

class BigCard extends Component {
  state = {
    more_less: "read more",
    textIsHidden: true
  };
  render() {
    let { more_less, textIsHidden } = this.state;
    return (
      <div className="big-card computers__big-card bg-white">
        <div className="row">
          <div className="col-12 col-lg-6 ">
            <div className="card__img-container  big-card__img ">
              <LazyLodedImg src={this.props.src} alt="Computer" height={300} />
            </div>
          </div>
          <div className="col-12 col-lg-6 ">
            <div className="card--button__container px-3 ">
              <p className={`img-card__title text-left read-more-area`}>
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                {!textIsHidden && (
                  <span>
                    Vero dolore tempora vel facere atque? Quod laborum, harum
                    inventore commodi vero quia. Odit officia, ut quibusdam
                    illum sapiente magnam saepe eum!
                  </span>
                )}
                <a
                  href="#"
                  style={{ textDecoration: "none" }}
                  className="read-more-button btn btn-link"
                  onClick={e => {
                    e.preventDefault();
                    textIsHidden
                      ? this.setState(() => ({ more_less: "read less" }))
                      : this.setState(() => ({ more_less: "read more" }));
                    this.setState(() => ({ textIsHidden: !textIsHidden }));
                  }}
                >
                  {more_less}
                </a>
              </p>

              <div className="card__buttons-container d-none d-md-flex">
                <button className="btn buy-button d-flex justify-content-center">
                  Buy now
                </button>
                <button className="btn fav-button">
                  <i class="fas fa-star star-icon" />
                </button>
              </div>
              <div className="card__buttons-container d-flex d-md-none flex-column">
                <button className="btn buy-button btn-block w-100 d-flex justify-content-center">
                  Buy now
                </button>
                <button className="btn fav-button btn-block w-100">
                  <i class="fas fa-star star-icon fa-star--not-selected" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BigCard;
