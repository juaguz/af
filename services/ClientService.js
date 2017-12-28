import ClienteRepo from '../repositories/ClienteRepo'
import BaseService from './BaseService'
export default class ClientService extends BaseService {
  constructor () {
    super()
    this.repo = new ClienteRepo()
  }
}
