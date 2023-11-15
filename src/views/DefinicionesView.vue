<template>
        <v-container fluid>
            <v-row justify="center">
                <v-col >
                    <h1 class="text-indigo">Definiciones Ingles</h1>
                    <v-row>
                        <v-col cols="6">
                            <v-text-field label="Definicion"  color="indigo" v-model="Fdefinicion"></v-text-field>
                            <v-btn prepend-icon="mdi-check" color="indigo" block @click="getDefinicion">Mostrar definicion</v-btn>
                        </v-col>
                        <v-col cols="6">
                            <template v-if="Fpalabra.length>0">
                                <v-card :title="Fpalabra[0].word" color="indigo-lighten-1">
                                    <v-card-subtitle v-for="(j, i) in Fconjugacion" :key="i">
                                    <b>  {{ j.partOfSpeech }}<br></b>
                                    </v-card-subtitle>
                                    <v-card-text v-for="(x, i) in Fconjugacion" :key="i">
                                        <template v-for="(q, i) in x.definitions" :key="i">
                                            {{ q.definition }}<br>
                                        </template>
                                    </v-card-text>
                                </v-card>
                            </template>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
    </v-container>
</template>

<script>
import axios from 'axios'
export default{
    name:'DefinicionesView',
    data(){
        return{
            Fdefinicion:'',
            Fpalabra:[],
            Fconjugacion:[],
            Fextraerdefinicion:[]

        }
    },
    methods:{
            getDefinicion(){
                axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${this.Fdefinicion}`)
                .then(response=>{
                    console.log(response.data)
                    this.Fpalabra=response.data
                    this.Fconjugacion=response.data[0].meanings
                    this.Fextraerdefinicion=response.data[0].meanings.definitions
                

                })
                .catch(error=>console.log('Ha ocurrido un error'+error))
        }

    },
    mounted(){
       
    }
}
</script>

<style scoped>

</style>