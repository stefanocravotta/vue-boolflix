<template>
  <div class="text-center">
      <h1>Film</h1>
      <div class="container-slider">
          <vue-glide class="container flex-wrap container-card d-flex justify-content-center py-4">
            <vue-glide-slide v-for="movie in movies" :key="movie.id" class="sc-card m-2 flip-card">
                    <div class="flip-card-inner">
                        <div v-if="movie.poster_path !== null" class="flip-card-front" id="copertina">
                            <img :src="`https://image.tmdb.org/t/p/w342/${movie.poster_path}`" alt="">
                        </div>
                        <div v-else class="flip-card-front">
                            <img src="https://media.istockphoto.com/vectors/internet-error-page-not-found-in-vertical-orientation-for-mobile-a-vector-id1252582562?k=20&m=1252582562&s=170667a&w=0&h=O1wwtikUXIdVVBKzIEDHvd9MDnwoeuClx90cuIq1SEo=" alt="">
                        </div>
    
                        <div id="descrizione" class="flip-card-back ">
                            <div>
                                <h5>{{movie.title}}</h5>
                            </div>
                            <div class="my-3">
                                <p >{{movie.original_title}}</p>
                            </div>
                            <div>
                                <p>Lingua Originale : <lang-flag :iso= "movie.original_language" /></p>
                            </div>
                            <div id="trama" class="my-3">
                                <p>{{movie.overview}}</p>
                            </div>
                            <div class="align-items-center justify-content-center d-flex ">
                                <p>Voto<star-rating id="stars" :star-size="20" :rating="starRating(movie.vote_average)"></star-rating></p>
                            </div>
                        </div>
                    </div>
            </vue-glide-slide>
            <template  slot="control">
                <button data-glide-dir="<<"><i class="fa-solid fa-angles-left"></i></button>
                <button class="prev" data-glide-dir="<"><i class="fa-solid fa-angle-left"></i></button>
                <button class="next" data-glide-dir=">"><i class="fa-solid fa-angle-right"></i></button>
                <button data-glide-dir=">>"><i class="fa-solid fa-angles-right"></i></button>
            </template>
          </vue-glide>
      </div>

      
      
  </div>
</template>

<script>
export default {
    name: "CardComponent",

    props:{
        movies:Array
    },
    methods:{
        starRating(number){
            return Math.round(number / 2)
        }
    }
    
}
</script>

<style lang="scss" scoped>
@import '../assets/style/vars';


.sc-card{
        border-radius: 20px;
        img{
            max-width: 100%;
            border-radius: 20px;
        }

    }
    .flip-card {
        overflow: hidden;
        background-color: transparent;
        max-width: 270px;
        height: 420px;
        perspective: 1000px; 
        border-radius: 20px;
    }
    .flip-card-inner {
        position: relative;
        width: 100%;
        height: 100%;
        text-align: center;
        transition: transform 0.8s;
        transform-style: preserve-3d;
        border-radius: 20px;
    }
    .flip-card:hover .flip-card-inner {
    transform: rotateY(180deg);
    }
    .flip-card-front, .flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    border-radius: 20px;
    }
    .flip-card-front {
    color: black;
    }
    .flip-card-back {
    max-width: 100%;
    padding: 10px ;
    background-image: linear-gradient($secondary-color,lighten($primary-color,10%));
    color: white;
    transform: rotateY(180deg);
    #trama{
        max-height: 30%;
        overflow-y: auto;
    }
    }
    button{
        border: none;
        padding: 10px;
        border-radius: 20px;
        margin: 0 20px;
        background-color: $secondary-color;
        color: $primary-color;
        &:hover{
            background-color: $primary-color;
            color: $secondary-color;
        }
    }
</style>