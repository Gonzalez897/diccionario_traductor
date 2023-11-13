<template>
    <v-container fluid>
        <h1 class="text-purple-darken-2">Definiciones Ingles</h1>
        <v-row>
            <v-col cols="6">
                <v-text-field label="Definicion"  color="purple" v-model="Fdefinicion"></v-text-field>
                <v-btn prepend-icon="mdi-check" color="purple-darken-2" block @click="getDefinicion">Mostrar definicion</v-btn>
            </v-col>
            <v-col cols="6">
                <template v-if="Fpalabra.length>0">
                    <v-card :title="Fpalabra[0].word" color="deep-purple-lighten-4">
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
           <!-- <v-col cols="8">
                <template v-if="Lpalabra.length>0">
                    <v-card :title="Lpalabra[0].entry" color="deep-purple-lighten-4">
                        <v-card-subtitle v-for="(q, i) in Lconjugacion" :key="i">
                          <b>  {{ q.partOfSpeech }} </b>
                        </v-card-subtitle>
                        <v-card-text v-for="(e, i) in Lextraerdefinicion" :key="i">
                            {{ e.definition }}
                        </v-card-text>
                    </v-card>
                </template>
           </v-col> -->
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
            Fextraerdefinicion:[],
            // Lpalabra:[],
            // Lconjugacion:[],
            // Lextraerdefinicion:[]

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
                // axios.get(`https://lingua-robot.p.rapidapi.com/language/v1/entries/en/${this.Fdefinicion}`,{
                //     headers:{
                //         'X-RapidAPI-Key': '2359010fe9msh3c8c18c8a1588dep1f7613jsn446525f19af0',
                //         'X-RapidAPI-Host': 'lingua-robot.p.rapidapi.com'
                //     }
                // })
                // .then(response=>{
                //     console.log(response.data.entries)
                //     this.Lpalabra=response.data.entries
                //     this.Lconjugacion=response.data.entries[0].lexemes
                //     this.Lextraerdefinicion=response.data.entries[0].lexemes[0].senses
                
                // })
                .catch(error=>console.log('Ha ocurrido un error'+error))
        }

    },
    mounted(){
        this.getDefinicion()
    }
}
</script>

<style scoped>

</style>