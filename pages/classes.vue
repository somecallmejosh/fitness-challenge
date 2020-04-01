<template>
  <v-page-wrap>
    <div>
      <div class="mb-6 lg:mb-0">
        <v-page-header class="mb-12">Classes</v-page-header>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
          <v-card
            v-for="item in classes"
            :key="item.id"
            class="flex flex-col"
            :payload="item"
          >
            <v-chip class="mt-4 mb-8">
              {{
                (new Date(item.end_date).getTime() -
                  new Date(item.start_date).getTime()) /
                  (1000 * 3600 * 24)
              }}
              day {{ item.description.record_type }}
            </v-chip>

            <h2 class="font-bold text-xl text-gray-80">
              {{ item.title }}
            </h2>
            <div class="text-gray-60 mb-2">
              {{ item.start_date | date }} - {{ item.end_date | date }}
            </div>
            <p class="mb-12">{{ item.description.body }}</p>
          </v-card>
        </div>
      </div>
    </div>
  </v-page-wrap>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const classes = await $axios.$get('data/classes.json')
    return { classes }
  }
}
</script>

<style></style>
