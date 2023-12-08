import component from "./page1.html";
import churchCSS from "../css/church";
import bootstrap from "../css/bootstrap";
import fancybox from "../css/fancybox";
import flexslider from "../css/flexslider";

export default {
  id: "123-456",
  name: "Home",
  styles: bootstrap + churchCSS + fancybox + flexslider,
  component,
};
