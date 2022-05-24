<template>
  <div class="text-center " id="app">

    <HeaderComp @startSearch="startSearch"/>

    <div v-if="!isLoading">
      <MainComp v-if="movie.length > 0"  :items = "movie" titolo="Film" />
      <MainComp v-if="tv.length > 0" :items = "tv" titolo="Serie Tv"/>

      <h1 class="no-result" v-if="movie.length === 0 && tv.length === 0">Nessun risultato corrisponde ai criteri di ricerca</h1>
    </div>
    <LoadingComp v-else />
    

  </div>
</template>

<script>
import HeaderComp from './components/HeaderComp.vue';
import MainComp from './components/MainComp.vue';
import axios from 'axios'
import LoadingComp from './components/LoadingComp.vue';


export default {
  name: 'App',
  components: {
    HeaderComp,
    MainComp,
    LoadingComp
},
data(){
  return{
    baseUrl: "https://api.themoviedb.org/3/search/",
    trendingUrl: "https://api.themoviedb.org/3/trending/",
    movie: [],
    tv: [],
    paramsUrl: {
        api_key: "0db6a8bb5fd5afb93efc8955fa3dcf64",
        language: "it-IT",
        query: ""
    },
    selectValue:"all",
    isStart: false,
    isLoading: true
    
  }
},
mounted(){
  this.getAPI()
},
methods: {
  getAPI(type = ''){
    let endPoint = "https://api.themoviedb.org/3/trending/movie/week"
    if(type !== ''){
      endPoint = this.baseUrl + type;
    }else{
      type = "movie"
    }
    axios.get( endPoint, {
      params: this.paramsUrl
    })
    .then(r =>{
      this[type] = r.data.results;
      if(type.length > 0) this.isLoading = false;
      
    })
    .catch(e =>{
      console.log(e);
    })
   
  },
  getAPITrending(){
    axios.get(``, {
      params: this.paramsUrl
    })
    .then(r =>{
      this.movies = r.data.results;
      console.log(this.movies);
    })
    .catch(e =>{
      console.log(e);
    }),
    axios.get(`${this.trendingUrl}tv/week`, {
      params: this.paramsUrl
    })
    .then(r =>{
      this.tvs = r.data.results;
      console.log(this.tvs);
    })
    .catch(e =>{
      console.log(e);
    })
  },

  startSearch(selectValue , inputValue){
    this.movie= [];
    this.tv= [];
    this.paramsUrl.query = inputValue;
    if(inputValue.length > 0){
      if(selectValue === 'all'){
       this.getAPI('movie')
       this.getAPI('tv') 
      }else{
        this.getAPI(selectValue)
      }
    }
  },
  toggleStart(){
    this.isStart = !this.isStart
  }
},
}
</script>

<style lang="scss">
@import './assets/style/global';
@import './assets/style/vars';

#app{
  min-height: 100vh;
  background-image: linear-gradient($secondary-color,darken($primary-color, 20%));
}
.no-result{
  margin-top: 80px;
  color: white;
}
.start-cont{
  min-height: calc(100vh - 200px);
}
.init-container{
  background-image: linear-gradient($secondary-color);
  border-radius: 30px;
  color: darken($primary-color,10%);
  box-shadow: 5px 15px 60px $secondary-color;
  &:hover{
  box-shadow: 10px 30px 120px $secondary-color;
  }
}

button#start{
  border: 1px solid $primary-color;
  padding: 10px 40px;
  margin: 30px 0;
  background-color: $secondary-color;
  color: $primary-color;
  border-radius: 10px;
  &:hover{
  color: $secondary-color;
  background-color: $primary-color;
  border: 1px solid $secondary-color;

  }
}
</style>
