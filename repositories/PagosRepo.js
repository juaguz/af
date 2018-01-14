import {PAGOS_INDEX as INDEX} from './ApiConstant'
import BaseRepo from './BaseRepo'
export default class PagosRepo extends BaseRepo {
  constructor () {
    super()
    this.INDEX = INDEX
  }
}
