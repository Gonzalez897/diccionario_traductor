<template>
    <v-container fluid>
        <v-row justify="center">
            <v-col xs="12" sm="4" md="4" lg="4" xl="4" xxl="4">
                <v-card>
                    <v-img height="150" cover src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fes.123rf.com%2Fphoto_68419690_traducir-icono-del-mundo-ilustraci%25C3%25B3n-de-esquema-de-traducir-el-icono-de-vector-de-mundo-para-web.html&psig=AOvVaw0kiQ5NOH3oSVfA-yVHonFl&ust=1700094186325000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCMDpsMLexIIDFQAAAAAdAAAAABAE"></v-img>
                    <v-card-text>
                        <h2 class="text-blue-grey-darken-2">Sistema Diccionario Traductor</h2>
                        <p  class="text-blue-grey-darken-2">Login</p>
                        <br>
                        <v-form>
                            <v-text-field
                            label="Correo"
                            placeholder="correo@extension.com"
                            counter
                            maxlength="70"
                            color="indigo"
                            clearable
                            prepend-icon="mdi-email"
                            v-model="usuario.email"
                            ></v-text-field>
                            <v-text-field
                            label="Password"
                            placeholder="*********"
                            counter
                            maxlength="15"
                            color="indigo"
                            clearable
                            type="password"
                            prepend-icon="mdi-key"
                            v-model="usuario.password"
                            ></v-text-field>
                            <v-btn
                            color="indigo"
                            block
                            @click="login"
                            >Iniciar sesion</v-btn>
                        </v-form>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
        <!-- Alerta -->
        <v-snackbar
        :timeout="1500"
        color="red-darken-4"
        v-model="alertaEstado"
        >
        {{ alertaMensaje }}
        </v-snackbar>
    </v-container>
</template>

<script>
import axios from 'axios';
export default{
    name:'LoginView',
    data(){
        return{
            usuario:{
                email:'',
                password:''
            },
            alertaEstado:false,
            alertaMensaje:''
        }
    },
    methods:{
        // Peticion para realizar login
        login(){
            axios.post('http://127.0.0.1:8000/api/usuario/login',this.usuario)
            .then(response=>{
                // console.log(response)
                if (response.status==200) {
                    // se extrae el usuario y el token de
                    // la respuesta que retorna el endpoint del login
                    let datos={
                        usuario:response.data.data.name,
                        token:response.data.token
                    }
                    // Guardando los datos en local storage
                    this.$store.dispatch('login', datos)
                    // redireccionando a la pantalla de bienvenida
                    this.$router.push('/SyA')
                }
            })
            .catch(error=>{
                console.log('Ha ocurrido un error'+error)
                this.alertaEstado=true

                // usuario no autorizado
                if (error.response.status==401) {
                    this.alertaMensaje=error.response.data.data
                }else{
                    this.alertaMensaje='¡Ups! Algo salio mal.'
                }
            })
        }
    }
}
</script>

<style scoped>

</style>