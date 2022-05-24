<template>

<div>
    <h1>CARICAMENTO IN CORSO . . .</h1>
    <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
</div>
</template>

<script>
export default {
    name: "LoadingComp"
}
</script>

<style lang="scss" scoped>
@import '../assets/style/vars';

h1{
    margin-top: 80px;
    color: darken($primary-color, 10%);
}
.lds-ring {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-ring div {
  box-sizing: border-box;
  display: block;
  position: absolute;
  width: 64px;
  height: 64px;
  margin: 8px;
  border: 10px solid  $primary-color;
  border-radius: 50%;
  animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
  border-color: $secondary-color $primary-color transparent transparent;
}
.lds-ring div:nth-child(1) {
  animation-delay: -0.45s;
}
.lds-ring div:nth-child(2) {
  animation-delay: -0.3s;
}
.lds-ring div:nth-child(3) {
  animation-delay: -0.15s;
}
@keyframes lds-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>