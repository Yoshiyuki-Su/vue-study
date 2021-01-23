Vue.filter('toupper', function(value) {
  return value.toUpperCase()
})
var app = new Vue({
  el: '#app',
  data: { message: 'Hello!' }
})
