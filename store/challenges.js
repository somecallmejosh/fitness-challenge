export const state = () => ({
  all: {}
})

export const actions = {
  async fetchAllChallenges({ commit }) {
    const challenges = await this.$axios.$get('challenges.json')
    commit('setChallenges', challenges)
  }
}

export const mutations = {
  setChallenges(state, challenges) {
    state.all = { challenges }
  }
}
