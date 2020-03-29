export const state = () => ({
  all: {},
  current: {}
})

export const actions = {
  async fetchAllChallenges({ commit }) {
    const challenges = await this.$axios.$get('challenges.json')
    commit('setChallenges', challenges)
  },
  async fetchCurrentChallenge({ commit }, slug) {
    const challenge = await this.$axios.$get(`challenges/${slug}.json`)
    commit('setCurrentChallenge', challenge)
  }
}

export const mutations = {
  setChallenges(state, challenges) {
    state.all = { challenges }
  },
  setCurrentChallenge(state, challenge) {
    state.current = { challenge }
  }
}
