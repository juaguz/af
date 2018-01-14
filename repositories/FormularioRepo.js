import {trae} from '~/plugins/TraeClient'
import {MAPEO_FORM_INDEX} from './ApiConstant'
export default class FormularioRepo {
  find (id) {
    return trae.get(`${MAPEO_FORM_INDEX}${id}/`)
  }
}

