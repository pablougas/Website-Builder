<template>
  <v-app-bar app flat clipped-left>
    <div class="d-flex align-center">
      <v-app-bar-nav-icon @click="$emit('open')"></v-app-bar-nav-icon>
      <div class="ml-5">
        <span class="title" v-if="$vuetify.breakpoint.smAndUp">{{
          title
        }}</span>
      </div>
    </div>

    <v-spacer></v-spacer>
    <messages />
    <notifications />
    <v-btn icon>
      <v-icon>mdi-church-outline</v-icon>
    </v-btn>
    <v-switch v-model="darkMode" hide-details />
    <template v-if="$vuetify.breakpoint.xsOnly" v-slot:extension>
      <v-row>
        <v-col cols="12">
          <p class="title text-center">{{ title }}</p>
        </v-col>
      </v-row>
    </template>
  </v-app-bar>
</template>

<script lang="ts">
import Vue from "vue";
import Notifications from "@/components/layout/modules/Notifications.vue";
import Messages from "@/components/layout/modules/Messages.vue";

export default Vue.extend({
  name: "AppHeader",
  components: { Notifications, Messages },
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  data: () => ({
    showDrawer: false,
    darkMode: null as null | boolean,
  }),
  watch: {
    darkMode(val) {
      this.$vuetify.theme.dark = val;
      window.localStorage.setItem("darkMode", val);
    },
  },
  methods: {
    // Log the user in
    login() {
      this.$auth.loginWithRedirect();
    },
  },
  mounted() {
    const darkMode = window.localStorage.getItem("darkMode");
    if (darkMode == undefined || darkMode == null) {
      this.darkMode = false;
    } else {
      this.darkMode = /true/i.test(darkMode);
    }
  },
});
</script>
