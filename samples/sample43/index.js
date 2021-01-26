var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello!!!'
  },
  computed: {
    upperMessage: function() {
      return this.message.toUpperCase();
    }
  }
})
