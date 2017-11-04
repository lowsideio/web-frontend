<template>
  <div v-if="data" class="container">
    <div class="illustration" />
    <div class="data">{{ data || '?' }}</div>Ground Clearence
  </div>
</template>

<script type = "text/javascript">
export default {
  name: 'GroundClearence',
  props: ['data'],
};
</script>

<style scoped>

.container {
  display: inline-block;
  padding: 1rem;
}

.data {
  font-size: 2rem;
}

.data, .illustration {
  display: inline-block;
  vertical-align: middle;
}

.illustration {
  background-image: url('/static/icons/motorcycle-parts/ground-clearence.svg');
  height: 5rem;
  width: 5rem;
}


</style>
