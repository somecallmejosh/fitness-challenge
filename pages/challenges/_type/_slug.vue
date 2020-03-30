<template>
  <div>
    <div class="mt-16 pt-12 lg:pt-20 pb-8 bg-orange-100 text-white">
      <div class="container mx-auto px-4">
        <div
          class="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center"
        >
          <div>
            <img
              src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438"
              class="rounded-blob-4"
              alt=""
            />
          </div>
          <div>
            <v-chip>
              {{ challenge.attributes.level }} {{ challenge.type }}
            </v-chip>
            <p
              class="text-6xl leading-none font-bold border-b border-orange-50 pb-4 mb-4"
            >
              {{ challenge.attributes.title }}
            </p>

            <p
              v-if="
                challenge.attributes.start_date &&
                  challenge.attributes.start_date
              "
              class="mt-2 text-2xl font-bold"
            >
              {{
                $moment(challenge.attributes.start_date).format(
                  'dddd MMM, YYYY'
                )
              }}
              through
              {{
                $moment(challenge.attributes.end_date).format('dddd MMM, YYYY')
              }}
            </p>
            <button class="btn btn-inverse">Register Today</button>
          </div>
        </div>
      </div>
    </div>
    <v-wave layout="top" color="text-orange-100" />
    <v-page-wrap>
      <div class="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-32">
        <div class="lg:col-span-3">
          <v-chip class="mb-8">
            {{
              (new Date(challenge.attributes.end_date).getTime() -
                new Date(challenge.attributes.start_date).getTime()) /
                (1000 * 3600 * 24)
            }}
            day {{ challenge.attributes.level }} {{ challenge.type }}
          </v-chip>
          <div>
            <v-page-header>{{ challenge.attributes.title }}</v-page-header>
            <p>{{ challenge.attributes.description }}</p>
          </div>
        </div>
        <div class="lg:col-start-4 lg:col-span-2">
          <button class="btn btn-default">Register Today</button>
          <p>Reserve your spot early. Class sizes are limited.</p>
        </div>
      </div>
    </v-page-wrap>
  </div>
</template>
<script>
import VWave from '~/components/layout/template/VWave'
export default {
  components: {
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
