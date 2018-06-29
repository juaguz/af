<template lang="pug">
div
  nav(class="navbar is-grey")
    .navbar-brand
      a(class="navbar-item") {{$t('title')}}
      div(class="navbar-burger burger", data-target="navMenuExample")
    div(id="navbar-item",class="navbar-menu")
      div(class="navbar-start")
        div(class="navbar-item has-dropdown is-hoverable")
         a(class="navbar-link") {{$t('clients')}}
         div(class="navbar-dropdown")
           //- a(class="navbar-item") {{$t('add')}}
           router-link(to="/clients", class="navbar-item") {{$t('list')}}
        div(class="navbar-item has-dropdown is-hoverable")
           a(class="navbar-link") {{$t('users')}}
           div(class="navbar-dropdown")
             a(class="navbar-item")
              user-form
             router-link(to="/users", class="navbar-item") {{$t('list')}}
        div(class="navbar-item has-dropdown is-hoverable")
          a(class="navbar-link") {{user.username}}
          div(class="navbar-dropdown")
            a(class="navbar-item", v-on:click="salir") Salir
        div(class="navbar-item") 
          a(class="navbar-item" href="#", v-on:click="buscador=true") Buscador
          
          
      .navbar-end
        .navbar-item
          .field.has-addons
            .control.has-icons-left
              input.input.is-rounded(placeholder="", v-model="telefono")
              span.icon.is-small.is-left
                i.fa.fa-phone
            .control      
              button.is-info.button(v-on:click="buscar")
                i.fa.fa-search 
             
                
  .modal(:class="{ 'is-active': buscador }")
    .modal-background
    .modal-card
      header.modal-card-head
        p.modal-card-title Buscador
        button.delete(aria-label="close", v-on:click="buscador=false")
      section(class="modal-card-body")
        .control
          label.radio(v-for="buscador in buscadorFields")
            input(type="radio" v-model="buscadorField" :value="buscador.field")
            |  {{buscador.label}}
        .control
          label.label Buscar
          input.input(type="text" v-model="q")

      footer.modal-card-foot
        button(class="button is-success" v-on:click="buscarGeneral") Buscar
        button(class="button", v-on:click="buscador=false") Cancelar


</template>

<script>
import { unsetToken } from '~/utils/auth'
import UserForm from '~/components/users/form'
export default {
  components: {UserForm},
  data () {
    return {
      telefono: null,
      buscador: false,
      buscadorField: null,
      q: null,
      buscadorFields: [
        {
          label: 'Deudor',
          field: 'deudor'
        },
        {
          label: 'Nro Empresa',
          field: 'nroemp'
        },
        {
          label: 'Razon/Nom',
          field: 'apenom'
        },
        {
          label: 'CUIT',
          field: 'cuitdoc'
        },
        {
          label: 'Localidad',
          field: 'localidad1'
        },
        {
          label: 'Contacto',
          field: 'contacto'
        },
        {
          label: 'Tel Emp 1',
          field: 'telemp1'
        },
        {
          label: 'Tel Emp 2',
          field: 'telemp2'
        },
        {
          label: 'Telefono 1',
          field: 'telefono1'
        },
        {
          label: 'Telefono 2',
          field: 'telefono2'
        },
        {
          label: 'Telefono 3',
          field: 'telefono3'
        }

      ]
    }
  },
  computed: {
    user () {
      return this.$store.getters['GET_USER']
    }
  },
  mounted () {
    let telefono = this.$route.query.telefono
    if (telefono !== undefined) this.telefono = telefono
  },
  methods: {
    buscar () {
      this.$router.push({ name: 'clients', query: { telefono1: this.telefono } })
      if (this.$router.currentRoute.name === 'clients') this.$router.go('/clients')
    },
    changeLanguage (lang) {
      this.$i18n.locale = lang
    },
    buscarGeneral () {
      let query = {}
      query[this.buscadorField] = this.q
      this.buscador = false
      this.$router.push({ name: 'clients', query: query })
      if (this.$router.currentRoute.name === 'clients') this.$router.go('/clients')
    },
    salir () {
      unsetToken()
      this.$router.push('/')
    }
  }

}
</script>

<style>

</style>
