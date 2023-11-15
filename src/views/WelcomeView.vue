<template>
    <v-container fluid>
        <v-row justify="center">
            <v-col>
                <v-card title="Dictio-dor" :subtitle="`Bienvenid@ ${this.$store.getters.getUsuario}`">
                    <v-card-text>
                        <v-card-title>
                        <v-img src="https://c8.alamy.com/compes/2agnt30/el-icono-color-de-la-lista-de-tareas-el-bloc-de-notas-con-un-lapiz-tomar-notas-lista-de-comprobacion-ilustracion-vectorial-aislado-2agnt30.jpg" height="250" width="250"
                        cover></v-img>
                        </v-card-title>
                        <v-card-subtitle>
                            Dictio-dor es una plataforma donde podrás traducir
                        </v-card-subtitle>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
export default {
    name: 'WelcomeView'
}

</script>
