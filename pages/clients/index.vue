<template lang="pug">
div
  CustomMenu
  section(class="hero is-small is-primary is-bold")
    .hero-body
      .container
        h1(class="title") {{$t('clients-list')}}
    .hero-foot(v-if="false")
      nav
        .navbar-item
          div(class="dropdown is-hoverable")
            div(class="dropdown-trigger")
              a(class="button")
                span {{$t('order')}}
                span(class="icon is-small")
                  i(class="fa fa-angle-down")
            div(class="dropdown-menu")
              div(class="dropdown-content")
                a(class="dropdown-item") Deudor
                a(class="dropdown-item") Deudor
                a(class="dropdown-item") Deudor
                a(class="dropdown-item") Deudor

  table(class="table is-bordered is-striped is-narrow is-fullwidth  is-hoverable")
    thead
      tr
        th Nro Deudor
        th Empresa
        th Nombre Apellido
        th Tipo Documento
        th Nro documento
        th Domicilio
        th Telefono
    tbody
      tr(v-for='client in clients')
        td
          nuxt-link(:to="{ name: 'clients-id', params: { id: route(client) } }") {{client.deudor}}
        td {{client.empresa}}
        td {{client.apenom}}
        td {{client.tipdoc}}
        td {{client.cuitdoc}}
        td {{client.domicilio1}}
        td {{client.telefono1}}
  div.columns
    div.is-4
      nav.pagination(role="navigation" aria-label="pagination")
        a.pagination-previous(v-if="hasPreviousPage", @click="anterior") Anterior
        a.pagination-next(v-if="pageInfo.hasNextPage || hasNextPage", @click="siguiente") Siguiente


</template>

<script>
import CustomMenu from '~/components/Menu.vue'
import ClientService from '~/services/ClientService'
let clientService = new ClientService()
export default {
  components: {
    CustomMenu
  },
  methods: {
    route (client) {
      return `${client.deudor}-10`
    },
    siguiente () {
      this.counterPreviousePage ++
      this.getData({args: { first: 15, after: this.clients[0].cursor }})
    },
    anterior () {
      this.counterPreviousePage --
      this.hasNextPage = true
      this.getData({args: { first: 15, before: this.clients[14].cursor }})
    },
    getData () {
      let el = this
      return clientService.index().then(({model, data}) => {
        el.clients = data
      }).catch((error) => {
        console.log(error)
      })
    },
    search (obj) {
      return clientService.search(obj).then((data) => {
        this.clients = data.data
      }).catch((error) => console.log(error))
    }
  },
  computed: {
    hasPreviousPage () {
      return (this.counterPreviousePage > 0)
    }
  },
  data () {
    return {
      clients: [],
      counterPreviousePage: 0,
      hasNextPage: false,
      pageInfo: {
        hasPreviousPage: false,
        hasNextPage: false
      }
    }
  },
  mounted () {
    let telefono = this.$route.query.telefono
    if (telefono !== undefined) {
      this.search([{'field': 'telefono1', 'value': telefono}])
    } else {
      this.getData()
    }
  }
}

</script>

<style>

</style>
