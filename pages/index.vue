<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="10" md="10">
      <div>
        <h2>Sign Up</h2>
        <p>Please fill the following form</p>
      </div>
      <v-form ref="form" lazy-validation>
        <v-text-field
          class="custom"
          outlined
          v-model="name"
          :counter="10"
          :rules="[v => !!v || 'Name is required']"
          placeholder="Name *"
          required
        ></v-text-field>

        <v-text-field
          class="custom"
          outlined
          v-model="email"
          :rules="[v => !!v || 'Email is required']"
          placeholder="E-mail"
          required
        ></v-text-field>

        <v-select
          class="custom"
          outlined
          v-model="gender"
          :items="options"
          :rules="[v => !!v || 'Item is required']"
          placeholder="Gender"
          required
        ></v-select>
        <em>* Required fields</em>
        <v-btn color="primary" class="mr-4" block>
          Send
        </v-btn>
      </v-form>
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      gender: ""
    };
  },
  computed: {
    options() {
      return [
        { text: "Male", value: "m" },
        { text: "Female", value: "f" },
        { text: "Rather not say", value: "u" }
      ];
    }
  },
  head() {
    return {
      title: "Sign Up"
    };
  }
};
</script>

<style scoped>
.custom .v-text-field__slot input {
  color: #00f !important;
}
</style>
