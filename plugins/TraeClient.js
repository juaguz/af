import trae from 'trae'
import {getTokenFromCookie, getTokenFromLocalStorage} from '~/utils/auth'
import {BASE_URL} from '../repositories/ApiConstant'

export default ({ app, isServer, store, req }) => {
  let token = (isServer) ? getTokenFromCookie(req) : getTokenFromLocalStorage()
  trae.baseUrl(BASE_URL)
  trae.defaults({
    headers: {
      'Authorization': `JWT ${token}`
    }

  })
}

export {
  trae
}

