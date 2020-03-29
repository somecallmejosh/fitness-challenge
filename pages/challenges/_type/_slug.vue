<template>
  <div>
    <v-hero-primary />
    <v-wave layout="top" color="text-orange-100" />
    <v-page-wrap>
      <h1>Page Header</h1>
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
  }
}
</script>

<style></style>
