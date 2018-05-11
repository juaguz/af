import BaseService from './BaseService'
import ParametrosRepo from '../repositories/ParametrosRepo'
const CODIGOPAGO = '009'
const CODIGOTIPOESTADOS = '010'
const CODIGOSESTADOSITUACION = '000'
const CODIGOTIPOCONVENIO = '009'
const CODIGTIPOPAGO = '006'

export default class ParametrosService extends BaseService {
  constructor () {
    super()
    this.repo = new ParametrosRepo()
  }

  getTipoPago (empresa) {
    return this.index({empresa: empresa, param: CODIGOPAGO}).then(data => data.data)
  }

  getCodigosEstados (empresa) {
    return this.index({empresa: empresa, param: CODIGOTIPOESTADOS}).then(data => data.data)
  }

  getCodigosSituacion (empresa) {
    return this.index({empresa: empresa, param: CODIGOSESTADOSITUACION}).then(data => data.data)
  }
  getTipoConvenio (empresa) {
    return this.index({empresa: empresa, param: CODIGOTIPOCONVENIO}).then(data => data.data)
  }
  getTipPago () {
    return this.index({param: CODIGTIPOPAGO}).then(data => data.data)
  }
}
