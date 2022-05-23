<template>
  <header class="d-flex justify-content-between py-3">
      <div class="logo ms-3"><img src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt=""></div>
      <div class="filter-bar d-flex">
            <select 
            v-model="selected" 
            @change="$emit('changeValue', selected)"
            class="form-control mx-3">
                <option value="all" selected>Scegli una categoria</option>
                <option value="movie">Film</option>
                <option value="tv">Serie TV</option>
            </select>
            <div class="search-bar d-flex">
                <input 
                v-model="inputSearch" 
                @keyup.enter="$emit('changeInput', inputSearch )" 
                class="form-control" 
                type="text"
                placeholder="Cerca il tuo film">
            </div>  
            <button @click="$emit('changeInput', inputSearch )" class="btn btn-dark mx-3">Cerca</button>
      </div>
      
  </header>
</template>

<script>
export default {
    name: "HeaderComp",
    data(){
        return{
            inputSearch: "",
            selected: "all"
        }
    },
    
};
</script>

<style lang="scss" scoped>
@import '../assets/style/vars';

header{
    height: 80px;
    background-image: linear-gradient($secondary-color,lighten($primary-color,10%));
    select{
        min-width: 160px;
    }
    .search-bar{
        min-width: 160px;
    }
    .logo img{
        max-width: 100px;
    }
}
</style>