Vue.component('my-heading', {
  render: function (createElement) {
    return createElement('h' + this.level, this.$slots.default)
  },
  props: [ 'level' ]
})

var app = new Vue({
  el: '#app',
})
