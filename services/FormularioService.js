import FormularioRepo from '../repositories/FormularioRepo'

export default class ClientService {
  constructor () {
    this.formularioRepo = new FormularioRepo()
  }

  find (id) {
    return new Promise((resolve, reject) => {
      this.formularioRepo.find(id).then((data) => {
        resolve(data)
      }).catch((err) => {
        reject(err)
      })
    })
  }

  index (object) {

  }
  store (object) {

  }
  update (id, object) {

  }
}
