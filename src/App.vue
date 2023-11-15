<template>
 
  <v-app>
    <!-- Menu de la aplicacion -->
    <v-app-bar class="bg-deep-purple-darken-4">
        <v-app-bar-title>Proyecto</v-app-bar-title>
        <!-- Se muestra cuando no haya usuario logueado -->
          <template v-if="this.$store.getters.getUsuario==null">
            <v-btn prepend-icon="mdi-login" to="/">Login</v-btn>
          </template>
          <!-- Se muestran cuando hay un usuario logueado -->
          <template v-if="this.$store.getters.getUsuario!==null">
            <v-btn prepend-icon="mdi-palette" color="deep-purple-lighten-4" to="/SyA">
              Sinonimos y antonimos
            </v-btn>
            <v-btn prepend-icon="mdi-palette" color="deep-purple-lighten-4" to="/definiciones">
              Definiciones
            </v-btn>  
            <v-btn prepend-icon="mdi-logout" @click="logout">
              Logout
            </v-btn>  
          </template>
          
    </v-app-bar>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  methods:{
    // Este metodo realiza el cierre de sesion
    logout(){
      // vaciando el estado de la aplicacion y el storage
      this.$store.dispatch('logout')
      // redireccionando al login
      this.$router.push('/')
    },
    // Este metodo verifica si hay sesion para mantener o expulsar al usuario de la aplicacion
    validarAcceso(){
      let datos = localStorage.getItem('userData');

      if (datos) {
        // si hay data en el storage se valida el acceso
        this.$store.dispatch('login', JSON.parse(datos))
        this.$router.push('/SyA')
      }else{
        this.$router.push('/')
      }
    }
  },
  data: () => ({
    //
  }),
  created() {
    // el metodo se ejecuta cada vez que el componente se crea
    this.validarAcceso()
  },
}
</script>
