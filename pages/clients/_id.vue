<template lang="pug">
div
  CustomMenu
  tabs
    tab(name="Estado de Cuenta", selected="true")
      section.section
        .container


    tab(name="Facturas")
      div
    tab(name="Pagos")
      div facturas
    tab(name="Convenios")
      div hola hola
    tab(name="Complementos")
      div hola hola
    tab(name="Info/Procesos")
      div hola hola
    tab(name="Politicas")
      div hola hola
    tab(name="Speech")
      div hola hola

</template>

<script>
import CustomMenu from '~/components/Menu.vue'
import Tabs from '~/components/Tabs.vue'
import Tab from '~/components/Tab.vue'
import EstadoCuenta from '~/components/clientes/EstadoCuenta.vue'
import ClientRepo from '~/repositories/ClienteRepo'
import FormularioRepo from '~/repositories/FormularioRepo'
export default {
  components: {
    CustomMenu, Tabs, Tab, EstadoCuenta
  },
  data () {
    return {
      client: {},
      formulario: {},
      mapeo: {
        'N° de Deudor': 'deudor',
        'Tipo. Doc.': 'tipdoc',
        'Nro. Doc.': 'cuitdoc',
        'Calle': 'domicilio1',
        'Nombre /Razon Social': 'apenom',
        'Cod. Post': 'codpos1'
      }
    }
  },
  filters: {
    real (value) {
      return value
    }
  },
  methods: {
    showColumn (item) {
      return item !== '' && !(item.indexOf('@') !== -1)
    },
    getFormulario () {
      let formularioRepo = new FormularioRepo()
      let el = this
      console.log(el)
      formularioRepo.find({args: {empresa: el.client.node.empresa}}).then(({model, data}) => {
        let formulario = data.cliente_form.edges[0].node
        delete formulario.id
        el.formulario = formulario
      })
    },
    getData (args) {
      let el = this
      let clienteRepo = new ClientRepo()
      return clienteRepo.find(args).then(({model, data}) => {
        el.client = data.allClienteDeudores.edges[0]
        el.getFormulario()
      }).catch((error) => {
        console.log(error)
      })
    }
  },
  mounted (context) {
    let id = parseFloat(this.$route.params.id)
    this.getData({args: {deudor: id}})
  }
}
</script>

<style scoped>

  .section {
    overflow-x:scroll;
  }

</style>
