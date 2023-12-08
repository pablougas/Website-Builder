import { Module } from "vuex";
import { getters } from "./getters";
import { actions } from "./actions";
import { mutations } from "./mutations";
import { WebsiteState } from "./types";
import { RootState } from "../../types";

export const state: WebsiteState = {
  website: undefined,
  error: false,
};

const namespaced = true;

export const website: Module<WebsiteState, RootState> = {
  namespaced,
  state,
  getters,
  actions,
  mutations,
};
