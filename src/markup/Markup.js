import { BrowserRouter, Route, Switch } from "react-router-dom";
import Index from "./Pages/Index";
import Error404 from "./Pages/Error404";
import ScrollToTop from "./Element/ScrollToTop";

const Markup = () => {
  return (
    <BrowserRouter basename="/">
      <div className="page-wraper">
        <Switch>
          <Route path="/" exact component={Index} />
          <Route component={Error404} />
        </Switch>
      </div>
      <ScrollToTop />
    </BrowserRouter>
  );
};

export default Markup;
