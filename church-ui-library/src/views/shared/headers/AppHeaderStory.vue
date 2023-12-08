<template>
  <v-sheet
    height="100%"
    width="100%"
    class="mx-auto"
    style="position: relative"
  >
    <CCHeader color="primary">
      <template>
        <CCMessages />
        <CCNotifications />
        <v-btn icon @click="showDrawer = true">
          <v-icon>mdi-church-outline</v-icon>
        </v-btn>
        <CCDarkModeSwitch />
      </template>
    </CCHeader>
    <CCChurchDrawer v-model="showDrawer" />
  </v-sheet>
</template>

<script lang="ts">
import Vue from "vue";
import CCHeader from "@/components/shared/headers/CCHeader.vue";
import CCNotifications from "@/components/shared/components/CCNotifications.vue";
import CCMessages from "@/components/shared/components/CCMessages.vue";
import CCDarkModeSwitch from "@/components/shared/components/CCDarkModeSwitch.vue";
import CCChurchDrawer from "@/components/shared/drawers/CCChurchDrawer.vue";

export default Vue.extend({
  name: "AppHeaderStory",
  components: {
    CCHeader,
    CCNotifications,
    CCMessages,
    CCChurchDrawer,
    CCDarkModeSwitch,
  },
  data: () => ({
    showDrawer: false,
  }),
  watch: {},
  methods: {},
});
</script>

<style lang="scss" scoped></style>
