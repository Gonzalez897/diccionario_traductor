<template>
  <v-app>
    <v-app-bar class="bg-deep-purple-darken-4">
        <v-app-bar-title>Proyecto</v-app-bar-title>
          <v-btn prepend-icon="mdi-palette" color="deep-purple-lighten-4" to="/">
          Sinonimos y antonimos
          </v-btn>
          <v-btn prepend-icon="mdi-palette" color="deep-purple-lighten-4" to="/definiciones">
          Definiciones
          </v-btn>
    </v-app-bar>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
}
</script>
