import React, { Component } from "react";
import Navbar from "../layout/Navbar";
import SubNavbar from "../layout/SubNavbar";
import CategoriesCards from "../layout/CategoriesCards";
import TopTrendSlider from "../layout/TopTrendSlider";
import SectionDevider from "../layout/SectionDevider";
import Computers from "../layout/Computers";
import Footer from "../layout/Footer";
import Mobiles from "../layout/Mobiles";
import { trackWindowScroll } from "react-lazy-load-image-component";
import $ from "jquery";
class Home extends Component {
  state = {};
  componentDidMount() {
    $(function() {
      /*favourite button color on click */
      $(".fav-button").on("click", function() {
        $(this)
          .find(".fa-star")
          .toggleClass("fav-selected");
      });

      /*scroll to top button click */
      $(".scrollToTop").click(function() {
        $("html , body").animate({ scrollTop: 0 });
      });

      /**fixed subNavbar */
      $(window).scroll(function() {
        $(this).scrollTop() > $("nav").height()
          ? $(".subnav").addClass("subnav--shadow-bottm")
          : $(".subnav").removeClass("subnav--shadow-bottm");
      });
    });
  }
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <SubNavbar />
        <div className="container">
          <CategoriesCards />
          <TopTrendSlider />
          <SectionDevider title="Computers" />
          <Computers />
          <SectionDevider title="Mobiles" />
          <Mobiles />
        </div>
        <Footer />
      </React.Fragment>
    );
  }
}

export default trackWindowScroll(Home);
