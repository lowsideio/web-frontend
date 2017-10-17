<template>
  <div id="app">
    <img src="./assets/lowside-logo-blank.svg">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'app',
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>


<style scoped>
  img {
    height: 128px;
    width: 128px;
  }

  @media screen and (max-device-width: 414px) and (max-device-height: 776px) {
    img {
      height: 300px;
      width: 300px;
    }
  }

</style>
