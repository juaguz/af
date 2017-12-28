import {FACTURAS_INDEX as INDEX} from './ApiConstant'
import BaseRepo from './BaseRepo'
export default class FacturasRepo extends BaseRepo {
  constructor () {
    super()
    this.INDEX = INDEX
  }
}
