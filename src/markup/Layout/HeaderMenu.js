import React from "react";
import { Link } from "react-router-dom";

const HeaderMenu = ({
  handleScrollToSlider,
  handleScrollToAbout,
  handleScrollToServices,
  handleScrollToContact,
  changeLanguage,
  lang,
  language,
  isMobile,
}) => {
  return (
    <>
      <ul className="nav navbar-nav">
        <li className={!isMobile && "active"}>
          <Link to={"#"} onClick={handleScrollToSlider}>
            {lang.nav.home}
          </Link>
        </li>
        <li className={!isMobile && "active"}>
          <Link to={"#"} onClick={handleScrollToAbout}>
            {lang.nav.about}
          </Link>
        </li>
        <li className={!isMobile && "active"}>
          <Link to={"#"} onClick={handleScrollToServices}>
            {lang.nav.ourservices}
          </Link>
        </li>
        <li className={!isMobile && "active"}>
          <Link to={"#"} onClick={handleScrollToContact}>
            {lang.nav.contact}
          </Link>
        </li>
        <li className={!isMobile && "active"}>
          <Link to={"#"}>
            {lang.nav.language} <i className="fa fa-chevron-down"></i>{" "}
          </Link>
          <ul className="sub-menu left">
            <li className={!isMobile && "active"}>
              <Link
                to={"#"}
                className="dez-page"
                onClick={() => changeLanguage("english")}
              >
                {language === "english" ? "العربية" : "English"}
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </>
  );
};

export default HeaderMenu;
