<template>
  <v-navigation-drawer
    dark
    :mini-variant="mini"
    mini-variant-width="56"
    width="200px"
    permanent
    expand-on-hover
    @update:mini-variant="mini = !mini"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <v-list-item class="px-2">
      <v-list-item-avatar>
        <v-img src="https://randomuser.me/api/portraits/women/75.jpg"></v-img>
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title class="text-capitalize">{{
          user.nickname
        }}</v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>

    <v-list dense nav>
      <v-list-item
        link
        v-for="item in items"
        :key="item.title"
        @click="handleRoute(item.path)"
      >
        <v-list-item-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-action>

        <v-list-item-content>
          <v-list-item-title class="text-capitalize">{{
            item.title
          }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <v-list dense nav class="logout">
      <v-list-item link @click="handleRoute(profileUrl)">
        <v-list-item-action>
          <v-icon>mdi-account</v-icon>
        </v-list-item-action>

        <v-list-item-content>
          <v-list-item-title class="text-capitalize">profile</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-item link @click="logout">
        <v-list-item-action>
          <v-icon>mdi-logout</v-icon>
        </v-list-item-action>

        <v-list-item-content>
          <v-list-item-title class="text-capitalize">log out</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "AppBar",
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  data: () => ({
    mini: true,
    items: [
      {
        icon: "mdi-monitor-dashboard",
        title: "dashboard",
        path: process.env.VUE_APP_DASHBOARD_URL,
      },
      {
        icon: "mdi-account-multiple",
        title: "people",
        path: process.env.VUE_APP_MEMBERS_URL,
      },
      {
        icon: "mdi-calendar-star-four-points",
        title: "events",
        path: process.env.VUE_APP_EVENTS_URL,
      },
      {
        icon: "mdi-account-group",
        title: "groups",
        path: process.env.VUE_APP_GROUPS_URL,
      },
      {
        icon: "mdi-music",
        title: "music",
        path: process.env.VUE_APP_CHURCH_ADMIN_URL,
      },
      {
        icon: "mdi-forum-outline",
        title: "messages",
        path: process.env.VUE_APP_CHURCH_ADMIN_URL,
      },
      {
        icon: "mdi-cog",
        title: "admin",
        path: process.env.VUE_APP_CHURCH_ADMIN_URL,
      },
      {
        icon: "mdi-hand-coin",
        title: "donations",
        path: process.env.VUE_APP_CHURCH_ADMIN_URL,
      },
      {
        icon: "mdi-remote-desktop",
        title: "website",
        path: process.env.VUE_APP_CHURCH_ADMIN_URL,
      },
      {
        icon: "mdi-shield-crown",
        title: "CC admin",
        path: process.env.VUE_APP_ADMIN_URL,
      },
    ],
    profileUrl: `${process.env.VUE_APP_DASHBOARD_URL}/profile`,
  }),
  watch: {
    mini(val) {
      this.$emit("update", val);
    },
  },
  methods: {
    handleRoute(path: string) {
      window.location.replace(path);
    },
    logout() {
      this.$emit("logout");
    },
  },
});
</script>

<style lang="scss" scoped>
.logout {
  bottom: 0;
  left: 0;
  position: absolute;
  width: 100%;
}
</style>
