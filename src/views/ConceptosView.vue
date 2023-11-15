<template>  
 <v-container fluid>
    <v-row justify="center">
        <v-col >
    <h1 class="text-indigo"> API conceptos</h1>
    <v-col cols="6">
        <v-text-field label="Definicion"  color="indigo" v-model="Ldefinicion"></v-text-field>
        <v-btn prepend-icon="mdi-check" color="indigo" block @click="getConceptos">Mostrar definicion</v-btn>
    </v-col>
            <v-row>
                <v-col cols="6">
                    <template v-if="Lpalabra.length>0">
                        <v-card :title="Lpalabra[0].entry" color="indigo-lighten-1">
                            <v-card-subtitle v-for="(q, i) in Lconjugacion" :key="i">
                                <b>  {{ q.partOfSpeech }} </b>
                            </v-card-subtitle>
                            <v-card-text v-for="(e, i) in Lextraerdefinicion" :key="i">
                                {{ e.definition }}
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
 import axios from 'axios';
 export default{
    name: 'ConceptosView', 
    data(){
        return{ 
            Ldefinicion: '',
            Lpalabra:[],
            Lconjugacion:[],
            Lextraerdefinicion:[]
        }
    }, 
    methods:{
        getConceptos(){
            axios.get(`https://lingua-robot.p.rapidapi.com/language/v1/entries/en/${this.Ldefinicion}`,{
                 headers:{
                         'X-RapidAPI-Key': '2359010fe9msh3c8c18c8a1588dep1f7613jsn446525f19af0',
                         'X-RapidAPI-Host': 'lingua-robot.p.rapidapi.com'
                    }
                 })
                 .then(response=>{
                   console.log(response.data.entries)
                     this.Lpalabra=response.data.entries
                    this.Lconjugacion=response.data.entries[0].lexemes
                    this.Lextraerdefinicion=response.data.entries[0].lexemes[0].senses
                
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