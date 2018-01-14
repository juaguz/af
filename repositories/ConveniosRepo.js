import {CONVENIOS_INDEX as INDEX} from './ApiConstant'
import BaseRepo from './BaseRepo'
export default class ConveniosRepo extends BaseRepo {
  constructor () {
    super()
    this.INDEX = INDEX
  }
}
