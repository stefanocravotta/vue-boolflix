<template>
  <div>
      <h1>Serie Tv</h1>
      <div class="container flex-wrap container-card d-flex justify-content-center py-4">
          <div v-for="tv in tvs" :key="tv.id" class="sc-card m-2 flip-card">
                <div class="flip-card-inner">
                    <div v-if="tv.poster_path !== null" class="flip-card-front" id="copertina">
                        <img :src="`https://image.tmdb.org/t/p/w342/${tv.poster_path}`" alt="">
                    </div>
                    <div v-else class="flip-card-front">
                        <img src="https://media.istockphoto.com/vectors/internet-error-page-not-found-in-vertical-orientation-for-mobile-a-vector-id1252582562?k=20&m=1252582562&s=170667a&w=0&h=O1wwtikUXIdVVBKzIEDHvd9MDnwoeuClx90cuIq1SEo=" alt="">
                    </div>

                    <div id="descrizione" class="flip-card-back d-flex flex-wrap flex-column align-items-center">
                        <div class="cont-img-small">
                            <img :src="`https://image.tmdb.org/t/p/w342/${tv.poster_path}`" alt="">
                        </div>
                        <h5 >{{tv.title}}</h5>
                        <p >{{tv.original_title}}</p>
                        <p v-if="tv.original_language === 'en' ">Original Language : <img src="../assets/united-kingdom.png" alt=""></p>
                        <p v-else>{{tv.original_language}}</p>
                        <p>{{tv.vote_average}} <i class="fa-regular fa-star"></i></p>
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
        height: 99.6%;
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
</style>