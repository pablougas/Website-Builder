import { MutationTree } from "vuex";
import { Website, WebsiteState } from "./types";

export const mutations: MutationTree<WebsiteState> = {
  SET_WEBSITE(state, payload: Website) {
    state.website = payload;
  },
  WEBSITE_ERROR(state) {
    state.error = true;
    state.website = undefined;
  },
};
