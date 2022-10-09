import React from "react";
import { Link } from "react-router-dom";

const Footer = ({ slider, about, services, contact, lang, language }) => {
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
  return (
    <>
      <footer className="site-footer text-uppercase">
        <div className="footer-top bg-primary">
          <div className="container">
            <div className="row">
              <div className="col-5 col-lg-6 col-md-6 col-sm-6 footer-col-4">
                <div className="widget widget_services border-0">
                  <h5 className="m-b30 text-white">
                    {lang.aboutus.ourCompany}
                  </h5>
                  <ul>
                    <li>
                      <Link to={"#"} onClick={handleScrollToSlider}>
                        {lang.nav.home}
                      </Link>
                    </li>
                    <li>
                      <Link to={"#"} onClick={handleScrollToAbout}>
                        {lang.nav.about}
                      </Link>
                    </li>
                    <li>
                      <Link to={"#"} onClick={handleScrollToServices}>
                        {lang.nav.ourservices}
                      </Link>
                    </li>
                    <li>
                      <Link to={"#"} onClick={handleScrollToContact}>
                        {lang.nav.contact}
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-6 col-md-6 col-sm-6 footer-col-4">
                <div className="widget widget_getintuch">
                  <h5 className="m-b30 text-white ">Contact us</h5>
                  <ul>
                    <li>
                      <i className="ti-location-pin"></i>
                      <strong>{lang.contactus.address}</strong>
                      {lang.contactus.egyptAddressFirstSection} -{" "}
                      {lang.contactus.egyptAddressSecondSection}
                    </li>
                    <li>
                      <i className="ti-mobile"></i>
                      <strong>{lang.contactus.telephone}</strong>(+02)0225259113
                      ({lang.contactus.support})
                    </li>
                    <li>
                      <i className="ti-email"></i>
                      <strong>{lang.contactus.email}</strong>
                      diamond@diamondinnovation.net
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom bg-primary">
          <div className="container">
            <div className="row">
              <div
                className="col-lg-6 col-md-6 col-sm-6 text-left "
                style={{ display: language === "english" ? "block" : "flex" }}
              >
                {" "}
                <span>
                  {lang.contactus.copyright} {lang.contactus.year}{" "}
                  {lang.contactus.companyName}
                </span>{" "}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
