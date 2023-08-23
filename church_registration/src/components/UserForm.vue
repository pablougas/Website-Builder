<template>
  <v-card
    dark
    outlined
    rounded="xxl"
    max-width="65%"
    class="card px-6 py-5"
    :class="{
      'my-15': $vuetify.breakpoint.smAndDown,
      'py-12': $vuetify.breakpoint.lgAndUp,
    }"
  >
    <v-card-title class="block text-center mb-8">
      <v-icon class="mr-3" large>mdi-resistor-nodes</v-icon>
      CHURCH<span class="text--primary">CONNECTED</span>
    </v-card-title>
    <v-card-text>
      <h1 class="title text-center">
        Try it out today. No credit card required.
      </h1>
      <v-form
        ref="form"
        class="mt-10"
        v-model="valid"
        lazy-validation
        v-if="step == 1"
      >
        <v-text-field
          light
          solo
          label="Email"
          v-model="email"
          :rules="emailRules"
        />
        <v-text-field
          light
          solo
          label="Password"
          v-model="password"
          :rules="passwordRules"
          @click:append="show = !show"
          :type="show ? 'text' : 'password'"
          :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
        />
        <v-text-field
          light
          solo
          :rules="confirmRules"
          label="Confirm Password"
          v-model="passwordConfirm"
          @click:append="show1 = !show1"
          :type="show1 ? 'text' : 'password'"
          :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
        />
        <v-btn
          rounded
          block
          large
          color="warning"
          class="elevation-0"
          @click="handleStep"
        >
          Continue
        </v-btn>
      </v-form>
      <OrgForm v-model="organization" @onSubmit="submit" v-else />
    </v-card-text>
    <v-card-actions class="block">
      <p>Already a member? <v-btn text small>Sign in</v-btn></p>
    </v-card-actions>
    <p class="caption text-center">
      By selecting "Register", you agree to the privacy and the terms and
      conditions agreement.
    </p>
  </v-card>
</template>

<script lang="ts">
import Vue from "vue";
import OrgForm from "./OrgForm.vue";

export default Vue.extend({
  name: "UserForm",
  components: { OrgForm },
  data() {
    return {
      step: 1,
      valid: true,
      show: false,
      show1: false,
      email: "",
      emailRules: [
        (v: string) => !!v || "E-mail is required",
        (v: string) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
      password: "",
      passwordConfirm: "",
      passwordRules: [
        (v: string) => !!v || "Password is required",
        (v: string) =>
          (v && v.length >= 12) || "Password must be at least 12 characters",
        (v: string) =>
          /(?=.*[a-z])/.test(v) ||
          "Password must contain at least one lower case letter",
        (v: string) =>
          /(?=.*[A-Z])/.test(v) ||
          "Password must contain at least one upper case letter",
        (v: string) =>
          /(?=.*\d)/.test(v) || "Password must contain at least one number",
        (v: string) =>
          /(?=.*[-+_!@#$%^&*., ?])/.test(v) ||
          "Password must contain at least one special character",
      ],
      organization: null as null | Record<string, unknown>,
    };
  },
  computed: {
    confirmRules(): (
      | ((v: string) => true | "Password confirmation is required")
      | ((v: string) => true | "Password must match")
    )[] {
      return [
        (v: string) => !!v || "Password confirmation is required",
        (v: string) => v == this.password || "Password must match",
      ];
    },
  },
  methods: {
    handleStep() {
      if (this.validate()) {
        this.step = 2;
      }
    },
    submit() {
      alert("form submitted");
    },
    validate() {
      console.log();
      if (this.$refs.form) {
        console.log("form exists");
        (this.$refs.form as Vue & { validate: () => boolean }).validate();
      }
      return (this.$refs.form as Vue & { validate: () => boolean }).validate();
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
