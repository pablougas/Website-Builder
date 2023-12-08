import { MutationTree } from "vuex";
import { User, UserState } from "./types";

export const mutations: MutationTree<UserState> = {
  SET_CURRENTUSER(state, payload: User) {
    state.currentUser = payload;
  },
  CURRENTUSER_ERROR(state) {
    state.error = true;
    state.currentUser = undefined;
  },
};
