import {trae} from '~/plugins/TraeClient'
import {SPEECHS_INDEX} from './ApiConstant'

export default class UserRepo {

  index (object) {
    return trae.get(SPEECHS_INDEX, object)
  }
  store (object) {
    return trae.post(SPEECHS_INDEX, object)
  }
  update (id, object) {
    return trae.patch(`${SPEECHS_INDEX}${id}/`, object)
  }

  search (empresa) {
    return trae.get(`${SPEECHS_INDEX}?empresa=${empresa}`)
  }

}
