<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col xs="12" sm="4" md="4" lg="4" xl="4" xxl="4">
        <v-card>
          <v-img
            height="250"
            cover
            src="https://static.vecteezy.com/system/resources/previews/016/089/695/non_2x/machine-translation-software-black-glyph-icon-vector.jpg"
          ></v-img>
          <v-card-text>
            <h2 class="text-blue-grey-darken-2">
              Sistema Diccionario Traductor
            </h2>
            <p class="text-blue-grey-darken-2">Registro del usuario</p>
            <br />
            <v-form>
              <v-text-field
                label="Nombre"
                counter
                maxlength="50"
                color="indigo"
                clearable
                prepend-icon="mdi-account"
                v-model="usuario.name"
              ></v-text-field>
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
              <v-btn color="indigo" block @click="agregarUsuario"
                >Registrar Usuario</v-btn
              >
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <!-- Alerta -->
    <v-snackbar :timeout="1500" color="teal-darken-1" v-model="alertaEstado">
      {{ alertaMensaje }}
    </v-snackbar>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  name: "RegistrarView",
  data() {
    return {
      usuario: {
        name: "",
        email: "",
        password: "",
      },
      alertaEstado: false,
      alertaMensaje: "",
    };
  },
  methods: {
    agregarUsuario() {
      axios
        .post("http://127.0.0.1:8000/api/usuario/registro", this.usuario)
        .then((response) => {
          if (response.status == 200) {
            this.alertaEstado = true;
            this.alertaMensaje = response.data.data;

            this.usuario = {};
          } else {
            this.alertaEstado = true;
            this.alertaMensaje = "¡Ups! Algo salio mal.";
          }
        })
        .catch((error) => console.log("ha ocurrido un error" + error));
    },
  },
};
</script>
