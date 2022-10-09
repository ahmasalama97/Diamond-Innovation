import { useContext, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Header from "../Layout/header";
import Footer from "../Layout/Footer";
import Index7Slider from "../Element/Index7Slider";
import { LanguageConsumer, LanguageContext } from "../../LanguageContext";

import RadioOutlinedIcon from "@mui/icons-material/RadioOutlined";
import VideoLibraryOutlinedIcon from "@mui/icons-material/VideoLibraryOutlined";
import EventOutlinedIcon from "@mui/icons-material/EventOutlined";
import AppShortcutOutlinedIcon from "@mui/icons-material/AppShortcutOutlined";
import TvOutlinedIcon from "@mui/icons-material/TvOutlined";
import CodeOutlinedIcon from "@mui/icons-material/CodeOutlined";
import ManageSearchOutlinedIcon from "@mui/icons-material/ManageSearchOutlined";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import EqualizerOutlinedIcon from "@mui/icons-material/EqualizerOutlined";
import DiamondIcon from "@mui/icons-material/Diamond";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";

import bg23 from "./../../images/background/bg23.png";

import { Fade } from "react-reveal";

const Index = () => {
  const slider = useRef(null);
  const about = useRef(null);
  const services = useRef(null);
  const contact = useRef(null);

  const lang = useContext(LanguageContext);

  const wrpaerBlog = [
    {
      image: (
        <EqualizerOutlinedIcon style={{ fontSize: 50, color: "#0E4659" }} />
      ),
      title: lang.lang.services.marketing,
      desc: lang.lang.services.marketingService,
    },
    {
      image: <ShareOutlinedIcon style={{ fontSize: 50, color: "#0E4659" }} />,
      title: lang.lang.services.socialMedia,
      desc: lang.lang.services.socialMediaService,
    },
    {
      image: (
        <BusinessCenterOutlinedIcon
          style={{ fontSize: 50, color: "#0E4659" }}
        />
      ),
      title: lang.lang.services.identities,
      desc: lang.lang.services.identitiesService,
    },
    {
      image: (
        <ManageSearchOutlinedIcon style={{ fontSize: 50, color: "#0E4659" }} />
      ),
      title: lang.lang.services.search,
      desc: lang.lang.services.searchService,
    },
    {
      image: <CodeOutlinedIcon style={{ fontSize: 50, color: "#0E4659" }} />,
      title: lang.lang.services.development,
      desc: lang.lang.services.developmentService,
    },
    {
      image: <SubscriptionsIcon style={{ fontSize: 50, color: "#0E4659" }} />,
      title: lang.lang.services.media,
      desc: lang.lang.services.mediaService,
    },
    {
      image: <MusicNoteIcon style={{ fontSize: 50, color: "#0E4659" }} />,
      title: lang.lang.services.audio,
      desc: lang.lang.services.audioService,
    },
    {
      image: <TvOutlinedIcon style={{ fontSize: 50, color: "#0E4659" }} />,
      title: lang.lang.services.ads,
      desc: lang.lang.services.adsService,
    },
    {
      image: (
        <AppShortcutOutlinedIcon style={{ fontSize: 50, color: "#0E4659" }} />
      ),
      title: lang.lang.services.apps,
      desc: lang.lang.services.appsService,
    },
    {
      image: <EventOutlinedIcon style={{ fontSize: 50, color: "#0E4659" }} />,
      title: lang.lang.services.events,
      desc: lang.lang.services.eventsService,
    },
    {
      image: (
        <VideoLibraryOutlinedIcon style={{ fontSize: 50, color: "#0E4659" }} />
      ),
      title: lang.lang.services.video,
      desc: lang.lang.services.videoService,
    },
    {
      image: <RadioOutlinedIcon style={{ fontSize: 50, color: "#0E4659" }} />,
      title: lang.lang.services.radio,
      desc: lang.lang.services.radioService,
    },
  ];

  useEffect(() => {
    var i = 0;

    // Placeholder Animation Start
    var inputSelector = document.querySelectorAll("input, textarea");

    for (i = 0; i < inputSelector.length; i++) {
      inputSelector[i].addEventListener("focus", function (event) {
        return this.parentElement.parentElement.classList.add("focused");
      });
    }

    for (i = 0; i < inputSelector.length; i++) {
      inputSelector[i].addEventListener("blur", function (event) {
        var inputValue = this.value;
        if (inputValue === "") {
          this.parentElement.parentElement.classList.remove("filled");
          this.parentElement.parentElement.classList.remove("focused");
        } else {
          this.parentElement.parentElement.classList.add("filled");
        }
      });
    }
  }, []);

  return (
    <LanguageConsumer>
      {({ lang, language, changeLanguage }) => (
        <>
          <Header
            slider={slider}
            about={about}
            services={services}
            contact={contact}
            lang={lang}
            language={language}
            changeLanguage={changeLanguage}
          />

          <div ref={slider} className="page-content">
            <div className="owl-slider-banner main-slider dz-style-1">
              <Index7Slider lang={lang} language={language} />
            </div>

            {/* <!-- About Us --> */}
            <div ref={about}>
              <div className="section-full bg-white p-b30">
                <div className="container">
                  <div className="row about-1">
                    <div className="icon-bx-wraper col-md-4 bg-white col-lg-4 p-tb30 p-l30 p-r50">
                      <div className="icon-md m-b20">
                        <span className="icon-cell">
                          <img src="images/icon/icon3.png" alt="" />
                        </span>
                      </div>
                      <div className="icon-content">
                        <h3 className="dez-tilte">
                          <span className="font-weight-300">
                            {lang.aboutus.returnArt}{" "}
                          </span>{" "}
                          {lang.aboutus.leadRole}
                        </h3>
                      </div>
                    </div>
                    <div className="icon-bx-wraper bg-primary p-lr30 about-scale text-white col-md-4 col-lg-4 p-tb30">
                      <div className="icon-md m-b20">
                        <span className="icon-cell">
                          <img src="images/icon/icon1.png" alt="" />
                        </span>
                      </div>
                      <div className="icon-content">
                        <h3 className="dez-tilte">
                          <span className="font-weight-300">
                            {lang.aboutus.marketingSystem}
                          </span>
                          {lang.aboutus.arabWorld}
                        </h3>
                      </div>
                    </div>
                    <div className="icon-bx-wraper p-l50 p-r30 col-md-4 bg-white col-lg-4 p-tb30">
                      <div className="icon-md m-b20">
                        <span className="icon-cell">
                          <img src="images/icon/icon2.png" alt="" />
                        </span>
                      </div>
                      <div className="icon-content">
                        <h3 className="dez-tilte">
                          <span className="font-weight-300">
                            {lang.aboutus.bestStudios}
                          </span>
                          {lang.aboutus.experience}
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Fade bottom>
                <div className="container m-t30">
                  <div className="row">
                    <div className="col-lg-12 section-head text-center">
                      <h5 className="title-small">{lang.aboutus.aboutUs}</h5>
                      <h2 className="title-head m-b0 text-secondry">
                        {lang.aboutus.ourCompany}
                      </h2>
                      <DiamondIcon style={{ color: "#00ffff" }} />
                      <DiamondIcon style={{ color: "#00ffff" }} />
                      <DiamondIcon style={{ color: "#00ffff" }} />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 m-b30">
                      <div className="icon-bx-wraper our-service center">
                        <div>
                          <h4 style={{ color: "#A9A9A9" }}>
                            {lang.aboutus.aboutCompany}
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12 section-head text-center">
                      <h2 className="title-head m-b0 text-secondry">
                        {lang.aboutus.ourVision}
                      </h2>
                      <DiamondIcon style={{ color: "#00ffff" }} />
                      <DiamondIcon style={{ color: "#00ffff" }} />
                      <DiamondIcon style={{ color: "#00ffff" }} />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 m-b30">
                      <div className="icon-bx-wraper our-service center">
                        <div>
                          <h4 style={{ color: "#A9A9A9" }}>
                            {lang.aboutus.companyVision}
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12 section-head text-center">
                      <h2 className="title-head m-b0 text-secondry">
                        {lang.aboutus.ourGoal}
                      </h2>
                      <DiamondIcon style={{ color: "#00ffff" }} />
                      <DiamondIcon style={{ color: "#00ffff" }} />
                      <DiamondIcon style={{ color: "#00ffff" }} />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 m-b30">
                      <div className="icon-bx-wraper our-service center">
                        <h4 style={{ color: "#A9A9A9" }}>
                          {lang.aboutus.companyFirstGoal}
                        </h4>
                      </div>
                    </div>
                    <div className="col-lg-12 col-md-12 col-sm-12 m-b30">
                      <div className="icon-bx-wraper our-service center">
                        <h4 style={{ color: "#A9A9A9" }}>
                          {lang.aboutus.companySecondGoal}
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </Fade>
            </div>
            {/* <!-- About Us END --> */}
            {/* <!-- Our Services --> */}
            <div
              ref={services}
              className="section-full content-inner-2 bg-white"
            >
              <div className="container">
                <div className="row">
                  <div className="col-lg-12 section-head text-center">
                    <h5 className="title-small">{lang.services.services}</h5>
                    <h2 className="title-head m-b0">{lang.nav.ourservices}</h2>
                  </div>
                </div>
                <div className="row">
                  {wrpaerBlog.map((data, index) => (
                    <Fade bottom>
                      <div
                        className="col-lg-4 col-md-4 col-sm-6 m-b30"
                        key={index}
                      >
                        <div className="icon-bx-wraper our-service center">
                          <div className="icon-lg text-secondary m-b20">
                            <Link to={"#"} className="icon-cell">
                              {data.image}
                            </Link>
                          </div>
                          <div className="icon-content p-lr50">
                            <h5 className="text-uppercase">{data.title}</h5>
                            <p>{data.desc}</p>
                          </div>
                        </div>
                      </div>
                    </Fade>
                  ))}
                </div>
              </div>
            </div>
            {/* <!-- Our Services END --> */}

            {/* <!-- Experts END -->	 */}

            {/* <!-- Contact Form --> */}
            <div
              ref={contact}
              className="section-full content-inner bg-primary contact-2"
              style={{ backgroundImage: "url(" + bg23 + ")" }}
            >
              <Fade bottom>
                <div className="container">
                  <div className="row d-flex align-items-center">
                    <div className="col-lg-7">
                      {/* <div className="">
                      <div className="support-form support-box-form bg-white">
                        <div className="support-title m-b30">
                          <h6 className="text-uppercase font-weight-500 m-b10">
                            Support
                          </h6>
                          <h2 className="font-40 font-weight-400 m-tb0">
                            Need Help?
                          </h2>
                        </div>
                        <div className="dezPlaceAni">
                          <div className="dzFormMsg"></div>
                          <form method="post" className="" action="">
                            <input
                              type="hidden"
                              value="Contact"
                              name="dzToDo"
                            />
                            <div className="row">
                              <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                <div className="form-group">
                                  <div className="input-group">
                                    <label>Your Name</label>
                                    <input
                                      name="dzName"
                                      type="text"
                                      required=""
                                      className="form-control"
                                      placeholder=""
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                <div className="form-group">
                                  <div className="input-group">
                                    <label>Phone</label>
                                    <input
                                      name="dzOther[Phone]"
                                      type="text"
                                      required=""
                                      className="form-control"
                                      placeholder=""
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                <div className="form-group">
                                  <div className="input-group">
                                    <label>Your Email Address</label>
                                    <input
                                      name="dzEmail"
                                      type="email"
                                      className="form-control"
                                      required=""
                                      placeholder=""
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                <div className="form-group">
                                  <div className="input-group">
                                    <label>Your Message...</label>
                                    <textarea
                                      name="dzMessage"
                                      rows="4"
                                      className="form-control"
                                      required=""
                                      placeholder=""
                                    ></textarea>
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-12 col-md-12 col-sm-12">
                                <button
                                  name="submit"
                                  type="submit"
                                  value="Submit"
                                  className="site-button radius-xl button-md m-t10"
                                >
                                  Submit Now
                                </button>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div> */}
                      <iframe
                        title="companyLocation"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3456.6205482759174!2d31.245006514955097!3d29.961591329437073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145847ee956b07bb%3A0xae59dd11485ca2bd!2sAlfa%20Market!5e0!3m2!1sen!2seg!4v1664981738198!5m2!1sen!2seg"
                        width="100%"
                        height="450"
                        frameBorder="0"
                        style={{ border: 20 }}
                        allowFullScreen=""
                        aria-hidden="false"
                        tabIndex="0"
                      />
                    </div>
                    <div className="col-lg-5">
                      <div className="contact-info-bx p-a30 text-white">
                        <div className="m-b50">
                          <h3>{lang.contactus.address}</h3>
                          <h4 style={{ color: "#ffd700" }}>
                            {lang.contactus.egypt}
                          </h4>
                          <h5>
                            {lang.contactus.egyptAddressFirstSection}
                            <br />
                            {lang.contactus.egyptAddressSecondSection}
                          </h5>
                          <hr />
                          <h4 style={{ color: "#ffd700" }}>
                            {lang.contactus.emirates}
                          </h4>
                          <h5>
                            {lang.contactus.emiratesAddressFirstSection}
                            <br />
                            {lang.contactus.emiratesAddressSecondSection}
                          </h5>
                          <hr />
                          <h4 style={{ color: "#ffd700" }}>
                            {lang.contactus.saudiArabia}
                          </h4>
                          <h5>
                            {lang.contactus.saudiArabiaAddressFirstSection}
                            <br />
                            {lang.contactus.saudiArabiaAddressSecondSection}
                          </h5>
                        </div>
                        <div className="m-b50">
                          <h4>{lang.contactus.email}</h4>
                          <h5>diamond@diamondinnovation.net</h5>
                        </div>
                        <div className="m-b10">
                          <h4>{lang.contactus.telephone}</h4>
                          <div style={{ direction: "ltr" }}>
                            <h5>{lang.numbers.num1}</h5>
                            <h5>{lang.numbers.num2}</h5>
                            <h5>{lang.numbers.num3}</h5>
                            <h5>{lang.numbers.num4}</h5>
                            <h5>{lang.numbers.num5}</h5>
                          </div>
                        </div>
                        <div className="m-b10">
                          <ul className="list-inline socail-icon m-t15 m-a0">
                            <li>
                              <Link to={"#"} className="site-button facebook">
                                <i className="fa fa-facebook"></i>
                              </Link>
                            </li>
                            <li>
                              <Link to={"#"} className="site-button instagram">
                                <i className="fa fa-instagram"></i>
                              </Link>
                            </li>
                            <li>
                              <Link to={"#"} className="site-button twitter">
                                <i className="fa fa-twitter"></i>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Fade>
            </div>
            {/* <!-- Our Services End --> */}
          </div>

          <Footer
            slider={slider}
            about={about}
            services={services}
            contact={contact}
            lang={lang}
            language={language}
          />
        </>
      )}
    </LanguageConsumer>
  );
};
export default Index;
