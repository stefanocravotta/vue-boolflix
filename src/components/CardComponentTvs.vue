<template>
  <div class="text-center ">
      <h1>Serie Tv</h1>
      <div class="container d-flex flex-wrap justify-content-center align-items-center">
      <div v-for="tv in tvs" :key="tv.id" class="sc-card m-2 flip-card">
      <div class="flip-card-inner">
                    <div v-if="tv.poster_path !== null" class="flip-card-front" id="copertina">
                        <img :src="`https://image.tmdb.org/t/p/w342/${tv.poster_path}`" alt="">
                    </div>
                    <div v-else class="flip-card-front">
                        <img src="https://w0.peakpx.com/wallpaper/894/391/HD-wallpaper-404-background-apple-designer-error-humor-logo-not-found-silly.jpg" alt="">
                    </div>

                    <div id="descrizione" class="flip-card-back ">
                            <div>
                                <h5>{{tv.name}}</h5>
                            </div>
                            <div class="my-3">
                                <p >{{tv.original_title}}</p>
                            </div>
                            <div>
                                <p>Lingua Originale : <lang-flag :iso= "tv.original_language" /></p>
                            </div>
                            <div id="trama" class="my-3">
                                <p>{{tv.overview}}</p>
                            </div>
                            <div class="align-items-center justify-content-center d-flex ">
                                <p>Voto<star-rating id="stars" :star-size="20" :rating="starRating(tv.vote_average)"></star-rating></p>
                            </div>
                        </div>
                </div>
                </div>
      
    </div>
  </div>
</template>

<script>
export default {
    name: "CardComponentTvs",
    props:{
        tvs:Array
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

h1{
    color: $primary-color;
}
.container{
    min-height: 420px;
}

.sc-card{
        border-radius: 20px;
        img{
            
            border-radius: 20px;
        }
        .cont-img-small{
            width: 40%;
            img{
                width: 100%;
                height: 100%;
            }
        }
        

    }
    .flip-card {
        overflow: hidden;
        background-color: transparent;
        flex-basis: calc(100% / 4);
        height: 420px;
        perspective: 1000px; 
        border-radius: 20px;
        img{
            width: 100%;
        }

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
    padding: 30px;
    background-image: linear-gradient($secondary-color,lighten($primary-color,10%));;
    color: white;
    transform: rotateY(180deg);
    }
    #trama{
        max-height: 30%;
        overflow-y: auto;
    }
</style>