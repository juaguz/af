import FacturasRepo from '../repositories/FacturasRepo'
import BaseService from './BaseService'
export default class FacturasService extends BaseService {
  constructor () {
    super()
    this.repo = new FacturasRepo()
  }
}
