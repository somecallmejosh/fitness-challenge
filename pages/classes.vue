<template>
  <v-page-wrap>
    <div>
      <div class="mb-6 lg:mb-0">
        <v-page-header class="mb-12">Classes</v-page-header>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
          <div v-for="item in classes" :key="item.id" class="flex flex-col">
            <v-frame ratio="4:3" class="w-full">
              <client-only>
                <VImg
                  :classes="{
                    img: 'w-full rounded-blob-2',
                    root: 'w-full'
                  }"
                  src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&h=300&q=80"
                  alt=""
                />
              </client-only>
            </v-frame>
            <div
              class="p-6 pt-32 pb-8 shadow-2xl rounded-lg -mt-32 flex flex-col flex-grow"
            >
              <div>
                <div
                  class="tag inline-flex rounded-pill px-2 font-semibold text-sm uppercase bg-orange-50 mb-6"
                >
                  {{ item.description.record_type }}
                </div>
                <h2 class="font-bold text-xl mb-2 text-gray-80">
                  {{ item.title }}
                </h2>
                <p class="mb-4">{{ item.description.body }}</p>
                <p class="mb-8">Class starts on {{ item.start_date | date }}</p>
              </div>
              <div class="mt-auto">
                <nuxt-link
                  to="/"
                  class="rounded-pill bg-orange-100 text-white font-bold py-2 px-12 hover:bg-orange-90"
                  >More Info</nuxt-link
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </v-page-wrap>
</template>

<script>
export default {
  data() {
    return {
      classes: [
        {
          id: 1,
          title: 'Challenge: Gold 2',
          description: {
            id: 8,
            name: 'description',
            body:
              "Anakin you're breaking my heart, you're going down a path I can't follow.",
            record_type: 'Challenge',
            record_id: 1,
            created_at: '2020-03-24T10:54:59.456Z',
            updated_at: '2020-03-24T11:24:25.511Z'
          },
          start_date: '2020-03-23',
          end_date: '2020-05-19',
          created_at: '2020-03-24T10:54:59.453Z',
          updated_at: '2020-03-24T11:24:25.523Z',
          url: 'http://localhost:3000/challenges/1.json'
        },
        {
          id: 3,
          title: 'Challenge: Gold 3',
          description: {
            id: 10,
            name: 'description',
            body:
              "Threepio, tell them if they don't do as you wish, you'll become angry and use your magic",
            record_type: 'Challenge',
            record_id: 3,
            created_at: '2020-03-24T10:54:59.559Z',
            updated_at: '2020-03-24T10:54:59.559Z'
          },
          start_date: '2020-03-24',
          end_date: '2020-05-19',
          created_at: '2020-03-24T10:54:59.557Z',
          updated_at: '2020-03-24T10:54:59.560Z',
          url: 'http://localhost:3000/challenges/3.json'
        },
        {
          id: 5,
          title: 'Challenge: Gray Leader',
          description: {
            id: 12,
            name: 'description',
            body: "Wanta dah moolee-rah... (Why haven't you paid me...)",
            record_type: 'Challenge',
            record_id: 5,
            created_at: '2020-03-24T10:54:59.597Z',
            updated_at: '2020-03-24T10:54:59.597Z'
          },
          start_date: '2020-03-24',
          end_date: '2020-05-19',
          created_at: '2020-03-24T10:54:59.596Z',
          updated_at: '2020-03-24T10:54:59.599Z',
          url: 'http://localhost:3000/challenges/5.json'
        },
        {
          id: 2,
          title: 'Challenge: Phoenix 7',
          description: {
            id: 9,
            name: 'description',
            body:
              'Then our worst fears have been realized. We must move quickly if the Jedi Order is to survive.',
            record_type: 'Challenge',
            record_id: 2,
            created_at: '2020-03-24T10:54:59.496Z',
            updated_at: '2020-03-24T10:54:59.496Z'
          },
          start_date: '2020-03-24',
          end_date: '2020-05-19',
          created_at: '2020-03-24T10:54:59.494Z',
          updated_at: '2020-03-24T10:54:59.499Z',
          url: 'http://localhost:3000/challenges/2.json'
        },
        {
          id: 4,
          title: 'Challenge: Red Leader',
          description: {
            id: 11,
            name: 'description',
            body:
              "Why you slimy, double-crossing, no-good swindler. You've got a lot of guts coming here, after what you pulled.",
            record_type: 'Challenge',
            record_id: 4,
            created_at: '2020-03-24T10:54:59.579Z',
            updated_at: '2020-03-24T10:54:59.579Z'
          },
          start_date: '2020-03-24',
          end_date: '2020-05-19',
          created_at: '2020-03-24T10:54:59.577Z',
          updated_at: '2020-03-24T10:54:59.580Z',
          url: 'http://localhost:3000/challenges/4.json'
        }
      ]
    }
  }
}
</script>

<style></style>
