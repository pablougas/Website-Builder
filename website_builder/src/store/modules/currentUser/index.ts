import { Module } from "vuex";
import { getters } from "./getters";
import { actions } from "./actions";
import { mutations } from "./mutations";
import { UserState } from "./types";
import { RootState } from "../../types";

export const state: UserState = {
  currentUser: undefined,
  error: false,
};

const namespaced = true;

export const currentUser: Module<UserState, RootState> = {
  namespaced,
  state,
  getters,
  actions,
  mutations,
};
