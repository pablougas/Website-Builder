import { GetterTree } from "vuex";
import { WebsiteState, Website } from "./types";
import { RootState } from "../../types";

export const getters: GetterTree<WebsiteState, RootState> = {
  get(state): Website | undefined {
    const { website } = state;
    return website;
  },
};
