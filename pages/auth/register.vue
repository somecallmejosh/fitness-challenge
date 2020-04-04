<template>
  <v-page-wrap>
    <div class="w-full max-w-3xl mx-auto">
      <div class="flex items-center">
        <div class="mr-4 lg:mr-8 text-gray-30">
          <svg
            class="fill-current w-12 lg:w-32"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 153.32 251.92"
          >
            <path
              d="M115.68,110.51A24.71,24.71,0,0,1,92.52,77.28,86.28,86.28,0,0,1,98,49.66a79.2,79.2,0,0,1,26.55-35.31,8,8,0,0,0-9.72-12.7A95.35,95.35,0,0,0,83,44a102.42,102.42,0,0,0-6.51,35.89c0,3.54.19,6.36.38,8.28L1.39,233.35a12.37,12.37,0,1,0,22,11.41l37.26-71.7a12.19,12.19,0,0,0,5,6.67L97.87,201l7.39,40.84a12.26,12.26,0,0,0,12,10.07,11.74,11.74,0,0,0,2.19-.2,12.25,12.25,0,0,0,9.87-14.24l-8.33-46a12.18,12.18,0,0,0-5.31-8L95.3,170l26.75-51.47a67.38,67.38,0,0,1,6.09,4.61,37.67,37.67,0,0,1,6.84,7.41,11.63,11.63,0,0,1,2.34,6.32,7,7,0,0,1-.87,3.34c-1,1.94-3.32,4.67-8.06,7.72s-11.75,6.32-21.54,9.49A8,8,0,0,0,109.31,173a8.23,8.23,0,0,0,2.48-.39c14.26-4.65,24.13-9.66,31-15.48a32.4,32.4,0,0,0,7.86-9.55,23.12,23.12,0,0,0,2.69-10.74c0-6.28-2.52-11.64-5.58-16-4.66-6.57-10.86-11.49-15.93-15l-.83-.56A24.66,24.66,0,0,1,115.68,110.51Z"
            />
            <circle cx="115.7" cy="85.81" r="22.5" />
          </svg>
        </div>
        <div>
          <v-page-header
            >Ready to get in the best shape of your life?</v-page-header
          >
        </div>
      </div>
      <p>
        <strong
          >Sign up today for a free 30 day trial of our program. No credit cards
          required.</strong
        >
        Receive discounts on Group Challenges, and have access to our complete
        workout and meal plan libraries. We will not ask for your credit card
        information until you are completely satisfied.
      </p>
      <form action="" class="mt-6" @submit.prevent="register()">
        <v-field>
          <label for="">User Name</label>
          <input
            id="user_name"
            v-model="userInfo.username"
            type="user_name"
            name="user_name"
            placeholder="Ripped to shreds"
            :class="formError($v.userInfo.username)"
            @blur="$v.userInfo.username.$touch()"
          />
          <v-error-wrapper v-if="$v.userInfo.username.$error">
            <v-error>Please enter a username</v-error>
          </v-error-wrapper>
        </v-field>
        <v-field>
          <label for="">Email</label>
          <input
            id="email"
            v-model="userInfo.email"
            type="email"
            name="email"
            placeholder="youremail@email.com"
            :class="formError($v.userInfo.email)"
            @blur="$v.userInfo.email.$touch()"
          />
          <v-error-wrapper v-if="$v.userInfo.email.$error">
            <v-error>Please enter a valid email</v-error>
          </v-error-wrapper>
        </v-field>
        <v-field>
          <label for="">Password</label>
          <input
            id="password"
            v-model="userInfo.password"
            name="password"
            type="password"
            placeholder="*****"
            :class="formError($v.userInfo.password)"
            @blur="$v.userInfo.password.$touch()"
          />
          <v-error-wrapper v-if="$v.userInfo.password.$error">
            <v-error
              >Password must be between 6 and 128 characters long.</v-error
            >
          </v-error-wrapper>
        </v-field>
        <v-field>
          <button class="btn btn-default" :disabled="$v.userInfo.$invalid">
            Register
          </button>
        </v-field>
      </form>
      <p>
        Already registerd? <nuxt-link to="/auth/login">Login here</nuxt-link>
      </p>
    </div>
  </v-page-wrap>
</template>

<script>
import Vue from 'vue'
import Vuelidate from 'vuelidate'
import { email, required, minLength, maxLength } from 'vuelidate/lib/validators'
import formError from '~/mixins/inputError'
Vue.use(Vuelidate)

export default {
  mixins: [formError],
  data() {
    return {
      userInfo: {
        email: '',
        password: '',
        username: ''
      }
    }
  },
  methods: {
    async register() {
      this.$v.userInfo.$touch() // show form errors if submit button is pressed
      if (!this.$v.userInfo.$invalid) {
        await this.$axios.$post('/api/session/users', this.userInfo)
      }
    }
  },
  validations() {
    return {
      userInfo: {
        email: { email, required },
        password: {
          required,
          minLength: minLength(6),
          maxLength: maxLength(128)
        },
        username: { required }
      }
    }
  }
}
</script>

<style></style>
