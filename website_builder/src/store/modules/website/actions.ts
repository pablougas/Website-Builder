import { ActionTree } from "vuex";
import { WebsiteState, Website } from "./types";
import { RootState } from "../../types";
import website from "../../../../tests/grapesMockData/demo_church/website";

export const actions: ActionTree<WebsiteState, RootState> = {
  async get({ commit }): Promise<void> {
    const site = await website();
    console.log("WEBSITE: ", site);
    commit("SET_WEBSITE", site);
  },
};
