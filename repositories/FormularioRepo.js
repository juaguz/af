import {client} from '../plugins/Graphql'

export default class FormularioRepo {
  find (args) {
    const query = client.query((root) => {
      args.alias = 'cliente_form'
      root.addConnection('allFormularios', args, (formulario) => {
        formulario.add('ue10000')
        formulario.add('ue10003')
        formulario.add('ue10004')
        formulario.add('ue10005')
        formulario.add('ue10006')
        formulario.add('ue10007')
        formulario.add('ue10008')
        formulario.add('ue10009')
        formulario.add('ue10010')
        formulario.add('ue10011')
        formulario.add('ue10012')
        formulario.add('ue10013')
        formulario.add('ue10014')
        formulario.add('ue10015')
        formulario.add('ue10016')
        formulario.add('ue10017')
        formulario.add('ue10018')
        formulario.add('ue10019')
        formulario.add('ue10020')
        formulario.add('ue10021')
        formulario.add('ue10022')
        formulario.add('ue10023')
        formulario.add('ue10024')
        formulario.add('ue10028')
        formulario.add('ue10029')
        formulario.add('ue10030')
        formulario.add('ue10031')
        formulario.add('ue10032')
        formulario.add('ue10033')
      })
    })
    return client.send(query)
  }
}

