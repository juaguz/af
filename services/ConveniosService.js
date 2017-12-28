import Repo from '../repositories/ConveniosRepo'
import BaseService from './BaseService'
export default class ConveniosService extends BaseService {
  constructor () {
    super()
    this.repo = new Repo()
  }
}
