import UserPermissonsRepo from '../repositories/PermissonsRepo'

export default class AuthService {
  constructor () {
    this.userPermissonsRepo = new UserPermissonsRepo()
  }
  index (object) {
    object = object || {}
    return new Promise((resolve, reject) => {
      this.userPermissonsRepo.index(object).then((data) => {
        resolve(data)
      }).catch((err) => {
        reject(err)
      })
    })
  }
}
