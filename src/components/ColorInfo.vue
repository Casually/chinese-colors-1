<template>
  <div class="container">
    <div class="cmyk">
      <div class="cmykWrapper" v-for="(colorNum, index) in transferdColorInfo.CMYK" :key="index">
        <span>{{ index.toUpperCase() }}</span>
        <el-progress 
          class="circle-progress-bar" 
          type="circle"
          color="#909399"
          :width="56"
          :show-text="false"
          :percentage="colorNum">
        </el-progress>
      </div>
    </div>
    <div class="rgb">
      <div class="rgbWrapper" v-for="(colorNum, index) in transferdColorInfo.RGB" :key="index">
        <span>
          {{ index.toUpperCase() }}<span class="blank"></span>{{ colorNum }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['colorInfo'],
  computed: {
    transferdColorInfo () {
      return {
        RGB: {
          R: this.colorInfo.RGB[0],
          G: this.colorInfo.RGB[1],
          B: this.colorInfo.RGB[2]
        },
        CMYK: {
          C: this.colorInfo.CMYK[0],
          M: this.colorInfo.CMYK[1],
          Y: this.colorInfo.CMYK[2],
          K: this.colorInfo.CMYK[3]
        }
      }
    }
  }
}
</script>

<style scoped>
.cmyk, .rgb {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.cmykWrapper, .rgbWrapper {
  width: 100%;
  border-top: 1px solid #eee;
  text-align: justify;
}

.cmykWrapper {
  height: 77px;
  line-height: 77px;
}

.rgbWrapper {
  height: 40px;
  line-height: 40px;
}

.circle-progress-bar {
  display: block;
  float: right;
}

.blank {
  display: inline-block;
  width: 28px
}
</style>