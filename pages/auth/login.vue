<template>
  <v-page-wrap>
    <div class="w-full max-w-3xl mx-auto">
      <v-page-header>Login</v-page-header>
      <p>Glad to see you back.</p>
      <form action="" class="mt-6" @submit.prevent="loginUser()">
        <v-field>
          <label for="email">Email</label>
          <input
            id="email"
            v-model="userInfo.email"
            type="email"
            name="email"
            class="border border-gray-40 rounded p-2 w-full"
            placeholder="Ripped to shreds"
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
            class="border border-gray-40 rounded p-2 w-full"
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
            Login
          </button>
        </v-field>
      </form>
      <p>
        No account? No problem.
        <nuxt-link to="/auth/register">Register here.</nuxt-link>
      </p>
      <p>
        <nuxt-link to="/auth/forgot-password">Forgot Password?</nuxt-link>
      </p>
    </div>
  </v-page-wrap>
</template>

<script>
import Vue from 'vue'
import Vuelidate from 'vuelidate'
import { required, email } from 'vuelidate/lib/validators'
import formError from '~/mixins/inputError'
Vue.use(Vuelidate)
export default {
  mixins: [formError],
  data() {
    return {
      userInfo: {
        password: '',
        email: ''
      }
    }
  },
  methods: {
    async loginUser() {
      try {
        await this.$auth.loginWith('local', {
          data: {
            email: this.userInfo.email,
            password: this.userInfo.password
          }
        })
      } catch (e) {
        // eslint-disable-next-line
        console.log('Error: ' + e)
      }
    }
  },
  validations() {
    return {
      userInfo: {
        password: { required },
        email: { required, email }
      }
    }
  }
}
</script>

<style></style>
