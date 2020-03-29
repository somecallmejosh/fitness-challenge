<template>
  <div>
    <v-hero-primary />
    <v-wave layout="top" color="text-gray-80" />
    <div class="container mx-auto py-20 px-4">
      <h1 class="text-gray-20 text-6xl text-uppercase text-center mb-24">
        The Fitness Challenge
      </h1>

      <div class="lg:grid lg:grid-cols-3 lg:gap-12 text-center">
        <div class="">
          <client-only>
            <VImg
              :classes="{
                img: 'mx-auto rounded-blob-2'
              }"
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=395&h=263&q=80"
              width="395"
              height="263"
              alt=""
            />
          </client-only>
          <div class="p-6">
            <p class="font-semibold text-uppercase text-lg text-orange-100">
              Looking Through Your Legs
            </p>
          </div>
        </div>
        <div class="">
          <client-only>
            <VImg
              :classes="{
                img: 'mx-auto rounded-blob-2'
              }"
              src="https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=395&h=263&q=80"
              width="395"
              height="263"
              alt=""
            />
          </client-only>
          <div class="p-6">
            <p class="font-semibold text-uppercase text-lg text-orange-100">
              Butt Stretching FTW
            </p>
          </div>
        </div>
        <div class="">
          <client-only>
            <VImg
              :classes="{
                img: 'mx-auto rounded-blob-2'
              }"
              src="https://images.unsplash.com/photo-1483721310020-03333e577078?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=395&h=263&q=80"
              width="395"
              height="263"
              alt=""
            />
          </client-only>
          <div class="p-6">
            <p class="font-semibold text-uppercase text-lg text-orange-100">
              Tieing Your Shoes
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VHeroPrimary from '~/components/ui/heroes/VHeroPrimary'
import VWave from '~/components/layout/template/VWave'
export default {
  components: {
    VHeroPrimary,
    VWave
  }
}
</script>

<style></style>
