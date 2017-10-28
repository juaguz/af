import AuthRepo from '../repositories/Auth'
import { setToken } from '~/utils/auth'
export default class AuthService {
  constructor () {
    this.authRepo = new AuthRepo()
  }
  auth (username, password) {
    return new Promise((resolve, reject) => {
      this.authRepo.auth(username, password).then((data) => {
        setToken(data.data.token)
        resolve(data)
      }).catch((err) => {
        reject(err)
      })
    })
  }
}
