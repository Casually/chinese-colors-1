<template>
  <div class="container">
    <div class="name">
      {{ colorInfo.name }}
    </div>
    <div class="pinyin"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      name: '水色',
    }
  },
  props: ['colorInfo']
}
</script>

<style scoped>
.name {
  font-size: 3.2rem;
  writing-mode: vertical-lr;
  letter-spacing: 0.5rem;
  margin: 40px auto;
}
</style>