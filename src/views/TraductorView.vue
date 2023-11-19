<template>
    <v-container fluid class="bg-teal-darken-2">
        <v-row>
            <v-col cols="12">
                <h2>Traductor</h2>
            </v-col>
            <v-col cols="6">
                <v-select label="Selecionar el idioma de la palabra a ingresar" v-model="palabraIdioma" :items="idiomas"
                    item-title="name" item-value="code" bg-color="green-darken-1"></v-select>
                <br>
                <v-textarea clearable label="Ingresar una palabra" v-model="palabraIngresar"
                    bg-color="green-darken-1"></v-textarea>
            </v-col>
            <v-col cols="6">
                <v-select label="Selecionar un idioma a traducir" v-model="idiomaTraducir" :items="idiomas"
                    item-title="name" item-value="code" bg-color="green-darken-1"></v-select>
                <br>
                <v-textarea clearable label="Palabra traducida" readonly v-model="traduccion"
                    bg-color="green-darken-1"></v-textarea>
                <v-btn rounded="xl" @click="traducirPalabra" block>Traducir</v-btn>
            </v-col>
        </v-row>
        <v-snackbar v-model="alerta" :timeout="2500" color="red-darken-2">
            {{ mensaje }}
        </v-snackbar>
    </v-container>
</template>

<script>
import axios from 'axios';

export default {
    name: 'TraductorView',
    data() {
        return {
            idiomas: [],
            palabraIdioma: '',
            palabraIngresar: '',
            idiomaTraducir: '',
            traduccion: '',
            alerta: false,
            mensaje: ''

        }
    },
    methods: {

        getIdiomas() {

            axios.get('https://text-translator2.p.rapidapi.com/getLanguages', {
                headers: {
                    'X-RapidAPI-Key': '2359010fe9msh3c8c18c8a1588dep1f7613jsn446525f19af0',
                    'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com'
                }
            })
                .then(response => {

                    this.idiomas = response.data.data.languages;

                })
                .catch(error => console.log("Hubo un error " + error));

        },

        async traducirPalabra() {

            if (this.palabraIdioma == "") {

                this.alerta = true;

                this.mensaje = "No ha seleccionado ningun idioma de origen"

            } else if (this.palabraIngresar == "") {
                this.alerta = true;

                this.mensaje = "No ha ninguna palabra o frase a traducir"
            } else if (this.idiomaTraducir == "") {
                this.alerta = true;

                this.mensaje = "No ha seleccionado ningun idioma a traducir"
            } else {

                const encodedParams = new URLSearchParams();
                encodedParams.set('source_language', this.palabraIdioma);
                encodedParams.set('target_language', this.idiomaTraducir);
                encodedParams.set('text', this.palabraIngresar);

                const options = {
                    method: 'POST',
                    url: 'https://text-translator2.p.rapidapi.com/translate',
                    headers: {
                        'content-type': 'application/x-www-form-urlencoded',
                        'X-RapidAPI-Key': '2359010fe9msh3c8c18c8a1588dep1f7613jsn446525f19af0',
                        'X-RapidAPI-Host': 'text-translator2.p.rapidapi.com'
                    },
                    data: encodedParams,
                };

                try {
                    const response = await axios.request(options);

                    this.traduccion = response.data.data.translatedText;

                } catch (error) {
                    console.error(error);
                }

            }

        }

    },
    mounted() {
        this.getIdiomas();
    }
}
</script>