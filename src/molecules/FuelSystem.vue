<template>
  <div class="container">
    <div class="data">Fuel System</div>
    <div
      class="illustration"
      v-bind:style="{ backgroundImage: `url(${this.illustration})` }"
    />
    <div class="data">{{ data }}</div>
  </div>
</template>

<script type = "text/javascript">
export default {
  name: 'FuelSystem',
  props: ['data'],
  data() {
    let illustration;
    if (this.data === 'injection') {
      illustration = '/static/icons/motorcycle-parts/injection.svg';
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
