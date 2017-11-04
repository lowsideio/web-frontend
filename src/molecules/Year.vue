<template>
  <div class="container">
    <div class="data">{{ data }}</div> YEAR
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

.data {
  display: inline-block;
  vertical-align: middle;
}

</style>
