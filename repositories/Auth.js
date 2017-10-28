import {trae} from '~/plugins/TraeClient'
import {AUTH_URL} from './ApiConstant'

export default class AuthRepo {

  auth (username, password) {
    return trae.post(AUTH_URL, {username, password})
  }

}

