export const state = () => ({
  locales: ['en', 'es'],
  locale: 'es',
  token: null,
  user: null
})

export const mutations = {
  SET_LANG (state, locale) {
    if (state.locales.indexOf(locale) !== -1) {
      state.locale = locale
    }
  },
  SET_TOKEN (state, token) {
    state.token = token
  },
  SET_USER (state, user) {
    state.user = user
  }
}

export const getters = {
  GET_TOKEN (state) {
    return state.token
  },
  GET_USER (state) {
    return state.user
  }
}
