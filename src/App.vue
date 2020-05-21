<template>
  <v-app >
      <v-app-bar
              app
              color="secondary"
              dark
              hide-on-scroll
      >
        <span class="headline"><strong>ShopList</strong></span>
          <v-spacer></v-spacer>
          <div id="nav">
              <router-link to="/">Home</router-link> |
              <router-link to="/about">About</router-link>
          </div>
      </v-app-bar>
<!--    <div id="nav">-->
<!--      <router-link to="/">Home</router-link> |-->
<!--      <router-link to="/about">About</router-link>-->
<!--    </div>-->
      <v-content>
          <router-view/>
      </v-content>
    <v-footer
            app
            class="font-weight-medium"
    >
      <v-col
              class="text-center"
              cols="12"
      >
        {{ new Date().getFullYear() }} — ShopList
      </v-col>
    </v-footer>
  </v-app>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
