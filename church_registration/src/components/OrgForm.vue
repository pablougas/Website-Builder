<template>
  <v-form class="mt-10" v-model="valid" lazy-validation>
    <v-row>
      <v-text-field
        light
        solo
        label="Church Legal name"
        :rules="nameRules"
        v-model="legal_name"
      />
      <v-text-field light solo label="Main Phone" v-model="phone" />
      <v-text-field
        light
        solo
        label="Street"
        name="street"
        :rules="streetRules"
        v-model="street1"
      />
      <v-text-field light solo label="Street" v-model="street2" />
      <v-row>
        <v-col cols="8" class="pb-0">
          <v-text-field light solo name="city" label="City" v-model="city" />
        </v-col>
        <v-col cols="4" class="pb-0">
          <v-select
            light
            solo
            name="state"
            label="State"
            :items="states"
            item-value="value"
            item-text="select"
            v-model="state"
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="4" class="pt-0">
          <v-text-field light solo name="zip" label="Zip" v-model="zip" />
        </v-col>
      </v-row>
    </v-row>
    <v-btn
      rounded
      block
      large
      color="warning"
      class="elevation-0 mt-4"
      @click="validate"
    >
      Register
    </v-btn>
  </v-form>
</template>

<script lang="ts">
import Vue from "vue";
import states from "@/states.json";

export default Vue.extend({
  name: "OrgForm",
  data() {
    return {
      states: states,
      valid: true,
      legal_name: "",
      phone: "",
      street1: "",
      street2: "",
      city: "",
      state: "",
      zip: "",
      nameRules: [(v: string) => !!v || "Church name is required"],
      streetRules: [(v: string) => !!v || "Street is required"],
      cityRules: [(v: string) => !!v || "City is required"],
      stateRules: [(v: string) => !!v || "State is required"],
      zipRules: [(v: string) => !!v || "Zip is required"],
    };
  },
  methods: {
    validate() {
      if (this.$refs.form) {
        (this.$refs.form as Vue & { validate: () => boolean }).validate();
      }
    },
    reset() {
      if (this.$refs.form) {
        (this.$refs.form as Vue & { reset: () => boolean }).reset();
      }
    },
    resetValidation() {
      if (this.$refs.form) {
        (
          this.$refs.form as Vue & { resetValidation: () => boolean }
        ).resetValidation();
      }
    },
  },
});
</script>

<style lang="scss" scoped></style>
