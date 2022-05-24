<template>
  <main>
        <h1>{{titolo}}</h1>
        <CardComp :items="items"/>
  </main>
</template>

<script>
import CardComp from './CardComp.vue';
export default {
    name: "MainComp",
    props: {
        items: Array,
        selectValue: String,
        titolo:String
    },
    components: {CardComp },
}
</script>

<style lang="scss" scoped>
@import '../assets/style/vars';

main{
    min-height: calc(100vh - 80px);
    text-align: center;
    h1{
    color: $primary-color;
    padding: 20px 0;
}
    
}

</style>