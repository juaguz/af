<template lang="pug">

section(class="hero is-fullheight is-grey")
  .hero-body
    .container
      .columns(class="login")
        .column(class="is-4")
          figure(class="image is-360x360")
           img(src='/anamaya.svg')
        .column(class="is-6")
          h1(class="title") {{$t('title')}}
          form(v-on:submit.prevent="auth")
            .field
              label(class="label") {{$t('user')}}
              p(class="control has-icons-left")
                input(class="input",type="text", autofocus,ref="username", v-model="form.username")
                span(class="icon is-small is-left")
                  i(class="fa fa-user")
            .field
              label(class="label") {{$t('password')}}
              p(class="control has-icons-left")
                input(class="input",type="password", v-model="form.password")
                span(class="icon is-small is-left")
                  i(class="fa fa-lock")

            .control
              button(class="button is-primary" type="submit") {{$t('login')}}
</template>

<script>
import AuthService from '~/services/AuthService'
let authService = new AuthService()
export default {
  components: {
  },
  data () {
    return {
      form: {
        username: null,
        password: null
      }
    }
  },
  methods: {
    auth () {
      authService.auth(this.form.username, this.form.password).then((data) => {
        this.$router.push('clients')
      }).catch((err) => {
        console.log(err)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/css/variables.scss";
.title{
  color: $white;
}
</style>
