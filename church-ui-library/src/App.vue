<template>
  <v-app>
    <NavigationDrawer app />
    <v-main>
      <v-container fluid fill-height>
        <v-row class="fill-height">
          <v-col cols="12">
            <router-view />
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import NavigationDrawer from "./components/NavigationDrawer.vue";

export default Vue.extend({
  name: "App",
  components: { NavigationDrawer },
  data: () => ({
    drawer: false,
  }),
});
</script>

<style lang="scss">
.hidden {
  display: none !important;
}
</style>
