<template>
  <div class="bg-gray-1">
    <client-only>
      <VDrawer
        v-model="showDrawer"
        transition="slide-right"
        bg-transition="fade"
        no-scroll
        :classes="{ content: 'bg-white offsite relative' }"
      >
        <button
          class="absolute right-0 h-4 w-6 mr-4 mt-4 flex items-center hover:opacity-75"
          aria-label="Close menu"
          @click="showDrawer = !showDrawer"
        >
          <div aria-hidden="true">
            <v-icon name="x" />
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
          <nuxt-link v-if="!$auth.loggedIn" to="/auth/register"
            >Become a Member</nuxt-link
          >
        </nav>
        <div class="p-4" @click="showDrawer = !showDrawer">
          <button v-if="$auth.loggedIn" class="btn btn-default w-full">
            Logout
          </button>
          <div v-else>
            <nuxt-link class="btn btn-default mb-2" to="/auth/login"
              >Login</nuxt-link
            >
          </div>
        </div>
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
<style>
.vts-drawer {
  background: rgba(0, 0, 0, 0.5);
}

.vts-drawer__content {
  @apply bg-white text-gray-90;
  transition: transform 0.3s;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.slide-right-enter-active,
.slide-right-leave-active {
  transition: opacity 0.5s, transform 0.5s;
}

.slide-right-enter,
.slide-right-leave-to {
  opacity: 0;
  transform: translateX(-100%);
}

.offsite a:not(.btn) {
  @apply block border-b border-gray-10 block p-4 font-bold;
}

.offsite a:not(.btn):hover,
.offsite .nuxt-link-active {
  @apply text-orange-100;
}
.offsite .nuxt-link-active {
  cursor: default;
}
</style>
