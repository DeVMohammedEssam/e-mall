import React from "react";
const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-2 text-center my-3 my-lg-0">
            <ul className="list-unstyled">
              <h4>Get help</h4>
              <a href="#">
                <li>sales support</li>
              </a>
              <a href="#">
                <li>customer services</li>
              </a>
              <a href="#">
                <li>developers</li>
              </a>
              <a href="#">
                <li>call (35) 2-56-5</li>
              </a>
            </ul>
          </div>
          <div className="col-12 col-md-6 col-lg-2 text-center my-3 my-lg-0">
            <ul className="list-unstyled">
              <h4>About us</h4>
              <a href="#">
                <li>who are us?</li>
              </a>
              <a href="#">
                <li>when did we started?</li>
              </a>
              <a href="#">
                <li>road</li>
              </a>
            </ul>
          </div>
          <div className="col-12 col-md-6 col-lg-4 my-3 my-lg-0">
            <div className="form-group btn-group w-100">
              <input
                className="form-control footer__email-input"
                name="subscribe"
                type="email"
                placeholder="type your email"
              />
              <input
                name="subscribe"
                className="btn btn--dark-blue footer__subscribe-button"
                type="submit"
                value="Subscibe"
              />
            </div>
            <p className="w-75 footer__subscribe-text">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis, consectetur accusamus.
            </p>
          </div>

          <div className="col-12 col-md-6 col-lg-2 text-center footer__social-col  my-3 my-lg-0">
            <h4>Follow us</h4>
            <ul className="nav   list-unstyled social--list">
              <a href="#" className="nav-link">
                <li>
                  <img
                    src="images/icons/facebook.ico"
                    alt="facebook"
                    className="social--facebook"
                  />
                </li>
              </a>
              <a href="#" className="nav-link">
                <li>
                  <img
                    src="images/icons/linkedin.ico"
                    alt="linked in"
                    className="social--linkedin"
                  />
                </li>
              </a>
              <a href="#" className="nav-link">
                <li>
                  <img
                    src="images/icons/twitter.ico"
                    alt="twitter"
                    className="social--twitter"
                  />
                </li>
              </a>
            </ul>
          </div>
          <div className="col-12 col-md-6 col-lg-2 my-3 my-lg-0">
            <ul className="list-unstyled">
              <li>
                <h5>Supported languages</h5>
              </li>
              <li className="my-2">English-Arabic</li>
              <a href="#">
                <li className="my-4">
                  policies-bussiness verification-terms of use
                </li>
              </a>
            </ul>
          </div>
        </div>
      </div>
      <button className="footer__scrollTop scrollToTop btn btn-outline-light">
        <i className="fas fa-chevron-up" />
      </button>
    </footer>
  );
};

export default Footer;
