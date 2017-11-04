<template>
  <div class="container">
    <div class="illustration" />
    <div class="size">{{ data }}</div>ps/cv
  </div>
</template>

<script type = "text/javascript">
export default {
  name: 'Power',
  props: ['data'],
};
</script>

<style scoped>

.container {
  display: inline-block;
  padding: 1rem;
}

.size {
  font-size: 2rem;
}

.size, .illustration {
  display: inline-block;
  vertical-align: middle;
}

.illustration {
  background-image: url('/static/icons/motorcycle-parts/power.svg');
  height: 3rem;
  width: 3rem;
}

</style>
