<template>
    <v-content fluid>
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
                <v-btn-group>
                <v-btn icon="mdi-pencil" @click="sWord" color="green">Synonyms</v-btn>
                <br>
                <v-btn icon="mdi-delete" @click="aWord" color="red">Antonyms</v-btn>
                </v-btn-group>
            </v-col>
            <v-col>
                <div v-if="definition">
            <h2>Defition:</h2>
            <p>{{ definition }}</p>
            </div>
            </v-col>
            <v-col>
                <div v-if="synonyms">
            <h2>Synonym:</h2>
            <p>{{ synonyms }}</p>
            </div>
            </v-col>
            <v-col>
                <div v-if="antonyms">
            <h2>Antonyms:</h2>
            <p>{{ antonyms }}</p>
            </div>
            </v-col>
        </v-row>
    </v-content>
    </template>
    <script>
    import axios from 'axios';
   export default{
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