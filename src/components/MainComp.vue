<template>
  <main>
        <div v-if="selectValue === 'all' ">
            <CardComponentMovies :movies="movies" />
            <CardComponentTvs :tvs="tvs" />
        </div>
        <div v-else-if="selectValue === 'movie' ">
            <CardComponentMovies :movies="movies" />
        </div>
        <div v-else-if="selectValue === 'tv' ">
            <CardComponentTvs :tvs="tvs" />
        </div>
        <div v-else>
            <h1>Nessun risultato corrisponde ai criteri di ricerca</h1>
        </div>
  </main>
</template>

<script>
import CardComponentMovies from './CardComponentMovies.vue';
import CardComponentTvs from './CardComponentTvs.vue';
export default {
    name: "MainComp",
    props: {
        movies: Array,
        tvs: Array,
        selectValue: String
    },
    components: { CardComponentMovies, CardComponentTvs },

    methods: {
        filter(){

        }
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/style/vars';

main{
    min-height: calc(100vh - 80px);
    background-image: linear-gradient(lighten($primary-color,10%),$secondary-color);
    
}

</style>