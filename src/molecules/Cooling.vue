<template>
  <div class="container">
    <div class="data">COOLING</div>
    <div
      class="illustration"
      v-bind:style="{ backgroundImage: `url(${this.illustration})` }"
    />
    <div class="data">{{ data }}</div>
  </div>
</template>

<script type = "text/javascript">
export default {
  name: 'Cooling',
  props: ['data'],
  data() {
    let illustration;
    if (this.data === 'liquid') {
      illustration = '/static/icons/motorcycle-parts/cooling-liquid.svg';
    }
    if (this.data === 'air') {
      illustration = '/static/icons/motorcycle-parts/cooling-air.svg';
    }
    return {
      illustration,
    };
  },
};
</script>

<style scoped>

.container {
  padding: 1rem;
  text-align: center;
}

.data {
  font-size: 2rem;
}

.data, .illustration {
  display: inline-block;
  vertical-align: middle;
}

.illustration {
  height: 3rem;
  width: 3rem;
}


</style>
