<template>
  <div class="bg-gray-1">
    <client-only>
      <VDrawer
        v-model="showDrawer"
        transition="slide-right"
        bg-transition="fade"
        no-scroll
        :classes="{ content: 'offsite relative' }"
      >
        <button
          class="absolute right-0 h-4 w-6 mr-4 mt-4 flex items-center hover:opacity-75"
          @click="showDrawer = !showDrawer"
        >
          <div aria-hidden="true">
            <div
              class="absolute left-0 h-1 w-6 bg-gray-90 origin-center rotate-45 transform"
            ></div>
            <div
              class="absolute right-0 h-1 w-6 bg-gray-90 origin-center -rotate-45 transform"
            ></div>
          </div>
        </button>
        <nav class="mt-8" @click="showDrawer = !showDrawer">
          <nuxt-link class="block" to="/" exact>
            Home
          </nuxt-link>
          <nuxt-link
            v-for="(link, index) in nav"
            :key="index"
            class="block"
            :to="link.url"
          >
            {{ link.label }}
          </nuxt-link>
        </nav>
      </VDrawer>
    </client-only>
    <v-header @menuToggle="updateMenu" />
    <main>
      <nuxt />
    </main>
    <v-footer :nav-data="nav" />
  </div>
</template>
<script>
import { VDrawer } from 'vuetensils'
import VFooter from '~/components/layout/template/VFooter.vue'
import VHeader from '~/components/layout/template/VHeader.vue'
export default {
  components: { VDrawer, VFooter, VHeader },
  data() {
    return {
      showDrawer: false,
      nav: [
        {
          label: 'Group Challenges',
          url: '/challenges'
        },
        {
          label: 'Workout Plans',
          url: '/workout-plans'
        },
        {
          label: 'Meal Plans',
          url: '/meal-plans'
        },
        {
          label: 'About Us',
          url: '/about'
        },
        {
          label: 'Contact',
          url: '/contact'
        }
      ]
    }
  },
  methods: {
    updateMenu() {
      this.showDrawer = !this.showDrawer
    }
  }
}
</script>
