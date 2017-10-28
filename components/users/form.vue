<template lang="pug">
div

  span(v-if="!button", v-on:click="shiftModal(true)") {{$t('add')}}
  button.button(v-if="button", v-on:click="shiftModal(true)") {{$t('add')}}
  .modal(:class="{ 'is-active': isActive }")
    .modal-background
    .modal-card
      header.modal-card-head
        p.modal-card-title Agregar Usuario
        button.delete(aria-label="close", v-on:click="shiftModal(false)")
      section(class="modal-card-body")
        notification(:error="error", :success="success", :showMessage="showMessage", v-on:close="showMessage=false") {{message}}

        .field
          label.label Nombre de Usuario
          .control
            input.input(type='text', placeholder='Nombre de Usuario', v-model="user.username")
            p(class="help is-danger", v-for="err in errors.username") {{err}}

        .field
          label.label Nombre
          .control
            input.input(type='text', placeholder='Nombre', v-model="user.name")

        .field
          label.label Apellido
          .control
            input.input(type='text', placeholder='Apellido', v-model="user.apellido")

        .field
          label.label Email
          .control
            input.input(type='text', placeholder='Email', v-model="user.email")

        .field
          label.label Password
          .control
            input.input(type='password', placeholder='Password', v-model="user.password")
            p(class="help is-danger", v-for="err in errors.password") {{err}}


      footer.modal-card-foot
        button(class="button is-success", v-on:click="guardar") Guardar
        button(class="button", v-on:click="shiftModal(false)") Cancelar

</template>
<script>
import UserService from '~/services/UserService'
import Notification from '~/components/Notification'
let userService = new UserService()
export default {
  components: {Notification},
  props: {'button': {
    'default': false
  }},
  methods: {
    shiftModal (show) {
      console.log(show)
      this.isActive = show
    },
    guardar () {
      this.errors = {}
      userService.store(this.user).then((data) => {
        this.user = {}
        this.$emit('userCreated', data.data)
      }).catch((err) => {
        this.errors = err.data
        this.message = 'Ocurrio un error al crear el usuario'
        this.showMessage = true
        this.error = true
      })
    }
  },
  mounted () {

  },
  data () {
    return {
      isActive: false,
      user: {},
      error: false,
      success: false,
      message: null,
      showMessage: false,
      errors: {'username': [], 'password': []}
    }
  }
}
</script>
