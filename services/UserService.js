import UserRepo from '../repositories/UserRepo'

export default class AuthService {
  constructor () {
    this.userRepo = new UserRepo()
  }
  index (object) {
    object = object || {}
    return new Promise((resolve, reject) => {
      this.userRepo.index(object).then((data) => {
        resolve(data)
      }).catch((err) => {
        reject(err)
      })
    })
  }
  store (object) {
    object = object || {}
    return new Promise((resolve, reject) => {
      this.userRepo.store(object).then((data) => {
        resolve(data)
      }).catch((err) => {
        reject(err)
      })
    })
  }
  update (id, object) {
    object = object || {}
    return new Promise((resolve, reject) => {
      this.userRepo.update(id, object).then((data) => {
        resolve(data)
      }).catch((err) => {
        reject(err)
      })
    })
  }
}
