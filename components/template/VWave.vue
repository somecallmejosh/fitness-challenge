<template>
  <div class="wave w-full block" aria-hidden="true" :class="color">
    <svg
      v-if="layout == 'top'"
      class="fill-current flex"
      viewBox="0 0 1440 147"
      preserveAspectRatio="none"
    >
      <path
        d="M0,147l80-22c80-22,240-66.15,400-66.15s320,44.1,480,41.67c160-2.62,320-51.32,400-76L1440,0H0Z"
      />
    </svg>
    <svg
      v-if="layout == 'bottom'"
      class="fill-current flex"
      viewBox="0 0 1440 147"
      preserveAspectRatio="none"
    >
      <path
        d="M1440,0l-80,22.05C1280,44.1,1120,88.2,960,88.2S640,44.1,480,46.53c-160,2.62-320,51.32-400,76L0,147H1440Z"
      />
    </svg>
  </div>
</template>

<script>
export default {
  props: {
    layout: {
      type: String,
      default: 'top'
    },
    color: {
      type: String,
      default: 'text-gray-80'
    }
  }
}
</script>
<style>
.wave {
  font-size: 0;
}
</style>
