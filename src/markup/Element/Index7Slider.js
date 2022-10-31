import Slider from "react-slick";
import Slider4 from "./../../images/cover-youtube.png";

const Index7Slider = ({ lang }) => {
  let settings = {
    arrows: true,
    dots: false,
    slidesToShow: 1,
    infinite: true,
    autoplay: true,
    nextArrow: null,
    prevArrow: null,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <Slider className="owl-slider owl-carousel owl-theme" {...settings}>
      <div className="item slide-item">
        <div className="slide-item-img">
          <img src={Slider4} className="w-100" alt="" />
        </div>
        <div className="slide-content">
          <div className="slide-content-box container">
            <div className="text-white justify-content-center">
              {/* <h2
                className="dz-title"
                style={{ background: "#000", opacity: 0.1 }}
              >
                {lang.aboutus.diamondgroup}
                <br />
              </h2> */}
            </div>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default Index7Slider;
