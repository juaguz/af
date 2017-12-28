import ObservacionesRepo from '../repositories/ObservacionesRepo'

export default class ObservacionesService {
  constructor () {
    this.observacionesRepo = new ObservacionesRepo()
  }

  find (id) {
    return new Promise((resolve, reject) => {
      this.observacionesRepo.find(id).then((data) => {
        resolve(data)
      }).catch((err) => {
        reject(err)
      })
    })
  }

  index (object) {

  }
  store (object) {
    return new Promise((resolve, reject) => {
      this.observacionesRepo.store(object).then((data) => {
        resolve(data)
      }).catch((err) => {
        reject(err)
      })
    })
  }
  update (id, object) {

  }
}
