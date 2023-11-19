<template>
  <v-container :fluid="true">
    <h1 class="text-green-darken-4">Traduccion</h1>
    <br /><br />
    <v-row justify="center">
      <v-col cols="12" md="6">
        <v-select
          placeholder="Selecionar el idioma de la palabra a ingresar"
          :items="idiomasUno"
          item-title="language"
          v-model="source"
          bg-color="deep-purple-lighten-5"
        ></v-select>

        <v-textarea
          placeholder="Ingrese una palabra"
          v-model="q"
          bg-color="deep-purple-lighten-5"
        ></v-textarea>
        <v-card-actions class="mt-4">
          <v-btn icon="mdi-volume-high" color="black"></v-btn>
          <v-btn icon="mdi-microphone" color="black"></v-btn>
        </v-card-actions>
      </v-col>

      <v-col cols="12" md="6">
        <v-select
          placeholder="Seleccione al idioma a traducir"
          :items="idiomasUno"
          item-title="language"
          v-model="target"
          bg-color="deep-purple-lighten-5"
        ></v-select>

        <v-textarea
          placeholder="Traduccion"
          v-model="traduccion"
          bg-color="deep-purple-lighten-5"
          readonly
        ></v-textarea>
        <v-card-actions class="mt-4">
          <v-btn icon="mdi-volume-high" color="black"></v-btn>
          <v-btn icon="mdi-microphone" color="black"></v-btn>
        </v-card-actions>
      </v-col>
      <v-btn color="indigo-darken-4" block @click="getTraducir">Traducir</v-btn>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  name: "InicioList",
  data() {
    return {
      idiomasUno: [],
      q: "",
      target: "",
      source: "",
      traduccion: "",
      config1: {
        headers: {
          "X-RapidAPI-Key":
            "2359010fe9msh3c8c18c8a1588dep1f7613jsn446525f19af0",
          "X-RapidAPI-Host": "google-translate1.p.rapidapi.com",
        },
      },
      config2: {
        headers: {
          "content-type": "application/x-www-form-urlencoded",
          "Accept-Encoding": "application/gzip",
          "X-RapidAPI-Key":
            "2359010fe9msh3c8c18c8a1588dep1f7613jsn446525f19af0",
          "X-RapidAPI-Host": "google-translate1.p.rapidapi.com",
        },
      },
    };
  },
  methods: {
    getIdiomas() {
      axios
        .get(
          "https://google-translate1.p.rapidapi.com/language/translate/v2/languages",
          this.config1
        )
        .then((response) => {
          console.log(response.data);

          this.idiomasUno = response.data.data.languages;
        })
        .catch((error) => console.log("ha ocurrido un error" + error));
    },

    async getTraducir() {
      const encodedParams = new URLSearchParams();
      encodedParams.set("q", this.q);
      encodedParams.set("target", this.target);
      encodedParams.set("source", this.source);

      const options = {
        method: "POST",
        url: "https://google-translate1.p.rapidapi.com/language/translate/v2",
        headers: {
          "content-type": "application/x-www-form-urlencoded",
          "X-RapidAPI-Key":
            "2359010fe9msh3c8c18c8a1588dep1f7613jsn446525f19af0",
          "X-RapidAPI-Host": "google-translate1.p.rapidapi.com",
        },
        data: encodedParams,
      };

      try {
        const response = await axios.request(options);
        console.log(response.data);
        this.traduccion = response.data.data.translations[0].translatedText;
      } catch (error) {
        console.error(error);
      }
    },
  },
  mounted() {
    this.getIdiomas();
  },
};
</script>
