<template>
  <span :style="cssVars" class="icon" v-html="getIconIndex"></span>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: 'check'
    },
    size: {
      type: String,
      default: '2rem'
    }
  },
  computed: {
    cssVars() {
      return {
        '--icon-width': this.size,
        '--icon-height': this.size
      }
    },
    getIconIndex() {
      const getIcon = this.$store.state.icons.icon.filter(
        (item) => item.name === this.name
      )
      return getIcon.length
        ? getIcon[0].template
        : '<svg class="error-icon h-20 w-20" fill="#ff0000" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" class="w-8 h-8"><path d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>'
    }
  }
}
</script>

<style>
.icon {
  @apply flex items-center;
}
.icon svg:not(.error-icon) {
  height: var(--icon-height);
  width: var(--icon-width);
}
</style>
