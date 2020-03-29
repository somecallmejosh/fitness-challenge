<template>
  <div>
    <v-hero-primary />
    <v-wave layout="top" color="text-orange-100" />
    <v-page-wrap>
      <h1>{{ challenge.attributes.title }}</h1>
      <div v-html="challenge.attributes.description.body"></div>
    </v-page-wrap>
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
  async fetch({ store, params }) {
    await store.dispatch('challenges/fetchCurrentChallenge', params.slug)
  },
  computed: {
    challenge() {
      return this.$store.state.challenges.current.challenge.data
    }
  }
}
</script>

<style></style>
