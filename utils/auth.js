import jwtDecode from 'jwt-decode'
import Cookie from 'js-cookie'

const TOKEN_NAME = 'token'

const getQueryParams = () => {
  const params = {}
  window.location.href.replace(/([^(?|#)=&]+)(=([^&]*))?/g, ($0, $1, $2, $3) => {
    params[$1] = $3
  })
  return params
}

export const extractInfoFromHash = () => {
  if (process.SERVER_BUILD) return
  const { id_token, state } = getQueryParams()
  return {
    token: id_token,
    secret: state
  }
}

export const setToken = (token) => {
  if (process.SERVER_BUILD) return
  window.localStorage.setItem(TOKEN_NAME, token)
  Cookie.set(TOKEN_NAME, token)
}

export const getToken = () => {
  if (process.SERVER_BUILD) return
  return window.localStorage.getItem(TOKEN_NAME) | Cookie.get(TOKEN_NAME) | null
}

export const unsetToken = () => {
  if (process.SERVER_BUILD) return
  window.localStorage.removeItem(TOKEN_NAME)
  Cookie.remove(TOKEN_NAME)
  window.localStorage.setItem('logout', Date.now())
}

export const getTokenFromCookie = (req) => {
  console.log(req.headers)
  if (!req) return
  if (!req.headers.cookie) return
  const jwtCookie = req.headers.cookie.split(';').find(c => c.trim().startsWith(`${TOKEN_NAME}=`))
  if (!jwtCookie) return
  const jwt = jwtCookie.split('=')[1]
  return jwt
}

export const getUserFromLocalStorage = () => {
  const json = window.localStorage.user
  return json ? JSON.parse(json) : undefined
}
export const getTokenFromLocalStorage = () => {
  return window.localStorage[TOKEN_NAME]
}

export const getUserFromToken = (token) => {
  let user = jwtDecode(token)
  return user
}

export const setSecret = (secret) => window.localStorage.setItem('secret', secret)

export const checkSecret = (secret) => window.localStorage.secret === secret
