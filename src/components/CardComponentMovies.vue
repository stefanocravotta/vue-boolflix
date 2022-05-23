<template>
  <div>
      <h1>Film</h1>
      <div class="container flex-wrap container-card d-flex justify-content-center py-4">
          <div v-for="movie in movies" :key="movie.id" class="sc-card m-2 flip-card">
                <div class="flip-card-inner">
                    <div v-if="movie.poster_path !== null" class="flip-card-front" id="copertina">
                        <img :src="`https://image.tmdb.org/t/p/w342/${movie.poster_path}`" alt="">
                    </div>
                    <div v-else class="flip-card-front">
                        <img src="https://media.istockphoto.com/vectors/internet-error-page-not-found-in-vertical-orientation-for-mobile-a-vector-id1252582562?k=20&m=1252582562&s=170667a&w=0&h=O1wwtikUXIdVVBKzIEDHvd9MDnwoeuClx90cuIq1SEo=" alt="">
                    </div>

                    <div id="descrizione" class="flip-card-back d-flex flex-wrap ">
                        <div class="row">
                            <div class="col-4">
                                <img :src="`https://image.tmdb.org/t/p/w342/${movie.poster_path}`" alt="">
                            </div>
                            <div class="col-8">
                                <h5 class="col-12">Titolo : {{movie.title}}</h5>
                            </div>
                        </div>

                        <p >Titolo Originale : {{movie.original_title}}</p>
                        <p>Original Language : <lang-flag :iso= "movie.original_language" /></p>
                        <p>{{movie.vote_average}} <i class="fa-regular fa-star"></i></p>
                    </div>
                </div>
            </div>
      </div>
  </div>
</template>

<script>
export default {
    name: "CardComponent",
    props:{
        movies:Array
    },
    
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
        flex-basis: calc(100% / 4);
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
    background-image: linear-gradient($secondary-color,lighten($primary-color,10%));;
    color: white;
    transform: rotateY(180deg);
        .cont-img-small{
            width: 40%;
            img{
                width: 100%;
            }
        }
        h5{
            margin: 10px 0;
            padding: 5px 0;
        } 
        p{
            margin: 5px 0;
            img{
                width: 30px;
            }
        }
        
    }
</style>