<template>
  <div class="container">
    <div class="data">{{ data }}</div>
    <div class="illustration" />
    <div class="data">Gearbox</div>
  </div>
</template>

<script type = "text/javascript">
export default {
  name: 'Gearbox',
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
  background-image: url('/static/icons/motorcycle-parts/gearbox.svg');
  height: 3rem;
  width: 3rem;
}


</style>
