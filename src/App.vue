<template>
 
  <v-app>
    <v-app-bar class="bg-deep-purple-darken-4">
        <v-app-bar-title>Proyecto</v-app-bar-title>
        <div class="text-center">
  
    <v-menu :location="location" color="yellow-lighten-4">
      <template v-slot:activator="{ props }">
        <v-btn
          color="info"
          dark
          v-bind="props"
        >
          Otras API´S
        </v-btn>
      </template>

      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
        >
        <v-btn :to="item.to" color="yellow-lighten-4">
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-btn>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
          <v-btn prepend-icon="mdi-palette" color="deep-purple-lighten-4" to="/dictionary">
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
    items: [
        { title: 'Traducciones', to:'/'  },
        { title: 'Definiciones', to: '/definiciones' },
        { title: 'Conceptos', to:'/conceptos' },
        { title: 'Gestión' },
      ],
  }),
}
</script>
