<template>
  <v-switch v-model="$vuetify.theme.dark" hide-details />
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "DarkModeSwitch",
  data: () => ({}),
  watch: {},
  methods: {},
});
</script>

<style lang="scss" scoped></style>
