var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello!',
    msg1: '',
    msg2: ''
  }
});

app.message = 'Bye!'
console.log(app.$el.textContent);
Vue.nextTick(function() {
  console.log(app.$el.textContent);
})
