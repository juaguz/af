import {CLIENT_INDEX} from './ApiConstant'
import BaseRepo from './BaseRepo'
class ClienteRepo extends BaseRepo {
  constructor () {
    super()
    this.INDEX = CLIENT_INDEX
  }
}

export default ClienteRepo
