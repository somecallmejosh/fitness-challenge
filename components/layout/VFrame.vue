<template>
  <div :style="cssVars" class="frame bg-gray-1">
    <slot />
  </div>
</template>
<script>
export default {
  props: {
    ratio: {
      type: String,
      default: '16:9'
    }
  },
  computed: {
    cssVars() {
      return {
        '--width': this.ratio.substr(0, this.ratio.indexOf(':')),
        '--height': this.ratio.substr(
          this.ratio.indexOf(':') + 1,
          this.ratio.length
        )
      }
    }
  }
}
</script>
<style scoped>
.frame {
  overflow: hidden;
  position: relative;
  padding-bottom: calc(var(--height) / var(--width) * 100%);
  height: 0;
}

.frame > img,
.frame > video,
.frame > iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.frame > img {
  object-fit: cover;
}
</style>
