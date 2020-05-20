<template>
  <div class="container">
    <div
      class="colorShow"
      :style="{ background: color.hex }"
    ></div>
    <ul class="cmyk" v-for="(color, index) in color.CMYK" :key="index">
      <el-progress
        class="circle-progress-bar" 
        type="circle"
        color="#909399"
        :width="24"
        :show-text="false"
        :percentage="color">
      </el-progress>
    </ul>
    <div class="colorName">{{ color.name }}</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  props: ['color'],
}
</script>

<style scoped>
.container {
  width: 75px;
  height: 160px;
  /* background: #ddd; */
  margin: 2px;
}
.colorShow {
  width: 50px;
  height: 6px;
  margin: 8px auto;
  margin-top: 0;
  /* background: #999; */
}
</style>