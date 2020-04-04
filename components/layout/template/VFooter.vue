<template>
  <div>
    <v-wave layout="bottom" color="text-gray-90" />
    <footer class="bg-gray-90 py-16 px-4 text-white">
      <div class="container mx-auto">
        <div class="lg:grid lg:grid-cols-3 lg:gap-24">
          <nav class="footer-nav mb-20 lg:mb-0">
            <nuxt-link class="block" to="/" exact>
              Home
            </nuxt-link>
            <nuxt-link
              v-for="(link, index) in navData"
              :key="index"
              class="block"
              :to="link.url"
            >
              {{ link.label }}
            </nuxt-link>
            <nuxt-link v-if="$auth.loggedIn" to="/auth/login">Login</nuxt-link>
            <nuxt-link v-if="$auth.loggedIn" to="/auth/logout"
              >Logout</nuxt-link
            >
            <nuxt-link v-if="!$auth.loggedIn" to="/auth/register"
              >Register</nuxt-link
            >
          </nav>
          <div class="mb-20 lg:mb-0">
            <div class="font-bold text-lg">{{ companyName }}</div>
            <div>{{ companyStreetAddress }}</div>
            <div>{{ companyCity }}, {{ companyState }} {{ companyZip }}</div>
            <a
              class="py-4 font-bold text-lg text-orange-100 block"
              :href="`tel:${companyPhone}`"
              >{{ companyPhone }}</a
            >
            <a
              class="font-bold text-lg text-orange-100 block"
              :href="`mailto:${companyEmail}`"
              >Email</a
            >
          </div>
          <div class="lg:text-right">
            <p class="text-sm">
              ©Copyright {{ new Date().getFullYear() }} {{ companyName }}. All
              rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
<script>
import VWave from '~/components/layout/template/VWave'
export default {
  components: { VWave },
  props: {
    navData: {
      type: Array,
      required: true,
      default: () => []
    }
  },
  data() {
    return {
      companyName: 'Fitness Challenge',
      companyStreetAddress: '1234 Main Street',
      companyCity: 'Somewheresville',
      companyState: 'MA',
      companyZip: '12345',
      companyPhone: '445-532-8899',
      companyEmail: 'mail@fitnesschallenge.com'
    }
  }
}
</script>
<style>
.footer-nav a {
  @apply block border-b border-gray-80 p-4 text-left font-bold;
}

.footer-nav a:hover,
.footer-nav .nuxt-link-active {
  @apply text-orange-100;
}
.footer-nav .nuxt-link-active {
  cursor: default;
}
</style>
