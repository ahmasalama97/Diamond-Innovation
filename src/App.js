import { useEffect, useState } from "react";
import Markup from "./markup/Markup";
import useScrollPosition from "use-scroll-position";
import "./css/plugins.css";
import "./css/style.css";
import "./css/templete.css";
import "./css/skin/skin-5.css";
import "./plugins/slick/slick.min.css";
import "./plugins/slick/slick-theme.min.css";
import "react-modal-video/css/modal-video.min.css";
import { LanguageConsumer, LanguageProvider } from "./LanguageContext";

function App() {
  const [header_, setHeader_] = useState();
  let scrollPosition = useScrollPosition();

  useEffect(() => {
    setHeader_(document.getElementsByClassName("main-bar-wraper"));
  }, []);

  var element = document.getElementById("fix-header");

  if (typeof element != "undefined" && element != null) {
    scrollPosition > 10
      ? header_ && header_[0].classList.add("is-fixed")
      : header_ && header_[0].classList.remove("is-fixed");
  }
  return (
    <LanguageProvider>
      <LanguageConsumer>
        {({ language }) => (
          <div
            className="App"
            style={{ direction: language === "english" ? "ltr" : "rtl" }}
          >
            <Markup />
          </div>
        )}
      </LanguageConsumer>
    </LanguageProvider>
  );
}

export default App;
