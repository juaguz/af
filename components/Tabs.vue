<template lang="pug">
div
  .tabs(class="is-boxed")
    ul
      li(v-for='tab in tabs', :class="{ 'is-active': tab.isActive }")
        a(:href='tab.href', @click='selectTab(tab)') 
          span.icon.is-small(v-if="tab.icon")
            i(class="fa" :class="tab.icon")
          span {{ tab.name }}

        
  .tabs-details
    slot
</template>
<script>
export default {
  data () {
    return {
      tabs: []
    }
  },

  created () {
    this.tabs = this.$children
  },

  methods: {
    selectTab (selectedTab) {
      this.tabs.forEach(tab => {
        tab.isActive = (tab.href === selectedTab.href)
      })
    }
  }
}
</script>
<style lang="scss">
</style>