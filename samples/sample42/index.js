var MyElement = Vue.extend({
  props: [ 'message' ],
  template: '<div>{{ message }}</div>'
})
var vm = new MyElement({
  propsData: { message: 'Hello!!!!!!!!!' }
}).$mount('#eltest');

var app = new Vue({
  el: '#app'
})
