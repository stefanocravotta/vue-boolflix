<template>
  <div id="app">

    <HeaderComp @changeInput= 'assignInput' @changeValue= 'changeList'/>

    <MainComp :films = "films" :selectValue="selectValue" />

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
    baseUrl: "https://api.themoviedb.org/3/search/multi",
    films: [],
    paramsUrl: {
        api_key: "0db6a8bb5fd5afb93efc8955fa3dcf64",
        language: "it-IT",
        query: ""
    },
    selectValue:""
    
  }
},
mounted(){
  
},
methods: {
  getAPI(){
    axios.get(this.baseUrl, {
      params: this.paramsUrl
    })
    .then(r =>{
      this.films = r.data.results;
      console.log(this.films);
    })
    .catch(e =>{
      console.log(e);
    })
  },
  assignInput(inputValue){
    this.paramsUrl.query = inputValue;
    this.getAPI()
  },
  changeList(selectValue){
    this.selectValue = selectValue
  }
},
}
</script>

<style lang="scss">
@import './assets/style/global';
@import './assets/style/vars';

</style>
