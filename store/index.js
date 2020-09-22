export const state = () => ({
  toolbarTitle: 'Store'
})

export const mutations = {
  setToolbarTitle(state, text) {
    state.title = text
  },
}