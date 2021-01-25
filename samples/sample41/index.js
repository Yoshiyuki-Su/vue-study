Vue.component('my-element', {
  props: [ 'value' ],
  template: '<div>{{ value }}</div>'
})
var app = new Vue({
  el: '#app'
})
