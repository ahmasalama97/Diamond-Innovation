import DiamondIcon from "@mui/icons-material/Diamond";
import Slider from "react-slick";

import Slider5 from "./../../images/main-slider/slide5.jpg";
import Slider4 from "./../../images/main-slider/slide4.jpg";

const SampleNextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="owl-nav">
      <div className="owl-next flaticon-right-arrow" onClick={onClick} />
    </div>
  );
};

const SamplePrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="owl-nav">
      <div
        className=" owl-prev flaticon-left-arrow"
        onClick={onClick}
        style={{ zIndex: 1 }}
      />
    </div>
  );
};

const Index7Slider = ({ lang, language }) => {
  let settings = {
    arrows: true,
    dots: false,
    slidesToShow: 1,
    infinite: true,
    autoplay: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
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
          <img src={Slider5} className="w-100" alt="" />
        </div>

        <div className="slide-content overlay-black-dark">
          <div className="slide-content-box container">
            <div className="max-w600 text-white ">
              <h2 className="dz-title">
                {lang.aboutus.designCompany} <br />
              </h2>
              <h2 className="dz-title">
                <DiamondIcon style={{ color: "#00ffff" }} />
                <DiamondIcon style={{ color: "#00ffff" }} />
                <DiamondIcon style={{ color: "#00ffff" }} />
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="item slide-item">
        <div className="slide-item-img">
          <img src={Slider4} className="w-100" alt="" />
        </div>
        <div className="slide-content overlay-black-dark">
          <div className="slide-content-box container">
            <div className="max-w600 text-white justify-content-center">
              <h2 className="dz-title">
                {lang.aboutus.creativeStudio}
                <br />
              </h2>
              <h2 className="dz-title">
                <DiamondIcon style={{ color: "#00ffff" }} />
                <DiamondIcon style={{ color: "#00ffff" }} />
                <DiamondIcon style={{ color: "#00ffff" }} />
              </h2>
            </div>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default Index7Slider;
