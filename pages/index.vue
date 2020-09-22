<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="10" md="10">
      <div>
        <h2>Sign Up</h2>
        <p>Please fill the following information</p>
      </div>
      <v-snackbar color="success" v-model="message" timeout="5000">
        You did it!
        <template v-slot:action>
          <v-btn color="white" text @click="message = false">
            Close
          </v-btn>
        </template>
      </v-snackbar>
      <v-form ref="form" lazy-validation>
        <v-text-field
          background-color="#EEEEEE"
          outlined
          v-model="name"
          :rules="rules.nameRules"
          placeholder="Name *"
          required
        ></v-text-field>

        <v-text-field
          class="custom"
          background-color="#EEEEEE"
          outlined
          v-model="email"
          :rules="rules.emailRules"
          placeholder="E-mail"
          required
        ></v-text-field>

        <v-select
          class="custom"
          background-color="#EEEEEE"
          outlined
          v-model="gender"
          :items="options"
          :rules="[v => !!v || 'Item is required']"
          placeholder="Gender"
          required
        ></v-select>
        <em>* Required fields</em>
        <v-btn large color="primary" block @click="submit">
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
      gender: "",
      rules: {
        nameRules: [
          v => !!v || "Name is required",
        ],
        emailRules: [
          v =>
            /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
            "E-mail must be valid"
        ]
      },
      message: false
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
    this.$store.commit("setToolbarTitle", "Sign Up");
    return {
      title: "Sign Up"
    };
  },
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        this.$axios
          .put("/put", {
            name: this.name,
            email: this.email,
            gender: this.gender
          })
          .then(response => {
            this.message = true;
          });
      }
    }
  }
};
</script>

<style>
.v-input__slot > fieldset {
  border: none;
}
</style>
