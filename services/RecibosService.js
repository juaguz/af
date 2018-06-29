import ReciboRepo from '../repositories/ReciboRepo'
import BaseService from './BaseService'
export default class ReciboService extends BaseService {
  constructor () {
    super()
    this.repo = new ReciboRepo()
  }
}
