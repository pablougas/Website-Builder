<template>
  <v-app>
    <v-container fluid fill-height class="pa-0">
      <v-row class="fill-height">
        <v-col
          cols="12"
          md="6"
          class="d-flex justify-center align-center relative"
          order-md="2"
        >
          <div
            :class="{
              'arrow-left': $vuetify.breakpoint.mdAndUp,
              'arrow-down': $vuetify.breakpoint.smAndDown,
            }"
          />
          <div :class="{ 'my-15': $vuetify.breakpoint.smAndDown }">
            <v-row justify="center" class="mb-15">
              <p class="display-1 font-weight-black text-center">
                All-in-one<br />Church platform<br />to connect your church<br />
                with your people
              </p>
            </v-row>
            <v-row class="px-15">
              <v-col
                cols="4"
                sm="3"
                class="d-flex flex-column mb-10 px-4"
                v-for="(feature, i) in features"
                :key="i"
              >
                <v-icon v-text="feature.icon" color="info" x-large></v-icon>
                <span
                  class="text-capitalize caption text-center mt-3"
                  v-html="feature.text"
                ></span>
              </v-col>
            </v-row>
          </div>
        </v-col>
        <v-col
          cols="12"
          md="6"
          class="info d-flex justify-center align-center"
          order-md="1"
        >
          <UserForm />
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import UserForm from "./components/UserForm.vue";

export default Vue.extend({
  name: "App",
  components: { UserForm },
  data: () => ({
    features: [
      {
        icon: "mdi-email-outline",
        text: "unlimited emails",
      },
      {
        icon: "mdi-web",
        text: "code free website builder",
      },
      {
        icon: "mdi-list-box-outline",
        text: "simple task mamangement",
      },
      {
        icon: "mdi-bullhorn-variant-outline",
        text: "easily communicate with your congregation",
      },
      {
        icon: "mdi-bullhorn-variant-outline",
        text: "easily communicate with your congregation",
      },
      {
        icon: "mdi-web",
        text: "code free website builder",
      },
      {
        icon: "mdi-email-outline",
        text: "unlimited emails",
      },
      {
        icon: "mdi-list-box-outline",
        text: "simple task mamangement",
      },
    ],
  }),
});
</script>

<style lang="scss">
.block {
  display: block;
}
.relative {
  position: relative;
}
.card {
  background-color: transparent !important;
  border: thin solid white;
}
.arrow-left {
  position: absolute;
  left: -50px;
  width: 0;
  height: 0;
  border-top: 70px solid transparent;
  border-bottom: 70px solid transparent;
  border-right: 70px solid white;
}
.arrow-down {
  position: absolute;
  bottom: -30px;
  width: 0;
  height: 0;
  border-top: 70px solid white;
  border-left: 70px solid transparent;
  border-right: 70px solid transparent;
}
</style>
