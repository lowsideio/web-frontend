<template>
  <div>
    <search-bar></search-bar>
  </div>
</template>

<script>
import SearchBar from '@/organisms/SearchBar';


export default {
  name: 'HelloWorld',
  components: {
    SearchBar,
  },
  data() {
    return {};
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
  color: #f6f7f8;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
