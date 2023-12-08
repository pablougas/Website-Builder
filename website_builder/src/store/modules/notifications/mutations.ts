import { MutationTree } from "vuex";
import { Notification, NotificationState } from "./types";

export const mutations: MutationTree<NotificationState> = {
  ADD_NOTIFICATION(state, payload: Notification) {
    state.notificationQue.push(payload);
  },
  REMOVE_NOTIFICATION(state) {
    state.notificationQue.splice(0, 1);
  },
};
