<template>
  <div>
    <input v-model="inputValue" type="text" @input="search()">
    <div class="sponsor-algolia">
      <a rel="noopener" href="https://algolia.com" target="_blank">
        <img alt="algolia-logo" src="/static/sponsors/search-by-algolia-white.png" />
      </a>
    </div>
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
        if (window.gtag) {
          window.gtag('event', 'search', {
            event_category: 'user-action',
            event_action: 'search',
            event_label: 'main-search-bar',
          });
        }
        const response = await axios.get(`${process.env.API_URL}/search-algolia/${this.inputValue}`);
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
  max-width: 100%;
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

.sponsor-algolia {
  height: 1rem;
  max-width: 60%;
  margin: 0 auto;
  margin-top: .75rem;
  text-align: right;
}

.sponsor-algolia img {
  height: 100%;
}

</style>
