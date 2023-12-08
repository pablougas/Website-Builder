import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#9E9D24",
        secondary: "#FAFAFA",
        accent: "#6c4dda",
        success: "#23d2c3",
        warning: "#ffa900",
        error: "#ff4141",
        anchor: "#8c9eff",
      },
      dark: {
        primary: "#C0CA33",
        secondary: "#212121",
        accent: "#522ed2",
        success: "#01bcad",
        warning: "#ffbf35",
        error: "#eb2323",
        anchor: "#8c9eff",
      },
    },
  },
});
