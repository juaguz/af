import {trae} from '~/plugins/TraeClient'
import {USERS_INDEX} from './ApiConstant'

export default class UserRepo {

  index (object) {
    return trae.get(USERS_INDEX, object)
  }
  store (object) {
    return trae.post(USERS_INDEX, object)
  }
  update (id, object) {
    return trae.patch(`${USERS_INDEX}${id}/`, object)
  }

}

