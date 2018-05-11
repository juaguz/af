import BaseRepo from './BaseRepo'
import {PARAMETROS_INDEX} from './ApiConstant'
export default class ParametrosRepo extends BaseRepo {
  constructor () {
    super()
    this.INDEX = PARAMETROS_INDEX
  }
}
