<template>
  <v-navigation-drawer permanent app>
    <v-list dense nav>
      <v-list-item
        v-for="item in items"
        :key="item.title"
        link
        exact
        :to="{ name: item.pathName }"
      >
        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "NavigationDrawer",
  data: () => ({
    items: [
      {
        title: "Home",
        pathName: "home",
      },
      {
        title: "AppBar",
        pathName: "appBar",
      },
      {
        title: "AppHeader",
        pathName: "appHeader",
      },
    ],
  }),
  watch: {},
  methods: {},
});
</script>

<style lang="scss" scoped></style>
