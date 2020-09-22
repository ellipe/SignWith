<template>
  <v-layout>
    <v-flex class="text-center profile">
      <img
        src="~/assets/user.jpeg"
        alt="Vuetify.js"
        class="mb-5 profile-picture"
      />
      <h2>{{ name }}</h2>
      <em><small>{{ email }}</small></em>
      <div class="social-icons">
        <v-btn icon>
          <v-icon x-large color="black">mdi-linkedin</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon x-large color="black" tile>mdi-twitter</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon x-large color="black">mdi-facebook</v-icon>
        </v-btn>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data(){
    return {
      name: '',
      email: ''
    }
  },
  mounted() {
    this.$axios.get("https://jsonplaceholder.typicode.com/users/1")
      .then(({ data }) => {
        this.name = data.name
        this.email = data.email
      });
  },
  head() {
    this.$store.commit("setToolbarTitle", "Profile");
    return {
      title: "Profile"
    };
  }
};
</script>

<style scoped>
.profile {
  padding-top: 40px;
}

.social-icons {
  display: flex;
  justify-content: center;
  gap: 10px;
}

.profile-picture {
  height: 300px;
  border-radius: 50%;
  border: 10px solid #eeeeee;
  background: chocolate;
}
</style>
