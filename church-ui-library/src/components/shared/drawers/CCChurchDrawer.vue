<template>
  <v-navigation-drawer
    absolute
    right
    temporary
    v-on="$listeners"
    v-bind="$attrs"
  >
    <v-row>
      <v-col cols="12">
        <p class="title text-center mt-4">Connected Churches</p>
      </v-col>
    </v-row>
    <v-divider></v-divider>
    <v-row>
      <v-col cols="12">
        <v-list class="grow">
          <v-list-item
            link
            two-line
            v-for="(church, idx) in churches"
            :key="church.name + idx"
          >
            <v-list-item-content>
              <v-list-item-title class="text-capitalize">
                {{ church.name }}
              </v-list-item-title>
              <v-list-item-subtitle class="text-capitalize">
                {{ `${church.location.street1}, ${church.location.city}` }}
              </v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-action>
              <v-icon>mdi-logout</v-icon>
            </v-list-item-action>
          </v-list-item>
        </v-list>
      </v-col>
    </v-row>
  </v-navigation-drawer>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "ChurchDrawer",
  data: () => ({
    churches: [
      {
        name: "church of christ",
        location: {
          street1: "1212 4th St",
          street2: "",
          city: "Coeur D'Alene",
          state: "ID",
          zip: "83814",
        },
      },
      {
        name: "church of christ",
        location: {
          street1: "1212 4th St",
          street2: "",
          city: "Kirkland",
          state: "WA",
          zip: "98345",
        },
      },
    ],
  }),
  watch: {},
  methods: {},
});
</script>

<style lang="scss" scoped></style>
