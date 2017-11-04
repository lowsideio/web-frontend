<template>
  <div class="container">
    <div class="illustration" />
    <div class="data">{{ data }}</div>kg
  </div>
</template>

<script type = "text/javascript">
export default {
  name: 'DryWeight',
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
  background-image: url('/static/icons/motorcycle-parts/cc.svg');
  height: 3rem;
  width: 3rem;
}

</style>
