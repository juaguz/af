import { getTokenFromCookie, getTokenFromLocalStorage, getUserFromToken } from '~/utils/auth'

export default function ({ isServer, store, req, route }) {
  if (route.path === '/') return
  if (isServer && !req) return
  const jwt = isServer ? getTokenFromCookie(req) : getTokenFromLocalStorage()
  store.commit('SET_TOKEN', jwt)
  store.commit('SET_USER', getUserFromToken(jwt))
}
