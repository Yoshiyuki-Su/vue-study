var MyComponent = Vue.extend({
  template: '<strong>Hello!!!!!!!!</strong>'
})
Vue.component('my-component', MyComponent)

var app = new Vue({
  el: '#app',
});
