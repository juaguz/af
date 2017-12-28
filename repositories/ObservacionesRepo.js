import {trae} from '~/plugins/TraeClient'
import {OBSERVACIONES_INDEX} from './ApiConstant'
export default class ObservacionesRepo {
  index (object) {
    return trae.get(OBSERVACIONES_INDEX, object)
  }
  store (object) {
    return trae.post(OBSERVACIONES_INDEX, object)
  }
  update (id, object) {
    return trae.patch(`${OBSERVACIONES_INDEX}${id}/`, object)
  }
  find (id) {
    return trae.get(`${OBSERVACIONES_INDEX}?deudor=${id}`)
  }
}

