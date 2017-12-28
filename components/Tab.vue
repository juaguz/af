<template lang="pug">
  div(v-show='isActive')
    slot
</template>
<script>
export default {
  props: {
    name: {
      required: true
    },
    selected: {
      default: false
    },
    icon: {
      required: false,
      default: null
    }
  },
  data () {
    return {
      isActive: false
    }
  },

  computed: {
    href () {
      return '#' + this.name.toLowerCase().replace(/ /g, '-')
    }
  },
  mounted () {
    this.isActive = this.selected
  },
  watch: {
    isActive () {
      if (this.isActive === true) this.$emit('active')
    }
  }
}
</script>
<style lang="scss">
	
</style>