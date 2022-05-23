<template>
  <main>
      <div v-if="selectValue === '' ">
        <CardComponentMovies v-if="movies.length > 0" :movies="movies" />
        <div v-else></div>
        <CardComponentTvs v-if="tvs.length > 0" :tvs="tvs" />
        <div v-else></div>
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
    components: { CardComponentMovies, CardComponentTvs }
}
</script>

<style lang="scss" scoped>
@import '../assets/style/vars';

main{
    min-height: calc(100vh - 80px);
    background-image: linear-gradient(lighten($primary-color,10%),$secondary-color);
    
}

</style>