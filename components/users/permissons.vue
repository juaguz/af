<template lang="pug">
  div
    .modal(:class="{ 'is-active': isActive }")
      .modal-background
      .modal-card
        header.modal-card-head
          p.modal-card-title Permisos
          button.delete(aria-label="close", v-on:click="close")
        section(class="modal-card-body")
          notification(:error="error", :success="success", :showMessage="showMessage", v-on:close="showMessage=false") {{message}}
          div.permisson(v-for="permisson in permissons")
            input.switch.is-rounded(type='checkbox', :id="permisson.id+901", v-model="user.permissons[permissons.id]")
            label(:for='permisson.id+901') {{ permisson.description }}

        footer.modal-card-foot
          button(class="button is-success", v-on:click="guardar") Guardar
          button(class="button", v-on:click="close") Cancelar

</template>
<script>
  import PermissonsService from '~/services/PermissonsService'
  import UserPermissonsService from '~/services/UserPermissonsService'
  import Notification from '~/components/Notification'
  let permissonsService = new PermissonsService()
  let userPermissonsService = new UserPermissonsService()
  export default {
    components: {Notification},
    watch: {
      userId (newValue) {
        this.getUserPermissons()
      }
    },
    mounted () {
      return permissonsService.index().then((data) => {
        this.permissons = data.data
      }).catch((err) => { console.log(err) })
    },
    props: {
      'isActive': {
        'default': false
      },
      'userId': {
        'required': true
      }
    },
    methods: {
      close () {
        this.$emit('close')
      },
      getUserPermissons () {
        userPermissonsService.index({user: this.userId}).then((data) => {
          this.user.permissons = data.data
        }).catch((err) => {
          console.log(err)
        })
      },
      guardar () {}
    },
    data () {
      return {
        user: {
          permissons: {}
        },
        permissons: null,
        checked: true,
        error: false,
        success: false,
        message: null,
        showMessage: false,
        errors: {'username': [], 'password': []}
      }
    }
  }
</script>
<style scoped>
  .permisson {
    margin-bottom: 5px;
  }
</style>
