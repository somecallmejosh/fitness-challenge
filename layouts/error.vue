<template>
  <v-page-wrap>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div class="order-2 lg:order-1">
        <v-page-header v-if="error.statusCode === 404"
          >Doh, that page doesn't exist</v-page-header
        >
        <v-page-header v-else>
          An error occurred
        </v-page-header>
        <p>
          This is probably an issue on our end. If you need help, please
          <nuxt-link to="/contact">contact us</nuxt-link>.
        </p>
        <p><nuxt-link to="/" class="btn btn-default">Home page</nuxt-link></p>
      </div>
      <div class="order-1 lg:order-2">
        <img
          class="rounded-blob-3"
          src="https://images.unsplash.com/photo-1473682150760-51d4f94b09d4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&h=400&q=80&crop=edges"
        />
      </div>
    </div>
  </v-page-wrap>
</template>
<script>
export default {
  props: {
    error: {
      type: Object,
      default: () => {}
    }
  }
}
</script>
