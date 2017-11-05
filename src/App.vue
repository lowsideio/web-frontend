<template>
  <div id="app">
    <header>
      <router-link to="/">
        <div class="logo" />
        <div class="title-description">
          <div class="title"><h1>lowside.io</h1></div>
          <div class="description">MOTORCYCLES SEARCH</div>
        </div>
      </router-link>
    </header>
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
  font-family: 'Quicksand', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

body: {
  margin: 0;
}
a { color: inherit; }

@media screen and (max-device-width: 414px) and (max-device-height: 776px) {
  .container {
    width: 100vw;
  }
}


</style>


<style scoped>
  a {
    text-decoration: inherit;
    color: inherit;
  }
  img {
    height: 128px;
    width: 128px;
  }

  h1 {
    margin: 0;
  }

  header {
    text-align: center;
    margin-bottom: 2rem;
  }

  .logo {
    height: 7rem;
    width: 7rem;
    background-image: url(/static/lowside-logo.svg);
    background-size: contain;
    background-repeat: no-repeat;
    background-position: 50% 50%;
  }

  .logo, .title-description {
    display: inline-block;
    vertical-align: middle;
    padding-left: 1rem;
    text-align: left;
  }

  .title {
    color: #ff3366;
    font-family: 'Quicksand', sans-serif;
    font-size: 1.5rem;
  }
  .description {
    font-family: 'Permanent Marker', cursive;
    color: #20a4f3;
  }

  @media screen and (max-device-width: 414px) and (max-device-height: 776px) {
    img {
      height: 300px;
      width: 300px;
    }
  }

</style>
