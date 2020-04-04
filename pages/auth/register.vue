<template>
  <v-page-wrap>
    <div class="w-full max-w-3xl mx-auto">
      <v-page-header
        >Ready to get in the best shape of your life?</v-page-header
      >
      <p>
        <strong
          >Sign up today for a free 30 day trial of our program. No credit cards
          required.</strong
        >
        Receive discounts on Group Challenges, and gain access to our complete
        workout and meal plan libraries. We will never ask for your credit card
        information during your trial period.
      </p>
      <form action="" class="mt-6" @submit.prevent="register()">
        <div class="grid grid-cols-1 lg:grid-cols-2 lg:gap-6">
          <div>
            <v-field>
              <label for="">First Name</label>
              <input
                id="first_name"
                v-model="userInfo.first_name"
                type="first_name"
                name="first_name"
                :class="formError($v.userInfo.first_name)"
                @blur="$v.userInfo.first_name.$touch()"
              />
              <v-error-wrapper v-if="$v.userInfo.first_name.$error">
                <v-error>Please enter a your first name</v-error>
              </v-error-wrapper>
            </v-field>
          </div>
          <div>
            <v-field>
              <label for="">Last Name</label>
              <input
                id="last_name"
                v-model="userInfo.last_name"
                type="last_name"
                name="last_name"
                :class="formError($v.userInfo.last_name)"
                @blur="$v.userInfo.last_name.$touch()"
              />
              <v-error-wrapper v-if="$v.userInfo.last_name.$error">
                <v-error>Please enter a your last name</v-error>
              </v-error-wrapper>
            </v-field>
          </div>
        </div>

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
        <div class="grid grid-cols-1 lg:grid-cols-2 lg:gap-6">
          <div>
            <v-field>
              <label for="">Password</label>
              <input
                id="password"
                v-model="userInfo.password"
                name="password"
                type="password"
                placeholder="******"
                :class="formError($v.userInfo.password)"
                @blur="$v.userInfo.password.$touch()"
              />
              <v-error-wrapper v-if="$v.userInfo.password.$error">
                <v-error
                  >Password must be between 6 and 128 characters long.</v-error
                >
              </v-error-wrapper>
            </v-field>
          </div>
          <div>
            <v-field>
              <label for="">Password Confirmation</label>
              <input
                id="password_confirmation"
                v-model="userInfo.password_confirmation"
                name="password_confirmation"
                type="password"
                placeholder="******"
                :class="formError($v.userInfo.password_confirmation)"
                @blur="$v.userInfo.password_confirmation.$touch()"
              />
              <v-error-wrapper v-if="$v.userInfo.password_confirmation.$error">
                <v-error>Passwords must match.</v-error>
              </v-error-wrapper>
            </v-field>
          </div>
        </div>
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
import {
  email,
  required,
  minLength,
  maxLength,
  sameAs
} from 'vuelidate/lib/validators'
import formError from '~/mixins/inputError'
Vue.use(Vuelidate)

export default {
  mixins: [formError],
  data() {
    return {
      userInfo: {
        email: '',
        first_name: '',
        last_name: '',
        password: '',
        password_confirmation: ''
      }
    }
  },
  methods: {
    async register() {
      this.$v.userInfo.$touch() // show form errors if submit button is pressed
      // [POST] /signup (email, password, password_confirmation, first_name, last_name)
      if (!this.$v.userInfo.$invalid) {
        await this.$axios.$post(
          'https://fitness-backend-prod.herokuapp.com/signup',
          this.userInfo
        )
      }
    }
  },
  validations() {
    return {
      userInfo: {
        email: { email, required },
        first_name: { required },
        last_name: { required },
        password: {
          required,
          minLength: minLength(6),
          maxLength: maxLength(128)
        },
        password_confirmation: {
          sameAsPassword: sameAs('password')
        }
      }
    }
  }
}
</script>

<style></style>
