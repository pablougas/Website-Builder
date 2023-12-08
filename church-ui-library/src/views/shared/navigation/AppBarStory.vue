<template>
  <v-card height="100%" max-height="100%" width="100%" class="mx-auto wrapper">
    <v-navigation-drawer permanent width="240">
      <v-row class="fill-height" no-gutters>
        <CCAppDrawer :user="user" @update="expanded = !$event" />
        <v-slide-x-reverse-transition leave-absolute hide-on-leave>
          <v-list class="grow" v-if="!expanded">
            <v-list-item link>Link #1</v-list-item>
            <v-list-item link>Link #2</v-list-item>
            <v-list-item link>Link #3</v-list-item>
            <v-list-item link>Link #4</v-list-item>
            <v-list-item link>Link #5</v-list-item>
            <v-list-item link>Link #6</v-list-item>
            <v-list-item link>Link #7</v-list-item>
          </v-list>
        </v-slide-x-reverse-transition>
      </v-row>
    </v-navigation-drawer>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";
import CCAppDrawer from "@/components/shared/drawers/CCAppDrawer.vue";

export default Vue.extend({
  name: "AppBarSample",
  components: { CCAppDrawer },
  data: () => ({
    expanded: false,
    user: {
      nickname: "Soochi",
    },
  }),
});
</script>

<style lang="scss" scoped>
.wrapper {
  overflow-x: hidden;
  .shrink {
    flex-shrink: 2;
  }
}
</style>
