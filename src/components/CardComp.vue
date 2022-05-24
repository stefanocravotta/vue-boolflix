<template>
  <div>
    <vue-glide class='container-card'>
        <vue-glide-slide class="card" v-for="item in items" :key="item.id" >
            <div v-if="item.poster_path !== null" class="card-front">
                <img :src= "`https://image.tmdb.org/t/p/w342/${item.poster_path}`" :alt="item.title || item.name">
            </div>
            <div class="image-not-found" v-else>
                <img src="../assets/img/1.png" alt="">
            </div>
            <div class="descrizione-back">
                <div>
                    <h5>{{item.title || item.name}}</h5>
                </div> 
                <div class="my-3">
                     <p >{{item.original_title || item.original_name}}</p>
                </div>
                <div>
                    <p>Lingua Originale : <lang-flag :iso= "item.original_language" /></p>
                </div>
                <div id="trama" class="my-3">
                    <p>{{item.overview}}</p>
                </div> 
                <div class="align-items-center justify-content-center d-flex ">
                    <p>Voto<star-rating id="stars" :star-size="20" :rating="starRating(item.vote_average)"></star-rating></p>
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
</template>

<script>
export default {
    name: "CardComp",
    props:{
        items: Array,
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


.container-card{
    padding: 20px 40px;
}

.card{
    position: relative;
    max-width: 270px ;
    background-color: transparent;
    transition: transform 0.8s;
    transform-style: preserve-3d;
    border-radius: 15px;
    cursor:pointer;
    &:hover{
        transform: rotateY(180deg);
    }
    img{
    border-radius: 15px;
    max-width: 100%;

    }
    .image-not-found img{
    width: 100%;
    }

}

.descrizione-back{
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    padding: 30px ;
    color: white;
    transform: rotateY(180deg);
    background-image: linear-gradient($secondary-color,lighten($primary-color,10%));
    border-radius: 15px;
    #trama{
        margin: 5px 0;
        max-height: 30%;
        overflow-y: auto;}
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