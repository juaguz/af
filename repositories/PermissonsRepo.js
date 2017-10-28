import {trae} from '~/plugins/TraeClient'
import {PERMISSONS_INDEX} from './ApiConstant'

export default class PermissonsRepo {

  index (object) {
    return trae.get(PERMISSONS_INDEX, object)
  }
}

