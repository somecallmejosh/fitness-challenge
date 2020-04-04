<template>
  <header class="fixed top-0 left-0 w-screen shadow bg-white z-30">
    <div class="container mx-auto h-16 px-4 flex items-center justify-center">
      <nuxt-link
        to="/"
        class="mr-auto flex items-center text-gray-80 hover:text-gray-70"
      >
        <div
          class="h-8 w-8 lg:h-12 lg:w-12 flex items-center justify-center rounded-blob-2 bg-orange-100 text-white mr-1 lg:mr-2"
        >
          <svg
            class="fill-current h-6 lg:h-8"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 153.32 251.92"
          >
            <path
              d="M115.68,110.51A24.71,24.71,0,0,1,92.52,77.28,86.28,86.28,0,0,1,98,49.66a79.2,79.2,0,0,1,26.55-35.31,8,8,0,0,0-9.72-12.7A95.35,95.35,0,0,0,83,44a102.42,102.42,0,0,0-6.51,35.89c0,3.54.19,6.36.38,8.28L1.39,233.35a12.37,12.37,0,1,0,22,11.41l37.26-71.7a12.19,12.19,0,0,0,5,6.67L97.87,201l7.39,40.84a12.26,12.26,0,0,0,12,10.07,11.74,11.74,0,0,0,2.19-.2,12.25,12.25,0,0,0,9.87-14.24l-8.33-46a12.18,12.18,0,0,0-5.31-8L95.3,170l26.75-51.47a67.38,67.38,0,0,1,6.09,4.61,37.67,37.67,0,0,1,6.84,7.41,11.63,11.63,0,0,1,2.34,6.32,7,7,0,0,1-.87,3.34c-1,1.94-3.32,4.67-8.06,7.72s-11.75,6.32-21.54,9.49A8,8,0,0,0,109.31,173a8.23,8.23,0,0,0,2.48-.39c14.26-4.65,24.13-9.66,31-15.48a32.4,32.4,0,0,0,7.86-9.55,23.12,23.12,0,0,0,2.69-10.74c0-6.28-2.52-11.64-5.58-16-4.66-6.57-10.86-11.49-15.93-15l-.83-.56A24.66,24.66,0,0,1,115.68,110.51Z"
            />
            <circle cx="115.7" cy="85.81" r="22.5" />
          </svg>
        </div>
        <span class="font-bold text-current text-xl leding-tight"
          >Fitness Challenge</span
        >
      </nuxt-link>
      <div class="meta ml-auto flex items-center text-gray-70">
        <nuxt-link
          v-if="!$auth.loggedIn"
          to="/auth/login"
          aria-label="Log in"
          class="hover:opacity-75"
        >
          <v-icon name="user-circle" />
        </nuxt-link>
        <span class="ml-4">
          <button
            class="hover:opacity-75 flex items-center"
            aria-label="Menu Button"
            @click="onClickButton"
          >
            <div aria-hidden="true" class="pl-1">
              <v-icon name="menu" />
            </div>
          </button>
        </span>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  methods: {
    onClickButton() {
      this.$emit('menuToggle')
    }
  }
}
</script>
