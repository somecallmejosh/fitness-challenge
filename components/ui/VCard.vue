<template>
  <div class="flex flex-col">
    <v-frame ratio="4:3" class="w-full">
      <client-only>
        <VImg
          :classes="{
            img: 'w-full rounded-blob-2',
            root: 'w-full'
          }"
          :src="
            `https://images.unsplash.com/photo-1534258936925-c58bed479fcb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=300&q=80`
          "
          alt=""
        />
      </client-only>
    </v-frame>
    <div
      class="px-6 pt-32 pb-8 shadow-2xl rounded-lg -mt-32 flex flex-col flex-grow"
    >
      <div class="mt-4 mb-8">
        <slot></slot>
      </div>
      <div class="mt-auto">
        <nuxt-link
          :to="
            `challenges/${payload.type ? `${payload.type}/` : ''}${
              payload.attributes.slug
            }`
          "
          class="btn btn-default"
          >More Info</nuxt-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    payload: {
      type: Object,
      required: true,
      default() {
        return {
          name: 'Josh'
        }
      }
    }
  }
}
</script>

<style></style>
