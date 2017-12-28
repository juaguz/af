import SpeechRepo from '../repositories/SpeechRepo'

export default class SpeechService {
  constructor () {
    this.speechService = new SpeechRepo()
  }

  search (empresa) {
    return new Promise((resolve, reject) => {
      this.speechService.search(empresa).then((data) => {
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
