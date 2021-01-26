var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello!'
  },
  methods: {
    toUpper: function() {
      this.message = this.message.toUpperCase();
    },
    toLower: function() {
      this.message = this.message.toLowerCase();
    }    
  }
})
