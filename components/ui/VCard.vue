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
      class="p-6 pt-32 pb-12 shadow-2xl rounded-lg -mt-32 flex flex-col flex-grow"
    >
      <div>
        <slot></slot>
      </div>
      <div class="mt-auto ">
        <nuxt-link
          :to="
            `${payload.type ? `${payload.type}/` : ''}${
              payload.attributes.slug
            }`
          "
          class="rounded-pill bg-orange-100 text-white font-bold py-2 px-12 hover:bg-orange-90"
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
