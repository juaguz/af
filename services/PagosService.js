import Repo from '../repositories/PagosRepo'
import BaseService from './BaseService'
export default class PagosService extends BaseService {
  constructor () {
    super()
    this.repo = new Repo()
  }
}
