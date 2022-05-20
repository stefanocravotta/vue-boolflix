<template>
  <div>

    <HeaderComp />

    <MainComp />

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
mounted(){
  this.getAPI()
},
data(){
  return{
    baseUrl: "https://api.themoviedb.org/3/search/movie",
    paramsUrl: {
      api_key: "0db6a8bb5fd5afb93efc8955fa3dcf64",
      language: "it-IT",
      query: "Harry Potter"
    }
  }
},
methods: {
  getAPI(){
    axios.get(this.baseUrl, {
      params: this.paramsUrl
    })
    .then(r =>{
      console.log(r.data);
    })
    .catch(e =>{
      console.log(e);
    })
  }
}
}
</script>

<style lang="scss">

</style>
