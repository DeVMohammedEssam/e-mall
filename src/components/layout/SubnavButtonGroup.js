import React, { Component } from "react";
class SubnavButtonGroup extends Component {
  state = {
    notifications: {
      fav: "10",
      orders: "0"
    }
  };
  render() {
    const { fav, orders } = this.state.notifications;
    return (
      <React.Fragment>
        <div className="btn-group mt-5 mt-lg-0">
          <div className="dropdown">
            <button
              type="button"
              className="btn btn--icon btn--tab position-relative  "
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i className="fas fa-user mr-2 float-left mt-2" />
              <span className="float-right ">my account</span>
              <div className="subnav__user-dropdown-icons">
                <span className="text-muted">Login</span>
                <i className="fas fa-chevron-down" />
              </div>
            </button>

            {/*dropdown start */}
            <div className="dropdown-menu">
              <div className="dropdown-item dropdown__register" href="#">
                <a
                  className="btn btn-block btn-outline-secondary dropdown__register__login"
                  href="#"
                >
                  Login
                </a>
                <a href="#" className="float-right dropdown__register__link">
                  register now ->
                </a>
              </div>

              <a className="dropdown-item" href="#" />
              <div className="dropdown-divider" />
              <a className="dropdown-item" href="#">
                My orders
                <span className="badge border float-right dropdown__badge">
                  5
                </span>
              </a>

              <a className="dropdown-item " href="#">
                My account >
              </a>
              <a className="dropdown-item " href="#">
                Favourite list
                <span className="badge border float-right dropdown__badge">
                  12
                </span>
              </a>
            </div>
          </div>
          {/*dropdown End */}

          {/*button two */}
          <button type="button" className="btn btn--icon">
            <i className="fas fa-shopping-cart mr-2" />
            <span>Orders</span>
            <span
              className={`badge badge-pill badge-sm btn__notification badge-${
                orders == 0 ? "dark" : "danger"
              }`}
            >
              {orders}
            </span>
          </button>
          <button type="button" className="btn btn--icon">
            <i className="far fa-star mr-2" />
            <span>Favourite</span>
            <span
              className={`badge badge-pill badge-sm btn__notification badge-${
                fav == 0 ? "dark" : "danger"
              }`}
            >
              {fav}
            </span>
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export default SubnavButtonGroup;
