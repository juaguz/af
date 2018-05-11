export default class BaseService {
  search (params) {
    return new Promise((resolve, reject) => {
      this.repo.search(params).then((data) => {
        resolve(data)
      }).catch((err) => {
        reject(err)
      })
    })
  }

  find (id) {
    return new Promise((resolve, reject) => {
      this.repo.find(id).then((data) => {
        resolve(data)
      }).catch((err) => {
        reject(err)
      })
    })
  }

  index (params) {
    return new Promise((resolve, reject) => {
      this.repo.index(params).then((data) => {
        resolve(data)
      }).catch((err) => {
        reject(err)
      })
    })
  }
  store (data) {
    return new Promise((resolve, reject) => {
      this.repo.store(data).then((data) => {
        resolve(data)
      }).catch((err) => {
        reject(err)
      })
    })
  }
  update (id, data) {
    return new Promise((resolve, reject) => {
      this.repo.update(id, data).then((data) => resolve(data)).catch((err) => reject(err))
    })
  }
}

