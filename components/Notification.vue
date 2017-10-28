<template lang="pug">
  .notification(:class="{'is-danger': error, 'is-success': success} ", v-if="showMessage")
    button.delete(v-on:click="close")
    slot
</template>
<script>
  export default {
    props: {
      isActive: false,
      error: false,
      success: false,
      showMessage: false,
      timer: 3000
    },
    methods: {
      close () {
        this.$emit('close')
      }
    }
  }
</script>
<style scoped>
  .notification {
    float: right;
    min-width: 250px;
    position: fixed;
    top: 0px;
    right: 0;
    z-index: 9999;
  }
</style>
