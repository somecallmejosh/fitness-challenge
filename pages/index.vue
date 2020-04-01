<template>
  <div>
    <v-hero-primary />
    <v-wave layout="top" color="text-gray-80" />
    <div class="container mx-auto py-20 px-4">
      <h1 class="text-gray-20 text-4xl lg:text-6xl text-center mb-16 lg:mb-24">
        The Fitness Challenge
      </h1>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 text-center">
        <nuxt-link
          v-for="(teaser, index) in teasers"
          :key="index"
          :to="teaser.url"
        >
          <client-only>
            <VImg
              :classes="{
                img: 'mx-auto rounded-blob-2'
              }"
              :src="
                `${teaser.img}?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=395&h=263&q=80`
              "
              width="395"
              height="263"
              alt=""
            />
          </client-only>
          <div class="p-6">
            <p class="font-semibold text-uppercase text-lg text-orange-100">
              {{ teaser.text }}
            </p>
          </div>
        </nuxt-link>
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
  },
  data() {
    return {
      teasers: [
        {
          img:
            'https://images.unsplash.com/photo-1561579890-3ace74d8e378?ixlib=rb-1.2.1',
          text: 'Group Fitness Challenges',
          url: '/challenges'
        },
        {
          img:
            'https://images.unsplash.com/photo-1562771379-44b243dedac5?ixlib=rb-1.2.1',
          text: 'Inidividual Workout Plans',
          url: '/workout-plans'
        },
        {
          img:
            'https://images.unsplash.com/photo-1543352632-fea6d4f83e78?ixlib=rb-1.2.1',
          text: 'Meal Planning & Preparation',
          url: '/meal-plans'
        }
      ]
    }
  }
}
</script>

<style></style>
