import { GetterTree } from "vuex";
import { NotificationState, Notification } from "./types";
import { RootState } from "../../types";

export const getters: GetterTree<NotificationState, RootState> = {
  get(state): Notification[] {
    const { notificationQue } = state;
    return notificationQue;
  },
};
