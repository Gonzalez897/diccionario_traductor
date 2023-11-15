<template>
    <v-container fluid>
        <v-card title="Dictio-dor" :subtitle="`Bienvenid@ ${this.$store.getters.getUsuario}`">
            <v-card-text>
                <v-card-title>
                <v-img :src="`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTClc39fRS8jk-8I-FD9VgvuRWzdCCZ0XE6Fle_MLtrTMo60THvTXDQ3o2f1N2rSSkgtKw&usqp=CAU`" height="250" width="250"
                cover></v-img>
                </v-card-title>
                <v-card-subtitle>
                    Dictio-dor es una plataforma donde podrás traducir
                </v-card-subtitle>
            </v-card-text>
        </v-card>
    </v-container>
</template>
<script>
export default {
    name: 'WelcomeView'
}

</script>
