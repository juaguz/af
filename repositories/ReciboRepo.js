import {RECIBOS_INDEX} from './ApiConstant'
import BaseRepo from './BaseRepo'
class ReciboRepo extends BaseRepo {
  constructor () {
    super()
    this.INDEX = RECIBOS_INDEX
  }
}

export default ReciboRepo
