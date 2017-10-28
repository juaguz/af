import {trae} from '~/plugins/TraeClient'
import {USER_PERMISSONS} from './ApiConstant'

export default class PermissonsRepo {

  index (object) {
    return trae.get(USER_PERMISSONS, object)
  }
}

