<template>
  <v-page-wrap>
    <div class="w-full max-w-3xl mx-auto">
      <v-page-header>Forgot your password?</v-page-header>
      <p>
        No worries. Just submit your email. We'll email you a new password right
        away.
      </p>
      <form action="" class="mt-6">
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
          <button class="btn btn-default" :disabled="$v.userInfo.$invalid">
            Request New Password
          </button>
        </v-field>
      </form>
      <p>
        No account? No problem.
        <nuxt-link to="/auth/register">Register here.</nuxt-link>
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
        email: ''
      }
    }
  },
  validations: {
    userInfo: {
      email: { required, email }
    }
  }
}
</script>

<style></style>
