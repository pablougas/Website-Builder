<template>
  <v-navigation-drawer clipped app floating v-model="drawer" width="325">
    <v-row class="fill-height" no-gutters>
      <app-bar v-if="drawer" />

      <v-list class="grow text-capitalize" rounded>
        <div v-for="(item, index) in items" :key="index">
          <v-list-item exact link v-if="!item.children" :to="item.path">
            <v-list-item-avatar>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-group :prepend-icon="item.icon" v-else no-action>
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item
              v-for="child in item.children"
              :key="child.title"
              link
              exact
              :to="child.path"
            >
              <v-list-item-content>
                <v-list-item-title>{{ child.title }}</v-list-item-title>
              </v-list-item-content>
              <v-list-item-avatar>
                <v-icon>{{ child.icon }}</v-icon>
              </v-list-item-avatar>
            </v-list-item>
          </v-list-group>
        </div>
      </v-list>
    </v-row>
  </v-navigation-drawer>
</template>

<script lang="ts">
import Vue from "vue";
import AppBar from "./AppBar.vue";

export interface NavLink {
  title: string;
  icon: string;
  path: { name: string; params: Record<string, unknown> };
  children?: NavLink[];
}

export default Vue.extend({
  props: {
    value: {
      type: Boolean,
    },
  },
  components: { AppBar },
  data() {
    return {
      drawer: this.$vuetify.breakpoint.mdAndUp ? true : false,
      items: [
        { title: "Home", icon: "mdi-home-analytics", path: { name: "Home" } },
        {
          icon: "mdi-church",
          title: "Organizations",
          children: [
            {
              icon: "mdi-domain",
              title: "View All",
              path: { name: "Organizations" },
            },
            {
              icon: "mdi-office-building-plus",
              title: "new",
              path: { name: "OrganizationNew" },
            },
          ],
        },
        {
          icon: "mdi-account-group",
          title: "Users",
          children: [
            {
              icon: "mdi-account-group",
              title: "View All",
              path: { name: "Users" },
            },
            {
              icon: "mdi-account-plus",
              title: "new",
              path: { name: "UsersNew" },
            },
          ],
        },
      ] as NavLink[],
    };
  },
  watch: {
    value() {
      this.drawer = !this.drawer;
    },
  },
  methods: {},
});
</script>

<style lang="scss" scoped></style>
