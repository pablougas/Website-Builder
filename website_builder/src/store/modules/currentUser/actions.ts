import { ActionTree } from "vuex";
import { UserState, User } from "./types";
import { RootState } from "../../types";
import { baseAPI } from "@/plugins/baseAPI";

export const actions: ActionTree<UserState, RootState> = {
  async get({ commit, dispatch }) {
    try {
      const user = await baseAPI.get("users/me");
      if (typeof user == "string") {
        throw new Error(user);
      }
      commit("SET_CURRENTUSER", user);
    } catch (e) {
      console.error(e);
      dispatch(
        "notifications/add",
        {
          type: "error",
          message: e,
        },
        { root: true }
      );
    }
  },
  async create({ commit, dispatch }, payload: User): Promise<User | Error> {
    try {
      const user = (await baseAPI.post("users", payload)) as User;
      commit("SET_CURRENTUSER", user);
      return user;
    } catch (e) {
      dispatch(
        "notifications/add",
        {
          type: "error",
          message: e,
        },
        { root: true }
      );
      return Error((e as string).toString());
    }
  },
  async update({ commit, dispatch }, payload: User): Promise<User | Error> {
    try {
      const user = (await baseAPI.put("users", payload)) as User;
      commit("SET_CURRENTUSER", user);
      return user;
    } catch (e) {
      dispatch(
        "notifications/add",
        {
          type: "error",
          message: e,
        },
        { root: true }
      );
      return Error((e as string).toString());
    }
  },
};
