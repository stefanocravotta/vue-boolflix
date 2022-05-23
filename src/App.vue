<template>
  <div id="app">

    <HeaderComp @changeInput= 'assignInput' @changeValue= 'changeList'/>

    <MainComp :movies = "movies" :tvs="tvs" :selectValue="selectValue" />

  </div>
</template>

<script>
import HeaderComp from './components/HeaderComp.vue';
import MainComp from './components/MainComp.vue';
import axios from 'axios'


export default {
  name: 'App',
  components: {
    HeaderComp,
    MainComp
},
data(){
  return{
    baseUrl: "https://api.themoviedb.org/3/search/",
    trendingUrl: "https://api.themoviedb.org/3/trending/",
    movies: [],
    tvs: [],
    collection: [],
    paramsUrl: {
        api_key: "0db6a8bb5fd5afb93efc8955fa3dcf64",
        language: "it-IT",
        query: ""
    },
    selectValue:"all"
    
  }
},
mounted(){
  this.getAPITrending()
  console.log(this.selectValue);
},
methods: {
  getAPIMovie(){
    axios.get(`${this.baseUrl}movie`, {
      params: this.paramsUrl
    })
    .then(r =>{
      this.movies = r.data.results;
      console.log(this.movies);
    })
    .catch(e =>{
      console.log(e);
    }),
    axios.get(`${this.baseUrl}tv`, {
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
  getAPITrending(){
    axios.get(`${this.trendingUrl}movie/week`, {
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

  assignInput(inputValue){
    this.paramsUrl.query = inputValue;
    this.getAPIMovie()
  },
  changeList(selectValue){
    this.selectValue = selectValue;
    console.log(this.selectValue);
  }
},
}
</script>

<style lang="scss">
@import './assets/style/global';
@import './assets/style/vars';

</style>
