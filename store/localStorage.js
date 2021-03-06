export const state = () => ({
  user: {
    initialized: false,
    bearer: '',
    id: {
      name: '',
      email: '',
    },
    anonymous: true,
  },
})

export const mutations = {
  setUser(state, user) {
    state.user = user
  },
  resetUser(state) {
    state.user = {
      initialized: false,
      bearer: '',
      id: {
        name: '',
        email: '',
      },
      anonymous: true,
    }
  },
}
