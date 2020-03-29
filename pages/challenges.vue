<template>
  <v-page-wrap>
    <div>
      <div class="mb-6 lg:mb-0">
        <v-page-header class="mb-12">Challenges</v-page-header>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
          <v-card
            v-for="item in challenges"
            :key="item.data[0].attributes.id"
            class="flex flex-col"
            :payload="item.data[0]"
          >
            <v-chip class="mt-4 mb-8">
              {{
                (new Date(item.data[0].attributes.end_date).getTime() -
                  new Date(item.data[0].attributes.start_date).getTime()) /
                  (1000 * 3600 * 24)
              }}
              day {{ item.data[0].attributes.description.record_type }}
            </v-chip>

            <h2 class="font-bold text-xl text-gray-80">
              {{ item.data[0].attributes.title }}
            </h2>
            <div class="text-gray-60 mb-2">
              {{
                $moment(item.data[0].attributes.start_date).format('MM/DD/YYYY')
              }}
              -
              {{
                $moment(item.data[0].attributes.end_date).format('MM/DD/YYYY')
              }}
            </div>
            <p class="mb-12">{{ item.data[0].attributes.description.body }}</p>
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
      return this.$store.state.challenges.all
    }
  }
}
</script>
