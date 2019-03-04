import React from "react";
import SubnavButtonGroup from "./SubnavButtonGroup";
const SubNav = () => {
  return (
    <section className="subnav">
      <div className="container">
        <form
          className="
          x"
        >
          <div className="form-group row align-items-center">
            <div className="col-4 col-lg-1">
              <img className="img-fluid" src="http://placehold.it/50/100" />
            </div>
            <div className="col-8 col-lg-6 col-xl-7">
              <div className="btn-group w-100">
                <input
                  type="text"
                  className="form-control form-control-lg subnav__form-group__input"
                  id="inputPassword"
                  placeholder="Feel free to search.."
                />
                <button className="btn btn--light-blue  px-4 ">
                  <i className="fas fa-search fa-lg" />
                </button>
              </div>
            </div>

            <div className="col-12 col-lg-5 col-xl-4  mt-lg-0 text-center text-lg-right">
              <SubnavButtonGroup />
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SubNav;
