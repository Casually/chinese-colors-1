<template>
  <div class="container" :style="{ background: curColorInfo.hex }">
    <div class="inner">
      <colorNav class="colorNav">colorNav</colorNav>
      <article class="data">
        <colorInfo class="colorInfo" :colorInfo="curColorInfo"></colorInfo>
        <colorName class="colorName" :colorInfo="curColorInfo"></colorName>
      </article>
      <header class="header">CHINESE COLORS</header>
    </div>
  </div>
</template>

<script>
import colorNav from "./ColorNav";
import colorInfo from "./ColorInfo";
import colorName from "./ColorName";

import EventBus from "../event-bus";

export default {
  components: {
    colorNav,
    colorInfo,
    colorName
  },
  data() {
    return {
      curColorInfo: {
        CMYK: [28, 12, 17, 0],
        RGB: [199, 210, 212],
        hex: "#c7d2d4",
        name: "鸥蓝",
        pinyin: "oulan"
      }
    };
  },
  created() {
    var _this = this;
    EventBus.$on("changeColor", function(colorSetItem) {
      _this.curColorInfo = colorSetItem;
    });
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

.container {
  width: 100%;
  height: 100vh;
}

.inner {
  position: relative;
  width: 960px;
  height: 100vh;
  margin: 0 auto;
}

.colorSet {
  position: absolute;
  /* bottom: 50px; */
  right: 50px;
  top: 770px;
}

.colorNav {
  /* background: #ccc; */
  width: 400px;
  height: 800px;
  position: absolute;
  top: 50px;
  left: 10px;
}

.data {
  position: absolute;
  /* background: #ddd; */
  width: 300px;
  height: 507px;
  left: 480px;
  top: 50px;
}

.data .colorInfo {
  /* background: lightsteelblue; */
  width: 70px;
  height: 507px;
  /* position: absolute;
  top: 50px;
  left: 440px; */
  position: fixed;
}

.data .colorName {
  /* background: lightseagreen; */
  width: 200px;
  height: 507px;
  /* position: absolute;
  top: 50px;
  left: 680px; */
  position: absolute;
  right: 0;
}

.header {
  /* background: lightpink; */
  width: 50px;
  /* height: 450px; */
  position: absolute;
  right: 50px;
  top: 50px;

  font-size: 3.3rem;
  writing-mode: vertical-rl;
  letter-spacing: 0.6rem;
}
</style>
