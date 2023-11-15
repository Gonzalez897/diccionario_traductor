<template>
    <v-container fluid>
        <v-row>
            <v-col>
                <v-text-field
                label="Word"
                maxlength="50"
                counter
                color="indigo"
                clearable
                v-model="word"
                placeholder="Write the word"></v-text-field>
                <v-row>
                    <v-col>
                        <v-btn @click="sWord" color="indigo">Synonyms</v-btn>
                    </v-col>
                    <v-col>
                        <v-btn @click="aWord" color="indigo">Antonyms</v-btn>
                    </v-col>
                </v-row>
            </v-col>
            <v-col>
                <v-card color="indigo" v-if="synonyms">
                    <v-card-title>Synonyms</v-card-title>
                    <v-card-text>{{ synonyms }}</v-card-text>
                </v-card>
            </v-col>
            <v-col>
                <v-card color="indigo" v-if="antonyms">
                    <v-card-title>Antonyms</v-card-title>
                    <v-card-text>{{ antonyms }}</v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
    </template>
    <script>
    import axios from 'axios';
   export default{
    name:'DictionaryView',
    data(){
        return{
            word: '',
            definition: null,
            synonyms: null,
            antonyms: null,
        }
    },
    methods: {
    sWord(){
            axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${this.word}`)
            .then(response => {
            this.synonyms = response.data[0].meanings[0].synonyms[0];
            this.word = ''
        })
        .catch(error => {
          console.error('Error. Synonyms didn´t exist', +error);
        });
    },  
    aWord(){
            axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${this.word}`)
            .then(response => {
            this.antonyms = response.data[0].meanings[0].antonyms[0];
            this.word = ''
        })
        .catch(error => {
          console.error('Error. Antonyms didn´t exist', +error);
        });
    }
    }
}
</script>
<style></style>