<template>
  <div class="bg-gray-80 text-white mt-16 py-12 lg:py-24 relative min-h-64">
    <div class="container mx-auto px-4">
      <div class="hero flex items-center">
        <div class="ml-auto lg:w-2/3 mt-20 relative z-10">
          <h1 class="text-5xl lg:text-6xl mb-4">
            Do you want to look and feel great?
          </h1>
          <p class="text-3xl lg:text-5xl leading-tight mb-6 text-orange-100">
            We'll help guide you to the best shape of your life!
          </p>
          <nuxt-link to="/challenges" class="btn btn-inverse">
            Learn More
          </nuxt-link>
        </div>
        <img class="opacity-25 absolute z-0" src="/images/banner.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
.hero img {
  height: 40rem;
}
</style>
