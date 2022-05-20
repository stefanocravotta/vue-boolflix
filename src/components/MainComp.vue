<template>
  <main>
      <div class="container flex-wrap container-card d-flex justify-content-center py-4">
          <div v-for="film in printCategory" :key="film.id" class="sc-card m-2 flip-card">
                <div class="flip-card-inner">
                    <div v-if="film.poster_path !== null" class="flip-card-front" id="copertina">
                        <img :src="`https://image.tmdb.org/t/p/w500/${film.poster_path}`" alt="">
                    </div>
                    <div v-else class="flip-card-front">
                        <img src="https://media.istockphoto.com/vectors/internet-error-page-not-found-in-vertical-orientation-for-mobile-a-vector-id1252582562?k=20&m=1252582562&s=170667a&w=0&h=O1wwtikUXIdVVBKzIEDHvd9MDnwoeuClx90cuIq1SEo=" alt="">
                    </div>

                    <div id="descrizione" class="flip-card-back d-flex flex-wrap flex-column align-items-center">
                        <div class="cont-img-small">
                            <img :src="`https://image.tmdb.org/t/p/w500/${film.poster_path}`" alt="">
                        </div>
                        <h5 v-if="film.media_type === 'movie'">{{film.title}}</h5>
                        <h5 v-else>{{film.name}}</h5>
                        <p v-if="film.media_type === 'movie'">Titolo Originale : {{film.original_title}}</p>
                        <p v-else>Titolo Originale : {{film.original_name}}</p>
                        <p>Lingua Originale : {{film.original_language}}</p>
                        <p>Voto : {{film.vote_average}}</p>
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
        films:Array,
        selectValue:String
    },
    computed : {
        printCategory(){
            let categoryFiltered = [];

            if(this.selectValue === "all"){
                categoryFiltered = this.films
            }else if(this.selectValue !== "all"){
                categoryFiltered = this.films.filter(film =>{
                    return film.media_type.includes(this.selectValue)
                })  
            }
            return categoryFiltered
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/style/vars';

main{
    min-height: calc(100vh - 80px);
    background-image: linear-gradient(lighten($primary-color,10%),$secondary-color);
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
}

</style>