<template lang="pug">
div
  password(:user-id="userIdPassword", v-on:close="setUserIdPassword(null)")
  notification(:error="notification.error", :success="notification.success", :showMessage="notification.showMessage", v-on:close="notification.showMessage=false")
    span(v-for="message in notification.message")
      p(v-text="message")
  permissons-form(:user-id="userId", :is-active="showModalPermissons", v-on:close="closeModalPermissons")
  CustomMenu
  section(class="hero is-small is-primary is-bold")
    .hero-body
      .container
        h1(class="title") Usuarios
  user-form(:button="true", class="user-form", v-on:userCreated="userCreated")
  table(class="table is-bordered is-striped is-narrow")
    thead
      tr
        th Nombre de Usuario
        th Nombre
        th Apellido
        th Email
        th Activo
        th Fecha de Creación
        th Ultimo Login
        th Acciones
    tbody
      tr(v-for='user in users')
        td {{user.username}}
        td {{user.first_name}}
        td {{user.last_name}}
        td {{user.email}}
        td
          .field
            input.switch.is-rounded(type='checkbox', :id="user.username+90" , v-model='user.is_active', :disabled="sameUser(user)" ,v-on:click="changeActive(user)")
            label(:for='user.username+90')
        td {{user.date_joined}}
        td {{user.last_login}}
        td
          i.fa.fa-list(v-on:click="showPermissons(user.id)")
          i.fa.fa-lock(v-on:click="setUserIdPassword(user.id)")
  div.columns
    div.is-4
      nav.pagination(role="navigation" aria-label="pagination")
        a.pagination-previous(v-if="hasPreviousPage", @click="navigate(previous)") Anterior
        a.pagination-next(v-if="hasNextPage", @click="navigate(next)") Siguiente

</template>
<script>
  import UserService from '~/services/UserService'
  import CustomMenu from '~/components/Menu'
  import UserForm from '~/components/users/form'
  import Password from '~/components/users/password'
  import PermissonsForm from '~/components/users/permissons'
  import {getQueryVariable} from '~/utils/parsers'
  import Notification from '~/components/Notification'
  let userService = new UserService()
  export default {
    components: {CustomMenu, UserForm, Notification, PermissonsForm, Password},
    data () {
      return {
        userIdPassword: null,
        showModalPermissons: false,
        userId: null,
        notification: {
          error: false,
          success: false,
          message: ['hola mundo'],
          showMessage: false
        }
      }
    },
    computed: {
      hasPreviousPage () {
        return this.previous != null
      },
      hasNextPage () {
        return this.next != null
      },
      currentUser () {
        return this.$store.getters['GET_USER']
      }
    },
    methods: {
      navigate (page) {
        page = (page === 0) ? 1 : page
        let params = { params: {page} }
        this.getData(params)
      },
      userCreated (user) {
        this.users.push(user)
      },
      sameUser (user) {
        let check = (user.id === this.currentUser.user_id)
        return check
      },
      getData (obj) {
        userService.index(obj).then((data) => {
          this.users = data.data.results
          this.previous = getQueryVariable(data.data.previous, 'page')
          this.next = getQueryVariable(data.data.next, 'page')
        })
      },
      setUserIdPassword (userId) {
        this.userIdPassword = userId
      },
      closeModalPermissons () {
        this.showModalPermissons = false
      },
      showPermissons (id) {
        this.userId = id
        this.showModalPermissons = true
      },
      changeActive (user) {
        let id = user.id
        this.notification.success = false
        this.notification.message = []
        this.notification.showMessage = false
        this.notification.error = false
        userService.update(id, {'is_active': user.is_active}).then((data) => {
          this.notification.success = true
          this.notification.message = ['Usuario actualizado']
          this.notification.showMessage = true
        }).catch((err) => {
          user.is_active = !user.is_active
          this.notification.error = true
          this.notification.message = err.data
          this.notification.showMessage = true
        })
      }
    },
    asyncData () {
      return userService.index().then((data) => {
        return {
          users: data.data.results,
          previous: getQueryVariable(data.data.previous, 'page'),
          next: getQueryVariable(data.data.next, 'page')
        }
      }).catch((err) => {
        console.log(err)
      })
    }
  }
</script>
<style scoped="">
  .user-form {
    margin-top: 5px;
    margin-bottom: 5px;
  }
  .fa {
    margin-right: 5px;
  }
</style>
