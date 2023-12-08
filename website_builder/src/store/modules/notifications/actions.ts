import { ActionTree } from "vuex";
import { NotificationState, Notification } from "./types";
import { RootState } from "../../types";

export const actions: ActionTree<NotificationState, RootState> = {
  add({ commit }, payload: Notification) {
    commit("ADD_NOTIFICATION", payload);
  },
  remove({ commit }) {
    commit("REMOVE_NOTIFICATION");
  },
};
