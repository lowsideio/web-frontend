<template>
  <div class="container">
    <div class="illustration" />
    <div class="data">{{ data }}L</div> Tank Capacity
  </div>
</template>

<script type = "text/javascript">
export default {
  name: 'Cc',
  props: ['data'],
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
  background-image: url('/static/icons/motorcycle-parts/tank-capacity.svg');
  height: 3rem;
  width: 3rem;
}


</style>
