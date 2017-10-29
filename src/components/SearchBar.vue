<template>
  <div>
    <input v-model="inputValue" type="text" @input="search()">

    {{/* Display results */}}
    <span v-for="result of results">
      <search-result :motorcycle="result" />
    </span>

    <li v-for="error of errors">
     {{JSON.stringify(error)}}
     {{error.message}}
   </li>
  </div>
</template>

<script type = "text/javascript" >
import axios from 'axios';

export default {
  data() {
    return {
      inputValue: '',
      results: [],
      errors: [],
    };
  },

  methods: {
    async search() {
      if (!this.inputValue) { return; }
      try {
        const response = await axios.get(`https://api.lowside.io/search/${this.inputValue}`);
        this.$ga.event({
          eventCategory: 'user-action',
          eventAction: 'search',
          eventLabel: 'main-search-bar',
          eventValue: this.inputValue,
        });
        this.results = response.data;
      } catch (e) {
        this.errors.push(e);
      }
    },
  },
};
</script>

<style scoped>

input {
  min-width: 60%;
  height: 3rem;
  font-size: 2.8rem;
  font-weight: lighter;
  padding: .5rem;
  background-color: #f6f7f8;
  border: 0;
  box-shadow: 1px 2px 1px 0px;
  color: #011627;
  text-transform: uppercase;
}

</style>
