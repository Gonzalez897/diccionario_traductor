<template>
  <v-responsive >
  <v-app>
    <!-- Menu de la aplicacion -->
    <v-app-bar class="bg-blue-grey-darken-2" :elevation="15" rounded>
        <v-app-bar-title>Proyecto</v-app-bar-title>
        <!-- Se muestra cuando no haya usuario logueado -->
          <template v-if="this.$store.getters.getUsuario==null">
            <v-btn prepend-icon="mdi-login-variant" to="/">Login</v-btn>
            <v-btn prepend-icon="mdi-account-plus" to="/registar">Registrar Usuario</v-btn>
          </template>
          <!-- Se muestran cuando hay un usuario logueado -->
          <template v-if="this.$store.getters.getUsuario!==null">
            <v-btn prepend-icon="mdi-home"  to="/welcome">
              Inicio
            </v-btn>
            <v-btn prepend-icon="mdi-alphabetical"  to="/dictionary">
              Sinonimos y antonimos
            </v-btn>
            <v-btn prepend-icon="mdi-tooltip-edit" to="/definiciones">
              Definiciones
            </v-btn>  
            <div class="text-center">
              <v-menu transition="slide-x-transition">
                <template v-slot:activator="{ props }">
                  <v-btn
                    block
                    color="white"
                    dark
                    v-bind="props"
                    prepend-icon="mdi-api"

                  >
                    Otras APIS
                  </v-btn>
                </template>

                <v-list>
                  <v-list-item v-for="(item, index) in items" :key="index">
                    <v-btn :to="item.to" color="indigo" width="150px">
                      <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-btn>
                  </v-list-item>
                </v-list>
              </v-menu>
            </div>
            <v-btn prepend-icon="mdi-logout-variant" @click="logout">
              Logout
            </v-btn>  
          </template>
          
    </v-app-bar>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</v-responsive>
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
        this.$router.push('/welcome')
      }else{
        this.$router.push('/')
      }
    }
  },
  data: () => ({
    //
    items: [
        { title: 'Definiciones', to: '/definiciones' },
        { title: 'Conceptos', to:'/conceptos' },
      ],
  }),
  created() {
    // el metodo se ejecuta cada vez que el componente se crea
    this.validarAcceso()
  },
}
</script>

<style scoped>

</style>
