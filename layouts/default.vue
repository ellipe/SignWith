<template>
  <v-app>
    <v-navigation-drawer 
      v-model="drawer" 
      app 
      clipped 
    >
      <v-list nav>
        <v-subheader>
          Menu
        </v-subheader>
        <v-list-item
          v-for="(link, i) in links"
          :key="i"
          :to="link.to"
          router
          exact
        >
          <v-list-item-content>
            <v-list-item-title v-text="link.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <template v-slot:append>
        <div class="ml-4">
          Version 0.1 <br />
          Todos los derechos reservados
        </div>
      </template>
    </v-navigation-drawer>
    <v-app-bar clipped-left app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer">
        <v-icon v-if="!drawer">
          mdi-menu
        </v-icon>
        <v-icon v-else>
          mdi-close
        </v-icon>
      </v-app-bar-nav-icon>
      <v-toolbar-title v-text="toolbarTitle" />
      <v-spacer />
    </v-app-bar>
    <v-main class="background-image">
      <v-container 
        fluid>
        <nuxt />
      </v-container>
    </v-main>
    <v-footer app>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      drawer: null,
      links: [
        {
          title: "Sign Up",
          to: "/"
        },
        {
          title: "Profile",
          to: "/profile"
        }
      ]
    };
  },
  computed: {
    toolbarTitle() {
      return this.$store.state.title;
    }
  }
};
</script>

<style scoped>
.background-image {
  background-image:url("/wave.svg");
  background-position: bottom center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: contain;
}
</style>
