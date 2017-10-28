<template lang="pug">
nav(class="navbar is-grey")
  .navbar-brand
    a(class="navbar-item") {{$t('title')}}
    div(class="navbar-burger burger", data-target="navMenuExample")
  div(id="navbar-item",class="navbar-menu")
    div(class="navbar-start")
      div(class="navbar-item has-dropdown is-hoverable")
       a(class="navbar-link") {{$t('clients')}}
       div(class="navbar-dropdown")
         a(class="navbar-item") {{$t('add')}}
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









</template>

<script>
import { unsetToken } from '~/utils/auth'
import UserForm from '~/components/users/form'
export default {
  components: {UserForm},
  computed: {
    user () {
      return this.$store.getters['GET_USER']
    }
  },
  methods: {
    changeLanguage (lang) {
      this.$i18n.locale = lang
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
