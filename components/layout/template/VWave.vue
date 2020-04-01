<template>
  <div class="wave w-full block" aria-hidden="true" :class="color">
    <svg
      v-if="layout == 'top'"
      class="fill-current flex -mt-px"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1195.1 126"
      preserveAspectRatio="none"
    >
      <path
        d="M66.39,107.7c66.4-18.3,199.19-54.9,332-54.9S664,89.4,796.73,87.38s265.58-42.59,332-63.07L1195.1,4h-.1V0H0V126Z"
        transform="translate(0 0)"
      />
    </svg>
    <svg
      v-if="layout == 'bottom'"
      class="fill-current flex -mb-px"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1195.1 126"
      preserveAspectRatio="none"
    >
      <path
        d="M1128.71,18.3c-66.4,18.3-199.19,54.9-332,54.9S531.16,36.6,398.37,38.62c-132.79,2.17-265.58,42.59-332,63.07L0,122H.1v4h1195V0Z"
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
