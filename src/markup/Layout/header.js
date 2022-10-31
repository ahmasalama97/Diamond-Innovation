import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "./../../images/DIAsset.png";
import HeaderMenu from "./HeaderMenu";

const Header2 = ({
  slider,
  about,
  services,
  contact,
  language,
  lang,
  changeLanguage,
}) => {
  const [isMobile, setIsMobile] = useState(false);

  const [windowSize, setWindowSize] = useState(window.innerWidth);

  const handleWindowResize = useCallback((event) => {
    setWindowSize(window.innerWidth);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [handleWindowResize]);

  useEffect(() => {
    if (windowSize < 720) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [windowSize, setIsMobile, isMobile]);

  const handleScrollToSlider = () => {
    slider.current?.scrollIntoView({ behavior: "smooth" });
  };
  const handleScrollToAbout = () => {
    about.current?.scrollIntoView({ behavior: "smooth" });
  };
  const handleScrollToServices = () => {
    services.current?.scrollIntoView({ behavior: "smooth" });
  };
  const handleScrollToContact = () => {
    contact.current?.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    let Navicon = document.querySelector(".navicon");
    let sidebarmenu = document.querySelector(".myNavbar ");

    const toggleFunc = () => {
      sidebarmenu.classList.toggle("show");
      Navicon.classList.toggle("open");
    };

    Navicon.addEventListener("click", toggleFunc);

    let navUl = [].slice.call(
      document.querySelectorAll(".navbar-nav > li > a, .sub-menu > li > a")
    );
    for (let y = 0; y < navUl.length; y++) {
      navUl[y].addEventListener("click", function () {
        checkLi(this);
      });
    }

    const checkLi = (current) => {
      current.parentElement.parentElement
        .querySelectorAll("li")
        .forEach((el) =>
          current.parentElement !== el ? el.classList.remove("open") : ""
        );

      setTimeout(() => {
        current.parentElement.classList.toggle("open");
      }, 100);
    };
  }, []);

  return (
    <>
      <header
        className="site-header header mo-left header-style-1 header-transparent"
        id="fix-header"
      >
        <div className="sticky-header main-bar-wraper navbar-expand-lg">
          <div className="main-bar clearfix">
            <div
              className="container clearfix"
              style={{ display: isMobile ? "block" : "flex" }}
            >
              <div className="logo-header mostion">
                <Link to={"./"} className="dez-page">
                  <img src={logo} alt="" />
                </Link>
              </div>

              <button
                className="navbar-toggler collapsed navicon justify-content-end"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span></span>
                <span></span>
                <span></span>
              </button>

              <div
                className="header-nav navbar-collapse collapse myNavbar justify-content-end"
                id="navbarNavDropdown"
              >
                <div className="logo-header mostion d-md-block d-lg-none">
                  <Link to={"./"} className="dez-page">
                    <img src={logo} alt="" />
                  </Link>
                </div>
                {/*  Header Menu Contents  */}
                <HeaderMenu
                  handleScrollToSlider={handleScrollToSlider}
                  handleScrollToAbout={handleScrollToAbout}
                  handleScrollToServices={handleScrollToServices}
                  handleScrollToContact={handleScrollToContact}
                  changeLanguage={changeLanguage}
                  lang={lang}
                  language={language}
                  isMobile={isMobile}
                />
                {/*  Header Menu Contents End */}
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
export default Header2;
