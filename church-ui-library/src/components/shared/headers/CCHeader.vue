<template>
  <v-app-bar v-bind="$attrs" v-on="$listeners" dark flat clipped-left clipped>
    <div class="d-flex align-center">
      <v-app-bar-nav-icon @click="$emit('open')"></v-app-bar-nav-icon>
      <div class="ml-5" v-if="$vuetify.breakpoint.mdAndUp">
        <span class="title">{{ title }}</span>
      </div>
    </div>

    <v-spacer></v-spacer>
    <slot />
    <template v-if="$vuetify.breakpoint.smAndDown" v-slot:extension>
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

export default Vue.extend({
  name: "AppHeader",
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  data: () => ({}),
  methods: {},
});
</script>
