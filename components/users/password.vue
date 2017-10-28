<template lang="pug">
  div
    .modal(:class="{ 'is-active': isActive }")
      .modal-background
      .modal-card
        header.modal-card-head
          p.modal-card-title Password
          button.delete(aria-label="close", v-on:click="close")
        section(class="modal-card-body")
          notification(:error="error", :success="success", :showMessage="showMessage", v-on:close="showMessage=false") {{message}}
          .control
            input.input(type='password', placeholder='Password', v-model="password")
            p(class="help is-danger", v-for="err in errors.password") {{err}}
        footer.modal-card-foot
          button(class="button is-success", v-on:click="guardar") Guardar
          button(class="button", v-on:click="close") Cancelar

</template>
<script>
  import Notification from '~/components/Notification'
  import UserService from '~/services/UserService'
  let userService = new UserService()
  export default {
    components: {Notification},
    watch: {
      userId (newValue) {
        if (newValue === null) return
        this.isActive = true
      }
    },
    props: {
      'userId': {
        'required': true
      }
    },
    methods: {
      close () {
        this.isActive = false
        this.$emit('close')
      },
      guardar () {
        userService.update(this.userId, {password: this.password}).then((data) => {
          this.showMessage = true
          this.success = true
          this.message = 'Password cambiada correctamente'
          this.password = null
        }).catch((err) => {
          this.errors = err.data
        })
      }
    },
    data () {
      return {
        isActive: false,
        password: null,
        permissons: null,
        checked: true,
        error: false,
        success: false,
        message: null,
        showMessage: false,
        errors: {'password': []}
      }
    }
  }
</script>
<style scoped>
  .permisson {
    margin-bottom: 5px;
  }
</style>
