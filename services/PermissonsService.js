import PermisonsRepo from '../repositories/PermissonsRepo'

export default class AuthService {
  constructor () {
    this.permissonsRepo = new PermisonsRepo()
  }
  index (object) {
    object = object || {}
    return new Promise((resolve, reject) => {
      this.permissonsRepo.index(object).then((data) => {
        resolve(data)
      }).catch((err) => {
        reject(err)
      })
    })
  }
}
