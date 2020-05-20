<template>
  <ul class="colorNav">
    <colorNavItem class="item"
      v-for="(color, index) in colors"
      :key="index"
      :color="color"
      @click.native="emitChangeColor(color)"
    ></colorNavItem>
  </ul>
</template>

<style scoped>
ul {
  list-style: none;
}
</style>

<script>
import colorNavItem from './ColorNavItem'
import EventBus from '../event-bus'

import colors from '../colors.json'

export default {
  data () {
    return {
      colors: colors
    }
  },
  components: {
    colorNavItem
  },
  methods: {
    emitChangeColor(colorSetItem) {
      EventBus.$emit('changeColor', colorSetItem)
    }
  }
}
</script>

<style scoped>
.colorNav {
  /* display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap; */
  display: grid;
  grid-template-columns: repeat(5, 75px);
  grid-template-rows: 1fr 1fr 1fr;

  overflow: auto;
}

.item {
  margin: 2px auto;
}
</style>