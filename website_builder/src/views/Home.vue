<template>
  <div>
    <WebBuilder />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import WebBuilder from "@/components/webBuilder/WebBuilder.vue";

export default Vue.extend({
  name: "Home",
  components: { WebBuilder },
});
</script>
