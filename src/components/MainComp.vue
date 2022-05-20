<template>
  <main>
      <div class="container flex-wrap container-card d-flex justify-content-center py-4">
          <div v-for="film in films" :key="film.id" class="sc-card m-2 flip-card">
                <div class="flip-card-inner">
                    <div class="flip-card-front" id="copertina">
                        <img :src="`https://image.tmdb.org/t/p/w500/${film.poster_path}`" alt="">
                    </div>

                    <div id="descrizione" class="flip-card-back">
                        <h2>Titolo : {{film.title}}</h2>
                        <h3>Titolo Originale : {{film.original_title}}</h3>
                        <span>Lingua Originale : {{film.original_language}}</span>
                        <h5>Voto : {{film.vote_average}}</h5>
                    </div>
                </div>
            </div>
      </div>
  </main>
</template>

<script>
export default {
    name: "MainComp",
    props:{
        films:Array
    },
}
</script>

<style lang="scss" scoped>
@import '../assets/style/vars';

main{
    min-height: calc(100vh - 80px);
    background-image: linear-gradient(lighten($primary-color,10%),$secondary-color);
    .sc-card{
        img{
            max-width: 100%;
        }
    }
    .flip-card {
        overflow: hidden;
        background-color: transparent;
        flex-basis: calc(100% / 4);
        height: 420px;
        perspective: 1000px; 
    }

    /* This container is needed to position the front and back side */
    .flip-card-inner {
        position: relative;
        width: 100%;
        height: 99.6%;
        text-align: center;
        transition: transform 0.8s;
        transform-style: preserve-3d;
    }

    /* Do an horizontal flip when you move the mouse over the flip box container */
    .flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
    }

    /* Position the front and back side */
    .flip-card-front, .flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    }

    /* Style the front side (fallback if image is missing) */
    .flip-card-front {
    color: black;
    }

    /* Style the back side */
    .flip-card-back {
    background-color: rgba($color: #000000, $alpha: .8);
    color: white;
    transform: rotateY(180deg);
    }
}

</style>