import Vue from 'vue'
import BulmaDatepicker from 'vue-bulma-datepicker'
var VDatepicker = Vue.extend({
  mixins: [BulmaDatepicker]
})

Vue.component('datepicker', VDatepicker)

// Vue.use('datepicker', Datepicker.extend({
//   props: {
//     alignment: String,
//     config: {
//       type: Object,
//       default: () => ({})
//     }
//   },
//   mounted () {
//     alert('alert from datepicker')
//     if (!this.datepicker) {
//       this.config.onValueUpdate = this.dateUpdated
//       this.datepicker = new Flatpickr(this.$el, this.config)
//       this.setDate(this.value)
//     }
//     this.$watch('config', this.redraw)
//     this.$watch('value', this.setDate)
//   }
// }))
