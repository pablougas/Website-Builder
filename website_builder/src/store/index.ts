import Vue from "vue";
import Vuex, { StoreOptions } from "vuex";
import { RootState } from "./types";
import { notifications } from "./modules/notifications/index";
import { currentUser } from "./modules/currentUser/index";
import { website } from "./modules/website/index";

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  state: {
    version: "1.0.0", // a simple property
  },
  modules: {
    currentUser,
    notifications,
    website,
  },
};

export default new Vuex.Store<RootState>(store);
