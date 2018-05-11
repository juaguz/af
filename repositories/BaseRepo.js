import {trae} from '~/plugins/TraeClient'

export default class BaseRepo {

  index (params) {
    return trae.get(this.INDEX, {params})
  }
  store (object) {
    return trae.post(this.INDEX, object)
  }
  update (id, object) {
    return trae.patch(`${this.INDEX}${id}/`, object)
  }
  find (id) {
    return trae.get(`${this.INDEX}${id}/`)
  }
  // params = [{field:value}]
  search (params) {
    let searString = ''
    params.forEach((param) => { searString = `${searString}&${param.field}=${param.value}` })
    return trae.get(`${this.INDEX}?${searString}`)
  }

}
