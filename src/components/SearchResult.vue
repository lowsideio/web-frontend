
<template>
  <router-link v-bind:to="`/motorcycles/${motorcycle.slug}`">
    <div class="container">
      <div class="brand">
        <div
          class="brand-logo"

          v-if="this.getLogo(motorcycle.brand)"
          v-bind:style="{ backgroundImage: `url(${this.getLogo(motorcycle.brand)})` }"
        />
        <div
          class="brand-no-logo"

          v-else
        />
      </div>
      <div class="info">
        <div class="model">
          <div class="brand-name">{{ motorcycle.brand }}</div>
          {{ motorcycle.model }}
        </div>
      </div>
      <div class="category">
        <img alt="category illustration" v-bind:src="this.getCategoryIllustration(motorcycle.category)" />
      </div>
    </div>
  </router-link>
</template>

<script type = "text/javascript" >

import { brands, categories } from '../helpers';

export default {
  name: 'search-result',
  props: ['motorcycle'],
  methods: {
    getLogo: brands.logo,
    getCategoryIllustration: categories.illustration,
  },
};
</script>

<style scoped>

  .container {
    position: relative;

    background-color: #F6F7F8;
    width: 60%;
    margin: 0 auto;
    margin-top: .5rem;
    overflow: visible;
  }

  .container:hover {
    background-color: rgb(32, 164, 243);

    -webkit-transition: background-color 200ms linear;
    -ms-transition: background-color 200ms linear;
    transition: background-color 200ms linear;

    cursor: pointer;
  }

  .brand-no-logo {
    background-image: url('/static/icons/unknown.png');
  }

  .brand-logo, .brand-no-logo {
    display: inline-block;

    width: 50%;
    height: 100%;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: 50% 50%;
  }

  .brand-name {
    font-weight: bolder;
    display: inline-block;
  }

  .info, .category {
    display: inline-block;
    padding: 1rem;
  }

  .brand {
    position: absolute;

    width: 4rem;
    height: 100%;
    left: 0;
    top: 0;

    color: #FFF;
    border-right: 1px solid #B2B2B2;
  }

  .category {
    position: absolute;

    height: calc(100% - 2rem);
    min-width: 100px;

    right: 0;
    top: 0;
  }

  .category img {
    max-height: 100%;
  }

  .info {
    padding-left: calc(25% - 2rem - 1rem);
    padding-right: calc(25% - 2rem - 1rem);
    width: calc(75% - 2rem);
  }

  .model {
    text-align: left;
    padding: .5rem;
  }

  .power {
    display: inline-block;
  }

  .cc {
    display: inline-block;
  }

  @media screen and (max-device-width: 736px) {
    .container {
      width: 78%;
    }
  }

  @media screen and (max-device-width: 414px) and (max-device-height: 776px) {
    .container {
      width: 100vw;
    }

    .info {
      padding-left: 1rem;
      padding-right: calc(25% - 2rem);
      width: calc(60% - 2rem);
    }

    .category {
      position: absolute;

      height: 100%;
      min-width: 3rem;

      right: 0;
      top: 0;
    }
  }

</style>
