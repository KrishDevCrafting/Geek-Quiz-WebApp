import React from "react";
import "./Cards.css";
import "../../components/style.css";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
const Cards = () => {
  AOS.init();
  return (
    <>
      <section className="grand-parent">
        <div className="align-text lg:text-white">
          <h1 id="text">Random-QUIZ</h1>
        </div>

        <div className="main-box sm:flex-col md:flex-row-reverse lg:flex-row">
          {/* box-1 */}
          <div
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="5000"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="true"
            data-aos-anchor-placement="top-center">
            <div class="card card-1 ">
              <div class="border"></div>
              <div class="content">
                <div class="logo">
                  <div class="logo">
                    <div className="logo2">
                      <h1>InterStellar</h1>
                    </div>
                  </div>
                  <span class="trail"></span>
                </div>
                <span class="logo-bottom-text">Krish.io</span>
              </div>
              <span class="bottom-text">Space.io</span>
            </div>
            {/* box-1-end */}
          </div>
          {/* box-2-st */}
          <div
            data-aos="fade-down"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="true"
            data-aos-anchor-placement="top-center">
            <div class="card card-2">
              <div class="border"></div>
              <div class="content content-2">
                <div class="logo logo-2">
                  <div class="logo1">
                    <div className="logo2">
                      <h1>Anime</h1>
                    </div>
                  </div>
                  <span class="trail"></span>
                </div>
                <span class="logo-bottom-text">Krish.io</span>
              </div>
              <span class="bottom-text">Space.io</span>
            </div>
          </div>
          {/* box-2-end */}
          {/* box-3-st */}
          <div
            data-aos="fade-up"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="true"
            data-aos-anchor-placement="top-center">
            <div class="card card-3">
              <div class="border"></div>
              <div class="content content-3">
                <div class="logo logo-3">
                  <div class="logo1">
                    <div className="logo2">
                      <h1>Computer Science</h1>
                    </div>
                  </div>
                  <span class="trail"></span>
                </div>
                <span class="logo-bottom-text">Krish.io</span>
              </div>
              <span class="bottom-text">Space.io</span>
            </div>

            {/* box-3-end */}
          </div>
        </div>
      </section>
      {/* 
Different line */}
    </>
  );
};

export default Cards;
