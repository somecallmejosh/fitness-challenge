<template>
  <v-page-wrap>
    <div class="mb-6 lg:mb-0">
      <v-page-header class="mb-12">Group Challenges</v-page-header>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
        <v-card
          v-for="item in challenges.data"
          :key="item.attributes.id"
          class="flex flex-col"
          :payload="item"
        >
          <div>
            <v-chip class="mb-4">
              {{ item.attributes.level }}
            </v-chip>
            <div>
              <h2 class="font-bold text-xl text-gray-80">
                {{ item.attributes.title }}
              </h2>
              <div
                v-if="item.attributes.start_date && item.attributes.start_date"
                class="text-gray-60 mt-2"
              >
                {{
                  $moment(item.attributes.start_date).format('MMM DD,  YYYY')
                }}
                -
                {{ $moment(item.attributes.end_date).format('MMM DD, YYYY') }}
              </div>
            </div>
          </div>
        </v-card>
      </div>
    </div>
  </v-page-wrap>
</template>

<script>
export default {
  async fetch({ store }) {
    await store.dispatch('challenges/fetchAllChallenges')
  },
  computed: {
    challenges() {
      return this.$store.state.challenges.all.challenges
    }
  }
}
</script>
