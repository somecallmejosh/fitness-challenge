<template>
  <v-page-wrap>
    <div>
      <div class="mb-6 lg:mb-0">
        <v-page-header class="mb-12">Challenges</v-page-header>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
          <v-card
            v-for="item in challenges.data"
            :key="item.attributes.id"
            class="flex flex-col"
            :payload="item"
          >
            <v-chip class="mt-4 mb-8">
              {{
                (new Date(item.attributes.end_date).getTime() -
                  new Date(item.attributes.start_date).getTime()) /
                  (1000 * 3600 * 24)
              }}
              day {{ item.attributes.description.record_type }}
            </v-chip>
            <div class="mb-8">
              <h2 class="font-bold text-xl text-gray-80">
                {{ item.attributes.title }}
              </h2>
              <div
                v-if="item.attributes.start_date && item.attributes.start_date"
                class="text-gray-60 mt-2"
              >
                {{ $moment(item.attributes.start_date).format('MM/DD/YYYY') }}
                -
                {{ $moment(item.attributes.end_date).format('MM/DD/YYYY') }}
              </div>
              <p>
                {{
                  item.attributes.description.body
                    ? item.attributes.description.body
                    : 'Information on this challenged coming soon.'
                }}
              </p>
            </div>
          </v-card>
        </div>
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
